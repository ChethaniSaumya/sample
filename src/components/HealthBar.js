import React from "react";

const HealthBar = ({ type = "player", label, healthPercentage }) => {
  const isEnemy = type === "enemy" ? true : false;

  return (
    <div
      className={`relative flex flex-col ${
        type === "enemy" ? "items-end" : ""
      } z-[1]`}
    >
      <p className="w-fit font-semibold font-reem-kufi-fun bg-[#D76E86] text-[#132744] uppercase px-3 rounded-tl-xl rounded-tr-xl">
        {label.toLowerCase()}
      </p>
      <div
        className={`w-[411px] h-[29px] flex items-center justify-center  bg-[#D76E86] rounded-full ${
          isEnemy ? "rounded-tr-none" : "rounded-tl-none"
        }`}
      >
        <div
          className={`relative w-[400px] h-[18px] outline outline-[#132744] ${
            isEnemy ? "bg-[#6514DB]" : "bg-[#B014A5]"
          } rounded-full`}
        >
          <div
            className={`absolute top-0 bottom-0 ${
              isEnemy ? "right-0" : "left-0"
            } h-full bg-gradient-to-t from-[#0058746E] to-[#FFC700] outline outline-[#132744] rounded-full transition-all duration-200`}
            style={{
              width: `${healthPercentage}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HealthBar;
