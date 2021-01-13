export interface HeroProps {
  title: string;
  description: string;
  backgroundUrl: string;
  backgroundTitle: string;
  size?: "high" | "medium" | "small";
  render?(title: string, description: string): JSX.Element;
  scrollToSection?(): void;
}
