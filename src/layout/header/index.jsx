import { Link } from "react-router-dom";
import { logo } from "../../assets/images";
import { PATH_NAME } from "../../routes";

const MENU_ITEMS = [
  "Platform",
  "Solutions",
  "Developers",
  "Company",
  "Resources",
];

const Header = () => {
  return (
    <div className="sticky top-0 w-full px-60 flex justify-between items-center h-20 z-50 bg-white">
      <Link className="flex items-center justify-center gap-1" to={PATH_NAME.HOME}>
        <img src={logo} alt="logo" width={20} className="rounded"/>
        <h1 className="text-16 font-bold">Chatbot</h1>
      </Link>
      <div className="flex gap-5">
        {MENU_ITEMS.map((item, key) => (
          <div key={key}>
            <span className="text-16 text-grey-1000 font-medium">{item}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-5">
        <Link className="text-16 text-grey-1000 font-semibold" to="/">
          Log in
        </Link>
        <button
          className="flex items-center justify-center px-6 py-3 bg-pink-700 rounded-xl hover:bg-grey-1000 group duration-200"
          type="button"
        >
          <span className="text-16 text-grey-1000 font-semibold group-hover:text-white">
            BOOK A MEETING
          </span>
        </button>
      </div>
    </div>
  );
};
export default Header;
