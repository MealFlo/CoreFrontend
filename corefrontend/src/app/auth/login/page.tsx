import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CardContent, CardFooter, Card, CardHeader, CardTitle } from "@/components/ui/card"

export default function Login() {
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
            <CardTitle>Login to your account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" required type="email" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link className="text-sm text-gray-500 hover:underline dark:text-gray-400" href="/auth/login/forgot">
                  Forgot Password?
                </Link>
              </div>
              <Input id="password" required type="password" />
            </div>
            <Button className="w-full" type="submit">
              Sign In
            </Button>
          </CardContent>
          <CardFooter className="text-center text-sm">
            Don&apos;t have an account?
            <Link className="font-medium text-gray-900 hover:underline dark:text-gray-50" href="/auth/signup">
              Sign Up
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}