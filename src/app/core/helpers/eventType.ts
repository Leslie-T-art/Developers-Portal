/**
 * Defines subscriber event
 */
export class AppEvent<T> {
    constructor (
        public type: string,
        public payload: T,
    ) { }
}