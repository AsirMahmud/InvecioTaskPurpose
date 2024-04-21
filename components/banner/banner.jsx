import React from "react";

export default function Banner() {
  const banner = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqiyHWXbL2D2uhxYVNn1wKqKsdcr2-qhbbmTM6Pk4Ukg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7JXOo_DK36KyhpsPHEVPkwydNgJfBsQnts7yqGlJ_1vOOEbCFw_VbSJxKnlQ5xRZurwo&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mcdyx3haUWDxnonfadh5efDjHCry4gz4Ag&s",
    "https://www.gizmochina.com/wp-content/uploads/2024/03/HR2-Asset-1024x570.jpg",
    "https://s.yimg.com/ny/api/res/1.2/M.jyBWSjDy9NsHC4k6uF8Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/toms_guide_826/c99a366684e0a0dbcaf04bfae19b3726",
    "https://cdn.mos.cms.futurecdn.net/rCHGcagcMJGFBhvaLnufYa-320-80.jpg",
  ];
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-4 my-8">
      {banner.map((i) => (
        <div key={i} className="h-[203.91px] w-full">
          <img className="w-full object-contain h-full" src={i}></img>
        </div>
      ))}
    </div>
  );
}
