/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ImageService, SymbolService, LayerService, FormatService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import { AngularAggregatorService } from './angular-aggregator.service';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
import * as i3 from "./angular-aggregator.service";
export class AngularCodeGenService {
    /**
     * @param {?} symbolService
     * @param {?} imageService
     * @param {?} webCodeGen
     * @param {?} formatService
     * @param {?} angularAggretatorService
     * @param {?} layerService
     */
    constructor(symbolService, imageService, webCodeGen, formatService, angularAggretatorService, layerService) {
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
    compute(current, data, options) {
        this.webCodeGen.compute(current, data, this.compileOptions(options));
    }
    /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    aggregate(data, options) {
        /** @type {?} */
        const files = data.pages.flatMap((/**
         * @param {?} page
         * @return {?}
         */
        page => this.visit(page, data, this.compileOptions(options))));
        return [
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
            },
            ...files
        ];
    }
    /**
     * @param {?} current
     * @return {?}
     */
    identify(current) {
        return this.webCodeGen.identify(current);
    }
    /**
     * @param {?} current
     * @return {?}
     */
    context(current) {
        return this.webCodeGen.context(current);
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    visit(current, data, options) {
        return this.visitContent(current, data, options).concat(this.angularAggretatorService.aggregate(current, data, options));
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitContent(current, data, options) {
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
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitLayer(current, data, options) {
        return this.layerService
            .lookup(current)
            .flatMap((/**
         * @param {?} layer
         * @return {?}
         */
        layer => this.visitContent(layer, data, options)));
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitSymbolMaster(current, data, options) {
        /** @type {?} */
        const symbolMaster = this.symbolService.lookup(current, data);
        if (symbolMaster) {
            return this.visit(symbolMaster, data, options);
        }
        return [];
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    compileOptions(options) {
        return Object.assign({ textTagName: 'span', bitmapTagName: 'img', blockTagName: 'div', xmlPrefix: 'xly-', cssPrefix: 'xly_', componentDir: 'components', assetDir: 'assets' }, options);
    }
    /**
     * @private
     * @return {?}
     */
    renderRoutingModule() {
        return `\
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

const xlayersRoutes: Routes = [{
  path: 'xlayers\
  loadChildren: 'app/xlayers/xlayers.module#XlayersModule'
}];

@NgModule({
  imports: [ RouterModule.forChild(xlayersRoutes) ],
  exports: [ RouterModule ]
})
export class XlayersRoutingModule {}`;
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    renderModule(files) {
        /** @type {?} */
        const importStatements = this.renderImports(files);
        /** @type {?} */
        const ngStatements = this.renderNgClasses(files);
        return `\
${importStatements}

@NgModule({
  declarations: [
${ngStatements}
  ],
  exports: [
${ngStatements}
  ],
  imports: [
    CommonModule
  ]
})
export class XlayersModule {}`;
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    renderImports(files) {
        return [
            'import { NgModule } from \'@angular/core\';',
            'import { CommonModule } from \'@angular/common\';'
        ]
            .concat(files
            .filter((/**
         * @param {?} file
         * @return {?}
         */
        file => file.uri.endsWith('.component.ts')))
            .map((/**
         * @param {?} file
         * @return {?}
         */
        file => `import { ${this.extractClassName(file)} } from './${this.extractCompenentFileName(file)}';`)))
            .join('\n');
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    renderNgClasses(files) {
        return files
            .filter((/**
         * @param {?} file
         * @return {?}
         */
        file => file.uri.endsWith('.component.ts')))
            .map((/**
         * @param {?} file
         * @return {?}
         */
        file => this.formatService.indent(2, this.extractClassName(file))))
            .join(',\n');
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    extractClassName(file) {
        /** @type {?} */
        const uri = file.uri.split('/');
        /** @type {?} */
        const fileName = uri[uri.length - 1].replace('.component.ts', '');
        return this.formatService.className(`${fileName}Component`);
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    extractCompenentFileName(file) {
        return file.uri.split('.ts')[0];
    }
}
AngularCodeGenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AngularCodeGenService.ctorParameters = () => [
    { type: SymbolService },
    { type: ImageService },
    { type: WebCodeGenService },
    { type: FormatService },
    { type: AngularAggregatorService },
    { type: LayerService }
];
/** @nocollapse */ AngularCodeGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AngularCodeGenService_Factory() { return new AngularCodeGenService(i0.ɵɵinject(i1.SymbolService), i0.ɵɵinject(i1.ImageService), i0.ɵɵinject(i2.WebCodeGenService), i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i3.AngularAggregatorService), i0.ɵɵinject(i1.LayerService)); }, token: AngularCodeGenService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jb2RlZ2VuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9hbmd1bGFyLWNvZGVnZW4vIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1jb2RlZ2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLFlBQVksRUFDWixhQUFhLEVBQ2IsWUFBWSxFQUNaLGFBQWEsRUFDZCxNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7OztBQU94RSxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7Ozs7SUFDaEMsWUFDbUIsYUFBNEIsRUFDNUIsWUFBMEIsRUFDMUIsVUFBNkIsRUFDN0IsYUFBNEIsRUFDNUIsd0JBQWtELEVBQ2xELFlBQTBCO1FBTDFCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDMUMsQ0FBQzs7Ozs7OztJQUVKLE9BQU8sQ0FDTCxPQUFzQixFQUN0QixJQUFrQixFQUNsQixPQUEyQjtRQUUzQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBa0IsRUFBRSxPQUEyQjs7Y0FDakQsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7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LENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUM7YUFDdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVPLGdCQUFnQixDQUFDLElBQUk7O2NBQ3JCLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O2NBQ3pCLFFBQVEsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQztRQUNqRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsUUFBUSxXQUFXLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFTyx3QkFBd0IsQ0FBQyxJQUFJO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBckxGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVhDLGFBQWE7WUFEYixZQUFZO1lBS0wsaUJBQWlCO1lBRnhCLGFBQWE7WUFHTix3QkFBd0I7WUFKL0IsWUFBWTs7Ozs7Ozs7SUFhViw4Q0FBNkM7Ozs7O0lBQzdDLDZDQUEyQzs7Ozs7SUFDM0MsMkNBQThDOzs7OztJQUM5Qyw4Q0FBNkM7Ozs7O0lBQzdDLHlEQUFtRTs7Ozs7SUFDbkUsNkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEltYWdlU2VydmljZSxcclxuICBTeW1ib2xTZXJ2aWNlLFxyXG4gIExheWVyU2VydmljZSxcclxuICBGb3JtYXRTZXJ2aWNlXHJcbn0gZnJvbSAnQHhsYXllcnMvc2tldGNoLWxpYic7XHJcbmltcG9ydCB7IFdlYkNvZGVHZW5TZXJ2aWNlIH0gZnJvbSAnQHhsYXllcnMvd2ViLWNvZGVnZW4nO1xyXG5pbXBvcnQgeyBBbmd1bGFyQWdncmVnYXRvclNlcnZpY2UgfSBmcm9tICcuL2FuZ3VsYXItYWdncmVnYXRvci5zZXJ2aWNlJztcclxuXHJcbnR5cGUgV2ViQ29kZUdlbk9wdGlvbnMgPSBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyQ29kZUdlblNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzeW1ib2xTZXJ2aWNlOiBTeW1ib2xTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgd2ViQ29kZUdlbjogV2ViQ29kZUdlblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZvcm1hdFNlcnZpY2U6IEZvcm1hdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFuZ3VsYXJBZ2dyZXRhdG9yU2VydmljZTogQW5ndWxhckFnZ3JlZ2F0b3JTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsYXllclNlcnZpY2U6IExheWVyU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgY29tcHV0ZShcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBkYXRhOiBTa2V0Y2hNU0RhdGEsXHJcbiAgICBvcHRpb25zPzogV2ViQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIHRoaXMud2ViQ29kZUdlbi5jb21wdXRlKGN1cnJlbnQsIGRhdGEsIHRoaXMuY29tcGlsZU9wdGlvbnMob3B0aW9ucykpO1xyXG4gIH1cclxuXHJcbiAgYWdncmVnYXRlKGRhdGE6IFNrZXRjaE1TRGF0YSwgb3B0aW9ucz86IFdlYkNvZGVHZW5PcHRpb25zKSB7XHJcbiAgICBjb25zdCBmaWxlcyA9IGRhdGEucGFnZXMuZmxhdE1hcChwYWdlID0+XHJcbiAgICAgIHRoaXMudmlzaXQocGFnZSwgZGF0YSwgdGhpcy5jb21waWxlT3B0aW9ucyhvcHRpb25zKSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIHVyaTogJ3hsYXllcnMtcm91dGluZy5tb2R1bGUudHMnLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlclJvdXRpbmdNb2R1bGUoKSxcclxuICAgICAgICBsYW5ndWFnZTogJ3R5cGVzY3JpcHQnLFxyXG4gICAgICAgIGtpbmQ6ICdhbmd1bGFyJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdXJpOiAneGxheWVycy5tb2R1bGUudHMnLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlck1vZHVsZShmaWxlcyksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICd0eXBlc2NyaXB0JyxcclxuICAgICAgICBraW5kOiAnYW5ndWxhcidcclxuICAgICAgfSxcclxuICAgICAgLi4uZmlsZXNcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBpZGVudGlmeShjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy53ZWJDb2RlR2VuLmlkZW50aWZ5KGN1cnJlbnQpO1xyXG4gIH1cclxuXHJcbiAgY29udGV4dChjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy53ZWJDb2RlR2VuLmNvbnRleHQoY3VycmVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZpc2l0KFxyXG4gICAgY3VycmVudDogU2tldGNoTVNMYXllcixcclxuICAgIGRhdGE6IFNrZXRjaE1TRGF0YSxcclxuICAgIG9wdGlvbnM/OiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgcmV0dXJuIHRoaXMudmlzaXRDb250ZW50KGN1cnJlbnQsIGRhdGEsIG9wdGlvbnMpLmNvbmNhdChcclxuICAgICAgdGhpcy5hbmd1bGFyQWdncmV0YXRvclNlcnZpY2UuYWdncmVnYXRlKGN1cnJlbnQsIGRhdGEsIG9wdGlvbnMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2aXNpdENvbnRlbnQoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgZGF0YTogU2tldGNoTVNEYXRhLFxyXG4gICAgb3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIGlmICh0aGlzLmxheWVyU2VydmljZS5pZGVudGlmeShjdXJyZW50KSkge1xyXG4gICAgICByZXR1cm4gdGhpcy52aXNpdExheWVyKGN1cnJlbnQsIGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN5bWJvbFNlcnZpY2UuaWRlbnRpZnkoY3VycmVudCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmlzaXRTeW1ib2xNYXN0ZXIoY3VycmVudCwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaW1hZ2VTZXJ2aWNlLmlkZW50aWZ5KGN1cnJlbnQpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmltYWdlU2VydmljZS5hZ2dyZWdhdGUoY3VycmVudCwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZpc2l0TGF5ZXIoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgZGF0YTogU2tldGNoTVNEYXRhLFxyXG4gICAgb3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIHJldHVybiB0aGlzLmxheWVyU2VydmljZVxyXG4gICAgICAubG9va3VwKGN1cnJlbnQpXHJcbiAgICAgIC5mbGF0TWFwKGxheWVyID0+IHRoaXMudmlzaXRDb250ZW50KGxheWVyLCBkYXRhLCBvcHRpb25zKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZpc2l0U3ltYm9sTWFzdGVyKFxyXG4gICAgY3VycmVudDogU2tldGNoTVNMYXllcixcclxuICAgIGRhdGE6IFNrZXRjaE1TRGF0YSxcclxuICAgIG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zXHJcbiAgKSB7XHJcbiAgICBjb25zdCBzeW1ib2xNYXN0ZXIgPSB0aGlzLnN5bWJvbFNlcnZpY2UubG9va3VwKGN1cnJlbnQsIGRhdGEpO1xyXG4gICAgaWYgKHN5bWJvbE1hc3Rlcikge1xyXG4gICAgICByZXR1cm4gdGhpcy52aXNpdChzeW1ib2xNYXN0ZXIsIGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb21waWxlT3B0aW9ucyhvcHRpb25zOiBXZWJDb2RlR2VuT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGV4dFRhZ05hbWU6ICdzcGFuJyxcclxuICAgICAgYml0bWFwVGFnTmFtZTogJ2ltZycsXHJcbiAgICAgIGJsb2NrVGFnTmFtZTogJ2RpdicsXHJcbiAgICAgIHhtbFByZWZpeDogJ3hseS0nLFxyXG4gICAgICBjc3NQcmVmaXg6ICd4bHlfJyxcclxuICAgICAgY29tcG9uZW50RGlyOiAnY29tcG9uZW50cycsXHJcbiAgICAgIGFzc2V0RGlyOiAnYXNzZXRzJyxcclxuICAgICAgLi4ub3B0aW9uc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyUm91dGluZ01vZHVsZSgpIHtcclxuICAgIHJldHVybiBgXFxcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5jb25zdCB4bGF5ZXJzUm91dGVzOiBSb3V0ZXMgPSBbe1xyXG4gIHBhdGg6ICd4bGF5ZXJzXFxcclxuICBsb2FkQ2hpbGRyZW46ICdhcHAveGxheWVycy94bGF5ZXJzLm1vZHVsZSNYbGF5ZXJzTW9kdWxlJ1xyXG59XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogWyBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoeGxheWVyc1JvdXRlcykgXSxcclxuICBleHBvcnRzOiBbIFJvdXRlck1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBYbGF5ZXJzUm91dGluZ01vZHVsZSB7fWA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlck1vZHVsZShmaWxlcykge1xyXG4gICAgY29uc3QgaW1wb3J0U3RhdGVtZW50cyA9IHRoaXMucmVuZGVySW1wb3J0cyhmaWxlcyk7XHJcbiAgICBjb25zdCBuZ1N0YXRlbWVudHMgPSB0aGlzLnJlbmRlck5nQ2xhc3NlcyhmaWxlcyk7XHJcbiAgICByZXR1cm4gYFxcXHJcbiR7aW1wb3J0U3RhdGVtZW50c31cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiR7bmdTdGF0ZW1lbnRzfVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4ke25nU3RhdGVtZW50c31cclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFhsYXllcnNNb2R1bGUge31gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJJbXBvcnRzKGZpbGVzKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAnaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFxcJ0Bhbmd1bGFyL2NvcmVcXCc7JyxcclxuICAgICAgJ2ltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXFwnQGFuZ3VsYXIvY29tbW9uXFwnOydcclxuICAgIF1cclxuICAgICAgLmNvbmNhdChcclxuICAgICAgICBmaWxlc1xyXG4gICAgICAgICAgLmZpbHRlcihmaWxlID0+IGZpbGUudXJpLmVuZHNXaXRoKCcuY29tcG9uZW50LnRzJykpXHJcbiAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICBmaWxlID0+XHJcbiAgICAgICAgICAgICAgYGltcG9ydCB7ICR7dGhpcy5leHRyYWN0Q2xhc3NOYW1lKFxyXG4gICAgICAgICAgICAgICAgZmlsZVxyXG4gICAgICAgICAgICAgICl9IH0gZnJvbSAnLi8ke3RoaXMuZXh0cmFjdENvbXBlbmVudEZpbGVOYW1lKGZpbGUpfSc7YFxyXG4gICAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICAgIC5qb2luKCdcXG4nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyTmdDbGFzc2VzKGZpbGVzKSB7XHJcbiAgICByZXR1cm4gZmlsZXNcclxuICAgICAgLmZpbHRlcihmaWxlID0+IGZpbGUudXJpLmVuZHNXaXRoKCcuY29tcG9uZW50LnRzJykpXHJcbiAgICAgIC5tYXAoZmlsZSA9PiB0aGlzLmZvcm1hdFNlcnZpY2UuaW5kZW50KDIsIHRoaXMuZXh0cmFjdENsYXNzTmFtZShmaWxlKSkpXHJcbiAgICAgIC5qb2luKCcsXFxuJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RDbGFzc05hbWUoZmlsZSkge1xyXG4gICAgY29uc3QgdXJpID0gZmlsZS51cmkuc3BsaXQoJy8nKTtcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gdXJpW3VyaS5sZW5ndGggLSAxXS5yZXBsYWNlKCcuY29tcG9uZW50LnRzJywgJycpO1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0U2VydmljZS5jbGFzc05hbWUoYCR7ZmlsZU5hbWV9Q29tcG9uZW50YCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RDb21wZW5lbnRGaWxlTmFtZShmaWxlKSB7XHJcbiAgICByZXR1cm4gZmlsZS51cmkuc3BsaXQoJy50cycpWzBdO1xyXG4gIH1cclxufVxyXG4iXX0=