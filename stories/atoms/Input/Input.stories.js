import { Input } from './Input';

export default {
    title: 'Atoms/Input',
    argTypes: {
        bgClass: {
            control: { type: 'select' },
            options: ['form-vertical', 'form-horizontal'],
        },
    },
};

const Template = (args) => Input(args);

export const FormVertical = Template.bind({});
FormVertical.args = {
    label: 'Input Text',
    placeholder: 'First Name',
    type: 'text',
    value:'',
    required: false,
    disabled: false,
    fullWidth: false,
    id: 'input_label',
    bgClass: 'form-vertical'
}

export const FormHorizontal = Template.bind({});
FormHorizontal.args = {
    label: 'Input Text',
    placeholder: 'First Name',
    type: 'text',
    value:'',
    required: false,
    disabled: false,
    id: 'input_label',
    bgClass: 'form-horizontal'
}