// "use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center w-full h-12 sm:h-16 px-4 sm:px-6 flex-start">
      {/* LOGO */}
      <Link href="/" className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
        <Image
          src="/logo-1.png"
          alt="Next Stop Logo"
          layout="fill"
          objectFit="contain"
          className="object-cover"
          priority
        />
      </Link>
    </div>
  );
}
