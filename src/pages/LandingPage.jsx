import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Card from "../components/Card";
function LandingPage() {
  const cards = [
    {
      title: "Mind Oasis: Explore, Inspire",
      body: "Embark on a journey of imaginative exploration through our captivating blog. Discover captivating stories and thought-provoking discussions that nourish personal growth. Join our community of like-minded individuals.",
    },
    {
      title: "Creative Haven: Inspire, Create",
      body: "Unleash the artist within and immerse yourself in our creative haven. Discover a world of artistic inspiration, expert tips, and captivating stories that will fuel your imagination and ignite your passion for art.",
    },
    {
      title: "Holistic Oasis: Nurture, Thrive",
      body: "Step into our sanctuary of wellness and embark on a transformative journey. Delve into a wealth of holistic practices, self-care tips, and empowering stories that will nourish your mind, rejuvenate your body, and uplift your soul.",
    },
  ];
  return (
    <div className='flex-1 px-6 py-2'>
      <div className='flex flex-col gap-6 text-center min-h-[90vh] w-full items-center justify-center'>
        <h1 className='text-9xl font-serif text-[#222222]'>Stay curious.</h1>
        <p className='text-2xl text-gray-600'>
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <div>
          <button className='p-0 flex items-center gap-2 text-2xl group px-8 py-1 bg-[#222222] hover:bg-black rounded-full text-white'>
            <span>Start reading</span>
            <ArrowLongRightIcon
              className='group-hover:translate-x-3 my-2 mt-4  transition-all'
              height={25}
              width={25}
            />
          </button>
        </div>
      </div>
      <div className='flex items-center justify-center flex-col gap-6'>
        <h1 className='text-4xl font-serif text-center'>
          Discover a World of Inspiration <br /> and Growth
        </h1>
        <div className='flex items-center gap-4 flex-wrap py-3'>
          {cards.map((card) => {
            return <Card {...card} />;
          })}
        </div>
      </div>
      <div className='py-6'>
        <h1 className='text-4xl font-serif text-center'>
          Discover, share and explore the <br /> vast treasure of knowledge
        </h1>
      </div>
      <div className='flex items-center justify-center gap-6 py-3'>
        <div className='p-3 flex flex-col items-center gap-2'>
          <h1 className='text-5xl font-serif'>100M+</h1>
          <p className='text-2xl'>Stories</p>
        </div>
        <div className='p-3 flex flex-col items-center gap-2'>
          <h1 className='text-5xl font-serif'>30M+</h1>
          <p className='text-2xl'>Readers</p>
        </div>
        <div className='p-3 flex flex-col items-center gap-2'>
          <h1 className='text-5xl font-serif'>100k+</h1>
          <p className='text-2xl'>Certified experts</p>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
