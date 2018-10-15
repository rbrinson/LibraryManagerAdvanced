interface IDamageLogger {
    // tslint:disable-next-line:callable-types
    (reason: string): void;
}

export { IDamageLogger as Logger };
