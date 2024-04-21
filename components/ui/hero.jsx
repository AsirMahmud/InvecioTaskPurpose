import React from "react";
import Category from "./category";
import HeroSlider from "./heroSlider";
import IconSlider from "./iconSlider";
import RightSidebar from "./rightSidebar";

export default function Hero() {
  return (
    <div className=" flex md:h-[600px] border bg-white  gap-2">
      <div className="w-[20%] border h-full hidden lg:block p-4">
        <Category></Category>
      </div>
      <div className="md:w-[700px]   flex flex-col gap-8 justify-center pt-4 ">
        <div className="w-full md:h-[426px]   flex justify-center">
          <HeroSlider></HeroSlider>
        </div>
        <div className="w-full p-2   flex justify-center items-center h-full">
          <IconSlider></IconSlider>
        </div>
      </div>
      <div className="w-[30%] h-full border hidden   p-6 lg:flex flex-col">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}
