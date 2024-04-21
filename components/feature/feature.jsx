import FeatureCard from "./FeatureCard";

export default function Feature() {
  const ecommerceFeatures = [
    {
      header: "Main Header",
      description: "This is the main header for the e-commerce store features.",
    },
    {
      header: "Free Shipping on Orders Over $50",
      description: "Enjoy free shipping when your order total exceeds $50.",
    },
    {
      header: "Same-Day Delivery in Select Areas",
      description:
        "Get your orders delivered on the same day in specific regions.",
    },
    {
      header: "24/7 Customer Support",
      description:
        "Receive assistance and support round-the-clock, whenever you need it.",
    },

    // Add more features as needed
  ];

  return (
    <div className="grid  lg:grid-cols-4 md:grid-cols-2 gap-4">
      {ecommerceFeatures.map((i) => (
        <FeatureCard
          key={i.header}
          header={i.header}
          description={i.description}
        ></FeatureCard>
      ))}
    </div>
  );
}
