/**
 * Dropdown menu component
 */
export interface DropdownOption {
    value: string;
    label: string;
    icon?: string;
    disabled?: boolean;
}
export interface DropdownOptions {
    items: DropdownOption[];
    placeholder?: string;
    onSelect?: (value: string) => void;
    className?: string;
}
export declare class Dropdown {
    private element;
    private button;
    private menu;
    private options;
    private isOpen;
    constructor(options: DropdownOptions);
    /**
     * Toggle dropdown open/closed
     */
    toggle(): void;
    /**
     * Open dropdown menu
     */
    open(): void;
    /**
     * Close dropdown menu
     */
    close(): void;
    /**
     * Select an item
     */
    select(value: string, label: string): void;
    /**
     * Get the dropdown DOM element
     */
    getElement(): HTMLElement;
    /**
     * Destroy the dropdown
     */
    destroy(): void;
}
//# sourceMappingURL=dropdown.d.ts.map