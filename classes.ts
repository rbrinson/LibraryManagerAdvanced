import { Employee } from "./employee";
import * as Interfaces from "./interfaces";
import "./librarianextension";
import { Researcher } from "./researcher";

class UniversityLibrarian implements Interfaces.ILibrarian, Employee, Researcher {
    public title: string = "";

    private Name: string = "";
    private Email: string = "";
    private Department: string = "";

    public addToSchedule(): void {
        // empty
    }
    public logTitle(): void {
        // empty
    }
    public doResearch(topic: string): void {
        // empty
    }

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

    public assistCustomer(custName: string): void {
        console.log(`${this.Name} is assisting ${custName}.`);
    }
}

export { UniversityLibrarian };
