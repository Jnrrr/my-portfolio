import React from 'react';

import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import javascript from '../assets/skills/javascript.png'
import reactImage from '../assets/skills/react.png'
import tailwind from '../assets/skills/tailwind.png'
import bootstrap from '../assets/skills/bootstrap.png'
import node from '../assets/skills/node.png'
import csharp from '../assets/skills/csharp.png'
import c from '../assets/skills/c.png'
import sass from '../assets/skills/sass.png'
import figma from '../assets/skills/figma.png'
import github from '../assets/skills/github.png'

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-[#f06428]',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-[#039be5]',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-[#ffd600]',
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-[#00d8ff]',
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-[#44a8b3]',
    },
    {
      id: 6,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-[#553a7d]',
    },
    {
      id: 7,
      src: node,
      title: 'Node',
      style: 'shadow-[#8cc84b]',
    },
    {
      id: 8,
      src: csharp,
      title: 'C#',
      style: 'shadow-[#39008f]',
    },
    {
      id: 9,
      src: c,
      title: 'C++',
      style: 'shadow-[#007fcc]',
    },
    {
      id: 10,
      src: sass,
      title: 'Sass',
      style: 'shadow-[#be608b]',
    },
    {
      id: 11,
      src: figma,
      title: 'Figma',
      style: 'shadow-[#fff]',
    },
    {
      id: 12,
      src: github,
      title: 'GitHub',
      style: 'shadow-[#fff]',
    },
  ];

  return (
    <div name='experience' className='pt-[10rem] bg-gradient-to-b from-blue-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#001aff]"> Experience </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt='' className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;