import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const createScrollAnimation = (selector: string, properties: gsap.TweenVars, trigger: string) => {
  gsap.to(selector, {
    ...properties,
    scrollTrigger: {
      trigger,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  });
};

export const createFromToAnimation = (selector: string, fromVars: gsap.TweenVars, toVars: gsap.TweenVars, trigger: string) => {
  gsap.fromTo(selector, fromVars, {
    ...toVars,
    scrollTrigger: {
      trigger,
      start: 'top top',
      end: 'top+=150 top',
      scrub: true,
    },
  });
}; 