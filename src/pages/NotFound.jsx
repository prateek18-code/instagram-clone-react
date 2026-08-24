import React from "react";
import { Link } from "react-router";
import { FiHome, FiSearch } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-pink-600/10 blur-[120px] rounded-full top-10 left-10" />
      <div className="absolute w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full bottom-10 right-10" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">

        {/* Instagram Icon */}
        <div className="mb-8">
          <FaInstagram className="text-5xl text-pink-500" />
        </div>

        {/* 404 */}
        <h1 className="text-[120px] sm:text-[150px] leading-none font-black tracking-tighter bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mt-5">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed max-w-md">
          Oops! The page you're looking for doesn't exist, has been removed,
          or maybe you just took a wrong turn.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold
            bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600
            hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-500/20"
          >
            <FiHome size={20} />
            Go Home
          </Link>

          <Link
            to="/explore"
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl
            border border-gray-700 text-gray-300 hover:bg-white/10
            hover:text-white transition-all duration-300"
          >
            <FiSearch size={20} />
            Explore
          </Link>

        </div>

        {/* Small text */}
        <p className="text-gray-600 text-xs mt-10">
          Error 404 • Nothing to see here 👀
        </p>

      </div>
    </div>
  );
};

export default NotFound;