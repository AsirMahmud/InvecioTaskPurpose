import React from "react";

export default function BrandCard3({
  icon,
  brandName,
  imgUrl1,
  imgUrl2,
  imgUrl3,
}) {
  return (
    <div className="w-[288px] border p-4 bg-slate-100 flex flex-col gap-4 h-[314px]">
      <div className="w-full flex gap-2 h-[80px]">
        <div className="w-[80px] h-[80px]">
          <div className="flex flex-col justify-center items-center p-0 md:p-2 gap-2 h-full w-full rounded-full bg-slate-300">
            <div className="bg-slate-300 flex justify-center items-center rounded-full w-10 h-10 md:w-16 md:h-16">
              <div className="w-10 h-10 md:w-16 md:h-16">
                <img
                  src={icon}
                  alt="Brand Icon"
                  className="object-cover w-10 h-10 md:w-16 md:h-16 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full">
            <div className="w-full flex items-center">
              <p className="font-bold text-lg">{brandName}</p>
            </div>
            <div className="flex w-full justify-between">
              <div>
                <p>Items</p>
                <p>(400)</p>
              </div>
              <div>
                <div className="flex justify-center text-xl text-yellow-400">
                  ★★★★★
                </div>
                <div>
                  <p className="text-center text-interface-3">(173 reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full gap-2">
        <div className="w-[124px] h-[186px]">
          <img
            className="w-[124px] h-[186px] object-cover"
            src={imgUrl1}
            alt="img1"
          />
        </div>
        <div className="flex flex-col w-[124px] h-[89px] gap-2">
          <div className="w-[124px] h-[89px]">
            <img
              className="w-[124px] h-[89px] object-cover"
              src={imgUrl2}
              alt="img2"
            />
          </div>
          <div className="w-[124px] h-[89px]">
            <img
              className="w-[124px] h-[89px] object-cover"
              src={imgUrl3}
              alt="img2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
