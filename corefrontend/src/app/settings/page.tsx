"use client"
import Link from "next/link"
import  {UserButton, OrganizationSwitcher} from "@clerk/nextjs"
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import {
    IconToolsKitchen,
    IconAssembly,
    IconChefHat,
    IconUser,
} from '@tabler/icons-react';
import MLoader from "@/components/ui/multisteploader"
import React from "react";
import {AppSelectorDrop} from "@/components/app-selector";

export default function SettingsSelector() {
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
      <div className="flex flex-col h-screen">
          <header className="flex items-center justify-between px-4 py-2 bg-gray-100/40 text-gray-50">
              <div className="flex items-center">
                  <OrganizationSwitcher hidePersonal={true}/>
              </div>
              <div className="ml-auto flex items-center gap-4">
                  <AppSelectorDrop/>
                  <UserButton/>
              </div>
          </header>
          <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-6 overflow-auto">
              <div className="flex flex-col items-center justify-center h-full gap-8">
                  <div className="text-center space-y-2">
                      <h1 className="text-3xl font-bold">Settings Configuration</h1>
                      <p className="text-gray-500 max-w-md">Choose the settings you wish to adjust from the list
                          below.</p>
                  </div>
                  <div className="w-full max-w-md">
                      <div className="grid grid-cols-3 gap-6 mt-6">
                          <Link href="/settings/manage">
                              <div className="flex flex-col items-center gap-2 cursor-pointer group">
                                  <div
                                      className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                                      <IconAssembly className="w-8 h-8 text-gray-500 dark:text-gray-400"/>
                                  </div>
                                  <span
                                      className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">Manage</span>
                              </div>
                          </Link>
                          <Link href="/settings/kitchen">
                              <div className="flex flex-col items-center gap-2 cursor-pointer group">
                                  <div
                                      className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                                      <IconToolsKitchen className="w-8 h-8 text-gray-500 dark:text-gray-400"/>
                                  </div>
                                  <span
                                      className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">Kitchen</span>
                              </div>
                          </Link>
                          <Link href="/settings/order">
                              <div className="flex flex-col items-center gap-2 cursor-pointer group">
                                  <div
                                      className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                                      <IconChefHat className="w-8 h-8 text-gray-500 dark:text-gray-400"/>
                                  </div>
                                  <span
                                      className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">Order</span>
                              </div>
                          </Link>
                          <Link href="/settings/account">
                              <div className="flex flex-col items-center gap-2 cursor-pointer group">
                                  <div
                                      className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                                      <IconUser className="w-8 h-8 text-gray-500 dark:text-gray-400"/>
                                  </div>
                                  <span
                                      className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">Account</span>
                              </div>
                          </Link>
                      </div>
                  </div>
              </div>
          </main>
      </div>
  )
}