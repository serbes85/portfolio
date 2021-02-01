type RefReturn =
    | string
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;

export type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label: string;
    register: ({ required, minLength }: { required?: boolean, minLength?: number }) => RefReturn;
    id?: string;
    type?: string;
    placeholder?: string;
    autocomplete?: string;
    appearance?: "borderRadiusLeft";
};