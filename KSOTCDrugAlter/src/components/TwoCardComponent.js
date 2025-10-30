import React from "react";
import Footer from "./Footer";
// FourCardComponent for homepage section with very long cards and extra points
export default function FourCardComponent() {
  return (
    <>
    <section className="w-full py-20 ">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-slate-800 dark:text-slate-100 mb-16">
          Why Choose <span className="text-indigo-600">Medicino</span>?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 1 */}
          <div className="bg-purple-600 text-white rounded-3xl shadow-2xl p-12 min-h-[500px] flex flex-col justify-center hover:shadow-indigo-700/40 transition">
            <h3 className="text-3xl font-semibold mb-6">Trusted OTC Alternatives</h3>
            <p className="text-lg leading-relaxed max-w-prose">
              At Medicino, we simplify your health journey by providing clear, accessible, and evidence-based alternatives to prescription and over-the-counter drugs. Our platform ensures every suggestion is medically reliable.
              <br /><br />
              Whether you’re looking for quick replacements or long-term solutions, Medicino equips you with trustworthy knowledge for everyday life.
              <br /><br />
              We provide **detailed side-by-side comparisons** of substitutes so you can choose the best option.
              <br /><br />
              Our recommendations are regularly updated to reflect the latest medical guidelines and availability.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-purple-600 text-white rounded-3xl shadow-2xl p-12 min-h-[500px] flex flex-col justify-center hover:shadow-indigo-700/40 transition">
            <h3 className="text-3xl font-semibold mb-6">Empowering Your Health Choices</h3>
            <p className="text-lg leading-relaxed max-w-prose">
              Medicino empowers you to take charge of your health by presenting alternatives in a simple, comparative format, helping you make confident decisions.
              <br /><br />
              Understand benefits, compare options, and choose the best path for your well-being with our clear guidance.
              <br /><br />
              Our platform educates you on potential side effects and interactions to prevent mistakes.
              <br /><br />
              Personalized suggestions based on your health profile help you make smarter choices quickly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-purple-600 text-white rounded-3xl shadow-2xl p-12 min-h-[500px] flex flex-col justify-center hover:shadow-indigo-700/40 transition">
            <h3 className="text-3xl font-semibold mb-6">Comprehensive Information</h3>
            <p className="text-lg leading-relaxed max-w-prose">
              Compare costs, availability, and effectiveness of various OTC drugs in one place, making research quick and hassle-free.
              <br /><br />
              Get detailed insights and guidance for all your health alternatives without missing critical information.
              <br /><br />
              Track historical effectiveness and reviews from verified sources to aid your decision.
              <br /><br />
              Easily access dosage information, recommended schedules, and lifestyle tips with each alternative.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-purple-600 text-white rounded-3xl shadow-2xl p-12 min-h-[500px] flex flex-col justify-center hover:shadow-indigo-700/40 transition">
            <h3 className="text-3xl font-semibold mb-6">Safety & Reliability</h3>
            <p className="text-lg leading-relaxed max-w-prose">
              Our platform prioritizes your safety, ensuring that every alternative suggested is backed by trusted medical sources and verified for reliability.
              <br /><br />
              Make informed, confident decisions knowing Medicino focuses on your well-being first.
              <br /><br />
              All alternatives are cross-checked against side effects, allergies, and interactions to maximize safety.
              <br /><br />
              Our team constantly reviews feedback and updates the system to reflect new health research and regulations.
            </p>
          </div>
        </div>
      </div>
      
    </section>
    <Footer />
    </>
  );
}