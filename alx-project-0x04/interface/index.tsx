// interface/index.tsx
import React from "react";
/**
 * centralized interface definitions for the project
 * save this file as: interface/index.tsx
 */

// From pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// From components/common/Button.tsx
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string; // e.g "px-4 py-2" or "w-full py-3"
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action: () => void; // or (args?: any) => void depending on your Button
}

// From components/layouts/Layout.tsx
export interface LayoutProps {
  children: React.ReactNode;
}