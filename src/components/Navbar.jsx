import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

function Navbar() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return unsubscribe;
  }, []);

  async function handleLogout() {
    try {
      await signOut(auth);
      setMenuOpen(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      alert("Unable to log out. Please try again.");
    }
  }

  function handleSearch(e) {
    e.preventDefault();

    const term = search.toLowerCase().trim();

    const sections = {
      about: "about",
      work: "work",
      projects: "work",
      articles: "articles",
      tutorials: "tutorials",
      contact: "contact",
      gallery: "gallery",
    };

    const sectionId = sections[term];

    if (sectionId) {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      } else {
        window.location.href = `/#${sectionId}`;
      }
    } else {
      alert(
        "Section not found. Try About, Projects, Articles, Tutorials, Gallery or Contact."
      );
    }
  }

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Work", href: "/#work" },
    { label: "Articles", href: "/#articles" },
    { label: "Tutorials", href: "/#tutorials" },
    { label: "Contact", href: "/#contact" },
    { label: "Gallery", href: "/#gallery" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0F172A] px-4 py-3 md:px-6 lg:px-10">
      <div className="flex w-full flex-wrap items-center gap-x-4 gap-y-2 px-3 py-2 sm:px-4 lg:flex-nowrap lg:justify-between lg:gap-5 lg:px-10 lg:py-4">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="shrink-0 whitespace-nowrap text-lg font-semibold tracking-wider text-[#F8FAFC] sm:text-xl lg:text-2xl"
        >
          DEV<span className="text-[#2BB7A5]">@</span>Deakin
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:gap-x-4 lg:flex lg:text-lg xl:text-xl">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.label === "Home" ? (
                <Link
                  to="/"
                  className="text-white hover:text-[#2BB7A5]"
                >
                  Home
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="text-white hover:text-[#2BB7A5]"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop search */}
        <div className="hidden min-w-0 flex-1 sm:min-w-[180px] lg:ml-auto lg:block lg:max-w-[220px]">
          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search sections..."
              aria-label="Search sections"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 w-full rounded border border-gray-300 bg-white px-3 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </form>
        </div>

        {/* Desktop Post, Profile and Login/Logout */}
        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <Link
            to="/"
            className="text-base text-white hover:text-[#2BB7A5] lg:text-lg"
          >
            Post
          </Link>

          {isLoggedIn && (
            <Link
              to="/profile"
              className="text-base text-white hover:text-[#2BB7A5] lg:text-lg"
            >
              Profile
            </Link>
          )}

          {isLoggedIn ? (
            <button
              type="button"
              onClick={handleLogout}
              className="text-base text-white hover:text-[#2BB7A5] lg:text-lg"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-base text-white hover:text-[#2BB7A5] lg:text-lg"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto rounded p-2 text-2xl text-white hover:bg-white/10 lg:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mt-3 border-t border-white/20 px-3 pb-3 pt-4 lg:hidden">
          <ul className="flex flex-col gap-3 text-base sm:text-lg">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.label === "Home" ? (
                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="block py-1 text-white hover:text-[#2BB7A5]"
                  >
                    Home
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-1 text-white hover:text-[#2BB7A5]"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile search */}
          <form
            onSubmit={handleSearch}
            className="mt-4 flex items-center gap-2"
          >
            <input
              type="search"
              placeholder="Search sections..."
              aria-label="Search sections"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 w-2/3 rounded border border-gray-300 bg-white px-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="h-10 rounded bg-[#2BB7A5] px-3 text-sm font-semibold text-[#12203A]"
            >
              Search
            </button>
          </form>

          {/* Mobile Post, Profile and Login/Logout */}
          <div className="mt-4 flex flex-col items-start gap-2 border-t border-white/20 pt-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-[#2BB7A5]"
            >
              Post
            </Link>

            {isLoggedIn && (
              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-[#2BB7A5]"
              >
                Profile
              </Link>
            )}

            {isLoggedIn ? (
              <button
                type="button"
                onClick={handleLogout}
                className="text-white hover:text-[#2BB7A5]"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-[#2BB7A5]"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
