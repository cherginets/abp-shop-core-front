import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Preloader } from "./Preloader";

const meta: ComponentMeta<typeof Preloader> = {
  title: "Design System/Preloader",
  component: Preloader,
};

export default meta;

export const Indeterminate: ComponentStoryObj<typeof Preloader> = {
  args: {
    variant: "indeterminate",
  },
};
export const Determinate: ComponentStoryObj<typeof Preloader> = {
  args: {
    variant: "determinate",
  },
};