import { Chip } from './Chip';

export default {
  title: 'Atoms/Toggles & Chips',
  argTypes: {
   
  },
};

const Template = (args) => Chip(args);

export const Chips = Template.bind({});
Chips.args = {
  label: 'chip name',
};
