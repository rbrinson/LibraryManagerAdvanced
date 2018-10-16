// tslint:disable-next-line:no-namespace
namespace Decorators {
    export function sealed(name: string) {
        // tslint:disable-next-line:ban-types
        return (target: Function): void => {
            console.log(`Sealing the constructor: ${name}.`);
            Object.seal(target);
            Object.seal(target.prototype);
        };
    }

    // tslint:disable-next-line:ban-types
    export function logger<TFunction extends Function>(target: TFunction): TFunction {
        // tslint:disable-next-line
        const newConstructor: Function = function() {
            console.log(`Creating new instance.`);
            console.log(target);
        };

        newConstructor.prototype = Object.create(target.prototype);
        newConstructor.prototype.constructor = target;
        return newConstructor as TFunction;
    }

    export function writable(isWritable: boolean) {
        // tslint:disable-next-line:ban-types
        return (target: Object,
                propertyKey: string,
                descriptor: PropertyDescriptor) => {
            console.log(`Setting ${propertyKey} to be ${(isWritable) ? "read-write" : "read-only"}.`);
            descriptor.writable = isWritable;
        };
    }
}

export { Decorators };
