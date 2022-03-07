import React from "react";

const TextComponent = {
  title: "EventListItem"
};

const Template = (args) => (
    <text {...args} />
);

export const BookName1 = Template.bind({});
BookName.args = {
  value:"Bring your Human to Work"
};

export default TextComponent;