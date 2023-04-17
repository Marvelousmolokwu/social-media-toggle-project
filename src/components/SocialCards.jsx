import React from "react";
const SocialCards = (props) => {
  return (
    <div className=" bg-LightGrayishBlue rounded-lg">
      <div className={`h-1 rounded-t-lg ${props.stylesHead}`}></div>
      <div className="p-10 flex flex-col gap-6 items-center">
        <div className="flex gap-3 max-h-5">
          <img src={props.socialImage} alt="" />
          <p className=" font-bold">{props.userName}</p>
        </div>
        <div>
          <h2 className="text-7xl font-bold">{props.followers}</h2>
          <p className="text-xl tracking-[0.5rem]"> FOLLOWERS</p>
        </div>
        <div className="flex max-h-1 items-center gap-2">
          <img src={props.arrowhead} alt="" />
          <h4 className={`font-bold ${props.textstyle}`}>
            <span>{props.todayfollow}</span> Today
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SocialCards;
