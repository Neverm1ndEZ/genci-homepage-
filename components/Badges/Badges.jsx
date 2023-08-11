import React from 'react';

const Badges = () => {
  return (
    <div className="w-full h-fit bg-gray-900 rounded-md p-4">
      <p className="p-2 text-xl font-semibold font-sans text-white">
        Achievements
      </p>
      <div className="w-full text-white flex justify-center p-2 gap-3">
        <div className="rounded-full shadow-md bg-white bg-opacity-10 h-14 w-14 flex justify-center items-center transform transition-transform hover:scale-105 hover:rotate-3">
          <div className="rounded-full h-12 w-12 bg-gradient-to-tr from-blue-600 to-blue-800 shadow-md text-white flex justify-center items-center">
            1
          </div>
        </div>
        <div className="rounded-full shadow-md bg-white bg-opacity-10 h-14 w-14 flex justify-center items-center transform transition-transform hover:scale-105 hover:rotate-3">
          <div className="rounded-full h-12 w-12 bg-gradient-to-tr from-pink-600 to-pink-800 shadow-md text-white flex justify-center items-center">
            2
          </div>
        </div>
        <div className="rounded-full shadow-md bg-white bg-opacity-10 h-14 w-14 flex justify-center items-center transform transition-transform hover:scale-105 hover:rotate-3">
          <div className="rounded-full h-12 w-12 bg-gradient-to-tr from-red-600 to-red-800 shadow-md text-white flex justify-center items-center">
            3
          </div>
        </div>
        <div className="rounded-full shadow-md bg-white bg-opacity-10 h-14 w-14 flex justify-center items-center transform transition-transform hover:scale-105 hover:rotate-3">
          <div className="rounded-full h-12 w-12 bg-gradient-to-tr from-purple-600 to-purple-800 shadow-md text-white flex justify-center items-center">
            4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badges;
