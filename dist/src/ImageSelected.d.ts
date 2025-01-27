import { LitElement } from 'lit';
import { ImagePickEvent } from './ImagePicker.js';
export declare class ImageSelected extends LitElement {
    static styles: import("lit").CSSResult;
    images: File[];
    canAddImages: boolean;
    __onImagePick(event: ImagePickEvent): void;
    __onImageRemove(image: File): () => void;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=ImageSelected.d.ts.map