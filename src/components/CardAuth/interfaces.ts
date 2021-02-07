export interface CardAuthProps {
    isFlipped?: boolean;
    handleClickFlippedFont?(): void;
    loginRequest: any;
}

export interface InputFormValues {
    userName: string;
    userPassword: string;
    human: string;
    answer: string;
}
