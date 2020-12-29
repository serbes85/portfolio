export type LinkData = {
    id: number;
    path: string;
    name: string;
  };
  export interface NavBarProps {
      links: LinkData[];
  }