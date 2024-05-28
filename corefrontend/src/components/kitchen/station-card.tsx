import React from 'react';
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Dialog, DialogTrigger, DialogContent } from "@/components/ui";
import { IconClock, IconUsers } from '@tabler/icons-react';

interface StationCardProps {
  title: string;
  description: string;
  operatingHours: string;
  chefCount: number;
  categories: string[];  // Array of categories to display in the card
}

const StationCard: React.FC<StationCardProps> = ({ title, description, operatingHours, chefCount, categories }) => {
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
              <span className="text-sm text-gray-500 dark:text-gray-400">{operatingHours}</span>
            </div>
            <div className="flex items-center gap-2">
              <IconUsers className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">{chefCount} Chefs</span>
            </div>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent />
    </Dialog>
  );
};

export default StationCard;