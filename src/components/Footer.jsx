import React from "react";

function Footer() {
  const links = [
    "Help",
    "Status",
    "Writers",
    "Blog",
    "Careers",
    "Privacy",
    "Terms",
    "About",
    "Text to speech",
  ];
  return (
    <div className='flex flex-col py-2'>
      <div className='border-t py-8 px-8 flex items-center justify-between flex-wrap'>
        {links.map((link, index) => {
          return (
            <a
              className='text-sm text-gray-600 hover:underline'
              key={index}
              href='/'
            >
              {link}
            </a>
          );
        })}
      </div>
      <div className='flex items-center py-1 justify-center'>
        <p className='text-sm text-gray-600'>2023 © medium.com</p>
      </div>
    </div>
  );
}

export default Footer;
