import React from 'react';

type ProjectCardProps = {
    
};

const ProjectCard:React.FC<ProjectCardProps> = () => {
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            <div className='w-[100%] bg-[#161616] aspect-square rounded-2xl pb-[1.5rem] '>
                {/* Card */}
                <div className='rounded-xl flex justify-between px-4 py-6 text-yellow-400 font-bold text-[1.5rem] '>⌘</div>
                <a href='/' target="_blank" rel="noreferrer">
                    <video autoPlay loop muted poster='/'>
                    <source src='/' type="video/webm" />
                    <source src='/' type="video/mp4" />
                    </video>
                </a>
            </div>
        </div>
    )
}
export default ProjectCard;