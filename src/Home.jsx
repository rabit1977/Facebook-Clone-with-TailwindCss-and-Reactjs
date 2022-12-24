import React from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import SidebarRight from './components/SidebarRight';

export default function Home() {
  return (
    <div className=' w-full gap-2 grid grid-cols-5 py-2 px-4'>
      <Sidebar />
      <Main />
      <SidebarRight />
    </div>
  );
}
