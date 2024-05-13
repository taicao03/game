import React, { useState } from "react";

const WordSearchGame = () => {
  const [grid, setGrid] = useState([
    ["W", "E", "L", "C", "O", "M", "E", "C", "W", "E", "L", "C"],
    ["W", "E", "L", "C", "O", "M", "E", "C", "W", "E", "L", "C"],
    ["W", "E", "L", "C", "O", "M", "E", "C", "W", "E", "L", "C"],
    ["W", "E", "L", "C", "O", "M", "E", "C", "W", "E", "L", "C"],
    ["W", "E", "L", "C", "O", "M", "E", "C", "W", "E", "L", "C"],
    ["W", "E", "L", "C", "O", "M", "E", "C", "W", "E", "L", "C"],
    ["W", "E", "L", "C", "O", "M", "E", "C", "W", "E", "L", "C"],
  ]);

  const [words, setWords] = useState(["REACT", "HOOK", "REDUX", "JAVA", "SCR"]);

  const handleSearch = (word) => {
    // Logic to search for the word in the grid
    // Fill in the code here to check if the word exists in the grid
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2 bg-secondary rounded-lg p-3">
          <div className="bg-white p-3 m-3">
            {grid.map((row, rowIndex) => (
              <div className="grid grid-cols-12 gap-3" key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <div className="col-span-1" key={colIndex}>
                    <span className="font-semibold text-[25px]">{cell}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1 relative h-">
          <div className="bg-white absolute w-3/4 -top-[45px] -translate-x-2/4 left-2/4 rounded-lg">
            <div className="bg-secondary rounded-lg p-2 m-2">
              Khi chọn đúng Đ/A sẽ hiện ra
            </div>
          </div>
          <div className="bg-secondary rounded-xl text-center pt-10 h-full">
            {Array.from({ length: 7 }, (_, index) => (
              <p key={index}>sadad</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchGame;
