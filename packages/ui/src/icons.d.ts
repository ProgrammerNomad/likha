import { Bold } from 'lucide';
export type IconComponent = typeof Bold;
export interface IconRegistry {
    [key: string]: IconComponent;
}
export declare const icons: IconRegistry;
export declare function getIcon(name: string): IconComponent | undefined;
export declare function renderIcon(name: string, className?: string): string;
//# sourceMappingURL=icons.d.ts.map