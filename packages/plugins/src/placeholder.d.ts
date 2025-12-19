import { Plugin } from '@likhaeditor/core';
/**
 * Placeholder plugin
 * Shows placeholder text when editor is empty
 */
export declare class PlaceholderPlugin extends Plugin {
    name: string;
    private text;
    constructor(config?: {
        text?: string;
    });
    init(editor: any): void;
}
//# sourceMappingURL=placeholder.d.ts.map