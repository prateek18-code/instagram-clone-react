import React from "react";
import StoriesSection from "../components/StoriesSection";
import Post from "../components/Post";
import Suggestion from "../components/Suggestion";

const Home = () => {
  return (
    <div className="min-h-screen w-full p-6">

      <div className="flex justify-center gap-10">

        {/* CENTER */}
        <main className="w-[680px] max-w-full">
          <StoriesSection />

          <Post />
        </main>


        {/* RIGHT SIDE */}
        <aside className="w-[280px] pt-5 ml-30">
          <Suggestion />
        </aside>

      </div>

    </div>
  );
};

export default Home;