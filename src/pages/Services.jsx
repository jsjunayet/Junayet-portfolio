
import { FaDesktop, FaPaintBrush, FaPencilRuler } from 'react-icons/fa';
import { PiPaletteFill } from 'react-icons/pi';
import ShareTitle from '../Component/ShareTitle';

const Services = () => {
    return (
        <div>
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
        </div>
    );
};

export default Services;