/* eslint-disable prettier/prettier */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const locationTimeline = gsap.timeline({
  defaults: {
    duration: 1.5,
    ease: 'back.out(1)',
  },
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: '.location > section', // selector or element
    start: 'top bottom', // [trigger] [scroller] positions
    end: 'top top', // [trigger] [scroller] positions
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    // toggleActions: "play pause resume reset",
    // markers: true, // only during development!

    snap: {
      snapTo: 'labels', // snap to the closest label in the timeline
      duration: {
        min: 0.2,
        max: 3,
      }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      delay: 1, // wait 1 seconds from the last scroll event before doing the snapping
      ease: 'power1.inOut', // the ease of the snap animation ("power3" by default)
    },
  },
});

// add main items animations and labels to the timeline
locationTimeline
  .addLabel('location')
  .to(
    '.location__description .address',
    {
      //replaces word-by-word yourElement's text over the course of 5 seconds because the delimiter is " " (a space)
      text: {
        value: `
        تهران میدان آزادی بالاتر از میدان انقلاب جنب پمپ بنزین برادران اکبری به جز اصغر پلاک 999
        `,
        delimiter: ' ',
      },
      fontSize: '1rem',
      duration: 5,
      ease: 'none',
    },
    '-=1',
  )
  .from(
    '.location__map > iframe',
    {
      x: -200,
      scale: 0,
      ease: 'slow(0.7, 0.7, false)',
    },
    '-=1',
  )
  .addLabel('end');
