export type SocialsData = {
    id: number;
    name: string;
    link: string;
}

export interface SocialsProps{
    socials:SocialsData[];
    fill?:  "white"
}