import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../firebase/config";

function Signup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();
    setError("");

    const name = fullName.trim();
    const normalizedEmail = email.trim().toLowerCase();

    // Validate full name
    if (name === "") {
      setError("Please enter your full name.");
      return;
    }

    if (name.indexOf(" ") === -1) {
      setError("Please enter your first and last name.");
      return;
    }

    // Validate email
    if (normalizedEmail === "") {
      setError("Please enter your email address.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(normalizedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Validate password
    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        normalizedEmail,
        password
      );

      await updateProfile(credential.user, {
        displayName: name,
      });

      await setDoc(doc(db, "users", credential.user.uid), {
        fullName: name,
        email: normalizedEmail,
        createdAt: serverTimestamp(),
      });

      await signOut(auth);

alert("Account created successfully!");

navigate("/login", {
  replace: true,
  state: { registered: true },
});


    } catch (err) {
      console.error("Registration error:", err);

      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please log in.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (err.code === "auth/weak-password") {
        setError("Please choose a stronger password.");
      } else if (
        err.code === "permission-denied" ||
        err.code === "firestore/permission-denied"
      ) {
        setError(
          "Unable to save your profile. Please check Firestore permissions."
        );
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-[70vh] flex items-center justify-center p-6">
      <section className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-3">
          Create a DEV@Deakin Account
        </h1>

        <p className="text-center text-slate-600 mb-6">
          Join the DEV@Deakin community.
        </p>

        <form onSubmit={handleSignup} className="flex flex-col gap-3">
          <label htmlFor="fullName">Full name *</label>
          <input
            id="fullName"
            type="text"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="name"
            required
          />

          <label htmlFor="signupEmail">Email *</label>
          <input
            id="signupEmail"
            type="email"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />

          
<label htmlFor="signupPassword">Password *</label>

<div className="relative">
  <input
    id="signupPassword"
    type={showPassword ? "text" : "password"}
    className="border rounded p-2 pr-12 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    autoComplete="new-password"
    minLength={6}
    required
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-600"
    aria-label={showPassword ? "Hide password" : "Show password"}
  >
    {showPassword ? "Hide" : "Show"}
  </button>
</div>



          
<label htmlFor="confirmPassword">Confirm password *</label>

<div className="relative">
  <input
    id="confirmPassword"
    type={showConfirmPassword ? "text" : "password"}
    className="border rounded p-2 pr-12 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    autoComplete="new-password"
    required
  />

  <button
    type="button"
    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-600"
    aria-label={
      showConfirmPassword ? "Hide confirm password" : "Show confirm password"
    }
  >
    {showConfirmPassword ? "Hide" : "Show"}
  </button>
</div>


          {error && (
            <p className="text-red-600 text-sm" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded p-3 mt-3 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create"}
          </button>
        </form>

        <p className="text-center mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Signup;