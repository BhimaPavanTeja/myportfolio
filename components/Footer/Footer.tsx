"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white dark:bg-black text-black dark:text-white pb-24">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Section: Name */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Pavan Teja Bhima</h2>
          <p className="text-sm text-muted-foreground">Software Applications Developer & Designer</p>
          <iframe
                    className="border rounded-lg shadow-lg mt-4"
                    src="https://open.spotify.com/embed/track/4Q0qVhFQa7j6jRKzo3HDmP?utm_source=generator&theme=0"
                    width="350"
                    height="85"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
        </div>

        {/* Middle Section: Navigation */}
        <div className="flex justify-center space-x-6">
          <Link href="#projects" className="text-sm hover:underline">Projects</Link>
          <Link href="#about" className="text-sm hover:underline">About</Link>
          <Link href="#contact" className="text-sm hover:underline">Contact</Link>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex justify-center md:justify-end space-x-5">
          <Link href="https://github.com/BhimaPavanTeja" target="_blank">
            <Github className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/pavantejabhima" target="_blank">
            <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="mailto:bhimapavanteja@gmail.com">
            <Mail className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>

      <div className="text-center text-xs text-muted-foreground pb-6">
        © {new Date().getFullYear()} Pavan Teja Bhima. All rights reserved.
      </div>
    </footer>
  );
}
