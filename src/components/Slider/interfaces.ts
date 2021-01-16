export type SliderData = {
    id: number;
    imgUrl: string;
    name: string;
}

export interface SliderProps {
    sliderList: SliderData[];
}