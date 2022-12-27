import React from "react";
import "./../styles/layout.css";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
import RecentActivities from "./RecentActivities";

import Trello from "./Trello";
import Table from "./Table";

const Layout = () => {
  return (
    // https://www.geeksforgeeks.org/tailwind-css-min-height/
    <div
      className={` grid layout-design dark:bg-secondary-dark min-h-screen  `}
    >
      <div className="row-span-3 col-span-1 border-2 border-none">
        <Sidebar />
      </div>

      {/* <div className='relative top-14 '> */}
      <div className="pt-14 ">
        <div className=" col-span-1 border-0 dark:bg-secondary-dark ">
          <Cards />
        </div>

        {/* Social Traffic and Recent Activities  */}

        {/* using flexbox */}

        <div className="p-1 -mt-1 col-span-1 border-0 dark:bg-secondary-dark flex flex-col social-and-activities-design lg:flex-row ">
          <div className="sm:basis-1/2 basis-full   m-2 ">
            <Table />
          </div>
          <div className="sm:basis-1/2 basis-full   m-2 ">
            <RecentActivities />
          </div>
        </div>
        {/* using grid  */}

        {/* <div className='lg:-mt-48 grid grid-cols-1 lg:grid-cols-2 p-4 gap-4'>
                    <div className=' m-2  '><Table /></div>
                    <div className=' m-2 '><RecentActivities /></div>

                </div> */}
        {/* ----------------------------------------------------------------------------------------------- */}

        <div className="col-span-1 dark:bg-secondary-dark">
          <Trello />
        </div>
      </div>
    </div>
  );
};

export default Layout;
