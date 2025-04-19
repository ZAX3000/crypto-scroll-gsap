import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    gsap.to('.animate-item', { opacity: 1, duration: 1, stagger: 0.2 });

    gsap.to('body', {
      backgroundColor: '#000',
      scrollTrigger: {
        trigger: '.min-h-screen',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    gsap.to('.logo', {
      opacity: 0,
      scrollTrigger: {
        trigger: '.min-h-screen',
        start: 'top top',
        end: 'top center',
        scrub: true,
      },
    });

    gsap.fromTo('.logo',
      { opacity: 1, filter: 'invert(0)' },
      {
        opacity: 1,
        filter: 'invert(0)',
        scrollTrigger: {
          trigger: '.min-h-screen',
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    gsap.to('.lorem-text', {
      color: '#fff',
      scrollTrigger: {
        trigger: '.min-h-screen',
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to('.animate-item.bg-white', {
      backgroundColor: '#000',
      scrollTrigger: {
        trigger: '.min-h-screen',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    gsap.to('.animate-item', {
      borderColor: '#000',
      scrollTrigger: {
        trigger: '.min-h-screen',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    gsap.to('.text-sm', {
      color: '#fff',
      scrollTrigger: {
        trigger: '.min-h-screen',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    gsap.to('nav svg path', {
      stroke: '#fff',
      scrollTrigger: {
        trigger: '.min-h-screen',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    gsap.to('video', {
      opacity: 0.5,
      filter: 'grayscale(10%)',
      scrollTrigger: {
        trigger: '.min-h-screen',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    gsap.fromTo('.text-container h1',
      { x: '0%', textAlign: 'left', color: '#000' },
      {
        x: 'calc(100vw - 100% - 40px)', 
        textAlign: 'right',
        color: '#aaa',
        scrollTrigger: {
          trigger: '.min-h-screen',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: self => {
            const menuButton = document.querySelector('button[aria-label="Toggle menu"]');
            const textContainer = document.querySelector('.text-container h1') as HTMLElement;
            if (menuButton && textContainer) {
              const menuRect = menuButton.getBoundingClientRect();
              const textRect = textContainer.getBoundingClientRect();
              const isDesktop = window.innerWidth >= 1024;
              const offset = menuRect.left - textRect.width - (isDesktop ? 80 : 0);
              textContainer.style.transform = `translateX(${offset * self.progress}px)`;
              textContainer.style.color = `rgb(${255 - 155 * self.progress}, ${255 - 155 * self.progress}, ${255 - 155 * self.progress})`;
            }
          }
        },
      }
    );

    const handleScroll = () => {
      const logo = document.querySelector('.logo') as HTMLImageElement | null;
      if (logo) {
        if (window.scrollY > 50) {
          logo.src = '/logo2.png';
        } else {
          logo.src = '/logo.png';
        }
      }

      
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="px-6 md:px-24 lg:px-36">
        <header className="fixed top-0 left-0 right-0 z-50 py-4 max-w-screen-2xl px-3 md:px-12 lg:px-28 2xl:px-2 mx-auto transition-colors">
          <nav className="flex items-center justify-between">
            <a className="flex items-center" href="/">
              <img src="/logo.png" alt="Crypto Strategy" width="141" height="32" className="h-8 w-auto logo" />
            </a>
            <button className="w-8 h-8 flex items-center justify-center" aria-label="Toggle menu">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.33334 8H26.6667M5.33334 16H26.6667M5.33334 24H26.6667" stroke="black" strokeWidth="2" strokeLinecap="round"></path>
              </svg>
            </button>
          </nav>
        </header>
        <section className="pt-20 2xl:pt-28 pb-10 min-h-[1500px]">
          <div className="mx-auto fixed left-0 right-0 max-w-screen-2xl px-3 md:px-12 lg:px-28 2xl:px-2">
            <div className="text-container flex justify-between items-center">
              <h1 className="text-3xl dark-gradient-text md:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-12 2xl:mb-16 text-left">
                <span className="block font-normal">Remarkable</span>
                <span className="block font-bold">Mining Experience.</span>
              </h1>
            </div>
            <div className="rounded-2xl relative">
              <div className="relative w-full rounded-2xl overflow-hidden">
                <div>
                  <div className="relative w-full overflow-hidden rounded-2xl">
                    <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop playsInline preload="auto" muted aria-hidden="true">
                      <source src="/light_looped_compressed.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 z-[1] hidden video-fallback">
                      <img alt="Background fallback" decoding="async" data-nimg="fill" className="object-cover" sizes="100vw" srcSet="/_next/image?url=%2Fimages%2Ffallback.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Ffallback.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Ffallback.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Ffallback.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Ffallback.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Ffallback.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Ffallback.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Ffallback.jpg&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2Fimages%2Ffallback.jpg&amp;w=3840&amp;q=75" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} />
                    </div>
                    <div className="absolute inset-0 z-[2]" style={{ backgroundColor: 'black', opacity: 0 }} aria-hidden="true"></div>
                    <div className="relative z-[3] w-full h-full">
                      <div className="container mx-auto h-full">
                        <div className="grid grid-rows-2 h-full grid-container">
                          <div data-id="1" className="relative overflow-hidden animate-item aspect-square col-span-1" style={{ borderTopWidth: 0, borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'white' }}></div>
                          <div data-id="2A" className="relative overflow-hidden animate-item aspect-square hidden md:block col-span-1" style={{ borderTopWidth: 0, borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'white' }}></div>
                          <div data-id="2B" className="relative overflow-hidden animate-item aspect-square hidden md:block col-span-1" style={{ borderTopWidth: 0, borderBottomWidth: 0, borderLeftWidth: 1, borderRightWidth: 0, borderColor: 'white' }}></div>
                          <div data-id="3" className="relative overflow-hidden animate-item aspect-square hidden md:block col-span-1" style={{ borderTopWidth: 0, borderBottomWidth: 0, borderLeftWidth: 1, borderRightWidth: 1, borderColor: 'white' }}></div>
                          <div data-id="4" className="relative aspect-square overflow-hidden animate-item bg-white w-[30px] h-full hidden md:block col-span-1" style={{ borderTopWidth: 0, borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'white' }}></div>
                          <div data-id="5" className="p-6 flex items-center justify-center animate-item overflow-hidden bg-white aspect-square col-span-1" style={{ borderTopWidth: 0, borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'white' }}>
                            <div className="flex items-center justify-center">
                              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                            </div>
                          </div>
                          <div data-id="6" className="relative overflow-hidden animate-item aspect-square hidden md:block col-span-1" style={{ borderTopWidth: 0, borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'white' }}></div>
                          <div data-id="7" className="relative overflow-hidden animate-item bg-white aspect-square hidden md:block col-span-1" style={{ borderTopWidth: 0, borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'white' }}></div>
                          <div data-id="8A" className="relative overflow-hidden animate-item aspect-square hidden md:block col-span-1" style={{ borderTopWidth: 1, borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'white' }}></div>
                          <div data-id="8B" className="relative overflow-hidden animate-item aspect-square hidden md:block col-span-1" style={{ borderTopWidth: 1, borderBottomWidth: 0, borderLeftWidth: 1, borderRightWidth: 0, borderColor: 'white' }}></div>
                          <div data-id="9" className="relative overflow-hidden animate-item aspect-square col-span-1" style={{ borderTopWidth: 1, borderBottomWidth: 0, borderLeftWidth: 1, borderRightWidth: 1, borderColor: 'white' }}></div>
                          <div data-id="10" className="relative aspect-square overflow-hidden animate-item bg-white w-[30px] h-full hidden md:block col-span-1" style={{ borderTopWidth: 0, borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'white' }}></div>
                          <div data-id="11" className="relative overflow-hidden animate-item aspect-square hidden md:block col-span-1" style={{ borderTopWidth: 0, borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'white' }}></div>
                          <div data-id="12" className="relative overflow-hidden animate-item bg-white aspect-square hidden md:block col-span-1" style={{ borderTopWidth: 0, borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'white' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
