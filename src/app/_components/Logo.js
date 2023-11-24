import { SparklesIcon } from "@heroicons/react/24/solid";

const Logo = () => {
  return (
    <div className="flex items-center   text-white bg-purple-900 py-2 px-4 rounded-lg hover:bg-purple-950 duration-300">
      <SparklesIcon className="w-6 h-6" />
      <p className="font-semibold text-base">Second Chapter</p>
    </div>
  );
};
export default Logo;
