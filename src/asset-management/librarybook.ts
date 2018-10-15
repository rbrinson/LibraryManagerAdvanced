export abstract class LibraryBook {
    public abstract Checkin(): this;

    public Checkout(): this {
        // do checkout stuff
        console.log("Checking out a book.");
        return this;
    }
}
