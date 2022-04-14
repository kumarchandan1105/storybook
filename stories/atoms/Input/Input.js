import { html } from 'lit-html';
import './input.scss';

/**
 * Primary UI component for user interaction
 */
export const Input = ({fullWidth, id, label, value, onChange, type, disabled, placeholder, bgClass, required= false }) => {
    return html`
      <div class=${['form-control', `${bgClass || 'form-vertical'}`].join(' ')} > 
      <label for=${id} class="control-label">${label}</label>
        <input id=${id} 
            class="input ${fullWidth ? `fullWidth` :''}"
            required="${required}"
            type="${type}" 
            value="${value}"
            @change=${onChange}
            ?disabled=${disabled}
            placeholder="${placeholder}"
        />
      </div>  
    `;
};
