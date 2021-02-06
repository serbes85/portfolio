export type LinkData = {
    id: number;
    path: string;
    name: string;
};

export interface NavBarHorizontalProps {
    links: LinkData[];
    appearance?: "withoutBackground";
    border?: "withoutBorderRight" | "borderRightWhite";
    hover?: "hoverGreen" | "hoverGray" | "hoverWhite";
    color?: "colorGray";
}
