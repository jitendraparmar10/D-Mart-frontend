import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { TbMenu2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const categoryList =[
    {
        id:1,
        name : "ready to cook",
        link : "#",
    },
    {
        id:2,
        name : "Home Appliances",
        link : "#",
    },
    {
        id:3,
        name : "Cookware",
        link : "#",
    },
    {
        id:3,
        name : "Serveware",
        link : "#",
    },
    {
        id:4,
        name : "Cleaners",
        link : "#",
    },
    {
        id:5,
        name : "Detergent & Fabric Care",
        link : "#",
    },
];

const Nevbar = () => {
    return (
        <nav className='bg-white shadow-md overflow-x-clip'>
           
           {/* UPPER PART */}
           <div className='flex items-center justify-between border-b border-gray-300 '>
                {/* 1st div */}
                <div className='flex items-center '>
                    <img src="logo.svg" className='w-[130px]  mx-6 py-1'/>
                    <div className='flex flex-col items-center bg-[rgb(242,246,255)] p-2 rounded-tl-2xl rounded-br-2xl'>
                        <div className='flex items-center gap-3'>
                            <MdOutlineLocationOn className='text-custom-darkGreen'/>
                            <span className='font-bold text-gray-800 text-sm'>400037</span>
                            <MdKeyboardArrowDown className='text-gray-800  text-2xl'/>
                        </div>
                        <span className='font-bold text-gray-500 text-sm pr-1'>Mumbai</span>
                    </div>
                    <div  className='grid gap-2 mx-2 mt-2'>
                        <p className='text-xs'>
                            Earliest {" "}
                            <span className='text-custom-lightGreen font-bold'>Home Delivery</span> {" "}
                            available
                        </p>
                        <p className='flex items-center gap-1'>
                            <img src="timer.png" alt="" className='size-[20px]' />
                            <span className='text-xs font-bold'>Friday 07:00 AM - 10:00 AM</span>
                        </p>
                    </div>
                </div>

                {/* 2nd Div */}
                <div className='flex items-center'>
                    <input 
                    type="search" 
                    name='search' 
                    id='search' 
                    className='border-2 border-gray-300 shadow-sm px-3 py-2 font-thin rounded-sm text-sm w-[30vw]' 
                    placeholder='Search Here...' 
                    />
                    <button className='uppercase font-bold text-white bg-custom-lightGreen px-4 py-3 rounded-sm text-xs shadow-md -ml-1'>Search</button>
                </div>

                {/* 3rd Div */}
                <div className='flex items-center gap-8 mr-5'>
                    <div className='grid w-[150px] hover:bg-gray-100 px-1 py-2'>
                        <span className='text-gray-400 text-sm font-medium'>Hello Max</span>
                        <span className='font-semibold text-sm'>My Account</span>
                    </div>
                    <img src="/notification.svg" alt=""  />
                    <div className='flex gap-2 items-center'>
                        <div className='relative'>
                            <span className='absolute -top-1 -left-1 bg-amber-200 rounded-full text-[10px] px-1'>3</span>
                            <FiShoppingCart className='text-custom-lightGreen text-xl' />
                        </div>
                        <span className='font-bold mt-2.5'>₹500</span>
                    </div>
                </div>

           </div>

           {/* LOWER PART */}
            <div className='flex items-center  gap-1'>
                <div className='flex items-center gap-1 px-4 py-2 w-[14vw] border-r border-r-gray-300'>
                    <TbMenu2 className='text-xl text-gray-600' />
                    <span className='text-sm '>All Categories</span>
                </div>
                {categoryList.map(({id,link,name})=>(
                    <Link to={link} key={id} className='mx-2 hover:underline capitalize text-sm'>
                    {name}
                    </Link>
                ))}
            </div>

        </nav>
    );
};

export default Nevbar;