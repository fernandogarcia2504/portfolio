import React, { useState } from "react";
import { AnimatePresence,motion } from "motion/react"

import Navbar from "../../components/NavBar";
import Pills from "../../components/Pills";
import projectsData from "../../data/projects.json"

import up from "../../assets/up.png"
import down from "../../assets/down.png"
const ProjectsPage = () => {

    const [projects, setProjects] = useState<{ [key: number]: boolean }>({});

    return(
        <div className="bg-[#2c2c2c] w-full  flex flex-col items-center min-h-screen overflow-y-auto relative z-0 pt-28 pl-12 pb-12">
            <Navbar />
            <div className="w-[80%] flex flex-col pb-10">
                <h1 className="text-[#FFFF28] text-[32px] font-semibold">Projects</h1>
                <p className="text-[#CECECE]">These are some projects I have been working with throughout my career</p>
            </div>
            {projectsData.map((project) => (
                <div key={project.id} className="w-[80%] flex flex-col ">
                    <div className="w-full grid grid-cols-[30%_50%_10%_10%] bg-[#d4d4d4]/10 h-14 backdrop-blur-sm px-3 py-2 items-center justify-between last:rounded-b-md first:rounded-t-lg ">
                        <p className="text-white font-bold font-sans pl-4">{project.title}</p>
                        <p className="text-[#CECECE]">{project.subtitle}</p>
                        <p className="text-[#CECECE]">{project.date}</p>
                        <motion.button whileTap={{scale:1.5}} onClick={() => setProjects((prev) => ({ ...prev, [project.id]: !prev[project.id] }))}>{projects[project.id] ? <img src={down}/> : <img src={up} />}</motion.button>
                    </div>
                    <AnimatePresence initial={false} >
                    {projects[project.id] && 
                        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="w-full flex flex-col bg-[#d4d4d4]/10  backdrop-blur-sm items-center gap-6 py-6 border-b border-[#CECECE] roundedb">
                            <div className="w-1/2 flex flex-row justify-between">
                                <Pills title="React JS" />
                                <Pills title="Node JS" />
                                <Pills title="Mongo DB" />
                                <Pills title="Tailwind CSS" />
                            </div>
                            <p className="text-[#CECECE] w-[80%] text-center">{project.description}</p>
                            <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}  href={project.link} target="_blank" className="w-1/3"><img src={project.image } className="w-full" alt="" /></motion.a>
                        </motion.div>
                    }
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}

export default ProjectsPage;