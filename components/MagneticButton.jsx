'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MagneticButton({ children }) {
   const magnetic = useRef(null);

   useEffect(() => {
      const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
      const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

      const handleMouseMove = (e) => {
         const { clientX, clientY } = e;
         const { height, width, left, top } = magnetic.current.getBoundingClientRect();
         const x = clientX - (left + width / 2);
         const y = clientY - (top + height / 2);

         // 👇 Etki alanını azaltmak için çarpan
         const strength = .2; // 0.2 → çok hafif | 1 → tam güç
         xTo(x * strength);
         yTo(y * strength);
      };

      const handleMouseLeave = () => {
         xTo(0);
         yTo(0);
      };

      const el = magnetic.current;
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      return () => {
         el.removeEventListener("mousemove", handleMouseMove);
         el.removeEventListener("mouseleave", handleMouseLeave);
      };
   }, []);

   return React.cloneElement(children, { ref: magnetic });
}