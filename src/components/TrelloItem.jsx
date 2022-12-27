import React from 'react'

const listItemStyle = 'bg-white dark:bg-gray-600 rounded text-sm p-2 mt-1 cursor-pointer border-b border-gray-100 dark:border-primary-dark hover:bg-gray-50 dark:hover:bg-gray-700'


const TrelloItem = ({ text, children }) => {
    return (
        <div className='text-sm text-black dark:text-gray-50 mt-1'>

            <div className={listItemStyle}>
                {text}
                <div className='flex justify-between'>
                    {/* {checkbox}
                    {badge}
                    {image} */}
                    {children}
                </div>
            </div>
        </div>
    )
}

export default TrelloItem

