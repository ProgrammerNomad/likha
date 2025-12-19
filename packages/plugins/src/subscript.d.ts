import { Plugin } from '@likhaeditor/core';
import type { Editor } from '@likhaeditor/core';
/**
 * Subscript Plugin
 * Adds subscript formatting for scientific notation (H₂O)
 */
export declare class SubscriptPlugin extends Plugin {
    name: string;
    commands(): {
        toggleSubscript: (editor: Editor) => boolean;
    };
    keymap(): {
        'Mod-,': (editor: Editor) => any;
    };
}
//# sourceMappingURL=subscript.d.ts.map