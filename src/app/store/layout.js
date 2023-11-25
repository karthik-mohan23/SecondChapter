import Sidebar from "../_components/sidebar/Sidebar";

export const metadata = {
  title: "Second Chapter",
  description: "An online bookstore to sell and rent used books",
};

export default function BookStoreLayout({ children }) {
  return (
    <div className="">
      <div className="md:w-[99%] min-h-screen md:mx-auto flex flex-col md:flex-row">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
