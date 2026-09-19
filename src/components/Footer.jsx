function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#009C9C] text-[#12203A]"
    >

      <div
        className="
          max-w-5xl
          mx-auto
          px-10
          py-8
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
        "
      >

        {/* Explore */}

        <div>

          <h3 className="font-bold text-lg mb-3">
            Explore
          </h3>

          <div className="flex flex-col gap-2 text-sm">

            <a href="#about" className="hover:underline">
              Home
            </a>

            <a href="#about" className="hover:underline">
              Questions
            </a>

            <a href="#articles" className="hover:underline">
              Articles
            </a>

            <a href="#tutorials" className="hover:underline">
              Tutorials
            </a>

          </div>

        </div>


        {/* Support */}

        <div>

          <h3 className="font-bold text-lg mb-3">
            Support
          </h3>

          <div className="flex flex-col gap-2 text-sm">

            <a href="#contact" className="hover:underline">
              FAQs
            </a>

            <a href="#contact" className="hover:underline">
              Help
            </a>

            <a href="#contact" className="hover:underline">
              Contact Us
            </a>

          </div>

        </div>


        {/* Social */}

        <div>

          <h3 className="font-bold text-lg mb-3">
            Stay connected
          </h3>

          <div className="flex gap-3">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="
                bg-white
                w-8
                h-8
                rounded
                flex
                items-center
                justify-center
                font-bold
              "
            >
              f
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="
                bg-white
                w-8
                h-8
                rounded
                flex
                items-center
                justify-center
                font-bold
              "
            >
              X
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="
                bg-white
                w-8
                h-8
                rounded
                flex
                items-center
                justify-center
                font-bold
              "
            >
              ◎
            </a>

          </div>

        </div>

      </div>


      {/* Bottom */}

      <div className="text-center py-5 border-t border-[#007F7F]">

        <p className="font-bold mb-3">
          DEV@Deakin 2026
        </p>

        <div className="flex justify-center gap-6 text-sm">

          <a href="#contact" className="hover:underline">
            Privacy Policy
          </a>

          <a href="#contact" className="hover:underline">
            Terms
          </a>

          <a href="#contact" className="hover:underline">
            Code of Conduct
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;