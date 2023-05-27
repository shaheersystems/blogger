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
  );
}

export default Footer;
