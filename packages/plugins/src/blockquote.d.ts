import { Plugin } from '@likhaeditor/core';
/**
 * Blockquote plugin
 * Provides blockquote formatting
 */
export declare class BlockquotePlugin extends Plugin {
    name: string;
    commands(): {
        toggleBlockquote: (editor: any) => boolean;
        isBlockquoteActive: (editor: any) => boolean;
    };
    keymap(): {
        'Ctrl->': (editor: any) => boolean;
        'Ctrl-Shift-b': (editor: any) => boolean;
    };
}
//# sourceMappingURL=blockquote.d.ts.map