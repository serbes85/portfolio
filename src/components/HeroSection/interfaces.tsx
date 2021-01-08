export interface HeroProps {
  title: string;
  description: string;
  url: string;
  imgDescription: string;
  size?: "high" | "medium" | "small";
  position?: "center" | "nocenter";
  render?(title: string, description: string): JSX.Element;
}
