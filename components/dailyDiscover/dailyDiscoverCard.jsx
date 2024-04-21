import Card from "../ui/cardO";
export default function DailyDiscoverCard() {
  const products = [
    {
      name: "Rapoo Ear Phone",
      description: "Rapoo is a good thing",
      price: {
        current: 8,
        regular: 16,
        discount: 50,
      },
      image:
        "https://images.pexels.com/photos/248510/pexels-photo-248510.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Wireless Bluetooth Headset",
      description: "Enjoy wireless freedom with crystal-clear sound",
      price: {
        current: 25,
        regular: 35,
        discount: 28.57,
      },
      image:
        "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Smartwatch",
      description: "Stay connected and track your fitness goals",
      price: {
        current: 50,
        regular: 70,
        discount: 28.57,
      },
      image:
        "https://images.pexels.com/photos/2861929/pexels-photo-2861929.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Gaming Mouse",
      description: "Elevate your gaming experience with precision control",
      price: {
        current: 30,
        regular: 45,
        discount: 33.33,
      },
      image:
        "https://images.pexels.com/photos/399160/pexels-photo-399160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Portable Charger",
      description: "Never run out of battery on the go with this handy device",
      price: {
        current: 20,
        regular: 25,
        discount: 20,
      },
      image:
        "https://images.pexels.com/photos/914912/pexels-photo-914912.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Bluetooth Speaker",
      description: "Experience high-quality sound with wireless convenience",
      price: {
        current: 40,
        regular: 60,
        discount: 33.33,
      },
      image:
        "https://images.pexels.com/photos/159472/headphones-instagram-video-games-razer-159472.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Fitness Tracker",
      description: "Monitor your health and reach your fitness goals",
      price: {
        current: 35,
        regular: 50,
        discount: 30,
      },
      image:
        "https://images.pexels.com/photos/4397838/pexels-photo-4397838.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Wireless Keyboard",
      description: "Type comfortably from anywhere with wireless connectivity",
      price: {
        current: 25,
        regular: 35,
        discount: 28.57,
      },
      image:
        "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Noise-Cancelling Headphones",
      description: "Immerse yourself in music without distractions",
      price: {
        current: 60,
        regular: 80,
        discount: 25,
      },
      image:
        "https://images.pexels.com/photos/159472/headphones-instagram-video-games-razer-159472.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Wireless Bluetooth Headset",
      description: "Enjoy wireless freedom with crystal-clear sound",
      price: {
        current: 25,
        regular: 35,
        discount: 28.57,
      },
      image:
        "https://images.pexels.com/photos/4397838/pexels-photo-4397838.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    // Add more products as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-2 lg:grid-cols-4 place-items-center ">
      {products.map((i, index) => (
        <div key={index} className="pl-2 basis-2/3 md:basis-1/3 lg:basis-1/5">
          <Card imageUrl={i.image} categoryName={i.name}></Card>
        </div>
      ))}
    </div>
  );
}
