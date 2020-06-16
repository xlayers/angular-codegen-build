/// <reference types="sketchapp" />
import { ImageService, SymbolService, LayerService, FormatService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import { AngularAggregatorService } from './angular-aggregator.service';
declare type WebCodeGenOptions = any;
export declare class AngularCodeGenService {
    private readonly symbolService;
    private readonly imageService;
    private readonly webCodeGen;
    private readonly formatService;
    private readonly angularAggretatorService;
    private readonly layerService;
    constructor(symbolService: SymbolService, imageService: ImageService, webCodeGen: WebCodeGenService, formatService: FormatService, angularAggretatorService: AngularAggregatorService, layerService: LayerService);
    compute(current: SketchMSLayer, data: SketchMSData, options?: WebCodeGenOptions): void;
    aggregate(data: SketchMSData, options?: WebCodeGenOptions): any[];
    identify(current: SketchMSLayer): boolean;
    context(current: SketchMSLayer): any;
    private visit;
    private visitContent;
    private visitLayer;
    private visitSymbolMaster;
    private compileOptions;
    private renderRoutingModule;
    private renderModule;
    private renderImports;
    private renderNgClasses;
    private extractClassName;
    private extractCompenentFileName;
}
export {};
