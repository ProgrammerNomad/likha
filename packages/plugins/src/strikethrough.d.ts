import { Plugin } from '@likhaeditor/core';
import type { Editor } from '@likhaeditor/core';
/**
 * Strikethrough Plugin
 * Adds strikethrough formatting to text (like Medium editor)
 */
export declare class StrikethroughPlugin extends Plugin {
    name: string;
    commands(): {
        toggleStrikethrough: (editor: Editor) => boolean;
    };
    keymap(): {
        'Mod-Shift-s': (editor: Editor) => any;
    };
}
//# sourceMappingURL=strikethrough.d.ts.map