import {ReactNode} from "react";
import {ThemeProvider} from "@mui/material";
import {ThemeProviderProps} from "@mui/material/styles/ThemeProvider";

export type LibThemeProviderProps = {theme?: ThemeProviderProps['theme'], children: any}
export const LibThemeProvider = ({theme, children}: LibThemeProviderProps) => {
  console.log('theme', theme)
  if (!theme) return children;

  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
}