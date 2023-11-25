import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <div className="  p-5 flex flex-wrap  gap-10 ">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};
export default BookList;
