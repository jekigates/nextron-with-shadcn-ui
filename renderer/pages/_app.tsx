import React from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
