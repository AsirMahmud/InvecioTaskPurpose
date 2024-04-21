import React from "react";

export default function BrandCard2({ icon, brandName }) {
  return (
    <div className="flex  justify-center">
      <div className=" w-[171px] h-[160px] justify-center items-center gap-2 flex flex-col bg-slate-100 ">
        <div className="flex  flex-col justify-center items-center bg-slate-100 p-0 md:p-2 gap-2 w-[120px] h-[117px]w-[120px] h-[117px] ">
          <div className=" flex justify-center items-center rounded-full w-10 h-10 md:w-16 md:h-16">
            <div className="w-10 h-10 md:w-16 md:h-16">
              <img
                src={icon}
                alt="Brand Icon"
                className="object-contain w-10 h-10 md:w-16 md:h-16 rounded-full"
              />
            </div>
          </div>
        </div>
        <p className="text-center ">{brandName}</p>
      </div>
    </div>
  );
}
