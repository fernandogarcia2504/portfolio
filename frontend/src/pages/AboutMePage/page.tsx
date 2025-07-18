import React from "react";

import Navbar from "../../components/NavBar";

import about from "../../assets/aboutme.png"
const AboutMePage = () => {
    return(
        <div className="bg-[#2c2c2c] w-full h-svh flex flex-col items-center justify-center pl-5 relative z-0 ">
            <Navbar/>
            <h1 className="font-playfair text-[40px] text-[#FFFF28] font-bold pt-12 text-start">Crafting my voice through creation and innovation.</h1>
            <div className="w-full flex flex-row justify-center items-center">
                <div className="w-1/4">
                    <h1 className="text-[40px] text-white font-semibold pb-4">About Me</h1>
                    <div className="w-full flex flex-col gap-4">
                        <p className="text-[#CECECE] text-sm">
                            I am Fernando Garcia Tejeda, since I was a little kid, I have always been curious about how things work and its purpose.
                            I found in Software Engineering one of my biggest passions, evolving in projects that enhances creativity, colaboration
                            and innovative ways for problem resolution.
                        </p>
                        <p className="text-[#CECECE] text-sm">
                            I love learning new things and technologies, enjoying the path from not knowing anything about it, to becoming profficient
                            in it by practice and constancy.
                        </p>
                        <p className="text-[#CECECE] text-sm">
                            Let’s connect! I’m always open to chat about new projects, security challenges, or the next great idea.
                        </p>
                    </div>
                </div>
                <img src={about} className="w-1/2" alt="" />
            </div>  
        </div>
    )
}

export default AboutMePage;