// import { ChildrensBook } from "./childrensbook";
// import { ElectronicBook } from "./electronicbook";

export class LibraryBook {
    public Checkout(): this {
        // do checkout stuff
        console.log("Checking out a book.");
        return this;
    }

    public Checkin(): this {
        // do checkin stuff
        if (this instanceof ChildrensBook) {
            console.log("Checking in a childrens book.");
        }
        if (this instanceof ElectronicBook) {
            console.log("Checking in an electronic book.");
        }
        return this;
    }
}

// Putting these two classes in a separate file was causing an issue
// where node was not loading the ElectronicBook module and was returning
// a run time error

// Users/rbrinson/Development/Web/typescript/LibraryManagerAdvanced/js/electronicbook.js:7
//         extendStatics(d, b);
//         ^

// TypeError: Object prototype may only be an Object or null: undefined
//     at setPrototypeOf (<anonymous>)
//     at __extends (/Users/rbrinson/Development/Web/typescript/LibraryManagerAdvanced/js/electronicbook.js:7:9)
//     at /Users/rbrinson/Development/Web/typescript/LibraryManagerAdvanced/js/electronicbook.js:15:5
//     at Object.<anonymous> (/Users/rbrinson/Development/Web/typescript/LibraryManagerAdvanced/js/electronicbook.js:24:2)
//     at Module._compile (internal/modules/cjs/loader.js:702:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)
//     at Module.load (internal/modules/cjs/loader.js:612:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:551:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:543:3)
//     at Module.require (internal/modules/cjs/loader.js:650:17)

// tslint:disable-next-line:max-classes-per-file
export class ChildrensBook extends LibraryBook {
    public Clean(): this {
        // clean the crayon marks
        console.log("Cleaning the book.");
        return this;
    }
}

// tslint:disable-next-line:max-classes-per-file
export class ElectronicBook extends LibraryBook {
    public RemoveFromCustomerDevice(): this {
        console.log("Removing book from device.");
        return this;
    }
}
