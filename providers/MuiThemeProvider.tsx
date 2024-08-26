'use client';
import {ReactNode} from "react";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {ThemeProvider} from "@mui/material";
import theme from "@/styles/theme";

export default function MuiThemeProvider({children}: { children: ReactNode }) {
    return <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </AppRouterCacheProvider>

}