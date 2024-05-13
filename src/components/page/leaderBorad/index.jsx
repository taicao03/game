import React from "react";
import CpnMenuScore from "../../ui/menuScore";
import Button from "../../ui/button";

export default function LeaderBoard() {
  return (
    <div className="grid place-items-center gap-5">
      <CpnMenuScore />
      <div className="flex items-center gap-3">
        <Button type={"button"} label={"Back"} />
        <Button type={"button"} label={"Next"} />
      </div>
      <Button
        type={"button"}
        className={"mt-2"}
        label={"Ranking"}
        iconRight={"iconBackRight.svg"}
      />
    </div>
  );
}
