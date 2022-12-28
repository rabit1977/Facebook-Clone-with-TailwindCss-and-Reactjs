import React from 'react';
import { BsStopwatch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaUserFriends } from 'react-icons/fa';
import { MdGroups, MdOndemandVideo, MdRecentActors } from 'react-icons/md';
import { MoreIcon } from './Icons';

export default function SidebarRight() {
  return (
    <div className='flex-1 md:max-w-xs hover:border-r-8 border-r-8 border-r-transparent shrink lg:block hover:border-[#7B7B7B]/60 hidden  py-4'>
      <ul>
        <li className='flex items-center font-semibold text-base text-slate-700 gap-4 mb-1  p-3 rounded-l-lg'>
          <a className='tracking-wide cursor-text' href='#'>
            Sponsored
          </a>
        </li>
        <hr className=' border-black/20' />
        <li className='flex items-center  font-semibold text-base text-slate-700 gap-4 p-2 rounded-l-lg justify-between'>
          <a className='cursor-text' href='#'>
            Your Pages and profiles
          </a>
          <div className='hover:bg-slate-400/30 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer'>
            <div>
              <MoreIcon />
            </div>
          </div>
        </li>
        <div className='flex flex-col items-left font-semibold text-base text-slate-700 gap-4  rounded-l-lg'>
          <div className='hover:bg-[#E4E6E9] p-2 rounded-l-xl'>
            <div className='flex items-center gap-3  rounded-l-xl'>
              <CgProfile size='1.4rem' color='#4969af' />
              <a href='#'>My business page</a>
            </div>
          </div>
          <div className='ml-4 text-xs'>
            <div className='hover:bg-[#E4E6E9] p-2 -mt-4 rounded-l-xl'>
              <div className='flex items-center gap-3 '>
                <CgProfile size='1.4rem' color='#4969af' /> Switch into Page
              </div>
            </div>
            <div className='hover:bg-[#E4E6E9] p-2 rounded-l-xl'>
              <div className='flex items-center gap-3'>
                <CgProfile size='1.4rem' color='#4969af' /> Create promotion
              </div>
            </div>
          </div>
        </div>
        <hr className='border-black/20 my-2' />
        <li className='flex items-center font-semibold text-base text-slate-700 gap-4 mb-1 hover:bg-[#E4E6E9] p-3 rounded-l-lg'>
          <MdGroups size='1.4rem' color='#4969af' />
          <a href='#'>Groups</a>
        </li>
        <li className='flex items-center font-semibold text-base text-slate-700 gap-4 mb-1 hover:bg-[#E4E6E9] p-3 rounded-l-lg'>
          <MdOndemandVideo size='1.4rem' color='#4969af' />
          <a href='#'>Watch</a>
        </li>
        <li className='flex items-center font-semibold text-base text-slate-700 gap-4 mb-1 hover:bg-[#E4E6E9] p-3 rounded-l-lg'>
          <BsStopwatch size='1.4rem' color='#4267b2' />
          <a href='#'>Memories</a>
        </li>
      </ul>
      <div className='flex items-center font-semibold text-base text-slate-700 gap-4 mb-1 hover:bg-[#E4E6E9] p-3 rounded-l-lg'>
        <button className='flex items-center gap-2 '>
          <div className='bg-slate-200 p-2 rounded-full hover:bg-slate-300/60'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </div>
          See more
        </button>
      </div>
      <div className='border-b border-slate-400'></div>
    </div>
  );
}
