import React from 'react'
import { RiHome8Line } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { VscSettingsGear, VscComment } from "react-icons/vsc";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { RiWindow2Line } from "react-icons/ri";
import SideBarItem from './SideBarItem';

const Sidebar = () => {

  return (

    // some change in sidebar height during media queries 
    //   h-full
    <div className='fixed z-10 top-14 dark:bg-sidebar-dark bg-sidebar-light h-full  w-14 md:w-64 hover:w-64 overflow-auto transition-all duration-300'>
      <div className='hidden md:block text-left text-gray-400 pl-5 pt-3 pb-2 contrast-6.98'>
        MAIN
      </div >

      <SideBarItem title="Dashboard" icon={<RiHome8Line />} />
      <SideBarItem title="Board" icon={<RiWindow2Line />} buttons="New" textcolor='text-blue-800' />
      <SideBarItem title="Messages" icon={<VscComment />} />
      <SideBarItem title="Notification" icon={<IoNotificationsCircleSharp />} buttons="1.2k" textcolor='text-red-400' />

      <div className='hidden md:block text-left text-gray-400 pl-5 pt-4 pb-2 contrast-6.98'>
        SETTINGS
      </div>
      <SideBarItem title="Profile" icon={<VscAccount />} />
      <SideBarItem title="Setting" icon={<VscSettingsGear />} />
    </div>
  )
}

export default Sidebar