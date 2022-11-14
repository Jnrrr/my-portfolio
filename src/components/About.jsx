import React from 'react'

const About = () => {
    return (
        <div name="About" className='w-full h-full pt-[5rem] bg-gradient-to-b from-blue-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#001aff]'>About</p>
                </div>
                <p className='text-xl'>
                    Estou sempre criando!
                    <br/>
                    <br/>
                    Olá! Meu nome é Nilton Sales, tenho 20 anos e sou de São Paulo - SP.
                </p>
                <p className='text-xl'>
                    Em 2020, comecei a fazer cursos online e participei de um técnico para mergulha fundo no mundo da programação. 
                    Desde o meu primeiro projeto, tenho sido viciado em apredner o máximo que posso.
                </p>
            </div>
        </div>
    )
}

export default About