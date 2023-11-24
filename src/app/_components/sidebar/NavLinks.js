import {
  HomeIcon,
  BookOpenIcon,
  RectangleStackIcon,
  TruckIcon,
  UserGroupIcon,
  CogIcon,
  Squares2X2Icon,
  CubeTransparentIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Books", href: "/store", icon: BookOpenIcon },
  { name: "Sell or Lend", href: "/store/sell-lend", icon: RectangleStackIcon },
  { name: "Track Order", href: "/track", icon: TruckIcon },
  { name: "Community", href: "/community", icon: UserGroupIcon },
  { name: "Settings", href: "/settings", icon: CogIcon },
  { name: "About", href: "/about", icon: Squares2X2Icon },
  { name: "Admin", href: "/admin", icon: CubeTransparentIcon },
];

const NavLinks = () => {
  return (
    <ul className="flex  flex-wrap gap-4 px-4 pb-2 md:px-0">
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <li
            key={link.name}
            className="bg-purple-200 hover:bg-white duration-300 md:w-full  p-2 rounded-md">
            <Link href={link.href} className="flex md:gap-3 items-center">
              <IconComponent className="w-5 sm:w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </li>
        );
      })}
      <form className="md:w-full p-2 rounded-md bg-purple-200 hover:bg-white duration-300 cursor-pointer ">
        <button className="flex md:gap-3 items-center w-full">
          <ArrowLeftOnRectangleIcon className="w-5 sm:w-6" />
          <p className="hidden md:block">Sign Out</p>
        </button>
      </form>
    </ul>
  );
};
export default NavLinks;
