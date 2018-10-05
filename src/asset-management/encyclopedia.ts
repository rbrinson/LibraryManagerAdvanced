import { ReferenceItem } from "./referenceitem";

export default class Encyclopedia extends ReferenceItem {
    public edition: number;

    constructor(newTitle: string, newYear: number, newEdition: number) {
        super(newTitle, newYear);
        this.edition = newEdition;
    }

    public printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    public printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}
