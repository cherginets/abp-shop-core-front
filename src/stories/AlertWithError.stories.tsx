import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Preloader } from "../components";

const meta: ComponentMeta<typeof Preloader> = {
  title: "Design System/AlertWithError",
  component: Preloader,
};
import "../index.css"
import AlertWithError from "../mui/AlertWithError";

export default meta;

export const Main: ComponentStoryObj<typeof AlertWithError> = {
  args: {
    error: "some error"
  },
  render: (args) => <AlertWithError {...args} />
};
