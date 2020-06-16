/// <reference types="sketchapp" />
import { FormatService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import { AngularAggregatorService } from '../angular-aggregator.service';
declare type WebCodeGenOptions = any;
export declare class AngularElementAggregatorService {
    private readonly formatService;
    private readonly webCodeGenService;
    private readonly angularAggregatorService;
    constructor(formatService: FormatService, webCodeGenService: WebCodeGenService, angularAggregatorService: AngularAggregatorService);
    aggregate(current: SketchMSLayer, data: SketchMSData, options: WebCodeGenOptions): any[];
    private renderReadme;
    private renderElementModule;
    private renderWebpackExtra;
    private renderCopyUmdBundlesScript;
    private renderSampleIndexHtml;
}
export {};
