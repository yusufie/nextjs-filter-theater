import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function CalendarButton() {

  return (
    <button className='flex' >

      <Link href="/calendar">
        <Image
                    src="/calender-logo.svg"
                    alt="Calender Logo"
                    className="calender-logo inline"
                    width={24}
                    height={24}
                    priority
                  />

          <p className=" inline text-lg text-black ms-4">Takvimde Gör</p>
      </Link>

    </button>

  )
}

export default CalendarButton