import React from 'react';
import { FaFacebook, FaFacebookMessenger, FaHome } from 'react-icons/fa';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { SiFacebookgaming } from 'react-icons/si';
import { CgMenuGridR, CgProfile } from 'react-icons/cg';
import { IoMdNotificationsOutline } from 'react-icons/Io';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Navbar() {
  console.log('hi rabit');
  return (
    <div className='w-full flex justify-between  items-center bg-white shadow-xl border-b h-14 px-4'>
      <div className='w-full p-2'>
        <div className='w-full flex items-center gap-2'>
          <FaFacebook size='2.5rem' color='#4267B2' />
          <div
            className='flex items-center gap-2 border border:transparent hover:border hover:border-red-400  
           bg-[#F0F2F5] p-1.5 rounded-full cursor-pointer'
          >
            <AiOutlineSearch size='1.5rem' color='#666' />
            <input
              className='bg-transparent md:flex hidden font-normal text-black focus:outline-none  '
              type='text'
              placeholder='Search Facebook'
            />
          </div>
        </div>
      </div>
      <div className='w-full sm:flex h-full gap-1 hidden justify-between p-1'>
        <div className='w-full relative group  flex items-center justify-center border-b-4 border-[#4267b2] -mb-1 cursor-pointer  '>
          <div className='absolute invisible group-hover:visible bg-slate-700  text-white text-xs px-3 py-2 transition duration-500 delay-300 ease-in-out hover:delay-300 rounded-md mt-24'>
            Home
          </div>
          <FaHome size='1.5rem' color='#4267B2' />
        </div>
        <div className='w-full relative group flex items-center justify-center hover:bg-[#F0F2F5] hover:rounded-lg cursor-pointer'>
          <div className='absolute invisible group-hover:visible bg-slate-700 text-white text-xs px-3 py-2 transition duration-500 delay-300 ease-in-out hover:delay-300 rounded-md mt-24'>
            Watch
          </div>
          <MdOutlineOndemandVideo size='1.5rem' color='#777' />
        </div>
        <div className='w-full relative group flex items-center justify-center hover:bg-[#F0F2F5] hover:rounded-lg cursor-pointer'>
          <div className='absolute invisible group-hover:visible bg-slate-700 text-white text-xs px-3 py-2 transition duration-500 delay-300 ease-in-out hover:delay-300 rounded-md mt-24'>
            Groups
          </div>
          <HiOutlineUserGroup size='1.5rem' color='#777' />
        </div>
        <div className='w-full relative group flex items-center justify-center hover:bg-[#F0F2F5] hover:rounded-lg cursor-pointer'>
          <div className='absolute invisible group-hover:visible bg-slate-700 text-white text-xs px-3 py-2 transition duration-500 delay-300 ease-in-out hover:delay-300 rounded-md mt-24'>
            Gaming
          </div>
          <SiFacebookgaming size='1.5rem' color='#777' />
        </div>
      </div>
      <div className='w-full flex  justify-end md:gap-5 sm:gap-3 gap-1'>
        <div
          title='menu'
          className='relative group flex content items-center bg-[#e4e6eb] hover:bg-[#cfd1d4] rounded-full p-2.5 justify-center cursor-pointer'
        >
          <div className='absolute invisible group-hover:visible bg-slate-700 text-white text-xs px-3 py-2 transition duration-500 delay-300 ease-in-out hover:delay-300 rounded-md mt-24'>
            Menu
          </div>
          <CgMenuGridR size='1.2rem' color='#000' />
        </div>
        <div className='flex relative group items-center bg-[#e4e6eb] hover:bg-[#cfd1d4] rounded-full p-2.5 justify-center cursor-pointer'>
          <div className='absolute invisible group-hover:visible bg-slate-700 text-white text-xs px-3 py-2 transition duration-500 delay-300 ease-in-out hover:delay-300 rounded-md mt-24'>
            Messenger
          </div>
          <FaFacebookMessenger size='1.2rem' color='#000' />
        </div>
        <div className='flex relative group items-center bg-[#e4e6eb] hover:bg-[#cfd1d4] rounded-full p-2.5 justify-center cursor-pointer'>
          <div className='absolute invisible group-hover:visible bg-slate-700 text-white text-xs px-3 py-2 transition duration-500 delay-300 ease-in-out hover:delay-300 rounded-md mt-24'>
            Notifications
          </div>
          <IoMdNotificationsOutline size='1.2rem' color='#000' />
        </div>
        <div className='flex relative group items-center bg-[#e4e6eb] hover:bg-[#cfd1d4] rounded-full p-2.5 justify-center cursor-pointer'>
        <div className='absolute invisible group-hover:visible bg-slate-700 text-white text-xs px-3 py-2 transition duration-500 delay-300 ease-in-out hover:delay-300 rounded-md mt-24'>
            Account
          </div>
          <CgProfile size='1.2rem' color='#000' />
        </div>
      </div>
    </div>
  );
}
