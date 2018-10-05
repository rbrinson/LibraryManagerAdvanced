import { UniversityLibrarian } from "./university-librarian";

declare module "./university-librarian" {
    interface UniversityLibrarian {
        phone: string;
        hostSeminar(topic: string): void;
    }
}

UniversityLibrarian.prototype.hostSeminar = function(topic) {
    console.log(`Hosting a seminar on ${topic}.`);
};
