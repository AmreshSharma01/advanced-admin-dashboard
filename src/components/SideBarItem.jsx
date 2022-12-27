import React from 'react'

function SideBarItem({ title, icon, buttons, textcolor }) {


  return (

    <div className='flex w-63 h-12 text-sm text-white-400 item-center gap-x-5 cursor-pointer p-4 pl-5 hover:bg-blue-800 dark:hover:bg-secondary-dark border-l-4 border-transparent hover:border-blue-600 dark:hover:border-sidebar-dark'>

      <span className='w-3 text-lg text-white pt-0.5 '>{icon}</span>
      <span className='w-10 pl-1 text-slate-50'>{title}</span>

      <div className={`pl-14 pb-1 ${textcolor}`}>
        {/* <span >{buttons}</span> */}
        <span className={` ${buttons ? " hidden md:inline-block px-1 py-0.1 text-xs bg-white font-medium rounded-full" : ""}`}>{buttons}</span>
      </div>
    </div>
  )
}

export default SideBarItem

