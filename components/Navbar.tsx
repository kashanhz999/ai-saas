import React from "react";
import { UserButton } from "@clerk/nextjs";
import Mobilesidebar from "./Mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
const Navbar = async() => {
  const apiLimitCount = await getApiLimitCount()
  return (
    <div className="flex items-center p-4">
      <Mobilesidebar apiLimitCount={apiLimitCount}/>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
