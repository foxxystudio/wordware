'use client'

import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import MagneticButton from '@/components/MagneticButton';
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';

export default function Terms() {
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
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            {/* Left Column - Title */}
            <div className="md:w-[35%] md:sticky md:top-32 md:self-start">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-black font-suisse mb-6 cascade-in" style={{ animationDelay: '0.4s' }}>
                Terms + Conditions
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-black/60 font-normal cascade-in" style={{ animationDelay: '0.5s' }}>
                Wordware is committed to clear, transparent terms.
              </p>
            </div>

            {/* Right Column - Content */}
            <div className="md:w-[65%] space-y-12">
              <p className="text-base md:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '0.6s' }}>
                <strong>Last Updated: 10.09.2023</strong>
              </p>

              {/* Section 1 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '0.7s' }}>
                <h2 className="text-xl md:text-2xl font-semibold text-black">1. Acceptance of Terms</h2>
                <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                  By accessing and using Wordware's services at <a href="http://app.wordware.ai" className="underline" target="_blank" rel="noopener noreferrer">app.wordware.ai</a> ("the Service"), provided by Wordware ("Wordware", "we", "us"), you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, please do not use the Service.
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '0.8s' }}>
                <h2 className="text-xl md:text-2xl font-semibold text-black">2. Changes to Terms</h2>
                <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                  Wordware reserves the right to change, modify, or revise these terms and conditions at any time. The continued use of the Service following the posting of any changes to the terms constitutes acceptance of those changes.
                </p>
              </div>

              {/* Section 3 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '0.9s' }}>
                <h2 className="text-xl md:text-2xl font-semibold text-black">3. Registration and Account Security</h2>
                <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                  To use the Service, User must register for an account. User agrees to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '1.0s' }}>
                <h2 className="text-xl md:text-2xl font-semibold text-black">4. User Conduct</h2>
                <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                  Users agree not to use the Service to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base md:text-lg leading-relaxed text-black font-normal">
                  <li>Violate any laws or regulations.</li>
                  <li>Infringe upon the rights of any third party, including copyright, trademark, privacy, or other personal or proprietary rights.</li>
                </ul>

                <h3 className="text-lg md:text-xl font-semibold text-black mt-6">Acceptable Use Policy (AUP)</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-base md:text-lg font-semibold text-black mb-2">1. Ethical and Responsible Use</p>
                    <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                      Ensuring the ethical and responsible use of WordWare is paramount. All users of WordWare must adhere to our Acceptable Use Policy (AUP). It is important to clarify that WordWare does not permit users to create chatbots. The platform solely leverages the reasoning abilities of Claude for its functionalities.
                    </p>
                  </div>

                  <div>
                    <p className="text-base md:text-lg font-semibold text-black mb-2">2. API Providers and Foundational LLM Models</p>
                    <p className="text-base md:text-lg leading-relaxed text-black font-normal mb-2">
                      Our services are underpinned by foundational Large Language Models (LLMs), primarily provided by partners such as OpenAI, Claude and Google (PaLM). Users must:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-base md:text-lg leading-relaxed text-black font-normal">
                      <li>Refrain from using LLMs for generating misleading information, deepfakes, or any content that can be harmful or deceitful.</li>
                      <li>Not use LLMs to promote hate, discrimination, or violence.</li>
                      <li>Respect any additional terms, guidelines, and policies set forth by our API providers.</li>
                      <li>Ensure that any data or content used with LLMs does not violate privacy laws, intellectual property rights, or other legal standards.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-base md:text-lg font-semibold text-black mb-2">3. Violations and Mitigations</p>
                    <p className="text-base md:text-lg leading-relaxed text-black font-normal mb-2">
                      <strong>User Notifications:</strong> If users are determined to be in violation of the AUP, they will receive notifications. They will have an opportunity to address and rectify the issue or file an appeal if they believe there has been an oversight.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-black font-normal mb-2">
                      <strong>Suspension & Termination:</strong> The severity of the AUP violation will determine the corrective measures. This can range from temporary suspension to permanent termination of the user's WordWare account.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-black font-normal mb-2">
                      <strong>Feedback System:</strong> We believe in the strength and vigilance of our community. We strongly encourage users and the broader community to report any deployments or actions on the platform that they deem questionable or in violation of the AUP.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-black font-normal mb-2">
                      <strong>Continuous Review:</strong> In a rapidly evolving digital landscape, we are committed to ensuring our AUP remains robust and relevant. We routinely update our AUP based on societal standards' evolution and valuable feedback from our users.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                      By using WordWare, you acknowledge that you have read, understood, and agreed to adhere to our AUP. Failure to comply can result in corrective action as detailed above.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Protection Section */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '1.1s' }}>
                <h2 className="text-xl md:text-2xl font-semibold text-black">Data Protection and Privacy</h2>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-2">1. GDPR (General Data Protection Regulation) Compliance</h3>
                  <p className="text-base md:text-lg leading-relaxed text-black font-normal mb-2">
                    For users residing in the European Union (EU) and European Economic Area (EEA):
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base md:text-lg leading-relaxed text-black font-normal">
                    <li>You have the right to request access to, correction of, or deletion of your personal data.</li>
                    <li>You can object to the processing of your personal data, ask us to restrict processing of your personal data, or request portability.</li>
                    <li>If we have collected and processed your personal data with your consent, you can withdraw your consent at any time.</li>
                    <li>You have the right to complain to a data protection authority about our collection and use of your personal data.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-2">2. CCPA (California Consumer Privacy Act) Compliance</h3>
                  <p className="text-base md:text-lg leading-relaxed text-black font-normal mb-2">
                    For residents of California, USA:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base md:text-lg leading-relaxed text-black font-normal">
                    <li>You have the right to know which personal data is being collected, our purposes for processing, and any third parties with whom we share it.</li>
                    <li>You can request the deletion of your personal data stored by us, with certain exceptions.</li>
                    <li>You have the right to non-discrimination in terms of service or price when you exercise your privacy rights under the CCPA.</li>
                  </ul>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                  For both GDPR and CCPA:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base md:text-lg leading-relaxed text-black font-normal">
                  <li>We commit to resolving complaints about your privacy and our collection or use of your personal data.</li>
                  <li>We do not sell your personal data to third parties.</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '1.2s' }}>
                <h2 className="text-xl md:text-2xl font-semibold text-black">5. Data Storage and Analysis</h2>
                <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                  Wordware will store and analyze data related to the applications created through the Service. The analysis of data is for the purpose of improving the Service and will not be used for our independent purposes.
                </p>
              </div>

              {/* Section 6 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '1.3s' }}>
                <h2 className="text-xl md:text-2xl font-semibold text-black">6. Intellectual Property</h2>
                <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                  Users retain ownership of the intellectual content they create using Wordware. However, by using the Service, users grant Wordware a non-exclusive, transferable, sub-licensable, royalty-free, and global license to use, store, display, reproduce, modify, create derivative works, and distribute user content solely for the purpose of operating and improving the Service.
                </p>
              </div>

              {/* Section 7 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '1.4s' }}>
                <h2 className="text-xl md:text-2xl font-semibold text-black">7. Privacy</h2>
                <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                  Your use of Wordware is also governed by our Privacy Policy, which can be found <a href="https://www.notion.so/Privacy-Policy-5b6b683a316a45d7b6c6a0684010b758?pvs=21" className="underline" target="_blank" rel="noopener noreferrer">here</a>.
                </p>
              </div>

              {/* Section 8 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '1.5s' }}>
                <h2 className="text-xl md:text-2xl font-semibold text-black">8. Limitation of Liability</h2>
                <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                  To the maximum extent permitted by applicable law, Wordware shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the services; (b) any unauthorized access, use, or alteration of your transmissions or content; (c) any other matter relating to the Service.
                </p>
              </div>

              {/* Section 9 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '1.6s' }}>
                <h2 className="text-xl md:text-2xl font-semibold text-black">9. Termination</h2>
                <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                  Wordware reserves the right to terminate or suspend your account and access to the Service at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users of the Service, us, third parties, or for other conduct that we believe to be harmful to our business or reputation.
                </p>
              </div>

              {/* Section 10 */}
              <div className="space-y-4 cascade-in" style={{ animationDelay: '1.7s' }}>
                <h2 className="text-xl md:text-2xl font-semibold text-black">10. Governing Law</h2>
                <p className="text-base md:text-lg leading-relaxed text-black font-normal">
                  These terms and conditions and any dispute or claim arising out of or in connection with them or their subject matter or formation shall be governed by and construed in accordance with the law of the State of California.
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

