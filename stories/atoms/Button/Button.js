import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map.js';
import './button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ backgroundColor = null, type, label, onClick, disabled = false, fullWidth}) => {
  const mode = `storybook-button--${type || "primary"}`;
  return html`
    <button
      disabled=${disabled}
      type="button"
      class="storybook-button ${mode} ${mode}${disabled ? `--disabled` : ''} ${fullWidth ? `fullWidth` :''}"
      style=${styleMap({ backgroundColor })}
      @click=${onClick}
      tabindex="-1"
    >
      ${label}
    </button>
  `;
};
