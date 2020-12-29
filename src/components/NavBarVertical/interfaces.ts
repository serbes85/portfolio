type LinkData = {
    id: number;
    path: string;
    name: string;
};
 
export interface NavBarVerticalProps {
    links: LinkData[];
    render( links: LinkData[]): JSX.Element;
}