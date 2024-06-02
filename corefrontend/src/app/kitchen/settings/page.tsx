'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { IconSettings, IconBuildingStore, IconLayout, IconPrinter, IconClock, IconChefHat, IconPlus, IconMenu2, IconX, IconArrowLeft, IconLayoutGrid, IconLayoutColumns } from '@tabler/icons-react';
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { DialogTrigger, DialogContent, Dialog } from "@/components/ui/dialog"
import StationCard from "@/components/kitchen/station-card"

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
          <StationCard
            title="Bakery Station"
            description="Fresh Pastries and Breads"
            operatingHours="6:00 AM - 10:00 PM"
            chefCount={4}
            categories={['Pastries', 'Cakes', 'Bread']}
          />
          <StationCard
            title="Grill Station"
            description="Sizzling Steaks and Burgers"
            operatingHours="10:00 AM - 11:00 PM"
            chefCount={3}
            categories={['Steaks', 'Burgers', 'Barbecue']}
          />
          <StationCard
            title="Salad Station"
            description="Fresh Greens and Dressings"
            operatingHours="8:00 AM - 8:00 PM"
            chefCount={2}
            categories={['Caesar Salad', 'Greek Salad', 'Garden Salad']}
          />
          <StationCard
            title="Sushi Station"
            description="Traditional and Fusion Rolls"
            operatingHours="11:00 AM - 9:00 PM"
            chefCount={2}
            categories={['Nigiri', 'California Roll', 'Spicy Tuna Roll']}
          />
          <StationCard
            title="Pasta Station"
            description="Italian Classics and Modern Twists"
            operatingHours="10:00 AM - 10:00 PM"
            chefCount={3}
            categories={['Spaghetti Carbonara', 'Fettuccine Alfredo', 'Penne alla Vodka']}
          />
          <StationCard
            title="Dessert Station"
            description="Sweet Treats and Confections"
            operatingHours="12:00 PM - 11:00 PM"
            chefCount={2}
            categories={['Cupcakes', 'Cookies', 'Brownies']}
          />
          <StationCard
            title="Bar Station"
            description="Cocktails, Spirits, and Brews"
            operatingHours="4:00 PM - 2:00 AM"
            chefCount={2}
            categories={['Margarita', 'Old Fashioned', 'Martini']}
          />
          </div>
          </div>
        )}
        {activeView === 'layout' && (
          <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-6">Layout Settings</h1>
          <Card>
            <CardHeader>
              <CardTitle>Station</CardTitle>
              <CardDescription>Choose the station to change settings for.</CardDescription>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select station" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="station1">Bakery Station</SelectItem>
                  <SelectItem value="station2">Grill Station</SelectItem>
                  <SelectItem value="station3">Salad Station</SelectItem>
                  <SelectItem value="station4">Sushi Station</SelectItem>
                  <SelectItem value="station5">Pasta Station</SelectItem>
                  <SelectItem value="station6">Dessert Station</SelectItem>
                  <SelectItem value="station7">Bar Station</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Text Size</CardTitle>
                <CardDescription>Choose the text size for the station.</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="medium">
                  <div className="grid grid-cols-3 gap-4">
                    <Label className="flex items-center gap-2 cursor-pointer" htmlFor="small">
                      <RadioGroupItem id="small" value="small" />
                      <span className="text-sm">Small</span>
                    </Label>
                    <Label className="flex items-center gap-2 cursor-pointer" htmlFor="medium">
                      <RadioGroupItem id="medium" value="medium" />
                      <span className="text-base">Medium</span>
                    </Label>
                    <Label className="flex items-center gap-2 cursor-pointer" htmlFor="large">
                      <RadioGroupItem id="large" value="large" />
                      <span className="text-lg">Large</span>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Tickets</CardTitle>
                <CardDescription>Set the number of order tickets per page.</CardDescription>
              </CardHeader>
              <CardContent>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select number" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Layout</CardTitle>
                <CardDescription>Choose the layout for order tickets.</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="grid">
                  <div className="flex items-center gap-16">
                    <Label className="flex items-center gap-2 cursor-pointer" htmlFor="grid">
                      <RadioGroupItem id="grid" value="grid" />
                      <IconLayoutGrid className="w-5 h-5" />
                      <span>Grid</span>
                    </Label>
                    <Label className="flex items-center gap-2 cursor-pointer" htmlFor="column">
                      <RadioGroupItem id="column" value="column" />
                      <IconLayoutColumns className="w-5 h-5" />
                      <span>Column</span>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <Button>Save Changes</Button>
          </div>
        </div>
        )}
        {activeView === 'timers' && (
          <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-6">Timer Settings</h1>
          <Card>
            <CardHeader>
              <CardTitle>Station</CardTitle>
              <CardDescription>Choose the station to change settings for.</CardDescription>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select station" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="station1">Bakery Station</SelectItem>
                  <SelectItem value="station2">Grill Station</SelectItem>
                  <SelectItem value="station3">Salad Station</SelectItem>
                  <SelectItem value="station4">Sushi Station</SelectItem>
                  <SelectItem value="station5">Pasta Station</SelectItem>
                  <SelectItem value="station6">Dessert Station</SelectItem>
                  <SelectItem value="station7">Bar Station</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          <Card className="mt-4">
          <CardHeader>
            <CardTitle>Yellow Order Alert</CardTitle>
            <CardDescription>Configure settings for yellow order alerts.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="yellowMinutes">Minutes before order turns yellow</Label>
                <Input id="yellowMinutes" placeholder="Enter minutes" type="number" />
              </div>
              <div>
                <Label htmlFor="yellowSound">Play sound when order turns yellow</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sound" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="beep">Beep</SelectItem>
                    <SelectItem value="chime">Chime</SelectItem>
                    <SelectItem value="alarm">Alarm</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Red Order Alert</CardTitle>
            <CardDescription>Configure settings for red order alerts.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="redMinutes">Minutes before order turns red</Label>
                <Input id="redMinutes" placeholder="Enter minutes" type="number" />
              </div>
              <div>
                <Label htmlFor="redSound">Play sound when order turns red</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sound" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="beep">Beep</SelectItem>
                    <SelectItem value="chime">Chime</SelectItem>
                    <SelectItem value="alarm">Alarm</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>New Order Alert</CardTitle>
            <CardDescription>Configure settings for new order alerts.</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="newOrderSound">Play sound when new order is created</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select sound" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="beep">Beep</SelectItem>
                  <SelectItem value="chime">Chime</SelectItem>
                  <SelectItem value="alarm">Alarm</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
          <div className="mt-6">
            <Button>Save Changes</Button>
          </div>
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