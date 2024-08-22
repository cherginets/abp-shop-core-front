import CSS from "csstype";

export type NumericOption = Option<number>;
export type StringOption = Option<string>;

export type Option<ValueType extends string | number = string | number> = {
  label: string;
  value: ValueType;
  color?: CSS.Properties["color"];
};
