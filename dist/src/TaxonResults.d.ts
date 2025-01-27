import { LitElement } from 'lit';
import './components/ai-loader.js';
import { Results, ResultType } from './utils/types.js';
export declare class TaxonResults extends LitElement {
    static styles: import("lit").CSSResult;
    results: Results;
    error: string | null;
    loading: boolean;
    plantnetBrand: boolean;
    onAttachmentClick(result: ResultType): (e: Event) => void;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=TaxonResults.d.ts.map