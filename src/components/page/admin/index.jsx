import React from "react";
import Button from "../../ui/button";

export default function CpnAdmin() {
  return (
    <div>
      <div className="grid grid-cols-3 px-3 gap-5 bg-[#C7C7C7] rounded-xl pt-[145px] pb-[63px] mt-[185px]">
        <div className="col-span-1">
          <div className="h-[82px] bg-secondary rounded-lg flex items-center justify-center mb-[33px]">
            <p className="text-[32px] leading-10 font-normal">Round 1</p>
          </div>
          <Button
            type={"button"}
            className={"mt-2"}
            label={"Restart Round"}
            iconRight={"restart.svg"}
                      href={"/ranking"}
                      classButton={'text-[14px]'}
          />
        </div>
      </div>
    </div>
  );
}
