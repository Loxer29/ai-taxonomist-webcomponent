import { Results } from './types.js';
export declare const formatPlantNetRequest: (images: File[], apiUrl: string, apiKey: string | null) => [FormData, URL];
export declare const formatC4CRequest: (images: File[], apiUrl: string, apiKey: string | null) => [FormData, URL];
export declare const formatCarpesoRequest: (images: File[], apiUrl: string, apiKey: string | null) => [FormData, URL];
export declare const formatPlantNetResponse: (response: Response) => Promise<Results | string>;
export declare const formatC4CResponse: (response: Response) => Promise<Results | string>;
export declare const formatCarpersoResponse: (response: Response, apiUrl: string) => Promise<Results | string>;
//# sourceMappingURL=identifyRequestUtils.d.ts.map