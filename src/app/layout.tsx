"use client"
import { Inter } from "next/font/google";
import "./globals.css";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
 

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from "../../theme";
import Footer from "../../survey/Footer";
import { useEffect, useState } from "react";




export default function RootLayout(props: { children: React.ReactNode }) {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This triggers when the component mounts (on client-side)
}, []);



  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {props.children}
            {isClient && ( <Footer />  )}
            
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
