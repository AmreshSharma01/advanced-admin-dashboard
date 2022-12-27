import React from "react";
import CardItem from "./CardItem";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import { HiTrendingUp } from "react-icons/hi";

const Cards = () => {
  const iconStyle =
    "group-hover:rotate-12 group-hover:transition-all duration-300 text-navbar-light dark:text-navbar-dark";
  return (
    // using flex

    // <div className='flex flex-col  md:flex-row w-[calc(100%-3.5rem)] md:w-[calc(100%-16rem)]  gap-4  p-4  justify-between ' >
    //     <CardItem />
    //     <CardItem />
    //     <CardItem />
    //     <CardItem />
    // </div>

    // <div className='gap-4 p-2 grid grid-rows-4  sm:grid-rows-2 sm:grid-cols-2 md:grid-rows-1 md:grid-cols-4'>

    <div className="dark:bg-secondary-dark  gap-4 p-3 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4">
      <CardItem
        icon={<HiOutlineUserGroup size={30} className={iconStyle} />}
        name="Visitors"
        number={1257}
      />
      <CardItem
        icon={<BsHandbag size={30} className={iconStyle} />}
        name="Orders"
        number={557}
      />
      <CardItem
        icon={<HiTrendingUp size={30} className={iconStyle} />}
        name="Sales"
        number={"$11257"}
      />
      <CardItem
        icon={<BiDollarCircle size={30} className={iconStyle} />}
        name="Balances"
        number={"$75257"}
      />
      {/* <CardItem icon={< BiDollarCircle size={30} className={iconStyle} />} name="Warehouse" number={'5'} /> */}
    </div>
  );
};

export default Cards;
