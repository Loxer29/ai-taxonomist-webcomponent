import { html, css, LitElement } from 'lit'

export class AIButtonReset extends LitElement {
    static styles = css`
        :host {
        }

        button {
            display: flex;
            align-items: center;
            appearance: none;
            border: none;
            border-radius: 4px;
            background-color: var(--ai-taxonomist-separator-border-color);
            padding: 0.5rem 0.7rem;
            font-size: 1.1rem;
            cursor: pointer;
            color: inherit;
            transition: all 0.15s ease-in-out;
            margin-top: 2rem;
            margin-left: calc(16.6667% + 0.2rem);
            animation: fadeIn 0.5s;
        }

        button:hover {
            filter: brightness(80%);
        }

        button svg {
            fill: var(--ai-taxonomist-text-color);
            margin-right: 0.2rem;
        }

        @media only screen and (max-width: 48em) {
            button {
                margin-left: 0;
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `

    __press(e: Event) {
        e.preventDefault()
        this.dispatchEvent(new CustomEvent('press', e))
    }

    render() {
        return html`
            <button @click=${this.__press}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#535559">
                    <path
                        d="M12,4C14.1,4 16.1,4.8 17.6,6.3C20.7,9.4 20.7,14.5 17.6,17.6C15.8,19.5 13.3,20.2 10.9,19.9L11.4,17.9C13.1,18.1 14.9,17.5 16.2,16.2C18.5,13.9 18.5,10.1 16.2,7.7C15.1,6.6 13.5,6 12,6V10.6L7,5.6L12,0.6V4M6.3,17.6C3.7,15 3.3,11 5.1,7.9L6.6,9.4C5.5,11.6 5.9,14.4 7.8,16.2C8.3,16.7 8.9,17.1 9.6,17.4L9,19.4C8,19 7.1,18.4 6.3,17.6Z"
                    /></svg
                >Nouvelle identification
            </button>
        `
    }
}
