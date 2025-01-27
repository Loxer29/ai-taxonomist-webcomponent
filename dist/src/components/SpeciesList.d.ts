import { LitElement } from 'lit';
import { Species } from '../utils/types.js';
import './ai-loader.js';
export declare class SpeciesList extends LitElement {
    static styles: import("lit").CSSResult;
    apiUrl: string | null;
    species: Species[];
    displayedSpecies: Species[];
    filter: string | null;
    error: String | null;
    connectedCallback(): void;
    __onSearch(event: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=SpeciesList.d.ts.map