import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import MuiLayout from "../layouts/MuiLayout";
import Sync from "@mui/icons-material/Sync";

const meta: ComponentMeta<typeof MuiLayout> = {
  title: "Design System/MuiLayout",
  component: MuiLayout,
};

export default meta;

export const Default: ComponentStoryObj<typeof MuiLayout> = {
  args: {
    children: "some page content",
    title: "Some title",
    links: [
      {title:"Link 1", IconComponent: Sync, link: "/"},
      {title:"Link 2", IconComponent: Sync, link: "/"},
      "divider",
      {title:"Link 3 after divider", IconComponent: Sync, link: "/"},
    ],
    userName: "username",
  },
};