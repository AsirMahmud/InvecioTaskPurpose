import React from "react";

export default function Header({ header }) {
  return (
    <div className="md:text-start text-center ">
      <h4 className=" text-2xl font-bold">{header}</h4>
    </div>
  );
}
