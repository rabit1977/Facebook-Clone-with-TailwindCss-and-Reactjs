import React from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import SidebarRight from './components/SidebarRight';

export default function Home() {
  return (
    <div className='flex py-2 px-4'>
      <Sidebar />
      <Main />
      <SidebarRight />
    </div>
  );
}
