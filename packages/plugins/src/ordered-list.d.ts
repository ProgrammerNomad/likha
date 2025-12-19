import { Plugin } from '@likhaeditor/core';
/**
 * Ordered list plugin
 * Provides numbered list functionality
 */
export declare class OrderedListPlugin extends Plugin {
    name: string;
    commands(): {
        toggleOrderedList: (editor: any) => boolean;
        isOrderedListActive: (editor: any) => boolean;
    };
    keymap(): {
        'Mod-]': (editor: any) => boolean;
        'Ctrl-Shift-9': (editor: any) => boolean;
    };
}
//# sourceMappingURL=ordered-list.d.ts.map