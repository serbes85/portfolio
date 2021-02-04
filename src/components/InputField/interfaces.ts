export type InputElement = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & HTMLInputElement;

export interface InputProps {
    label: string;
    placeholder?: string;
    errorMessage?: string;
    appearance?: "borderRadiusLeft";
    withIcon?: "withoutIcon";
    iconSize?: string;
    iconName?: string;
}