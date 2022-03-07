import React from "react";
import Button from ".";

const ButtonComponent = {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => (
    <Button {...args} />
);

export const PrimaryButtonActive = Template.bind({});
PrimaryButtonActive.args = {
  title: "Primary Button",
  label: "Add to Library",
};

export const PrimaryButtonDisabled = Template.bind({});
PrimaryButtonDisabled.args = {
  title: "Disabled Button",
  disabled: true,
};

export default ButtonComponent;
