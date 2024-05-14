import React from "react";
import Button from "../../ui/button/index";
export default function CPNRanking() {
  return (
    <div>
      <Button
        iconLeft={"iconBackLeft.svg"}
        type={"button"}
        label={"LeaderBoard"}
        classButton={"px-5"}
        href={"/leaderboard"}
      />

      <div className="flex justify-center items-center mb-10">
        <div>
          <p className="text-center">Rank1</p>
          <img src="../../images/icon/cup.svg" alt="icon" className="px-20" />
          <div className="flex justify-between mt-3">
            <p>Nguyễn Văn C</p>
            <p>9849</p>
          </div>
        </div>
      </div>

      <div className="flex justify-around items-center mb-10">
        <div>
          <p className="text-center">Rank1</p>
          <img src="../../images/icon/cup.svg" alt="icon" className="px-20" />
          <div className="flex justify-between mt-3">
            <p>Nguyễn Văn C</p>
            <p>9849</p>
          </div>
        </div>
        <div>
          <p className="text-center">Rank1</p>
          <img src="../../images/icon/cup.svg" alt="icon" className="px-20" />
          <div className="flex justify-between mt-3">
            <p>Nguyễn Văn C</p>
            <p>9849</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-10 gap-x-5">
        <div>
          <p className="text-center">Rank1</p>
          <img src="../../images/icon/cup.svg" alt="icon" className="px-20" />
          <div className="flex justify-between mt-3">
            <p>Nguyễn Văn C</p>
            <p>9849</p>
          </div>
        </div>

        <div>
          <p className="text-center">Rank1</p>
          <img src="../../images/icon/cup.svg" alt="icon" className="px-20" />
          <div className="flex justify-between mt-3">
            <p>Nguyễn Văn C</p>
            <p>9849</p>
          </div>
        </div>

        <div>
          <p className="text-center">Rank1</p>
          <img src="../../images/icon/cup.svg" alt="icon" className="px-20" />
          <div className="flex justify-between mt-3">
            <p>Nguyễn Văn C</p>
            <p>9849</p>
          </div>
        </div>
      </div>
    </div>
  );
}
