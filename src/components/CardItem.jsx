import React from 'react'

const CardItem = ({ icon, name, number }) => {
    return (
        <div className='shadow-lg border-b-4 border-b-navbar-light dark:border-b-secondary-dark p-2 flex  border-transparent dark:bg-primary-dark bg-primary-light justify-between items-center rounded-md group'>
            <div className='border-white bg-white rounded-full w-14 h-14 p-3 '>{icon}</div>
            <div className='flex flex-col '>
                <div className={`${number < 50 && name === "Warehouse" ? 'text-red-500' : 'text-white'} tex font-semibold text-xl text-right `}>{number}</div>
                <div className={`text-white font-semibold text-right text-[16px] `}>{name}</div>
            </div>
        </div>
    )
}

export default CardItem