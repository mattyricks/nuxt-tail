export const typing = () => {
  this.$gsap.to('.cursor', {
    opacity: 0,
    ease: 'power2.inOut',
    repeat: -1,
  })

  const boxTl = this.$gsap.timeline()

  boxTl
    .to('h6', {
      duration: 1,
      width: '17vw',
      delay: 0.5,
      ease: 'power4.inOut',
    })
    .from('.hi', {
      duration: 1,
      y: '7vw',
      ease: 'power3.out',
      onComplete: () => masterTl.play(),
    })
    .to('h6', {
      durtion: 1,
      height: '7vw',
      ease: 'elastic.out',
    })
    .to('.h6', {
      duration: 2,
      autoAlpha: 0.5,
      yoyo: true,
      repeat: -1,
    })

  const masterTl = this.$gsap
    .timeline({
      repeat: -1,
    })
    .pause()

  this.words.forEach((word) => {
    const tl = this.$gsap.timeline({
      repeat: 1,
      yoyo: true,
      repeatDelay: 1,
    })
    tl.to('.text', {
      duration: 1,
      text: word,
    })
    masterTl.add(tl)
  })
}
