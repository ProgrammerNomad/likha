import { Plugin } from '@likhaeditor/core';
import type { Editor } from '@likhaeditor/core';
/**
 * Clear Formatting Plugin
 * Removes all formatting (marks and block types) from selection
 */
export declare class ClearFormattingPlugin extends Plugin {
    name: string;
    commands(): {
        clearFormat: (editor: Editor) => boolean;
    };
    keymap(): {
        'Mod-\\': (editor: Editor) => any;
    };
}
//# sourceMappingURL=clear-formatting.d.ts.map