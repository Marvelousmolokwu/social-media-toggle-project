import { useState } from "react";
import React from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className=" pt-10 pb-16 bg-VeryPaleBlue rounded-b-3xl">
      <div className="me-auto ms-auto max-w-[80%] ">
        <div className="border-b-2 py-6 ">
          <h1 className="font-bold text-3xl">Social Media Dashboard</h1>
          <p className="font-semibold text-slate-500">
            Total Followers: 23,004
          </p>
        </div>
        <div className="flex flex-row  justify-between p-4">
          <h4 className="font-semibold">Dark Mode</h4>
          <div
            onClick={() => setToggle(!toggle)}
            className={`flex w-16 h-8  rounded-full p-1 ${
              toggle ? "bg-slate-400" : "bg-red-300"
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
