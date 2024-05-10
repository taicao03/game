import React from "react";

export default function CpnMenuScore({ data, className }) {
  return (
    <div className={`bg-secondary rounded-2xl px-8 ${className}`}>
      <div className="flex justify-center text-[48px] font-normal text-primary mb-7">
        Leader Board
      </div>
      <div className="grid grid-cols-3 gap-x-[67px]">
        <div className="col-span-1">
          <span className="text-[20] font-normal text-primary">Fullname</span>
        </div>
        <div className="col-span-1">
          <span>Số điện thoại (4 số cuối)</span>
        </div>
        <div className="col-span-1">
          <span>Score</span>
        </div>

        <div className="col-span-3">
          {data?.map((item, i) => (
            <div className="grid grid-cols-3 gap-x-[67px] mb-10" key={i}>
              <div className="col-span-1">{item?.name}</div>
              <div className="col-span-1 text-center">{item?.phone}</div>
              <div className="col-span-1">{item?.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
