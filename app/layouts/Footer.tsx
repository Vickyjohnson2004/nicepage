"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-[#2f3637] text-white">
        <div className="mx-auto max-w-5xl px-6 py-4">
          {/* Quote */}
          <p className="mx-auto max-w-2xl text-center text-[16px] leading-8">
            “Our task must be to free ourselves... by widening our circle of
            compassion to embrace all living creatures and the whole of nature
            and its beauty.” – Albert Einstein
          </p>

          {/* Divider */}
          <div className="mx-auto mt-10 h-px w-full bg-white/30" />

          {/* Social Icons */}
          <div className="mt-7 flex items-center justify-center gap-7">
            <a
              href="#"
              className="transition hover:text-lime-400"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="transition hover:text-lime-400"
              aria-label="Twitter"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="#"
              className="transition hover:text-lime-400"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="transition hover:text-lime-400"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#3b3939] py-4">
        <p className="text-center text-sm text-white">
          This site was created with{" "}
          <a
            href="#"
            className="text-lime-400 underline transition hover:text-lime-300"
          >
            Victor Johnson
          </a>
        </p>
      </div>
    </footer>
  );
}