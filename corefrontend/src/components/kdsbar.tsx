'use client'

import React, { useState, useEffect } from 'react';
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  IconApps,
  IconArrowBack,
  IconArrowBigRightLines, IconAssembly, IconChefHat, IconChevronDown,
  IconEye,
  IconFlame,
  IconListNumbers,
  IconMessageCircle, IconToolsKitchen
} from '@tabler/icons-react';
import  {UserButton} from "@clerk/nextjs"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import Link from "next/link";


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
          <IconFlame className="h-6 w-6 text-red-500" />
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
            <IconArrowBigRightLines className="h-4 w-4 mr-2" />
            Fast Lane
          </Button>
          <Button variant="outline">
            <IconArrowBack className="h-4 w-4 mr-2" />
            Recall
          </Button>
          <Button variant="outline">
            <IconListNumbers className="h-4 w-4 mr-2" />
            Active Items
          </Button>
          <Button variant="outline">
            <IconMessageCircle className="h-4 w-4 mr-2" />
            Messages
          </Button>
          <Button variant="outline">
            <IconEye className="h-4 w-4 mr-2" />
            Change View
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="ml-auto flex-1 sm:flex-initial">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <IconApps className="w-4 h-4"/>
                  <span>Apps</span>
                  <IconChevronDown className="w-4 h-4"/>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72">
                <Link href="/manage" passHref>
                  <DropdownMenuItem asChild>
                    <a className="flex items-center">
                      <IconAssembly className="w-4 h-4 mr-2"/>
                      Manage
                    </a>
                  </DropdownMenuItem>
                </Link>
                <Link href="/kitchen" passHref>
                  <DropdownMenuItem asChild>
                    <a className="flex items-center">
                      <IconToolsKitchen className="w-4 h-4 mr-2"/>
                      Kitchen
                    </a>
                  </DropdownMenuItem>
                </Link>
                <Link href="/order" passHref>
                  <DropdownMenuItem asChild>
                    <a className="flex items-center">
                      <IconChefHat className="w-4 h-4 mr-2"/>
                      Order
                    </a>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <UserButton/>
        </div>
      </div>
    </div>
  )
}