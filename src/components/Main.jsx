import React from 'react';
import { CgProfile } from 'react-icons/cg';
import FeelingActivity, {
  CloseIcon,
  ExporeIcon,
  LikeVideoIcon,
  MoreIcon,
  PhotoVideoIcon,
} from './Icons';

export default function Main() {
  const today = new Date();
  const f = new Intl.DateTimeFormat('en-us', {
    // timeStyle: 'medium',
    // dateStyle: 'short',
    hour: 'numeric',
    hourCycle: 'h12',
    dayPeriod: 'short',
    timeZone: 'UTC',
  });
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
        {/* Live, Photo, Feeling activity  */}
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
                  <LikeVideoIcon />
                  Live video
                </li>
                <li className='flex gap-1 sm:gap-2 hover:bg-slate-100 px-1 sm:px-3 py-1 sm:py-2 rounded-xl text-slate-600/90 font-semibold tracking-wide items-center'>
                  <PhotoVideoIcon />
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
        {/* post window */}
        <div className='bg-white rounded-xl mt-4 px-4  shadow h-auto'>
          <div className='h-16  flex items-center justify-between border-b'>
            <div className='flex items-center gap-2 text-sm font-semibold text-slate-700'>
              <div className=''>
                <img src='src/assets/react.svg' alt='' />
              </div>
              <div className='flex flex-col justify-center'>
                <div className='flex items-center gap-2'>
                  <div className='name'>DigitAlb</div>
                  <input
                    type='radio'
                    className='accent-blue-500'
                    checked
                  ></input>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='time'>
                    {f.format(today)} {' . '}
                  </div>
                  <div className=''>
                    <ExporeIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className='close-wrapper'>
              <div className='flex gap-4 items-center text-slate-700'>
                <div className='hover:bg-slate-200 p-2 rounded-full '>
                  <MoreIcon />
                </div>
                <div className='hover:bg-slate-200 p-2 rounded-full '>
                  <CloseIcon />
                </div>
              </div>
              <div className='closeicon'></div>
            </div>
          </div>
          <div className='text-sm space-y-2'>
            <p>Olta thyen rregullin! Del nga ruloja dhe hyn në shtëpi...</p>
            <p>
              Big Brother VIP, çdo të martë e të shtunë në Top Channel dhe 24/7
              LIVE në DigitAlb Tokësor, Satelitor dhe OTT me dy kanale të
              dedikuara, nr. 8 dhe 9.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
