import React from 'react';

import Image from 'next/image';

function header() {
  return (
    <div className='flex flex-col justify-center items-center'>

    <div className="mt-8">
      <Image
              src="/app-logo.svg"
              alt="App Logo"
              className="app-logo"
              width={60}
              height={60}
              priority
            />
    </div>

    <div className="mt-16 text-2xl font-bold">
      <p>ETKİNLİKLER</p>
    </div> 

  </div>
  )
}

export default header