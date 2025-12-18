"use client";

import { MapPin, Menu, Search, ShoppingCart, UserRound, X } from "lucide-react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  Variants,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(() => !isOpen);
    console.log(isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuVariants: Variants = {
    hidden: { y: "-100%" },
    visible: {
      y: 0,
      transition: { duration: 1.5, ease: [0.77, 0, 0.175, 1] },
    },
    exit: {
      y: "-100%",
      transition: { duration: 1, ease: [0.77, 0, 0.175, 1] },
    },
  };

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollY.getPrevious();
      const direction = current - (previous ?? 0);

      if (direction > 0 && current > 100) {
        setHidden(true);
      } else if (direction < 0) {
        setHidden(false);
      }

      setHasScrolled(current > 100);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 px-5 py-5 transition-all duration-300 ${
          hasScrolled ? "bg-black/80" : "bg-transparent"
        } ${isOpen ? "z-60" : "z-50"}`}
      >
        <div className="mx-auto flex items-center justify-between text-white">
          {/* left */}
          <div className="flex items-center md:gap-10 gap-5">
            <div className="flex items-center gap-1 hover:text-orange-600 transition">
              <div onClick={toogleMenu} className="cursor-pointer">
                {isOpen ? (
                  <X className="md:h-5 md:w-5 h-5 w-5 text-orange-600" />
                ) : (
                  <Menu className="md:h-5 md:w-5 h-5 w-5" />
                )}
              </div>
              <h1 className={`md:block hidden text-sm md:text-2xl uppercase font-medium ${isOpen ? "text-orange-600" : "text-white"}`} >
                {isOpen ? "Close" : "Menu"}
              </h1>
            </div>

            <div className="flex md:hidden lg:flex items-center gap-2 hover:text-orange-600 transition">
              <Search className="md:h-5 md:w-5 h-5 w-5 cursor-pointer" />
            </div>

            <div className="md:flex hidden items-center gap-2 hover:text-orange-600 transition">
              <Link
                href="/cart"
                className="text-sm md:text-2xl uppercase font-medium"
              >
                Discover
              </Link>
            </div>
            <div className="lg:flex hidden items-center gap-2 hover:text-orange-600 transition">
              <Link
                href="/cart"
                className="text-sm md:text-2xl uppercase font-medium"
              >
                Gift
              </Link>
            </div>
            <div className="md:flex hidden items-center gap-2 hover:text-orange-600 transition">
              <Link
                href="/cart"
                className="text-sm md:text-2xl uppercase font-medium"
              >
                Shop
              </Link>
            </div>
          </div>
          {/* middle*/}
          <div>
            <div className="flex flex-col text-center">
              <h1 className="text-4xl uppercase w-fit text-orange-600">
                Velarro
              </h1>
              <h5 className="uppercase leading-none">Cigars</h5>
            </div>
          </div>
          {/* right */}
          <div className="flex items-center md:gap-10 gap-5">
            <div className="hidden md:flex items-center gap-2 hover:text-orange-600 transition">
              <MapPin className="hidden md:block md:h-5 md:w-5 h-5 w-5" />
              <Link
                href="/"
                className="hidden lg:block text-sm md:text-2xl uppercase font-medium"
              >
                Store Locator
              </Link>
            </div>

            <div className="flex items-center gap-2 hover:text-orange-600 transition">
              <UserRound className="md:h-5 md:w-5 h-5 w-5" />
              <Link
                href="/account"
                className="md:block hidden text-sm md:text-2xl uppercase font-medium"
              >
                Account
              </Link>
            </div>

            <div className="flex items-center gap-2 hover:text-orange-600 transition">
              <ShoppingCart className="md:h-5 md:w-5 h-5 w-5" />
              <Link
                href="/cart"
                className="md:block hidden text-sm md:text-2xl uppercase font-medium"
              >
                Cart
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>
      {/* design and create this page.*/}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="h-screen w-full bg-black z-40 fixed top-0 left-0"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
