import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navlinks } from "../constants/navlink";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [title, setTitle] = useState("");
  const { pathname } = useLocation();
  const [activeLinkId, setActiveLinkId] = useState(0);
  const [showSideNav, setShowSideNav] = useState(false);

  useEffect(() => {
    navlinks.forEach(({ path, name, id }) => {
      if (path === pathname) {
        setTitle(name);
        setActiveLinkId(id);
      }
    });
  }, []);

  return (
    <nav className="relative w-full">
      <div className="h-16 border-b border-gray-600 flex justify-center items-center w-full text-xl xl:text-3xl font-semibold">
        {title}
      </div>
      <div
        className={`h-screen absolute w-1/2 md:w-1/5 top-0 flex flex-col items-center duration-500 p-5 ${
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
            <Link
              to={path}
              key={id}
              onClick={(e) => {
                setTitle(name);
                setActiveLinkId(id);
              }}
              className={`${
                activeLinkId === id && "border-b"
              } py-2 text-center`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
