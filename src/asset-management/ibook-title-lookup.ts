interface ILibraryBookTitleLookupCallback {
    // tslint:disable-next-line:callable-types
    (err: Error | null, titles: string[]): void;
}

export { ILibraryBookTitleLookupCallback };
