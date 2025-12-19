/**
 * Toolbar component
 * Provides a container for editor action buttons
 */
export interface ToolbarOptions {
    container?: HTMLElement | string;
    sticky?: boolean;
    className?: string;
}
export declare class Toolbar {
    private element;
    private container;
    constructor(options?: ToolbarOptions);
    /**
     * Add a button group to the toolbar
     */
    addGroup(buttons: HTMLElement[]): void;
    /**
     * Add a single button to the toolbar
     */
    addButton(button: HTMLElement): void;
    /**
     * Add a separator between button groups
     */
    addSeparator(): void;
    /**
     * Get the toolbar DOM element
     */
    getElement(): HTMLElement;
    /**
     * Show the toolbar
     */
    show(): void;
    /**
     * Hide the toolbar
     */
    hide(): void;
    /**
     * Destroy the toolbar
     */
    destroy(): void;
}
//# sourceMappingURL=toolbar.d.ts.map