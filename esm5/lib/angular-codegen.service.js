/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ImageService, SymbolService, LayerService, FormatService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import { AngularAggregatorService } from './angular-aggregator.service';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
import * as i3 from "./angular-aggregator.service";
var AngularCodeGenService = /** @class */ (function () {
    function AngularCodeGenService(symbolService, imageService, webCodeGen, formatService, angularAggretatorService, layerService) {
        this.symbolService = symbolService;
        this.imageService = imageService;
        this.webCodeGen = webCodeGen;
        this.formatService = formatService;
        this.angularAggretatorService = angularAggretatorService;
        this.layerService = layerService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    AngularCodeGenService.prototype.compute = /**
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (current, data, options) {
        this.webCodeGen.compute(current, data, this.compileOptions(options));
    };
    /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    AngularCodeGenService.prototype.aggregate = /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (data, options) {
        var _this = this;
        /** @type {?} */
        var files = data.pages.flatMap((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            return _this.visit(page, data, _this.compileOptions(options));
        }));
        return tslib_1.__spread([
            {
                uri: 'xlayers-routing.module.ts',
                value: this.renderRoutingModule(),
                language: 'typescript',
                kind: 'angular'
            },
            {
                uri: 'xlayers.module.ts',
                value: this.renderModule(files),
                language: 'typescript',
                kind: 'angular'
            }
        ], files);
    };
    /**
     * @param {?} current
     * @return {?}
     */
    AngularCodeGenService.prototype.identify = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return this.webCodeGen.identify(current);
    };
    /**
     * @param {?} current
     * @return {?}
     */
    AngularCodeGenService.prototype.context = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return this.webCodeGen.context(current);
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    AngularCodeGenService.prototype.visit = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (current, data, options) {
        return this.visitContent(current, data, options).concat(this.angularAggretatorService.aggregate(current, data, options));
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    AngularCodeGenService.prototype.visitContent = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        if (this.layerService.identify(current)) {
            return this.visitLayer(current, data, options);
        }
        else if (this.symbolService.identify(current)) {
            return this.visitSymbolMaster(current, data, options);
        }
        else if (this.imageService.identify(current)) {
            return this.imageService.aggregate(current, data, options);
        }
        return [];
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    AngularCodeGenService.prototype.visitLayer = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        var _this = this;
        return this.layerService
            .lookup(current)
            .flatMap((/**
         * @param {?} layer
         * @return {?}
         */
        function (layer) { return _this.visitContent(layer, data, options); }));
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    AngularCodeGenService.prototype.visitSymbolMaster = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        /** @type {?} */
        var symbolMaster = this.symbolService.lookup(current, data);
        if (symbolMaster) {
            return this.visit(symbolMaster, data, options);
        }
        return [];
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    AngularCodeGenService.prototype.compileOptions = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return tslib_1.__assign({ textTagName: 'span', bitmapTagName: 'img', blockTagName: 'div', xmlPrefix: 'xly-', cssPrefix: 'xly_', componentDir: 'components', assetDir: 'assets' }, options);
    };
    /**
     * @private
     * @return {?}
     */
    AngularCodeGenService.prototype.renderRoutingModule = /**
     * @private
     * @return {?}
     */
    function () {
        return "import { NgModule } from '@angular/core'\nimport { RouterModule, Routes } from '@angular/router';\n\nconst xlayersRoutes: Routes = [{\n  path: 'xlayers  loadChildren: 'app/xlayers/xlayers.module#XlayersModule'\n}];\n\n@NgModule({\n  imports: [ RouterModule.forChild(xlayersRoutes) ],\n  exports: [ RouterModule ]\n})\nexport class XlayersRoutingModule {}";
    };
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    AngularCodeGenService.prototype.renderModule = /**
     * @private
     * @param {?} files
     * @return {?}
     */
    function (files) {
        /** @type {?} */
        var importStatements = this.renderImports(files);
        /** @type {?} */
        var ngStatements = this.renderNgClasses(files);
        return importStatements + "\n\n@NgModule({\n  declarations: [\n" + ngStatements + "\n  ],\n  exports: [\n" + ngStatements + "\n  ],\n  imports: [\n    CommonModule\n  ]\n})\nexport class XlayersModule {}";
    };
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    AngularCodeGenService.prototype.renderImports = /**
     * @private
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var _this = this;
        return [
            'import { NgModule } from \'@angular/core\';',
            'import { CommonModule } from \'@angular/common\';'
        ]
            .concat(files
            .filter((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return file.uri.endsWith('.component.ts'); }))
            .map((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            return "import { " + _this.extractClassName(file) + " } from './" + _this.extractCompenentFileName(file) + "';";
        })))
            .join('\n');
    };
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    AngularCodeGenService.prototype.renderNgClasses = /**
     * @private
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var _this = this;
        return files
            .filter((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return file.uri.endsWith('.component.ts'); }))
            .map((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return _this.formatService.indent(2, _this.extractClassName(file)); }))
            .join(',\n');
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    AngularCodeGenService.prototype.extractClassName = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var uri = file.uri.split('/');
        /** @type {?} */
        var fileName = uri[uri.length - 1].replace('.component.ts', '');
        return this.formatService.className(fileName + "Component");
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    AngularCodeGenService.prototype.extractCompenentFileName = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return file.uri.split('.ts')[0];
    };
    AngularCodeGenService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularCodeGenService.ctorParameters = function () { return [
        { type: SymbolService },
        { type: ImageService },
        { type: WebCodeGenService },
        { type: FormatService },
        { type: AngularAggregatorService },
        { type: LayerService }
    ]; };
    /** @nocollapse */ AngularCodeGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AngularCodeGenService_Factory() { return new AngularCodeGenService(i0.ɵɵinject(i1.SymbolService), i0.ɵɵinject(i1.ImageService), i0.ɵɵinject(i2.WebCodeGenService), i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i3.AngularAggregatorService), i0.ɵɵinject(i1.LayerService)); }, token: AngularCodeGenService, providedIn: "root" });
    return AngularCodeGenService;
}());
export { AngularCodeGenService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AngularCodeGenService.prototype.symbolService;
    /**
     * @type {?}
     * @private
     */
    AngularCodeGenService.prototype.imageService;
    /**
     * @type {?}
     * @private
     */
    AngularCodeGenService.prototype.webCodeGen;
    /**
     * @type {?}
     * @private
     */
    AngularCodeGenService.prototype.formatService;
    /**
     * @type {?}
     * @private
     */
    AngularCodeGenService.prototype.angularAggretatorService;
    /**
     * @type {?}
     * @private
     */
    AngularCodeGenService.prototype.layerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jb2RlZ2VuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9hbmd1bGFyLWNvZGVnZW4vIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1jb2RlZ2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxZQUFZLEVBQ1osYUFBYSxFQUNiLFlBQVksRUFDWixhQUFhLEVBQ2QsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7QUFJeEU7SUFJRSwrQkFDbUIsYUFBNEIsRUFDNUIsWUFBMEIsRUFDMUIsVUFBNkIsRUFDN0IsYUFBNEIsRUFDNUIsd0JBQWtELEVBQ2xELFlBQTBCO1FBTDFCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDMUMsQ0FBQzs7Ozs7OztJQUVKLHVDQUFPOzs7Ozs7SUFBUCxVQUNFLE9BQXNCLEVBQ3RCLElBQWtCLEVBQ2xCLE9BQTJCO1FBRTNCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7OztJQUVELHlDQUFTOzs7OztJQUFULFVBQVUsSUFBa0IsRUFBRSxPQUEyQjtRQUF6RCxpQkFvQkM7O1lBbkJPLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxD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QywyQ0FBOEM7Ozs7O0lBQzlDLDhDQUE2Qzs7Ozs7SUFDN0MseURBQW1FOzs7OztJQUNuRSw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgSW1hZ2VTZXJ2aWNlLFxyXG4gIFN5bWJvbFNlcnZpY2UsXHJcbiAgTGF5ZXJTZXJ2aWNlLFxyXG4gIEZvcm1hdFNlcnZpY2VcclxufSBmcm9tICdAeGxheWVycy9za2V0Y2gtbGliJztcclxuaW1wb3J0IHsgV2ViQ29kZUdlblNlcnZpY2UgfSBmcm9tICdAeGxheWVycy93ZWItY29kZWdlbic7XHJcbmltcG9ydCB7IEFuZ3VsYXJBZ2dyZWdhdG9yU2VydmljZSB9IGZyb20gJy4vYW5ndWxhci1hZ2dyZWdhdG9yLnNlcnZpY2UnO1xyXG5cclxudHlwZSBXZWJDb2RlR2VuT3B0aW9ucyA9IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJDb2RlR2VuU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN5bWJvbFNlcnZpY2U6IFN5bWJvbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSB3ZWJDb2RlR2VuOiBXZWJDb2RlR2VuU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0U2VydmljZTogRm9ybWF0U2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYW5ndWxhckFnZ3JldGF0b3JTZXJ2aWNlOiBBbmd1bGFyQWdncmVnYXRvclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxheWVyU2VydmljZTogTGF5ZXJTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBjb21wdXRlKFxyXG4gICAgY3VycmVudDogU2tldGNoTVNMYXllcixcclxuICAgIGRhdGE6IFNrZXRjaE1TRGF0YSxcclxuICAgIG9wdGlvbnM/OiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgdGhpcy53ZWJDb2RlR2VuLmNvbXB1dGUoY3VycmVudCwgZGF0YSwgdGhpcy5jb21waWxlT3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgfVxyXG5cclxuICBhZ2dyZWdhdGUoZGF0YTogU2tldGNoTVNEYXRhLCBvcHRpb25zPzogV2ViQ29kZUdlbk9wdGlvbnMpIHtcclxuICAgIGNvbnN0IGZpbGVzID0gZGF0YS5wYWdlcy5mbGF0TWFwKHBhZ2UgPT5cclxuICAgICAgdGhpcy52aXNpdChwYWdlLCBkYXRhLCB0aGlzLmNvbXBpbGVPcHRpb25zKG9wdGlvbnMpKVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgdXJpOiAneGxheWVycy1yb3V0aW5nLm1vZHVsZS50cycsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyUm91dGluZ01vZHVsZSgpLFxyXG4gICAgICAgIGxhbmd1YWdlOiAndHlwZXNjcmlwdCcsXHJcbiAgICAgICAga2luZDogJ2FuZ3VsYXInXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB1cmk6ICd4bGF5ZXJzLm1vZHVsZS50cycsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyTW9kdWxlKGZpbGVzKSxcclxuICAgICAgICBsYW5ndWFnZTogJ3R5cGVzY3JpcHQnLFxyXG4gICAgICAgIGtpbmQ6ICdhbmd1bGFyJ1xyXG4gICAgICB9LFxyXG4gICAgICAuLi5maWxlc1xyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlkZW50aWZ5KGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIpIHtcclxuICAgIHJldHVybiB0aGlzLndlYkNvZGVHZW4uaWRlbnRpZnkoY3VycmVudCk7XHJcbiAgfVxyXG5cclxuICBjb250ZXh0KGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIpIHtcclxuICAgIHJldHVybiB0aGlzLndlYkNvZGVHZW4uY29udGV4dChjdXJyZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmlzaXQoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgZGF0YTogU2tldGNoTVNEYXRhLFxyXG4gICAgb3B0aW9ucz86IFdlYkNvZGVHZW5PcHRpb25zXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdGhpcy52aXNpdENvbnRlbnQoY3VycmVudCwgZGF0YSwgb3B0aW9ucykuY29uY2F0KFxyXG4gICAgICB0aGlzLmFuZ3VsYXJBZ2dyZXRhdG9yU2VydmljZS5hZ2dyZWdhdGUoY3VycmVudCwgZGF0YSwgb3B0aW9ucylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZpc2l0Q29udGVudChcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBkYXRhOiBTa2V0Y2hNU0RhdGEsXHJcbiAgICBvcHRpb25zOiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgaWYgKHRoaXMubGF5ZXJTZXJ2aWNlLmlkZW50aWZ5KGN1cnJlbnQpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZpc2l0TGF5ZXIoY3VycmVudCwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3ltYm9sU2VydmljZS5pZGVudGlmeShjdXJyZW50KSkge1xyXG4gICAgICByZXR1cm4gdGhpcy52aXNpdFN5bWJvbE1hc3RlcihjdXJyZW50LCBkYXRhLCBvcHRpb25zKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZVNlcnZpY2UuaWRlbnRpZnkoY3VycmVudCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VTZXJ2aWNlLmFnZ3JlZ2F0ZShjdXJyZW50LCBkYXRhLCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmlzaXRMYXllcihcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBkYXRhOiBTa2V0Y2hNU0RhdGEsXHJcbiAgICBvcHRpb25zOiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgcmV0dXJuIHRoaXMubGF5ZXJTZXJ2aWNlXHJcbiAgICAgIC5sb29rdXAoY3VycmVudClcclxuICAgICAgLmZsYXRNYXAobGF5ZXIgPT4gdGhpcy52aXNpdENvbnRlbnQobGF5ZXIsIGRhdGEsIG9wdGlvbnMpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmlzaXRTeW1ib2xNYXN0ZXIoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgZGF0YTogU2tldGNoTVNEYXRhLFxyXG4gICAgb3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIGNvbnN0IHN5bWJvbE1hc3RlciA9IHRoaXMuc3ltYm9sU2VydmljZS5sb29rdXAoY3VycmVudCwgZGF0YSk7XHJcbiAgICBpZiAoc3ltYm9sTWFzdGVyKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZpc2l0KHN5bWJvbE1hc3RlciwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXBpbGVPcHRpb25zKG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0ZXh0VGFnTmFtZTogJ3NwYW4nLFxyXG4gICAgICBiaXRtYXBUYWdOYW1lOiAnaW1nJyxcclxuICAgICAgYmxvY2tUYWdOYW1lOiAnZGl2JyxcclxuICAgICAgeG1sUHJlZml4OiAneGx5LScsXHJcbiAgICAgIGNzc1ByZWZpeDogJ3hseV8nLFxyXG4gICAgICBjb21wb25lbnREaXI6ICdjb21wb25lbnRzJyxcclxuICAgICAgYXNzZXREaXI6ICdhc3NldHMnLFxyXG4gICAgICAuLi5vcHRpb25zXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJSb3V0aW5nTW9kdWxlKCkge1xyXG4gICAgcmV0dXJuIGBcXFxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmNvbnN0IHhsYXllcnNSb3V0ZXM6IFJvdXRlcyA9IFt7XHJcbiAgcGF0aDogJ3hsYXllcnNcXFxyXG4gIGxvYWRDaGlsZHJlbjogJ2FwcC94bGF5ZXJzL3hsYXllcnMubW9kdWxlI1hsYXllcnNNb2R1bGUnXHJcbn1dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbIFJvdXRlck1vZHVsZS5mb3JDaGlsZCh4bGF5ZXJzUm91dGVzKSBdLFxyXG4gIGV4cG9ydHM6IFsgUm91dGVyTW9kdWxlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFhsYXllcnNSb3V0aW5nTW9kdWxlIHt9YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyTW9kdWxlKGZpbGVzKSB7XHJcbiAgICBjb25zdCBpbXBvcnRTdGF0ZW1lbnRzID0gdGhpcy5yZW5kZXJJbXBvcnRzKGZpbGVzKTtcclxuICAgIGNvbnN0IG5nU3RhdGVtZW50cyA9IHRoaXMucmVuZGVyTmdDbGFzc2VzKGZpbGVzKTtcclxuICAgIHJldHVybiBgXFxcclxuJHtpbXBvcnRTdGF0ZW1lbnRzfVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuJHtuZ1N0YXRlbWVudHN9XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiR7bmdTdGF0ZW1lbnRzfVxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWGxheWVyc01vZHVsZSB7fWA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckltcG9ydHMoZmlsZXMpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICdpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXFwnQGFuZ3VsYXIvY29yZVxcJzsnLFxyXG4gICAgICAnaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcXCdAYW5ndWxhci9jb21tb25cXCc7J1xyXG4gICAgXVxyXG4gICAgICAuY29uY2F0KFxyXG4gICAgICAgIGZpbGVzXHJcbiAgICAgICAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS51cmkuZW5kc1dpdGgoJy5jb21wb25lbnQudHMnKSlcclxuICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgIGZpbGUgPT5cclxuICAgICAgICAgICAgICBgaW1wb3J0IHsgJHt0aGlzLmV4dHJhY3RDbGFzc05hbWUoXHJcbiAgICAgICAgICAgICAgICBmaWxlXHJcbiAgICAgICAgICAgICAgKX0gfSBmcm9tICcuLyR7dGhpcy5leHRyYWN0Q29tcGVuZW50RmlsZU5hbWUoZmlsZSl9JztgXHJcbiAgICAgICAgICApXHJcbiAgICAgIClcclxuICAgICAgLmpvaW4oJ1xcbicpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJOZ0NsYXNzZXMoZmlsZXMpIHtcclxuICAgIHJldHVybiBmaWxlc1xyXG4gICAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS51cmkuZW5kc1dpdGgoJy5jb21wb25lbnQudHMnKSlcclxuICAgICAgLm1hcChmaWxlID0+IHRoaXMuZm9ybWF0U2VydmljZS5pbmRlbnQoMiwgdGhpcy5leHRyYWN0Q2xhc3NOYW1lKGZpbGUpKSlcclxuICAgICAgLmpvaW4oJyxcXG4nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXh0cmFjdENsYXNzTmFtZShmaWxlKSB7XHJcbiAgICBjb25zdCB1cmkgPSBmaWxlLnVyaS5zcGxpdCgnLycpO1xyXG4gICAgY29uc3QgZmlsZU5hbWUgPSB1cmlbdXJpLmxlbmd0aCAtIDFdLnJlcGxhY2UoJy5jb21wb25lbnQudHMnLCAnJyk7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtYXRTZXJ2aWNlLmNsYXNzTmFtZShgJHtmaWxlTmFtZX1Db21wb25lbnRgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXh0cmFjdENvbXBlbmVudEZpbGVOYW1lKGZpbGUpIHtcclxuICAgIHJldHVybiBmaWxlLnVyaS5zcGxpdCgnLnRzJylbMF07XHJcbiAgfVxyXG59XHJcbiJdfQ==