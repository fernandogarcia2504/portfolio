import React from "react";
import { IPills } from "./types";

import mongoLogo from "../../assets/mongo.png";
import reactLogo from "../../assets/react.png";
import nodeLogo from "../../assets/Node.png";
import sqlLogo from "../../assets/SQL.png";
import tailwindLogo from "../../assets/Tailwind.png";

const items = [
  { title: "React JS",     color: "#04d8f9", logo: reactLogo    },
  { title: "Mongo DB",     color: "#00ed64", logo: mongoLogo    },
  { title: "Node JS",      color: "#6cc24a", logo: nodeLogo     },
  { title: "Tailwind CSS", color: "#0098ed", logo: tailwindLogo },
  { title: "MySQL",        color: "#00546B", logo: sqlLogo      },
];

const Pills = ({ title }: IPills) => {
  const current = items.find((i) => i.title === title)!;

  return (
    <div
      style={{ "--hover-color": current.color } as React.CSSProperties}
      className="group relative bg-[#d4d4d4]/10 border border-white backdrop-blur-sm transition-all duration-500 ease-in-out rounded-md w-1/5 py-1.5  hover:w-[30%]"
    >
      <img
        src={current.logo}
        alt={`${title} logo`}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      />

      <p className="text-white text-center transition-colors duration-200 group-hover:text-[var(--hover-color)]">
        {title}
      </p>
    </div>
  );
};

export default Pills;
