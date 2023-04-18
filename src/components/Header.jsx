import { useState } from "react";
import React from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="font-inter pt-10 pb-16 bg-VeryPaleBlue rounded-b-3xl w-full">
      <div className="me-auto ms-auto max-w-[90%] md:max-w-[50%] lg:flex lg:flex-row lg:justify-between  lg:max-w-[78%]">
        <div className="border-b-2 py-6 lg:border-none">
          <h1 className="font-bold text-3xl">Social Media Dashboard</h1>
          <p className="font-semibold text-slate-500">
            Total Followers: 23,004
          </p>
        </div>
        <div className="flex flex-row  justify-between p-4 lg:items-center lg:gap-3">
          <h4 className="font-semibold">Dark Mode</h4>
          <div
            onClick={() => setToggle(!toggle)}
            className={`flex w-16 h-8  rounded-full p-1 cursor-pointer ${
              toggle
                ? "bg-slate-400 hover:bg-gradient-to-r from-sky-400 to-green-500"
                : "bg-red-300 hover:bg-gradient-to-r from-sky-400 to-green-500"
            }`}
          >
            <span
              className={`h-6 w-6 bg-VeryPaleBlue rounded-full  ${
                toggle ? "ml-8" : "ml-0"
              }`}
            ></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
