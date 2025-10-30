import Body from "./Body";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <div className="bg-[#121212] flex justify-between items-center h-20 px-8">
        {/* Logo */}
        <h1 className="font-bold text-2xl text-white">Medicino </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-10 text-white font-sans">
            <li>
              <Link to="/" className="hover:text-purple-400 cursor-pointer">
                Home
              </Link>
            </li>

            <li className="hover:text-purple-400 cursor-pointer">
              <Link to="/login">Login</Link>
            </li>
            {/* <li className="hover:text-purple-400 cursor-pointer"></li> */}
            <li className="hover:text-purple-400 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-purple-400 cursor-pointer">
              <Link to="/medicinoBot">Medicino Bot</Link>
            </li>
            <li className="hover:text-purple-400 cursor-pointer">
              <Link to="/admin">Admin Login</Link>
            </li>
            <li className="hover:text-purple-400 cursor-pointer">
              <Link to="/chat">Live Chat</Link>
            </li>
            <li>
              <button className="bg-purple-500 h-10 w-36 rounded-xl hover:bg-purple-600 transition">
                <Link to="/getstarted">Get Started</Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {/* <Body /> */}
    </div>
  );
};

export default Header;
