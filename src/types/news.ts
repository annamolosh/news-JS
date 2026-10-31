export interface NewsSource {
    id: string;
    name: string;
}

export interface ArticleSource {
    id: string | null;
    name: string;
}

export interface Article {
    source: ArticleSource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
}

export interface NewsResponse {
    articles: Article[];
}

export interface SourcesResponse {
    sources: NewsSource[];
}
