import React from "react";
import Header from "../ui/header";
import SellingProductCard from "./sellingProductCard";

export default function SellingProducts() {
  return (
    <div className=" flex flex-col gap-4">
      <Header header="On selling products"></Header>
      <SellingProductCard></SellingProductCard>
    </div>
  );
}
