import React, { useState, useRef, useEffect } from "react";
import Button from "../../ui/button";

export default function ReplyMedia() {
  const videoRef = useRef(null);
  const [isPause, setIsPause] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      videoRef?.current?.play();
    }, 1000);
  }, []);

  return (
    <div className="w-[90%] flex flex-wrap justify-center">
      <div className="bg-secondary rounded-lg h-[335px] mb-10 w-full relative group">
        <button
        className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-20 hidden group-hover:block"
        onClick={() => {
          setIsPause(videoRef?.current?.paused ?? false);
          if (videoRef.current?.paused) {
            videoRef?.current?.play();
            setIsPause(false);
          } else {
            videoRef?.current?.pause();
            setIsPause(true);
          }
        }}
      >
        {isPause ? (
      <svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M116 58C116 90.0325 90.0325 116 58 116C25.9675 116 0 90.0325 0 58C0 25.9675 25.9675 0 58 0C90.0325 0 116 25.9675 116 58Z" fill="white"/>
      <path d="M35.3622 23.9157L94.398 58L35.3622 92.0843V23.9157Z" fill="#D9D9D9"/>
      </svg>
        ) : (
         <p className="text-white">PAUSE</p>
        )}
      </button>
        <video
          ref={videoRef}
          controls={false}
          muted
          playsInline
          loop
          className="size-full object-cover aspect-video rounded-lg"
        >
          <source
            src="https://cdn.pixabay.com/video/2024/03/08/203449-921267347_tiny.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="grid grid-cols-2 mt-5 w-full gap-10 gap-y-5">
        {Array.from({ length: 4 }, (_, index) => (
          <div className="col-span-1 bg-secondary rounded-xl h-[100px] cursor-pointer"></div>
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
