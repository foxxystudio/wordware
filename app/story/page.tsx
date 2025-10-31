'use client'

import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import MagneticButton from '@/components/MagneticButton';
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';

export default function Story() {
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
          <section className="max-w-5xl mx-auto mb-[64px] md:mb-48">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-black font-suisse mb-[32px] md:mb-16 cascade-in" style={{ animationDelay: '0.4s' }}>
              About Wordware - Full Story
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed text-black font-normal max-w-3xl cascade-in" style={{ animationDelay: '0.5s' }}>October 15, 2025</p>
          </section>

          {/* Content Sections */}
          <div className="space-y-24 sm:space-y-32 md:space-y-40">
            {/* The Origin */}
            <section className='max-w-5xl mx-auto'>
              <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                <div className="md:w-72 md:flex-shrink-0">
                  <h2 className="text-lg lg:text-xl font-normal text-black cascade-in" style={{ animationDelay: '0.6s' }}>
                    The Origin
                  </h2>
                </div>
                <div className="flex-1 max-w-[100%] space-y-12">
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '0.7s' }}>
                    Robert and I met nearly ten years ago studying deep learning at the University of Cambridge. This was 2012—before anyone called it "deep learning," before Transformers, before the current AI wave. We were reading papers about neural networks that most people thought were academic curiosities.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '0.8s' }}>
                    After Cambridge, our paths diverged but stayed parallel. I started a company focused on augmenting human memory with Transformers (yes, before they were cool). Robert led machine learning ops for self-driving cars at Five AI, which Bosch later acquired. We were both obsessed with the same question: how do you make AI actually useful for real work, not just benchmarks?
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '0.9s' }}>
                    When LLMs started showing genuine reasoning capabilities in 2022, we knew something fundamental had shifted. The question wasn't whether AI would transform knowledge work—it was how. We spent a year rebuilding the development environment from first principles, asking: if prompting is the new programming, what should the tools look like?
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '1.0s' }}>
                    The answer became Wordware.
                  </p>
                </div>
              </div>
            </section>

            {/* Act One */}
            <section className='max-w-5xl mx-auto'>
              <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                <div className="md:w-72 md:flex-shrink-0">
                  <h2 className="text-lg lg:text-xl font-normal text-black cascade-in" style={{ animationDelay: '1.1s' }}>
                    Act One
                  </h2>
                </div>
                <div className="flex-1 max-w-3xl space-y-12">
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '1.2s' }}>
                    In 2023, we started Wordware with a clear thesis: words should be programmable. Not software—wordware. English as the next programming language. We built an IDE for AI, version control for prompts, deployment infrastructure for production. The goal was noble: democratize AI development, make intelligence malleable, let anyone build sophisticated AI solutions without needing to code.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '1.3s' }}>
                    We joined Y Combinator. Raised the biggest seed round in YC history ($30M led by Spark Capital and Felicis). Launched #1 on Product Hunt all-time. Thousands of developers used Wordware to build AI apps. Companies like Instacart, Runway, Metadata, and Glassdoor built on our platform.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '1.4s' }}>
                    By every external metric, we were winning.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '1.5s' }}>
                    But watching ourselves and our users, we kept noticing something uncomfortable. Every time we made Wordware simpler—removing abstraction layers, eliminating configuration steps—it looked less like developer infrastructure and more like... an assistant. The best apps our users built weren't developer tools. They were apps that let end users just do work naturally and have intelligence emerge underneath.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '1.6s' }}>
                    We faced a choice: keep building infrastructure and wait for someone else to build the cathedral, or build the cathedral ourselves.
                  </p>
                </div>
              </div>
            </section>

            {/* The Pivot */}
            <section className='max-w-5xl mx-auto'>
              <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                <div className="md:w-72 md:flex-shrink-0">
                  <h2 className="text-lg lg:text-xl font-normal text-black cascade-in" style={{ animationDelay: '1.7s' }}>
                    The Pivot
                  </h2>
                </div>
                <div className="flex-1 max-w-3xl space-y-12">
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '1.8s' }}>
                    <span className="font-semibold">April 2025:</span> We launched Triggers & Actions with 2000+ integrations. Users loved it. They built workflows, used them a few times, then... drifted away. The workflows worked perfectly. Something else was wrong.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '1.9s' }}>
                    <span className="font-semibold">May 2025:</span> Robert and I started watching ourselves use our own product. We'd built sophisticated automations—meeting ingestion pipelines, email processors, candidate evaluation workflows. But we kept noticing the same pattern: we didn't want to BUILD workflows. We wanted WORK DONE.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '2.0s' }}>
                    The workflow was a tax. The value was the outcome.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '2.1s' }}>
                    <span className="font-semibold">June 2025:</span> Every simplification made Wordware look less like a workflow builder and more like an AI assistant. We realized: people don't wake up thinking "I want to build automation today." They wake up thinking "I have too much to do."
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '2.2s' }}>
                    <span className="font-semibold">July 2025:</span> We worked with our lead investors—Nabeel Hyatt at Spark and Wesley Chan at Felicis—to validate the direction. The decision crystallized: skip the middle step. Don't build infrastructure (A) to power applications (B) to reach users (C). Go straight from A to C. Infrastructure → End Product.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '2.3s' }}>
                    We announced the pivot internally. Wordware → Sauna. Workflow builder → AI companion. Infrastructure → Prosumer. The last six months have been the hardest of the company's life. Complete architectural rebuild. Team realignment. Product reimagining.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '2.4s' }}>
                    But we're through it.
                  </p>
                </div>
              </div>
            </section>

            {/* What We're Building */}
            <section className='max-w-5xl mx-auto'>
              <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                <div className="md:w-72 md:flex-shrink-0">
                  <h2 className="text-lg lg:text-xl font-normal text-black cascade-in" style={{ animationDelay: '2.5s' }}>
                    What We're Building
                  </h2>
                </div>
                <div className="flex-1 max-w-3xl space-y-12">
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '2.6s' }}>
                    Sauna is an AI where persistent memory and learning are the foundations. Not features you turn on—the substrate everything else builds on.
                  </p>

                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-black mb-3 cascade-in" style={{ animationDelay: '2.7s' }}>The Core Insight</h3>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '2.8s' }}>
                      Software engineering already lives in this future. Developers wake up to find their code tested, deployed, and monitored by agents that understand their intent. Claude Code manages gigabytes of context to provide exactly what's needed for each task.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '2.9s' }}>
                      The crucial part: engineers review everything before it ships because they own the outcomes. These tools spread bottom-up through organizations precisely because developers wanted them. They can't blame the CTO when something breaks. The code is theirs, the responsibility is theirs, the AI just handles the execution.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '3.0s' }}>
                      Sauna brings this same revolution to knowledge work.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-black mb-3 cascade-in" style={{ animationDelay: '3.1s' }}>How It Works</h3>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '3.2s' }}>
                      You do work naturally—write an email, analyze a candidate, draft a memo. Sauna helps with context: surfaces past decisions, relationships, your preferences. After 2-3 times, Sauna detects the pattern: "Want me to handle this automatically?"
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '3.3s' }}>
                      Next time, it runs proactively while you sleep. You wake up to results: 20+ emails processed, meeting prep done, batch operations completed. You review, approve, or edit what it did.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '3.4s' }}>
                      This is programming through demonstration:
                    </p>
                    <ul className="space-y-2 text-base lg:text-lg leading-relaxed text-black font-normal pl-4 cascade-in" style={{ animationDelay: '3.5s' }}>
                      <li>• First time: You do it with AI helping</li>
                      <li>• Second time: AI helps more, learns your style</li>
                      <li>• Third time: "I see a pattern—want me to automate?"</li>
                      <li>• Fourth time onwards: Runs automatically, you just approve</li>
                    </ul>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mt-4 cascade-in" style={{ animationDelay: '3.6s' }}>
                      Context compounds. Patterns emerge. AI handles the next 1000 repetitions—unlocking entire areas of work that were impossible when each one required your manual effort.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '3.7s' }}>
                      One candidate evaluation is hiring. A thousand reveals market patterns. One email is communication. A thousand is relationship infrastructure.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-black mb-3 cascade-in" style={{ animationDelay: '3.8s' }}>The Architecture</h3>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '3.9s' }}>
                      <span className="font-semibold">Rich Context:</span> All your data—emails, transcripts, docs, uploaded files—stored in a queryable file system. Memory that accumulates, not a context window that forgets. The agent intelligently prioritizes what matters for each task.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '4.0s' }}>
                      <span className="font-semibold">Spaces</span> organize your work (Hiring, Content Creation, Board Prep). Each space has its own context and rules.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '4.1s' }}>
                      <span className="font-semibold">Recipes</span> are cached automations. The first time you explain what you want costs 2 minutes. Every time after: automatic. Proactive recipes run in the background while you sleep—morning brief, email processing, batch operations.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '4.2s' }}>
                      <span className="font-semibold">Preferences</span> teach the agent your style, priorities, boundaries. The more you use it, the better it gets at predicting what you actually want versus what you politely say.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '4.3s' }}>
                      <span className="font-semibold">Human-in-the-loop:</span> Review/approve/edit everything. Not blind automation. You own the outcomes, the AI handles the execution. That notification asking "Send this reply to the Sequoia partner?" isn't interrupting your flow—it's ensuring you own every decision while AI handles the grunt work.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-black mb-3 cascade-in" style={{ animationDelay: '4.4s' }}>What Makes This Different</h3>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '4.5s' }}>
                      Think about why people don't hire contractors: the onboarding effort is massive, communication overhead is constant, and context transfer takes weeks. AI agents solve this completely. The expert is available 24/7, knows everything about your company instantly, and the "onboarding" is just connecting your data.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '4.6s' }}>
                      Six months in, Sauna knows:
                    </p>
                    <ul className="space-y-2 text-base lg:text-lg leading-relaxed text-black font-normal pl-4 mb-4 cascade-in" style={{ animationDelay: '4.7s' }}>
                      <li>• Which emails you regret sending late at night</li>
                      <li>• Your real meeting preferences versus what you say to be polite</li>
                      <li>• How you actually want that recruiting pipeline handled</li>
                      <li>• The edge cases that matter to you</li>
                    </ul>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '4.8s' }}>
                      We're not asking knowledge workers to become programmers. We're recognizing they're already specification writers. Every email that says "schedule a meeting with the team" or "follow up on the contract" is a spec waiting to be executed.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Beliefs */}
            <section className='max-w-5xl mx-auto'>
              <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                <div className="md:w-72 md:flex-shrink-0">
                  <h2 className="text-lg lg:text-xl font-normal text-black cascade-in" style={{ animationDelay: '4.9s' }}>
                    Our Beliefs
                  </h2>
                </div>
                <div className="flex-1 max-w-3xl space-y-12">
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '5.0s' }}>
                    We're building Sauna because we believe a few things about how the world works:
                  </p>

                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-black mb-3 cascade-in" style={{ animationDelay: '5.1s' }}>1. Intelligence is Commoditizing. Context is the Moat.</h3>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '5.2s' }}>
                      GPT-4 is great. Claude 3.5 is great. Every model is getting smarter. Intelligence is commoditizing. What's not commoditized is context.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '5.3s' }}>
                      Here's what AI does better than humans: context switching. You can delete one file, add another, tell Sauna "update everything based on my latest board meeting" and instantly every draft, every analysis, every workflow reflects that new direction. No human can do that. No team can realign that fast.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '5.4s' }}>
                      The agent also maintains perfect version history—you can see exactly when your strategy changed, what the old version was, and why you updated it.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '5.5s' }}>
                      As AI intelligence commoditizes, winning companies will have the richest user context. Not foundation model companies—application layer companies that earn user trust to access their full digital lives.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '5.6s' }}>
                      After 90 days with Sauna, users tell us: "I can't go back to ChatGPT. Sauna knows too much about me." That's not lock-in from features—it's lock-in from compounding intelligence.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-black mb-3 cascade-in" style={{ animationDelay: '5.7s' }}>2. Work Is Changing</h3>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '5.8s' }}>
                      The bottleneck used to be what AI could do. Now it's how humans collaborate with AI. We need new interfaces, new workflows, new mental models.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '5.9s' }}>
                      Chat was phase one. Dashboards for delegation are phase two.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '6.0s' }}>
                      The world feels like crowded Times Square—constant notifications, fragmented context, shallow tasks. Knowledge workers spend their days drowning in noise: email, Slack, context-switching, administrative work. They switch tabs and products 1100 times per day, becoming essentially a copy/paste machine.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '6.1s' }}>
                      The deep creative work that actually matters gets squeezed into whatever time is left.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '6.2s' }}>
                      Our mission: Bring structure and joy back to knowledge work. Make the world feel less like crowded Times Square and more like a serene and creative walk in the woods.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '6.3s' }}>
                      The model is simple: AI does all the grunt work, humans do all the judgment. The agent drafts, you approve. It analyzes, you decide. It proposes, you refine. You get back to creative work—the work that requires your unique judgment, taste, and insight.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-black mb-3 cascade-in" style={{ animationDelay: '6.4s' }}>3. Amplified Teams Beat Headcount</h3>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '6.5s' }}>
                      The goal isn't one-person companies—it's 10X teams where each person owns dramatically more.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '6.6s' }}>
                      One person managing hiring end-to-end with AI handling pipeline, scheduling, analysis. Another owning full content strategy with AI drafting, distributing, analyzing across platforms. The leverage comes from AI agents that work 24/7 in the background while humans focus on judgment and creative work.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '6.7s' }}>
                      This is already happening in software engineering. It's about to happen everywhere else.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-black mb-3 cascade-in" style={{ animationDelay: '6.8s' }}>4. Batch Operations Are Where We Win</h3>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '6.9s' }}>
                      Single tasks are chatbot territory. Sauna's advantage is batch: "analyze these 20 CVs," "draft responses to all investor emails," "create Linear tickets from this meeting."
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '7.0s' }}>
                      Users process 20+ items at once, approve/edit/reject in minutes, and get back to creative work.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '7.1s' }}>
                      Knowledge workers don't have 20 single problems. They have 20 instances of the same problem. Solving one is chatbot work. Solving twenty at once is Sauna's territory.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-black mb-3 cascade-in" style={{ animationDelay: '7.2s' }}>5. Human-in-the-Loop Beats Full Automation</h3>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '7.3s' }}>
                      The most powerful AI agents aren't the most autonomous. They're the ones that nail human-agent collaboration.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '7.4s' }}>
                      Sauna isn't trying to replace your judgment. It does all the grunt work so you can focus on judgment. We show the browser window when the agent works. Visual trust. You can see it clicking through DocSend or updating your Linear board.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '7.5s' }}>
                      Full automation sounds good until it breaks. The right model: AI does all grunt work, human does all judgment. That collaboration is what knowledge work becomes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-black mb-3 cascade-in" style={{ animationDelay: '7.6s' }}>6. AGI Through Product, Not Just Intelligence</h3>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '7.7s' }}>
                      We believe AGI won't come from intelligence alone—it comes from integration.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '7.8s' }}>
                      The companies that reach AGI will be the ones millions of people trust enough to share their full lives with. We're competing on product that earns that trust, accumulates that context, and becomes impossible to replace.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '7.9s' }}>
                      That's the definition of AGI we care about: AI that's genuinely useful to as many people as possible.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '8.0s' }}>
                      The path to AGI isn't through smarter models alone—it's through products people trust enough to integrate into every part of their lives. Context compounds into capabilities impossible with raw intelligence alone.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '8.1s' }}>
                      We're racing to build that: the AI you can't imagine working without because it's learned everything about how you work.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Where We Are Today */}
            <section className='max-w-5xl mx-auto'>
              <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                <div className="md:w-72 md:flex-shrink-0">
                  <h2 className="text-lg lg:text-xl font-normal text-black cascade-in" style={{ animationDelay: '8.2s' }}>
                    Where We Are Today
                  </h2>
                </div>
                <div className="flex-1 max-w-3xl space-y-12">
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '8.3s' }}>
                    <span className="font-semibold">Team:</span> 14 people in San Francisco, office 50 meters from the beach at 1185B Old Mason Street. We're building an on-site team but open to candidates from Europe (we sponsor O-1 visas).
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '8.4s' }}>
                    <span className="font-semibold">Funding:</span> $30M raised from Spark Capital, Felicis, Y Combinator, Day One Ventures, and angels including Paul Graham, Vlad Magdalin (Webflow), Mathilde Collin (Front), and Paul Daugherty (Accenture). 70 months of runway.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '8.5s' }}>
                    <span className="font-semibold">Product:</span> Moving everything to cloud by November 28th, 2025. Main launch planned for Q1 2026, based on achieving product-market fit and virality coefficient.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '8.6s' }}>
                    <span className="font-semibold">Philosophy:</span> Product-market fit over growth. We're dogfooding intensely—conducting 100+ onboardings, working closely with lead investors, reaching internal consensus on how the product should work and where we're taking risks.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '8.7s' }}>
                    <span className="font-semibold">Competitive Strategy:</span> We can't compete with OpenAI and Anthropic on model intelligence. We're excited to compete with them on product. The race isn't who builds the smartest model—it's who builds the product that earns trust from millions of people.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '8.8s' }}>
                    Every foundation model company sees the application layer as the next battleground. Every productivity tool is adding "AI features." Every new startup promises agents. We have maybe 12 months to establish category dominance before the market gets noisy.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '8.9s' }}>
                    We're moving as fast as we responsibly can. Not reckless sprint (we learned that lesson), but disciplined urgency. Building the right foundation while the window is open.
                  </p>
                </div>
              </div>
            </section>

            {/* What Comes Next */}
            <section className='max-w-5xl mx-auto'>
              <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                <div className="md:w-72 md:flex-shrink-0">
                  <h2 className="text-lg lg:text-xl font-normal text-black cascade-in" style={{ animationDelay: '9.0s' }}>
                    What Comes Next
                  </h2>
                </div>
                <div className="flex-1 max-w-3xl space-y-12">
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '9.1s' }}>
                    The last six months have been the hardest of the company's life. Complete pivot. Architectural rebuild. Team realignment.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '9.2s' }}>
                    But we're through it. Product is clear, team is aligned, architecture is solid, early reactions are strong.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-4 cascade-in" style={{ animationDelay: '9.3s' }}>
                    We're building for a future where:
                  </p>
                  <ul className="space-y-2 text-base lg:text-lg leading-relaxed text-black font-normal pl-4 mb-6 cascade-in" style={{ animationDelay: '9.4s' }}>
                    <li>• Knowledge work feels less like chaos and more like creative flow</li>
                    <li>• AI handles the coordination tax so humans focus on judgment</li>
                    <li>• Context compounds over years, not resets every conversation</li>
                    <li>• Your taste scales to 1000 repetitions without degrading quality</li>
                    <li>• Software learns by watching, not by being configured</li>
                  </ul>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '9.5s' }}>
                    This is Wordware: an AI context lab where fourteen of us in San Francisco are building the layer where language programs intelligence.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '9.6s' }}>
                    Sauna is our first proof that words can become adaptive, intelligent ware. But it won't be the last.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal cascade-in" style={{ animationDelay: '9.7s' }}>
                    This is how software should work. This is how we reach AGI. This is the future we're building.
                  </p>
                </div>
              </div>
            </section>

            {/* Signature */}
            <section className="pb-0 max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                <div className="md:w-72 md:flex-shrink-0"></div>
                <div className="flex-1 max-w-3xl">
                  <p className="text-base lg:text-lg leading-relaxed text-black font-normal mb-2 cascade-in" style={{ animationDelay: '9.8s' }}>
                    Filip Kozera & Robert Chandler
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-gray-600 font-normal mb-1 cascade-in" style={{ animationDelay: '9.9s' }}>
                    Co-founders, Wordware
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-gray-600 font-normal mb-8 cascade-in" style={{ animationDelay: '10.0s' }}>
                    San Francisco, October 2025
                  </p>
                  <a
                    href="https://wordware.ashbyhq.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm md:text-base px-8 py-3 rounded-full font-mono uppercase hover:opacity-70 transition-opacity bg-[#292828] text-white cascade-in"
                    style={{ animationDelay: '10.1s' }}
                  >
                    Join our team
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

