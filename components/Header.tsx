import React from 'react';

type HeaderProps = {
    
};

const Header:React.FC<HeaderProps> = () => {
    
    return (
        <div className='pb-[2rem] flex justify-between'>
            <div>
                <h1 className='font-semibold text-2xl md:text-4xl lg:text-6xl'>
                WELCOME TO <span className='bg-yellow-400 text-[#101010] p-4 font-bold transition-all ease-in-out hover:bg-[#39ff14]'>FRONTEND ARCHIVE</span>
                {` `}
                </h1>
                <p className='text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] lg:pt-[0.5rem] font-light mt-4'>
                    <a className='font-bold border-b-2 border-b-yellow-400 border-solid	' href="/" target="_blank">{`DEVANSH'S`}</a>
                    {` `}
                    CATALOGUE OF PROJECTS, CHALLENGES & EXPERIMENTS
                </p>
            </div>
            <div className='bg-[#161616] flex-col p-[1rem] w-[12.5rem] items-center justify-center font-bold rounded-2xl aspect-square hidden md:flex'>
                <p className='text-[5rem] leading-none	text-white'>2</p>
                <p className='text-2xl text-white'>PROJECTS</p>
            </div>
        </div>
    )
}
export default Header;