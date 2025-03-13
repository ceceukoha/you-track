"use client";

import ThemeProvider from "@/components/theme-provider";
import React from "react";

const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
