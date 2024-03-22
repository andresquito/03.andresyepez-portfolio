import React from "react";
import developerHeader from "../assets/andres.png";
import header from "../assets/header.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" h-screen w-screen overflow-hidden">
      <img alt="header" src={header} className="md:hidden w-screen " />
      <div className="md:h-20 min-[700px]:hidden bg-[#2B2B29]"></div>
      <div className="flex flex-col items-center mt-10">
        <img
          alt="developer"
          src={developerHeader}
          className=" h-60 w-60  left-[50%] top-[130px] md:left-[20%] md:static rounded-full"
        />

        <div className="absolute md:text-[40px] xl:left-[-20px] xl:text-[40px]  md:left-[0] md:w-screen p-6  md:static left-[20%] top-[40%] w-[619px] h-[250px] text-black text-[64px] font-normal ">
          <p className="text-[35px] font-bold"> Hi! I am Andrés Yépez a Software Developer</p>
          <Link
            className="absolute cursor-pointer text-[20px]  text-white bg-slate-500 mt-10 p-4 rounded-xl "
            to="Projects"
            smooth="500"
          >
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

// items-center justify-around flex flex-col z-[300] fixed w-screen h-screen
