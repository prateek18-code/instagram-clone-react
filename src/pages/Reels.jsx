import React, { useEffect, useRef, useState } from "react";
import reelsData from "../ReelDataSet/reelsData";
import ReelsComp from "../components/ReelsComp";

const Reels = () => {
  const divRef = useRef(null);

  const [allReelsData, setAllReelsData] = useState(reelsData);

  // TERA ORIGINAL INFINITE SCROLL LOGIC
  const newData = () => {
    setAllReelsData((prev) => [...prev, ...reelsData]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log("isIntersecting:", entries[0].isIntersecting);

        if (entries[0].isIntersecting) {
          newData();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      console.log("CLEANUP");
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="
        h-screen
        w-full
        overflow-y-auto
        snap-y
        snap-mandatory
        bg-[#0b0f12]
        scrollbar-hide
      "
    >
      {/* ALL REELS */}

      {allReelsData.map((data, idx) => (
        <ReelsComp
          key={idx}
          data={data}
        />
      ))}

      {/* INTERSECTION OBSERVER SENTINEL */}

      <div
        ref={divRef}
        className="h-[1px] w-full"
      />
    </div>
  );
};

export default Reels;