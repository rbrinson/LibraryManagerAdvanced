import { IBook, ILibraryBookTitleLookupCallback, IMagazine } from "../..";
import { Category } from "./enums";

// tslint:disable-next-line:no-namespace
namespace Util {
    export function CalculateLateFee(daysLate: number): number {
        return daysLate * .25;
    }

    export function MaxBooksAllowed(age: number): number {
        if (age < 12) {
            return 3;
        } else {
            return 10;
        }
    }

    function privateFunc(): void {
        console.log("This is private...");
    }

    export function Purge<T>(inventory: T[]): T[] {
        // implement fancy logic here...
        return inventory.splice(2, inventory.length);
    }

    export function GetAllBooks(): IBook[] {
        const books: IBook[] = [
            { author: "James Joyce", available: true, category: Category.Fiction,
                id: 1, title: "Ulysses" },
            { author: "Ernest Hemingway", available: false, category: Category.Fiction,
                id: 2, title: "A Farewell to Arms" },
            { author: "Maya Angelou", available: true, category: Category.Poetry,
                id: 3, title: "I Know Why the Caged Bird Sings" },
            { author: "Herman Melville", available: true, category: Category.Fiction,
                id: 4, title: "Moby Dick" },
        ];

        return books;
    }

    export function GetAllMagazines(): IMagazine[] {
        const magazines: IMagazine[] = [
            { publisher: "Smarty Publishing", title: "Python Programmer Review" },
            { publisher: "Georgia State University", title: "Five Points" },
            { publisher: "Literary Press", title: "Poetry Quarterly" },
            { publisher: "Sports Press", title: "Baseball News" },
        ];

        return magazines;
    }

    export function LogFirstAvailable(books = GetAllBooks()): void {
        const numberOfBooks: number = books.length;
        let firstAvailable: string = "";

        for (const currentBook of books) {
            if (currentBook.available) {
                firstAvailable = currentBook.title;
                break;
            }
        }

        console.log(`Total Books: ${numberOfBooks}`);
        console.log(`First Available: ${firstAvailable}`);
    }

    export function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): string[] {
        console.log(`Getting books in category: ${Category[categoryFilter]}`);

        const allBooks = GetAllBooks();
        const filteredTitles: string[] = [];

        for (const currentBook of allBooks) {
            if (currentBook.category === categoryFilter) {
                filteredTitles.push(currentBook.title);
            }
        }

        return filteredTitles;
    }

    export function LogBookTitles(titles: string[]): void {
        for (const title of titles) {
            console.log(title);
        }
    }

    export function GetBookById(id: number): IBook {
        const allBooks = GetAllBooks();
        return allBooks.filter((book) => book.id === id)[0];
    }

    export function CreateCustomerId(name: string, id: number): string {
        return name + id;
    }

    export function CreateCustomer(name: string, age?: number, city?: string): void {
        console.log(`Creating customer ${name}`);

        if (age) {
            console.log(`Age: ${age}`);
        }

        if (city) {
            console.log(`City: ${city}`);
        }
    }

    export function CheckoutBooks(customer: string, ...bookIds: number[]): string[] {
        console.log(`Checking out books for ${customer}.`);

        const booksCheckedOut: string[] = [];

        for (const id of bookIds) {
            const book = GetBookById(id);
            if (book.available) {
                booksCheckedOut.push(book.title);
            }
        }

        return booksCheckedOut;
    }

    export function GetTitles(author: string): string[];
    // tslint:disable-next-line:unified-signatures
    export function GetTitles(available: boolean): string[];
    export function GetTitles(bookProperty: any): string[] {
        const allBooks = GetAllBooks();
        const foundTitles: string[] = [];

        if (typeof bookProperty === "string") {
            // get all books by a particular author
            for (const book of allBooks) {
                if (book.author === bookProperty) {
                    foundTitles.push(book.title);
                }
            }
        } else if (typeof bookProperty === "boolean") {
            // get all books based on specified availability
            for (const book of allBooks) {
                if (book.available === bookProperty) {
                    foundTitles.push(book.title);
                }
            }
        }

        return foundTitles;
    }

    export function PrintBook(book: IBook): void {
        console.log(`${book.title} by ${book.author}`);
    }

    export function randomReadingMaterialGenerator(min: number, max: number): IBook | IMagazine {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return (randomNumber % 2 === 0) ? Util.GetAllBooks()[0] : Util.GetAllMagazines()[0];
    }

    export function isBook(text: IBook | IMagazine): text is IBook {
        return (text as IBook).author !== undefined;
    }

    export function getBooksByCategoryAsync(cat: Category, callback: ILibraryBookTitleLookupCallback): void {
        setTimeout(() => {
            try {
                const foundBooks: string[] = Util.GetBookTitlesByCategory(cat);

                if (foundBooks.length > 0) {
                    callback(null, foundBooks);
                } else {
                    throw new Error("No books found.");
                }
            } catch (error) {
                callback(error, []);
            }
        }, 2000);
    }

    export function logCategorySearchAsync(err: Error | null, titles: string[]): void {
        if (err) {
            console.log(`Error Message: ${err.message}`);
        } else {
            console.log("Found the following titles:");
            titles.forEach((title) => {
                console.log(title);
            });
        }
    }

    export function getBooksByCategoryPromise(cat: Category): Promise<string[]> {
        const p: Promise<string[]> = new Promise((resolve, reject) => {
            setTimeout(() => {
                const booksFound: string[] = Util.GetBookTitlesByCategory(cat);
                if (booksFound.length > 0) {
                    resolve(booksFound);
                } else {
                    reject("No books found for that category.");
                }
            }, 2000);
        });

        return p;
    }

    export function logCategorySearch(titles: string[]): void {
        console.log("Found the following titles:");
        titles.forEach((title) => {
            console.log(title);
        });
    }

    export async function getBooksByCategory(cat: Category) {
        await setTimeout(() => {
            const foundBooks = Util.GetBookTitlesByCategory(cat);
            Util.logCategorySearch(foundBooks);
        }, 2000);
    }
}

export { Util };
