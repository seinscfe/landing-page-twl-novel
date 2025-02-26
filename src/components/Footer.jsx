import Link from "next/link";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-primary via-secondary to-background text-text py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div>
          <h3 className="text-lg font-bold text-accent">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/" className="hover:text-accent transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/chapters" className="hover:text-accent transition">
                Chapters
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent transition">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm">&copy; 2025 Yudi Aditya</p>
          <p className="text-xs text-gray-400">All rights reserved.</p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-accent hover:text-text hover:brightness-150 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-accent hover:text-text hover:brightness-150 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-accent hover:text-text hover:brightness-150 transition"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}
