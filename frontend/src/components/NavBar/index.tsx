import React from "react";
import { motion } from "motion/react"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/cybersecurity", label: "Cybersecurity" },
];

const Navbar = () => {
  const currentPath = window.location.pathname;

  return (
    <div className="bg-[#d4d4d4]/10 backdrop-blur-sm rounded-lg w-[60%] py-3 px-3 absolute top-8 left-5">
      <ul className="w-full flex justify-between px-2">
        {links.map(({ href, label }) => (
          <motion.li whileHover={{scale: 1.1}} whileTap={{scale:0.95}} key={href}>
            <a  href={href} className={`transition-colors ` + (currentPath === href ? "text-[#FFFF28] font-semibold": "text-white hover:text-[#FFFF28]")}>
              {label}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
