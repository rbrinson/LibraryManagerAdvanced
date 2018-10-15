import { Decorators } from "../..";
import { ILibrarian } from "./";

@Decorators.logger
@Decorators.sealed("PublicLibrarian")
export class PublicLibrarian implements ILibrarian {
    private Name: string = "";
    private Email: string = "";
    private Department: string = "";

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

    public assistCustomer(custName: string) {
        console.log("Assisting customer.");
    }

    @Decorators.writable(false)
    public teachCommunity() {
        console.log("Teaching community.");
    }
}
