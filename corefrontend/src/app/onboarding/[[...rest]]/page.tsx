'use client'
import {CreateOrganization} from "@clerk/nextjs";
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import MLoader from "@/components/ui/multisteploader";

export default function OnBoard() {
  const { user } = useUser();
  const router = useRouter();

  if (!user) {
    return <div><MLoader/></div>;
  }

  const isPartOfOrganization = user.organizationMemberships && user.organizationMemberships.length > 0;

  // Redirect if part of an organization
  if (isPartOfOrganization) {
    router.push('/');
    return <div><MLoader/></div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header />
      <main className="flex-1 flex flex-col">
        <section className="w-full flex-1 py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 h-full">
            <div className="space-y-3 text-center">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Welcome to MealFlow!</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                Let&apos;s get started by creating your restaurant.
              </p>
            </div>
            <div className="w-full max-w-md space-y-4">
              <CreateOrganization />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}