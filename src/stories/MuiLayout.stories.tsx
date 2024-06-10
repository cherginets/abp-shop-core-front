import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import {MuiLayout} from "../layouts/MuiLayout";
import Sync from "@mui/icons-material/Sync";

const meta: ComponentMeta<typeof MuiLayout> = {
  title: "Design System/MuiLayout",
  component: MuiLayout,
};

export default meta;

export const Default: ComponentStoryObj<typeof MuiLayout> = {
  args: {
    children: <span>some page content</span>,
    links: [
      {id: "1", title:"Link 1", IconComponent: Sync, url: "/"},
      {id: "2", title:"Link 2", IconComponent: Sync, url: "/"},
      {id: "3", title:"Link 3 after divider", IconComponent: Sync, url: "/"},
    ],
    left: ["1","2","divider", "3"],
    top: ['3'],
  },
};