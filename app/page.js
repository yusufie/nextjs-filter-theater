"use client";
import React, { useState } from "react";
import Image from "next/image";
import { events } from "../app/data/mockData";

import CalendarButton from '../app/components/filter/CalendarButton';


export default function Home() {
  const [filters, setFilters] = useState({
    Hall: false,
    Box: false,
    Lounge: false,
    Hava: false,
    Fuaye: false,
  });

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="flex justify-between items-center bg-gray-200 w-full p-6 ">
      
        {/* DROPDOWN */}

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-center w-full px-4 py-2 text-lg text-pink-500 bg-gray-200 rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            <Image
              src="/filter-logo.svg"
              alt="Filter Logo"
              className="filter-logo me-4"
              width={10}
              height={18}
              priority
            />
            Filtreler
          </button>

          {isOpen && (
            <div className=" absolute left-0 z-10 w-72 py-2 mt-1 bg-white rounded-md shadow-md">
              <h4 className="text-base font-bold text-black px-8 mt-8">
                Etkinlik Mekanı
              </h4>
              <ul>
                <li>
                  <div className="px-8 py-2 hover:bg-gray-100">
                    <input 
                    type="checkbox" 
                    className="w-5 h-5 text-pink-500"
                    checked={filters.Hall}
                    onChange={() => setFilters({ ...filters, Hall: !filters.Hall })}
                    />
                    <label className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Maximum Uniq Hall
                    </label>
                  </div>
                </li>

                <li>
                  <div className="px-8 py-2 hover:bg-gray-100">
                    <input 
                    type="checkbox" 
                    className="w-5 h-5 text-pink-500"
                    checked={filters.Box}
                    onChange={() => setFilters({ ...filters, Box: !filters.Box })}
                    />
                    <label className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Maximum Uniq Box
                    </label>
                  </div>
                </li>

                <li>
                  <div className="px-8 py-2 hover:bg-gray-100">
                    <input 
                    type="checkbox" 
                    className="w-5 h-5 text-pink-500"
                    checked={filters.Lounge}
                    onChange={() => setFilters({ ...filters, Lounge: !filters.Lounge })}
                    />
                    <label className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Maximum Uniq Lounge
                    </label>
                  </div>
                </li>

                <li>
                  <div className="px-8 py-2 hover:bg-gray-100">
                    <input 
                    type="checkbox" 
                    className="w-5 h-5 text-pink-500"
                    checked={filters.Hava}
                    onChange={() => setFilters({ ...filters, Hava: !filters.Hava })}
                     />
                    <label className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Maximum Uniq Açıkhava
                    </label>
                  </div>
                </li>

                <li>
                  <div className="px-8 py-2 hover:bg-gray-100">
                    <input 
                    type="checkbox" 
                    className="w-5 h-5 text-pink-500"
                    checked={filters.Fuaye}
                    onChange={() => setFilters({ ...filters, Fuaye: !filters.Fuaye })}
                     />
                    <label className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Bahçe Fuaye
                    </label>
                  </div>
                </li>
              </ul>

              <h4 className="text-base font-bold text-black px-8 mt-8">
                Etkinlik Tarihi
              </h4>

              <ul>
                <li>
                  <div className="px-8 py-2 hover:bg-gray-100">
                    <input 
                    type="checkbox" 
                    className="w-5 h-5 text-pink-500" 
                    />
                    <label className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Güncel Etkinlikler
                    </label>
                  </div>
                </li>
                <li>
                  <div className="px-8 py-2 hover:bg-gray-100">
                    <input 
                    type="checkbox" 
                    className="w-5 h-5 text-pink-500"
                    />
                    <label className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Geçmiş Etkinlikler
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* DROPDOWN */}
        <CalendarButton />
      </div>

      <main className="">
        <div className="flex flex-col justify-center mt-8 ">

          {events
            .filter((event) => {
              if (filters.Hall && event.locationType !== "Maximum Uniq Hall") {
                return false;
              }
              if (filters.Box && event.locationType !== "Maximum Uniq Box") {
                return false;
              }
              if (filters.Lounge && event.locationType !== "Maximum Uniq Lounge") {
                return false;
              }
              if (filters.Hava && event.locationType !== "Maximum Uniq Açıkhava") {
                return false;
              }
              if (filters.Fuaye && event.locationType !== "Bahçe Fuaye") {
                return false;
              }
              return true;
            })
            .map((event) => (
              <div
                key={event.id}
                className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 shadow-lg p-3 mx-auto bg-white border border-solid border-gray-500 mt-8"
              >
                <div className="w-full md:w-1/3 bg-white grid place-items-center">
                  <Image
                    src={event.image}
                    alt="poster"
                    className="poster ms-24"
                    width={308}
                    height={172}
                    priority
                  />
                </div>

                <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                  <h4 className="font-black text-black">{event.title}</h4>

                  <div className="flex items-center">
                    <Image
                      src="/location-icon.svg"
                      alt="location-icon"
                      className="location-icon me-1"
                      width={24}
                      height={24}
                      priority
                    />
                    <p className="text-base">
                      <span className="font-normal text-gray-400">
                        {event.locationType}
                      </span>
                    </p>
                  </div>

                  <p className=" text-black text-base">{event.description}</p>
                </div>

                <div className="w-full md:w-1/3 bg-white grid place-items-center">
                  <div className="flex flex-col justify-between item-center">
                    <button className="w-40 h-12 bg-pink-600 hover:bg-pink-700 text-white drop-shadow-xl font-bold py-2 px-4">
                      Bilet Al
                    </button>

                    <button className="flex items-center w-40 h-7 hover:bg-gray-100 text-black font-semibold mt-2 ">
                      <Image
                        src="/add-icon.svg"
                        alt="add"
                        className="add-icon me-2"
                        width={26}
                        height={26}
                        priority
                      />
                      Takvime Ekle
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </>
  );
}
