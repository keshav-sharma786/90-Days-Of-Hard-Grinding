import { FaPlayCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeXmark } from "react-icons/fa6";
import { useState } from "react";

const VideoTitle = (props) => {
  const [showVolumeUp, setShowVolumeUp] = useState(true);
  // console.log(props);
  const { title, overview, setVolume, volume } = props;
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      {/* first I will basically have the heading, basically the name of my movie */}

      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="flex justify-between gap-2">
        <div className="md:flex md:gap-2 hidden">
          <button className="bg-white text-black p-4 px-12 text-2xl rounded-lg flex justify-center items-center gap-1 hover:opacity-80">
            <FaPlayCircle />
            play
          </button>
          <button className="bg-gray-500 text-white p-4 px-12 text-2xl opacity-50 rounded-lg mx-2 flex justify-center items-center gap-1">
            <IoMdInformationCircleOutline  />
            More Info
          </button>
        </div>
        <div
          className="text-4xl px-24"
          onClick={() => {
            setShowVolumeUp(!showVolumeUp);
            setVolume(!volume);
          }}
        >
          {/* <FaVolumeHigh
            onClick={() => {
              console.log("button clicked");
            }}
          /> */}
          {showVolumeUp ? <FaVolumeHigh className="text-lg md:text-4xl" /> : <FaVolumeXmark className="text-lg md:text-4xl" />}
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
