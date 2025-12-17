// Icon registry using Lucide icons
// Import only the icons you need to keep bundle size small

import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Link,
  Image,
  List,
  ListOrdered,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Undo,
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from 'lucide';

export type IconComponent = typeof Bold;

export interface IconRegistry {
  [key: string]: IconComponent;
}

export const icons: IconRegistry = {
  bold: Bold,
  italic: Italic,
  underline: Underline,
  strikethrough: Strikethrough,
  code: Code,
  link: Link,
  image: Image,
  bulletList: List,
  orderedList: ListOrdered,
  blockquote: Quote,
  heading1: Heading1,
  heading2: Heading2,
  heading3: Heading3,
  undo: Undo,
  redo: Redo,
  alignLeft: AlignLeft,
  alignCenter: AlignCenter,
  alignRight: AlignRight,
};

export function getIcon(name: string): IconComponent | undefined {
  return icons[name];
}

export function renderIcon(name: string, className?: string): string {
  const IconComponent = getIcon(name);
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in registry`);
    return '';
  }

  // Create SVG element
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '20');
  svg.setAttribute('height', '20');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  
  if (className) {
    svg.setAttribute('class', className);
  }

  return svg.outerHTML;
}
