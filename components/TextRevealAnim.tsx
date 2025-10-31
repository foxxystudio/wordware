'use client';
import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextScrollProps {
   phrase: string;
   mainContainer: React.RefObject<HTMLElement>;
}

export default function TextRevealAnim({ phrase, mainContainer }: TextScrollProps) {
   const containerRef = useRef<HTMLDivElement | null>(null);
   const splitRef = useRef<HTMLElement | null>(null);
   const splitInstanceRef = useRef<any>(null);
   const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   useGSAP(() => {
      if (!mounted) return;
      if (!splitRef.current || !containerRef.current || !mainContainer.current) return;

      let SplitText: any;
      let ctx: gsap.Context;

      (async () => {
         try {
            const mod = await import('gsap/SplitText');
            SplitText = (mod as any).default || (mod as any).SplitText || mod;
         } catch (e) {
            console.warn('SplitText not available:', e);
            SplitText = null;
         }

         if (SplitText && splitRef.current) {
            splitInstanceRef.current = new SplitText(splitRef.current as HTMLElement, {
               type: 'lines,words',
               tag: 'span',
               linesClass: 'split-line',
            });

            splitInstanceRef.current?.lines?.forEach((line: HTMLElement) =>
               line.classList.add('split-line')
            );
            splitInstanceRef.current?.words?.forEach((word: HTMLElement) =>
               word.classList.add('split-word')
            );
         }

         const chars =
            splitInstanceRef.current?.chars ||
            (splitRef.current
               ? Array.from((splitRef.current as HTMLElement).querySelectorAll('span'))
               : []);
         const lines = splitInstanceRef.current?.lines || Array.from((splitRef.current as HTMLElement).querySelectorAll('.split-line'));
         const words = splitInstanceRef.current?.words || Array.from((splitRef.current as HTMLElement).querySelectorAll('.split-word'));

         // Wait for DOM to settle before creating animations
         await new Promise(resolve => setTimeout(resolve, 50));

         ctx = gsap.context(() => {
            // ensure lines are block-level and hide overflow so chars moving don't change layout height
            gsap.set(lines, {
               display: 'block',
               overflow: 'hidden',
            });

            // initial state for words
            gsap.set(words, {
               opacity: 0.2,
               yPercent: 30,
            });

            // the animation (scrollTrigger) - reduced scrub for better reverse scrolling
            const tween = gsap.to(words, {
               scrollTrigger: {
                  trigger: mainContainer.current,
                  start: 'top top',
                  end: 'bottom bottom',
                  scrub: 0.5,  // Reduced from 3 to 0.5 for better responsiveness
                  invalidateOnRefresh: true,  // Recalculate on refresh
                  // markers: true, // dev: açıp ölçümleri görebilirsin
               },
               opacity: 1,
               yPercent: 0,
               ease: 'power2.out',  // Changed from back.out for smoother reverse
               stagger: 0.05,
            });

            // Store the ScrollTrigger instance for cleanup
            scrollTriggerRef.current = tween.scrollTrigger as ScrollTrigger;

            // Multiple refresh calls to ensure everything is set up correctly
            gsap.delayedCall(0.1, () => ScrollTrigger.refresh());
            gsap.delayedCall(0.3, () => ScrollTrigger.refresh());
            gsap.delayedCall(0.6, () => ScrollTrigger.refresh());
         }, containerRef);
      })();

      // cleanup
      return () => {
         try {
            if (splitInstanceRef.current?.revert) splitInstanceRef.current.revert();
         } catch { }
         try {
            // Only kill this component's ScrollTrigger, not all of them
            if (scrollTriggerRef.current) {
               scrollTriggerRef.current.kill();
               scrollTriggerRef.current = null;
            }
         } catch { }
         if (ctx) ctx.revert();
      };
   }, [mounted, phrase, mainContainer]);

   return (
      <div className="split-text__container" ref={containerRef}>
         <p
            ref={splitRef as any}
            style={{
               display: 'block',
               WebkitBackgroundClip: 'text' as any,
               color: '#000',
               // backgroundSize: '200%',
            }}
         >
            {phrase}
         </p>
      </div>
   );
}