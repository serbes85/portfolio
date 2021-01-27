import { RefObject } from "react";

export type SideBarData = {
    id: string;
    title: string;
}

export interface SideBarProps {
    contentList: SideBarData[];
    refsArticles: RefObject<any> | null;
    activeArticleId: string;
}
