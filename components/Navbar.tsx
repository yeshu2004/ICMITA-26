"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import logo from "@/public/VITBLogo.webp";

export default function Navbar() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<null | string>(null);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    { name: "home", href: "/" },
    { name: "brochure", href: "/brochure" },
    { name: "speakers", href: "/speakers" },
    { name: "organizers", href: "/organizers" },
    { name: "register", href: "/register" },
    { name: "gallery", href: "/gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setHidden(false);
        setScrolled(false);
      } else {
        setScrolled(true);

        if (currentScrollY > lastScrollY) {
          setHidden(true); // scrolling down
        } else {
          setHidden(false); // scrolling up
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.main
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`
        fixed top-0 z-50 w-full
        px-5 md:px-10 py-2 uppercase font-medium text-white
        transition-colors duration-300
        ${scrolled && !hidden ? "bg-[#2B3258] py-4 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div className="flex items-center justify-between">
        {/* Left */}
        <Image alt="logo" src={logo} height={120} width={120} priority />

        {/* Middle */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const isHovered = hovered === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative inline-flex flex-col items-center"
                onMouseEnter={() => setHovered(link.href)}
                onMouseLeave={() => setHovered(null)}
              >
                <AnimatePresence>
                  {(isHovered || isActive) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -top-5 h-1 w-full bg-[#2B3258]"
                      transition={{ type: "spring", stiffness: 200, damping: 30 }}
                    />
                  )}
                </AnimatePresence>

                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Right */}
        <Link href="/contact" className="hidden lg:flex">
          contact us
        </Link>

        <Link href="" className="lg:hidden">
          <Menu />
        </Link>
      </div>
    </motion.main>
  );
}
