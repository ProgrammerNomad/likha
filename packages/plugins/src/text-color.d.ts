import { Plugin, type PluginConfig } from '@likhaeditor/core';
import type { Editor } from '@likhaeditor/core';
export declare class TextColorPlugin extends Plugin {
    name: string;
    constructor(config?: PluginConfig);
    init(editor: Editor): void;
    /**
     * Set text color for the current selection
     */
    setTextColor(editor: Editor, color: string): boolean;
    /**
     * Remove text color from the current selection
     */
    removeTextColor(editor: Editor): boolean;
    /**
     * Get the current text color at the cursor position
     */
    getTextColor(editor: Editor): string | null;
    /**
     * Check if text color is active at the cursor position
     */
    isTextColorActive(editor: Editor, color?: string): boolean;
    commands(): {
        setTextColor: (editor: Editor, color: string) => boolean;
        removeTextColor: (editor: Editor) => boolean;
        getTextColor: (editor: Editor) => string | null;
        isTextColorActive: (editor: Editor, color?: string) => boolean;
    };
}
//# sourceMappingURL=text-color.d.ts.map