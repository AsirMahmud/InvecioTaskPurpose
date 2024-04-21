import React from "react";

export default function NavBar2() {
  const menuItems = [
    { id: "home", name: "Home", link: "/" },
    { id: "shop", name: "Shop", link: "/shop" },
    { id: "categories", name: "Categories", link: "/categories" },
    { id: "search", name: "Search", link: "/search" },
    { id: "cart", name: "Cart", link: "/cart" },
    { id: "account", name: "Account/Sign In", link: "/account" },
    { id: "deals", name: "Deals/Special Offers", link: "/deals" },
    { id: "about", name: "About Us", link: "/about" },
    { id: "contact", name: "Contact Us", link: "/contact" },
    { id: "faqs", name: "FAQs/Help", link: "/faqs" },
    {
      id: "shipping-returns",
      name: "Shipping & Returns",
      link: "/shipping-returns",
    },
    { id: "blog", name: "Blog", link: "/blog" },
    { id: "track-order", name: "Track Order", link: "/track-order" },
    { id: "wishlist", name: "Wishlist", link: "/wishlist" },
    { id: "new-arrivals", name: "New Arrivals", link: "/new-arrivals" },
    { id: "best-sellers", name: "Best Sellers", link: "/best-sellers" },
    { id: "gift-cards", name: "Gift Cards", link: "/gift-cards" },
    {
      id: "privacy-terms",
      name: "Privacy Policy/Terms of Service",
      link: "/privacy-terms",
    },
    {
      id: "customer-reviews",
      name: "Customer Reviews/Testimonials",
      link: "/reviews",
    },
    { id: "social-media", name: "Social Media Links", link: "/social-media" },
  ];

  return (
    <div className="w-full  h-[56px] py-4  lg:px-[192px]   bg-white hidden md:block">
      <div className="flex ">
        {menuItems.map((i) => (
          <p key={i.id}>{i.name}</p>
        ))}
      </div>
    </div>
  );
}
