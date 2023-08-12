import React from 'react';

const Badges = () => {
  return (
    <div className="w-full h-fit rounded-md p-4">
      <p className="pb-2 text-xl font-semibold font-sans text-white">
        Achievements
      </p>
      <div className="w-full text-white flex justify-center py-2  gap-3">

          <div className="rounded-full h-14 hover:cursor-pointer hover:animate-pulse hover:scale-[120%] duration-300 hover:hue-rotate-15 hover:rotate-90 hover:outline hover:outline-white transition-all  w-14  bg-gradient-to-tr from-blue-600 to-blue-800 shadow-md text-white flex justify-center items-center ">
            1
         </div>
        <div className="rounded-full h-14 hover:cursor-pointer hover:animate-pulse hover:scale-[120%] duration-300 hover:hue-rotate-15 hover:rotate-90 hover:outline hover:outline-white transition-all  w-14  bg-gradient-to-tr from-pink-300 to-pink-500 shadow-md text-white flex justify-center items-center">
            2
         </div>
         <div className="rounded-full h-14 hover:cursor-pointer hover:animate-pulse hover:scale-[120%] duration-300 hover:hue-rotate-15 hover:rotate-90 hover:outline hover:outline-white transition-all  w-14   bg-gradient-to-tr from-red-600 to-red-800 shadow-md text-white flex justify-center items-center">
            3
         </div>
         <div className="rounded-full h-14 hover:cursor-pointer hover:animate-pulse hover:scale-[120%] duration-300 hover:hue-rotate-15 hover:rotate-90 hover:outline hover:outline-white transition-all  w-14   bg-gradient-to-tr from-purple-600 to-purple-800 shadow-md text-white flex justify-center items-center">
            4
          </div>

      </div>
    </div>
  );
};

export default Badges;
