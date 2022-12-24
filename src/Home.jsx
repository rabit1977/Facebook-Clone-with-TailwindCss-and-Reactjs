import React from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import SidebarRight from './components/SidebarRight';

export default function Home() {
  return (
    <div className=' w-full lg:gap-20 gap-4 flex py-2 px-4'>
      <Sidebar />
      <Main />
      <SidebarRight />
    </div>
  );
}
