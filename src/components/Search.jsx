import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full flex justify-center mb-6">

      <div className="relative w-full max-w-[720px]">

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="
            w-full
            h-12
            rounded-2xl
            bg-[#26292d]
            text-white
            pl-12
            pr-10
            outline-none
            placeholder:text-gray-400
            focus:bg-[#303338]
            transition
          "
        />

        {/* Search Icon */}
        <span
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            text-xl
          "
        >
          🔍
        </span>

        {/* Clear */}
        {search && (
          <button
            onClick={() => setSearch("")}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-gray-400
              hover:text-white
            "
          >
            ✕
          </button>
        )}

      </div>

    </div>
  );
};

export default Search;