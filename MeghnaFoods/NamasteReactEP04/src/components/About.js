import ImageContext from "../utils/ImageContext";
import { useContext } from "react";

const About = () => {
  const image = useContext(ImageContext);

  // Assuming your context provides the full image path or URL
  const aboutImg = image?.image || "";

  return (
    <div className="flex flex-col md:flex-row items-center gap-12 px-8 py-16 max-md:w-[330vw] max-md:h-full">
      {/* Image */}
      <div className="flex-1">
        <img
          src={aboutImg}
          className="w-full md:w-[800px] rounded-2xl shadow-lg"
          alt="about"
        />
      </div>

      {/* Text */}
      <div className="flex-1 mt-8 md:mt-0 text-left">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-6 max-md:text-9xl max-md:mb-20">
          About <span className="text-red-500">Meghna Foods 🍔</span>
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl mb-4 max-md:text-5xl max-md:mb-20">
          At Meghna Foods, we bring you the authentic taste of delicious
          burgers, pizzas, and much more. Our chefs are passionate about
          crafting meals with love and the finest ingredients.
        </p>
        <p className="text-gray-300 text-xl md:text-2xl mb-4 max-md:text-5xl max-md:mb-20">
          Whether you’re craving a quick snack or a fulfilling meal, we’ve got
          you covered. Experience the joy of food with us because at Meghna
          Foods, it’s not just food – it’s happiness on a plate!
        </p>
        <p className="text-gray-300 text-xl md:text-2xl mb-4 max-md:text-5xl max-md:mb-20">
          We focus on quality and consistency, ensuring every bite is fresh and
          satisfying. Our menu is designed to cater to all taste buds, from
          classic favorites to innovative new flavors.
        </p>
        <p className="text-gray-300 text-xl md:text-2xl mb-4 max-md:text-5xl max-md:mb-20">
          Sustainability matters to us. We source our ingredients responsibly
          and strive to minimize waste while serving delicious food.
        </p>
        <p className="text-gray-300 text-xl md:text-2xl mb-4 max-md:text-5xl max-md:mb-20">
          Customer experience is our top priority. We create a welcoming
          atmosphere, whether you’re dining in, ordering online, or grabbing
          takeout.
        </p>
        <p className="text-gray-300 text-xl md:text-2xl max-md:text-5xl max-md:mb-20">
          Meghna Foods is more than a restaurant – it’s a community where food
          lovers can come together, celebrate flavors, and make memories that
          last.
        </p>
      </div>
    </div>
  );
};

export default About;
