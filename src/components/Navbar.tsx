import { useEffect, useState } from "react";
import { navlinks } from "../constants/navlink";
import { FaTimes, FaBars } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [title, setTitle] = useState("");
  const [activeLinkId, setActiveLinkId] = useState(0);
  const [showSideNav, setShowSideNav] = useState(false);

  useEffect(() => {
    navlinks.forEach(({ path, name, id }) => {
      if (pathname.includes(path)) {
        setTitle(name);
        setActiveLinkId(id);
      }
    });
  }, [pathname]);

  const handleNavigation = (path: string) => {
    navigate(path);
    setShowSideNav(false);
  };

  return (
    <nav className="w-full fixed top-0">
      <div className="h-16 border-b border-gray-600 flex justify-center items-center w-full text-xl xl:text-3xl font-semibold bg-black">
        {title}
      </div>
      <div
        onBlur={() => setShowSideNav(false)}
        tabIndex={0}
        className={`h-screen fixed w-1/2 md:w-1/5 top-0 flex flex-col items-center duration-500 p-5 ${
          showSideNav
            ? "left-0 bg-gray-500"
            : "bg-transparent left-[-35%] md:left-[-14%] xl:left-[-16%]"
        }`}
      >
        <div
          className="self-end text-black cursor-pointer"
          onClick={() => setShowSideNav(!showSideNav)}
        >
          {showSideNav ? (
            <FaTimes size={25} />
          ) : (
            <FaBars size={25} className="text-white" />
          )}
        </div>
        <div
          className={`flex flex-col mt-8 gap-5 text-black font-bold ${
            !showSideNav && "opacity-0"
          }`}
        >
          {navlinks.map(({ id, path, name }) => (
            <div
              key={id}
              onClick={() => handleNavigation(path)}
              className={`${
                activeLinkId === id && "border-b"
              } py-2 text-center cursor-pointer`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
