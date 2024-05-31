import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Preloader } from "../components";

const meta: ComponentMeta<typeof Preloader> = {
  title: "Design System/Preloader",
  component: Preloader,
};
import "../index.css"

export default meta;

const Wrapper = ({children, disableText = false}: {children: any, disableText?: boolean}) => {
  return <div style={{display: "block", position: 'relative', width: 300, height: 300, border: '1px solid black'}}>
    {!disableText && <span>span element</span>}
    {children}
    {!disableText && <span>span element</span>}
  </div>
}
export const AsIs1: ComponentStoryObj<typeof Preloader> = {
  args: {
    position: null
  },
  render: (args) => <Wrapper><Preloader {...args} /></Wrapper>
};
export const AsIs2: ComponentStoryObj<typeof Preloader> = {
  args: {
    position: null
  },
  render: (args) => <Wrapper disableText><Preloader {...args} /></Wrapper>
};

export const Absolute: ComponentStoryObj<typeof Preloader> = {
  args: {
    position: 'absolute',
  },
  render: (args) => <Wrapper><Preloader position={"absolute"} {...args} /></Wrapper>
};
export const Fixed: ComponentStoryObj<typeof Preloader> = {
  args: {
    position: "fixed"
  },
  render: (args) => <Wrapper><Preloader {...args} /></Wrapper>
};