import React from "react";
import TwoCardComponent from "./TwoCardComponent";
import { Link } from "react-router";

// Body component for homepage
// Layout: Left side = cover lines, Right side = image
export default function Body() {
  const nurse = new URL("../assets/nurse.png", import.meta.url);
  return (
    <main className="w-full ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT: Cover lines */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100 leading-tight">
            Find <span className="text-indigo-600">Safe Alternatives</span> for
            Your Medicines
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg">
            Your trusted guide to Over-The-Counter (OTC) drug alternatives.
            Discover substitutes, compare effectiveness, and make informed
            health choices with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg font-medium">
              <Link to="/getstarted">Get Started</Link>
            </button>
            <button className="px-6 py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-xl font-medium">
              <Link to="/about">Learn More</Link>
            </button>
          </div>
        </div>

        {/* RIGHT: Nurse/Doctor image */}
        <div className="flex justify-center md:justify-end h-[700px] mt-20">
          <img
            src={nurse}
            alt="Nurse or Doctor illustration"
            className=" rounded-2xl shadow-xl"
          />
        </div>
        
      </div>
      <TwoCardComponent />
    </main>
  );
}
