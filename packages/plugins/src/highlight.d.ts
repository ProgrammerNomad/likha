import { Plugin, type PluginConfig } from '@likhaeditor/core';
import type { Editor } from '@likhaeditor/core';
export declare class HighlightPlugin extends Plugin {
    name: string;
    constructor(config?: PluginConfig);
    init(editor: Editor): void;
    /**
     * Set highlight color for the current selection
     */
    setHighlight(editor: Editor, color?: string): boolean;
    /**
     * Remove highlight from the current selection
     */
    removeHighlight(editor: Editor): boolean;
    /**
     * Get the current highlight color at the cursor position
     */
    getHighlight(editor: Editor): string | null;
    /**
     * Check if highlight is active at the cursor position
     */
    isHighlightActive(editor: Editor, color?: string): boolean;
    /**
     * Toggle highlight on/off
     */
    toggleHighlight(editor: Editor, color?: string): boolean;
    commands(): {
        setHighlight: (editor: Editor, color?: string) => boolean;
        removeHighlight: (editor: Editor) => boolean;
        getHighlight: (editor: Editor) => string | null;
        isHighlightActive: (editor: Editor, color?: string) => boolean;
        toggleHighlight: (editor: Editor, color?: string) => boolean;
    };
}
//# sourceMappingURL=highlight.d.ts.map