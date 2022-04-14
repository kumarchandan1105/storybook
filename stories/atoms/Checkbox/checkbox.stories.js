import { Checkbox } from './checkbox';

export default {
  title: 'Atoms/Checkbox',
  argTypes: {

  },
};

const Template = (args) => Checkbox(args);

export const Normal = Template.bind({});
Normal.args = {
  label: "Normal Checkbox",
  id: 'status',
  disabled: false,
  checked: false
};
export const Checked = Template.bind({});
Checked.args = {
  id: 'status_checked',
  label: "Checked State",
  name: 'status_checked',
  value: true,
  checked: true
};
export const Disabled = Template.bind({});
Disabled.args = {
  id: 'status_unchecked_disabled',
  label: "Disabled state",
  name: 'status_unchecked_disabled',
  value: true,
  checked: false,
  disabled: true
};
export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  id: 'status_checked_disabled',
  label: "Checked Disabled state",
  name: 'status_checked_disabled',
  value: true,
  checked: true,
  disabled: true
};
