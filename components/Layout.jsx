import Connect from "./Connect";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="p-10 ">
      <div className="">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
