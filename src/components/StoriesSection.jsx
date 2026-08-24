import React, { useContext, useEffect, useRef, useState } from "react";
import { StoryContext } from "../Contexts/StoryContext";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const StoriesSection = () => {
  const { newData } = useContext(StoryContext);

  const scrollRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScroll = () => {
    const element = scrollRef.current;

    if (!element) return;

    const isAtStart = element.scrollLeft <= 0;

    const isAtEnd =
      element.scrollLeft + element.clientWidth >= element.scrollWidth - 1;

    setShowLeft(!isAtStart);
    setShowRight(!isAtEnd);
  };

  useEffect(() => {
    checkScroll();

    const element = scrollRef.current;

    if (!element) return;

    element.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      element.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [newData]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* Left Button */}{" "}
      {showLeft && (
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-7 w-7 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition text-[#b5b5b5] text-xl"
        >
          {" "}
          <MdKeyboardArrowLeft />{" "}
        </button>
      )}
      {/* STORIES */}
      <div
        ref={scrollRef}
        className="story-scroll w-full overflow-x-auto scroll-smooth px-2"
      >
        <div className="flex gap-4">
          {newData?.map((user) => (
            <div
              key={user.id}
              className="flex flex-col items-center min-w-[75px]"
            >
              {/* STORY RING */}
              <div className="p-[3px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                <div className="p-[2px] bg-black rounded-full">
                  <img
                    src={user.image}
                    alt="story-img"
                    className="h-[65px] w-[65px] rounded-full object-cover"
                  />
                </div>
              </div>

              {/* USERNAME */}
              <p className="text-xs mt-1 truncate w-[75px] text-center">
                {user.username || user.name || "User"}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Right Button */}{" "}
      {showRight && (
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-7 w-7 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition text-[#b5b5b5] text-xl"
        >
          {" "}
          <MdKeyboardArrowRight />{" "}
        </button>
      )}
    </div>
  );
};

export default StoriesSection;
