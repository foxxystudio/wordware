'use client';
import { type JSX, useEffect, useState } from 'react';
import { motion, MotionProps } from 'framer-motion';

type TextScrambleProps = {
  children: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: React.ElementType;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
} & MotionProps;

const defaultChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = 'p',
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const MotionComponent = motion.create(
    Component as keyof JSX.IntrinsicElements
  );
  const text = children;
  
  // Initialize with actual text to prevent hydration mismatch
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Generate scrambled text
  const getScrambledText = () => {
    return text.split('').map(char => 
      char === ' ' ? ' ' : characterSet[Math.floor(Math.random() * characterSet.length)]
    ).join('');
  };

  // Set mounted state after hydration and immediately scramble
  useEffect(() => {
    setIsMounted(true);
    // Immediately show scrambled text after mounting
    setDisplayText(getScrambledText());
  }, []);

  const scramble = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const steps = duration / speed;
    let step = 0;

    const interval = setInterval(() => {
      let scrambled = '';
      const progress = step / steps;

      for (let i = 0; i < text.length; i++) {
        // Always preserve spaces
        if (text[i] === ' ') {
          scrambled += ' ';
          continue;
        }

        // Reveal characters progressively from left to right
        if (progress * text.length > i) {
          scrambled += text[i];
        } else {
          // Show a random character to maintain constant length
          scrambled += characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambled);
      step++;

      if (step > steps) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
        onScrambleComplete?.();
      }
    }, speed * 1000);
  };

  useEffect(() => {
    if (!trigger || !isMounted) return;
    
    // Reset to scrambled state before starting animation
    setDisplayText(getScrambledText());
    scramble();
  }, [trigger, isMounted]);

  return (
    <MotionComponent 
      style={{ 
        display: 'inline',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        fontSize: '0.8em',
        fontWeight: '300',
        letterSpacing: '0.02em',
        backgroundColor: '#EDE5D8',
        padding: '0.05em 0.5em',
        margin: '0 -0.05em',
        borderRadius: '0.35em',
        lineHeight: 'inherit',
        verticalAlign: 'baseline',
        boxDecorationBreak: 'clone',
        WebkitBoxDecorationBreak: 'clone',
        ...(props.style || {})
      }}
      className={className}
      {...props}
    >
      {displayText}
    </MotionComponent>
  );
}

