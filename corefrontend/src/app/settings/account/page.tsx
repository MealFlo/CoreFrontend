'use client'
import React from 'react';
import {RedirectToUserProfile} from "@clerk/nextjs";

/**
 * Renders the Kitchen Settings page.
 * 
 * @returns The JSX element representing the Kitchen Settings page.
 */

export default function AccountSettings() {

  return (
    <RedirectToUserProfile/>
  )
}