import React from 'react'

const Projectcard = ({title,main,link}) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
        </h3>
        <p className="px-4 text-sm md:text-md leading-tight py-2">
            {main}
        </p>
        <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
            <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="mt-6 md:mt-10 bg-[#465697] text-white font-semibold text-sm md:text-lg px-4 py-2 md:px-6 md:py-3 rounded-3xl shadow-md hover:shadow-lg hover:scale-105 hover:opacity-90 transition duration-300">
                 Source Code 
            </button>
            </a>
        </div>
    </div>
  )
}

export default Projectcard
