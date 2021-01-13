export type CommentsData = {
    id: number;
    avatarUrl: string;
    name: string;
    text: string;
}

export interface CommentsProps {
    comments: CommentsData[];
}