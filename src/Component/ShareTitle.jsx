import React from 'react';

const ShareTitle = ({ opactityTitle, Title }) => {
    return (
        <div className='flex-row relative text-center'>
            <h2 className='md:text-8xl text-6xl font-bold opacity-10 md:tracking-[20px] tracking-[9px]   text-light mb-0 mx-auto'>{opactityTitle}</h2>
            <div className=' absolute md:left-96 left-20 md:bottom-2 -bottom-1 '>
                <p className='md:text-5xl text-4xl font-semibold text-center mt-10'>{Title}</p>
                <hr className=' bg-green-400 h-1 w-20 mt-2 mx-auto' />
            </div>
        </div>
    );
};

export default ShareTitle;