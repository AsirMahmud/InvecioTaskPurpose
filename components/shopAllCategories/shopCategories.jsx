import React from "react";
import Header from "../ui/header";
import ShopCategoriesCard from "./shopCategoriesCard";

export default function ShopCategories() {
  return (
    <div className="flex flex-col gap-4">
      <Header header="Shop all categories"></Header>
      <ShopCategoriesCard></ShopCategoriesCard>
    </div>
  );
}
