import React from "react";
export default function CPNLuckyDraw() {
  return (
    <div className="my-[150px]">
       <div className="col-span-3 w-fit mx-auto mb-[63px] bg-secondary py-4 px-4 h-fit rounded-lg text-[32px] font-normal text-primary">
          DANH SÁCH THAM GIA LUCKY DRAW
        </div>
      <div className="grid grid-cols-3 place-items-center gap-y-40">
        {Array.from({ length: 6 }, (_, index) => (
          <div className="col-span-1 cursor-pointer w-[263px]" key={index}>
            <p className="text-[64px] bg-secondary rounded-lg h-[165px] text-primary font-normal w-full flex justify-center items-center">
              Gift 1
            </p>
            <div className="flex items-center gap-3 mt-2.5">
              <div className="bg-secondary rounded-lg px-3 py-5 w-fit flex">
                <img src="../../images/icon/youtube.svg" alt="icon-ytb" />
                <span className="underline underline-offset-1">Quay</span>
              </div>
              <div className="bg-secondary rounded-lg p-3 flex flex-1">
                <img src="../../images/icon/iconList.svg" alt="icon-ytb" />
                <span className="underline underline-offset-1 text-[14px]">
                  <span className="text-nowrap">Xem danh sách</span> <br /> trúng thưởng
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
