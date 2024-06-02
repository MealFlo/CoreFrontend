
import Link from "next/link"
import Image from "next/image"
import { SignIn } from "@clerk/nextjs";


export default function signin() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-gray-100 dark:bg-gray-900 px-4 md:px-6">
      <div className="w-full max-w-md space-y-6">
        <div className="flex items-center justify-center -ml-12">
          <Link className="inline-flex items-center space-x-2" href="#">
            <Image
              src="/images/logo.webp" // Route of the image file
              height={28} // Desired size with correct aspect ratio
              width={48.15852048} // Desired size with correct aspect ratio
              alt="Your Name"
            />
            <span className="text-2xl font-bold">MealFlow</span>
          </Link>
        </div>
        <SignIn />
      </div>
    </div>
  )
}
