import React from "react";
import Header from "../ui/header";
import MostViewSlider from "./mostViewed";

export default function Viewed() {
  return (
    <div className="flex flex-col gap-4">
      <Header header="Most Viewed Items"></Header>
      <MostViewSlider></MostViewSlider>
    </div>
  );
}
