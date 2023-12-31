"use client";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

interface props{
  apiLimitCount:number
  isPro:boolean
}
const Mobilesidebar = ({apiLimitCount=0, isPro=false}:props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <Sidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Mobilesidebar;
