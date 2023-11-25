import Image from "next/image";
import backgroundImage from "../../public/home/allbooks.jpg";
import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="w-full h-[100vh] relative">
        <Image
          src={backgroundImage}
          alt="background image"
          className="object-cover blur-sm  brightness-50 h-full w-full"
        />
        <div className=" flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-purple-100 rounded-xl absolute px-8 py-6">
          <div className="flex items-center mb-7 text-5xl  text-purple-800">
            <SparklesIcon className="w-12 h-12" />
            <p className="font-semibold">Second Chapter</p>
          </div>
          <div className="mb-1">
            <Link
              href="/store"
              className="bg-purple-700 text-white px-4 py-2 rounded-xl hover:bg-purple-400 duration-300 hover:text-purple-950  ">
              Take me to the store
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
