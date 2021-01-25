export type BlogContentData = {
    id: string;
    title: string;
    date: string;
    content: string;
}

export interface BlogContentProps {
    articles: BlogContentData[];
    refsArticles: any;
}
