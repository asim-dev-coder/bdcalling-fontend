import React from 'react';
import { FaReact, FaHtml5, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


const Skills = () => {
    return (
        <div>
            <div className='bg-gradient-to-l from-purple-50 to-sky-50'>
                <div className='w-9/12 mx-auto py-4'>
                    <h1 className='text-4xl text-center font-bold my-2 text-[#023e8a]'>My Skills
                    </h1>
                    <h1 className='text-2xl text-center font-medium my-6 text-[#023e8a]'>I give services in Frontend Development, having proficiency in-
                    </h1>
                    <div className='grid sm:grid-cols-2 md:flex justify-between text-[#023e8a] py-3 gap-4'>
                        <div class="relative">
                            <div
                                class="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#023e8a] via-[#48cae4] to-[#caf0f8] opacity-75 blur"
                            ></div>
                            <div
                                class="h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
                            >
                                <div
                                    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#61dbfb] group-hover:scale-[800%] duration-500 z-[-1] op"
                                ></div>
                                <h1
                                    class="z-20 font-semibold font-Poppin group-hover:text-white duration-500 text-[28px]"
                                >
                                    React
                                </h1>
                                <FaReact className="group-hover:text-white animate-spin text-[#61dbfb] mt-2" size={62} style={{ animationDuration: '11s' }} />
                            </div>
                        </div>
                        <div class="relative">
                            <div
                                class="absolute -inset-1 rounded-lg bg-gradient-to-l from-[#023e8a] via-[#48cae4] to-[#caf0f8] opacity-75 blur"
                            ></div>
                            <div
                                class="div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
                            >
                                <div
                                    class="circle absolute h-[5em] w-[5em] -bottom-[2.5em] -right-[2.5em] rounded-full bg-[#38bdf8] group-hover:scale-[800%] duration-500 z-[-1] op"
                                ></div>
                                <h1
                                    class="z-20 font-semibold font-Poppin group-hover:text-white duration-500 text-[28px]"
                                >
                                    Tailwind CSS
                                </h1>
                                <RiTailwindCssFill className="group-hover:text-white text-[#38bdf8] mt-3" size={62} />
                            </div>
                        </div>
                        <div class="relative">
                            <div
                                class="absolute -inset-1 rounded-lg bg-gradient-to-l from-[#023e8a] via-[#48cae4] to-[#caf0f8] opacity-75 blur"
                            ></div>
                            <div
                                class="div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
                            >
                                <div
                                    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#FF5800] group-hover:scale-[800%] duration-500 z-[-1] op"
                                ></div>
                                <h1
                                    class="z-20 font-semibold font-Poppin group-hover:text-white duration-500 text-[28px]"
                                >
                                    HTML 5
                                </h1>
                                <FaHtml5 className="group-hover:text-white text-orange-500 mt-3 hover:text-white" size={62} />
                            </div>
                        </div>
                        <div class="relative">
                            <div
                                class="absolute -inset-1 rounded-lg bg-gradient-to-l from-[#023e8a] via-[#48cae4] to-[#caf0f8] opacity-75 blur"
                            ></div>
                            <div
                                class="div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
                            >
                                <div
                                    class="circle absolute h-[5em] w-[5em] -bottom-[2.5em] -right-[2.5em] rounded-full bg-[#000] group-hover:scale-[800%] duration-500 z-[-1] op"
                                ></div>
                                <h1
                                    class="z-20 font-semibold font-Poppin group-hover:text-white duration-500 text-[28px]"
                                >
                                    Version Control
                                </h1>
                                <FaGithub className="group-hover:text-white text-[#000] mt-3" size={62} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;