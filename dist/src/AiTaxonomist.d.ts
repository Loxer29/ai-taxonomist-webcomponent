import { LitElement } from 'lit';
import './image-picker.js';
import './image-selected.js';
import './taxon-results.js';
import './components/ai-reset-button.js';
import './components/ai-footer.js';
import { ImagePickEvent } from './ImagePicker.js';
import { BackendFormat, Results } from './utils/types.js';
declare enum IdentifyState {
    Idle = 0,
    Loading = 1,
    Loaded = 2,
    Error = 3
}
export declare class AiTaxonomist extends LitElement {
    static styles: import("lit").CSSResult;
    imageFiles: File[];
    apiUrl: string;
    apiKey: string | null;
    maxImages: number;
    removePlantNetBranding: boolean;
    isPlantNetBranded: boolean;
    backendFormat: BackendFormat;
    identify: {
        state: IdentifyState;
        error: string | null;
        results: Results;
    };
    doiUrl: string | null;
    connectedCallback(): void;
    __addImages(e: ImagePickEvent): void;
    __removeImage(e: CustomEvent): void;
    render(): import("lit-html").TemplateResult<1>;
    runIdentify(): Promise<void>;
    getInnerContent(): import("lit-html").TemplateResult<1>;
    reset(): void;
}
export {};
//# sourceMappingURL=AiTaxonomist.d.ts.map