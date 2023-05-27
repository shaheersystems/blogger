import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  console.log(location);
  return (
    <div className='flex px-6 py-2 items-center border-b justify-between'>
      <div className='flex items-center gap-10'>
        <div>
          <a href='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='50'
              height='50'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                fill-rule='evenodd'
                d='M6.77 3.082a47.472 47.472 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.67 45.67 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.468 47.468 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.672 45.672 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082Zm9.64 5.898l.84-.803V8h-2.902l-2.069 5.16L9.927 8H6.883v.177l.98 1.18a.406.406 0 0 1 .133.343v4.641a.534.534 0 0 1-.142.46l-1.104 1.34v.175h3.127v-.176l-1.103-1.338a.553.553 0 0 1-.152-.46v-4.014l2.745 5.989h.32l2.357-5.989v4.773c0 .127 0 .151-.084.235l-.848.823v.176h4.117v-.176l-.818-.804a.245.245 0 0 1-.094-.235V9.215a.245.245 0 0 1 .094-.235Z'
                clip-rule='evenodd'
              />
            </svg>
          </a>
        </div>
        {!["/", "/Team"].includes(location.pathname) ? (
          <div className='flex items-center px-4 py-2 rounded-full bg-gray-100 gap-3'>
            <label htmlFor='search-query'>
              <MagnifyingGlassIcon height={18} width={18} color='gray' />
            </label>
            <input
              id='search-query'
              type='text'
              className='outline-none bg-gray-100 w-72 text-sm'
              placeholder='Search stories...'
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className='flex items-center gap-2'>
        <a href='/blogs' className='px-4 py-1 hover:underline rounded'>
          Blogs
        </a>
        <a href='/Team' className='px-4 py-1 hover:underline rounded'>
          Team
        </a>
        <a
          href='https://github.com/shaheersystems/blogger'
          className='flex items-center gap-2 px-4 py-1 bg-black hover:bg-gray-800 text-white rounded-full'
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Header;
