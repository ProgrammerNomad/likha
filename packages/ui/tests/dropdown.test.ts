import { describe, it, expect, vi } from 'vitest';
import { Dropdown } from '../src/dropdown';

describe('Dropdown', () => {
  const items = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3', disabled: true }
  ];

  it('should create dropdown element', () => {
    const dropdown = new Dropdown({ items });
    const element = dropdown.getElement();
    
    expect(element.className).toContain('likha-dropdown');
  });

  it('should display placeholder', () => {
    const dropdown = new Dropdown({ 
      items,
      placeholder: 'Select option' 
    });
    
    const button = dropdown.getElement().querySelector('.likha-dropdown__button');
    expect(button?.textContent).toBe('Select option');
  });

  it('should render menu items', () => {
    const dropdown = new Dropdown({ items });
    const menuItems = dropdown.getElement().querySelectorAll('.likha-dropdown__item');
    
    expect(menuItems.length).toBe(3);
  });

  it('should mark disabled items', () => {
    const dropdown = new Dropdown({ items });
    const menuItems = dropdown.getElement().querySelectorAll('.likha-dropdown__item');
    const disabledItem = menuItems[2] as HTMLButtonElement;
    
    expect(disabledItem.disabled).toBe(true);
    expect(disabledItem.className).toContain('likha-dropdown__item--disabled');
  });

  it('should toggle open/close', () => {
    const dropdown = new Dropdown({ items });
    const button = dropdown.getElement().querySelector('.likha-dropdown__button') as HTMLButtonElement;
    
    button.click();
    expect(dropdown.getElement().className).toContain('likha-dropdown--open');
    
    button.click();
    expect(dropdown.getElement().className).not.toContain('likha-dropdown--open');
  });

  it('should call onSelect when item clicked', () => {
    const onSelect = vi.fn();
    const dropdown = new Dropdown({ items, onSelect });
    
    const menuItems = dropdown.getElement().querySelectorAll('.likha-dropdown__item');
    (menuItems[0] as HTMLButtonElement).click();
    
    expect(onSelect).toHaveBeenCalledWith('1');
  });

  it('should update button text on selection', () => {
    const dropdown = new Dropdown({ items });
    const button = dropdown.getElement().querySelector('.likha-dropdown__button') as HTMLButtonElement;
    
    const menuItems = dropdown.getElement().querySelectorAll('.likha-dropdown__item');
    (menuItems[1] as HTMLButtonElement).click();
    
    expect(button.textContent).toBe('Option 2');
  });

  it('should not trigger onSelect for disabled items', () => {
    const onSelect = vi.fn();
    const dropdown = new Dropdown({ items, onSelect });
    
    const menuItems = dropdown.getElement().querySelectorAll('.likha-dropdown__item');
    (menuItems[2] as HTMLButtonElement).click();
    
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('should render item icons', () => {
    const itemsWithIcons = [
      { value: '1', label: 'Option 1', icon: '<svg>test</svg>' }
    ];
    
    const dropdown = new Dropdown({ items: itemsWithIcons });
    const icon = dropdown.getElement().querySelector('.likha-dropdown__item-icon');
    
    expect(icon?.innerHTML).toContain('<svg>test</svg>');
  });

  it('should destroy dropdown', () => {
    const dropdown = new Dropdown({ items });
    const container = document.createElement('div');
    container.appendChild(dropdown.getElement());
    
    dropdown.destroy();
    
    expect(container.contains(dropdown.getElement())).toBe(false);
  });
});
