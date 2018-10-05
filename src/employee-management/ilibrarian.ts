import { IPerson } from "./";

interface ILibrarian extends IPerson {
    department: string;
    assistCustomer: (custName: string) => void;
}

export { ILibrarian };
