import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Category from "./category";
import { Menu } from "lucide-react";
import { Contact, ShoppingBag } from "lucide-react";

export default function Drawer() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-white w-9 h-9"></Menu>
        </SheetTrigger>
        <SheetContent>
          <div className=" bottom-0 left-0 mb-8">
            {" "}
            <div className="flex gap-4">
              <div className="gap-2 flex">
                <Contact className=""></Contact>
                <p className=" cursor-pointer hover:underline">Sign In</p>
              </div>
              <div className="gap-2 flex">
                <ShoppingBag className=""></ShoppingBag>
                <p className=" cursor-pointer hover:underline">Cart</p>
              </div>
            </div>
          </div>
          <Category></Category>
        </SheetContent>
      </Sheet>
    </div>
  );
}
