'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import flowerAnimation from '@/public/Flower_animation.lottie/data.json';

gsap.registerPlugin(ScrollTrigger);

export default function VideoWrapper() {
   const containerRef = useRef<HTMLDivElement>(null);
   const lottieRef = useRef<LottieRefCurrentProps | null>(null);

   useEffect(() => {
      if (lottieRef.current) {
         lottieRef.current.pause();
      }
   }, []);

   useGSAP(() => {
      const ctx = gsap.context(() => {
         const lottie = lottieRef.current;
         if (!lottie) return;

         const totalFrames = lottie.getDuration(true) || 150;
         const pinContainer = document.querySelector('.pin__container');

         gsap.to({}, {
            scrollTrigger: {
               trigger: '.pin__container',
               start: 'top top',
               end: '+=143%',
               scrub: 1,
               pin: true,
               onUpdate: (self) => {
                  const frame = Math.floor(self.progress * totalFrames);
                  lottie.goToAndStop(frame, true);
                  
                  // Fade out in the last 10% of the animation
                  if (self.progress > 0.9 && pinContainer) {
                     const fadeProgress = (self.progress - 0.9) / 0.1;
                     gsap.set(pinContainer, { opacity: 1 - fadeProgress });
                  } else if (pinContainer) {
                     gsap.set(pinContainer, { opacity: 1 });
                  }
               }
            }
         });
      });

      return () => ctx.revert();
   }, { scope: containerRef, dependencies: [] });

   return (
      <div
         ref={containerRef}
         className="video__wrapper absolute w-[100vw] pointer-events-none"
         style={{
            zIndex: 1,
            top: '0',
            right: '0',
         }}
      >
         <div className="pin__container w-full flex justify-end">
            <div
               className="object-cover w-[100vw] relative"
               style={{
                  height: '100vh',
                  maxWidth: 'none',
                  maxHeight: 'none',
               }}
            >
               <Lottie
                  lottieRef={lottieRef}
                  animationData={flowerAnimation}
                  loop={false}
                  autoplay={false}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
               />
               {/* Gradient overlay at bottom */}
               <div
                  className="absolute bottom-0 left-0 right-0 pointer-events-none"
                  style={{
                     height: '35vh',
                     background: 'linear-gradient(to bottom, transparent 0%, rgba(253, 253, 251, 0.6) 35%, #FDFDFB 70%)',
                  }}
               />
            </div>
         </div>
      </div>
   );
}