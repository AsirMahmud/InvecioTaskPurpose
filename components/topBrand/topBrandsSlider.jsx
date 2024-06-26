import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BrandCard from "../ui/brandCard";
import BrandCard2 from "../ui/brandCard2";
export default function TopBrandSlider() {
  const companyIcons = [
    {
      name: "Apple",
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      name: "Google",
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Microsoft",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    },
    {
      name: "Amazon",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Facebook",
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    },
    {
      name: "Tesla",
      icon: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    },
    {
      name: "Netflix",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },

    {
      name: "IBM",
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },

    // Add more companies as needed
  ];

  return (
    <Carousel className="w-full ">
      <CarouselContent className="-ml-1">
        {companyIcons.map((i, index) => (
          <CarouselItem
            key={index}
            className="pl-1 basis-2/3 md:basis-1/3 lg:basis-1/5"
          >
            <div>
              <BrandCard2 icon={i.icon} brandName={i.name}></BrandCard2>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" md:block hidden" />
      <CarouselNext className=" md:block hidden" />
    </Carousel>
  );
}
