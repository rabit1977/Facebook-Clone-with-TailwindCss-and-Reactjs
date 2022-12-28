import React from 'react';
import { CgProfile } from 'react-icons/cg';
import FeelingActivity from './Icons';

export default function Main() {
  return (
    <>
      <div className='relative flex-1 bg-white h-72 rounded-lg md:max-w-xl  sm:grow max-w-xl mx-auto my-4'>
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
        <div className='mt-4 text-xs sm:text-sm md:text-base bg-white rounded-xl p-4 border shadow'>
          <div className='flex flex-col divide-y'>
            <div className='flex gap-1 justify-between'>
              <CgProfile size='2.6rem' color='#000' />
              <input
                className='flex-1 bg-slate-50 rounded-full pl-2 border outline-none'
                type='text'
                placeholder="What's on your mind"
              />
            </div>
            <div className='mt-3'>
              <ul className='flex justify-between sm:justify-around mt-2'>
                <li className='flex gap-1 sm:gap-2 hover:bg-slate-100 px-1 sm:px-3 py-1 sm:py-2 rounded-xl text-slate-600/90 font-semibold tracking-wide items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
                    />
                  </svg>
                  Live video
                </li>
                <li className='flex gap-1 sm:gap-2 hover:bg-slate-100 px-1 sm:px-3 py-1 sm:py-2 rounded-xl text-slate-600/90 font-semibold tracking-wide items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                    />
                  </svg>
                  Photo/video
                </li>
                <li className='flex gap-1 sm:gap-2 hover:bg-slate-100 px-1 sm:px-3 py-1 sm:py-2 rounded-xl text-slate-600/90 font-semibold tracking-wide items-center'>
                  <FeelingActivity />
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
