import React from 'react';
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { IconClock, IconUsers } from '@tabler/icons-react';

interface StationCardProps {
    title: string;
    description: string;
    operatingHours: string;
    chefCount: number;
    categories: string[];
  }
  
  const StationCard: React.FC<StationCardProps> = ({ title, description, operatingHours, chefCount, categories }) => {
    const DialogBody = () => (
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{description}</p>
        <ul>
          {categories.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <p>Operating Hours: {operatingHours}</p>
        <p>Chef Count: {chefCount}</p>
      </div>
    );
  
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden cursor-pointer">
            <CardHeader className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700">
              <div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="px-4 py-3">
              <ul className="pl-4 space-y-1">
                {categories.map((item, index) => (
                  <li key={index} className="list-none">{item}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700">
              <div className="flex items-center gap-2">
                <IconClock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-500 dark:text-gray-400">Open: {operatingHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <IconUsers className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-500 dark:text-gray-400">{chefCount} Chefs</span>
              </div>
            </CardFooter>
          </Card>
        </DialogTrigger>
        <DialogContent>
          <DialogBody />
        </DialogContent>
      </Dialog>
    );
  };
  
  export default StationCard;