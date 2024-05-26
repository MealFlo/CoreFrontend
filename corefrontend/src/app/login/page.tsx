"use client"

import { useState, useEffect } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { InputOTPSlot, InputOTPGroup, InputOTP, OTPInputContext } from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { IconBackspace } from '@tabler/icons-react';

export default function Login() {
  // State to store the OTP code
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  const updateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = String(hours).padStart(2, '0');
  
    setCurrentTime(`${formattedHours}:${minutes} ${ampm}`);
  };
  
  const updateDate = () => {
    const now = new Date();
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][now.getDay()];
    const day = now.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
  
    setCurrentDate(`${dayOfWeek}, ${month} ${day}`);
  };

  useEffect(() => {
    updateTime();
    updateDate();
    const intervalId = setInterval(() => {
      updateTime();
      updateDate();
    }, 1000); // Update time and date every second
  
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  // Function to handle number button clicks
  const handleNumber = (number: number) => {
    const nextIndex = otp.findIndex(val => val === ""); // find the first empty slot
    if (nextIndex !== -1) {
      const newOtp = [...otp];
      newOtp[nextIndex] = number;
      setOtp(newOtp);
    }
  };

  // Function to handle backspace
  const handleBackspace = () => {
    const newOtp = [...otp];
    // Find the last index with a non-empty value
    for (let i = newOtp.length - 1; i >= 0; i--) {
      if (newOtp[i] !== "") {
        newOtp[i] = ""; // Clear the last non-empty slot
        break; // Exit the loop after clearing
      }
    }
    setOtp(newOtp);
  };

  // Function to render buttons
  const renderButton = (number: number) => {
    return (
      <Button
        key={number}  // Adding key here
        className="rounded-full"
        variant="ghost"
        onClick={() => handleNumber(number)}
        disabled={otp.every(val => val !== "")}
      >
        {number}
      </Button>
    );
  };

  return (
    <div
      key="1"
      className="flex flex-col items-center justify-center min-h-[100vh] bg-gray-100 dark:bg-gray-900 px-4 md:px-6"
    >
      <div className="w-full max-w-md space-y-6">
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center space-x-2">
            <Image
              src="/images/logo.webp"
              height={28}
              width={48.15852048}
              alt="MealFlow Logo"
            />
            <span className="text-2xl font-bold">MealFlow</span>
          </div>
        </div>
        <Card>
          <CardHeader className="text-center">
            <CardTitle>
              {currentDate}
              <div className="text-center pt-2">{currentTime}</div>
            </CardTitle>
            <CardDescription>Enter your passcode to log in.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 flex flex-col items-center">
              <Label className="text-sm" htmlFor="otp">
                Passcode
              </Label>
              <InputOTP id="otp" maxLength={6}>
              <OTPInputContext.Provider value={{ 
                slots: otp.map((value, index) => ({
                  char: value, 
                  isActive: index === otp.findIndex(val => val === ""),
                  hasFakeCaret: false
                })),
                isFocused: false, // Default value; update as needed
                isHovering: false // Default value; update as needed
              }}>
                <InputOTPGroup>
                {otp.map((value, index) => (
                  <InputOTPSlot key={index} index={index} />
                ))}
                </InputOTPGroup>
              </OTPInputContext.Provider>
              </InputOTP>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => renderButton(num))}
              <Button className="rounded-full" disabled variant="ghost" />
              {renderButton(0)}
              <Button className="rounded-full" variant="ghost" onClick={handleBackspace}>
                <IconBackspace className="w-4 h-4" />
              </Button>
            </div>
            <Button className="w-full" type="submit">
              Log In
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="inline-flex items-center space-x-2">
              <Image
                src="/images/logo.webp"
                height={10}
                width={17.1994716}
                alt="MealFlow Logo"
              />
              <span className="text-sm">MealFlow</span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}