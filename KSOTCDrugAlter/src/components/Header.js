import { Link, useNavigate } from "react-router"; 
import { useAuth } from "../AuthContext" // ✅ Import Auth Context

const Header = () => {
  const { isLoggedIn, logout } = useAuth(); // ✅ Get login state + logout function
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // ✅ Remove token + update context
    navigate("/login"); // ✅ Redirect after logout
  };

  return (
    <div className="bg-[#121212] flex justify-between items-center h-20 px-8">
      {/* 🌿 Logo */}
      <h1
        className="font-bold text-2xl text-white cursor-pointer"
        onClick={() => navigate("/")}
      >
        Medicino
      </h1>

      {/* 🌈 Navigation */}
      <nav>
        <ul className="flex items-center gap-10 text-white font-sans">
          {/* Always visible */}
          <li>
            <Link to="/" className="hover:text-purple-400 cursor-pointer">
              Home
            </Link>
          </li>

          {/* 👇 Show when NOT logged in */}
          {!isLoggedIn && (
            <>
              <li className="hover:text-purple-400 cursor-pointer">
                <Link to="/login">Login</Link>
              </li>
              <li className="hover:text-purple-400 cursor-pointer">
                <Link to="/admin">Admin Login</Link>
              </li>
            </>
          )}

          {/* 👇 Show only when logged in */}
          {isLoggedIn && (
            <>
              <li className="hover:text-purple-400 cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-purple-400 cursor-pointer">
                <Link to="/medicinoBot">Medicino Bot</Link>
              </li>
               <li className="hover:text-purple-400 cursor-pointer">
                <Link to="/medicinoBot2">Medicino Bot 2.0</Link>
              </li>
              <li className="hover:text-purple-400 cursor-pointer">
                <Link to="/chat">Live Chat</Link>
              </li>
              <li className="hover:text-purple-400 cursor-pointer">
                <Link to="/searchMedicines">Search Medicines</Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 h-10 w-28 rounded-xl hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
