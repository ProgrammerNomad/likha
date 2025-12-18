# @likha/plugins

Official plugins for Likha editor.

## Installation

```bash
npm install @likha/plugins @likha/core
```

## Usage

```typescript
import { Editor } from '@likha/core';
import { BulletListPlugin, OrderedListPlugin } from '@likha/plugins';

const editor = new Editor({
  element: document.getElementById('editor'),
  plugins: [
    new BulletListPlugin(),
    new OrderedListPlugin()
  ]
});
```

## Available Plugins

- **Lists**: BulletListPlugin, OrderedListPlugin
- **Text Formatting**: StrikethroughPlugin, SubscriptPlugin, SuperscriptPlugin
- **Blocks**: BlockquotePlugin, CodeBlockPlugin
- **Links**: LinkPlugin
- **Media**: ImagePlugin, TablePlugin
- **Colors**: TextColorPlugin, HighlightPlugin
- **Alignment**: TextAlignmentPlugin
- **Utilities**: ClearFormattingPlugin, PlaceholderPlugin, CharacterCountPlugin

## Documentation

Full documentation: https://github.com/ProgrammerNomad/likha

## License

MIT © [Shiv Singh](https://github.com/ProgrammerNomad)
