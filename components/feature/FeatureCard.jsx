import { CheckCircleIcon } from "lucide-react";
import React from "react";

export default function FeatureCard({ header, description }) {
  return (
    <div className="md:w-[302px] w-full flex gap-4 items-center h-[61px] bg-slate-100  py-2 px-4  ">
      <div>
        {" "}
        <CheckCircleIcon className=" w-6 h-6 rounded-full  bg-yellow-500 text-white "></CheckCircleIcon>
      </div>
      <div className="flex flex-col ">
        <p className="font-bold text-xs">{header}</p>
        <p className="text-interface-3 text-xs">{description}</p>
      </div>
    </div>
  );
}
