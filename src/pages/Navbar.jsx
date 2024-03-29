


import { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai'
import img from "../assets/WhatsApp Image 2023-12-12 at 13.09.37_81b78cc6.jpg"
import { MdOutlineClose } from "react-icons/md";
import { FaDownload, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import img3 from "../assets/bg.jpg"
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
            <div>
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
                    className={`z-50 md:fixed flex flex-col justify-between   overflow-x-hidden bg-gray-900 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full '
                        }  md:translate-x-0  transition duration-1000 ease-in-out h-screen fixed`}
                >
                    <div>
                        <div>
                            <div className='w-full hidden md:flex flex-col px-4 py-2  justify-center items-center  mx-auto'>
                                <img src={img} className='h-48 object-cover rounded-full border-2 ' alt="" />
                                <p className='text-xl py-2 text-white font-semibold'>JUNAYET SHIBLU</p>
                            </div>
                        </div >
                        <div className='flex flex-col justify-center text-2xl text-white items-center flex-1 mt-1 space-y-2' >
                            <a href={'/'}>Home</a>
                            <a href='#aboutme'>About Me</a>
                            <a href='#services'>What I Do</a>
                            <a href='#resume'>Resume</a>
                            <a href='#skill'>Skills</a>
                            <a href='#portfolio'>Portfolio</a>
                            <a href='#contact'>Contact</a>
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
            </div>
            <div className='flex-1 md:ml-64'>
                <div className="hero relative bg-cover bg-center md:pt-20 md:pb-16 pt-20 pb-10 w-full" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${img3})` }}>
                    <div className="hero-content text-center text-neutral-content relative z-10">
                        <div className="md:max-w-lg w-full mx-5 md:py-20 flex flex-col items-center">
                            <h1 className="md:mb-5 mb-2 text-4xl font-bold text-white">WELCOME</h1>
                            <div className='App'>
                                <h1 style={{ margin: 'auto 0', fontWeight: 'normal', fontSize: '40px', color: 'white' }}>
                                    I`m a{' '}
                                    <span style={{ color: 'green', fontWeight: 'bold' }}>
                                        <Typewriter
                                            words={['JUNAYET SHIBLU.', 'DEVELOPER.', 'FRONT-END DESIGNER.', 'STUDENT OF CSE DEPARTMENT.']}
                                            loop={true}
                                            cursor
                                            cursorStyle='|'
                                            typeSpeed={100}
                                            deleteSpeed={100}
                                            delaySpeed={2000}
                                        />
                                    </span>
                                </h1>
                            </div>
                            <p className='md:text-3xl text-2xl font-semibold md:my-3 my-2 text-white'>Based in Savar, Dhaka, Bangladesh</p>
                            <button className="btn btn-outline btn-success text-2xl mt-4">Hire me</button>
                            <div className='mt-5'>
                                <FaChevronDown className='text-4xl text-green-600 mx-auto mt-10 focus:mb-5' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:mx-5 md:my-10">
                    <AboutMe></AboutMe>
                    <Services></Services>
                    <Resume></Resume>
                    <Skills></Skills>
                    <Porfolio></Porfolio>
                    <Contact></Contact>
                    <Footer></Footer>
                </div>
            </div>

        </div >
    );
};

export default Navbar;