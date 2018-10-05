import { Category } from "./enums";

interface IBook {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
}

// interface IBook {
//     publisher: string;
//     hasIndex: boolean;
// }

interface IDamageLogger {
    (reason: string): void;
}

interface IPerson {
    name: string;
    email: string;
}

interface IAuthor extends IPerson {
    numBooksPublished: number;
}

interface ILibrarian extends IPerson {
    department: string;
    assistCustomer: (custName: string) => void;
}

interface IMagazine {
    title: string;
    publisher: string;
}

interface IShelfItem {
    title: string;
}

interface IKeyValuePair<K, V> extends Array<K | V> {
    0: K;
    1: V;
}

export { IBook, IDamageLogger as Logger, IAuthor, IKeyValuePair, ILibrarian, IMagazine, IShelfItem };
