import React from 'react'
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";

const Footer = () => {
  return (
    <div
      id="Contact"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center">
        <div>
          <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
          <h3 className="text-sm md:text-2xl font-normal">Feel free to reach</h3>
        </div>
        <ul className="text-sm md:text-xl">
            <li className="flex gap-1 items-cente">
            <a
            href="https://www.linkedin.com/in/shashi-bhushan-singh-35a509259/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-2"
          >
                 <FaLinkedin size={20}/>
                 LinkedIn 
                 </a>
            </li>
            <li className="flex gap-1 items-cente">
            <a
            href="mailto:shashibhushan3105@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-2"
          >
                <FcGoogle size={20}/>
                Gmail
                </a>
            </li>
            <li className="flex gap-1 items-cente">
            <a
            href="https://github.com/shashiChad"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-2"
            >
               <FaGithub size={20}/>
               GitHub
               </a>
            </li>
        </ul>
        <div className="text-center mt-6 md:mt-0">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Resume</h2>
    <a
    href="https://drive.google.com/file/d/1Vio1H0rqQLyNFIVjt_VT9-kJAZEwQv0j/view?usp=drivesdk"  // make sure this file is in your public folder
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-white text-[#465697] font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition duration-300"
  >
    View Resume
  </a>
        </div>
    </div>
  )
}

export default Footer
