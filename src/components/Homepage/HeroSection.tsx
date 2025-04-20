import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section pt-20 2xl:pt-28 pb-10 min-h-[1500px]">
      <div className="mx-auto fixed left-0 right-0 max-w-screen-2xl px-3 md:px-12 lg:px-28 2xl:px-2">
        <div className="text-container flex justify-between items-start mt-4 relative">
          <h1 className="main-heading text-3xl dark-gradient-text md:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-12 2xl:mb-16 text-left">
            <span className="block font-normal">Remarkable</span>
            <span className="block font-bold">Mining Experience.</span>
          </h1>
          <div className="menu-text opacity-0 absolute right-0  text-3xl dark-gradient-text md:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-12 2xl:mb-16 text-right">
            <span className="block font-normal">Remarkable</span>
            <span className="block font-bold">Mining Experience.</span>
          </div>
        </div>
        <div className="rounded-2xl relative">
          <div className="relative w-full rounded-2xl overflow-hidden">
            <div>
              <div className="relative w-full overflow-hidden rounded-2xl">
                <video className="absolute inset-0 w-full h-full object-cover video-container" autoPlay loop playsInline preload="auto" muted aria-hidden="true">
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
  );
};

export default HeroSection; 