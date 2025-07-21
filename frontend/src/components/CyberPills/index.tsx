import React from "react";
import { ICyberPills } from "./types";
import {motion} from "motion/react"

const items = [
    {title:"NMAP", color:"#2A0D45"},
    {title:"Metasploit", color:"#4d3710"},
    {title:"Burpsuite", color:"#ff6633"},
    {title:"Wireshark", color:"#c0ffff"},
    {title:"Nessus", color:"#01A3B3"},
    {title:"Splunk", color:"#F16122"},
    {title:"Kali Linux", color:"#23BAC2"},
    {title:"GoBuster", color:"#4AF626"},
    {title:"OWASP Zap", color:"#4FCE5D"},
]
const CyberPills = ({title}: ICyberPills ) => {
    const current = items.find((i) => i.title === title)!;

    return(
        <motion.div
            whileHover={{scale: 1.1}}
            style={{ "--hover-color": current.color } as React.CSSProperties}
            className="relative bg-[#d4d4d4]/10 border border-white backdrop-blur-sm rounded-md w-[15%] py-1.5 transition-all hover:font-semibold duration-300 ease-in-out hover:bg-[var(--hover-color)] hover:border-none"
        >
            <p className="text-white text-center transition-colors duration-200 group-hover:text-[var(--hover-color)]">
            {title}
            </p>
        </motion.div>
    )
}

export default CyberPills;