import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import {
  ClipboardListIcon,
  GroupIcon,
  HomeIcon,
  LucideCalculator,
  LucideHelpCircle,
  LucideMailQuestion,
  Settings,
  User,
} from "lucide-react";


const Aside = ({collapseMenu}) => {
    

    

  return (
    <aside className={collapseMenu ? 'hidden' : "w-80 flex flex-col "}>
      <div className="flex gap-2 cursor-pointer mb-9 border-b-2
       border-b-black pb-2 w-80" >
        <HomeIcon /> <p>Home</p>
        
      </div>
      <div className="flex gap-2 cursor-pointer mb-9 border-b-2
       border-b-black pb-2 w-80">
        <User /> <p>User</p>
      </div>
      <div className="flex gap-2 cursor-pointer mb-9 border-b-2
       border-b-black pb-2 w-80">
        <GroupIcon /> <p>Groups</p>
      </div>
      <div className="flex gap-2 cursor-pointer mb-9 border-b-2
       border-b-black pb-2 w-80">
        <ClipboardListIcon /> <p>Trainings</p>
      </div>
      <div className="flex gap-2 cursor-pointer mb-9 border-b-2
       border-b-black pb-2 w-80">
        <LucideCalculator /> <p>Assessment</p>
      </div>
      <div className="flex gap-2 cursor-pointer mb-9 border-b-2
       border-b-black pb-2 w-80">
        <LucideMailQuestion /> <p>Question pool</p>
      </div>
      <div className="flex  gap-2 cursor-pointer mb-9 border-b-2
       border-b-black pb-2 w-80">
        <Settings />
        <Select className="outline-0">
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Settings" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel></SelectLabel>
              <SelectItem value="account">Account</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="review">Review</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-2 cursor-pointer mb-9 border-b-2
       border-b-black pb-2 w-80">
        <LucideHelpCircle /> <p>Help</p>
      </div>
    </aside>
  );
};

export default Aside;
