import Image from "next/image";
import Link from "next/link";

import {
  CurrencyRupeeIcon,
  ArchiveBoxIcon,
  ArchiveBoxXMarkIcon,
} from "@heroicons/react/24/solid";

const BookCard = ({ book }) => {
  const {
    id,
    title,
    author,
    cover,
    genre,
    stock,
    sellPrice,
    rentPrice,
    renterIds,
  } = book;
  return (
    <Link href={`/store/${id}`}>
      <div className=" flex flex-col gap-1   rounded-lg bg-purple-100 shadow-xl border border-purple-800  p-4 w-64 h-full">
        <div className="mb-4 mx-auto">
          <Image
            className="w-full h-full"
            src={cover}
            alt={title}
            width={150}
            height={150}
            style={{ height: "200px", width: "auto" }}
            priority={true}
          />
        </div>

        <h3 className=" text-lg font-medium mb-2">{title}</h3>
        <h3 className=" text-base mb-1">{genre}</h3>

        <div>
          {book.stock ? (
            <div className="flex">
              <ArchiveBoxIcon className="w-5 mr-1" />
              <span className="text-sm">{stock} in stock</span>
            </div>
          ) : (
            <div className="flex">
              <ArchiveBoxXMarkIcon className="w-5 mr-1" />
              <span className="text-sm">No Stock</span>
            </div>
          )}
        </div>
        <div className="flex mb-2">
          <CurrencyRupeeIcon className="w-5 mr-0.5" />
          <span className="text-sm"> {sellPrice} to buy</span>
        </div>
        <div className=" ">
          <p className="text-sm mb-2">Rent for {rentPrice} INR per month</p>
          <p className="text-xs ">
            {book.isRented
              ? `Currently this book is rented by ${renterIds?.length} customer`
              : `Currently no one has rented this book`}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default BookCard;
