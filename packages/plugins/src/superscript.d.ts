import { Plugin } from '@likhaeditor/core';
import type { Editor } from '@likhaeditor/core';
/**
 * Superscript Plugin
 * Adds superscript formatting for mathematical notation (E=mc²)
 */
export declare class SuperscriptPlugin extends Plugin {
    name: string;
    commands(): {
        toggleSuperscript: (editor: Editor) => boolean;
    };
    keymap(): {
        'Mod-.': (editor: Editor) => any;
    };
}
//# sourceMappingURL=superscript.d.ts.map