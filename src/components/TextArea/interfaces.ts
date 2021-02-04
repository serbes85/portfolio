export type TextAreaElement = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
> & HTMLTextAreaElement;

export interface TextAreaProps {
    label: string;
    errorMessage?: string;
    id: string;
    placeholder: string;
}