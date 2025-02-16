import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind is loaded

import './slanding.css'
// Demo data for the demos
const demos = [
  {
    title: "Chat with your documents",
    description: "Create your own knowledge library and find answers easily.",
    videoUrl: "example.mp4",
    features: [
      "Create your own knowledge library",
      "Chat with documents and find answers easily",
      "Create documents using content from your library",
      "Sources for verified results",
      "Summarize documents for quick reads",
    ],
  },
  {
    title: "Search web",
    description: "Search the web better using chat.",
    videoUrl: "example2.mp4",
    features: [
      "Focused search – Academic, Mathematics, Wikipedia, Social",
      "Sources for verified results",
      "AI Image search and generation",
    ],
  },
  {
    title: "Write",
    description: "Generate world-class documents using your library and web.",
    videoUrl: "example3.mp4",
    features: [
      "Generate replies to emails and letters",
      "Re-writing drafts with grammar and tone correction",
    ],
  },
];


// Intersection observer for animations on scroll
const useAnimateOnScroll = (threshold = 0.1) => {
  const [ref, inView] = useInView({ threshold });
  return { ref, inView };
};

export default function LandingPage() {

  
const tabs = [
  {
    name: "Chat with your documents",
    description:
      "Interact with your documents using AI-powered chat. Upload PDFs, Word files, and more to get summaries, insights, and answers instantly.",
    video: "https://www.example.com/chat-demo.mp4",
  },
  {
    name: "Write with AI",
    description:
      "Generate high-quality content effortlessly with AI. Whether it's articles, emails, or reports, let AI assist you in writing efficiently.",
    video: "https://www.example.com/write-demo.mp4",
  },
  {
    name: "Search the web",
    description:
      "Leverage AI to search the web smartly. Get summarized results, cross-check facts, and retrieve relevant information efficiently.",
    video: "https://www.example.com/search-demo.mp4",
  },
];
  const parallaxRef = useAnimateOnScroll();
  
  // State for selected demo
  const [selectedDemo, setSelectedDemo] = useState({
    title: 'Web Search',
    description: 'Explore intelligent and optimized web searches.',
    videoUrl: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif', // Replace with actual URL
    isVideo: true, // Set to true if using a video
  });

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
        <nav
  className="fixed top-0 left-0 right-0 flex items-center justify-between p-6 lg:px-8 bg-inherit z-50 bg-white"
  aria-label="Global"
>
  <div className="flex lg:flex-1">
    <a href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">Your Company</span>
      <img
        className="h-12 w-auto"
        src="https://i.ibb.co/VqMpVS3/Whats-App-Image-2024-10-09-at-00-17-26-removebg-preview.png"
        alt=""
      />
    </a>
  </div>
  <div className="flex lg:hidden">
    <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  </div>

  <div className="hidden lg:flex lg:gap-x-12">
    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
      Product
    </a>
    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
      Features
    </a>
    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
      Marketplace
    </a>
    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
      Company
    </a>
  </div>

  <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
      Log in <span aria-hidden="true">&rarr;</span>
    </a>
  </div>
</nav>


          {/* Mobile Menu (Optional) */}
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Product
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Marketplace
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Company
                    </a>
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="relative isolate px-6 pt-10 lg:px-8">
        <div
  className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 animate-float"
  aria-hidden="true"
>
  <div
    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-45 bg-gradient-to-tr from-[#7f5af0] via-[#3c9aff] to-[#f72585] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-gradient"
  ></div>
</div>

<div
  className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] animate-float"
  aria-hidden="true"
>
  <div
    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[-30deg] bg-gradient-to-tr from-[#7f5af0] via-[#3c9aff] to-[#f72585] opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] animate-gradient"
  ></div>
</div>
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-52">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              {/* Optional Announcement */}
            </div>

            <div className="text-center">
              <h1 className="mt-12 text-4xl font-bold text-gray-900 sm:text-4xl tracking-normal">
              Introducing 4GenAI – Intelligence of the world’s best AI LLMs combined into one!  
              </h1>
              <p className="mt-7 text-2xl leading-8 tracking-normal text-gray-600">
                Chat with your documents, search the web like never before, prepare world class documents & content – all using the best AI models
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-2xl text-lg bg-black px-7 py-4 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Try Our Super LLM for Free!
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#a8c5f0] to-[#95b8ec] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            ></div>
          </div>
        </div>
      </div>
      

      






<div class="bg-gray-50 py-24 sm:py-16">
  <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-center text-base/7 font-semibold text-indigo-600">4Gen AI</h2>
    <p class="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">Everything you need to know</p>
    <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
      <div class="relative lg:row-span-2">
        <div class="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
          <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Multiple LLMs</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">One interface to access multiple LLMs without logging in separately.  </p>
          </div>
          <div class="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
            <div class="absolute inset-x-10 top-10 bottom-0 overflow-hidden shadow-2xl">
              <img class="size-full object-cover object-top" src="https://i.ibb.co/Ldzq98V5/istockphoto-2149059417-612x612.jpg" alt=""/>
            </div>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
      </div>
      <div class="relative max-lg:row-start-1">
        <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
          <div class="px-8 pt-8 sm:px-10 sm:pt-10">
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Save money</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Don’t pay for multiple LLMs to access them. Get 10 LLMs at the price of 1</p>
          </div>
          <div class="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
            <img class="w-full max-lg:max-w-xs" src="https://i.ibb.co/rK149Gq0/2283492.jpg" alt=""/>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
      </div>
      <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
        <div class="absolute inset-px rounded-lg bg-white"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
          <div class="px-8 pt-8 sm:px-10 sm:pt-10">
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Smart model selection </p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Smart model selection based on task (e.g., GPT-4 for reasoning, Claude for creativity).</p>
          </div>
          <div class="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
            <img class="h-[min(152px,40cqw)] object-cover p-2" src="https://i.ibb.co/Fqq9HsWm/Screenshot-2025-02-16-102700.png" alt=""/>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
      </div>
      <div class="relative lg:row-span-2">
        <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
          <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Content Generation</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Automated content generation, summarization, or coding assistance.</p>
          </div>
          <div class="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
            <div class="absolute inset-x-10 top-10 bottom-0 overflow-hidden shadow-2xl">
              <img class="size-full object-cover object-top" src="https://i.ibb.co/TDXZ4LnG/Screenshot-2025-02-17-030712.png" alt=""/>
            </div>
          </div>
            
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
      </div>
    </div>
  </div>
</div>


      {/* Buttons and Demo Preview Section */}
      <div className="py-16 bg-gray-100 text-black flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Explore Our Features
      </h2>
      
      <div className="flex space-x-4 mb-12">
        {demos.map((demo) => (
          <button
            key={demo.title}
            onClick={() => setSelectedDemo(demo)}
            className={`px-6 py-3 rounded-full font-medium text-white transition-all duration-300 shadow-lg backdrop-blur-md bg-opacity-50 border border-gray-700 hover:bg-opacity-80 hover:scale-105 ${
              selectedDemo?.title === demo.title ? "bg-blue-600" : "bg-gray-800"
            }`}
          >
            {demo.title}
          </button>
        ))}
      </div>

      {selectedDemo && (
        <div className="w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-wrap border border-gray-300">
          {/* Features Section */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-gray-800">
            <h3 className="text-2xl font-semibold text-black mb-4">{selectedDemo.title}</h3>
            <p className="mb-4 text-gray-600">{selectedDemo.description}</p>
            <ul className="space-y-3">
              {selectedDemo.features?.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-blue-500">✔</span>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Video Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-900 relative overflow-hidden">
            {selectedDemo.videoUrl ? (
              selectedDemo.videoUrl.endsWith(".mp4") ? (
                <video src={selectedDemo.videoUrl} autoPlay loop muted className="w-full h-80 object-cover" />
              ) : (
                <img src={selectedDemo.videoUrl} alt={selectedDemo.title} className="w-full h-80 object-cover" />
              )
            ) : (
              <p className="text-gray-300 p-6">No media available</p>
            )}
          </div>
        </div>
      )}
    </div>




    <div className="relative bg-gradient-to-br from-blue-100 to-indigo-200 py-16">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900">Exclusive Offer: Join Now & Get 1 Month Free!</h2>
    <p className="mt-4 text-lg text-gray-700">Unlock the full power of GenAI with our premium plan. Subscribe today and enjoy an extra month at no cost.</p>
    <a href="#" className="inline-block mt-8 px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">Join Now</a>
  </div>
</div>


      {/* Additional Sections (Features, Pricing, etc.) */}
      {/* ... Your existing features and pricing sections ... */}

      {/* Pricing Section (Uncomment and Adjust as Needed) */}
      {/* <div className="bg-white py-24 sm:py-32">
        {/* Pricing content here */}
      {/* </div> */}




<div className="bg-gray-50 py-16">
  <h2 className="text-3xl font-bold text-center text-gray-900">Choose Your Plan</h2>
  <p className="mt-4 text-center text-gray-600 text-lg max-w-2xl mx-auto">
    Select the plan that fits your needs and start harnessing the power of GenAI today.
  </p>

  <div className="mt-12 flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-6 lg:px-8">
    {/* Standard Plan */}
    <div className="p-8 bg-black text-white rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 relative w-full sm:w-1/2 lg:w-1/3">
  <span className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
  <h3 className="text-xl font-semibold">Standard Plan</h3>
  <p className="mt-2">Ideal for small teams wanting enhanced features.</p>
  <div className="mt-4">
    <span className="text-4xl font-bold">$19.99</span>
    <span className="text-xl">/month</span>
  </div>
  <ul className="mt-6 space-y-3">
    <li>✔️ 2500 pages per document</li>
    <li>✔️ Max upload size: 30MB</li>
    <li>✔️ 50 documents per day</li>
    <li>✔️ 1200 questions per day</li>
    <li>✔️ 50 conversations per day</li>
    <li>✔️ 4GenAI trial (most powerful model)</li>
    <li>✔️ GPT-4o Mini, GPT-4 model, Claude 3 Sonnet, Claude 3 Opus, Mistral, Wizard, Llama</li>
    <li>✔️ 50 files max in Knowledge Library</li>
    <li>✔️ 500MB storage</li>
    <li>✔️ OCR Support</li>
    <li>✔️ Chat with multiple documents at once (Knowledge Library)</li>
  </ul>
  <button className="mt-8 w-full bg-white text-black font-semibold py-2 rounded-lg shadow hover:bg-gray-100">
    Choose Standard
  </button>
</div>


    {/* Premium Plan */}
    <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 w-full sm:w-1/2 lg:w-1/3">
  <h3 className="text-xl font-semibold text-gray-800">Premium Plan</h3>
  <p className="text-gray-600 mt-2">Perfect for large teams needing full support and advanced features.</p>
  <div className="mt-4 text-gray-900">
    <span className="text-4xl font-bold">$199</span>
    <span className="text-xl">/year</span>
  </div>
  <ul className="mt-6 space-y-3 text-gray-600">
    <li>✔️ 5000 pages per document</li>
    <li>✔️ Max upload size: 500MB</li>
    <li>✔️ 150 documents per day</li>
    <li>✔️ 100000 questions per day</li>
    <li>✔️ 10000 conversations per day</li>
    <li>✔️ 4GenAI (most powerful model)</li>
    <li>✔️ GPT-4o Mini, GPT-4 model, Claude 3 Sonnet, Claude 3 Opus, Mistral, Wizard, Llama</li>
    <li>✔️ 1000 files max in Knowledge Library</li>
    <li>✔️ 10GB storage</li>
    <li>✔️ OCR Support</li>
    <li>✔️ Chat with multiple documents at once (Knowledge Base)</li>
    <li>✔️ Priority support</li>
    <li>✔️ Priority access to new features</li>
  </ul>
  <button className="mt-8 w-full bg-black text-white font-semibold py-2 rounded-lg shadow hover:bg-indigo-700">
    Choose Premium
  </button>
</div>

  </div>
</div>






<div className="bg-white py-12">
  <h2 className="text-2xl font-semibold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
  <div className="max-w-2xl mx-auto">
    {[
      { question: 'How secure is my data?', answer: 'We use industry-standard encryption to keep your data safe.' },
      { question: 'What AI models are used?', answer: 'We integrate top models from various providers for best performance.' },
      { question: 'Is there a free trial?', answer: 'Yes, we offer a 7-day free trial for new users.' },
      { question: 'How many tokens do I get?', answer: 'Our plans come with generous token limits. Check our pricing page for details.' },
      { question: 'Is switching between models seamless?', answer: 'Yes, you can switch models easily without losing context.' },
      { question: 'Can I cancel anytime?', answer: 'Yes, you can cancel your subscription at any time without penalties.' },
    ].map((faq, idx) => (
      <div key={idx} className="p-4 mb-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-all">
        <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
        <p className="mt-2 text-gray-600">{faq.answer}</p>
      </div>
    ))}
  </div>
</div>



      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <img
                  src="https://i.ibb.co/VqMpVS3/Whats-App-Image-2024-10-09-at-00-17-26-removebg-preview.png"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Flowbite
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline">
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024 <a href="https://flowbite.com/" className="hover:underline">
                4GenAI
              </a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                {/* Facebook Icon */}
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                {/* Discord Icon */}
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                {/* Twitter Icon */}
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                {/* GitHub Icon */}
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                {/* Dribbble Icon */}
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
