import React from "react";

import Pills from "../../components/Pills";
import Social from "../../components/Social";
import Navbar from "../../components/NavBar";

import LinkedinWhite from "../../assets/LinkedinWhite.png"
import LinkedinHover from "../../assets/LinkedinHover.png"

import GithubWhite from "../../assets/GithubWhite.png"
import GithubHover from "../../assets/GithubHover.png"

import PortfolioWhite from "../../assets/Portfolio.png"

import Gradient from "../../assets/gradient.png"
const HomePage = () => {
    return(
        <div className="bg-[#2c2c2c] w-full h-svh flex flex-col items-center justify-center relative z-0">
            <Navbar />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 -z-10">
                <img src={Gradient} alt="background gradient" className="w-full h-full object-cover"/>           
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center gap-10">
                <div className="w-[40%] flex flex-row justify-between">
                    <Pills title="React JS" />
                    <Pills title="Node JS" />
                    <Pills title="Tailwind CSS" />
                    <Pills title="Mongo DB" />
                </div>
                <div>
                    <h1 className="text-[64px] font-sans font-semibold text-white">Fernando Garcia Tejeda</h1>
                </div>
                <div>
                    <p className="text-[48px] font-playfair text-white text-center ">Full-Stack Engineer</p>
                    <p className="text-[48px] font-playfair text-white text-center">Cybersecurity</p>
                </div>
            </div>
            <div className="w-[20%] flex flex-row justify-between mb-3">
                <Social hoverHref={LinkedinHover} href="https://www.linkedin.com/in/fernando-garcia-tejeda/" imageUrl={LinkedinWhite} />
                <Social hoverHref={GithubHover} href="https://github.com/fernandogarcia2504" imageUrl={GithubWhite} />
                <Social hoverHref={PortfolioWhite} href="https://www.linkedin.com/in/fernando-garcia-tejeda/" imageUrl={PortfolioWhite} />
            </div>
        </div>
    )
}

export default HomePage