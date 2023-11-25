import Link from "next/link";
import NavLinks from "./NavLinks";
import Logo from "../Logo";

const Sidebar = () => {
  return (
    <div
      className="bg-purple-700 py-3 md:w-[250px]  md:px-5 md:h-[100vh]    
    ">
      <div className=" flex  justify-center pb-5 pt-2 ">
        <Logo />
      </div>
      <nav className="flex justify-center flex-wrap gap-2 md:w-[200px]">
        <NavLinks />
      </nav>
    </div>
  );
};
export default Sidebar;
