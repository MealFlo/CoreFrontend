'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { IconSettings, IconBuildingStore, IconLayout, IconPrinter, IconClock, IconChefHat, IconPlus, IconUsers, IconMenu2, IconX, IconArrowLeft } from '@tabler/icons-react';
import { DialogTrigger, DialogContent, Dialog } from "@/components/ui/dialog"

/**
 * Renders the Kitchen Settings page.
 * 
 * @returns The JSX element representing the Kitchen Settings page.
 */

export default function KitchenSettings() {
  const [activeView, setActiveView] = useState('stations');
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Tailwind's 'md' breakpoint
        setIsNavOpen(true);
      } else {
        setIsNavOpen(false);
      }
    };

    // Set the sidebar state based on initial window size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div key="1" className="flex min-h-screen w-full relative">
      {isNavOpen && (
        <div className="bg-gray-100 dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 w-64 p-6 flex flex-col gap-6 fixed h-full z-10">
        <div className="flex items-center justify-between">
          <Link
            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 font-medium"
            href="/kitchen"
          >
            <IconArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <button 
            onClick={() => setIsNavOpen(false)} 
            aria-expanded={isNavOpen} 
            className="md:hidden">
            <IconX className="w-6 h-6" />
          </button>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <IconSettings className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            <h2 className="text-lg font-semibold">Kitchen Settings</h2>
          </div>
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
      )}
      {!isNavOpen && (
        <button 
          onClick={() => setIsNavOpen(true)} 
          aria-expanded={isNavOpen} 
          className={`md:hidden absolute top-4 left-4 z-20 ${isNavOpen ? 'hidden' : 'block'} bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg`}>
          <IconMenu2 className="w-6 h-6" />
        </button>
      )}
      <div className="flex-1 p-8 pt-16">
        <div className="max-w-3xl mx-auto">
        {activeView === 'stations' && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Station Settings</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Dialog>
            <DialogTrigger asChild>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer">
                <IconPlus className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <p className="text-sm text-gray-500 dark:text-gray-400">Create a new kitchen</p>
              </div>
            </DialogTrigger>
            <DialogContent />
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden cursor-pointer">
                <CardHeader className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700">
                  <div>
                    <CardTitle>Bakery Station</CardTitle>
                    <CardDescription>Pastries, Cakes, Bread</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="px-4 py-3">
                  <ul className="pl-4 space-y-1">
                    <li className="list-none">Pastries</li>
                    <li className="list-none">Cakes</li>
                    <li className="list-none">Bread</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700">
                  <div className="flex items-center gap-2">
                    <IconClock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Open: 6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconUsers className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">4 Chefs</span>
                  </div>
                </CardFooter>
              </Card>
            </DialogTrigger>
            <DialogContent />
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden cursor-pointer">
                <CardHeader className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700">
                  <div>
                    <CardTitle>Grill Station</CardTitle>
                    <CardDescription>Steaks, Burgers, Barbecue</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="px-4 py-3">
                  <ul className="pl-4 space-y-1">
                    <li className="list-none">Steaks</li>
                    <li className="list-none">Burgers</li>
                    <li className="list-none">Barbecue</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700">
                  <div className="flex items-center gap-2">
                    <IconClock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Open: 10:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconUsers className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">3 Chefs</span>
                  </div>
                </CardFooter>
              </Card>
            </DialogTrigger>
            <DialogContent />
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden cursor-pointer">
                <CardHeader className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700">
                  <div>
                    <CardTitle>Salad Station</CardTitle>
                    <CardDescription>Fresh Greens and Dressings</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="px-4 py-3">
                  <ul className="pl-4 space-y-1">
                    <li className="list-none">Caesar Salad</li>
                    <li className="list-none">Greek Salad</li>
                    <li className="list-none">Garden Salad</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700">
                  <div className="flex items-center gap-2">
                    <IconClock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Open: 8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconUsers className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">2 Chefs</span>
                  </div>
                </CardFooter>
              </Card>
            </DialogTrigger>
            <DialogContent />
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden cursor-pointer">
                <CardHeader className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700">
                  <div>
                    <CardTitle>Sushi Station</CardTitle>
                    <CardDescription>Traditional and Fusion Rolls</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="px-4 py-3">
                  <ul className="pl-4 space-y-1">
                    <li className="list-none">Nigiri</li>
                    <li className="list-none">California Roll</li>
                    <li className="list-none">Spicy Tuna Roll</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700">
                  <div className="flex items-center gap-2">
                    <IconClock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Open: 11:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconUsers className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">2 Chefs</span>
                  </div>
                </CardFooter>
              </Card>
            </DialogTrigger>
            <DialogContent />
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden cursor-pointer">
                <CardHeader className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700">
                  <div>
                    <CardTitle>Pasta Station</CardTitle>
                    <CardDescription>Italian Classics and Modern Twists</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="px-4 py-3">
                  <ul className="pl-4 space-y-1">
                    <li className="list-none">Spaghetti Carbonara</li>
                    <li className="list-none">Fettuccine Alfredo</li>
                    <li className="list-none">Penne alla Vodka</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700">
                  <div className="flex items-center gap-2">
                    <IconClock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Open: 10:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconUsers className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">3 Chefs</span>
                  </div>
                </CardFooter>
              </Card>
            </DialogTrigger>
            <DialogContent />
          </Dialog>
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