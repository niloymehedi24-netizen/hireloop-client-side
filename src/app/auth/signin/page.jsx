"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");

    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const result = await authClient.signIn.email({
        email: form.email,
        password: form.password,
        callbackURL: "/",
      });

      if (result?.error) {
        setError(result.error.message);
      }
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#16151D] px-6 py-10">
      {/* Background */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-500/20 blur-[140px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size[45px_45px]" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,.45)] transition duration-300 hover:-translate-y-1">
        {/* Logo */}
        <div className="text-center">
          <Link href="/" className="text-4xl font-bold">
            <span className="text-sky-500">hire</span>
            <span className="text-orange-500">loop</span>
          </Link>

          <h1 className="mt-8 text-3xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-gray-400">
            Sign in to continue your job search.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Email Address
            </label>

            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-white placeholder:text-gray-500 outline-none transition-all focus:border-violet-500 focus:bg-white/10"
            />
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-300">
                Password
              </label>
            </div>

            <div className="relative">
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 pr-14 text-white placeholder:text-gray-500 outline-none transition-all focus:border-violet-500 focus:bg-white/10"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-gray-400 transition hover:text-white"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          {/* Sign In Button */}
          <Button
            type="submit"
            isLoading={loading}
            radius="lg"
            className="h-12 w-full bg-linear-to-r from-violet-600 to-purple-500 font-semibold text-white"
          >
            Sign In
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          {/* Google Button (optional) */}
          <Button
            variant="bordered"
            radius="lg"
            className="h-12 w-full border-white/10 bg-white/5 text-white hover:bg-white/10"
          >
            Continue with Google
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-400">
          New to Hireloop?{" "}
          <Link
            href="/auth/signup"
            className="font-semibold text-violet-400 transition hover:text-violet-300"
          >
            Create Account
          </Link>
        </div>
      </div>
    </main>
  );
}
