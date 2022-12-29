import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { LikeVideoIcon, MoreIcon } from './Icons';
export default function SidebarRight() {
  return (
    <div className='flex-1 md:max-w-xs h-screen hover:border-r-8 border-r-8 border-r-transparent shrink lg:block hover:border-[#7B7B7B]/60 hidden  py-2'>
      <ul>
        <li className='flex items-center font-semibold text-base text-slate-700 gap-4 p-2 rounded-l-lg'>
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
        <li>
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
        </li>
        <li>
          <hr className='border-black/20 my-2' />
        </li>
        <li>
          <div className='flex items-center justify-between text-xl text-slate-600 font-semibold px-2'>
            <h1>Contacts</h1>
            <div>
              <div className='flex items-center  justify-between gap-2'>
                <div className='hover:bg-slate-400/30 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer p-2'>
                  <LikeVideoIcon />
                </div>
                <div className='hover:bg-slate-400/30 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer p-2'>
                  <AiOutlineSearch color='#666' />
                </div>
                <div className='hover:bg-slate-400/30 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer p-2'>
                  <MoreIcon />
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className=' font-semibold text-sm text-slate-700 hover:bg-[#E4E6E9] p-2 rounded-l-lg'>
          <div flex className='relative flex items-center gap-4'>
            <CgProfile size='1.4rem' color='#4969af' />
            <div className='absolute bottom-0 left-4 bg-green-600 h-2 w-2 rounded-full'></div>
            <a href='#'>John Voe</a>
          </div>
        </li>
        <li className=' font-semibold text-sm text-slate-700 hover:bg-[#E4E6E9] p-2 rounded-l-lg'>
          <div flex className='relative flex items-center gap-4'>
            <CgProfile size='1.4rem' color='#4969af' />
            <div className='absolute bottom-0 left-4 bg-green-600 h-2 w-2 rounded-full'></div>
            <a href='#'>Henry Ford</a>
          </div>
        </li>
        <li className=' font-semibold text-sm text-slate-700 hover:bg-[#E4E6E9] p-2 rounded-l-lg'>
          <div flex className='relative flex items-center gap-4'>
            <CgProfile size='1.4rem' color='#4969af' />
            <div className='absolute bottom-0 left-4 bg-green-600 h-2 w-2 rounded-full'></div>
            <a href='#'>Michael Dave</a>
          </div>
        </li>
        <li className=' font-semibold text-sm text-slate-700 hover:bg-[#E4E6E9] p-2 rounded-l-lg'>
          <div flex className='relative flex items-center gap-4'>
            <CgProfile size='1.4rem' color='#4969af' />
            <div className='absolute bottom-0 left-4 bg-green-600 h-2 w-2 rounded-full'></div>
            <a href='#'>Samuel Johns</a>
          </div>
        </li>
        <li className=' font-semibold text-sm text-slate-700 hover:bg-[#E4E6E9] p-2 rounded-l-lg'>
          <div flex className='relative flex items-center gap-4'>
            <CgProfile size='1.4rem' color='#4969af' />
            <div className='absolute bottom-0 left-4 bg-green-600 h-2 w-2 rounded-full'></div>
            <a href='#'>George Smith</a>
          </div>
        </li>
        <li className=' font-semibold text-sm text-slate-700 hover:bg-[#E4E6E9] p-2 rounded-l-lg'>
          <div flex className='relative flex items-center gap-4'>
            <CgProfile size='1.4rem' color='#4969af' />
            <div className='absolute bottom-0 left-4 bg-green-600 h-2 w-2 rounded-full'></div>
            <a href='#'>Cris Mayway</a>
          </div>
        </li>
        <li className=' font-semibold text-sm text-slate-700 hover:bg-[#E4E6E9] p-2 rounded-l-lg'>
          <div flex className='relative flex items-center gap-4'>
            <CgProfile size='1.4rem' color='#4969af' />
            <div className='absolute bottom-0 left-4 bg-green-600 h-2 w-2 rounded-full'></div>
            <a href='#'>John Gomes</a>
          </div>
        </li>
      </ul>
      <div className='border-b border-slate-400'></div>
      <div className='mt-2 font-semibold text-slate-600 tracking-wide px-2'>
        <h1>Group conversations</h1>
        <div className='mt-2 flex items-center gap-4 justify-start'>
          <div className='hover:bg-slate-300/30 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer text-xl'>
            +
          </div>
          <div className='font-semibold text-sm tracking-wide'>
            Create new group
          </div>
        </div>
      </div>
    </div>
  );
}
