'use client'
import React, { useState } from 'react';
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { IconSettings, IconBuildingStore, IconLayout, IconPrinter, IconClock, IconChefHat } from '@tabler/icons-react';

export default function KitchenSettings() {
  const [activeView, setActiveView] = useState('stations');
  return (
    <div key="1" className="flex min-h-screen w-full">
      <div className="bg-gray-100 dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 w-64 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <IconSettings className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          <h2 className="text-lg font-semibold">Kitchen Settings</h2>
        </div>
        <nav className="flex flex-col gap-2">
          <Link
            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 font-medium"
            href=""
            onClick={() => setActiveView('stations')}
          >
            <IconBuildingStore className="w-5 h-5" />
            Stations
          </Link>
          <Link
            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 font-medium"
            href=""
            onClick={() => setActiveView('layout')}
          >
            <IconLayout className="w-5 h-5" />
            Layout
          </Link>
          <Link
            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 font-medium"
            href=""
            onClick={() => setActiveView('timers')}
          >
            <IconClock className="w-5 h-5" />
            Timers
          </Link>
          <Link
            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 font-medium"
            href=""
            onClick={() => setActiveView('printers')}
          >
            <IconPrinter className="w-5 h-5" />
            Printers
          </Link>
          <Link
            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 font-medium"
            href=""
            onClick={() => setActiveView('orders')}
          >
            <IconChefHat className="w-5 h-5" />
            Orders
          </Link>
      
        </nav>
      </div>
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
        {activeView === 'stations' && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Station Settings</h1>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>Manage your account settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="you@example.com" type="email" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" placeholder="••••••••" type="password" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Customize your app preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-medium">Dark Mode</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Switch between light and dark mode</p>
                      </div>
                      <Switch id="dark-mode" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-medium">Language</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Select your preferred language</p>
                      </div>
                      <Select defaultValue="en">
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="de">Deutsch</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
        {activeView === 'layout' && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Layout Settings</h1>
            {/* Components for layout settings */}
          </div>
        )}
        {activeView === 'timers' && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Timers Settings</h1>
            {/* Components for timers settings */}
          </div>
        )}
        {activeView === 'printers' && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Printer Settings</h1>
            {/* Components for layout settings */}
          </div>
        )}
        {activeView === 'orders' && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Order Settings</h1>
            {/* Components for layout settings */}
          </div>
        )}
        </div>
      </div>
    </div>
  )
}