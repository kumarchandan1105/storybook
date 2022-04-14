import { html } from 'lit-html';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import './form.scss';
/**
 * Primary UI component for user interaction
 */
export const Form = ({onLogin }) => {
    return html`
   <Form>
     <h1>Sign In</h1>
       ${Input({
           fullWidth: true,
           label: 'Mail ID *',
           placeholder: '@lorem ipsum etc.',
           required: true
         })}
         ${Input({
            fullWidth: true,
            label: 'Password *',
            type: 'password',
            required:true
          })}
          ${Button({
            fullWidth: true,
            onClick: onLogin,
            label: 'Submit'
        })}
   </Form>

    `;
};
