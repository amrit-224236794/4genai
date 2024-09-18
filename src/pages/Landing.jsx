import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind is loaded

// Placeholder data for the demos and pricing
const demoData = [
  { title: "Demo 1", desc: "Description of demo 1" },
  { title: "Demo 2", desc: "Description of demo 2" },
  { title: "Demo 3", desc: "Description of demo 3" },
  { title: "Demo 4", desc: "Description of demo 4" },
];

const pricingPlans = [
  { title: "Basic", price: "$10", features: ["Feature A", "Feature B", "Feature C"] },
  { title: "Pro", price: "$25", features: ["Feature D", "Feature E", "Feature F"] },
  { title: "Enterprise", price: "$50", features: ["Feature G", "Feature H", "Feature I"] }
];

// Intersection observer for animations on scroll
const useAnimateOnScroll = (threshold = 0.1) => {
  const [ref, inView] = useInView({ threshold });
  return { ref, inView };
};

export default function LandingPage() {
  const parallaxRef = useAnimateOnScroll();

  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white shadow-lg z-50 transition duration-500 ease-in-out">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-[#22808D]">GenAI</a>
          <ul className="flex space-x-6">
            <li><a href="#demos" className="hover:text-[#22808D] transition-colors duration-300">Demos</a></li>
            <li><a href="#pricing" className="hover:text-[#22808D] transition-colors duration-300">Pricing</a></li>
            <li><a href="#contact" className="hover:text-[#22808D] transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Parallax Carousel */}
      <section 
        className="h-screen relative bg-fixed bg-center bg-cover bg-[#22808D]"
        style={{ backgroundImage: "url('https://via.placeholder.com/1500')" }}
      >
        <div className="absolute inset-0 bg-[#22808D] opacity-75"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white space-y-4 animate-fadeIn">
          <h1 className="text-6xl font-bold animate-slideUp">Next-Gen AI Solutions</h1>
          <p className="text-xl">Experience AI like never before</p>
          <button className="px-6 py-3 bg-white text-[#22808D] font-semibold rounded-lg shadow-lg hover:bg-[#22808D] hover:text-white transition duration-500 ease-in-out">
            Get Started
          </button>
        </div>
      </section>

      {/* Demo Sections */}
      <section id="demos" className="py-16 bg-white">
        {demoData.map((demo, idx) => {
          const { ref, inView } = useAnimateOnScroll();
          return (
            <div
              key={demo.title}
              className={`container mx-auto py-12 flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center opacity-0 transition-opacity duration-500 ease-out ${inView && 'opacity-100'}`}
              ref={ref}
            >
              <div className="w-1/2">
                <img
                  src="https://via.placeholder.com/600"
                  alt={demo.title}
                  className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="w-1/2 p-8">
                <h2 className="text-4xl font-bold mb-4 text-[#22808D]">{demo.title}</h2>
                <p className="text-lg text-gray-700">{demo.desc}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Pricing and Plans */}
      <section id="pricing" className="py-16 bg-[#22808D] text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="flex justify-center space-x-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.title}
                className="bg-white text-[#22808D] shadow-lg rounded-lg p-8 w-1/3 transform transition-transform duration-500 hover:scale-105 hover:bg-[#22808D] hover:text-white"
              >
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-4xl font-semibold mb-6">{plan.price}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-teal-500">&#10003;</span>
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-4 py-2 bg-[#22808D] text-white font-semibold rounded-lg hover:bg-white hover:text-[#22808D] transition duration-500 ease-in-out">
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2024 GenAI. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-teal-400 transition duration-300">Twitter</a>
            <a href="#" className="hover:text-teal-400 transition duration-300">LinkedIn</a>
            <a href="#" className="hover:text-teal-400 transition duration-300">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
