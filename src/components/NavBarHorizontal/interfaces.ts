type LinkData = {
    id: number;
    path: string;
    name: string;
};
 
export interface NavBarHorizontalProps {
    links: LinkData[];
    render( links: LinkData[]): JSX.Element;
}