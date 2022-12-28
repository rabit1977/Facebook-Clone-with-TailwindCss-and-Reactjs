import React from 'react';
import { CgProfile } from 'react-icons/cg';

export default function Main() {
  return (
    <>
      <div className='relative flex-1 bg-white h-72 rounded-lg md:max-w-xl lg:max-w-2xl sm:grow max-w-xl m-auto my-4'>
        <div className='h-full shadow'>
          <div className='absolute bg-white rounded-full p-3 z-50 left-8 top-40 cursor-pointer hover:bg-[#F0F2F5]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-6 h-6'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M15.75 19.5L8.25 12l7.5-7.5'
              />
            </svg>
          </div>
          <div className='absolute bg-white rounded-full p-3 z-50 right-8 top-40 cursor-pointer hover:bg-[#F0F2F5]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-6 h-6'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M8.25 4.5l7.5 7.5-7.5 7.5'
              />
            </svg>
          </div>
          <div className='border-b border-black/10 px-4 py-1'>
            <div
              title='div-top'
              className='flex gap-2 font-semibold text-slate-600'
            >
              <div className='flex-1 border-b-4 border-b-blue-500 -mb-1'>
                <div className='flex gap-2 justify-center p-4 flex-1 rounded-lg text-blue-700 text-base'>
                  <div>+</div>
                  <div>Stories</div>
                </div>
              </div>
              <div className='flex gap-2 justify-center p-4 flex-1  hover:bg-[#F0F2F5] rounded-lg text-slate-600 text-base'>
                <div>+</div>
                <div>Stories</div>
              </div>
              <div className='flex gap-2 justify-center p-4 flex-1  hover:bg-[#F0F2F5] rounded-lg text-slate-600 text-base'>
                <div>+</div>
                <div>Stories</div>
              </div>
            </div>{' '}
          </div>
          <div className='flex h-full max-h-52 px-3'>
            <div className='flex justify-between gap-2.5 pt-4 overflow-hidden'>
              <div className='flex flex-col rounded-xl overflow-hidden items-center justify-end bg-black'>
                <img
                  className='h-full object-cover object-left opacity-70 hover:scale-[104%] hover:origin-center hover:linear duration-300 cursor-pointer'
                  src='public/familyimage.jpg '
                  alt=''
                />
                <p className='absolute text-white/80 pb-3 font-[600px] text-lg tracking-wide'>
                  2.3k
                </p>
              </div>
              <div className='flex flex-col rounded-xl overflow-hidden items-center justify-end bg-black'>
                <img
                  className='h-full object-cover object-left opacity-70 hover:scale-[104%] hover:origin-center hover:linear duration-300 cursor-pointer'
                  src='public/familyimage.jpg '
                  alt=''
                />
                <p className='absolute text-white/80 pb-3 font-[600px] text-lg tracking-wide'>
                  2.3k
                </p>
              </div>
              <div className='flex flex-col rounded-xl overflow-hidden items-center justify-end bg-black'>
                <img
                  className='h-full object-cover object-left opacity-70 hover:scale-[104%] hover:origin-center hover:linear duration-300 cursor-pointer'
                  src='public/familyimage.jpg '
                  alt=''
                />
                <p className='absolute text-white/80 pb-3 font-[600px] text-lg tracking-wide'>
                  2.3k
                </p>
              </div>
              <div className='flex flex-col rounded-xl overflow-hidden items-center justify-end bg-black'>
                <img
                  className='h-full object-cover object-left opacity-70 hover:scale-[104%] hover:origin-center hover:linear duration-300 cursor-pointer'
                  src='public/familyimage.jpg '
                  alt=''
                />
                <p className='absolute text-white/80 pb-3 font-[600px] text-lg tracking-wide'>
                  2.3k
                </p>
              </div>
              <div className='flex flex-col rounded-xl overflow-hidden items-center justify-end bg-black'>
                <img
                  className='h-full object-cover object-left opacity-70 hover:scale-[104%] hover:origin-center hover:linear duration-300 cursor-pointer'
                  src='public/familyimage.jpg '
                  alt=''
                />
                <p className='absolute text-white/80 pb-3 font-[600px] text-lg tracking-wide'>
                  2.3k
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-4 bg-white rounded-xl p-4 border shadow'>
          <div className='flex flex-col divide-y'>
            <div className='flex gap-4 justify-between'>
              <CgProfile size='3.2rem' color='#000' />
              <input
                className='flex-1 bg-slate-50 rounded-full pl-2 border outline-none'
                type='text'
                placeholder="What's on your mind"
              />
            </div>
            <div className='mt-3'>
              <ul className='flex justify-around space-x-4 items-center mt-3'>
                <li className='hover:bg-slate-50 px-3 py-1 rounded-xl'>
                  Live video
                </li>
                <li className='hover:bg-slate-50 px-3 py-1 rounded-xl'>
                  Photo/video
                </li>
                <li className='hover:bg-slate-50 px-3 py-1 rounded-xl'>
                  Feeling/activity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
