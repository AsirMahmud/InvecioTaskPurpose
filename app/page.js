import Deal from "@/components/dealOfTheDay/deal";
import Product from "@/components/department/product";
import Feature from "@/components/feature/feature";
import Offer from "@/components/offer/offer";
import BestDeals from "@/components/ui/bestDeals";
import BrandCard from "@/components/ui/brandCard";
import BrandCard2 from "@/components/ui/brandCard2";
import BrandCard3 from "@/components/ui/brandCard3";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/cardO";
import CategoryCard from "@/components/ui/categoryCard";
import Hero from "@/components/ui/hero";
import ListCard from "@/components/ui/ListCard";
import ProductCard from "@/components/ui/productCard";
import { PiIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Hero></Hero>
      <Feature></Feature>
      <Product></Product>
      <Deal></Deal>
      <Offer></Offer>
      <
    </div>
  );
}
