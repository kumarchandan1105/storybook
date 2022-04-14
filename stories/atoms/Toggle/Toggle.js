import { html } from 'lit-html';
import './toggle.scss';

export const Toggle = ({checked}) => {
  return html`
  <div class=${['ToggleButton']}>
    <label class=${['button-switch large']}>
      <input
        type="checkbox"
        ?checked=${checked}
      />
      <span class=${['switch large']} />
    </label>
   </div>
      `;
};