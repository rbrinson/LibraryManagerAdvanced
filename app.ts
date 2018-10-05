import {
    Util,
    Category,
    IKeyValuePair,
    Logger,
    IBook,
    ChildrensBook,
    ElectronicBook,
    ReferenceItem,
    IMagazine,
    Employee,
    IAuthor,
    ILibrarian,
    Researcher,
    UniversityLibrarian
} from "./";
import "./src/employee-management/librarianextension";

type Frequency = "monthly" | "annually";
type PrintMaterial = IBook | IMagazine;
type Serial = IBook & IMagazine;

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

function PrintBookInfo({title: selectTitle, author: selectAuthor}: IBook): void {
    console.log(`${selectTitle} was authored by ${selectAuthor}`);
}

function LogFavoriteBooks([firstBook, secondBook, ...others]: IBook[]) {
    PrintBookInfo(firstBook);
    PrintBookInfo(secondBook);

    for (const book of others) {
        PrintBookInfo(book);
    }
}

function PrintTitle(item: PrintMaterial): void {
    console.log(item.title);
}

function GetMagazineByFrequency(preferredFrequency: Frequency) {
    // do something here.
}

console.log("Welcome to Advanced TypeScript!");

applyMixins(UniversityLibrarian, [ Employee, Researcher ]);

const [book1, book2] = Util.GetAllBooks();

LogFavoriteBooks(Util.GetAllBooks());

const {title: booktitle, author: bookauthor} = book1;
console.log(booktitle);
console.log(bookauthor);
PrintBookInfo(book1);

const schoolBooks: IBook[] = [
    { id: 10, title: "The Great Gatsby", author: " F. Scott Fitzgerald", available: true, category: Category.Fiction },
    { id: 11, title: "Crime and Punishment", author: "Fyodor Dostoevsky", available: true, category: Category.Fiction },
    { id: 12, title: "Clear Light of Day", author: "Anita Desai", available: true, category: Category.Fiction },
];

const booksRead: IBook[] = Util.GetAllBooks();
booksRead.push(...schoolBooks);
console.log(booksRead);

const poets: string[] = [ "Shelley", "Collins", "Hughes" ];
const authors: string[] = [ "Tolstoy", "Fitzgerald", ...poets ];
console.log(authors);

const catalogLocation: IKeyValuePair<string, IBook> = [ "A 123.456", book1 ];

const allBooks: IBook[] = Util.GetAllBooks();
const allMagazines: IMagazine[] = Util.GetAllMagazines();

const readingMaterial: PrintMaterial = allMagazines[0];
PrintTitle(readingMaterial);

const serialNovel: Serial = {
    author: "Occasional Pen",
    available: true,
    category: Category.Fiction,
    id: 100,
    publisher: "Serial Press",
    title: "The Gradual Tale",
};

const newLibrarian = new UniversityLibrarian();
newLibrarian.doResearch("Economics");
newLibrarian.hostSeminar("TypeScript and NodeJS");

// fluent API using polymorphic this
const eBook: ElectronicBook = new ElectronicBook();
const kidbook: ChildrensBook = new ChildrensBook();

kidbook.Checkin()
    .Clean()
    .Checkout();

eBook.Checkin()
    .RemoveFromCustomerDevice()
    .Checkout();
