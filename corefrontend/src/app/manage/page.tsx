"use client"
import Link from "next/link"

import  {UserButton, OrganizationSwitcher} from "@clerk/nextjs"
import {IconHome, IconLayout, IconBook, IconPlus,} from "@tabler/icons-react";
import MLoader from "@/components/ui/multisteploader"
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import {AppSelectorDrop} from "@/components/app-selector";
import React, {useState} from "react";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import FloorPlanCard from "@/components/manage/floor/floor-plan-card";


export default function Dashboard() {
  const [activeView, setActiveView] = useState('home');
  const { user } = useUser();
  const router = useRouter();

  if (!user) {
    return <div><MLoader/></div>;
  }

  const isPartOfOrganization = user.organizationMemberships && user.organizationMemberships.length > 0;

  // Redirect if part of an organization
  if (!isPartOfOrganization) {
    router.push('/onboarding');
    return <div><MLoader/></div>;
  }
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40 p-6">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center">
            <OrganizationSwitcher
              hidePersonal={true}
            />
          </div>
          <div className="flex-1">
            <nav className="flex flex-col gap-2">
              <Link
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 font-medium"
                  href=""
                  onClick={() => setActiveView('home')}
              >
                <IconHome className="w-5 h-5"/>
                Home
              </Link>
              <Link
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 font-medium"
                  href=""
                  onClick={() => setActiveView('menu')}
              >
                <IconBook className="w-5 h-5"/>
                Menu
              </Link>
              <Link
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 font-medium"
                  href=""
                  onClick={() => setActiveView('floor')}
              >
                <IconLayout className="w-5 h-5"/>
                Floor
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <div className="flex-1">
            {activeView === 'home' && (
              <h1 className="font-semibold text-lg">Overview Dashboard</h1>
            )}
            {activeView === 'menu' && (
              <h1 className="font-semibold text-lg">Menu Configuration</h1>
            )}
            {activeView === 'floor' && (
              <h1 className="font-semibold text-lg">Floor Plan</h1>
            )}
          </div>
          <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <div className="ml-auto flex-1 sm:flex-initial">
              <AppSelectorDrop/>
            </div>
            <UserButton/>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {activeView === 'home' && (
              <div>tell me</div>
          )}
          {activeView === 'menu' && (
              <div>why</div>
          )}
          {activeView === 'floor' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div
                          className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer">
                        <IconPlus className="w-8 h-8 text-gray-500 dark:text-gray-400"/>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Add a new floor</p>
                      </div>
                    </DialogTrigger>
                    <DialogContent/>
                  </Dialog>
                  <FloorPlanCard
                    title="Atrium"
                    numGuests={120}
                    numTables={25}
                    accessibleSeating={12}
                    outdoorSeating={24}
                    privateDining={2}
                    restrooms={2}
                  />
                  <FloorPlanCard
                    title="Gallery"
                    numGuests={80}
                    numTables={15}
                    accessibleSeating={8}
                    outdoorSeating={16}
                    privateDining={0}
                    restrooms={1}
                  />
                  <FloorPlanCard
                    title="Mezzanine"
                    numGuests={50}
                    numTables={10}
                    accessibleSeating={5}
                    outdoorSeating={10}
                    privateDining={1}
                    restrooms={1}
                  />
                </div>
              </div>
          )}
        </main>
      </div>
    </div>
  )
}

