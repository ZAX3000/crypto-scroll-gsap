import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import throttle from '../utils/throttle';
import { createScrollAnimation, createFromToAnimation } from '../utils/gsapAnimations';

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimations = () => {
  useEffect(() => {
    // existing scroll/fade calls —
    createScrollAnimation('.animate-item',          { opacity: 1, duration: 1, stagger: 0.2 }, '.min-h-screen');
    createScrollAnimation('body',                   { backgroundColor: '#000' },              '.min-h-screen');
    createScrollAnimation('.logo',                  { opacity: 1 },                          '.min-h-screen');
    createScrollAnimation('.lorem-text',            { color: '#fff' },                       '.min-h-screen');
    createScrollAnimation('.animate-item.bg-white', { backgroundColor: '#000' },            '.min-h-screen');
    createScrollAnimation('.animate-item',          { borderColor: '#000' },                 '.min-h-screen');
    createScrollAnimation('.text-sm',               { opacity:1, color: '#fff' },            '.min-h-screen');
    createScrollAnimation('nav svg path',           { stroke: '#fff' },                      '.min-h-screen');
    createScrollAnimation('video',                  { opacity: 0.5, filter: 'grayscale(20%)' }, '.min-h-screen');
    createScrollAnimation('.main-heading',          { opacity: 0 },                         '.min-h-screen');

    createFromToAnimation('.menu-text', { opacity: 0, x: 0 }, { opacity: 1, x: 1 }, '.min-h-screen');

    gsap.to('.video-container video', {
      scrollTrigger: {
        trigger: '.min-h-screen',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onEnter: () => {
          const video = document.querySelector('.video-container video') as HTMLVideoElement;
          if (video) {
            video.src = '/dark-looped_compressed.mp4';
            video.load();
            video.play();
          }
        },
      },
    });

    // — stats section count‑up + label animation —
    document.querySelectorAll<HTMLElement>('.stat-item').forEach((item) => {
      const numEl   = item.querySelector<HTMLElement>('.stat-number')!;
      const labelEl = item.querySelector<HTMLElement>('.stat-label')!;
      const target  = parseFloat(numEl.dataset.target!);

      // count up the number
      gsap.fromTo(
        numEl,
        { innerText: 0 },
        {
          innerText: target,
          duration: 1.5,
          ease: 'power1.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            // a trailing plus for “1200+”
            if (numEl.dataset.plus === 'true' && !numEl.innerText.endsWith('+')) {
              numEl.innerText = numEl.innerText + '+';
            }
          }
        }
      );

      // fade/slide the label in
      gsap.from(labelEl, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 82%',
        }
      });
    });

    // throttled logo swap
    const handleScroll = throttle(() => {
      const logo = document.querySelector('.logo') as HTMLImageElement | null;
      if (logo) {
        logo.src = window.scrollY > 50 ? '/logo2.png' : '/logo.png';
      }
    }, 200);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useScrollAnimations;