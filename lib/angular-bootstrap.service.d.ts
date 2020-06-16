import { FormatService } from '@xlayers/sketch-lib';
export declare class AngularBootstrapService {
    private readonly formatService;
    constructor(formatService: FormatService);
    generate(files: any): {
        uri: string;
        value: string;
        language: string;
        kind: string;
    }[];
    private renderRoutingModule;
    private renderModule;
    private renderImports;
    private renderNgClasses;
    private extractClassName;
    private extractCompenentFileName;
}
