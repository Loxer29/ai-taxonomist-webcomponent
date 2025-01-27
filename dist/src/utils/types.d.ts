export declare enum BackendFormat {
    PLANTNET = "pn",
    C4C = "c4c",
    CARPESO = "carp"
}
export declare type ServerResult = {
    gbif: {
        id: string;
    };
    images: {
        author: string;
        citation: string;
        date: {
            timestamp: number;
            string: string;
        };
        organ: string;
        url: {
            o: string;
            m: string;
            s: string;
        };
    }[];
    score: number;
    species: {
        commonNames: string[];
        family: {
            scientificName: string;
        };
        genus: {
            scientificName: string;
        };
        scientificName: string;
        scientificNameAuthorship: string;
        scientificNameWithoutAuthor: string;
    };
};
export declare type IdentifySuccessResponse = {
    results: ServerResult[];
};
export declare type IdentifyErrorResponse = {
    statusCode: number;
    error: string;
    message: string;
};
export declare type ImageType = {
    url: string;
    alt: string;
};
export declare type ResultType = {
    score: number;
    taxonName: string | null;
    author: string | null;
    family: string | null;
    commonNames: string[];
    additionalText?: string;
    images: ImageType[];
    gbifUrl: string | null;
    url?: string;
    formatTaxonName: boolean;
};
export declare type Results = {
    overallScore?: string;
    results: ResultType[];
};
export declare type C4CServerResult = {
    name: string;
    score: number;
    gbif_id: string;
    authorship: string;
    vernacularName: string;
    genus: string;
    family: string;
    images: {
        url: string;
        license: string;
        rightsHolder: string;
        publisher: string;
    }[];
};
export declare type IdentifyC4CSuccessResponse = {
    results: C4CServerResult[];
};
export declare type IdentifyC4CErrorResponse = {
    status: string;
};
export declare type CarpesoServerResult = {
    name: string;
    authorship: string | null;
    vernacularName: string;
    score: number;
    nutrition: number;
    url: string | null;
    images: {
        url: string;
    }[];
};
export declare type IdentifyCarpesoSuccessResponse = {
    status: string;
    results: {
        nutrition: number;
        details: CarpesoServerResult[];
    };
};
export declare type IdentifyCarpesoErrorResponse = {
    status: string;
};
export declare type SpeciesRank = 'SPECIES';
export declare type Species = {
    name: string;
    species_id: string;
    rank: SpeciesRank;
    authorship: string;
    vernacularName: string;
    species: string;
    genus: string;
    family: string;
};
//# sourceMappingURL=types.d.ts.map