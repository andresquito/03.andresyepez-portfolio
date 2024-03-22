import React, { useEffect, useState } from "react";
import marketplace from "../assets/marketplace.jpg";
import colors from "../assets/colors.jpg";
import emoji from "../assets/emoji.jpg";


const Projects = () => {
  const projects = [

    {
      description:
        "This application searches and copies emojics.",
      projectsImageSrc: emoji,
      githubLink: "https://github.com/andresquito/02.Emoji-Selection.git",
      deployLink: "https://andresquito.github.io/02.Emoji-Selection/",
    },
    {
      description:
        "This application searches and copies the hexadecimal code of the color of your choice.",
      projectsImageSrc: colors,
      githubLink: "https://github.com/andresquito/01.Color-Selection.git",
      deployLink: "https://andresquito.github.io/01.Color-Selection/",
    },
    {
      description:
        "Marketplace Online UI with  React, Js, Vite, Talwind.",
      projectsImageSrc: marketplace,
      githubLink: "https://github.com/andresquito/04.marketplace-online.git",
      deployLink: "https://andresquito.github.io/04.marketplace-online/",
    },

  ];

  return (
    <div
      name="Projects"
      className="h-screen w-screen flex items-center flex-col "
    >
      <h2 className="font-bold text-[40px]">Projects</h2>
      <div className="   gap-4 mt-10 grid grid-cols-3 md:grid-cols-1 ">
        {projects.map((p) => (
          <div className="relative w-[300px] h-[300px]  border-red-100 border-spacing-1 border p-1 bg-slate-500 rounded-2xl">
            <img className="object-cover " src={p.projectsImageSrc} alt="" />
            <span className="flex flex-col  p-4 absolute  backdrop-blur hover:backdrop-blur-[20px]  inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-black font-bold text-center">{p.description}</p>
              <div className="flex mt-5  font-bold text-blue-700 ">
                <a href={p.githubLink}>Github</a>
                <a className="ml-4" href={p.deployLink}>
                  Deploy
                </a>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;