import React from 'react'
import Link from 'next/link';

import SearchBox from '../filter/SearchBox'

function navbar() {
  return (
    <div className="mt-8 ">

    <div className="flex justify-center items-center p-8 ">

      <button className="text-base me-4">
        <Link href="/">Tüm Etkinlikler</Link>
      </button>

      <button className="text-base me-4"> 
        <Link href="/theatre">Tiyatro</Link>
      </button>

      <button className="text-base me-4">
        <Link href="/concert">Konser</Link>
      </button>

      <button className="text-base me-4">
        <Link href="/standup">Stand Up</Link>
      </button>

      <button className="text-base me-4">
        <Link href="/cinema">Sinema</Link>
      </button>

      <button className="text-base me-4">
        <Link href="/children">Çocuk</Link>
      </button>
     
      <div className="">
        <SearchBox/>
      </div>

    </div>

  </div>
  )
}

export default navbar