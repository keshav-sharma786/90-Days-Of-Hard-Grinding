import Header from "./Header";
import VideoBackground from "./VideoBackground";
import { useParams } from "react-router-dom";

const VideoPlay = () => {
  const { movieId } = useParams(); // 👈 get movieId from URL

  return (
    <div className="w-screen min-h-screen bg-black overflow-hidden">
      {/* ✅ Fixed: solid black layer behind header */}
      <div className="absolute top-0 left-0 w-full h-20 bg-black z-0"></div>

      {/* Header on top */}
      <Header />

      {/* Video player */}
      <div className="relative z-10">
        <VideoBackground movieId={movieId} volume={0} />
      </div>

      {/* Back button */}
      <div className="flex justify-center my-6 relative z-10">
        <button
          onClick={() => history.back()}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md transition font-semibold shadow-md"
        >
          <span>Back</span>
        </button>
      </div>
    </div>
  );
};

export default VideoPlay;
