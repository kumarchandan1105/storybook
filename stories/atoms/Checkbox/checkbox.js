import { html } from 'lit-html';
import './checkbox.scss';

export const Checkbox = ({ id, name, label, value, checked, disabled }) => {
    const disabledVal = `${disabled ? 'true' : ''}`;
    return html`
    <input type="checkbox" id=${id} name=${name} value=${value} ?checked=${checked} ?disabled=${disabledVal}/>
    <label for=${id}>${label}</label>
    `;
};
