import { Toggle} from './Toggle';

export default {
  title: 'Atoms/Toggles & Chips',
  argTypes: {
   
  },
};

const Template = (args) => Toggle(args);

export const Normal = Template.bind({});
Normal.args = {
  label: "Normal",
  checked: false
};
export const Checked = Template.bind({});
Checked.args = {
  label: "Checked State",
  checked: true
};