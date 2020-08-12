import {
    Category,
    ChildrensBook,
    CLASS_INFO,
    ElectronicBook,
    Employee,
    IBook,
    IKeyValuePair,
    ILibrarian,
    IMagazine,
    PublicLibrarian,
    Researcher,
    UniversityLibrarian,
    Util,
} from "./";
import Encyclopedia from "./src/asset-management/encyclopedia";

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

function PrintTitle(material: PrintMaterial): void {
    console.log(material.title);
}

function GetMagazineByFrequency(preferredFrequency: Frequency) {
    // do something here.
}

function logVisitor(param: number | string) {
    if (typeof param === "number") {
        console.log (`${param} new visitors arrived. `);
    } else {
        console.log(`${param.toUpperCase()} visited.`);
    }
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

logVisitor(5);
logVisitor("Leigh Ann");

const lib: ILibrarian = new PublicLibrarian();

if (lib instanceof UniversityLibrarian) {
    lib.assistFaculty();
}
if (lib instanceof PublicLibrarian) {
    lib.teachCommunity();
}

const uvLib: ILibrarian = new UniversityLibrarian();
if (lib instanceof UniversityLibrarian) {
    lib.assistFaculty();
}

const customTypeChecking: IBook | IMagazine = Util.randomReadingMaterialGenerator(0, 50);
if (Util.isBook(customTypeChecking)) {
    console.log(`The book's author is ${customTypeChecking.author}.`);
} else {
    console.log(`The magazine's publisher is ${customTypeChecking.publisher}.`);
}

const item = new Encyclopedia("Encyclopdia Britanica", 2018, 2);
item.printItem();

const mySymbol = Symbol("first_symbol");
const anotherSymbol = Symbol("first_symbol");

// console.log(mySymbol === anotherSymbol);
console.log(typeof mySymbol);

const myObject = {
    [mySymbol]: "value for my symbol key",
};

const univLibrarian = new UniversityLibrarian();
univLibrarian.name = "Martha";
univLibrarian[CLASS_INFO]();

const libraryCustomer = {
    Name: "Thorne",
    assistFaculty: (facultyName: string) => {
        console.log(`${name} is assisting ${facultyName}.`);
    },
};

if (libraryCustomer instanceof UniversityLibrarian) {
    console.log("A helpful librarian.");
} else {
    console.log("Not a librarian.");
}

if (univLibrarian instanceof UniversityLibrarian) {
    console.log("A helpful librarian.");
} else {
    console.log("Not a librarian.");
}

try {
    libraryCustomer.assistFaculty = () => console.log("assistFaculty replacement method");
    (lib as PublicLibrarian).teachCommunity = () => console.log("teachCommunicty replacement method");
} catch (error) {
    console.log(error.message);
}

libraryCustomer.assistFaculty("John");
(lib as PublicLibrarian).teachCommunity();

console.log("Beginning callback search...");
Util.getBooksByCategoryAsync(Category.Biography, Util.logCategorySearchAsync);
console.log("Search submitted...");

console.log("Beginning promises search...");
Util.getBooksByCategoryPromise(Category.Biography)
    .then((titles) => {
        Util.logCategorySearch(titles);
        return titles.length;
    }, (reason) => 0)
    .then((numberOfBooks) => {
        console.log(`Number of Books found: ${numberOfBooks}.`);
    })
    .catch((reason) => {
        console.log(`Error Message: ${reason}`);
    });
console.log("Search submitted...");

console.log("Beginning async/await search...");
Util.getBooksByCategory(Category.Fiction)
    .catch((reason) => { console.log(reason); });
console.log("Search submitted...");
