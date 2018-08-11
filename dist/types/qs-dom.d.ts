export declare type SupportedElement = HTMLElement | Document | Window;
export declare type ElementsOrSelector = SupportedElement[] | SupportedElement | NodeList | string;
export declare class QSDom {
    private element?;
    private elements?;
    constructor(elementsOrSelector: ElementsOrSelector);
    readonly $: HTMLElement;
    readonly length: number;
    readonly notEmpty: boolean;
    readonly width: number;
    readonly fullWidth: number;
    readonly height: number;
    readonly fullHeight: number;
    readonly absolutePosition: {
        top: number;
        left: number;
    };
    get(index?: number): HTMLElement;
    getAll(): SupportedElement[];
    getIndexInParent(): number;
    find(selector: string): Element;
    findAll(selector: string): QSDom;
    forEach(callback: (element: HTMLElement, index: number, total: number) => void): void;
    map<T>(callback: (element: HTMLElement, index: number, total: number) => T): T[];
    filter(callback: (element: HTMLElement, index: number, total: number) => boolean): SupportedElement[];
    addClass(...classNames: string[]): void;
    removeClass(...classNames: string[]): void;
    hasClass(className: string): boolean;
    remove(): void;
    insertAfter(element: HTMLElement): void;
    insertBefore(element: HTMLElement): void;
    append(element: HTMLElement): void;
    prepend(element: HTMLElement): void;
    on(eventNames: string, callback: EventListener): void;
    onChildEventMatch(eventNames: string, elementOrSelector: string | HTMLElement, callback: (event: Event, matchedElement: HTMLElement) => void): void;
    dispatchEvent<T>(eventName: string, data?: T): void;
    private getEventPath;
    private normalizeInput;
    private convertNodeListToArray;
    private getElementsFromSelector;
    private elementMatchesSelector;
    private isEventWithPath;
    private isQueryable;
    private isElement;
}
export declare const factory: (elementsOrSelector: ElementsOrSelector) => QSDom;
export default factory;
