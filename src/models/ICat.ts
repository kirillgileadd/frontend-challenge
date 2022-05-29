export interface ICat {
    id: string;
    name: string;
    favorite?: boolean;
    image: {
        height: number;
        id: string;
        url: string;
        width: number;
    }
}