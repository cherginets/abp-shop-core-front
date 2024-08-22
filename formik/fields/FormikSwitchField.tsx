import { FormHelperText, Switch } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useFormikContext } from "formik";

export type FormikSwitchFieldProps = {
  label: string;
  name: string;
};
export default function FormikSwitchField({ label, name, ...props }: FormikSwitchFieldProps) {
  const formik = useFormikContext<{ [key: string]: any }>();

  const helperText = (formik.touched[name] && formik.errors[name]) as string;

  return (
    <FormGroup onBlur={formik.handleBlur}>
      <FormControlLabel
        onBlur={formik.handleBlur}
        control={
          <Switch
            name={name}
            checked={formik.values[name]}
            onChange={(_, checked) => {
              formik.setValues((values) => ({ ...values, [name]: checked }));
            }}
          />
        }
        label={label}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormGroup>
  );
}
