import Sidebar from "../_components/sidebar/Sidebar";

export const metadata = {
  title: "Second Chapter",
  description: "An online bookstore to sell and rent used books",
};

export default function BookStoreLayout({ children }) {
  return (
    <div className="bg-blue-100/50">
      <div className="md:w-[90%] md:max-w-6xl md:mx-auto flex flex-col md:flex-row">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
