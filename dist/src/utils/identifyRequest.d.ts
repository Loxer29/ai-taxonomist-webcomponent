import { BackendFormat, Results } from './types.js';
export declare const identifyRequest: (images: File[], apiUrl: string, apiKey: string | null, backendFormat: BackendFormat) => Promise<Results | string>;
export declare const getGBIFDoi: (apiUrl: string, backendFormat: BackendFormat) => Promise<null | string>;
//# sourceMappingURL=identifyRequest.d.ts.map