# Configuration

Configure LikhaEditor to match your application's needs.

## Basic Configuration

```javascript
const editor = LikhaEditor.createEditor({
  element: document.getElementById('editor'),
  content: '<p>Initial content</p>',
  placeholder: 'Start writing...',
  editable: true
});
```

## Configuration Options

### `element`
- **Type:** `HTMLElement`
- **Required:** Yes
- **Description:** The DOM element where the editor will be mounted.

### `content`
- **Type:** `string`
- **Default:** `''`
- **Description:** Initial HTML content for the editor.

### `placeholder`
- **Type:** `string`
- **Default:** `''`
- **Description:** Placeholder text shown when editor is empty.

### `editable`
- **Type:** `boolean`
- **Default:** `true`
- **Description:** Whether the editor is editable or readonly.

### `plugins`
- **Type:** `Plugin[]`
- **Default:** All built-in plugins
- **Description:** Array of plugins to load.

## Toolbar Configuration

::: warning Coming Soon
Advanced toolbar customization is coming in v0.1.0. Current version includes default toolbar with all formatting options.
:::

```javascript
// Future API (v0.1.0+)
const editor = LikhaEditor.createEditor({
  element: document.getElementById('editor'),
  toolbar: {
    items: ['bold', 'italic', 'underline', '|', 'heading', 'bulletList'],
    position: 'top' // or 'bottom'
  }
});
```

## Events

::: warning Coming Soon
Event system is coming in v0.1.0. Current version supports basic content retrieval.
:::

```javascript
// Future API (v0.1.0+)
editor.on('update', ({ editor, content }) => {
  console.log('Content updated:', content);
});

editor.on('focus', () => {
  console.log('Editor focused');
});
```

## Styling

Override default styles:

```css
/* Custom toolbar background */
.likha-toolbar {
  background: #f5f5f5;
  border-bottom: 2px solid #007bff;
}

/* Custom editor font */
.ProseMirror {
  font-family: 'Georgia', serif;
  font-size: 18px;
  line-height: 1.6;
}
```

## API Methods

### `getContent()`
Returns the current editor content as HTML string.

```javascript
const html = editor.getContent();
```

### `setContent(html)`
Sets the editor content.

```javascript
editor.setContent('<p>New content</p>');
```

### `destroy()`
Destroys the editor instance and cleans up resources.

```javascript
editor.destroy();
```

## Next Steps

- [Toolbar Customization](/guide/toolbar)
- [Plugin System](/guide/plugins)
- [API Reference](/api/core)
