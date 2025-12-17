# @likha/core

Core editor engine for Likha - A framework-agnostic rich text editor built on ProseMirror.

## Installation

```bash
npm install @likha/core
```

## Usage

```typescript
import { Editor } from '@likha/core';

const editor = new Editor({
  element: document.getElementById('editor'),
  content: '<p>Start writing...</p>',
});

// Get content
const html = editor.getHTML();

// Set content
editor.setContent('<p>New content</p>');

// Focus
editor.focus();

// Cleanup
editor.destroy();
```

## Features

- Framework-agnostic
- Built on ProseMirror
- Undo/Redo support
- Extensible via plugins
- TypeScript support

## License

MIT
