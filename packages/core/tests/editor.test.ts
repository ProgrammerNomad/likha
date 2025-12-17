import { describe, it, expect, beforeEach } from 'vitest';
import { Editor } from '../src/editor';

describe('Editor', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('should create an editor instance', () => {
    const editor = new Editor({ element: container });
    expect(editor).toBeDefined();
  });

  it('should initialize with empty content', () => {
    const editor = new Editor({ element: container });
    const html = editor.getHTML();
    expect(html).toBeTruthy();
  });

  it('should accept initial content', () => {
    const editor = new Editor({
      element: container,
      content: '<p>Hello World</p>',
    });
    const html = editor.getHTML();
    expect(html).toContain('Hello World');
  });

  it('should update content', () => {
    const editor = new Editor({ element: container });
    editor.setContent('<p>New content</p>');
    const html = editor.getHTML();
    expect(html).toContain('New content');
  });

  it('should destroy cleanly', () => {
    const editor = new Editor({ element: container });
    expect(() => editor.destroy()).not.toThrow();
  });
});
