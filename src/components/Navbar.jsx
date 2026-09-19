function Navbar() {
  return (
    <nav className="bg-[#12203A] flex justify-between items-center px-10 py-4 sticky top-0 z-50">

      <div className="text-[#E8A33D] font-semibold text-xl tracking-widest">
        DEV<span className="text-[#2BB7A5]">@</span>Deakin
      </div>

      <ul className="flex gap-8 list-none">

        <li>
          <a
            href="#about"
            className="text-slate-100 text-sm tracking-wide hover:text-[#2BB7A5] transition-colors duration-200"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#work"
            className="text-slate-100 text-sm tracking-wide hover:text-[#2BB7A5] transition-colors duration-200"
          >
            Work
          </a>
        </li>

        <li>
          <a
            href="#articles"
            className="text-slate-100 text-sm tracking-wide hover:text-[#2BB7A5] transition-colors duration-200"
          >
            Articles
          </a>
        </li>

        <li>
          <a
            href="#tutorials"
            className="text-slate-100 text-sm tracking-wide hover:text-[#2BB7A5] transition-colors duration-200"
          >
            Tutorials
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="text-slate-100 text-sm tracking-wide hover:text-[#2BB7A5] transition-colors duration-200"
          >
            Contact
          </a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;