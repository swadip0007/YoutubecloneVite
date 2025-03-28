import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'


const Header = () => {
  return (
    <header className='flex items-center justify-between p-4 bg-white shadow-md'>
      
      <div className='flex items-center space-x-4'>
        <Icon icon="mdi:menu" className="text-gray-700 text-2xl cursor-pointer" />
        <img
          className='w-8'
          src="https://cdn.pixabay.com/photo/2021/05/22/11/38/yt-6273367_640.png"
          alt="YouTube Logo"
        />
      </div>

      {/* Center: Search Bar */}
      <div className='flex-grow mx-4'>
        <form action="" className="flex justify-center">
          <input
            type="text"
            placeholder="Search"
            className='w-3/4 sm:w-96 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </form>
      </div>

      <div className='flex items-center space-x-6'>

        <Icon icon="mdi:bell" className="text-gray-700 text-2xl cursor-pointer" />
        
        <img
          className='w-10 h-10 rounded-full border-2 border-b-blue-900 object-cover'
          src="data:image/jpeg;base64,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" 
          alt="User Avatar"
        />
      </div>
    </header>
  );
};

export default Header