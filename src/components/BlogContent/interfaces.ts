import { RefObject } from "react";

export type BlogContentData = {
    id: string;
    title: string;
    date: string;
    content: string;
}

export interface BlogContentProps {
    articles: BlogContentData[];
    refsArticles: RefObject<any> | null;
}
