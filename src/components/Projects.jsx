import React from 'react'
import soon from '../assets/portfolio/soon.png'

const Projects = () => {
    const projects = [
        {
            id: 1,
            src: soon,
            demo: '#',
            code: '#',
        },
        {
            id: 2,
            src: soon,
            demo: '#',
            code: '#',
        },
        {
            id: 3,
            src: soon,
            demo: '#',
            code: '#',
        },
        {
            id: 4,
            src: soon,
            demo: '#',
            code: '#',
        },
        {
            id: 5,
            src: soon,
            demo: '#',
            code: '#',
        },
        {
            id: 6,
            src: soon,
            demo: '#',
            code: '#',
        },
    ]

    return (
        <div name="projects" className='pt-[10rem] bg-gradient-to-b from-black to-blue-800 w-full text-white md:h-screen'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#001aff]'>Projects</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-12 sm:px-0 '>
                    {projects.map(({ id, src, demo, code }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt='' className='rounded-t-lg duration-200 hover:scale-110' />
                            <div className='flex items-center justify-center'>
                                <a href={demo} class="w-4/2 m-4 relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                    <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-400 group-hover:opacity-100"></span>
                                    <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                    <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                    <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                    <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                    <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                    <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                    <span class="relative">Demo</span>
                                </a>
                                <a href={code} class="w-4/2 m-4 relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                    <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-400 group-hover:opacity-100"></span>
                                    <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                    <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                    <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                    <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                    <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                    <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                    <span class="relative">Code</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects