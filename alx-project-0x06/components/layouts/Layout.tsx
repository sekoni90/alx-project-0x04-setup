// components/layouts/Layout.tsx
import React, { ReactNode } from "react";
import Header from "./Header";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-28">{children}</main>
    </div>
  );
};

export default Layout;