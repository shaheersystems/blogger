import React from "react";
import { useRef } from "react";
import topics from "../data/topics";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
function TabBar() {
  const ref = useRef();
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    setScrollLenght(ref.current.scrollLeft);
  };
  return (
    <div className='px-5 h-10 mt-2 w-[970px] border-b m-auto flex flex-col justify-center'>
      <div className='flex-1 flex items-center gap-5'>
        <div className='flex p-1 h-7 w-7 rounded-full items-center justify-center'>
          <button onClick={() => scroll(-150)}>
            <ChevronLeftIcon height={18} width={18} />
          </button>
        </div>
        <div
          className='scrollbar-hidden h-full flex-1 max-w-fit flex items-center gap-2 w-full overflow-x-scroll scroll-smooth'
          ref={ref}
        >
          <span className='min-w-fit px-3 py-1 border-b border-black cursor-pointer text-sm h-full flex items-center justify-center'>
            For you
          </span>
          {topics.map((topic) => {
            return (
              <span
                className='text-gray-600 min-w-fit px-3 py-1 cursor-pointer text-sm h-full flex items-center justify-center'
                key={Math.random()}
              >
                {topic}
              </span>
            );
          })}
        </div>
        <div className='flex p-1 h-7 w-7 rounded-full items-center justify-center'>
          <button onClick={() => scroll(150)}>
            <ChevronRightIcon height={18} width={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TabBar;
