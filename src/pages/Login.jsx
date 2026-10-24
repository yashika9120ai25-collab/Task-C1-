import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/config";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

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
    } finally {
      setLoading(false);
    }
  }

  async function handleForgotPassword() {
    setError("");
    setMessage("");

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setError("Enter your email address first.");
      return;
    }

    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, normalizedEmail);
      setMessage("If an account exists for this email, a password reset email will be sent.");
    } catch (err) {
      console.error("Password reset error:", err);
      setError("Unable to send the reset email. Check the email address and try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      console.error("Google sign-in error:", err);

      if (err.code === "auth/popup-closed-by-user") {
        setError("Google sign-in was cancelled. Please try again.");
      } else {
        setError("Google sign-in failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-[70vh] flex items-center justify-center p-6">
      <section className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center mb-3">
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

          <div className="text-right">
            <button
              type="button"
              onClick={handleForgotPassword}
              disabled={loading}
              className="text-blue-600 hover:underline text-sm disabled:opacity-50"
            >
              Forgot password?
            </button>
          </div>

          {error && (
            <p className="text-red-600 text-sm" role="alert">
              {error}
            </p>
          )}

          {message && (
            <p className="text-green-700 text-sm" role="status">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white rounded p-3 hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 border-t" />
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 border-t" />
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full border border-gray-300 rounded p-3 hover:bg-gray-50 disabled:opacity-50"
        >
          Continue with Google
        </button>

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
