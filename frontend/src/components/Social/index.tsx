import React from "react";

import { ISocial } from "./types";

const Social = ({imageUrl, href, hoverHref}: ISocial) => {
    return(
        <div className="bg-[#d4d4d4]/10  border border-white backdrop-blur-sm rounded-md w-[22%] py-1.5 flex items-center justify-center">
            <a href={href} target="_blank"><img src={imageUrl} onMouseEnter={e => (e.currentTarget.src = hoverHref)} onMouseLeave={e => (e.currentTarget.src = imageUrl)}  alt="" /></a>
        </div>
    )
}

export default Social;