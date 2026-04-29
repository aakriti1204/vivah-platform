"use client";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-pink-600">
          Sign Up 💍
        </h2>

        <form className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="button"
            onClick={() => window.location.href = "/dashboard"}
            className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}