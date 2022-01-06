export const horizontalSnap = () => {
  const gsap = this.$gsap
  const sections = gsap.utils.toArray('.panel')

  gsap.to(sections, {
    yPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.contain',
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: '+=3500',
    },
  })
}
