import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContent, CardFooter, Card, CardHeader, CardTitle } from "@/components/ui/card"

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-gray-100 dark:bg-gray-900 px-4 md:px-6">
      <div className="w-full max-w-md space-y-6">
        <div className="flex items-center justify-center">
          <Link className="inline-flex items-center space-x-2" href="#">
            <MountainIcon className="h-8 w-8" />
            <span className="text-2xl font-bold">Acme Inc.</span>
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
                <Link className="text-sm text-gray-500 hover:underline dark:text-gray-400" href="/login/forgot">
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
            Don't have an account?
            <Link className="font-medium text-gray-900 hover:underline dark:text-gray-50" href="#">
              Sign Up
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
