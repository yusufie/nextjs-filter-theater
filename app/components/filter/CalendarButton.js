import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function CalendarButton() {

  return (
    <button className='flex items-center justify-center inline  px-4 py-2 text-lg text-black ms-4 bg-gray-200 rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500' >

      <Link href="/calendar">
        <Image
                    src="/calender-logo.svg"
                    alt="Calender Logo"
                    className="calender-logo inline"
                    width={24}
                    height={24}
                    priority
                  />

          Takvimde Gör
      </Link>

    </button>

  )
}

export default CalendarButton