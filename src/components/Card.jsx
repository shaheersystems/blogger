import React from "react";

function Card({ title, body }) {
  return (
    <div className='p-3 border flex flex-col cursor-pointer justify-between w-80 h-64 transition-all hover:shadow-[5px_5px_0px_0px_black]'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-xl font-serif'>{title}</h1>
        <p>{body}</p>
      </div>
      <div className='py-2'>
        <a
          href='/'
          className='px-3 py-2 hover:bg-green-100 text-sm text-green-800 rounded-full'
        >
          Start your journey now
        </a>
      </div>
    </div>
  );
}

export default Card;
