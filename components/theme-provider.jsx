"use client"
import React from 'react'
import {ThemeProvider as NextThemeProvider} from "next-themes"
const ThemeProvider = ({children, ...props}) => {
  return (
    <div attribute=""
    defaultTheme>
      {children}
    </div>
  )
}

export default ThemeProvider
