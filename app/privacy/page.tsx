'use client'

import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import MagneticButton from '@/components/MagneticButton';
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';

export default function Privacy() {
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
          {/* Two Column Layout */}
          <div className="flex flex-col md:flex-row max-w-5xl mx-auto gap-6 md:gap-24">
            {/* Left Column - Title */}
            <div className="md:w-[35%] md:sticky md:top-32 md:self-start">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-black font-suisse mb-8 md:mb-6 cascade-in" style={{ animationDelay: '0.4s' }}>
                Privacy + Cookies
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed text-black/60 font-normal cascade-in" style={{ animationDelay: '0.5s' }}>
                Wordware is committed to respecting your privacy.
              </p>
            </div>

            {/* Right Column - Content */}
            <div className="md:w-[65%] space-y-12">
              <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '0.6s' }}>
                <strong>Last Updated: 10.09.2023</strong>
              </p>

              {/* Section 1 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '0.7s' }}>
                <h2 className="text-lg lg:text-xl font-semibold text-black">1. Introduction</h2>
                <p className="text-base lg:text-lg leading-relaxed text-black font-normal">
                  Thank you for using Wordware. Protecting your privacy is essential to us. This Privacy Policy outlines how Wordware ("Wordware", "we", "us") collects, uses, and protects your personal information.
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '0.8s' }}>
                <h2 className="text-lg lg:text-xl font-semibold text-black">2. Information We Collect</h2>
                <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-2">
                  <strong>Account Information:</strong> When you sign up for an account with Wordware, we collect your name, email address, and password.
                </p>
                <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-2">
                  <strong>Usage Information:</strong> We collect information about the applications you create, the tools you use, and how you interact with our platform.
                </p>
                <p className="text-base lg:text-lg leading-relaxed text-black font-normal">
                  <strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to enhance user experience and to analyze traffic patterns.
                </p>
              </div>

              {/* Section 3 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '0.9s' }}>
                <h2 className="text-lg lg:text-xl font-semibold text-black">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2 text-base md:text-lg leading-relaxed text-black font-normal">
                  <li>To provide, maintain, and improve the Service.</li>
                  <li>To analyze usage patterns and trends to improve user experience.</li>
                  <li>To send you updates, security alerts, and support messages.</li>
                  <li>To communicate with you about products, services, offers, promotions, and events.</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '1.0s' }}>
                <h2 className="text-lg lg:text-xl font-semibold text-black">4. Data Storage and Analysis</h2>
                <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                  We store and analyze the data related to the applications created using the Service to improve our offerings. The analysis is strictly for service enhancement and will not be used for any independent purposes.
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '1.1s' }}>
                <h2 className="text-lg lg:text-xl font-semibold text-black">5. Sharing of Information</h2>
                <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                  We do not sell or lease your personal information to third parties. We might share your information with third-party service providers that support our Service, under strict confidentiality agreements.
                </p>
              </div>

              {/* Section 6 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '1.2s' }}>
                <h2 className="text-lg lg:text-xl font-semibold text-black">6. Security</h2>
                <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                  We employ a variety of security measures designed to protect your information and keep it confidential and free from any unauthorized alteration. However, no system can be 100% secure, and there's a risk that data transmission over the internet may be intercepted or accessed by unauthorized parties.
                </p>
              </div>

              {/* Section 7 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '1.3s' }}>
                <h2 className="text-lg lg:text-xl font-semibold text-black">7. Your Rights</h2>
                <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                  Depending on where you reside, you may have the right to access, correct, or delete the personal information we hold about you. You can access and update most of this information through your Wordware account.
                </p>
              </div>

              {/* Section 8 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '1.4s' }}>
                <h2 className="text-lg lg:text-xl font-semibold text-black">8. Changes to This Policy</h2>
                <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                  We may revise this Privacy Policy from time to time, and we will post the most current version on our website. If a revision meaningfully impacts your rights, we will notify you.
                </p>
              </div>

              {/* Section 9 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '1.5s' }}>
                <h2 className="text-lg lg:text-xl font-semibold text-black">9. Contact Us</h2>
                <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                  If you have questions or comments about this Privacy Policy or our practices, please contact us at <a href="mailto:support@wordware.ai" className="underline">support@wordware.ai</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

