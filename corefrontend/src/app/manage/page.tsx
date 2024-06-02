"use client"
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

import  {UserButton, OrganizationSwitcher} from "@clerk/nextjs"
import {
  IconApps, IconAssembly,
  IconCalendar, IconChartBar,
  IconChartLine, IconChefHat, IconChevronDown, IconCurrencyDollar, IconMoodSmile,
  IconPackage,
  IconShoppingCart, IconToolsKitchen,
  IconUsers,
} from "@tabler/icons-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import MLoader from "@/components/multisteploader"
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';


export default function Dashboard() {
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
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <OrganizationSwitcher
              hidePersonal={true}
            />
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <IconShoppingCart className="h-4 w-4" />
                Orders
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <IconPackage className="h-4 w-4" />
                Inventory
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <IconUsers className="h-4 w-4" />
                Customers
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <IconChartLine className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <div className="flex-1">
            <h1 className="font-semibold text-lg">Restaurant Dashboard</h1>
          </div>
          <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <div className="ml-auto flex-1 sm:flex-initial">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <IconApps className="w-4 h-4" />
                    <span>Apps</span>
                    <IconChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-72">
                  <Link href="/manage" passHref>
                    <DropdownMenuItem asChild>
                      <a className="flex items-center">
                        <IconAssembly className="w-4 h-4 mr-2" />
                        Manage
                      </a>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/kitchen" passHref>
                    <DropdownMenuItem asChild>
                      <a className="flex items-center">
                        <IconToolsKitchen className="w-4 h-4 mr-2" />
                        Kitchen
                      </a>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/order" passHref>
                    <DropdownMenuItem asChild>
                      <a className="flex items-center">
                        <IconChefHat className="w-4 h-4 mr-2" />
                        Order
                      </a>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <UserButton/>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <IconCurrencyDollar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$245,231.89</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                <IconShoppingCart className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+19% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
                <IconMoodSmile className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.8/5</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+0.2 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                <IconUsers className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+201 since last month</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Revenue by Month</CardTitle>
                <IconCalendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <IconChartBar className="aspect-[9/4]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
                <IconMoodSmile className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <IconChartLine className="aspect-[9/4]" />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

