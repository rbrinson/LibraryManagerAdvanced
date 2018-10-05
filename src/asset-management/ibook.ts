import { Category } from "../..";

interface IBook {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
}

export { IBook };

// interface IBook {
//     publisher: string;
//     hasIndex: boolean;
// }
