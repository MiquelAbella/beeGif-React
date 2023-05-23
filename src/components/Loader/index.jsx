import React from "react";

export const Loader = ({ hasContainer }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        hasContainer ? "w-full h-full" : "w-screen h-screen"
      } bg-[#161519]`}
    >
      <img
        className="object-cover h-1/3"
        src="https://media2.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif?cid=ecf05e47y9bzdsmk6ga4lqgfe5dys6k5omtl34zwlsgxzzqh&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt="loading..."
      />
      <p className="text-[#FFCCCC] text-3xl animate-pulse">LOADING . . .</p>
    </div>
  );
};
