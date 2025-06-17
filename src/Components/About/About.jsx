import React from 'react'
import myimage from "../../assets/myimage.jpg";
import {IoArrowForward} from "react-icons/io5";

const About = () => {
  return (
    <div 
    id="About"
    className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
     <div>
      <h2 className="text-2xl md:text-4xl font-bold">About</h2>
      <div className="md:flex flex-wrap flex-col md:flex-row items-center">
        <img className="w-48 h-48 rounded-full object-cover shadow-md" src={myimage} alt="myimage" />
        <ul>
          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1"/>

            <span className="w-96">
               <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Frontend Developer
               </h1>
               <p className="text-sm md:text-md leading-tight">
                  Creative and detail-oriented frontend developer skilled in building responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React. Passionate about clean design and seamless user experiences.
               </p>
            </span>
          </div>
          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1"/>

            <span className="w-96">
               <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Backend Developer
               </h1>
               <p className="text-sm md:text-md leading-tight">
                     Backend developer with expertise in Node.js, Express, and MongoDB. Skilled in building secure, scalable APIs and databases to support high-performance, reliable web applications.               </p>
            </span>
          </div>
        </ul>
      </div>
      </div> 
    </div>
  )
}

export default About
