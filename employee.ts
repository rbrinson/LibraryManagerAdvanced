export class Employee {
    public title: string = "";

    public addToSchedule(): void {
        console.log("Employee added to schedule.");
    }

    public logTitle(): void {
        console.log(`Employee has the title: ${this.title}.`);
    }
}
