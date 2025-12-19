import { Plugin } from '@likhaeditor/core';
import type { Editor } from '@likhaeditor/core';
export declare class TablePlugin extends Plugin {
    name: string;
    insertTable(editor: Editor, rows?: number, cols?: number): boolean;
    isInTable(editor: Editor): boolean;
    commands(): {
        insertTable: (editor: Editor, rows?: number, cols?: number) => boolean;
        isInTable: (editor: Editor) => boolean;
    };
}
//# sourceMappingURL=table.d.ts.map