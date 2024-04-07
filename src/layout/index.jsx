import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { PATH_NAME } from "../routes";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  let location = useLocation();
  return (
    <>
      <div className="w-screen h-screen px-10 overflow-y-auto relative">
        <Header />
        {children}
        <Footer />
      </div>
      {location.pathname !== PATH_NAME.CHAT_BOT && (
        <Link
          className="absolute bottom-10 right-10 bg-pink-700 z-10 p-3 py-6 rounded-full"
          to={PATH_NAME.CHAT_BOT}
        >
          <p className="text-white font-bold">Chat UI</p>
        </Link>
      )}
    </>
  );
};

export default Layout;
