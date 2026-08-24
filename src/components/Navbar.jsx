import React, { useContext, useState } from "react";
import { MdHomeFilled } from "react-icons/md";
import { LuSquarePlay } from "react-icons/lu";
import { RiSendInsLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { NavLink } from "react-router";
import { UserContext } from "../Contexts/UserContext";

const Navbar = () => {
  const { loggedInUserObj } = useContext(UserContext);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav
        className="
          group
          fixed left-0 top-0
          h-screen
          w-[72px]
          hover:w-[240px]
          bg-black
          text-white
          border-r border-gray-800
          flex flex-col
          transition-all duration-300
          z-50
          overflow-hidden
        "
      >
        {/* Instagram Logo */}
        <div className="h-[100px] flex items-center px-5">
          <NavLink to="/" className="flex items-center gap-5">
            <FaInstagram className="text-3xl min-w-[32px]" />

            <span
              className="
                text-2xl font-semibold
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-200
                whitespace-nowrap
              "
            >
              Instagram
            </span>
          </NavLink>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3 px-3">

          {/* Home */}
          <NavLink
            to="/"
            className="flex items-center gap-5 px-3 py-3 rounded-xl hover:bg-[#1f1f1f] transition"
          >
            <MdHomeFilled className="text-2xl min-w-[28px]" />

            <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
              Home
            </span>
          </NavLink>

          {/* Search */}
          <NavLink
            to="/explore"
            className="flex items-center gap-5 px-3 py-3 rounded-xl hover:bg-[#1f1f1f] transition"
          >
            <IoSearch className="text-2xl min-w-[28px]" />

            <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
              Search
            </span>
          </NavLink>

          {/* Reels */}
          <NavLink
            to="/reels"
            className="flex items-center gap-5 px-3 py-3 rounded-xl hover:bg-[#1f1f1f] transition"
          >
            <LuSquarePlay className="text-2xl min-w-[28px]" />

            <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
              Reels
            </span>
          </NavLink>

          {/* Messages */}
          <NavLink
            to="/messages"
            className="flex items-center gap-5 px-3 py-3 rounded-xl hover:bg-[#1f1f1f] transition"
          >
            <RiSendInsLine className="text-2xl min-w-[28px]" />

            <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
              Messages
            </span>
          </NavLink>

          {/* Notifications */}
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="w-full flex items-center gap-5 px-3 py-3 rounded-xl hover:bg-[#1f1f1f] transition text-left"
          >
            <FaRegHeart className="text-2xl min-w-[28px]" />

            <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
              Notifications
            </span>
          </button>

          {/* Create */}
          <button
            className="w-full flex items-center gap-5 px-3 py-3 rounded-xl hover:bg-[#1f1f1f] transition text-left"
          >
            <GoPlus className="text-3xl min-w-[28px]" />

            <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
              Create
            </span>
          </button>
        </div>

        {/* Profile */}
        <div className="mt-auto mb-8 px-3">
          <div className="flex items-center gap-5 px-3 py-3 rounded-xl hover:bg-[#1f1f1f] cursor-pointer">
            <img
              src={loggedInUserObj?.image}
              alt="profile-picture"
              className="h-8 w-8 rounded-full object-cover min-w-[32px]"
            />

            <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
              Profile
            </span>
          </div>
        </div>
      </nav>

      {/* Notification Panel */}
      {showNotifications && (
        <div
          className="
            fixed
            left-[72px]
            top-0
            h-screen
            w-[350px]
            bg-black
            text-white
            border-r border-gray-800
            z-40
            p-6
            shadow-2xl
          "
        >
          <h2 className="text-2xl font-semibold mb-8">
            Notifications
          </h2>

          <div className="text-gray-400 text-sm">
            No new notifications
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;