import React from 'react';
import { IoMdCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
const TopHeader = () => {
    return (
        <div className='bg-linear-to-r from-[#023e8a] via-[#48cae4] to-[#caf0f8] work'>
            <div className='w-9/12 mx-auto '>
                <div className=' flex items-center justify-between text-white'>
                    <div className='flex items-center gap-5 py-2 '>
                        <div className='flex gap-1 items-center  pr-4 '>
                            <IoMdCall className='text-[20px] ' />
                            <p className='text-[15px]'>+8801556440078</p>
                        </div>
                        <div className='flex gap-2  text-[20px] items-center'>
                            <IoMailOutline className='text-xl' />
                            <p className='text-[15px]'>asimankon@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-12 items-center'>
                            <div className='flex gap-6 text-[20px] text-gray-700 items-start'>
                                < SlSocialLinkedin />
                                < FaInstagram className='transform translate-y-[2px]' />
                                < RiTwitterXLine className='transform translate-y-[2px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;