import React from "react";
import BestDeals from "../ui/bestDeals";
import Header from "../ui/header";

export default function Product() {
  const productData = [
    {
      name: "Smartphone",
      image:
        "https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Laptop",
      image:
        "https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Headphones",
      image:
        "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Watch",
      image:
        "https://images.pexels.com/photos/4465126/pexels-photo-4465126.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Sunglasses",
      image:
        "https://images.pexels.com/photos/3646165/pexels-photo-3646165.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Backpack",
      image:
        "https://images.pexels.com/photos/5462207/pexels-photo-5462207.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Shoes",
      image:
        "https://images.pexels.com/photos/4022110/pexels-photo-4022110.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Camera",
      image:
        "https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Perfume",
      image:
        "https://images.pexels.com/photos/2333857/pexels-photo-2333857.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Wallet",
      image:
        "https://images.pexels.com/photos/5218037/pexels-photo-5218037.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <div className="flex flex-col  ">
      <Header header="Shop by Department"></Header>
      <div className="grid lg:grid-cols-5 place-items-center md:grid-cols-3 grid-cols-2">
        {productData.map((i) => (
          <BestDeals
            key={i.name}
            imageUrl={i.image}
            categoryName={i.name}
          ></BestDeals>
        ))}
      </div>
    </div>
  );
}
