import { UniversityLibrarian } from "./university-librarian";

declare module "./university-librarian" {
    // tslint:disable-next-line:interface-name
    interface UniversityLibrarian {
        phone: string;
        hostSeminar(topic: string): void;
    }
}

UniversityLibrarian.prototype.hostSeminar = (topic) => {
    console.log(`Hosting a seminar on ${topic}.`);
};

export { UniversityLibrarian };
