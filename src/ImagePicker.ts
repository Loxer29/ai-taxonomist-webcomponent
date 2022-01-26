import {html, css, LitElement} from 'lit'
import "file-drop-element"
import {FileDropEvent} from 'file-drop-element'
import {property} from 'lit/decorators.js'

export type ImagePickEvent = Event & {
    type: "imagepick",
    detail: {
        files: File[]
    }
}

export class ImagePicker extends LitElement {
    static styles = css`
    :host {
    }

    file-drop label {
        display: block;
        padding: 25px;
        border-radius: 4px;
        outline: 2px dashed #92b0b3;
        outline-offset: -2px;
        transition: outline-offset .15s ease-in-out, background-color .15s linear;
        cursor:pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    file-drop span {
        margin-left: 4px;
    }
    file-drop.inline label {
        width: 100px;
        height: 100px;
    }

    file-drop.drop-valid label, label:hover {
        background-color: green;
        outline-offset: -15px;
        background-color: #666;
    }

    file-drop.drop-invalid label {
        background-color: red;
    }

    @media (prefers-color-scheme: dark) {
        file-drop label {
            outline-color: #888;
        }

        file-drop.inline label svg {
            filter: brightness(20) opacity(0.7);
        }
    }
    `

    @property({type: Boolean}) inlineMode: boolean = false

    __onFileDrop(e: FileDropEvent) {
        this._dispatchFiles(e.files)
    }

    __onFileUpload(e: Event) {
        if(e.target instanceof HTMLInputElement && e.target.files) {
            this._dispatchFiles(Array.from(e.target.files))
        }
    }

    _dispatchFiles(files: File[]) {
        const detail = {
            files,
        }
        const event = new CustomEvent('imagepick', {detail, bubbles: true, composed: true, cancelable: true})
        this.dispatchEvent(event)
    }

    render() {

        const fileDropClass = this.inlineMode ? "inline" : ""

        const labelContent = this.inlineMode ? html`<svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="#535559"><path d="M5,3A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H14.09C14.03,20.67 14,20.34 14,20C14,19.32 14.12,18.64 14.35,18H5L8.5,13.5L11,16.5L14.5,12L16.73,14.97C17.7,14.34 18.84,14 20,14C20.34,14 20.67,14.03 21,14.09V5C21,3.89 20.1,3 19,3H5M19,16V19H16V21H19V24H21V21H24V19H21V16H19Z" /></svg>` : html`<strong>Choose an image</strong><span> or drag it here</span>.`

        return html`
            <file-drop id="dropPhotos"
                       multiple=""
                       accept='image/*'
                       @filedrop="${this.__onFileDrop}"
                       class="${fileDropClass}"
            >
                <label for="fileUpload">${labelContent}</label>
                <input
                    hidden
                    id="fileUpload"
                    type="file"
                    placeholder="or click here"
                    multiple
                    accept=".png, .jpg, .jpeg, .JPG, .JPEG, image/jpg, image/jpeg, image/png"
                    @change="${this.__onFileUpload}"
                >
            </file-drop>
        `
    }
}
