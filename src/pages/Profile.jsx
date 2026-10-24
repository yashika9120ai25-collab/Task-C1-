
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login", { replace: true });
      }

      setLoading(false);
    });

    return unsubscribe;
  }, [navigate]);

  if (loading) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center">
        <p className="text-slate-600">Loading profile...</p>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-slate-50 p-5 sm:p-8">
      <section className="w-full max-w-lg rounded-xl bg-white p-6 shadow-md sm:p-8">
        <h1 className="mb-6 text-center text-2xl font-bold text-[#0F172A] sm:text-3xl">
          My Profile
        </h1>

        <div className="mb-6 flex flex-col items-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#2DD4BF]/20 text-3xl font-bold text-[#0F766E]">
            {(user.displayName || user.email || "U")
              .charAt(0)
              .toUpperCase()}
          </div>

          <p className="text-lg font-semibold text-[#0F172A]">
            {user.displayName || "User"}
          </p>

          <p className="text-sm text-slate-500">
            Account details
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="mb-1 text-sm text-slate-500">Full Name</p>
            <p className="break-words font-medium text-slate-800">
              {user.displayName || "Not provided"}
            </p>
          </div>

          <div className="rounded-lg bg-slate-50 p-4">
            <p className="mb-1 text-sm text-slate-500">Email Address</p>
            <p className="break-words font-medium text-slate-800">
              {user.email || "No email available"}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="mt-6 w-full rounded-lg bg-[#0F172A] px-4 py-3 font-semibold text-white transition hover:bg-[#0F766E]"
        >
          Back to Home
        </button>
      </section>
    </main>
  );
}

export default Profile;
