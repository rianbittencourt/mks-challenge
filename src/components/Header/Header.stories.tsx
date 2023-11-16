// Header.stories.tsx
import React from "react";
import { storiesOf, Meta } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

const Template: React.FC = (args) => <Header {...args} />;

export const HeaderDefault = Template.bind({});
