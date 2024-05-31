import CircularProgress, {  CircularProgressProps,} from "@mui/material/CircularProgress";
import {DetailedHTMLProps, HTMLAttributes, useMemo} from "react";
import {LibThemeProvider, LibThemeProviderProps} from "../lib/LibThemeProvider";

export type PreloaderLoadingType = boolean;
export type PreloaderPositionType = null | undefined | 'absolute' | 'fixed';

export const Preloader = (
  {
    loading = true,
    position,
    overlayProps,
    overrideOverlayProps,
    progressProps,
    theme,
  }: {
    loading?: boolean
    position?: PreloaderPositionType
    overlayProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    overrideOverlayProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    progressProps?: CircularProgressProps

    theme?: LibThemeProviderProps['theme']
  }) => {
  if (!loading) return null;


  return <LibThemeProvider theme={theme}>
    <div
      {...overlayProps}
      style={overrideOverlayProps ? overrideOverlayProps : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...(!position ? {} : {
          position,
          backdropFilter: "blur(5px)",
          left: 0, right: 0, top: 0, bottom: 0,
          zIndex: 2,
        }),
        ...overlayProps?.style,
      }}
    >
      <CircularProgress style={{margin: "16px auto"}} {...progressProps} />
    </div>
  </LibThemeProvider>
}