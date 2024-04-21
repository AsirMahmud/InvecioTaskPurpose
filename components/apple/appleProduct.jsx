import React from "react";
import Header from "../ui/header";
import AppleProductCard from "./appleProductCard";
import SeeMore from "../ui/seeMore";

export default function AppleProduct() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center  justify-between gap-4">
        <div className="flex items-center  gap-2">
          <div>
            <div className="bg-slate-300 w-[56px]  h-[56px] flex justify-center items-center rounded-full ">
              <div className="flex justify-center p-2 ">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Brand Icon"
                  className=" object-contain w-10 h-10 md:w-16 md:h-16 rounded-full"
                />
              </div>
            </div>
          </div>
          <Header header="Apple"></Header>
        </div>
        <SeeMore></SeeMore>
      </div>
      <AppleProductCard></AppleProductCard>
    </div>
  );
}
