import { describe, it, expect } from 'vitest';
import { PlaceholderPlugin } from '../src/placeholder';

describe('PlaceholderPlugin', () => {
  it('should have correct name', () => {
    const plugin = new PlaceholderPlugin({ text: 'Enter text...' });
    expect(plugin.name).toBe('placeholder');
  });

  it('should store placeholder text', () => {
    const text = 'Type something...';
    const plugin = new PlaceholderPlugin({ text });
    expect((plugin as any).text).toBe(text);
  });

  it('should initialize without errors', () => {
    const plugin = new PlaceholderPlugin({ text: 'Test' });
    const mockEditor = {
      view: {
        dom: document.createElement('div'),
      },
    };

    expect(() => plugin.init(mockEditor as any)).not.toThrow();
  });

  it('should inject style element on init', () => {
    const plugin = new PlaceholderPlugin({ text: 'Type here...' });
    const containerDiv = document.createElement('div');
    const mockEditor = {
      view: {
        dom: containerDiv,
      },
    };

    plugin.init(mockEditor as any);
    
    // Check if style element was added to the head
    const styles = document.head.querySelectorAll('style');
    const placeholderStyle = Array.from(styles).find(style => 
      style.textContent?.includes('Type here...')
    );
    
    expect(placeholderStyle).toBeDefined();
  });
});
