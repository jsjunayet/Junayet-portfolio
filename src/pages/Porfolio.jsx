// Import statements
import React from 'react';
import { Link } from 'react-router-dom';
import ShareTitle from '../Component/ShareTitle';
import img from '../assets/Screenshot 2023-12-13 224916.png';
import img1 from '../assets/Screenshot 2023-12-13 225008.png';
import img2 from '../assets/Screenshot 2023-12-13 225129.png';
import img3 from '../assets/Screenshot 2023-12-13 225222.png';
import img4 from '../assets/Screenshot 2023-12-13 225252.png';
import img5 from '../assets/Screenshot 2023-12-13 225323.png';
import img6 from '../assets/Screenshot 2023-12-13 225359.png';
import img7 from '../assets/Screenshot 2023-12-13 232440.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const portfolioItems = [
    {
        image: img,
        link: 'https://splendid-stardust-cf0114.netlify.app/',
        alt: 'Project 1',
    },
    {
        image: img1,
        link: 'https://adorable-horse-3c6729.netlify.app/',
        alt: 'Project 2',
    },
    {
        image: img2,
        link: 'https://inspiring-churros-226b0a.netlify.app/',
        alt: 'Project 3',
    },
    {
        image: img3,
        link: 'https://inspiring-churros-226b0a.netlify.app/',
        alt: 'Project 4',
    },
    {
        image: img4,
        link: 'https://incomparable-paprenjak-92812e.netlify.app/',
        alt: 'Project 5',
    },
    {
        image: img5,
        link: 'https://incomparable-paprenjak-92812e.netlify.app/',
        alt: 'Project 6',
    },
    {
        image: img6,
        link: 'https://beautiful-griffin-33a882.netlify.app/',
        alt: 'Project 7',
    },
    {
        image: img7,
        link: 'https://beautiful-griffin-33a882.netlify.app/',
        alt: 'Project 8',
    },
];

const Portfolio = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <section id='portfolio'>
            <div>
                <ShareTitle opacityTitle={'PORTFOLIO'} Title={'My Work'} />
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
                    {portfolioItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.link}
                            target='_blank'
                            className='block relative rounded overflow-hidden'
                            data-aos='fade-up'
                            data-aos-delay={`${index * 100}`}
                        >
                            <img
                                src={item.image}
                                className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-105'
                                alt={item.alt}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
