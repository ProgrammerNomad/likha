import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Toolbar } from '../src/toolbar';

describe('Toolbar', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  it('should create a toolbar element', () => {
    const toolbar = new Toolbar({ container });
    const element = toolbar.getElement();
    
    expect(element).toBeDefined();
    expect(element.className).toContain('likha-toolbar');
  });

  it('should apply custom className', () => {
    const toolbar = new Toolbar({ 
      container,
      className: 'custom-toolbar' 
    });
    
    expect(toolbar.getElement().className).toContain('custom-toolbar');
  });

  it('should apply sticky class when sticky option is true', () => {
    const toolbar = new Toolbar({ 
      container,
      sticky: true 
    });
    
    expect(toolbar.getElement().className).toContain('likha-toolbar--sticky');
  });

  it('should add button group', () => {
    const toolbar = new Toolbar({ container });
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    
    toolbar.addGroup([button1, button2]);
    
    const groups = toolbar.getElement().querySelectorAll('.likha-toolbar__group');
    expect(groups.length).toBe(1);
    expect(groups[0].children.length).toBe(2);
  });

  it('should add single button', () => {
    const toolbar = new Toolbar({ container });
    const button = document.createElement('button');
    
    toolbar.addButton(button);
    
    expect(toolbar.getElement().contains(button)).toBe(true);
  });

  it('should add separator', () => {
    const toolbar = new Toolbar({ container });
    
    toolbar.addSeparator();
    
    const separators = toolbar.getElement().querySelectorAll('.likha-toolbar__separator');
    expect(separators.length).toBe(1);
  });

  it('should show and hide toolbar', () => {
    const toolbar = new Toolbar({ container });
    
    toolbar.hide();
    expect(toolbar.getElement().style.display).toBe('none');
    
    toolbar.show();
    expect(toolbar.getElement().style.display).toBe('');
  });

  it('should destroy toolbar', () => {
    const toolbar = new Toolbar({ container });
    const element = toolbar.getElement();
    
    toolbar.destroy();
    
    expect(document.body.contains(element)).toBe(false);
  });

  it('should throw error if container selector not found', () => {
    expect(() => {
      new Toolbar({ container: '#nonexistent' });
    }).toThrow('Toolbar container not found');
  });
});
