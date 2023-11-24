import Link from "next/link";
import NavLinks from "./NavLinks";
import Logo from "../Logo";
import { ArrowLeftOnRectangle } from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div
      className="bg-purple-700 py-3 md:w-56 md:px-5 md:fixed md:min-h-screen 
    ">
      <div className=" flex  justify-center pb-5 pt-2">
        <Link href="/store">
          <Logo />
        </Link>
      </div>
      <nav className="flex justify-center flex-wrap gap-2">
        <NavLinks />
      </nav>
    </div>
  );
};
export default Sidebar;
