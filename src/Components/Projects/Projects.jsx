import React from 'react'
import Projectcard from './Projectcard'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
       <Projectcard 
          title="Paste saver app"
          main="Developed a Paste Saver web app using React, allowing users to store, edit, and retrieve code snippets or text notes. Integrated local storage for persistence and a clean, responsive UI for better usability."
          link="https://github.com/shashiChad/paste-app"
       />
       <Projectcard
       title="todo-app"
       main="Built a dynamic To-Do app using React, allowing users to add, edit, delete, and mark tasks as complete. Utilized useState and useEffect for state management and data persistence via local storage."
       link="https://github.com/shashiChad/todo-ggt"
       />
       <Projectcard
       title="Health-table"
       main="Built a Health Table app using React to manage and display user health metrics like BMI, heart rate, and calories. Implemented dynamic tables, filtering, and responsive design for better user experience."
       link="https://github.com/shashiChad/health-table"       
       />
       <Projectcard
       title="Airbnb"
       main="Work in progress"
       link="https://github.com/shashiChad/wanderlust-node"
       />
      </div>
    </div>
  )
}

export default Projects
