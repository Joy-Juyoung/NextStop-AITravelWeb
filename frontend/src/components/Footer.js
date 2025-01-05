import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 sm:px-6 py-4 sm:h-16 md:h-20 text-neutralDark/80">
      <div className="text-xs sm:text-sm mb-4 sm:mb-0">Brain Bubbles © 2025</div>

      <div className="flex items-center gap-4 sm:gap-8">
        <a
          href="https://github.com/Euna-kim-1/hackathon-web/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity duration-200 cursor-pointer hover:text-neutralDark"
        >
          <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
        <a
          href="https://www.instagram.com/dev_bbbles/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity duration-200 cursor-pointer hover:text-neutralDark"
        >
          <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
        <a
          href="https://www.linkedin.com/company/katec2024/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity duration-200 cursor-pointer hover:text-neutralDark"
        >
          <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>
    </div>
  );
}
