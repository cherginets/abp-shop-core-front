'use client';

import {useFormikContext} from "formik";
import moment from "moment";
import {Button, Stack, TextField} from "@mui/material";

export type FormikDateTimeFieldProps = {
  name: string
  label: string
}
export default function FormikDateTimeField({label, name}: FormikDateTimeFieldProps) {
  const formik = useFormikContext<any>();

  const momentValue = moment(formik.values[name])

  const value = momentValue.isValid() ? momentValue.format("YYYY-MM-DDTHH:mm") : "";

  return <Stack direction={'column'} spacing={1}>
    <TextField
      label={label}
      type="datetime-local"
      name="meeting-time"
      // value="2018-06-12T19:30"
      value={value}
      onChange={e => {
        formik.setFieldValue(name, e.target.value)
      }}
    />
    <Stack direction={'row'} spacing={0}>
      <Button size={'small'} style={{padding: 0}} onClick={() => {
        if(momentValue.isValid()) formik.setFieldValue(name, momentValue.add(1, 'day'))
      }}>+1 дн</Button>
      <Button size={'small'} style={{padding: 0}} onClick={() => {
        if(momentValue.isValid()) formik.setFieldValue(name, momentValue.subtract(1, 'day'))
      }}>-1 дн</Button>
      <Button size={'small'} style={{padding: 0}} onClick={() => {
        if(momentValue.isValid()) formik.setFieldValue(name, momentValue.add(30, 'day'))
      }}>+30 дн</Button>
      <Button size={'small'} style={{padding: 0}} onClick={() => {
        if(momentValue.isValid()) formik.setFieldValue(name, momentValue.subtract(30, 'day'))
      }}>-30 дн</Button>
    </Stack>
  </Stack>
}