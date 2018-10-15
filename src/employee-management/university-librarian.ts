import { Decorators } from "../..";
import { Employee } from "./";
import { ILibrarian } from "./";
import { Researcher } from "./";

export const CLASS_INFO = Symbol();

@Decorators.logger
export class UniversityLibrarian implements ILibrarian, Employee, Researcher {
    public set name(newName: string) {
        this.Name = newName;
    }

    public get name() {
        return this.Name;
    }

    public set email(newEmail: string) {
        this.Email = newEmail;
    }

    public get email() {
        return this.Email;
    }

    public set department(newDepartment: string) {
        this.Department = newDepartment;
    }

    public get department() {
        return this.Department;
    }

    // tslint:disable-next-line:ban-types
    public static [Symbol.hasInstance](obj: Object) {
        return obj.hasOwnProperty("Name") && "assistFaculty" in obj;
    }
    public title: string = "";

    private Name: string = "";
    private Email: string = "";
    private Department: string = "";

    public [CLASS_INFO](): void {
        console.log("This class respresents a University Librarian.");
    }

    public addToSchedule(): void {
        // empty
    }
    public logTitle(): void {
        // empty
    }
    public doResearch(topic: string): void {
        // empty
    }

    public assistCustomer(custName: string): void {
        console.log(`${this.Name} is assisting ${custName}.`);
    }

    @Decorators.writable(true)
    public assistFaculty() {
        console.log("Assisting faculty.");
    }
}
