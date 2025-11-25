import React, { useState } from "react";
import OverviewTabs from "../components-for-page/OverviewTabs";
import {
  GraduationCap,
  UserCheck,
  UserCircle2,
  Users2,
  UserSquare,
} from "lucide-react";
import InstructorTrainings from "../components-for-page/InstructorTrainings";
import UpcomingEvents from "../components-for-page/UpcomingEvents";
import { Button } from "../ui/button";

const overviewDetails = [
  {
    id: 1,
    title: "Total Users",
    icon: <UserCircle2 />,
    count: 211,
    groupName: "Users",
  },
  {
    id: 2,
    title: "Active Users",
    icon: <UserCheck />,
    count: 44, // this value should be calculated from the database
    groupName: "Users",
  },
  {
    id: 3,
    title: "Total Groups",
    icon: <Users2 />,
    count: 9,
    groupName: "Groups",
  },
  {
    id: 4,
    title: "Total Trainers",
    icon: <GraduationCap />,
    count: 7,
    groupName: "Trainers",
  },
  {
    id: 5,
    title: "Total Trainings",
    icon: <UserSquare />,
    count: 37,
    groupName: "Trainings",
  },
];

const InstructorOverview = () => {
  const [instructorOverview, setInstructorOverview] = useState(null);
  const [seeMore, setSeeMore] = useState(false)
  const num = 0;
  const handleInstructorView = (num) => {
    setInstructorOverview(num);
  };
  return (
    <div className="flex flex-col h-min-screen ">
      <Button
        onMouseEnter={() => handleInstructorView(num+1)}
        className={
          instructorOverview === 1
            ? "bg-black text-white"
            : "bg-gray-200 text-gray-700 mb-3"
        }
      >
        Instructor Overview
      </Button>
      <div className={instructorOverview !== 1 ? "hidden":"flex flex-wrap gap-4 justify-between px-2 my-4"}>
        <OverviewTabs
          key={overviewDetails.id}
          overviewDetails={overviewDetails}
        />
      </div>
      
        <Button
          onMouseEnter={() => handleInstructorView(num + 2)}
          className={
            instructorOverview === 2
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-700  mb-3"
          }
        >
          Instructor Trainings
        </Button >
        <div className={instructorOverview !== 2 ? "hidden":"mt-3 px-1"}>
             <div className="flex">
            <h1 className='text-[13px] font-extrabold'>These are the number of trainings you are moderating</h1>
            <Button className='text-[10px] font-semibold bg-red-500' onClick={()=>setSeeMore(!seeMore)}>{seeMore ? "see less" : "see more"}</Button>
           </div>
        <div className={ seeMore ? "flex flex-wrap gap-2 justify-evenly px-3 my-4 h-[300px] overflow-y-scroll" : "flex flex-wrap gap-2 justify-evenly px-3 my-4 h-[300px] overflow-hidden"}>
          
          <InstructorTrainings />
        </div>
        </div>
      
      
        <Button
          onMouseEnter={() => handleInstructorView(num + 3)}
          className={
            instructorOverview === 3
              ? "bg-purple-500 text-white"
              : "bg-gray-200 text-gray-700  mb-3"
          }
        >
          Upcoming Events
        </Button>
        <div className={instructorOverview !== 3 ? "hidden":"flex flex-wrap gap-2 justify-between px-3 my-4"}>
          <UpcomingEvents />
          <UpcomingEvents />
          <UpcomingEvents />
          <UpcomingEvents />

        </div>
    
    </div>
  );
};

export default InstructorOverview;
