export type ContactsData = {
    id: number;
    name: string;
    text: string;
    link: string;
}

export interface ContactsProps {
    contactsList: ContactsData[];
}