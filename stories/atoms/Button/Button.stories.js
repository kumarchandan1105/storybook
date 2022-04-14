import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
    type: {
      control: { type: 'select' },
      options: ['primary', 'primarySecondary', 'secondary'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => Button(args);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  type: "primary",
  disabled: false,
  fullWidth:false,
  label: 'Primary Action',
};
export const PrimarySecondary = Template.bind({});
PrimarySecondary.args = {
  type: "primarySecondary",
  disabled: false,
  fullWidth:false,
  label: 'Secondary Action',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  disabled: false,
  fullWidth:false,
  label: 'Cancel',
  size: '',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  type: "primary",
  disabled: true,
  fullWidth:false,
  label: 'Primary Disabled',
  size: '',
};

export const PrimarySecondaryDisabled = Template.bind({});
PrimarySecondaryDisabled.args = {
  type: "primarySecondary",
  disabled: true,
  fullWidth:false,
  label: 'PrimarySecondary Disabled',
  size: '',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  type: "secondary",
  disabled: true,
  fullWidth:false,
  label: 'Secondary Disabled',
  size: '',
};

