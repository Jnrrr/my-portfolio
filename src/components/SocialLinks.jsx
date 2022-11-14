import React from 'react'
import { RiGithubFill, RiTwitterFill, RiLinkedinBoxFill, RiSpotifyFill, RiSteamFill } from 'react-icons/ri';
import { FiInstagram } from 'react-icons/fi';



const SocialLinks = () => {

    const links = [
        {
            id: 1,
            title: 'GitHub',
            icon: <RiGithubFill className='w-full' color='#fff' size={90} />,
            href: 'https://github.com/Jnrrr',
            style: 'shadow-[#fff]',
        },
        {
            id: 2,
            title: 'Twitter',
            icon: <RiTwitterFill className='w-full' color='#00acee' size={90} />,
            href: 'https://twitter.com/Jnrrr_',
            style: 'shadow-[#00acee]',
        },
        {
            id: 3,
            title: 'Instagram',
            icon: <FiInstagram className='w-full' color='#c32aa3' size={90} />,
            href: 'https://www.instagram.com/_jnr2_/',
            style: 'shadow-[#c32aa3]',
        },
        {
            id: 4,
            title: 'Linkedin',
            icon: <RiLinkedinBoxFill className='w-full' color='#0288D1' size={90} />,
            href: 'https://www.linkedin.com/in/nilton-sales/',
            style: 'shadow-[#0288D1]',
        },
        {
            id: 5,
            title: 'Spotify',
            icon: <RiSpotifyFill className='w-full' color='#1ed760' size={90} />,
            href: 'https://open.spotify.com/user/juniorn2717',
            style: 'shadow-[#1ed760]',
        },
        {
            id: 6,
            title: 'Steam',
            icon: <RiSteamFill className='w-full' color='#fff' size={90} />,
            href: 'https://steamcommunity.com/id/271117',
            style: 'shadow-[#fff]',
        },
    ];

    return (
        <div name='social links' className='pt-[10rem] bg-gradient-to-b to-black from-blue-800 text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#001aff]"> Social Links </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0'>
                    {links.map(({ id, title, icon, href, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <a target="_blank" rel="noreferrer" href={href}>{icon}</a>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialLinks