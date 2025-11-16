import ImageContext from "../utils/ImageContext";
import { useContext, useState } from "react";

const Contact = () => {
  const image = useContext(ImageContext);
  const contactImg = image?.image || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-12 px-8 py-16 max-md:w-[330vw]">
      {/* Image */}
      <div className="flex-1">
        <img
          src={contactImg}
          className="w-full md:w-[800px] rounded-2xl shadow-lg"
          alt="contact"
        />
      </div>

      {/* Contact Form */}
      <div className="flex-1 mt-8 md:mt-0 text-left">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-6 max-md:text-6xl max-md:mb-20">
          Contact <span className="text-red-500">Us 📬</span>
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl mb-6 max-md:text-4xl max-md:mb-20">
          Have a question, suggestion, or just want to say hi? We'd love to hear
          from you! Fill out the form below and we’ll get back to you as soon as
          possible.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-4 rounded-lg text-gray-900 text-lg max-md:h-28 max-md:mb-8"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-4 rounded-lg text-gray-900 text-lg max-md:h-28 max-md:mb-8"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-4 rounded-lg text-gray-900 text-lg h-40 resize-none max-md:h-80 max-md:mb-8"
            required
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition duration-300 max-md:h-28 max-md:text-4xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
