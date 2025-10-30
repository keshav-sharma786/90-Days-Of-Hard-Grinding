import { useState, useContext } from "react";
import ImageContext from "../utils/ImageContext";

const Home = () => {
  const Burger1 = new URL("../assets/Burger1.png", import.meta.url);
  // const Burger2 = new URL("../assets/Burger2.png", import.meta.url);
  const Burger3 = new URL("../assets/Burger3.png", import.meta.url);
  const Burger4 = new URL("../assets/Burger4.png", import.meta.url);
  const Burger5 = new URL("../assets/Burger5.png", import.meta.url);
  const image = useContext(ImageContext);
  const imgPath = image.image.pathname;
  const [mainImage, setMainImage] = useState(imgPath);
  return (
    <>
      <div className="flex justify-evenly bg-[#121212] mr-5 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:w-[330vw]">
        <div>
          <h1 className="text-white text-5xl mt-40 ml-20 font-extrabold max-md:text-9xl">
            Welcome To KS <span className="text-red-500">Meghna Foods 🍔</span>
          </h1>
          <div className="mt-4 text-2xl max-md:text-6xl max-md:mt-20 max-md:py-6">
            <p className="text-white ml-20 text-left max-md:my-5">
              <span>
                Your One-Stop Destination for Every Craving"
                <br />
              </span>{" "}
              <span>✨ From sizzling street.</span>
            </p>
            <p className="text-white ml-20 max-md:my-5">
              food to gourmet delights, we bring flavors that satisfy every
              mood.
            </p>

            <p className="text-white ml-20 max-md:my-5">
              Enjoy World-Class Cuisines, Mouth-Watering Dishes, and Comfort
              Food{" "}
            </p>
            <p className="text-white ml-20 max-md:my-5">
              Made Just for You! 🍴 Fresh ingredients.
            </p>
            <p className="text-white ml-20 max-md:my-5">
              Because your hunger deserves the best!
            </p>
          </div>
        </div>
        <div className="w-[1000px] mt-4">
          <img
            src={mainImage}
            alt="Burger"
            className="w-full h-[800px] rounded-xl max-md:h-[1600px]"
          />
        </div>
      </div>
      {/* showing the 5 burger components */}

      <div className="flex gap-6 bg-[#121212] p-6 rounded-xl max-md:w-[330vw]">
        <div
          className="rounded-xl p-2 bg-red-950 hover:bg-red-900 max-md:w-[30%] max-md:flex max-md:justify-center max-md:items-center"
          style={{ boxShadow: "0 0 10px white" }}
        >
          <img
            src={imgPath}
            className="w-40 h-40 object-cover rounded-lg max-md:w-[80%] max-md:h-[100%]"
            alt="burger"
            onClick={() => {
              // console.log("clicked");
              setMainImage(imgPath);
            }}
          />
        </div>
        <div
          className="border rounded-xl p-2 bg-red-950 hover:bg-red-900 max-md:w-[30%] max-md:flex max-md:justify-center max-md:items-center"
          style={{ boxShadow: "0 0 10px white" }}
        >
          <img
            src={Burger3}
            className="w-40 h-40 object-cover rounded-lg max-md:w-[80%] max-md:h-[100%]"
            alt="burger"
            onClick={() => {
              // console.log("clicked");
              setMainImage(Burger3);
            }}
          />
        </div>
        <div
          className="border rounded-xl p-2 bg-red-950 hover:bg-red-900 max-md:w-[30%] max-md:flex max-md:justify-center max-md:items-center"
          style={{ boxShadow: "0 0 10px white" }}
        >
          <img
            src={Burger4}
            className="w-40 h-40 object-cover rounded-lg max-md:w-[80%] max-md:h-[100%]"
            alt="burger"
            onClick={() => {
              // console.log("clicked");
              setMainImage(Burger4);
            }}
          />
        </div>
        <div
          className="border  rounded-xl p-2 bg-red-950 hover:bg-red-900 max-md:w-[30%] max-md:flex max-md:justify-center max-md:items-center"
          style={{ boxShadow: "0 0 10px white" }}
        >
          <img
            src={Burger5}
            className="w-40 h-40 object-cover rounded-lg max-md:w-[80%] max-md:h-[100%]"
            alt="burger"
            onClick={() => {
              // console.log("clicked");
              setMainImage(Burger5);
            }}
          />
        </div>
        <div
          className="border rounded-xl p-2 bg-red-950 hover:bg-red-900 max-md:w-[30%] max-md:flex max-md:justify-center max-md:items-center"
          style={{ boxShadow: "0 0 10px white" }}
        >
          <img
            src={Burger1}
            className="w-40 h-40 object-cover rounded-lg max-md:w-[80%] max-md:h-[100%]"
            alt="burger"
            onClick={() => {
              // console.log("clicked");
              setMainImage(Burger1);
            }}
          />
        </div>
      </div>
      {/* building the main body component */}
    </>
  );
};

export default Home;
