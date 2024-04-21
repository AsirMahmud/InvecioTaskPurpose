"use client";
import { Contact, ShoppingBag } from "lucide-react";
export default function NavIcon() {
  return (
    <div>
      {" "}
      <div className="flex gap-4">
        <div className="gap-2 flex">
          <Contact className="text-white"></Contact>
          <p className="text-white cursor-pointer hover:underline">Sign In</p>
        </div>
        <div className="gap-2 flex">
          <ShoppingBag className="text-white"></ShoppingBag>
          <p className="text-white cursor-pointer hover:underline">Cart</p>
        </div>
      </div>
    </div>
  );
}
