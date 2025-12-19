import { Plugin as ProseMirrorPlugin } from 'prosemirror-state';
import type { Editor } from './editor';
export interface PluginConfig {
    [key: string]: unknown;
}
export interface CommandFunction {
    (editor: Editor, ...args: any[]): any;
}
export interface Commands {
    [name: string]: CommandFunction;
}
export interface KeyboardShortcuts {
    [key: string]: CommandFunction;
}
export declare abstract class Plugin {
    /**
     * Unique plugin name
     */
    abstract name: string;
    /**
     * Plugin configuration
     */
    protected config: PluginConfig;
    /**
     * Reference to the editor instance
     */
    protected editor?: Editor;
    constructor(config?: PluginConfig);
    /**
     * Initialize the plugin
     * Called when plugin is registered with the editor
     */
    init(editor: Editor): void;
    /**
     * Register commands provided by this plugin
     */
    commands(): Commands;
    /**
     * Register keyboard shortcuts for this plugin
     */
    keymap(): KeyboardShortcuts;
    /**
     * Return ProseMirror plugins if needed
     */
    prosemirrorPlugins(): ProseMirrorPlugin[];
    /**
     * Cleanup when plugin is destroyed
     */
    destroy(): void;
    /**
     * Get plugin configuration value
     */
    protected getConfig<T = unknown>(key: string, defaultValue?: T): T;
}
export interface PluginRegistry {
    [name: string]: Plugin;
}
//# sourceMappingURL=plugin.d.ts.map