export type CommentsData = {
    id: number; 
    url: string;
    title: string;
    text: string;
}

export interface CommentsProps {
    comments: CommentsData[];
}