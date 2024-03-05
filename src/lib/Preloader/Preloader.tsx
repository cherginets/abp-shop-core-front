import {CircularProgress, CircularProgressProps} from "@mui/material";
import {Variant} from "@mui/material/styles/createTypography";

export const Preloader = ({variant}: {variant?: CircularProgressProps['variant']}) => {
  return <CircularProgress variant={variant} />
}