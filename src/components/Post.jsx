import React, { useContext, useEffect, useRef, useState } from "react";
import { StoryContext } from "../Contexts/StoryContext";

import {
  BsThreeDots,
  BsHeart,
  BsChat,
  BsSend,
  BsBookmark,
  BsEmojiSmile,
} from "react-icons/bs";

const Post = () => {
  const { newData } = useContext(StoryContext);
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    if (newData) {
      setAllData(newData);
    }
  }, [newData]);
  const loadData = () => {
    setAllData((prev) => [...prev, ...newData]);
  };
  const loadRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadData();
      }
    });
    observer.observe(loadRef.current);
    return () => {
      console.log("CLEANUP");
      observer.disconnect();
    };
  }, []);
  return (
    <div className="w-[70%] flex flex-col gap-8 mt-8 mx-auto">
      {allData?.map((user, idx) => {
        return (
          <div key={idx} className="w-full border-b border-gray-800 pb-6">
            {/* POST HEADER */}
            <div className="flex items-center justify-between px-1 mb-3">
              <div className="flex items-center gap-3">
                {/* PROFILE IMAGE */}
                <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                  <img
                    src={user.image}
                    alt={user.username || "user"}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </div>

                {/* USERNAME */}
                <div>
                  <p className="text-sm font-semibold">
                    {user.username || user.name || "User"}
                  </p>

                  <p className="text-xs text-gray-400">Original audio</p>
                </div>
              </div>

              {/* THREE DOTS */}
              <BsThreeDots className="text-xl cursor-pointer" />
            </div>

            {/* POST IMAGE */}
            <div className="w-full overflow-hidden rounded-md">
              <img
                src={user.image}
                alt="post"
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* ACTIONS */}
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-4">
                <BsHeart className="text-2xl cursor-pointer" />

                <BsChat className="text-2xl cursor-pointer" />

                <BsSend className="text-2xl cursor-pointer" />
              </div>

              <BsBookmark className="text-2xl cursor-pointer" />
            </div>

            {/* LIKES */}
            <p className="text-sm font-semibold mt-2">
              {user.likes || "1,245"} likes
            </p>

            {/* CAPTION */}
            <p className="text-sm mt-1">
              <span className="font-semibold mr-2">
                {user.username || user.name || "User"}
              </span>

              {user.caption || "Beautiful moment ✨"}
            </p>

            {/* COMMENTS */}
            <p className="text-sm text-gray-500 mt-2">
              View all {user.comments || 12} comments
            </p>

            {/* ADD COMMENT */}
            <div className="flex items-center gap-2 mt-3 text-gray-500">
              <BsEmojiSmile className="text-lg" />

              <span className="text-sm">Add a comment...</span>
            </div>

            {/* TIME */}
            <p className="text-[10px] text-gray-500 mt-3 uppercase">
              {user.time || "2 hours ago"}
            </p>
          </div>
        );
      })}
      <div ref={loadRef}>Loading...</div>
    </div>
  );
};

export default Post;
