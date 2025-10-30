import React from "react";

const AboutUs = () => {
   const nurse = new URL("../assets/nurse.png", import.meta.url);
  return (
    <section className="relative  text-white py-20 px-5 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={nurse}
            alt="Medicino Team"
            className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide animate-fadeIn">
            About Medicino
          </h2>

          <p className="text-lg md:text-xl leading-relaxed animate-fadeIn delay-200">
            Welcome to <span className="font-bold">Medicino</span> — your
            trusted partner in healthcare innovation. At Medicino, we are
            dedicated to making access to safe and effective medicines simpler,
            smarter, and more convenient. Our mission is to bridge the gap
            between patients, pharmacists, and healthcare providers with
            cutting-edge solutions.
          </p>

          <p className="text-lg md:text-xl leading-relaxed animate-fadeIn delay-400">
            Since our inception, we have been driven by the values of{" "}
            <span className="font-semibold">
              trust, transparency, and technology
            </span>
            . Our platform offers a wide range of over-the-counter medications,
            supplements, and healthcare products, accompanied by reliable
            alternatives and expert guidance to ensure the right choice for
            every individual.
          </p>

          <p className="text-lg md:text-xl leading-relaxed animate-fadeIn delay-600">
            Our team of dedicated professionals combines medical expertise with
            innovative technology, creating a seamless experience that empowers
            users to make informed decisions about their health. Whether it's
            discovering an alternative medication, checking drug interactions,
            or learning about healthy living, Medicino is committed to your
            well-being.
          </p>

          <p className="text-lg md:text-xl leading-relaxed animate-fadeIn delay-800">
            At Medicino, we believe that{" "}
            <span className="font-semibold">
              healthcare should be accessible, reliable, and personalized
            </span>
            . We are constantly evolving our platform to integrate the latest
            medical research, advanced AI recommendations, and user-friendly
            design, ensuring that every visit to Medicino is a step towards a
            healthier life.
          </p>

          <p className="text-lg md:text-xl leading-relaxed animate-fadeIn delay-1000">
            Join us on our journey to transform healthcare experiences. With
            Medicino, you are not just a user; you are a part of a community
            that values knowledge, care, and innovation. Together, let's build a
            world where access to medicines and healthcare knowledge is just a
            click away.
          </p>

          <button className="mt-6 bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Learn More About Us
          </button>
        </div>
      </div>

      {/* Optional: animated background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </section>
  );
};

export default AboutUs;
