import React from 'react';
import { BsStopwatch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaUserFriends } from 'react-icons/fa';
import { MdGroups, MdOndemandVideo, MdRecentActors } from 'react-icons/md';

export default function Sidebar() {
  return (
    <>
      <div className='hover:border-r-8 border-r-8 border-r-transparent  hover:border-[#7B7B7B]/60 xl:block hidden w-[300px] cursor-pointer'>
        <div className='flex flex-col'>
          <div className='-mt-2 py-4'>
            <ul>
              <li className='flex items-center font-semibold text-base text-slate-700 gap-4 mb-1 hover:bg-[#E4E6E9] p-3 rounded-l-lg'>
                <CgProfile size='1.4rem' color='#4969af' />
                <a href='#'>Andi Ebibi</a>
              </li>
              <li className='flex items-center font-semibold text-base text-slate-700 gap-4 mb-1 hover:bg-[#E4E6E9] p-3 rounded-l-lg'>
                <FaUserFriends size='1.4rem' color='#4969af' />
                <a href='#'>Friends</a>
              </li>
              <li className='flex items-center font-semibold text-base text-slate-700 gap-4 mb-1 hover:bg-[#E4E6E9] p-3 rounded-l-lg'>
                <MdRecentActors size='1.4rem' color='#4969af' />
                <a href='#'>Most Recent</a>
              </li>
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
          <div className=' -mt-2 py-1'>
            <ul>
              <li className='group flex items-center justify-between font-semibold text-base text-slate-700 gap-4 rounded-l-lg'>
                {' '}
                <div className='p-2 cursor'>
                  <a href='#' className='text-slate-500 font-semibold text-lg cursor-text'>
                    Your shortcuts
                  </a>
                </div>
                <div className='hidden group-hover:block cursor-none'>
                  <button className='text-blue-600 font-normal text-xm hover:bg-[#E4E6E9] px-3 py-2 rounded-l-lg '>
                    Edit
                  </button>
                </div>
              </li>
              <li className='flex items-center font-semibold text-base text-slate-700 gap-4 mb-1 hover:bg-[#E4E6E9] p-3 rounded-l-lg'>
                <FaUserFriends size='1.4rem' color='#4969af' />
                <a href='#'>Agar.io</a>
              </li>
              <li className='flex items-center font-semibold text-base text-slate-700 gap-4 mb-1 hover:bg-[#E4E6E9] p-3 rounded-l-lg'>
                <MdRecentActors size='1.4rem' color='#4969af' />
                <a href='#'>Chess</a>
              </li>
              <li className='flex items-center font-semibold text-base text-slate-700 gap-4 mb-1 hover:bg-[#E4E6E9] p-3 rounded-l-lg'>
                <MdGroups size='1.4rem' color='#4969af' />
                <a href='#'>Coin Master</a>
              </li>
              <li className='flex items-center font-semibold text-base text-slate-700 gap-4 mb-1 hover:bg-[#E4E6E9] p-3 rounded-l-lg'>
                <MdOndemandVideo size='1.4rem' color='#4969af' />
                <a href='#'>Monster Legends</a>
              </li>
              <li className='flex items-center font-semibold text-base text-slate-700 gap-4 mb-1 hover:bg-[#E4E6E9] p-3 rounded-l-lg'>
                <BsStopwatch size='1.4rem' color='#4267b2' />
                <a href='#'>Place to visit</a>
              </li>
            </ul>
          </div>{' '} 
        </div>
       
      </div>
    </>
  );
}
