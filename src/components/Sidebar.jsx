import React, { useEffect, useState } from "react";
import topics from "../data/topics";
import Pill from "./Pill";
import { PlusIcon } from "@heroicons/react/24/solid";
function Sidebar() {
  const [recommended, setRecommended] = useState([]);
  useEffect(() => {
    setRecommended(topics.slice(0, 12));
  }, []);
  console.log(recommended);
  return (
    <aside className='sticky top-0 h-screen w-80 border-l px-6 py-4'>
      <div>
        <div>
          <h1 className='text-lg font-semibold'>Recommended topics</h1>
        </div>
        <div className='py-4 flex items-center gap-2 flex-wrap'>
          {recommended?.map((item, i) => {
            return <Pill text={item} key={i} />;
          })}
          <div className='py-4'>
            <a
              href='/'
              className='px-3 py-2 hover:bg-green-100 text-sm text-green-800 rounded-full'
            >
              See more topics
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='flex items-center gap-2 justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              fill-rule='evenodd'
              d='M6.77 3.082a47.472 47.472 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.67 45.67 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.468 47.468 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.672 45.672 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082Zm9.64 5.898l.84-.803V8h-2.902l-2.069 5.16L9.927 8H6.883v.177l.98 1.18a.406.406 0 0 1 .133.343v4.641a.534.534 0 0 1-.142.46l-1.104 1.34v.175h3.127v-.176l-1.103-1.338a.553.553 0 0 1-.152-.46v-4.014l2.745 5.989h.32l2.357-5.989v4.773c0 .127 0 .151-.084.235l-.848.823v.176h4.117v-.176l-.818-.804a.245.245 0 0 1-.094-.235V9.215a.245.245 0 0 1 .094-.235Z'
              clip-rule='evenodd'
            />
          </svg>{" "}
          <PlusIcon height={20} width={20} />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 128 128'
          >
            <path
              fill='#1d9bf0'
              d='M114.896 37.888c.078 1.129.078 2.257.078 3.396c0 34.7-26.417 74.72-74.72 74.72v-.02A74.343 74.343 0 0 1 0 104.21c2.075.25 4.16.375 6.25.38a52.732 52.732 0 0 0 32.615-11.263A26.294 26.294 0 0 1 14.331 75.09c3.937.76 7.993.603 11.857-.453c-12.252-2.475-21.066-13.239-21.066-25.74v-.333a26.094 26.094 0 0 0 11.919 3.287C5.5 44.139 1.945 28.788 8.913 16.787a74.535 74.535 0 0 0 54.122 27.435a26.277 26.277 0 0 1 7.598-25.09c10.577-9.943 27.212-9.433 37.154 1.139a52.696 52.696 0 0 0 16.677-6.376A26.359 26.359 0 0 1 112.92 28.42A52.227 52.227 0 0 0 128 24.285a53.35 53.35 0 0 1-13.104 13.603z'
            />
          </svg>
        </div>
        <div className='py-2 flex items-center flex-col gap-3'>
          <p className='text-center text-sm'>
            Discover Medium writers you already follow on Twitter.
          </p>
          <button className='px-4 py-2 flex items-center gap-2 border rounded-full'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 128 128'
            >
              <path
                fill='#1d9bf0'
                d='M114.896 37.888c.078 1.129.078 2.257.078 3.396c0 34.7-26.417 74.72-74.72 74.72v-.02A74.343 74.343 0 0 1 0 104.21c2.075.25 4.16.375 6.25.38a52.732 52.732 0 0 0 32.615-11.263A26.294 26.294 0 0 1 14.331 75.09c3.937.76 7.993.603 11.857-.453c-12.252-2.475-21.066-13.239-21.066-25.74v-.333a26.094 26.094 0 0 0 11.919 3.287C5.5 44.139 1.945 28.788 8.913 16.787a74.535 74.535 0 0 0 54.122 27.435a26.277 26.277 0 0 1 7.598-25.09c10.577-9.943 27.212-9.433 37.154 1.139a52.696 52.696 0 0 0 16.677-6.376A26.359 26.359 0 0 1 112.92 28.42A52.227 52.227 0 0 0 128 24.285a53.35 53.35 0 0 1-13.104 13.603z'
              />
            </svg>
            <span>Connect to Twitter</span>
          </button>
          <button className='text-sm text-gray-600 underline'>
            Maybe later
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
