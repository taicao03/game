import React from "react";
import Button from "../../ui/button";

export default function FlipCardMatch() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-10 gap-x-5 mt-[133px]">
        {Array.from({ length: 8 }, (_, index) => (
          <div
            className="col-span-1 bg-secondary h-[165px] w-full rounded-lg cursor-pointer"
            key={index}
          >
            <p className="text-[64px] text-primary font-normal h-full flex justify-center items-center">
              Three
            </p>
          </div>
        ))}
      </div>

      <Button
        className={"mt-16 w-full flex justify-center"}
        label="Submit"
        type={"submit"}
      />
    </div>
  );
}
