import React from 'react'

const TrelloContainer = (props) => {
    return (
        <div className='text-sm rounded bg-gray-200 dark:bg-gray-800 p-3'>
            <div className='flex flex-row justify-between py-1 text-black dark:text-white'>
                <div className='font-semibold text-sm'>{props.title}</div>
                <svg className="h-4 fill-current text-gray-600 dark:text-gray-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"></path></svg>
            </div>
            <div className='text-sm text-black dark:text-gray-50 mt-2'>
                {props.children}
            </div>
            <div className='mt-3 p-1 text-gray-600 dark:text-gray-400'>
                Add a Card...
            </div>
        </div>
    )
}

export default TrelloContainer
