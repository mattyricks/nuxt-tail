<template>
  <div>
    <div class="gallery">
      <ul class="cards flex">
        <li
          v-for="(icon, index) in logos"
          :key="icon.key"
          :data-index="index"
          class="list-none flex items-center justify-center"
        >
          <div class="flex flex-col items-center justify-center">
            <img class="h-40 w-40" :src="icon" />
          </div>
        </li>
      </ul>

      <div class="actions">
        <button class="prev">Prev</button>
        <button class="next">Next</button>
      </div>
    </div>

    <div class="drag-proxy"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'

export default {
  data() {
    return {
      logos: {
        vue: require('../assets/logo.png'),
        react: require('../assets/images/react-logo.svg'),
        aws: require('../assets/images/aws-logo.png'),
        graphQl: require('../assets/images/graphql-logo.svg'),
        express: require('../assets/images/express-logo.png'),
        nuxt: require('../assets/images/nuxt.png'),
        next: require('../assets/images/next-logo.svg'),
        mongo: require('../assets/images/mongodb-logo.svg'),
        redux: require('../assets/images/redux-logo.svg'),
        node: require('../assets/images/node-logo.svg'),
      },
    }
  },
  mounted: () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(Draggable)

    let iteration = 0 // gets iterated when we scroll all the way to the end or start and wraps around - allows us to smoothly continue the playhead scrubbing in the correct direction.

    // set initial state of items
    gsap.set('.panel-tech li', { xPercent: 400, opacity: 0, scale: 0 })

    const spacing = 0.1 // spacing of the cards (stagger)
    const snapTime = gsap.utils.snap(spacing) // we'll use this to snapTime the playhead on the seamlessLoop
    const cards = gsap.utils.toArray('.cards li')

    // this function will get called for each element in the buildSeamlessLoop() function, and we just need to return an animation that'll get inserted into a master timeline, spaced
    const animateFunc = (element) => {
      const tl = gsap.timeline()

      tl.fromTo(
        element,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          zIndex: 100,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: 'power1.in',
          immediateRender: false,
        }
      ).fromTo(
        element,
        { xPercent: 400 },
        { xPercent: -400, duration: 1, ease: 'none', immediateRender: false },
        0
      )
      return tl
    }

    const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc)
    const playhead = { offset: 0 } // a proxy object we use to simulate the playhead position, but it can go infinitely in either direction and we'll just use an onUpdate to convert it to the corresponding time on the seamlessLoop timeline.
    const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration()) // feed in any offset (time) and it'll return the corresponding wrapped time (a safe value between 0 and the seamlessLoop's duration)
    const scrub = gsap.to(playhead, {
      // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
      offset: 0,
      onUpdate() {
        seamlessLoop.time(wrapTime(playhead.offset)) // convert the offset to a "safe" corresponding time on the seamlessLoop timeline
      },
      duration: 0.5,
      ease: 'power3',
      paused: true,
    })

    const trigger = ScrollTrigger.create({
      start: 0,
      onUpdate(self) {
        const scroll = self.scroll()
        if (scroll > self.end - 1) {
          wrap(1, 1)
        } else if (scroll < 1 && self.direction < 0) {
          wrap(-1, self.end - 1)
        } else {
          scrub.vars.offset =
            (iteration + self.progress) * seamlessLoop.duration()
          scrub.invalidate().restart() // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
        }
      },
      end: '+=3000',
      pin: '.gallery',
    })

    // converts a progress value (0-1, but could go outside those bounds when wrapping) into a "safe" scroll value that's at least 1 away from the start or end because we reserve those for sensing when the user scrolls ALL the way up or down, to wrap.
    const progressToScroll = (progress) =>
      gsap.utils.clamp(
        1,
        trigger.end - 1,
        gsap.utils.wrap(0, 1, progress) * trigger.end
      )

    const wrap = (iterationDelta, scrollTo) => {
      iteration += iterationDelta
      trigger.scroll(scrollTo)
      trigger.update() // by default, when we trigger.scroll(), it waits 1 tick to update().
    }

    // when the user stops scrolling, snap to the closest item.
    ScrollTrigger.addEventListener('scrollEnd', () =>
      scrollToOffset(scrub.vars.offset)
    )

    // feed in an offset (like a time on the seamlessLoop timeline, but it can exceed 0 and duration() in either direction; it'll wrap) and it'll set the scroll position accordingly. That'll call the onUpdate() on the trigger if there's a change.
    function scrollToOffset(offset) {
      // moves the scroll playhead to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
      const snappedTime = snapTime(offset)
      const progress =
        (snappedTime - seamlessLoop.duration() * iteration) /
        seamlessLoop.duration()
      const scroll = progressToScroll(progress)
      if (progress >= 1 || progress < 0) {
        return wrap(Math.floor(progress), scroll)
      }
      trigger.scroll(scroll)
    }

    document
      .querySelector('.next')
      .addEventListener('click', () =>
        scrollToOffset(scrub.vars.offset + spacing)
      )

    document
      .querySelector('.prev')
      .addEventListener('click', () =>
        scrollToOffset(scrub.vars.offset - spacing)
      )

    function buildSeamlessLoop(items, spacing, animateFunc) {
      const rawSequence = gsap.timeline({ paused: true }) // this is where all the "real" animations live
      const seamlessLoop = gsap.timeline({
        // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
        paused: true,
        repeat: -1, // to accommodate infinite scrolling/looping
        onRepeat() {
          // works around a super rare edge case bug that's fixed GSAP 3.6.1
          this._time === this._dur && (this._tTime += this._dur - 0.01)
        },
        onReverseComplete() {
          this.totalTime(this.rawTime() + this.duration() * 100) // seamless looping backwards
        },
      })
      const cycleDuration = spacing * items.length

      // the duration of just one animateFunc() (we'll populate it in the .forEach() below...
      let dur
      // loop through 3 times so we can have an extra cycle at the start and end - we'll scrub the playhead only on the 2nd cycle
      items
        .concat(items)
        .concat(items)
        .forEach((item, i) => {
          const anim = animateFunc(items[i % items.length])
          rawSequence.add(anim, i * spacing)
          dur || (dur = anim.duration())
        })

      // animate the playhead linearly from the start of the 2nd cycle to its end (so we'll have one "extra" cycle at the beginning and end)
      seamlessLoop.fromTo(
        rawSequence,
        {
          time: cycleDuration + dur / 2,
        },
        {
          time: '+=' + cycleDuration,
          duration: cycleDuration,
          ease: 'none',
        }
      )
      return seamlessLoop
    }

    // below is the dragging functionality (mobile-friendly too)...
    Draggable.create('.drag-proxy', {
      type: 'x',
      trigger: '.cards',
      onPress() {
        this.startOffset = scrub.vars.offset
      },
      onDrag() {
        scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001
        scrub.invalidate().restart() // same thing as we do in the ScrollTrigger's onUpdate
      },
      onDragEnd() {
        scrollToOffset(scrub.vars.offset)
      },
    })
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  background: offwhite;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  overflow-y: hidden;
}
.gallery {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.cards {
  position: absolute;
  width: 14rem;
  height: 18rem;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cards li {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 14rem;
  height: 18rem;
  text-align: center;
  line-height: 18rem;
  font-size: 2rem;
  font-family: sans-serif;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.8rem;
}

.actions {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
}

button {
  display: inline-block;
  outline: none;
  border: none;
  padding: 8px 14px;
  background: #414141;
  background-image: -webkit-linear-gradient(top, #575757, #414141);
  background-image: -moz-linear-gradient(top, #575757, #414141);
  background-image: -ms-linear-gradient(top, #575757, #414141);
  background-image: -o-linear-gradient(top, #575757, #414141);
  background-image: linear-gradient(to bottom, #575757, #414141);
  text-shadow: 0px 1px 0px #414141;
  -webkit-box-shadow: 0px 1px 0px 414141;
  -moz-box-shadow: 0px 1px 0px 414141;
  box-shadow: 0px 1px 0px 414141;
  color: #ffffff;
  text-decoration: none;
  margin: 0 auto 10px;
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;
  padding: 12px 25px;
  font-family: 'Signika Negative', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  font-size: 13px;
  line-height: 18px;
}

button:hover {
  background: #57a818;
  background-image: -webkit-linear-gradient(top, #57a818, #4d9916);
  background-image: -moz-linear-gradient(top, #57a818, #4d9916);
  background-image: -ms-linear-gradient(top, #57a818, #4d9916);
  background-image: -o-linear-gradient(top, #57a818, #4d9916);
  background-image: linear-gradient(to bottom, #57a818, #4d9916);
  text-shadow: 0px 1px 0px #32610e;
  -webkit-box-shadow: 0px 1px 0px fefefe;
  -moz-box-shadow: 0px 1px 0px fefefe;
  box-shadow: 0px 1px 0px fefefe;
  color: #ffffff;
  text-decoration: none;
}

button {
  font-size: 20px;
  font-weight: 400;
}

a {
  color: #88ce02;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.drag-proxy {
  visibility: hidden;
  position: absolute;
}
</style>
