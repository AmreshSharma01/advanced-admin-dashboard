import React from "react";
import ProgressBar from "./ProgressBar";

const tableHeadingStyle =
  "px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left";
const tableItemStyle =
  "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4";
const tableFirstItemStyle =
  "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left";
const tableRowStyle = "text-gray-700 dark:text-gray-100";

const TableItem = ({ name, number, children }) => {
  return (
    <table className="items-center w-full bg-transparent border-collapse">
      <tbody>
        <tr className={tableRowStyle}>
          <th className={`${name ? tableFirstItemStyle : "hidden"}`}>{name}</th>
          <td className={`${number ? tableItemStyle : "hidden"} `}>{number}</td>
          <td className={`${children ? tableItemStyle : "hidden"} `}>
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableItem;

// const NewTableItem = ({ name, number, children }) => {
//     return (

//         <table className=' items-center w-full bg-transparent border-collapse'  >

//             <tbody>
//                 <tr className='flex  text-gray-700 dark:text-gray-100 ' >
//                     {/* <th className={tableFirstItemStyle} > */}
//                     <th className='basis-1/3   text-left  text-xs  p-4 '>

//                         {name}
//                     </th>
//                     <td className='basis-1/3   text-xs  p-4'>
//                         {number}
//                     </td>
//                     <td className='basis-1/3   text-xs  p-4'>

//                         {children}
//                     </td>
//                 </tr>
//             </tbody>
//         </table>

//     )
// }

// import React from 'react'
// import ProgressBar from './ProgressBar'

// // const tableHeadingStyle = 'px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'
// const tableItemStyle = 'border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'
// const tableRowStyle = 'text-gray-700 dark:text-gray-100'

// const NewTableItem = ({ name, number, progressbar, children }) => {
//     return (

//         <table >

//             <tbody>
//                 <tr >
//                     <td >
//                         {name}
//                     </td>
//                     <td >
//                         {number}
//                     </td>
//                     <td className='flex flex-wrap flex-col' >
//                         <div className='flex '>
//                             {children}
//                             4677
//                             {progressbar}
//                             <ProgressBar percentage="79%" bgSecondaryColor="bg-blue-200" bgPrimaryColor="bg-blue-800" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'flex-row' }} />
//                         </div>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>

//     )
// }

// export default NewTableItem

// {/* <ProgressBar percentage="79%" bgSecondaryColor="bg-blue-200" bgPrimaryColor="bg-blue-800" /> */ }

// <ProgressBar percentage="95%" bgSecondaryColor="bg-yellow-200" bgPrimaryColor="bg-yellow-800" />

// className='px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'

/*
import React from 'react'

const TableItems = ({ Name, Number, Percentage }) => {
    return (
        <table>
            <tbody>
                <tr className='text-gray flex flex-col flex-wrap py-2 '>

                    <td className='border-t-1  border-l-1 border-r-0 text-xs px-4  font-bold text-left dark:text-gray-50'>
                        {Name}
                    </td>

                    <td className=' border-t-0 border-l-0 border-r-0 text-xs pl-20     text-left dark:text-gray-50 '>
                        {Number}
                    </td>

                    <td className='border-t-0  border-l-0 border-r-0 text-xs   text-right dark:text-gray-50'>
                        {Percentage}
                    </td>
                </tr>

            </tbody>
        </table>


    )
}

export default TableItems
*/

// min-w-[140px] <=: table heading style
