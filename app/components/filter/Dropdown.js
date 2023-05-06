import { useState } from 'react'

import Image from 'next/image'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  

  return (
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
        <div className="absolute left-0 z-10 w-72 py-2 mt-1 rounded-md shadow-md" id='dropdownMenu'>
        <h4 className="text-base font-bold text-black px-8 mt-8">Etkinlik Mekanı</h4>
        <ul>

          <li>
            <div className='px-8 py-2 hover:bg-gray-100'>
              <input type='checkbox' className="w-5 h-5 "/>
              <label className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Maximum Uniq Hall</label>
            </div>
          </li>

          <li>
            <div className='px-8 py-2 hover:bg-gray-100'>
              <input type='checkbox' className="w-5 h-5 "/>
              <label className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Maximum Uniq Box</label>
            </div>
          </li>

          <li>
            <div className='px-8 py-2 hover:bg-gray-100'>
              <input type='checkbox' className="w-5 h-5 "/>
              <label className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Maximum Uniq Lounge</label>
            </div>
          </li>

          <li>
            <div className='px-8 py-2 hover:bg-gray-100'>
              <input type='checkbox' className="w-5 h-5 "/>
              <label className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Maximum Uniq Açıkhava</label>
            </div>
          </li>

          <li>
            <div className='px-8 py-2 hover:bg-gray-100'>
              <input type='checkbox' className="w-5 h-5 "/>
              <label className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Bahçe Fuaye</label>
            </div>
          </li>

        </ul>

        <h4 className="text-base font-bold text-black px-8 mt-8">Etkinlik Tarihi</h4>

        <ul>
          <li>
              <div className='px-8 py-2 hover:bg-gray-100'>
                <input type='checkbox' className="w-5 h-5 "/>
                <label className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Güncel Etkinlikler</label>
              </div>
            </li>
            <li>
              <div className='px-8 py-2 hover:bg-gray-100'>
                <input type='checkbox' className="w-5 h-5 "/>
                <label className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Geçmiş Etkinlikler</label>
              </div>
            </li>
        </ul>

        </div>
      )}
    </div>
  )
}

export default Dropdown
