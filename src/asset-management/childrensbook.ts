import { LibraryBook } from "./librarybook";

export class ChildrensBook extends LibraryBook {
    public Checkin(): this  {
        // do checkin stuff
        console.log("Checking in a childrens book.");
        return this;
    }

    public Clean(): this {
        // clean the crayon marks
        console.log("Cleaning the book.");
        return this;
    }
}
