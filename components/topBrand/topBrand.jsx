import React from "react";
import Header from "../ui/header";
import TopBrandSlider from "./topBrandsSlider";

export default function TopBrand() {
  return (
    <div className="flex flex-col gap-4">
      <Header header="Top Brands"></Header>
      <TopBrandSlider></TopBrandSlider>
    </div>
  );
}
