import React from 'react';
import { urlFor } from '../lib/sanityClient';
import { ProjectsProps } from '../types/types';

const ProjectCard = ({ projects }: ProjectsProps) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {projects.map((project) => (
            <div className='w-[100%] bg-[#161616] aspect-square rounded-2xl pb-[1.5rem] '>
                {/* Card */}
                <div className='rounded-xl flex justify-between px-4 py-6 text-yellow-400 font-bold text-[1.5rem] '>⌘</div>
                {/* <a href='/' target="_blank" rel="noreferrer">
                    <video autoPlay loop muted poster='/'>
                    <source src='/' type="video/webm" />
                    <source src='/' type="video/mp4" />
                    </video>
                </a> */}
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                    {project.mainImage && (
                        <img src={urlFor(project.mainImage)} alt="" />
                    )}
                </a>
                <div className='p-[1.5rem]'>
                    <div className='hidden md:flex gap-3 font-bold pb-2'>
                    {project.categoryog.map((cata: any) => (
                    <div className='flex px-1 py-[0.625rem] items-center justify-center transition-all duration-300 ease-in-out font-semibold text-[#22222] text-[0.6rem] md:text-[0.7rem]' >{cata}</div>
                    ))}
                    </div>
                    <h2 className='text-[2.5rem] font-semibold text-yellow-400 md:text-[1.5rem]'>{project.title}</h2>
                    <div className='flex gap-6'>
                    <a className='text-[1.5rem] font-semibold border-solid border-b-2 border-b-yellow-400 transition-all ease-in duration-300 md:text-[1.3rem] hover:text-yellow-500 ' href={project.codeLink} target="_blank" rel="noreferrer">
                        Code
                    </a>
                    <a
                    className='text-[1.5rem] font-semibold border-solid border-b-2 border-b-yellow-400 transition-all ease-in duration-300 md:text-[1.3rem] hover:text-yellow-500 ' 
                    href={project.liveLink} target="_blank" rel="noreferrer">
                        Demo
                    </a>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}
export default ProjectCard;