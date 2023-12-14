


import { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai'
import img from "../assets/WhatsApp Image 2023-12-12 at 13.09.37_81b78cc6.jpg"
import { MdOutlineClose } from "react-icons/md";
import { FaDownload, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import img3 from "../assets/programming-background-collage.jpg"
import { FaChevronDown } from "react-icons/fa";

import { Typewriter } from 'react-simple-typewriter'
import AboutMe from './AboutMe';
import Services from './Services';
import Resume from './Resume';
import Skills from './Skills';
import Porfolio from './Porfolio';
import Contact from './Contact';
import Footer from './Footer';

const Navbar = () => {
    const [isActive, setActive] = useState(true)
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <div className='relative min-h-screen md:flex font-Roboto'>
            <div className="text-gray-100 z-30 w-full bg-gray-800 fixed flex justify-between md:hidden">
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <h1>Junayet</h1>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>

                    <Link target={"_blank"} to={'https://www.facebook.com/jsjunayet73?mibextid=ZbWKwL'}>
                        <FaSquareFacebook className='h-5 w-5' />
                    </Link>
                    <Link target={"_blank"} to={'https://github.com/jsjunayet'}><FaSquareGithub className='h-5 w-5' />
                    </Link>
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
                className={`z-50 md:fixed flex flex-col justify-between   overflow-x-hidden bg-gray-900 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
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
                        <a href={'/'}>Home</a>
                        <a href='#aboutme'>About Me</a>
                        <a>What I Do</a>
                        <a>Resume</a>
                        <a>Portfolio</a>
                        <a>Contact</a>
                    </div>
                </div >
                <div>
                    <hr />

                    <button className='flex gap-3 justify-center text-white w-full items-center px-4 py-2 mt-4'>
                        <Link target={"_blank"} to={'https://www.facebook.com/jsjunayet73?mibextid=ZbWKwL'}>
                            <FaSquareFacebook className='text-3xl' />
                        </Link>
                        <Link target={"_blank"} to={'https://github.com/jsjunayet'}><FaSquareGithub className='text-3xl' />
                        </Link>
                        <FaTwitter className='text-3xl' />
                        <FaLinkedin className='text-3xl' />

                    </button>
                </div>
            </div >
            <div className='flex-1  md:ml-64'>
                <div className="hero min-h-screen object-center" style={{ backgroundImage: `url(${img3})` }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg">
                            <h1 className="mb-5 text-4xl font-bold">WELLCOME</h1>

                            <div className='App'>
                                <h1 style={{ paddingTop: '', margin: 'auto 0', fontWeight: 'normal', fontSize: '50px' }}>
                                    I`m a  {' '}
                                    <span style={{ color: 'green', fontWeight: 'bold' }}>
                                        {/* Style will be inherited from the parent element */}
                                        <Typewriter
                                            words={['JUNAYET SHIBLU.', 'DEVELOPER.', 'FRONT-END DESIGNER.', 'STUDENT OF CSE DEPARTMENT.']}
                                            loop={true}
                                            cursor
                                            cursorStyle='|'
                                            typeSpeed={100}
                                            deleteSpeed={100}
                                            delaySpeed={2000}
                                        // onLoopDone={handleDone}
                                        // onType={handleType}
                                        />
                                    </span>
                                </h1>
                            </div>
                            <p className='text-3xl font-semibold my-3'>based in Savar, Dhaka, Bangladesh</p>
                            <button className="btn btn-outline btn-success text-2xl mt-4">Hire me</button>
                            <div className='mt-20'>
                                <FaChevronDown className='text-4xl text-green-600 mx-auto mt-10 focus: mb-5 ' />
                            </div>

                        </div>

                    </div>
                </div>
                <div>
                    <AboutMe></AboutMe>
                </div>
                <div>
                    <Services></Services>
                </div>
                <div>
                    <Resume></Resume>
                </div>
                <div>
                    <Skills></Skills>
                </div>
                <div>
                    <Porfolio></Porfolio>
                </div>
                <div>
                    <Contact></Contact>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        </div >
    );
};

export default Navbar;