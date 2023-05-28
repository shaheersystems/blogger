import React from "react";

function Pill({ text }) {
  return (
    <span className='px-3 rounded-full py-1 text-sm cursor-pointer bg-gray-100 hover:bg-gray-200'>
      {text}
    </span>
  );
}

export default Pill;
