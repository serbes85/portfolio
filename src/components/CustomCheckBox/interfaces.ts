type RefReturn =
    | string
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;

export type CustomCheckBoxProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label: string;
    register: ({ required }: { required?: boolean }) => RefReturn;
    id: string;
    text?: string;
};