/**
 * Button component for toolbar actions
 */
export interface ButtonOptions {
    icon?: string;
    label?: string;
    title?: string;
    onClick?: (event: MouseEvent) => void;
    isActive?: () => boolean;
    className?: string;
    disabled?: boolean;
}
export declare class Button {
    private element;
    private options;
    private activeCheckInterval?;
    constructor(options: ButtonOptions);
    /**
     * Start checking active state periodically
     */
    private startActiveStateCheck;
    /**
     * Update the active state class
     */
    private updateActiveState;
    /**
     * Get the button DOM element
     */
    getElement(): HTMLButtonElement;
    /**
     * Set button enabled/disabled state
     */
    setDisabled(disabled: boolean): void;
    /**
     * Manually set active state
     */
    setActive(active: boolean): void;
    /**
     * Destroy the button
     */
    destroy(): void;
}
//# sourceMappingURL=button.d.ts.map