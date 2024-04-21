import { BadgePercentIcon } from "lucide-react";
import React from "react";
const categories = [
  "All Categories",
  "Cars and Motorcycles",
  "Music and Books",
  "Arts and Crafts",
  "Moms and Babies",
  "Softwares",
  "Home & Garden",
  "Electronics",
  "Kids and Toy",
  "Clothing and Shoes",
  "Beauty and Health",
  "Sports",
  "Jewellery",
];

export default function Category() {
  return (
    <div className="flex flex-col gap-4">
      {categories.map((i) => (
        <div key={i} className=" flex gap-1">
          <BadgePercentIcon></BadgePercentIcon>
          <p className="text-xs hover:underline cursor-pointer hover:font-bold ">
            {i}
          </p>
        </div>
      ))}
    </div>
  );
}
