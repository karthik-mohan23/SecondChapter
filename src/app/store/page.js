import BookList from "../_components/books/BookList";
import { getAllBooks } from "../lib/fake-data";

export default function BookListPage() {
  const books = getAllBooks();

  return (
    <main className="min-h-screen">
      <BookList books={books} />
    </main>
  );
}
