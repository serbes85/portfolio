export interface PersonProps {
    title: string;
    description: string;
    render?(title: string, description: string): JSX.Element;
       
}