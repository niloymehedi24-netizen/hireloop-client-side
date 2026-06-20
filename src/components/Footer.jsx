import Link from "next/link";
import { LogoFacebook, LogoLinkedin, LogoGithub } from "@gravity-ui/icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0D0A12]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Main Footer */}
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Left Section */}
          <section className="space-y-8">
            <Link href="/" className="text-5xl font-bold">
              <span className="text-sky-500">hire</span>
              <span className="text-orange-500">loop</span>
            </Link>

            <p className="max-w-sm text-lg leading-9 text-gray-500">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-10">
              <a
                href="#"
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-gray-300 transition hover:bg-white/10"
              >
                <LogoFacebook className="h-6 w-6" />
              </a>

              <a
                href="#"
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-white transition hover:bg-violet-700"
              >
                <LogoGithub className="h-6 w-6" />
              </a>

              <a
                href="#"
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-gray-300 transition hover:bg-white/10"
              >
                <LogoLinkedin className="h-6 w-6" />
              </a>
            </div>
          </section>

          {/* Product */}
          <nav>
            <h3 className="mb-8 text-xl font-medium text-violet-500">
              Product
            </h3>

            <ul className="space-y-6 text-gray-500">
              <li>
                <Link href="/jobs" className="transition hover:text-white">
                  Job Discovery
                </Link>
              </li>

              <li>
                <Link href="/ai" className="transition hover:text-white">
                  Worker AI
                </Link>
              </li>

              <li>
                <Link href="/companies" className="transition hover:text-white">
                  Companies
                </Link>
              </li>

              <li>
                <Link href="/salary" className="transition hover:text-white">
                  Salary Data
                </Link>
              </li>
            </ul>
          </nav>

          {/* Navigation */}
          <nav>
            <h3 className="mb-8 text-xl font-medium text-violet-500">
              Navigation
            </h3>

            <ul className="space-y-6 text-gray-500">
              <li>
                <Link
                  href="/help-center"
                  className="transition hover:text-white"
                >
                  Help Center
                </Link>
              </li>

              <li>
                <Link
                  href="/career-library"
                  className="transition hover:text-white"
                >
                  Career Library
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Resources */}
          <nav>
            <h3 className="mb-8 text-xl font-medium text-violet-500">
              Resources
            </h3>

            <ul className="space-y-6 text-gray-500">
              <li>
                <Link
                  href="/brand-guideline"
                  className="transition hover:text-white"
                >
                  Brand Guideline
                </Link>
              </li>

              <li>
                <Link href="/newsroom" className="transition hover:text-white">
                  Newsroom
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>Copyright © 2026 — Hireloop</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/terms" className="transition hover:text-white">
              Terms & Policy
            </Link>

            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
