export type CustomRadioButtonElement = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & HTMLInputElement;

export interface CustomRadioButtonProps {
    label: string;
    value: string;
    name: string;
    id: string;
    text: string
}