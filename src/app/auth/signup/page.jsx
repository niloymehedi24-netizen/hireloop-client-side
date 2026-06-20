"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setError("");
    setSuccess("");

    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const result = await authClient.signUp.email({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      if (result?.error) {
        setError(result.error.message);
      } else {
        setSuccess("🎉 Account created successfully!");

        setForm({
          name: "",
          email: "",
          password: "",
        });
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
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[45px_45px]" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,.45)] transition duration-300 hover:-translate-y-1">
        {/* Logo */}

        <div className="text-center">
          <Link href="/" className="text-4xl font-bold">
            <span className="text-sky-500">hire</span>
            <span className="text-orange-500">loop</span>
          </Link>

          <h1 className="mt-8 text-3xl font-bold text-white">Create Account</h1>

          <p className="mt-2 text-gray-400">
            Join HireLoop and discover your next opportunity.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Name */}

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Full Name
            </label>

            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-white placeholder:text-gray-500 outline-none transition-all focus:border-violet-500 focus:bg-white/10"
            />
          </div>

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
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Password
            </label>

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

          {/* Success */}

          {success && (
            <div className="rounded-2xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-300">
              {success}
            </div>
          )}

          {/* Button */}

          <Button
            type="submit"
            isLoading={loading}
            radius="lg"
            className="h-12 w-full bg-linear-to-r from-violet-600 to-purple-500 font-semibold text-white"
          >
            Create Account
          </Button>
        </form>

        {/* Footer */}

        <div className="mt-8 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="font-semibold text-violet-400 transition hover:text-violet-300"
          >
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
