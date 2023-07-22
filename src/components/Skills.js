import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Bootstrap from "../assets/bootstrap.png";
import Mysql from "../assets/mysql.png";
import Express from "../assets/Expressjs.png";
import Material from "../assets/material.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#53c94d] ">
            Technologies I have worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8">
          <div className="shadow-md shadow-[#040c16] bg-[#213552] rounded-xl py-5  hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4 font-bold">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] bg-[#213552] rounded-xl py-5 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4 font-bold">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] bg-[#213552] rounded-xl py-5 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4 font-bold">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] bg-[#213552] rounded-xl py-5 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4 font-bold">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] bg-[#213552] rounded-xl py-5 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4 font-bold">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] bg-[#213552] rounded-xl py-5 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4 font-bold">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] bg-[#213552] rounded-xl py-5 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Express} alt="HTML icon" />
            <p className="my-4 font-bold">EXPRESS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] bg-[#213552] rounded-xl py-5 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4 font-bold">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] bg-[#213552] rounded-xl py-5 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mysql} alt="HTML icon" />
            <p className="my-4 font-bold">MYSQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] bg-[#213552] rounded-xl py-5 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4 font-bold">TAILWIND CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] bg-[#213552] rounded-xl py-5 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Bootstrap} alt="HTML icon" />
            <p className="my-4 font-bold">BOOTSTRAP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] bg-[#213552] rounded-xl py-5 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Material} alt="HTML icon" />
            <p className="my-4 font-bold">MATERIAL UI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
