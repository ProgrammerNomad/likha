/**
 * Table Grid Selector
 * Visual grid for selecting table dimensions
 */
export interface TableGridOptions {
    maxRows?: number;
    maxCols?: number;
    onSelect?: (rows: number, cols: number) => void;
    className?: string;
}
export declare class TableGrid {
    private element;
    private grid;
    private label;
    private options;
    private maxRows;
    private maxCols;
    constructor(options?: TableGridOptions);
    /**
     * Update hover state
     */
    private updateHover;
    /**
     * Select table dimensions
     */
    private select;
    /**
     * Get the DOM element
     */
    getElement(): HTMLElement;
    /**
     * Destroy the grid
     */
    destroy(): void;
}
//# sourceMappingURL=table-grid.d.ts.map