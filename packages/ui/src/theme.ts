/**
 * Default theme styles for Likha Editor
 */

export const defaultTheme = `
/* Toolbar */
.likha-toolbar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  flex-wrap: wrap;
}

.likha-toolbar--sticky {
  position: sticky;
  top: 0;
  z-index: 100;
}

.likha-toolbar__group {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.likha-toolbar__separator {
  width: 1px;
  height: 1.5rem;
  background: #e5e7eb;
  margin: 0 0.5rem;
}

/* Button */
.likha-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  transition: all 0.15s ease;
  min-width: 2rem;
  min-height: 2rem;
}

.likha-button:hover {
  background: #f3f4f6;
  border-color: #e5e7eb;
}

.likha-button:active {
  background: #e5e7eb;
}

.likha-button--active {
  background: #3b82f6;
  color: #ffffff;
  border-color: #3b82f6;
}

.likha-button--active:hover {
  background: #2563eb;
  border-color: #2563eb;
}

.likha-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.likha-button__icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.likha-button__icon svg {
  width: 1rem;
  height: 1rem;
}

.likha-button__label {
  white-space: nowrap;
}

/* Dropdown */
.likha-dropdown {
  position: relative;
  display: inline-block;
}

.likha-dropdown__button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
  min-width: 8rem;
}

.likha-dropdown__button:hover {
  background: #f9fafb;
  border-color: #9ca3af;
}

.likha-dropdown--open .likha-dropdown__button {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.likha-dropdown__menu {
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  min-width: 100%;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 50;
  max-height: 16rem;
  overflow-y: auto;
}

.likha-dropdown__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: none;
  text-align: left;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
  transition: background 0.15s ease;
}

.likha-dropdown__item:hover {
  background: #f3f4f6;
}

.likha-dropdown__item--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.likha-dropdown__item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.likha-dropdown__item-icon svg {
  width: 1rem;
  height: 1rem;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .likha-toolbar {
    background: #1f2937;
    border-color: #374151;
  }

  .likha-toolbar__separator {
    background: #374151;
  }

  .likha-button {
    color: #e5e7eb;
  }

  .likha-button:hover {
    background: #374151;
    border-color: #4b5563;
  }

  .likha-button:active {
    background: #4b5563;
  }

  .likha-dropdown__button {
    background: #1f2937;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .likha-dropdown__button:hover {
    background: #374151;
    border-color: #6b7280;
  }

  .likha-dropdown__menu {
    background: #1f2937;
    border-color: #374151;
  }

  .likha-dropdown__item {
    color: #e5e7eb;
  }

  .likha-dropdown__item:hover {
    background: #374151;
  }
}
`;

/**
 * Inject default theme styles into document
 */
export function injectTheme(): void {
  const existingStyle = document.getElementById('likha-theme');
  if (existingStyle) return;

  const style = document.createElement('style');
  style.id = 'likha-theme';
  style.textContent = defaultTheme;
  document.head.appendChild(style);
}
