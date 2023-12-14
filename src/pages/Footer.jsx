import React from 'react';

const Footer = () => {
    return (
        <div className=' max-w-5xl mx-auto'>
            <div className=' md:flex justify-between my-16 mx-3 text-center'>
                <div>
                    <p>Copyright © 2023 Simone. All Rights Reserved.</p>
                </div>
                <div className='flex gap-3 justify-center md:mt-0 mt-4'>
                    <p className=' border-r-2 pr-3 border-green-600'>Terms & Policy</p>
                    <p>Disclaimer</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;