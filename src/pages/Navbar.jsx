


import { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai'
import img from "../assets/WhatsApp Image 2023-12-12 at 13.09.37_81b78cc6.jpg"
import { MdOutlineClose } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import img3 from "../assets/programming-background-collage.jpg"
import { useSpring, animated } from 'react-spring';
import { FaChevronDown } from "react-icons/fa";



const Navbar = () => {
    const [isActive, setActive] = useState(false)
    const handleToggle = () => {
        setActive(!isActive)
    }


    return (
        <div className='relative min-h-screen md:flex'>
            <div className="text-gray-100 bg-gray-800 flex justify-between md:hidden">
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <h1>Junayet</h1>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>

                    <FaSquareFacebook className='h-5 w-5' />
                    <FaSquareGithub className='h-5 w-5' />
                    <FaTwitter className='h-5 w-5' />
                    <FaLinkedin className='h-5 w-5' />

                    <div>
                        <button
                            onClick={handleToggle}
                            className='mobile-menu-button p-4 focus:outline-none'
                        >
                            {isActive ? <AiOutlineBars className='h-5 w-5' /> : <MdOutlineClose className='h-5 w-5' />}
                        </button>
                    </div>

                </div>

            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-900 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex flex-col px-4 py-2  justify-center items-center  mx-auto'>
                            <img src={img} className='h-48 object-cover rounded-full border-2 ' alt="" />
                            <p className='text-xl py-3 text-white font-semibold'>JUNAYET SHIBLU</p>
                        </div>
                    </div >
                    <div className='flex flex-col justify-center text-2xl text-white items-center flex-1 mt-4 space-y-3' >
                        <Link to={'/'}>Home</Link>
                        <Link>About Me</Link>
                        <Link>What I Do</Link>
                        <Link>Resume</Link>
                        <Link>Portfolio</Link>
                        <Link>Contact</Link>
                    </div>

                </div >

                <div>
                    <hr />

                    <button className='flex gap-3 justify-center text-white w-full items-center px-4 py-2 mt-4'>
                        <FaSquareFacebook className='text-3xl' />
                        <FaSquareGithub className='text-3xl' />
                        <FaTwitter className='text-3xl' />
                        <FaLinkedin className='text-3xl' />

                    </button>
                </div>
            </div >
            <div className='flex-1  md:ml-64'>
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${img3})` }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">WELLCOME</h1>
                            <div>

                            </div>
                            <button className="btn btn-outline btn-secondary text-2xl mt-4">Hire me</button>
                            <div>
                                <FaChevronDown className='text-4xl text-white ml-28 mt-20' />
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                    <p className='text-3xl font-bold text-center mt-10'>Know Me More</p>
                    <hr className='text-center bg-black h-1 w-20 mt-2 mx-auto' />


                </div>
            </div>
        </div >
    );
};

export default Navbar;