import React from 'react';
import Image from 'next/image';
import Trophy from '../../public/icon_trophy.svg';
import FirstPlace from '../../public/FirstPlace.svg';
import SecondPlace from '../../public/SecondPlace.svg';
import Message from '../../public/Vector.svg';

export default function Leaderboard() {
  return (
    <div>
      <div className="flex flex-row my-5 justify-evenly gap-10">
        <div className="max-w-sm rounded-2xl my-3 overflow-hidden shadow-lg shadow-slate-500 dark:shadow-none dark:bg-[#0D0D0D] px-6 py-4">
          <h1 className="text-sm mb-2 font-bold font-sans">
            Your Social Impact
          </h1>
          <div className="flex flex-row bg-slate-200 dark:bg-[#1C1C1C] py-3 pr-5 pl-3 gap-5 rounded items-center mb-5">
            <Image src={Trophy} alt="Trophy Icon" />
            <div className="">
              <p className="text-sm">Total Contribution</p>
              <p className="text-[#A1A1A1] font-light text-sm">4000</p>
            </div>
          </div>
          <div className="flex flex-row bg-slate-200 dark:bg-[#1C1C1C] py-3 pr-5 pl-3 gap-5 rounded items-center mb-5">
            <Image src={Message} alt="Trophy Icon" />
            <div className="">
              <p className="text-sm">This Month Target</p>
              <p className="text-[#A1A1A1] font-light text-sm">5000</p>
            </div>
          </div>
          <div className="flex flex-row gap-x-10 px-5">
            <div>
              <p className="text-xs">Housing</p>
              <p className="text-base text-[#8E5151]">$250.00</p>
              <p className="text-xs">15%</p>
            </div>
            <div>
              <p className="text-xs">Entertainment</p>
              <p className="text-base text-[#7BA178]">$80.00</p>
              <p className="text-xs">15%</p>
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded-2xl my-3 overflow-hidden shadow-lg shadow-slate-500 dark:shadow-none dark:bg-[#0D0D0D] px-6 py-4">
          <h1 className="text-sm mb-2 font-bold font-sans">
            Top Social Impacters
          </h1>
          <div className="flex flex-row bg-[#B4843E] py-3 pr-5 pl-3 gap-5 rounded-[1.25rem] items-center mb-5">
            <div className="bg-[#19E742] h-[2.25rem] p-1.5 w-[2.25rem] text-black rounded-full text-center">
              JA
            </div>
            <div>
              <p className="text-[#333] text-sm font-bold">Joshua Ashiru</p>
              <p className="text-[#333] text-sm font-bold">9.6/10 points</p>
            </div>
            <Image src={FirstPlace} alt="Trophy Icon" />
          </div>
          <div className="flex flex-row bg-[#8B8B8B] py-3 pr-5 pl-3 gap-5 rounded-[1.25rem] items-center mb-5">
            <div className="bg-[#1A85FF] h-[2.25rem] p-1.5 w-[2.25rem] text-black rounded-full text-center">
              AA
            </div>
            <div>
              <p className="text-[#333] text-sm font-bold">Adeola Ayo</p>
              <p className="text-[#333] text-sm font-bold">9/10 points</p>
            </div>
            <Image src={SecondPlace} alt="Trophy Icon" />
          </div>
          <div className="flex flex-row bg-[#FFAE67] py-3 pr-5 pl-3 gap-5 rounded-[1.25rem] items-center mb-5">
            <div className="bg-[#FF3694] h-[2.25rem] p-1.5 w-[2.25rem] text-black rounded-full text-center">
              AA
            </div>
            <div>
              <p className="text-[#333] text-sm font-bold">Olawuyi Tobi</p>
              <p className="text-[#333] text-sm font-bold">8.5/10 points</p>
            </div>
            <Image src={SecondPlace} alt="Trophy Icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
