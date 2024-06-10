import React from 'react';
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import FloorPlanner from "@/components/manage/floor/floor-planner";

interface FloorPlanCardProps {
  title: string;
  numGuests: number;
  numTables: number;
  accessibleSeating: number;
  outdoorSeating: number;
  privateDining: number;
  restrooms: number;
}

export default function FloorPlanCard({
  title,
  numGuests,
  numTables,
  accessibleSeating,
  outdoorSeating,
  privateDining,
  restrooms,
}: FloorPlanCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="max-w-3xl">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>Capacity: {numGuests} Guests | {numTables} Tables</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-[3/2]">
              <img src="/placeholder.svg" alt="Main Floor Plan" className="object-contain" width={1200} height={800} />
              <div className="absolute top-0 left-0 w-full h-full grid grid-cols-5 grid-rows-4 gap-2 p-4">
                <div className="col-span-2 row-span-2 flex items-center justify-center rounded-md bg-gray-100 text-sm font-medium dark:bg-gray-800">
                  Main Entrance
                </div>
                <div className="col-span-1 row-span-1 flex items-center justify-center rounded-md bg-gray-100 text-xs font-medium dark:bg-gray-800">
                  Bar
                </div>
                <div className="col-span-2 row-span-1 flex items-center justify-center rounded-md bg-gray-100 text-xs font-medium dark:bg-gray-800">
                  Waiting Area
                </div>
                <div className="col-span-3 row-span-2 flex items-center justify-center rounded-md bg-gray-100 text-sm font-medium dark:bg-gray-800">
                  Dining Area
                </div>
                <div className="col-span-2 row-span-1 flex items-center justify-center rounded-md bg-gray-100 text-xs font-medium dark:bg-gray-800">
                  Kitchen
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Accessible Seating: {accessibleSeating === 0 ? 'None' : accessibleSeating}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Outdoor Seating: {outdoorSeating === 0 ? 'None' : outdoorSeating}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Private Dining: {privateDining === 0 ? 'None' : `${privateDining} Room${privateDining > 1 ? 's' : ''}`}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Restrooms: {restrooms === 0 ? 'None' : restrooms}
              </p>
            </div>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent customClass="p-2">
        <FloorPlanner />
      </DialogContent>
    </Dialog>
  );
}