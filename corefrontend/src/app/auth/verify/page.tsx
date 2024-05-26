/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jRHTUIguWfs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { InputOTPSlot, InputOTPGroup, InputOTP } from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Component() {
  return (
    <div
      key="1"
      className="flex flex-col items-center justify-center min-h-[100dvh] bg-gray-100 dark:bg-gray-900 px-4 md:px-6"
    >
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
            <CardTitle>Verify Code</CardTitle>
            <CardDescription>Enter the 6-digit code sent to your email or phone number.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm" htmlFor="otp">
                One-Time Password
              </Label>
              <InputOTP id="otp" maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Button className="w-full" type="submit">
              Verify
            </Button>
          </CardContent>
          <CardFooter className="text-center text-sm">
            Didn&apos;t receive the code?&nbsp;
            <Link className="font-medium text-gray-900 hover:underline dark:text-gray-50" href="#">
              Resend
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}