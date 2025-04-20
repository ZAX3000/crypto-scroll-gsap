import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import throttle from '../utils/throttle';
import { createScrollAnimation, createFromToAnimation } from '../utils/gsapAnimations';

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimations = () => {
  useEffect(() => {
    createScrollAnimation('.animate-item', { opacity: 1, duration: 1, stagger: 0.2 }, '.min-h-screen');
    createScrollAnimation('body', { backgroundColor: '#000' }, '.min-h-screen');
    createScrollAnimation('.logo', { opacity: 1 }, '.min-h-screen');
    createScrollAnimation('.lorem-text', { color: '#fff' }, '.min-h-screen');
    createScrollAnimation('.animate-item.bg-white', { backgroundColor: '#000' }, '.min-h-screen');
    createScrollAnimation('.animate-item', { borderColor: '#000' }, '.min-h-screen');
    createScrollAnimation('.text-sm', { opacity:1, color: '#fff' }, '.min-h-screen');
    createScrollAnimation('nav svg path', { stroke: '#fff' }, '.min-h-screen');
    createScrollAnimation('video', { opacity: 0.5, filter: 'grayscale(20%)' }, '.min-h-screen');
    createScrollAnimation('.main-heading', { opacity: 0 }, '.min-h-screen');

    createFromToAnimation('.menu-text', { opacity: 0, x: 0 }, { opacity: 1, x: 1 }, '.min-h-screen');

    gsap.to('.video-container video', {
      scrollTrigger: {
        trigger: '.min-h-screen',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onEnter: () => {
          const videoElement = document.querySelector('.video-container video') as HTMLVideoElement;
          if (videoElement) {
            videoElement.src = '/dark-looped_compressed.mp4';
            videoElement.load();
            videoElement.play();
          }
        },
      },
    });

    const handleScroll = throttle(() => {
      const logo = document.querySelector('.logo') as HTMLImageElement | null;
      if (logo) {
        if (window.scrollY > 50) {
          logo.src = '/logo2.png';
        } else {
          logo.src = '/logo.png';
        }
      }
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useScrollAnimations; 