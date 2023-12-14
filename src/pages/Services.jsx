
import { FaDesktop, FaPaintBrush, FaPencilRuler } from 'react-icons/fa';
import { PiPaletteFill } from 'react-icons/pi';
import ShareTitle from '../Component/ShareTitle';

const Services = () => {
    return (
        <div id='services'>
            <section className='bg-[#F8F9FA]'>
                <div className=' max-w-5xl mx-auto'>
                    <div className='my-12 pt-5'>
                        <ShareTitle opactityTitle={'SERVICES'} Title={'What I Do?'}></ShareTitle>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                        <div className='flex gap-4 mx-3'>
                            <div className='flex flex-col justify-center items-center h-20 w-24 p-1 shadow-xl rounded bg-white '>
                                <FaPaintBrush className='text-3xl text-green-600' />
                            </div>
                            <div>
                                <p className='text-4xl mb-3'>Web design</p>
                                <p className='text-xl'>I am doing web designing and can create very nice and aesthetically designed webpages with React and I have good ideas about web designing.</p>
                            </div>
                        </div>
                        <div className='flex gap-4 mx-3 '>
                            <div className='flex flex-col p-1 justify-center items-center h-20  shadow-xl rounded bg-white'>
                                <FaDesktop className='text-3xl text-green-600' />
                            </div>
                            <div className=''>
                                <p className='text-4xl mb-3 '>Web development</p>
                                <p className='text-xl'>With proficiency in full-stack development, I specialize in creating dynamic e-commerce, hotel booking, and e-ticketing websites etc. Leveraging Node.js, Express.js, and MongoDB, I deliver seamless, professional solutions that meet diverse business requirements.</p>
                            </div>
                        </div>
                        <div className='flex gap-4 mx-3'>
                            <div className='flex p-1 flex-col justify-center items-center h-20 w-40 shadow-lg rounded bg-white'>
                                <FaPencilRuler className='text-3xl text-green-600' />
                            </div>
                            <div>
                                <p className='text-4xl mb-3'>PSD To HTML</p>
                                <p className='text-xl'>I specialize in converting PSD or Figma designs to pixel-perfect HTML, ensuring meticulous attention to detail. With a background in these tasks, I bring a wealth of experience in translating design concepts into fully functional and visually stunning web interfaces.</p>
                            </div>
                        </div>
                        <div className='flex  gap-4 mx-3'>
                            <div className='flex flex-col p-1 justify-center items-center h-20 w-40 shadow-xl rounded bg-white'>
                                <PiPaletteFill className='text-3xl text-green-600' />
                            </div>
                            <div>
                                <p className='text-4xl mb-3'>Graphic Design</p>
                                <p className='text-xl'>Beyond development, I bring a strong foundation in graphic design, having proficiently utilized tools like Photoshop and Adobe Illustrator. This dual expertise allows me to seamlessly merge functionality with visually appealing design, ensuring a holistic approach to creating engaging digital experiences</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;