export interface CardAuthProps {
    isFlipped?: boolean;
    handleClickFlippedFont?(): void;
}

export interface InputFormValues {
    userName: string;
    userPassword: string;
    human: string;
    answer: string;
}
