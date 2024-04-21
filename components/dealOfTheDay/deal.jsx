"use client";
import React from "react";
import Header from "../ui/header";
import DealCard1 from "./dealCard1";
import DealCard2 from "./dealCard2";
import CountDownMain from "./countDown";

export default function Deal() {
  return (
    <div>
      <Header header="Deal of the day"></Header>
      <div className="p-6  flex md:flex-row gap-4  flex-col">
        <DealCard1 className="w-full   "></DealCard1>
        <DealCard2></DealCard2>
      </div>
    </div>
  );
}
