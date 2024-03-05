import {
  CircularProgress,
  CircularProgressProps,
} from "@mui/material";
import {DetailedHTMLProps, HTMLAttributes, useMemo} from "react";
import {LibThemeProvider, LibThemeProviderProps} from "../../lib/LibThemeProvider";

export type PreloaderLoadingType = boolean;
export type PreloaderPositionType = null | undefined | 'absolute' | 'fixed';

export const Preloader = (
  {
    loading = true,
    position,
    overlayProps,
    progressProps,
    theme,
  }: {
    loading?: boolean
    position?: PreloaderPositionType
    overlayProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    progressProps?: CircularProgressProps

    theme?: LibThemeProviderProps['theme']
  }) => {
  if (!loading) return null;

  const progress = useMemo(() => <CircularProgress style={{margin: 16}} {...progressProps} />, [progressProps])

  return <LibThemeProvider theme={theme}>
    {!position ? progress : <div
      {...overlayProps}
      style={{
        position,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: "blur(5px)",
        left: 0, right: 0, top: 0, bottom: 0,
        zIndex: 2,
        ...overlayProps?.style
      }}
    >
      {progress}
    </div>}
  </LibThemeProvider>}