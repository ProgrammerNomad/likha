import { Plugin } from '@likhaeditor/core';
/**
 * Bullet list plugin
 * Provides unordered list functionality
 */
export declare class BulletListPlugin extends Plugin {
    name: string;
    commands(): {
        toggleBulletList: (editor: any) => boolean;
        isBulletListActive: (editor: any) => boolean;
    };
    keymap(): {
        'Mod-[': (editor: any) => boolean;
        'Ctrl-Shift-8': (editor: any) => boolean;
    };
}
//# sourceMappingURL=bullet-list.d.ts.map