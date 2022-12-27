import React from 'react'
import SvgIcons from '../icons/SvgIcons'
import { MdKeyboardArrowRight } from 'react-icons/md'


const RecentActivitiesItem = ({ icon, paragraph, isLastItem }) => {
    return (
        <div className='flex flex-row px-4' >
            <SvgIcons icon={icon} />


            {/* note: flex-grow property helps to fill the remaining space :https://tailwindcss.com/docs/flex-grow  */}

            <div className={`mt-2 flex flex-grow justify-between items-center border-b  ${isLastItem ? 'border-none dark:border-none' : 'border-gray-100 dark:border-gray-400'} text-sm text-gray-600 dark:text-gray-50 pb-2`}>

                {paragraph}
                {/* View link  */}
                <div className=' flex flex-row  justify-between  '>
                    <a href="#" className='flex flex-row  items-center text-primary-light dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 '>View
                        <span>{<MdKeyboardArrowRight />}</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RecentActivitiesItem

// ${isLastItem ? 'dark:border-none' : 'dark:border-gray-400'}