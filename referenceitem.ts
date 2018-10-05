abstract class ReferenceItem {
    public static department: string = "Research";
    private Title: string;
    private Year: number;
    private Publisher: string = "";

    constructor(newTitle: string, newYear: number) {
        console.log("Creating a new ReferenceItem...");
        this.Title = newTitle;
        this.Year = newYear;
    }

    public get title(): string {
        return this.Title;
    }

    protected get year(): number {
        return this.Year;
    }

    public get publisher(): string {
        return this.Publisher.toUpperCase();
    }

    public set publisher(newPublisher: string) {
        this.Publisher = newPublisher;
    }

    public printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    public abstract printCitation(): void;
}

export { ReferenceItem };
