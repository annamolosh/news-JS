export interface RequestOptions {
    apiKey: string;
    sources: string;
}

export type RequestOptionsUpdate = Partial<Pick<RequestOptions, 'sources'>>;

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export enum ApiEndpoint {
    Sources = 'sources',
    Everything = 'everything',
}
