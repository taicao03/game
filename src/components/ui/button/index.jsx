import React from "react";

export default function Button({ type, label, className }) {
  return (
    <div className={className}>
      <button
        type={type}
        className={`${type === 'submit' &&  'px-20'} font-normal text-[32px] text-primary bg-secondary rounded-2xl px-10`}
      >
        {label}
      </button>
    </div>
  );
}
