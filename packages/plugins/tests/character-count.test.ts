import { describe, it, expect } from 'vitest';
import { CharacterCountPlugin } from '../src/character-count';

describe('CharacterCountPlugin', () => {
  it('should have correct name', () => {
    const plugin = new CharacterCountPlugin({ target: '#char-count' });
    expect(plugin.name).toBe('characterCount');
  });

  it('should initialize without errors', () => {
    const plugin = new CharacterCountPlugin({ target: '#char-count' });
    const mockEditor = {
      getHTML: () => '<p>Hello world</p>',
      view: {
        state: {
          doc: {
            textContent: 'Hello world',
          },
        },
        dom: document.createElement('div'),
      },
    };

    expect(() => plugin.init(mockEditor as any)).not.toThrow();
  });

  it('should provide getCharacterCount command', () => {
    const plugin = new CharacterCountPlugin({ target: '#char-count' });
    const commands = plugin.commands();
    
    expect(commands).toHaveProperty('getCharacterCount');
    expect(typeof commands.getCharacterCount).toBe('function');
  });

  it('should provide getWordCount command', () => {
    const plugin = new CharacterCountPlugin({ target: '#char-count' });
    const commands = plugin.commands();
    
    expect(commands).toHaveProperty('getWordCount');
    expect(typeof commands.getWordCount).toBe('function');
  });

  it('getCharacterCount should count characters correctly', () => {
    const plugin = new CharacterCountPlugin({ target: '#char-count' });
    const commands = plugin.commands();
    
    const mockEditor = {
      getHTML: () => '<p>Hello world</p>',
    };
    
    const count = commands.getCharacterCount(mockEditor);
    expect(count).toBe(11);
  });

  it('getWordCount should count words correctly', () => {
    const plugin = new CharacterCountPlugin({ target: '#char-count' });
    const commands = plugin.commands();
    
    const mockEditor = {
      getHTML: () => '<p>Hello world this is a test</p>',
    };
    
    const count = commands.getWordCount(mockEditor);
    expect(count).toBe(6);
  });
});
