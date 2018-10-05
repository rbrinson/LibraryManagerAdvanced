import { IShelfItem } from "./interfaces";

export default class Shelf<T extends IShelfItem> {
    private items: T[] = new Array<T>();

    public add(item: T): void {
        this.items.push(item);
    }

    public getFirst(): T {
        return this.items[0];
    }

    public find(title: string): T {
        return this.items.filter((item) => item.title === title)[0];
    }

    public printTitles(): void {
        this.items.forEach((item) => console.log(item.title));
    }
}
