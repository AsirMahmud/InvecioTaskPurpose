import { ArrowRight } from "lucide-react";
import React from "react";

export default function SeeMore() {
  return (
    <div className="flex gap-2 cursor-pointer underline items-center  hover:font-bold ">
      <p>See More Items</p>
      <ArrowRight className=""></ArrowRight>
    </div>
  );
}
