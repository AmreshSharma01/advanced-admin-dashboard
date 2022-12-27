// updaed one is below

import React from "react";
import TableItem from "./TableItem";
import ProgressBar from "./ProgressBar";

const tableHeadingStyle =
  "px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left";
const tableItemStyle =
  "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4";
const tableRowStyle = "text-gray-700 dark:text-gray-100";

const Table = () => {
  return (
    <div className=" flex flex-col bg-gray-50 dark:bg-primary-dark w-full shadow-lg rounded px-0">
      <div className="px-4 py-2 flex flex-row flex-wrap justify-between">
        <div className="self-center font-semibold text-base text-gray-900 dark:text-gray-50">
          Social Traffic
        </div>
        <button className="px-3 border-x-2 text-white font-bold  text-xs bg-primary-light dark:bg-gray-100 dark:text-black py-1 rounded border-transparent">
          SEE ALL
        </button>
      </div>
      <div className="block overflow-x-auto  w-full ">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr className={{ tableRowStyle }}>
              <th className={tableHeadingStyle}>Referral</th>
              <th className={tableHeadingStyle}>Visitors</th>
              <th className={tableHeadingStyle}>tempHeading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <TableItem name="Facebook" />
                <TableItem name="Instagram" />
                <TableItem name="Google" />
                <TableItem name="Microsoft" />
                <TableItem name="LinkedIn" />
              </td>
              <td>
                <TableItem number="6,786" />
                <TableItem number="6,786" />
                <TableItem number="6,786" />
                <TableItem number="9,786" />
                <TableItem number="3,216" />
              </td>

              <td>
                <TableItem>
                  <ProgressBar
                    percentage="60%"
                    bgSecondaryColor="bg-green-200"
                    bgPrimaryColor="bg-green-800"
                  />
                </TableItem>
                <TableItem>
                  <ProgressBar
                    percentage="60%"
                    bgSecondaryColor="bg-blue-200"
                    bgPrimaryColor="bg-blue-800"
                  />
                </TableItem>
                <TableItem>
                  <ProgressBar
                    percentage="80%"
                    bgSecondaryColor="bg-yellow-200"
                    bgPrimaryColor="bg-yellow-800"
                  />
                </TableItem>
                <TableItem>
                  <ProgressBar
                    percentage="60%"
                    bgSecondaryColor="bg-blue-200"
                    bgPrimaryColor="bg-blue-800"
                  />
                </TableItem>
                <TableItem>
                  <ProgressBar
                    percentage="30%"
                    bgSecondaryColor="bg-red-200"
                    bgPrimaryColor="bg-red-800"
                  />
                </TableItem>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

// import React from 'react'
// import NewTableItem from './NewTableItem'
// import ProgressBar from './ProgressBar'

// const tableHeadingStyle = 'px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'
// const tableItemStyle = 'border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'
// const tableRowStyle = 'text-gray-700 dark:text-gray-100'

// const NewTable = () => {
//     return (

//         <div className=' flex flex-col bg-gray-50 dark:bg-primary-dark w-full shadow-lg rounded px-0'>

//             <div className='px-4 py-2 flex flex-row flex-wrap justify-between'>
//                 <div className='self-center font-semibold text-base text-gray-900 dark:text-gray-50'>Social Traffic</div>
//                 <button className='px-3 border-x-2 text-white font-bold  text-xs bg-primary-light dark:bg-gray-100 dark:text-black py-1 rounded border-transparent'>SEE ALL</button>
//             </div>
//             <div className='block  w-full overflow-x-auto'>
//                 {/* <div className='flex flex-col w-full '> */}

//                 <table className='w-full bg-transparent border-collapse'  >
//                     <thead>
//                         <tr  >
//                             <th className={`${tableHeadingStyle}  `} >Referral</th>
//                             <th className='px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle  border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold' >Visitors</th>
//                             <th className={`${tableHeadingStyle} `} >tempHeading</th>
//                         </tr>
//                     </thead>
//                     <tbody >
//                         <tr >
//                             <td colSpan="3" >

//                                 <NewTableItem name="Facebook" number="3,670">
//                                     <ProgressBar percentage="60%" bgSecondaryColor="bg-green-200" bgPrimaryColor="bg-green-800" />
//                                 </NewTableItem>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td colSpan="3" >

//                                 <NewTableItem name="Instagram" number="6,870">

//                                     <ProgressBar percentage="59%" bgSecondaryColor="bg-blue-200" bgPrimaryColor="bg-blue-800" />
//                                 </NewTableItem>
//                             </td>
//                         </tr>
//                         <tr  >
//                             <td colSpan="3">
//                                 <NewTableItem name="Google" number="8,890">
//                                     <ProgressBar percentage="80%" bgSecondaryColor="bg-yellow-200" bgPrimaryColor="bg-yellow-800" />
//                                 </NewTableItem>
//                             </td>

//                         </tr>
//                         <tr >
//                             <td colSpan="3" >

//                                 <NewTableItem name="Facebook" number="3,670">
//                                     <ProgressBar percentage="60%" bgSecondaryColor="bg-green-200" bgPrimaryColor="bg-green-800" />
//                                 </NewTableItem>
//                             </td>
//                         </tr>
//                         <tr  >
//                             <td colSpan="3">
//                                 <NewTableItem name="Microsoft" number="8,890">
//                                     <ProgressBar percentage="80%" bgSecondaryColor="bg-yellow-200" bgPrimaryColor="bg-yellow-800" />
//                                 </NewTableItem>
//                             </td>

//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div >
//     )
// }

// export default NewTable
