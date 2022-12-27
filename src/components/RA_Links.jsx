import React from 'react'

const linkStyle = 'font-medium text-gray-800 dark:text-gray-50';

const RA_Links = ({ link }) => {
    return (
        <a href='#' className={linkStyle}
        >{link}</a>
    )
}

export default RA_Links