import { LineChart, ScanEye, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

export default function DealCard1() {
  return (
    <div className="w-full flex lg:flex-row flex-col  md:h-[353px] bg-white gap-4 p-6 ">
      <div className="w-full h-full ">
        <img
          className="w-full h-full object-cover"
          src="https://img.freepik.com/free-vector/elegant-hand-painted-alcohol-ink-background_1048-18800.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais"
        ></img>
      </div>
      <div className="w-full h-full flex flex-col gap-2">
        <div>
          <p className="font-bold text-sm">
            Wireless Bluetooth Headset Single Ear Earplugs Ultra...
          </p>
        </div>
        <div className="flex gap-2 ">
          <div className="flex justify-center text-xl text-yellow-400">
            ★★★★★
          </div>
          <div>4.5</div>
          <div>
            <p className="text-center text-interface-3">(173)</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-bold font-[Zodiak-Regular] text-4xl">
            <span className="text-sm"> $</span>8
          </span>{" "}
          <del className=" text-interface-3">$16</del>
          <span className="text-interface-3">-50%</span>
        </div>
        <div>
          <p className="text-xs text-interface-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ullam
            iure neque corporis harum exercitationem odio. Earum quam debitis
            reprehenderit.
          </p>
        </div>
        <div className="bg-slate-100  h-[40px] w-full flex justify-between px-2 items-center gap-2 text-interface-3 ">
          <div className=" flex items-center  cursor-pointer">
            <ScanEye></ScanEye>
            <p>Preview</p>
          </div>
          <div className=" flex items-center cursor-pointer">
            <LineChart></LineChart>
            <p>Compare</p>
          </div>
        </div>
        <Button className="flex items-center cursor-pointer">
          <ShoppingCart></ShoppingCart>
          <p className="font-bold ">Add to cart</p>
        </Button>
      </div>
    </div>
  );
}
