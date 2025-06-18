import React from 'react'
import {FaReact,FaHtml5,FaCss3,FaNodeJs} from "react-icons/fa";
import {SiJavascript,SiExpress,SiMongodb} from "react-icons/si";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
        <div className="flex flex-wrap items-center justify-around">
            <div className="flex flex-wrap md:w-2/4 gap-8 md:p-12 py-10">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                 <FaHtml5 color="#E34F26" size={50}/>
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                 <FaCss3 color="#264DE4" size={50}/>
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                 <SiJavascript color="	#F7DF1E" size={50}/>
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                 <FaReact color="#61DBFB" size={50}/>
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                 <FaNodeJs color="#68A063" size={50}/>
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                 <SiExpress color="#303030" size={50}/>
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                 <SiMongodb color="#4DB33D" size={50}/>
            </span>
            </div>
            <div>
                <div className="flex gap-10 bg-slate-950  bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                    <span className="text-white">
                        <h2 className="leading-tight">
                           Frontend developer Intern, Good game theory
                        </h2>
                        <p className="text-sm leading-tight font-thin">
                              Nov,2024 - Jan,2025
                        </p>
                        <ul className="text-sm p-2">
                             <li>-Work as react intern</li>
                             <li>-Web developer</li>
                        </ul>
                        <a 
                         href="https://drive.google.com/file/d/1cY1cWkf2xP1PJ637ZGAIACbDXdLkfgS9/view?usp=drivesdk" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="text-blue-400 underline text-sm hover:text-blue-300"
                        >
                               View Certificate
                           </a>
                    </span>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Experience
