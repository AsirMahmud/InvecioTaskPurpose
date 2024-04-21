import React from "react";
import BrandCard3 from "../ui/brandCard3";

export default function WeeklyVendorCard() {
  const productsWithImages = [
    {
      name: "Product 1",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58cCGmmFdKjaaU_otro1uki2TonktrPrTYg&s",
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IxJPXY42lEal03Q5eySQ3LUc3IusVH84dG8E_LR0PQ&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMouUiIINO-RfDYSn--LUSg2X9Jzj2KXdEXERzzFFt4DLKyqcGBabScbJCIqHwjiJY0IQ&usqp=CAU",
      image3:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyPFNUoxEUATMBftOPzVf94H0vyEKoWStZQJ9RvkqVxJDjTC1PPkiTfhZgdZoAQg_58E&usqp=CAU",
    },
    {
      name: "Product 2",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrD1zWJGu3vuv5UH6He1vZp67xwgNmIQTw6A&s",
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkqs0MU7hoMp07dh7z5Fn_BcRjl4gaPs2E84fOEmf9EvBC9KhlLfw55N7GYhpHidGh0J0&usqp=CAUg",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbY2NTEJ11RuQaEdARP2u70nV5lESiI1nJ8bxlhSmh0AefDXQLUSrJirKfaRpQ0JZwCBw&usqp=CAU",
      image3:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfJ83OiMOEJpAp9KQp392QhFLiVkg6eBC2ffn8DtFrACkcvdIUpzkO9v4flc21LnIb_4&usqp=CAU",
    },
    {
      name: "Product 1",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58cCGmmFdKjaaU_otro1uki2TonktrPrTYg&s",
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IxJPXY42lEal03Q5eySQ3LUc3IusVH84dG8E_LR0PQ&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cBhYtIEleBRh2WrrgDzX11nUpNk31u9WHRJaGWqUb5EO_FaQ_H05ppFucz0kOD7KFlQ&usqp=CAU",
      image3:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyPFNUoxEUATMBftOPzVf94H0vyEKoWStZQJ9RvkqVxJDjTC1PPkiTfhZgdZoAQg_58E&usqp=CAU",
    },
    {
      name: "Product 2",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrD1zWJGu3vuv5UH6He1vZp67xwgNmIQTw6A&s",
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkqs0MU7hoMp07dh7z5Fn_BcRjl4gaPs2E84fOEmf9EvBC9KhlLfw55N7GYhpHidGh0J0&usqp=CAUg",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbY2NTEJ11RuQaEdARP2u70nV5lESiI1nJ8bxlhSmh0AefDXQLUSrJirKfaRpQ0JZwCBw&usqp=CAU",
      image3:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfJ83OiMOEJpAp9KQp392QhFLiVkg6eBC2ffn8DtFrACkcvdIUpzkO9v4flc21LnIb_4&usqp=CAU",
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center  gap-4 ">
      {productsWithImages.map((i) => (
        <BrandCard3
          key={i.name}
          icon={i.icon}
          brandName={i.name}
          imgUrl1={i.image1}
          imgUrl2={i.image2}
          imgUrl3={i.image3}
        ></BrandCard3>
      ))}
    </div>
  );
}
