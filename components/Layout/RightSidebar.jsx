import Image from 'next/image';
import Notification from '../../public/Notification.svg';
import Avatar from '../../public/Allura Avatar.png';

const RightSidebar = () => {
  return (
    <div className="bg-gray-800 lg:w-80 fixed right-0 top-0 z-10 h-screen">
      <div className="flex flex-row justify-around items-center my-4">
        <div>
          <Image src={Notification} alt="Bell Icon" />
        </div>
        <div>
          <div className="flex flex-row bg-slate-200 dark:bg-[#141414] px-1 py-1 gap-5 rounded-xl items-center">
            <div className="bg-blue-700 rounded-xl">
              <Image src={Avatar} alt="Trophy Icon" />
            </div>
            <div className="">
              <select className="text-sm rounded-lg bg-slate-200 dark:bg-[#1C1C1C] text-black dark:text-white block w-full p-2.5">
                <option value="1" className="">
                  Adeola Ayo
                </option>
                <option value="2" className="">
                  Something
                </option>
                <option value="3" className="">
                  Anything
                </option>
                <option value="4" className="">
                  Nothing
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
