import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

import reelsData from "../ReelDataSet/reelsData";
import { StoryContext } from "../Contexts/StoryContext";
import Search from "../components/Search";

const Explore = () => {
  const { newData } = useContext(StoryContext);

  const [exploreAll, setExploreAll] = useState([]);
  const [infiniteData, setInfiniteData] = useState([]);

  const navigate = useNavigate();

  const loadRef = useRef(null);

  // Prepare Explore Data
  useEffect(() => {
    const postsAndStories = newData.flatMap((data) => [
      {
        id: `${data.id}-post`,
        type: "post",
        image: data.postImage,
      },
      {
        id: `${data.id}-story`,
        type: "story",
        image: data.storyImage,
      },
    ]);

    const reels = reelsData.map((data) => ({
      id: `reel-${data.id}`,
      type: "reel",
      video: data.videoUrl,
    }));

    const combinedData = [
      ...postsAndStories,
      ...reels,
    ];

    const shuffledData = [...combinedData].sort(
      () => Math.random() - 0.5
    );

    setExploreAll(shuffledData);
  }, [newData]);


  // Initial Infinite Data
  useEffect(() => {
    if (exploreAll.length > 0) {
      setInfiniteData(exploreAll);
    }
  }, [exploreAll]);


  // Load More Data
  const loadData = () => {
    setInfiniteData((prev) => [
      ...prev,
      ...exploreAll,
    ]);
  };


  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          loadData();
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = loadRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }

      observer.disconnect();
    };
  }, [exploreAll]);


  // Reel Hover Play
  const handleMouseEnter = (e) => {
    e.currentTarget.play();
  };


  // Reel Hover Pause
  const handleMouseLeave = (e) => {
    e.currentTarget.pause();
    e.currentTarget.currentTime = 0;
  };


  // Reel Click
  const handleReelClick = () => {
    navigate("/reels");
  };


  return (
    <div className="min-h-screen w-full px-4 py-6">

      {/* SEARCH */}
      <Search />


      {/* EXPLORE GRID */}
      <div className="columns-4 gap-2 max-w-[1200px] mx-auto mt-6">

        {infiniteData?.map((data) => {

          // REEL
          if (data.type === "reel") {
            return (
              <video
                key={data.id}
                src={data.video}
                muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleReelClick}
                className="
                  w-full
                  h-[450px]
                  object-cover
                  rounded-sm
                  cursor-pointer
                  transition-transform
                  duration-200
                  hover:scale-[1.01]
                  break-inside-avoid
                  mb-2
                "
              />
            );
          }


          // POST / STORY
          return (
            <img
              key={data.id}
              src={data.image}
              alt=""
              className="
                w-full
                h-[350px]
                object-cover
                rounded-sm
                break-inside-avoid
                mb-2
              "
            />
          );
        })}

      </div>


      {/* LOAD MORE TRIGGER */}
      <div
        ref={loadRef}
        className="h-20 flex items-center justify-center text-gray-400"
      >
        Loading...
      </div>

    </div>
  );
};

export default Explore;