import React from "react";
import { Button } from "./button";

export default function RightSidebar() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p>Good after noon,Invecio</p>
      </div>
      <div className="flex mt-4 justify-center flex-col items-center">
        <h5 className="font-bold">Flash Sell for you</h5>
        <div className="flex items-end">
          <h1 className="text-primary font-bold">40%</h1>
          <span className="font-[Zodiak-Regular]">%OFF</span>
        </div>
      </div>
      <div>
        <p className="text-[10px] text-center">
          After 2 hour this offer will end ,
          <span className="  cursor-pointer text-primary underline">
            Get Now
          </span>
        </p>
      </div>
      <div className="w-full  h-[257px] ">
        <img
          className="w-full h-full object-cover "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRb3nc-QLhFA6tDRboq9PrNwOJBnAwktg0W953_7MAA&s"
        ></img>
      </div>
      <Button>Add to cart</Button>
    </div>
  );
}
