/* eslint-disable prettier/prettier */
import { gsap } from 'gsap';

const headerTimeline = gsap.timeline({
  defaults: {
    duration: 1,
    ease: 'back.out(1.4)',
  },
});

// add header items animations and labels to the timeline
headerTimeline
  .addLabel('navLink')
  .from(
    '.nav-link',
    {
      y: -100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.5,
    },
    '+=1',
  )
  .addLabel('navbarLogo')
  .from(
    '.navbar-brand',
    {
      scale: 0,
    },
    '-=1',
  )
  .addLabel('headTitle')
  .from(
    '.head-title-anime',
    {
      x: 800,
      stagger: 0.8,
      ease: 'slow(0.7, 0.7, false)',
    },
    '-=.5',
  )
  .addLabel('slider')
  .from('.slider-wrapper', {
    opacity: 0,
    duration: 2,
  })
  .from(
    '.slider__items',
    {
      opacity: 0,
      scaleY: 0,
      stagger: 0.8,
    },
    '-=2',
  )
  .addLabel('end');
