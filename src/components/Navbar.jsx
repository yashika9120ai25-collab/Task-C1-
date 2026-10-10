
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-[#12203A] flex items-center gap-6 px-10 py-3">

      {/* Logo */}
      <Link
        to="/"
        className="text-[#E8A33D] font-semibold text-xl tracking-widest whitespace-nowrap"
      >
        DEV<span className="text-[#2BB7A5]">@</span>Deakin
      </Link>

      {/* Existing navigation links */}
      <ul className="flex items-center gap-5 list-none whitespace-nowrap">
        <li><Link to="/" className="text-white hover:text-[#2BB7A5]">Home</Link></li>
        <li><a href="/#about" className="text-white hover:text-[#2BB7A5]">About</a></li>
        <li><a href="/#work" className="text-white hover:text-[#2BB7A5]">Work</a></li>
        <li><a href="/#articles" className="text-white hover:text-[#2BB7A5]">Articles</a></li>
        <li><a href="/#tutorials" className="text-white hover:text-[#2BB7A5]">Tutorials</a></li>
        <li><a href="/#contact" className="text-white hover:text-[#2BB7A5]">Contact</a></li>
      </ul>

      {/* Visible search bar */}
      <div className="flex-1 min-w-[180px] max-w-[320px] ml-auto">
        <input
          type="search"
          placeholder="Search..."
          aria-label="Search DEV@Deakin"
          className="block w-full h-10 rounded border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Post and Login */}
      <div className="flex items-center gap-6 whitespace-nowrap">
        <Link to="/" className="text-white hover:text-[#2BB7A5]">
          Post
        </Link>
        <Link to="/login" className="text-white hover:text-[#2BB7A5]">
          Login
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;
