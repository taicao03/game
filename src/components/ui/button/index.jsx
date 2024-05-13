import React from "react";

export default function Button({
  type,
  label,
  className,
  iconLeft,
  iconRight,
  classButton,
  href,
}) {
  const handleClick = () => {
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <div className={className}>
      <button
        type={type}
        className={`${
          type === "submit" && "px-20"
        } font-normal text-[32px] text-primary bg-secondary rounded-2xl px-10 flex gap-3 items-center ${classButton}`}
        onClick={handleClick}
      >
        {iconLeft && (
          <img src={`../../images/icon/${iconLeft}`} alt="icon-left" />
        )}
        {label}
        {iconRight && (
          <img src={`../../images/icon/${iconRight}`} alt="icon-left" />
        )}
      </button>
    </div>
  );
}
