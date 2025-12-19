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

export class TableGrid {
  private element: HTMLElement;
  private grid: HTMLElement;
  private label: HTMLElement;
  private options: TableGridOptions;
  private maxRows: number;
  private maxCols: number;

  constructor(options: TableGridOptions = {}) {
    this.options = options;
    this.maxRows = options.maxRows || 10;
    this.maxCols = options.maxCols || 10;

    // Create container
    this.element = document.createElement('div');
    this.element.className = `likha-table-grid ${options.className || ''}`.trim();

    // Create grid
    this.grid = document.createElement('div');
    this.grid.className = 'likha-table-grid__grid';
    this.grid.style.display = 'grid';
    this.grid.style.gridTemplateColumns = `repeat(${this.maxCols}, 1fr)`;
    this.grid.style.gap = '2px';
    this.grid.style.padding = '8px';

    // Create cells
    for (let row = 0; row < this.maxRows; row++) {
      for (let col = 0; col < this.maxCols; col++) {
        const cell = document.createElement('div');
        cell.className = 'likha-table-grid__cell';
        cell.dataset.row = String(row);
        cell.dataset.col = String(col);
        
        cell.addEventListener('mouseenter', () => {
          this.updateHover(row + 1, col + 1);
        });

        cell.addEventListener('click', () => {
          this.select(row + 1, col + 1);
        });

        this.grid.appendChild(cell);
      }
    }

    // Create label
    this.label = document.createElement('div');
    this.label.className = 'likha-table-grid__label';
    this.label.textContent = 'Insert Table';

    // Assemble
    this.element.appendChild(this.grid);
    this.element.appendChild(this.label);

    // Reset on mouse leave
    this.element.addEventListener('mouseleave', () => {
      this.updateHover(0, 0);
    });
  }

  /**
   * Update hover state
   */
  private updateHover(rows: number, cols: number): void {
    // Update cells
    const cells = this.grid.querySelectorAll('.likha-table-grid__cell');
    cells.forEach((cell: Element) => {
      const cellEl = cell as HTMLElement;
      const row = parseInt(cellEl.dataset.row || '0');
      const col = parseInt(cellEl.dataset.col || '0');

      if (row < rows && col < cols) {
        cellEl.classList.add('likha-table-grid__cell--active');
      } else {
        cellEl.classList.remove('likha-table-grid__cell--active');
      }
    });

    // Update label
    if (rows > 0 && cols > 0) {
      this.label.textContent = `${rows} × ${cols}`;
    } else {
      this.label.textContent = 'Insert Table';
    }
  }

  /**
   * Select table dimensions
   */
  private select(rows: number, cols: number): void {
    if (this.options.onSelect) {
      this.options.onSelect(rows, cols);
    }
  }

  /**
   * Get the DOM element
   */
  getElement(): HTMLElement {
    return this.element;
  }

  /**
   * Destroy the grid
   */
  destroy(): void {
    this.element.remove();
  }
}
