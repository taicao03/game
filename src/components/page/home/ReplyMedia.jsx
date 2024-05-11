import React from "react";
import Button from "../../ui/button";

export default function ReplyMedia() {
  return (
    <div className="w-[90%] flex flex-wrap justify-center">
      <div className="bg-secondary rounded-lg min-h-[335px] mb-10 w-full">
        <video height="360" controls>
          <source src="https://www.youtube.com/watch?v=b3RJ2Z5Tjn0" type="video/mp4" />
        </video>
      </div>

      <div className="grid grid-cols-2 mt-5 w-full gap-10 gap-y-5">
        <div className="col-span-1 bg-secondary rounded-xl h-[100px]"></div>
        <div className="col-span-1 bg-secondary rounded-xl h-[100px]"></div>
        <div className="col-span-1 bg-secondary rounded-xl h-[100px]"></div>
        <div className="col-span-1 bg-secondary rounded-xl h-[100px]"></div>
      </div>

      <Button
        className={"mt-16 w-full flex justify-center"}
        label="Submit"
        type={"submit"}
      />
    </div>
  );
}
