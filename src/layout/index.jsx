import Header from "./header";
import Footer from "./footer";

const Layout = ({children}) => {
  return (
    <div className="w-screen h-screen px-10 overflow-y-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
