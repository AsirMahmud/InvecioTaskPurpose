import { Star, StarOff } from "lucide-react";

export default function Card({ imageUrl, categoryName }) {
  return (
    <div className="w-[236px] h-[353px] gap- border">
      <div className="mb-2 ">
        <img
          src={imageUrl}
          alt="Your Image"
          className="w-full h-[204px] object-cover "
        />
      </div>
      <div className="w-full flex justify-center items-center pb-4">
        <p className="text-lg">
          {categoryName.length <= 20
            ? categoryName
            : `${categoryName.slice(0, 20)}....`}
        </p>
      </div>
      <div className="flex justify-center text-xl text-yellow-400">★★★★★</div>
      <div>
        <p className="text-center text-interface-3">(173 reviews)</p>
      </div>
      <div className="flex justify-center">
        <div className="flex gap-2 ">
          <span className="font-bold">$8</span>{" "}
          <del className=" text-interface-3">$16</del>
          <span className="text-interface-3">-50%</span>
        </div>
      </div>
    </div>
  );
}
