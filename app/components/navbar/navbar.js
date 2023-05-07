"use client";
import React, { useState } from "react";
import Link from "next/link";

import SearchBox from "../filter/SearchBox";

function Navbar() {
  const [activeButton, setActiveButton] = useState("concert");

  return (
    <>
      <div class="grid grid-cols-3 grid-flow-col justify-around">

        <div className="flex invisible pb-8 pt-8 ">01</div>

        <div className="flex justify-center items-center pe-8 ps-8 pt-8 ">
          <button
            className={`text-base me-4 pb-8 ${
              activeButton === "allActivities"
                ? "border-b-4 border-pink-500 text-pink-500 font-bold"
                : ""
            }`}
            onClick={() => setActiveButton("allActivities")}
          >
            <Link href="/">Tüm Etkinlikler</Link>
          </button>

          <button
            className={`text-base me-4 pb-8 ${
              activeButton === "theatre" ? "border-b-4 border-pink-500 text-pink-500 font-bold" : ""
            }`}
            onClick={() => setActiveButton("theatre")}
          >
            <Link href="/theatre">Tiyatro</Link>
          </button>

          <button
            className={`text-base me-4 pb-8 ${
              activeButton === "concert" ? "border-b-4 border-pink-500 text-pink-500 font-bold" : ""
            }`}
            onClick={() => setActiveButton("concert")}
          >
            <Link href="/concert">Konser</Link>
          </button>

          <button
            className={`text-base me-4 pb-8 ${
              activeButton === "standup" ? "border-b-4 border-pink-500 text-pink-500 font-bold" : ""
            }`}
            onClick={() => setActiveButton("standup")}
          >
            <Link href="/standup">Stand Up</Link>
          </button>

          <button
            className={`text-base me-4 pb-8 ${
              activeButton === "cinema" ? "border-b-4 border-pink-500 text-pink-500 font-bold" : ""
            }`}
            onClick={() => setActiveButton("cinema")}
          >
            <Link href="/cinema">Sinema</Link>
          </button>

          <button
            className={`text-base me-4 pb-8 ${
              activeButton === "children" ? "border-b-4 border-pink-500 text-pink-500 font-bold" : ""
            }`}
            onClick={() => setActiveButton("children")}
          >
            <Link href="/children">Çocuk</Link>
          </button>
        </div>

        <div className="flex justify-center pb-8 pt-8">
          <SearchBox />
        </div>

      </div>
    </>
  );
}

export default Navbar;
