import React from 'react';
import ShareTitle from '../Component/ShareTitle';

const AboutMe = () => {
    return (
        <div>
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
        </div>
    );
};

export default AboutMe;