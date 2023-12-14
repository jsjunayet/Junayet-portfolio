import html from "../assets/html.png"
import css from "../assets/css.png"
import tailwind from "../assets/nwt9ncojkvwmjfkaada8upafvpnu-removebg-preview.png"
import js from "../assets/JavaScript-logo-removebg-preview.png"
import react from "../assets/react.png"
import Mongodb from "../assets/download-removebg-preview.png"
import Express from "../assets/express.png"
import node from "../assets/node-removebg-preview (1).png"
import github from "../assets/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail-removebg-preview.png"
import { FaDownload } from "react-icons/fa"

const Skills = () => {
    return (
        <div id="skill">
            <section className=' max-w-5xl mx-auto'>
                <div className='my-12'>
                    <h1 className='text-3xl text-center font-bold'>My Skills</h1>
                    <hr className=' bg-green-400 h-1 w-16 mt-2 mx-auto' />
                    <div className='my-10'>

                        <div className='grid grid-cols-2 md:grid-cols-3  gap-2 mx-2'>

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
                                <button className=' btn btn-outline text-xl btn-success'>Download CV <FaDownload></FaDownload></button>
                            </a>


                        </div>


                    </div>

                </div>
            </section>
        </div>
    );
};

export default Skills;