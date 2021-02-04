export type CustomCheckBoxElement = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement> & HTMLInputElement;

export interface CustomCheckBoxProps {
    label: string;
    name: string;
    id: string;
    text: string;
    errorMessage?: string;
}