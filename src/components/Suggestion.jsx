import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { StoryContext } from "../Contexts/StoryContext";

const Suggestion = () => {
  const { loggedInUserObj } = useContext(UserContext);
  const { newData } = useContext(StoryContext);

  if (!loggedInUserObj) return null;

  return (
    <div className="mt-8 w-full">

      {/* MY PROFILE */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">

          <img
            src={loggedInUserObj.image}
            alt={loggedInUserObj.username}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h2 className="font-semibold">
              {loggedInUserObj.username}
            </h2>

            <p className="text-gray-500 text-sm">
              {loggedInUserObj.firstName} {loggedInUserObj.lastName}
            </p>
          </div>

        </div>

        <button className="text-blue-500 text-sm font-semibold">
          Switch
        </button>
      </div>

      {/* SUGGESTIONS HEADING */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-500">
          Suggested for you
        </h2>

        <button className="text-sm font-semibold">
          See All
        </button>
      </div>

      {/* 5 SUGGESTIONS */}
      <div className="flex flex-col gap-4">

        {newData.slice(0, 5).map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between"
          >

            <div className="flex items-center gap-3">

              <img
                src={user.image}
                alt={user.username}
                className="w-11 h-11 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold text-sm">
                  {user.username}
                </h3>

                <p className="text-gray-500 text-xs">
                  {user.firstName} {user.lastName}
                </p>
              </div>

            </div>

            <button className="text-blue-500 text-sm font-semibold">
              Follow
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Suggestion;