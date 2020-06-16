/// <reference types="sketchapp" />
import { WebCodeGenService } from '@xlayers/web-codegen';
import { FormatService } from '@xlayers/sketch-lib';
declare type WebCodeGenOptions = any;
export declare class AngularAggregatorService {
    private readonly formatService;
    private readonly webCodeGenService;
    constructor(formatService: FormatService, webCodeGenService: WebCodeGenService);
    aggregate(current: SketchMSLayer, data: SketchMSData, options: WebCodeGenOptions): any[];
    renderComponent(name: string, options: WebCodeGenOptions): string;
    private renderSpec;
}
export {};
