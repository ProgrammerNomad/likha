import { Plugin } from '@likhaeditor/core';
import { Plugin as ProseMirrorPlugin } from 'prosemirror-state';
/**
 * Link plugin
 * Provides hyperlink functionality with URL editing
 */
export declare class LinkPlugin extends Plugin {
    name: string;
    commands(): {
        setLink: (editor: any, href: string) => boolean;
        removeLink: (editor: any) => boolean;
        toggleLink: (editor: any, href?: string) => boolean;
        isLinkActive: (editor: any) => boolean;
        getLinkHref: (editor: any) => string | null;
    };
    prosemirrorPlugins(): ProseMirrorPlugin[];
}
//# sourceMappingURL=link.d.ts.map