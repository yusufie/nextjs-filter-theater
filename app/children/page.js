"use client"
import React from 'react';
import Image from 'next/image';
import { events } from '../data/mockData';

import Dropdown from '../components/filter/Dropdown';
import CalendarButton from '../components/filter/CalendarButton'; 

function Children() {

  const childrenEvents = events.filter((event) => event.type === 'Çocuk');

  return (

  <>
    <div className="flex justify-between items-center bg-gray-200 w-full p-6 ">

      <Dropdown/>
      <CalendarButton/>      

    </div>
   
    <div className="flex flex-col justify-center mt-8 ">

    {childrenEvents.map((event) => (

      <div key={event.id} className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 shadow-lg p-3 mx-auto bg-white border border-solid border-gray-500 mt-8">

        <div className="w-full md:w-1/3 bg-white grid place-items-center">

          <Image
                    src="/images/sener-sen.png"
                    alt="poster"
                    className="poster ms-24"
                    width={308}
                    height={172}
                    priority
                  />

        </div>

        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        
            <h4 className="font-black text-black">{event.title}</h4>

            <div className='flex items-center' >
              <Image
                      src="/location-icon.svg"
                      alt="location-icon"
                      className="location-icon me-1"
                      width={24}
                      height={24}
                      priority
                    />
              <p className="text-base">
                <span className="font-normal text-gray-400">{event.locationType}</span>
              </p>

            </div>

            <p className=" text-black text-base">{event.description}</p>

        </div>

        <div className="w-full md:w-1/3 bg-white grid place-items-center">

          <div className="flex flex-col justify-between item-center">

          <button className="w-40 h-12 bg-pink-600 hover:bg-pink-700 text-white drop-shadow-xl font-bold py-2 px-4">
            Bilet Al
          </button>

          <button className='flex items-center w-40 h-7 hover:bg-gray-100 text-black font-semibold mt-2 '>
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
</>
)
}

export default Children