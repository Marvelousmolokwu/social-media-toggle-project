const Overview = (props) => {
  return (
    <div className="flex flex-col bg-LightGrayishBlue hover:bg-LightGrayishBlue hover:brightness-95 py-6 px-8 gap-6 rounded-lg lg:min-w-[205px] md:w-[500px]  xl:min-w-[299px] ">
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg">{props.likes}</p>
        <img src={props.img} alt="" />
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-5xl lg:text-xl xl:text-5xl">
          {props.likesAmount}
        </h3>
        <div className="flex gap-2 max-h-2 justify-center items-center lg:gap-0">
          <img src={props.arrow} alt="" />
          <p className={`font-bold text-lg ${props.percentTextColor}`}>
            <span>{props.percentage}</span>%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
