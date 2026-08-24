import React, { useEffect, useRef, useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import {
  BsHeart,
  BsChat,
  BsSend,
  BsBookmark,
  BsThreeDots,
  BsVolumeMute,
  BsVolumeUp,
} from "react-icons/bs";

import { FiRepeat } from "react-icons/fi";

const ReelsComp = ({ data }) => {
  const videoRef = useRef(null);
  const reelRef = useRef(null);

  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // ACTIVE REEL KO PLAY / INACTIVE KO PAUSE
  useEffect(() => {
    const reel = reelRef.current;

    if (!reel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      {
        threshold: 0.75,
      }
    );

    observer.observe(reel);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
  };

  const handleSave = () => {
    setIsSaved((prev) => !prev);
  };

  const handleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div
      ref={reelRef}
      className="
        h-screen
        w-full
        snap-start
        snap-always
        flex
        items-center
        justify-center
      "
    >
      <div className="flex items-center gap-4">

        {/* ================= REEL ================= */}

        <div
          className="
            relative
            h-[92vh]
            max-h-[820px]
            aspect-[9/16]
            overflow-hidden
            rounded-sm
            bg-black
          "
        >
          {/* VIDEO */}

          <video
            ref={videoRef}
            src={data.videoUrl}
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />

          {/* MUTE BUTTON */}

          <button
            onClick={handleMute}
            className="
              absolute
              right-4
              bottom-4
              z-20
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-black/60
              text-white
              backdrop-blur-sm
            "
          >
            {isMuted ? (
              <BsVolumeMute size={17} />
            ) : (
              <BsVolumeUp size={17} />
            )}
          </button>

          {/* ================= BOTTOM USER INFO ================= */}

          <div
            className="
              absolute
              bottom-5
              left-5
              right-5
              z-10
              text-white
            "
          >
            {/* PROFILE + USERNAME */}

            <div className="flex items-center gap-3">

              <img
                src={data.profileUrl}
                alt={data.username}
                className="
                  h-9
                  w-9
                  rounded-full
                  border
                  border-white
                  object-cover
                "
              />

              <span className="text-sm font-semibold">
                {data.username}
              </span>

              <button
                className="
                  text-sm
                  font-semibold
                  hover:text-gray-300
                "
              >
                Follow
              </button>

            </div>

            {/* CAPTION */}

            <p className="mt-3 max-w-[90%] text-sm leading-5">
              {data.caption}
            </p>

          </div>
        </div>

        {/* ================= RIGHT ACTIONS ================= */}

        <div
          className="
            flex
            flex-col
            items-center
            gap-6
            text-white
          "
        >

          {/* LIKE */}

          <div className="flex flex-col items-center gap-1">

            <button onClick={handleLike}>
             {isLiked ? <IoIosHeart size={27}className= "fill-red-500 text-red-500"/> : <IoIosHeartEmpty size={27} />}
            </button>

            <span className="text-xs">
              {isLiked ? data.likes + 1 : data.likes}
            </span>

          </div>

          {/* COMMENTS */}

          <div className="flex flex-col items-center gap-1">

            <button>
              <BsChat size={27} />
            </button>

            <span className="text-xs">
              {data.comments}
            </span>

          </div>

          {/* SHARES */}

          <div className="flex flex-col items-center gap-1">

            <button>
              <FiRepeat size={28} />
            </button>

            <span className="text-xs">
              {data.shares}
            </span>

          </div>

          {/* SEND */}

          <button>
            <BsSend size={26} />
          </button>

          {/* SAVE */}

          <button onClick={handleSave}>
            <BsBookmark
              size={27}
              className={isSaved ? "fill-white" : ""}
            />
          </button>

          {/* THREE DOTS */}

          <button>
            <BsThreeDots size={25} />
          </button>

          {/* SMALL PROFILE */}

          <img
            src={data.profileUrl}
            alt={data.username}
            className="
              h-8
              w-8
              rounded-md
              border
              border-white
              object-cover
            "
          />

        </div>

      </div>
    </div>
  );
};

export default ReelsComp;