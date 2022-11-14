import React from 'react'
import profilepic from '../assets/profile-pic.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-blue-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pb-[8rem] sm:pb-[16rem] md:pb-[14rem] lg:pb-0 pt-[15rem] md:pt-[0rem] ">
        <div className="rounded-2xl mx-auto sm:mx-6 w-2/3 md:w-[10] bg-gradient-to-l p-[6px] from-[#001aff]  to-black max-w-[330px]">
          <div>
            <img src={profilepic} alt="my profile" className="rounded-2xl" />
          </div>
        </div>
        <div className="flex flex-col justify-center mx-5">
          <h2 className="text-4xl pt-10 sm:text-5xl md:mt-0 font-bold text-white">
            Hi, I'm <span className="text-[#001aff]">Nilton Sales</span>
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Desenvolvedor Front-end Jr.</h3>
          <ul className="text-white text-xl py-4">
            <li>
              <span className="text-[#001aff]">|</span> Living in Brazil, São Paulo - SP {" "}
              <span className="text-[#001aff]">|</span>
            </li>
            <li>
              <span className="text-[#001aff]">|</span> I am currently working as Freelancer {" "} <span className="text-[#001aff]">|</span>
            </li>
            <li>
              <span className="text-[#001aff]">|</span> Formed in Systems Development <span className="text-[#001aff]">|</span>
            </li>
          </ul>
          <div className="flex justify-center sm:justify-start">
            <Link to="projects" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#001aff] to-black-200 cursor-pointer">
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home