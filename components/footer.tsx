"use client"

import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-gray-400 border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-8 py-24">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* Brand Column */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Beyond The Notebook
            </h3>
            <p className="leading-relaxed text-gray-500">
              Engineering intelligent systems at scale. Deep dives into ML,
              Distributed Systems, and production-grade architecture.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Explore
            </h4>
            <ul className="space-y-4">
              <li className="hover:text-white transition cursor-pointer">Blog</li>
              <li className="hover:text-white transition cursor-pointer">Projects</li>
              <li className="hover:text-white transition cursor-pointer">About</li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Topics
            </h4>
            <ul className="space-y-4">
              <li className="hover:text-white transition cursor-pointer">Machine Learning</li>
              <li className="hover:text-white transition cursor-pointer">Distributed Systems</li>
              <li className="hover:text-white transition cursor-pointer">MLOps</li>
              <li className="hover:text-white transition cursor-pointer">Data Engineering</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Connect
            </h4>

            <div className="space-y-4">

              <Link
                href="https://github.com/AdarshGyawali123"
                target="_blank"
                className="flex items-center gap-3 hover:text-white transition group"
              >
                <Github size={18} className="opacity-70 group-hover:opacity-100 transition" />
                GitHub
              </Link>

              <Link
                href="https://www.linkedin.com/in/adarsh-gyawali-88398a278/"
                target="_blank"
                className="flex items-center gap-3 hover:text-white transition group"
              >
                <Linkedin size={18} className="opacity-70 group-hover:opacity-100 transition" />
                LinkedIn
              </Link>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-gray-700 to-transparent my-20" />

        {/* Bottom Signature */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">

          <div>
            © {new Date().getFullYear()} Beyond The Notebook
          </div>

          <div className="tracking-wide">
            Crafted with precision by{" "}
            <span className="text-white font-medium relative group">
              Adarsh Gyawali
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </div>

        </div>

      </div>
    </footer>
  )
}
