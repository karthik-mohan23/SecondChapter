import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </>
  );
};
export default BookList;
