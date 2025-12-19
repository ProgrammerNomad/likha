import { Plugin } from '@likhaeditor/core';
import type { Editor } from '@likhaeditor/core';
export declare class ImagePlugin extends Plugin {
    name: string;
    insertImage(editor: Editor, src: string, alt?: string, title?: string): boolean;
    setImageSize(editor: Editor, width?: number, height?: number): boolean;
    getImageSrc(editor: Editor): string | null;
    isImageSelected(editor: Editor): boolean;
    setImageAlt(editor: Editor, alt: string): boolean;
    commands(): {
        insertImage: (editor: Editor, src: string, alt?: string, title?: string) => boolean;
        setImageSize: (editor: Editor, width?: number, height?: number) => boolean;
        getImageSrc: (editor: Editor) => string | null;
        isImageSelected: (editor: Editor) => boolean;
        setImageAlt: (editor: Editor, alt: string) => boolean;
    };
}
//# sourceMappingURL=image.d.ts.map