import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { data } from "../data/data.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiFillGithub } from 'react-icons/ai';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const Work = () => {
  const project = data;
  const [showIntro, setShowIntro] = useState(-1);

  const handleMouseEnter = (index) => {
    setShowIntro(index);
  };

  const handleMouseLeave = () => {
    setShowIntro(-1);
  };

  return (
    <div
      id="work"
      className="w-full md:h-screen bg-[#0a192f] md:mt-8 text-gray-300"
    >
      <div className="max-w-[1200px] mx-auto p-4 h-full flex flex-col justify-center">
        <div className="py-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#53c94d]">
            Projects that I've worked on
          </p>
        </div>

        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          stopOnHover={true}
        >
          {project.map((item, index) => (
            <div
              key={index}
              className="container pb-12 mx-auto flex justify-center items-center relative content-div shadow-lg rounded-md group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`intro${showIntro === index ? " visible" : " "}`}>
                <div className="absolute top-0 w-full h-[352px] rounded-[11px] bg-black opacity-80 flex items-center justify-center">
                  <div className="text-white text-center mx-4">
                    {item.intro}
                  </div>
                </div>
              </div>
              <div className="opacity-100">
                <div className="h-80 md:h-96 pb-8">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full  rounded-xl h-full"
                  />
                </div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <button className=" m-2 ">
                       <AiFillGithub className="h-12 w-12 text-white"/>
                    </button>
                  </a>
                  <a href={item.live} target="_blank" rel="noreferrer">
                    <button className="m-2 ">
                       <BsFillPlayCircleFill className="h-12 w-12 text-white"/>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Work;
