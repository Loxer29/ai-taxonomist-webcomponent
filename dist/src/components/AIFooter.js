import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import './species-list.js';
export class AIFooter extends LitElement {
    constructor() {
        super(...arguments);
        this.doiUrl = null;
        this.apiUrl = null;
        this.displaySpecies = false;
    }
    __toggleSpeciesList() {
        this.displaySpecies = !this.displaySpecies;
    }
    render() {
        if (!this.doiUrl) {
            return null;
        }
        if (this.displaySpecies) {
            return html `
                <a href="#" title="Close species list" @click="${this.__toggleSpeciesList}">Liste des espèces proches</a>
                <species-list .apiUrl="${this.apiUrl}"></species-list>
            `;
        }
        return html `<a href="#" title="Open species list" @click="${this.__toggleSpeciesList}">Liste des espèces</a
            ><a href="${this.doiUrl}" target="_blank" title="Open GBIF DOI"
                >This identification engine has been trained on the GBIF Occurrence Download: ${this.doiUrl}</a
            >`;
    }
}
AIFooter.styles = css `
        a {
            margin-top: 12px;
            transition: all 0.15s ease-in-out;
            color: var(--ai-taxonomist-accent-color);
            font-size: 0.9rem;
            margin: 12px 0;
            display: block;
            text-decoration: none;
        }

        a:hover {
            filter: brightness(80%);
        }
    `;
__decorate([
    property({ type: String })
], AIFooter.prototype, "doiUrl", void 0);
__decorate([
    property({ type: String })
], AIFooter.prototype, "apiUrl", void 0);
__decorate([
    property({ type: Boolean })
], AIFooter.prototype, "displaySpecies", void 0);
//# sourceMappingURL=AIFooter.js.map