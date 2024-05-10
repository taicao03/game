import React from "react";
import CpnMenuScore from "../../ui/menuScore";
import Button from "../../ui/button";
const fakeData = [
  {
    name: "Holund",
    phone: 3551,
    score: 99999,
  },
  {
    name: "Holund",
    phone: 3551,
    score: 99999,
  },
  {
    name: "Holund",
    phone: 3551,
    score: 99999,
  },
  {
    name: "Holund",
    phone: 3551,
    score: 99999,
  },
  {
    name: "Holund",
    phone: 3551,
    score: 99999,
  },
  {
    name: "Holund",
    phone: 3551,
    score: 99999,
  },
  {
    name: "Holund",
    phone: 3551,
    score: 99999,
  },
  {
    name: "Holund",
    phone: 3551,
    score: 99999,
  },
];
export default function CPNHome() {
  return (
    <div>
      <div className="flex justify-end">
        <div className="bg-secondary rounded-2xl w-fit px-5 py-3">
          <p className="font-normal text-[32px] text-primary">
            Thời gian còn lại: 40s
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <CpnMenuScore data={fakeData} className={"col-span-1"} />
        <div className="col-span-2">
          <Button label="Submit" type={"submit"} />
        </div>
      </div>
    </div>
  );
}
