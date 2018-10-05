import { LibraryBook } from "./librarybook";

export class ElectronicBook extends LibraryBook {
    public Checkin(): this  {
        // do checkin stuff
        console.log("Checking in an electronic book.");
        return this;
    }

    public RemoveFromCustomerDevice(): this {
        console.log("Removing book from device.");
        return this;
    }
}
