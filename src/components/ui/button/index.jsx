import React from "react";

export default function Button({ type, label }) {
  return (
    <div>
      <button
        type={type}
        className={`font-normal text-[32px] text-primary bg-secondary rounded-2xl px-10`}
      >
        {label}
      </button>
    </div>
  );
}
