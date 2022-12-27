import React from 'react'

// const headingStyle = ' my-1 py-3 text-xs uppercase px-4 border border-solid border-l-0 border-r-0 border-gray-200 dark:border-gray-500  bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100  font-semibold'
const headingStyle = 'px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'

const RecentActivitiesContainer = ({ heading, children }) => {

    return (
        <>
            <div className={headingStyle}>{heading}</div>
            {children}
        </>
    )
}


export default RecentActivitiesContainer