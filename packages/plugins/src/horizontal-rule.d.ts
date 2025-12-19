import { Plugin } from '@likhaeditor/core';
/**
 * Horizontal rule plugin
 * Inserts a horizontal rule (hr)
 */
export declare class HorizontalRulePlugin extends Plugin {
    name: string;
    commands(): {
        insertHorizontalRule: (editor: any) => boolean;
    };
    keymap(): {
        'Mod-_': (editor: any) => boolean;
    };
}
//# sourceMappingURL=horizontal-rule.d.ts.map