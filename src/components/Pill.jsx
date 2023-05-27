import React from "react";

function Pill({ text }) {
  return (
    <span className='px-3 rounded-full py-1 text-sm font-semibold cursor-pointer bg-gray-200 hover:bg-gray-300'>
      {text}
    </span>
  );
}

export default Pill;
