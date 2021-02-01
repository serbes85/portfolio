type RefReturn =
    | string
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;

export type CustomRadioButtonProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label: string;
    register: ({ required }: { required?: boolean }) => RefReturn;
    text?: string;
    value?: string;
    name?: string;
    id: string;
};