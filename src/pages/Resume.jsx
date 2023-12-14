import React from 'react';
import ShareTitle from '../Component/ShareTitle';

const Resume = () => {
    return (
        <div id='resume'>
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
        </div>
    );
};

export default Resume;