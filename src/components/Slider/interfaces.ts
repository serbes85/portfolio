export type SliderData = {
    imgUrl: string;
    title: string;
}

export interface SliderProps {
    sliderList: SliderData[];
    updateIndex(value: number): void;
}