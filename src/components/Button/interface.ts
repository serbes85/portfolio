import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  appearance?: "borderRadiusLeft" | "borderRadiusRight" | "borderRight" | "authorize";

}