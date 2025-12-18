# Installation

Learn how to install and set up LikhaEditor in your project.

## Package Manager

Install via npm, pnpm, or yarn:

::: code-group

```bash [npm]
npm install @likhaeditor/likhaeditor
```

```bash [pnpm]
pnpm add @likhaeditor/likhaeditor
```

```bash [yarn]
yarn add @likhaeditor/likhaeditor
```

:::

## CDN

For quick prototyping or simple projects, use the CDN:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@likhaeditor/likhaeditor/dist/likha-editor.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/@likhaeditor/likhaeditor/dist/likha-editor.umd.js"></script>
```

Then initialize the editor:

```html
<div id="editor"></div>

<script>
  const editor = LikhaEditor.createEditor({
    element: document.getElementById('editor'),
    content: '<p>Start writing...</p>'
  });
</script>
```

## Framework Packages

### React

```bash
npm install @likhaeditor/react
```

```jsx
import { LikhaEditor } from '@likhaeditor/react';

function MyComponent() {
  return <LikhaEditor content="<p>Hello World</p>" />;
}
```

### Laravel (Coming Soon)

```bash
composer require likhaeditor/laravel
```

### Livewire (Coming Soon)

```bash
composer require likhaeditor/livewire
```

## Next Steps

- [Getting Started Guide](/guide/getting-started)
- [Configuration Options](/guide/configuration)
- [Basic Examples](/examples/basic)
