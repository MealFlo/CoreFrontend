
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"


export default function forgot() {
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
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>Enter your email to reset your password.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" required type="email" />
            </div>
            <Button className="w-full" type="submit">
              Reset Password
            </Button>
          </CardContent>
          <CardFooter className="text-center text-sm">
            Remember your password?
            <Link className="font-medium text-gray-900 hover:underline dark:text-gray-50" href="#">
              Sign In
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
