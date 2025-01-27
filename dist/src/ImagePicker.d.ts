import { LitElement } from 'lit';
import "file-drop-element";
import { FileDropEvent } from 'file-drop-element';
import './components/plantnet-brand.js';
export declare type ImagePickEvent = Event & {
    type: 'imagepick';
    detail: {
        files: File[];
    };
};
export declare class ImagePicker extends LitElement {
    static styles: import("lit").CSSResult;
    inlineMode: boolean;
    plantnetBrand: boolean;
    __onFileDrop(e: FileDropEvent): void;
    __onFileUpload(e: Event): void;
    _dispatchFiles(files: File[]): void;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=ImagePicker.d.ts.map