import { Plugin } from '@likhaeditor/core';
import { Plugin as ProseMirrorPlugin } from 'prosemirror-state';
/**
 * Text alignment plugin
 * Provides text alignment functionality (left, center, right, justify)
 */
export declare class TextAlignmentPlugin extends Plugin {
    name: string;
    commands(): {
        setTextAlign: (editor: any, alignment: "left" | "center" | "right" | "justify") => boolean;
        setAlignLeft: (editor: any) => boolean;
        setAlignCenter: (editor: any) => boolean;
        setAlignRight: (editor: any) => boolean;
        setAlignJustify: (editor: any) => boolean;
        getTextAlign: (editor: any) => string | null;
        isAlignActive: (editor: any, alignment: "left" | "center" | "right" | "justify") => boolean;
    };
    prosemirrorPlugins(): ProseMirrorPlugin[];
}
//# sourceMappingURL=text-alignment.d.ts.map