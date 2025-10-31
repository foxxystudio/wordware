'use client'

import { useRef, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import MagneticButton from '@/components/MagneticButton';
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';

export default function Announcement() {
  const footerVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (footerVideoRef.current) {
      footerVideoRef.current.playbackRate = 0.9; // Slightly slower, more calming speed
    }
  }, []);

  // Send iframe context to parent window (scroll position and page)
  useEffect(() => {
    const sendContext = () => {
      window.parent.postMessage({
        type: 'IFRAME_CONTEXT',
        page: window.location.pathname,
        scroll: window.scrollY
      }, '*');
    };

    // Send initial context
    sendContext();

    // Update on scroll
    const handleScroll = () => {
      sendContext();
    };

    // Update on navigation
    const handlePopState = () => {
      sendContext();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Listen for navigation commands from parent
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'NAVIGATE_TO') {
        if (event.data.page && event.data.page !== window.location.pathname) {
          window.history.pushState({}, '', event.data.page);
        }
        if (typeof event.data.scroll === 'number') {
          window.scrollTo(0, event.data.scroll);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="relative w-full h-auto bg-[#0D371F]">
      <main className="relative z-10 min-h-screen bg-[#FCFAF6] mb-[572px] md:mb-[760px] rounded-b-2xl md:rounded-b-3xl">

        {/* Header */}
        <Navbar />

        <div className="px-[16px] md:px-[40px] lg:px-[96px] xl:px-[172px] 2xl:px-[258px] pt-[172px] md:pt-[252px] pb-[96px] md:pb-32">
          {/* Title */}
          <section className="mb-[64px] md:mb-48">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-black font-suisse mb-16 cascade-in" style={{ animationDelay: '0.4s' }}>
              Backed by
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-black font-normal max-w-3xl cascade-in" style={{ animationDelay: '0.5s' }}>
              $30M seed round led by Spark Capital, followed by Felicis and Y Combinator—the biggest round in YC history.
            </p>
          </section>

          {/* Main Investors */}
          <section className="mb-[64px] md:mb-56">
            <div className="max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
                <div className="cascade-in flex items-center" style={{ animationDelay: '0.6s' }}>
                  <img src="/Investor Logos/Spark Capital.svg" alt="Spark Capital" className="h-12 w-auto opacity-80" />
                </div>
                <div className="cascade-in flex items-center" style={{ animationDelay: '0.7s' }}>
                  <img src="/Investor Logos/Felicis.svg" alt="Felicis" className="h-12 w-auto opacity-80" />
                </div>
                <div className="cascade-in flex items-center" style={{ animationDelay: '0.8s' }}>
                  <img src="/Investor Logos/Y Combinator.svg" alt="Y Combinator" className="h-12 w-auto opacity-80" />
                </div>
              </div>
            </div>
          </section>

          {/* With participation from */}
          <section className="mb-[64px] md:mb-56">
            <h2 className="text-lg md:text-xl lg:text-2xl font-normal text-black mb-16 cascade-in" style={{ animationDelay: '0.9s' }}>
              With participation from
            </h2>
            <div className="max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4 text-lg md:text-xl leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '1.0s' }}>
                <div>Day One Ventures</div>
                <div>20SALES</div>
                <div>SVA</div>
                <div>Theory Forge</div>
                <div>Friends & Family Capital</div>
                <div>Ventures</div>
                <div>Innovation Nest</div>
                <div>J4 Ventures</div>
              </div>
            </div>
          </section>

          {/* Angel Investors */}
          <section className="pb-0">
            <h2 className="text-lg md:text-xl lg:text-2xl font-normal text-black mb-16 cascade-in" style={{ animationDelay: '1.1s' }}>
              Angel Investors
            </h2>
            <div className="max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4 text-lg md:text-xl leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '1.2s' }}>
                <div>Paul Graham</div>
                <div>Vlad Magdalin</div>
                <div>Mathilde Collin</div>
                <div>Jason Boehmig</div>
                <div>Siqi Chen</div>
                <div>Kulveer Taggar</div>
                <div>Terrence Rohan</div>
                <div>Ben Tossell</div>
                <div>Azeem Azhar</div>
                <div>Swyx</div>
                <div>Theo t3.gg</div>
                <div>Walter Kortschak</div>
                <div>Soleio</div>
                <div>Paul Daugherty</div>
                <div>Dan Westgarth</div>
                <div>Thijn Lamers</div>
                <div>Stan Boland</div>
                <div>Don Stalter</div>
                <div>Jeff Henriod</div>
                <div>John Cassidy</div>
                <div>Jay Reno</div>
                <div>Michele Grazioli</div>
                <div>Andrew Milich</div>
                <div>Matt Brown</div>
                <div>Tod Sacerdoti</div>
                <div>Rahul Mehta</div>
                <div>Nicholas Elledge</div>
                <div>Robin Choy</div>
                <div>Nicholas Pilkington</div>
                <div>Paul Stahura</div>
                <div>Bartek Pucek</div>
                <div>Tomasz Karwatka</div>
                <div>Piotr Karwatka</div>
                <div>Brian Jacobs</div>
                <div>Chia Jeng Yang</div>
                <div>Jedrzej Szezesniak</div>
                <div>Kacper Szczesniak</div>
                <div>Neil Shah</div>
                <div>Grzegorz Kossakowski</div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

