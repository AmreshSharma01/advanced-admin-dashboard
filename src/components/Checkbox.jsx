import React from 'react'
import SvgIcons from '../icons/SvgIcons'

const Checkbox = ({ number }) => {
    return (
        <>
            <span className={`m-0.5 flex items-center `}>
                <SvgIcons icon="TrelloCheckbox" />
                {number}
            </span>
        </>
    )
}

export default Checkbox