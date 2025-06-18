import React from 'react'
import myimage from '../../assets/myimage.jpg';

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
      <h1 className="text-2xl md:text-6xl font-bold flex leading-normal tracking-tight">
        Hi, I'm Shashi Bhushan singh
      </h1>
      <p className="text-sm md:text-2xl tracking-tight">
        Full-stack developer skilled in responsive UI, RESTful APIs, secure backend, optimized performance, modular design,and user-centric solutions.
      </p>
      <a 
      href="https://wa.me/916204769163" 
      target="_blank" 
      rel="noopener noreferrer"
      >
      <button 
       className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
        Contact me
        </button>
        </a>
      </div>
      <div>
        <img className="w-64 h-64 md:w-80 md:h-80 rounded-xl object-cover shadow-lg" src={myimage} alt="" />
      </div>
    </div>
  )
}

export default Home
