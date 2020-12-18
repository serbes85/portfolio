export interface ButtonProps {
    buttonText: string;
    appearance?: "borderRadiusLeft" | "borderRadiusRight" | "borderRight" |"authorize";
    onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
    
  }