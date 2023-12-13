


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
import ShareTitle from '../Component/ShareTitle';
import { FaPencilRuler } from "react-icons/fa";
import { PiPaletteFill } from "react-icons/pi";
import { FaDesktop } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import html from "../assets/html.png"
import css from "../assets/css.png"
import tailwind from "../assets/nwt9ncojkvwmjfkaada8upafvpnu-removebg-preview.png"
import js from "../assets/JavaScript-logo-removebg-preview.png"
import react from "../assets/react.png"
import Mongodb from "../assets/download-removebg-preview.png"
import Express from "../assets/express.png"
import node from "../assets/node-removebg-preview (1).png"
import github from "../assets/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail-removebg-preview.png"




const Navbar = () => {
    const [isActive, setActive] = useState(true)
    const handleToggle = () => {
        setActive(!isActive)
    }
    // const handleType = (count: number) => {
    //     // access word count number
    //     console.log(count)}
    //   }

    //   const handleDone = () => {
    //     console.log(`Done after 5 loops!`)
    //   }


    return (
        <div className='relative min-h-screen md:flex font-Roboto'>
            <div className="text-gray-100 z-30 w-full bg-gray-800 fixed flex justify-between md:hidden">
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <h1>Junayet</h1>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>

                    <Link to={'https://www.facebook.com/jsjunayet73?mibextid=ZbWKwL'}>
                        <FaSquareFacebook className='h-5 w-5' />
                    </Link>
                    <Link to={'https://github.com/jsjunayet'}><FaSquareGithub className='h-5 w-5' />
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
                        <Link to={'https://www.facebook.com/jsjunayet73?mibextid=ZbWKwL'}>
                            <FaSquareFacebook className='text-3xl' />
                        </Link>
                        <Link to={'https://github.com/jsjunayet'}><FaSquareGithub className='text-3xl' />
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
                            <button className="btn btn-outline btn-accent text-2xl mt-4">Hire me</button>
                            <div className='mt-20'>
                                <FaChevronDown className='text-4xl text-green-600 mx-auto mt-10 focus: mb-5 ' />
                            </div>

                        </div>

                    </div>
                </div>
                <section>
                    <div className='my-12' id='aboutme'>
                        <ShareTitle opactityTitle={"ABOUT ME"} Title={"Know Me More"}></ShareTitle>
                    </div>
                    <div className=' max-w-5xl mx-auto'>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                            <div className=' space-y-3 col-span-3 px-3'>
                                <p className='text-3xl font-semibold'>I`m <span className='text-green-600'>Junayet Shiblu</span>, a Web Developer</p>
                                <p className='text-xl text-[#4C4D4D]'> Passionate MERN stack developer who loves making user-friendly Website . I enjoy working with others to turn tricky ideas into smart solutions. I`m dedicated and a good team player, ready to bring my skills to your projects. Excited about creating cool web stuff together!</p>
                                <p className='text-xl text-[#4C4D4D]'>
                                    Also I am studying computer science and engineering at National Institute of Textile Engineering and Research so my love for coding works differently.
                                </p>
                            </div>
                            <div className=' space-y-4 col-span-2 text-xl px-3'>
                                <p><span className='font-bold text-xl'>Name :</span> Junayet Shiblu</p>
                                <hr />
                                <p><span className='font-bold text-xl'>Email :</span> junayetshiblu0@gmail.com</p>
                                <hr />
                                <p><span className='font-bold text-xl'>Age :</span> 21</p>
                                <hr />
                                <p><span className='font-bold text-xl'>From :</span> Savar, Dhaka, Bangladeshi</p>
                                <hr />
                                <div>
                                    <a href="/public/junayet-shiblu.pdf" download="junayet resume.pdf">
                                        <button className=' btn btn-outline text-xl btn-accent'>Download CV</button>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className='bg-[#F8F9FA]'>
                    <div className=' max-w-5xl mx-auto'>
                        <div className='my-12 pt-5'>
                            <ShareTitle opactityTitle={'SERVICES'} Title={'What I Do?'}></ShareTitle>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                            <div className='flex gap-4 mx-3'>
                                <div className='flex flex-col justify-center items-center h-20 w-40 shadow-xl rounded bg-white'>
                                    <FaPaintBrush className='text-3xl text-green-600' />
                                </div>
                                <div>
                                    <p className='text-4xl mb-3'>Web design</p>
                                    <p className='text-xl'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure</p>
                                </div>
                            </div>
                            <div className='flex gap-4 mx-3'>
                                <div className='flex flex-col justify-center items-center h-20 w-40 shadow-xl rounded bg-white'>
                                    <FaDesktop className='text-3xl text-green-600' />
                                </div>
                                <div>
                                    <p className='text-4xl mb-3'>Web development</p>
                                    <p className='text-xl'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure</p>
                                </div>
                            </div>
                            <div className='flex gap-4 mx-3'>
                                <div className='flex flex-col justify-center items-center h-20 w-40 shadow-lg rounded bg-white'>
                                    <FaPencilRuler className='text-3xl text-green-600' />
                                </div>
                                <div>
                                    <p className='text-4xl mb-3'>PSD To HTML</p>
                                    <p className='text-xl'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure</p>
                                </div>
                            </div>
                            <div className='flex  gap-4 mx-3'>
                                <div className='flex flex-col justify-center items-center h-20 w-40 shadow-xl rounded bg-white'>
                                    <PiPaletteFill className='text-3xl text-green-600' />
                                </div>
                                <div>
                                    <p className='text-4xl mb-3'>Graphic Design</p>
                                    <p className='text-xl'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=' max-w-5xl mx-auto'>
                    <div>
                        <div className='my-12 pt-5'>
                            <ShareTitle opactityTitle={'SUMMARY'} Title={'My Resume'}></ShareTitle>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='px-3'>
                                <p className='text-2xl font-semibold mb-5'>My Education</p>
                                <div className=' space-y-3'>
                                    <div className='border rounded-xl p-4 space-y-3'>
                                        <button className=' bg-green-600 px-2 py-1 rounded-xl text-sm font-medium text-white'>2022 - 2026</button>
                                        <p>B.Sc in Computer Science and enginering.</p>
                                        <p>National Institute of Textile engineering &
                                            Research.
                                        </p>
                                        <p>
                                            Currently I am studying B.Sc in CSE at National Institute of Textile Engineering and Research located at Nayarhat, Savar, Dhaka.
                                        </p>
                                    </div>
                                    <div className='border rounded-xl  p-4 space-y-3'>
                                        <button className=' bg-green-600 px-2 py-1 rounded-xl text-sm font-medium text-white'>2019 - 2021</button>
                                        <p>Higher Secondary School Certificate</p>
                                        <p>
                                            Saydabad Ideal Govt College & University
                                        </p>
                                        <p>
                                            I completed HSC from Saydabad Ideal Govt COllege &
                                            University
                                            located at saydabad, kasba, Brahmanbaria.
                                        </p>
                                    </div>
                                    <div className='border rounded-xl p-4 space-y-3'>
                                        <button className=' bg-green-600 px-2 py-1 rounded-xl text-sm font-medium text-white'>2016 - 2019</button>
                                        <p>Secondary School Certificate</p>
                                        <p>Shikarpur High School
                                        </p>
                                        <p>
                                            I completed SSC from Shikarpur High School
                                            located at Shikarpur, kasba, Brahmanbaria.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='px-3'>
                                <p className='text-2xl font-semibold mb-5'>My Experience</p>
                                <div>
                                    <div className=' space-y-3'>
                                        <div className='border rounded-xl p-4 space-y-3'>
                                            <button className=' bg-green-600 px-2 py-1 rounded-xl text-sm font-medium text-white'>2022 - 2026</button>
                                            <p>B.Sc in Computer Science and enginering.</p>
                                            <p>National Institute of Textile engineering &
                                                Research.
                                            </p>
                                            <p>
                                                Currently I am studying B.Sc in CSE at National Institute of Textile Engineering and Research located at Nayarhat, Savar, Dhaka.
                                            </p>
                                        </div>
                                        <div className='border rounded-xl p-4 space-y-3'>
                                            <button className=' bg-green-600 px-2 py-1 rounded-xl text-sm font-medium text-white'>2022 - 2026</button>
                                            <p>B.Sc in Computer Science and enginering.</p>
                                            <p>National Institute of Textile engineering &
                                                Research.
                                            </p>
                                            <p>
                                                Currently I am studying B.Sc in CSE at National Institute of Textile Engineering and Research.
                                            </p>
                                        </div>
                                        <div className='border rounded-xl p-4 space-y-3'>
                                            <button className=' bg-green-600 px-2 py-1 rounded-xl text-sm font-medium text-white'>2022 - 2026</button>
                                            <p>B.Sc in Computer Science and enginering.</p>
                                            <p>National Institute of Textile engineering &
                                                Research.
                                            </p>
                                            <p>
                                                Currently I am studying B.Sc in CSE at National Institute of Textile Engineering.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=' max-w-5xl mx-auto'>
                    <div className='my-12'>
                        <h1 className='text-3xl text-center font-bold'>My Skills</h1>
                        <hr className=' bg-green-400 h-1 w-16 mt-2 mx-auto' />
                        <div className='my-10'>

                            <div className='grid grid-cols-2 md:grid-cols-3  gap-2'>

                                <div className='flex flex-col items-center justify-center rounded-xl shadow-xl space-y-2  h-64 bg-gray-400'>
                                    <img src={css} alt="" className='w-40 object-cover' />

                                    <progress className="progress progress-primary w-40" value="95" max="100"></progress>
                                    <p className='text-white'>HTML5</p>
                                </div>
                                <div className='flex flex-col items-center justify-center rounded-xl shadow-xl space-y-2 
                                 h-64 bg-gray-400'>
                                    <img src={html} alt="" className='w-40 object-cover' />

                                    <progress className="progress progress-primary w-40" value="90" max="100"></progress>
                                    <p className='text-white'>CSS3</p>
                                </div>
                                <div className='flex flex-col items-center justify-center rounded-xl shadow-xl space-y-2 
                                 h-64 bg-gray-400'>
                                    <img src={tailwind} alt="" className='w-40 object-cover' />

                                    <progress className="progress progress-primary w-32" value="90" max="100"></progress>
                                    <p className='text-white'>Tailwind</p>
                                </div>
                                <div className='flex flex-col items-center justify-center rounded-xl shadow-xl space-y-2 
                                 h-64 bg-gray-400'>
                                    <img src={js} alt="" className='w-40 object-cover' />

                                    <progress className="progress progress-primary w-40" value="90" max="100"></progress>
                                    <p className='text-white'>JavaScript</p>
                                </div>


                                <div className='flex flex-col items-center justify-center rounded-xl shadow-xl space-y-2 
                                 h-64 bg-gray-400'>
                                    <img src={react} alt="" className='w-40 object-cover' />

                                    <progress className="progress progress-primary w-40" value="85" max="100"></progress>
                                    <p className='text-white'>React js</p>
                                </div>
                                <div className='flex flex-col items-center justify-center rounded-xl shadow-xl space-y-2 
                                 h-64 bg-gray-400'>
                                    <img src={node} alt="" className='w-40 object-cover' />

                                    <progress className="progress progress-primary w-40" value="40" max="100"></progress>
                                    <p className='text-white'>Node js</p>
                                </div>
                                <div className='flex flex-col items-center justify-center rounded-xl shadow-xl space-y-2 
                                 h-64 bg-gray-400'>
                                    <img src={Express} alt="" className='w-40  object-cover' />

                                    <progress className="progress progress-primary w-40" value="50" max="100"></progress>
                                    <p className='text-white'>Express js</p>

                                </div>
                                <div className='flex flex-col items-center justify-center rounded-xl shadow-xl space-y-2 
                                 h-64 bg-gray-400'>
                                    <img src={Mongodb} alt="" className='w-40  object-cover' />

                                    <progress className="progress progress-primary w-40" value="60" max="100"></progress>
                                    <p className='text-white'>Mongodb</p>

                                </div>
                                <div className='flex flex-col items-center justify-center rounded-xl shadow-xl space-y-2 
                                 h-64 bg-gray-400'>
                                    <img src={github} alt="" className='w-40  object-cover' />

                                    <progress className="progress progress-primary w-40" value="70" max="100"></progress>
                                    <p className='text-white'>Github</p>

                                </div>
                                <a href="/public/junayet-shiblu.pdf" download="junayet resume.pdf">
                                    <button className=' btn btn-outline text-xl btn-accent'>Download CV <FaDownload></FaDownload></button>
                                </a>


                            </div>


                        </div>

                    </div>
                </section>

            </div>
        </div >
    );
};

export default Navbar;