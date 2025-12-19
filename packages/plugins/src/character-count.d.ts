import { Plugin } from '@likhaeditor/core';
/**
 * Character counter plugin
 * Displays character and word count
 */
export declare class CharacterCountPlugin extends Plugin {
    name: string;
    private countElement?;
    init(editor: any): void;
    private updateCount;
    commands(): {
        getCharacterCount: (editor: any) => any;
        getWordCount: (editor: any) => any;
    };
}
//# sourceMappingURL=character-count.d.ts.map