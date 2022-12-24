import React from 'react';

export default function Main() {
  return (
    <div className='bg-white h-72 rounded-lg shadow-sm col-span-5 max-w-[600px] m-auto my-4 sm:col-span-3 '>
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
      <div className='flex justify-between space-x-1 pt-4'>
        <div className='relative h-full -ml-1'>
          <img
            className='h-full w-full flex absolute object-cover'
            src='public/adidas shoes.webp'
            alt=''
          />
          <p className='absolute'>content</p>
        </div>
        <div>
          <img src='public/adidas shoes.webp' alt='' />
          <p>content</p>
        </div>
        <div>
          <img src='public/adidas shoes.webp' alt='' />
          <p>content</p>
        </div>
        <div>
          <img src='public/adidas shoes.webp' alt='' />
          <p>content</p>
        </div>
      </div>
    </div>
  );
}
