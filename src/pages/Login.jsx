
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(
        auth,
        email.trim().toLowerCase(),
        password
      );
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      setError("Login failed. Check your email and password.");
    }
  }

  return (
    <main className="min-h-[70vh] flex items-center justify-center p-6">
      <section className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Login to DEV@Deakin
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="border rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="border rounded p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />

          {error && <p className="text-red-600" role="alert">{error}</p>}

          <button
            type="submit"
            className="bg-blue-600 text-white rounded p-3"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Login;
