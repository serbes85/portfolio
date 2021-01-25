export type SideBarData = {
    id: string;
    title: string;
}

export interface SideBarProps {
    contentList: SideBarData[];
    refsArticles: any;
}
