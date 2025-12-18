# @likha/ui

UI components for Likha editor - toolbars, menus, and controls.

## Installation

```bash
npm install @likha/ui @likha/core
```

## Usage

```typescript
import { Toolbar } from '@likha/ui';
import { Editor } from '@likha/core';

const editor = new Editor({ element: document.getElementById('editor') });
const toolbar = new Toolbar({
  container: document.getElementById('toolbar'),
  buttons: [/* button config */]
});
```

## Features

- Customizable toolbar
- Menu bar component
- Color pickers
- Button components
- Dropdown menus
- Theme support

## Documentation

Full documentation: https://likha-doc.netlify.app/

API Reference: https://likha-doc.netlify.app/api/ui

## License

MIT © [Shiv Singh](https://github.com/ProgrammerNomad)
