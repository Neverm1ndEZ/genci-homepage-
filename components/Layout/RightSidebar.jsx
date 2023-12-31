import RightCalendar from '../RightCalendar/RightCalendar';
import Badges from '../Badges/Badges';
import CourseCompletion from '../CourseCompletion/CourseCompletion';
import ProfileNotificationIcon from '../ProfileNotificationIcon/ProfileNotificationIcon';

const RightSidebar = () => {
  return (
    <div className="bg-gray-900 lg:w-80 px-1 fixed right-0 top-0 z-10 h-screen">
      <ProfileNotificationIcon />
      <RightCalendar />
      <Badges />
      <CourseCompletion />
    </div>
  );
};

export default RightSidebar;
