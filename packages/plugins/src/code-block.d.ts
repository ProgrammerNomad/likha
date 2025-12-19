import { Plugin } from '@likhaeditor/core';
import { Plugin as ProseMirrorPlugin } from 'prosemirror-state';
/**
 * Code block plugin
 * Provides code block functionality with language support
 */
export declare class CodeBlockPlugin extends Plugin {
    name: string;
    commands(): {
        setCodeBlock: (editor: any, language?: string) => boolean;
        toggleCodeBlock: (editor: any, language?: string) => boolean;
        isCodeBlockActive: (editor: any) => boolean;
        getCodeBlockLanguage: (editor: any) => string | null;
    };
    prosemirrorPlugins(): ProseMirrorPlugin[];
}
//# sourceMappingURL=code-block.d.ts.map