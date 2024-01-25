import React, { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link as ScrollLink } from 'react-scroll';

import html from '../assets/html.png';
import css from '../assets/css.png';
import tailwind from '../assets/nwt9ncojkvwmjfkaada8upafvpnu-removebg-preview.png';
import js from '../assets/JavaScript-logo-removebg-preview.png';
import react from '../assets/react.png';
import Mongodb from '../assets/download-removebg-preview.png';
import Express from '../assets/express.png';
import node from '../assets/node-removebg-preview (1).png';
import github from '../assets/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail-removebg-preview.png';
import nextjs from "../assets/Next_JS-500x500-removebg-preview.png";
import c from '../assets/715b59c8c7545d9dafb1a04111edde40-removebg-preview.png';
import firebase from "../assets/png-transparent-firebase-hd-logo-thumbnail-removebg-preview.png";

const Skills = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        AOS.init();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    return (
        <div id="skill" className={`bg-gray-100 py-16 ${isScrolled ? 'scrolled' : ''}`}>
            <section className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl text-center font-bold mb-4">My Skills</h1>
                    <hr className="bg-green-400 h-1 w-16 mt-2 mx-auto" />
                    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-2">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={(index % 4) * 100}
                                className="flex flex-col items-center justify-center rounded-xl shadow-xl p-6 bg-white transition-transform transform hover:scale-105"
                            >
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="md:w-20 md:h-20 w-40 h-40 object-cover rounded-full mb-4"
                                />
                                <progress
                                    className="progress progress-primary md:w-20 w-40"
                                    value={skill.value}
                                    max="100"
                                ></progress>
                                <p className="text-gray-500">{skill.value}%</p>
                                <p className="text-gray-800 text-lg font-semibold mb-2">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-6">
                        <a href="/public/junayet-shiblu.pdf" download="junayet_resume.pdf">
                            <button className="btn btn-outline text-xl btn-success">
                                Download CV <FaDownload className="ml-2" />
                            </button>
                        </a>
                    </div>
                </div>
                <ScrollLink
                    to="aboutme"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`scroll-down ${isScrolled ? 'visible' : ''}`}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </ScrollLink>
            </section>
        </div>
    );
};

const skills = [
    { name: 'HTML5', value: 95, image: html },
    { name: 'CSS3', value: 90, image: css },
    { name: 'Tailwind', value: 90, image: tailwind },
    { name: 'JavaScript', value: 90, image: js },
    { name: 'React.js', value: 85, image: react },
    { name: 'Node.js', value: 40, image: node },
    { name: 'Express.js', value: 50, image: Express },
    { name: 'MongoDB', value: 60, image: Mongodb },
    { name: 'GitHub', value: 70, image: github },
    { name: 'C Program', value: 90, image: c },
    { name: 'Firebase', value: 90, image: firebase },
    { name: 'Nextjs', value: 50, image: nextjs },
];

export default Skills;
