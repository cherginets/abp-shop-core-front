'use client';

import {useFormikContext} from "formik";

export type FormikDateTimeFieldProps = {
  name: string
  label: string
}
export default function FormikDateTimeField({label, name}: FormikDateTimeFieldProps) {
  const formik = useFormikContext<any>();
  return <div>
    <span>{label}</span>
    <input
      type="datetime-local"
      name="meeting-time"
      // value="2018-06-12T19:30"
      value={formik.values[name]}
      onChange={e => {
        formik.setFieldValue(name, e.target.value)
      }}
    />
  </div>
}