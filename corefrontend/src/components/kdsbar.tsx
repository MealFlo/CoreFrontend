'use client'

import React, { useState, useEffect } from 'react';
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { IconArrowBack } from '@tabler/icons-react';
import  {UserButton} from "@clerk/nextjs"


export function KDSBar() {

  const [currentTime, setCurrentTime] = useState('');

  // Method to update the current time
  const updateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert hours from 24-hour to 12-hour format
    hours = hours % 12;
    // The hour '0' should be '12'
    hours = hours ? hours : 12;
    hours = String(hours).padStart(2, '0') as unknown as number;
    
    setCurrentTime(`${hours}:${minutes}:${seconds} ${ampm}`);
  };

  // Effect to set the interval for updating the time
  useEffect(() => {
    updateTime(); // Initialize with the current time
    const intervalId = setInterval(updateTime, 1000); // Update time every second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div key="1" className="p-4 grid grid-cols-5 gap-4">
      <div className="col-span-5 flex justify-between items-center bg-white shadow rounded-lg p-4">
        <div className="flex items-center space-x-4">
          <FlameIcon className="h-6 w-6 text-red-500" />
          <span className="text-lg font-semibold">Chilli&apos;s</span>
          <Select defaultValue="kitchen">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kitchen">Kitchen</SelectItem>
              <SelectItem value="bar">Bar</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-2xl font-bold text-gray-800">{currentTime}</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline">
            <FastForwardIcon className="h-4 w-4 mr-2" />
            Fast Lane
          </Button>
          <Button variant="outline">
            <IconArrowBack className="h-4 w-4 mr-2" />
            Recall
          </Button>
          <Button variant="outline">
            <ListIcon className="h-4 w-4 mr-2" />
            Active Items
          </Button>
          <Button variant="outline">
            <MessageCircleIcon className="h-4 w-4 mr-2" />
            Messages
          </Button>
          <Button variant="outline">
            <ViewIcon className="h-4 w-4 mr-2" />
            Change View
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <UserButton/>
        </div>
      </div>
    </div>
  )
}

function FastForwardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 19 22 12 13 5 13 19" />
      <polygon points="2 19 11 12 2 5 2 19" />
    </svg>
  )
}


function FlameIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}


function ListIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}




function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  )
}


function ViewIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  )
}
