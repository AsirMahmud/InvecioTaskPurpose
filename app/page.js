import AppleProduct from "@/components/apple/appleProduct";
import Banner from "@/components/banner/banner";
import DailyDiscover from "@/components/dailyDiscover/dailydicover";
import Deal from "@/components/dealOfTheDay/deal";
import Product from "@/components/department/product";
import Feature from "@/components/feature/feature";
import MostViewed from "@/components/mostViewedItem/mostViewed";
import Viewed from "@/components/mostViewedItem/viewed";
import Offer from "@/components/offer/offer";
import SellingProducts from "@/components/onSellingProducts/sellingProducts";
import ShopCategories from "@/components/shopAllCategories/shopCategories";
import TopBrand from "@/components/topBrand/topBrand";
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
import WeeklyVendor from "@/components/weeklyVendors/weeklyVendor";
import { PiIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Hero></Hero>
      <Feature></Feature>
      <Product></Product>
      <Deal></Deal>
      <Offer></Offer>
      <SellingProducts></SellingProducts>
      <AppleProduct></AppleProduct>
      <ShopCategories></ShopCategories>
      <Viewed></Viewed>
      <TopBrand></TopBrand>
      <WeeklyVendor></WeeklyVendor>
      <Banner></Banner>
      <DailyDiscover></DailyDiscover>
    </div>
  );
}
