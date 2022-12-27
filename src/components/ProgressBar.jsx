import React from 'react'

const ProgressBar = ({ percentage, bgPrimaryColor, bgSecondaryColor }) => {
    return (
        <div className='block w-full  text-left'>
            <div className='flex  items-center justify-center  text-xs  '>
                <span className='mr-2'>{percentage}</span>
                <div className={` h-2 w-full   rounded   ${bgSecondaryColor}`}>
                    <div className={`h-2  rounded rounded-r-none   ${bgPrimaryColor}`} style={{ width: percentage }}>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProgressBar


// import React from 'react'

// const ProgressBar = ({ percentage, bgPrimaryColor, bgSecondaryColor }) => {
//     return (
//         <div className='flex  items-center  flex-row  text-xs  border-4 border-solid border-red-500 '>
//             <span className='mr-2'>{percentage}</span>
//             <div className='w-full relative'>

//                 <div className={`  overflow-hidden h-2 text-xs flex rounded bg-blue-200`}>
//                     <div className={` shadow-none flex flex-col text-center  text-white justify-center bg-blue-600`}>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProgressBar

// flex
// flex flex-col justify-center