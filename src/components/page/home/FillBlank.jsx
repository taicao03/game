import React from 'react'
import Button from "../../ui/button";

export default function FillBlank() {
  return (
      <div className='w-[90%] flex flex-wrap justify-center'>
          <div className="bg-secondary rounded-lg min-h-[335px] mb-28 w-full">
          </div>
          
          <div className="flex gap-3">
          {Array.from({ length: 7 }, (_, index) => (
                <div className="size-[75px] bg-secondary rounded-xl"></div>
        ))}
          </div>

          <Button className={'mt-16 w-full flex justify-center'} label="Submit"  type={"submit"} />

    </div>
  )
}
