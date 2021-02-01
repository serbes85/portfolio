type RefReturn =
    | string
    | ((instance: HTMLTextAreaElement | null) => void)
    | React.RefObject<HTMLTextAreaElement>
    | null
    | undefined;

export type TextAreaProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
> & {
    label: string;
    register: ({ required }: { required?: boolean }) => RefReturn;
    id?: string;
    type?: string;
    placeholder?: string;
};