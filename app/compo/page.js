import BestDeals from "@/components/ui/bestDeals";
import BrandCard from "@/components/ui/brandCard";
import BrandCard2 from "@/components/ui/brandCard2";
import BrandCard3 from "@/components/ui/brandCard3";
import Card from "@/components/ui/cardO";
import CategoryCard from "@/components/ui/categoryCard";
import ListCard from "@/components/ui/ListCard";
import ProductCard from "@/components/ui/productCard";
import { PiIcon } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="m-4">
        <BestDeals
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRKkbAOF0EhGbRGirz7AClHZO8PZ_UhS2vD0CpL3l5g&s"
          categoryName="Category"
        ></BestDeals>
      </div>
      <div className="m-4">
        {" "}
        <ListCard
          imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKqTfwPf0I7z-zsZQhlcMj4Wn1XRQ-V4Om5g&s"
          product="Rapoo Ear Phone"
          productDescription="Rapoo is a good thing"
        ></ListCard>
      </div>
      <div className="m-4">
        <ProductCard
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3I11QR8TF2xLkQ6Z0cWAM3mOLBUJNIV6E7Q&s"
          categoryName="Category"
        ></ProductCard>
      </div>
      <div className="m-4">
        <CategoryCard
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3I11QR8TF2xLkQ6Z0cWAM3mOLBUJNIV6E7Q&s"
          categoryName="Category"
        ></CategoryCard>
      </div>

      <div className="m-4">
        <Card
          categoryName="Wireless Bluetooth"
          imageUrl="data:image/jpeg;base64,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"
        ></Card>
      </div>
      <div className="m-4">
        <BrandCard
          brandName="facebook"
          icon="data:image/png;base64,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"
        ></BrandCard>
      </div>
      <div className="m-8">
        <BrandCard2
          brandName="facebook"
          icon="data:image/png;base64,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"
        ></BrandCard2>
      </div>
      <div className="m-4">
        <BrandCard3
          brandName="facebook"
          icon="data:image/png;base64,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"
          imgUrl1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3I11QR8TF2xLkQ6Z0cWAM3mOLBUJNIV6E7Q&s"
        ></BrandCard3>
      </div>
    </div>
  );
}
