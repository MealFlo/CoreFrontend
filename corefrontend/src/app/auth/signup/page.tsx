
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"


export default function signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-gray-100 dark:bg-gray-900 px-4 md:px-6">
      <div className="w-full max-w-md space-y-6">
        <div className="flex items-center justify-center">
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
        <Card>
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>Enter your details to get started.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" required type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Enter your phone number" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" required type="password" />
            </div>
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
          </CardContent>
          <CardFooter className="text-center text-sm">
            Already have an account?
            <Link className="font-medium text-gray-900 hover:underline dark:text-gray-50" href="/auth/login">
              Sign In
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
