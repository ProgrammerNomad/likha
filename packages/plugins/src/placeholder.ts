import { Plugin } from '@likha/core';

/**
 * Placeholder plugin
 * Shows placeholder text when editor is empty
 */
export class PlaceholderPlugin extends Plugin {
  name = 'placeholder';

  init(editor: any): void {
    super.init(editor);

    const placeholderText = this.getConfig<string>('text', 'Start typing...');
    
    // Add placeholder CSS
    const style = document.createElement('style');
    style.textContent = `
      .ProseMirror p.is-empty:first-child::before {
        content: "${placeholderText}";
        color: #aaa;
        pointer-events: none;
        position: absolute;
      }
    `;
    document.head.appendChild(style);
  }
}
