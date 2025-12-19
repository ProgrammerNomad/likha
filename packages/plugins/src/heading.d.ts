import { Plugin } from '@likhaeditor/core';
/**
 * Heading plugin
 * Provides heading levels (H1, H2, H3, H4, H5, H6)
 */
export declare class HeadingPlugin extends Plugin {
    name: string;
    commands(): {
        setHeading: (editor: any, level: 1 | 2 | 3 | 4 | 5 | 6) => boolean;
        setParagraph: (editor: any) => boolean;
        toggleHeading: (editor: any, level: 1 | 2 | 3 | 4 | 5 | 6) => boolean;
        isHeadingActive: (editor: any, level: 1 | 2 | 3 | 4 | 5 | 6) => boolean;
    };
    keymap(): {
        'Ctrl-Alt-1': (editor: any) => boolean;
        'Ctrl-Alt-2': (editor: any) => boolean;
        'Ctrl-Alt-3': (editor: any) => boolean;
        'Ctrl-Alt-4': (editor: any) => boolean;
        'Ctrl-Alt-5': (editor: any) => boolean;
        'Ctrl-Alt-6': (editor: any) => boolean;
    };
}
//# sourceMappingURL=heading.d.ts.map