import { useState, Fragment, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { covidDataLinks } from "../../constants/covidDataLink";

const Charts = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/charts") {
      setActiveTab(0);
    } else {
      covidDataLinks.forEach(({ path, id }) => {
        if (pathname.includes(path)) {
          setActiveTab(id);
        }
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 pt-20 px-6 md:px-20 min-h-screen">
      <h1 className="text-xl font-bold">COVID-19 Data</h1>
      <div className="flex border border-gray-500 rounded-md">
        {covidDataLinks.map(({ id, path, name }, index) => (
          <Fragment key={id}>
            <Link
              to={path}
              className={`py-2 px-3 font-bold text-sm ${
                activeTab === index ? "bg-white text-black" : "bg-transparent"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {name}
            </Link>
            {index !== covidDataLinks.length - 1 && (
              <div className="border border-gray-500" />
            )}
          </Fragment>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Charts;
