import { Plugin, type PluginConfig } from '@likhaeditor/core';
import type { Editor } from '@likhaeditor/core';
/**
 * HTML Source View Plugin
 * Toggle between WYSIWYG and HTML source code view
 */
export declare class HTMLSourceViewPlugin extends Plugin {
    name: string;
    private sourceMode;
    private sourceTextarea;
    private editorElement;
    constructor(config?: PluginConfig);
    init(editor: Editor): void;
    /**
     * Toggle between WYSIWYG and HTML source view
     */
    toggleSourceView(editor: Editor): boolean;
    /**
     * Check if currently in source view mode
     */
    isSourceViewActive(): boolean;
    /**
     * Format HTML for better readability
     */
    private formatHTML;
    commands(): {
        toggleSourceView: (editor: Editor) => boolean;
        isSourceViewActive: () => boolean;
    };
}
//# sourceMappingURL=html-source-view.d.ts.map