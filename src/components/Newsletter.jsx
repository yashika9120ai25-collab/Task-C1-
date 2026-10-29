import { useState } from "react";

function Newsletter() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section
      className="
        bg-[#12203A]
        py-14
        px-10
        text-center
      "
    >

      <h2 className="text-2xl font-bold text-white mb-3 tracking-wide">
        SIGN UP FOR OUR DAILY INSIDER
      </h2>

      <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
        Subscribe to get an email whenever I publish a new
        project on DEV@Deakin.
      </p>

      <form
        onSubmit={handleSubmit}
        className="
          flex
          flex-col
          sm:flex-row
          justify-center
          items-center
          gap-3
          max-w-md
          mx-auto
        "
      >

        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="
            w-full
            px-4
            py-3
            rounded-lg
            text-sm
            text-slate-800
            focus:outline-none
            focus:ring-2
            focus:ring-[#2BB7A5]
          "
        />

        <button
          type="submit"
          className="
            w-full
            sm:w-auto
            px-6
            py-3
            rounded-lg
            text-sm
            font-semibold
            bg-[#E8A33D]
            text-[#12203A]
            hover:bg-[#2BB7A5]
            hover:text-white
            transition-colors
          "
        >
          Subscribe
        </button>

      </form>

      {message && (
        <p className="mt-4 text-sm text-[#2BB7A5]">
          {message}
        </p>
      )}

    </section>
  );
}

export default Newsletter;