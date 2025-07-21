import React, { useState} from "react";
import { AnimatePresence,motion } from "motion/react"

import projectsData from "../../data/cybersecurity.json"
import CyberPills from "../../components/CyberPills";
import Navbar from "../../components/NavBar";

import up from "../../assets/up.png"
import down from "../../assets/down.png"
const CybersecurityPage = () => {

    const [projects, setProjects] = useState<{ [key: number]: boolean }>({});
    
    return(
        <div className="bg-[#2c2c2c] w-full  flex flex-col items-center min-h-screen overflow-y-auto relative z-0 pt-28 pl-12 pb-12">
            <Navbar />
            <div className="w-[80%] flex flex-col pb-10">
                <h1 className="text-[#FFFF28] text-[32px] font-semibold">Tools</h1>
                <p className="text-[#CECECE]">These are some tools I use for penetration testing and general purposes.</p>
            </div>
            <div className="flex flex-col w-[80%]">
                <div className="flex flex-row w-full justify-between">
                    <CyberPills title="NMAP" />
                    <CyberPills title="Metasploit" />
                    <CyberPills title="Burpsuite" />
                    <CyberPills title="Wireshark" />
                    <CyberPills title="Nessus" />
                </div>
                <div className="flex flex-row w-full justify-between pt-4">
                    <CyberPills title="Splunk" />
                    <CyberPills title="Kali Linux" />
                    <CyberPills title="GoBuster" />
                    <CyberPills title="OWASP Zap" />
                </div>
            </div>
            <div className="w-[80%] flex flex-col pb-10 pt-4">
                <h1 className="text-[#FFFF28] text-[32px] font-semibold">Projects</h1>
                <p className="text-[#CECECE]">These are some tools I use for penetration testing and general purposes.</p>
            </div>
            {projectsData.projects.map((project) => (
                <div key={project.id} className="w-[80%] flex flex-col ">
                    <div className="w-full grid grid-cols-[30%_50%_10%_10%] bg-[#d4d4d4]/10 h-14 backdrop-blur-sm px-3 py-2 items-center justify-between last:rounded-b-md first:rounded-t-lg  ">
                        <p className="text-white font-bold font-sans pl-4">{project.title}</p>
                        <p className="text-[#CECECE]">{project.subtitle}</p>
                        <p className="text-[#CECECE]">{project.date}</p>
                        <motion.button whileTap={{scale:1.5}} onClick={() => setProjects((prev) => ({ ...prev, [project.id]: !prev[project.id] }))}>{projects[project.id] ? <img src={down}/> : <img src={up} />}</motion.button>
                    </div>
                    <AnimatePresence initial={false} >
                    {projects[project.id] && 
                        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="w-full flex flex-col bg-[#d4d4d4]/10  backdrop-blur-sm items-center gap-6 py-6 border-b border-[#CECECE] roundedb">
                            <p className="text-[#CECECE] w-[80%] text-center">{project.description}</p>
                            <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}  href={project.link} target="_blank" className="w-1/3"><img src={project.image } className="w-full" alt="" /></motion.a>
                        </motion.div>
                    }
                    </AnimatePresence>
                </div>
            ))}

            <div className="w-[80%] flex flex-col pb-10 pt-4">
                <h1 className="text-[#FFFF28] text-[32px] font-semibold">Certifications</h1>
                <p className="text-[#CECECE]">These are some tools I use for penetration testing and general purposes.</p>
            </div>
            {projectsData.certifications.map((project) => (
                <div key={project.id} className="w-[80%] flex flex-col ">
                    <div className="w-full grid grid-cols-[80%_20%] bg-[#d4d4d4]/10 h-14 backdrop-blur-sm px-3 py-2 items-center justify-between last:rounded-b-md first:rounded-t-lg ">
                        <p className="text-white font-bold font-sans pl-4">{project.title}</p>
                        <p className="text-[#CECECE]">{project.date}</p>
                    </div>
                </div>
            ))}
        </div>
    
    )
}

export default CybersecurityPage;