import { html } from 'lit-html';
import './toggle.scss';

export const Chip = ({label}) => {
  return html`
    <div class="chip">
        ${label}
        <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
    </div>
      `;
};
