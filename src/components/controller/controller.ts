import AppLoader from './appLoader';
import { NewsResponse, SourcesResponse } from '../../types/news';

class AppController extends AppLoader {
    public getSources(callback: (data: SourcesResponse) => void): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(
        e: MouseEvent,
        callback: (data: NewsResponse) => void
    ): void {
        const target = e.target;
        const newsContainer = e.currentTarget;

        if (!(target instanceof Element)) return;
        if (!(newsContainer instanceof HTMLElement)) return;

        let currentElement: Element = target;

        while (currentElement !== newsContainer) {
            if (currentElement.classList.contains('source__item')) {
                const sourceId = currentElement.getAttribute('data-source-id');

                if (
                    sourceId &&
                    newsContainer.getAttribute('data-source') !== sourceId
                ) {
                    newsContainer.setAttribute('data-source', sourceId);

                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }

                return;
            }

            const parent = currentElement.parentElement;

            if (!parent) return;

            currentElement = parent;
        }
    }
}

export default AppController;
