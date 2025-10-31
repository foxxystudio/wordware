'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

const slidesData = [
   { img: null, width: 0, height: 0, x: '70%', y: '45%' },
   { img: null, width: 0, height: 0, x: '35%', y: '65%' },
   { img: null, width: 0, height: 0, x: '70%', y: '30%' },
   { img: null, width: 0, height: 0, x: '35%', y: '65%' },
   { img: null, width: 0, height: 0, x: '30%', y: '40%' },
   { img: null, width: 0, height: 0, x: '70%', y: '65%' },
   { img: null, width: 0, height: 0, x: '30%', y: '35%' }
];

const zStep = 200;
const totalSlides = 7;
const initialZ = -1600;

gsap.registerPlugin(ScrollTrigger);

export default function TeamSection() {
   const containerRef = useRef<HTMLDivElement>(null)
   const slidesRef = useRef<HTMLDivElement[]>([])
   const textRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
         const slides = slidesRef.current;
         const slider = document.querySelector<HTMLElement>('.slider');
         if (!slider || !containerRef.current) return;

         const getInitialTranslateZ = (slide: HTMLDivElement) =>
            gsap.getProperty(slide, 'z') as number;

         const mapRange = (
            value: number,
            inMin: number,
            inMax: number,
            outMin: number,
            outMax: number
         ) => ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

         ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            pin: slider,
            scrub: 1,
            pinSpacing: false,
         });

         // Fade in text - scrubbed to scroll
         if (textRef.current) {
            // Fade in as section enters
            gsap.fromTo(textRef.current, 
               { opacity: 0 },
               {
                  opacity: 1,
                  scrollTrigger: {
                     trigger: containerRef.current,
                     start: 'top 50%',
                     end: 'top 20%',
                     scrub: true,
                  }
               }
            );
         }

         slides.forEach((slide, i) => {
            const zPosition = initialZ + i * zStep;
            // const xPosition = i % 2 === 0 ? '30%' : '70%';
            const { x, y } = slidesData[i];

            gsap.set(slide, {
               top: y,
               left: x,
               xPercent: -50,
               yPercent: -50,
               z: zPosition,
               opacity: 0,
               position: 'absolute',
            });
         });

         slides.forEach((slide) => {
            const baseZ = getInitialTranslateZ(slide);

            ScrollTrigger.create({
               trigger: containerRef.current!,
               start: 'top center',
               end: 'bottom bottom',
               scrub: 1,
               onUpdate: (self) => {
                  const progress = self.progress;
                  const zIncrement = progress * (zStep * (totalSlides + 4));
                  const currentZ = baseZ + zIncrement;

                  let blurValue: number;
                  let opacity: number;

                  if (currentZ < -3000) {
                     blurValue = 30;
                     opacity = 0;
                  } else if (currentZ >= -3000 && currentZ <= 0) {
                     blurValue = mapRange(currentZ, -1500, 0, 20, 0);
                     opacity = mapRange(currentZ, -200, 0, 0, 1);
                  } else if (currentZ > 0 && currentZ < 1000) {
                     blurValue = 0;
                     opacity = 1;
                  } else {
                     blurValue = 30;
                     opacity = 0;
                  }

                  slide.style.filter = `blur(${blurValue}px)`;
                  slide.style.opacity = `${opacity}`;
                  slide.style.transform = `translateX(-50%) translateY(-50%) translateZ(${currentZ}px)`;
               },
            });
         });
      });

      return () => {
         ScrollTrigger.getAll().forEach((st) => st.kill());
      };
   }, []);

   return (
      <div ref={containerRef} className='w-full h-[auto] md:h-[300vh] px-4 py-[96px] md:py-0 relative bg-[#F8F3EB]'>
         <div className="slider flex flex-col gap-6 w-full h-auto md:h-[100vh] [transform-style:preserve-3d] [perspective:500px] overflow-hidden z-2 relative">
            {
               slidesData.map((slide, i) => (
                  <div
                     key={i}
                     ref={(el) => {
                        if (el) slidesRef.current[i] = el;
                     }}
                     className='slide__wrapper relative md:absolute opacity-100 md:opacity-0'
                     style={{
                        // opacity: 0,
                        willChange: 'transform, opacity'
                     }}
                  >
                     <div className="slide-img__wrapper">
                        {
                           slide.img !== null ?
                              <Image
                                 src={slide.img}
                                 width={slide.width}
                                 height={slide.height}
                                 quality={100}
                                 draggable={false}
                                 alt={`image ${i + 1}`}
                              />
                              :
                              <div className="placeholder__wrapper w-[100%] md:w-[250px] h-[300px]" style={{ backgroundColor: '#EDE5D5' }}>
                                 <span>{i + 1}</span>
                              </div>
                        }
                     </div>
                  </div>
               ))
            }
            
            {/* Centered overlay text - positioned within slider */}
            <div 
               ref={textRef}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center max-w-md px-4"
               style={{ zIndex: 9999 }}
            >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-tight text-black font-suisse mb-6">
               The team
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-black font-normal">
               Building AGI through integration—systems that learn, adapt, and become extensions of how people think.
            </p>
            </div>
         </div>
      </div>
   )
}
