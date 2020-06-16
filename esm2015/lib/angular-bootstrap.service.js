/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormatService } from '@xlayers/sketch-lib';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
export class AngularBootstrapService {
    /**
     * @param {?} formatService
     */
    constructor(formatService) {
        this.formatService = formatService;
    }
    /**
     * @param {?} files
     * @return {?}
     */
    generate(files) {
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
            }
        ];
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
  path: 'xlayers',\
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
AngularBootstrapService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AngularBootstrapService.ctorParameters = () => [
    { type: FormatService }
];
/** @nocollapse */ AngularBootstrapService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AngularBootstrapService_Factory() { return new AngularBootstrapService(i0.ɵɵinject(i1.FormatService)); }, token: AngularBootstrapService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AngularBootstrapService.prototype.formatService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1ib290c3RyYXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL2FuZ3VsYXItY29kZWdlbi8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWJvb3RzdHJhcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBT3BELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFDbEMsWUFBNkIsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDOzs7OztJQUU3RCxRQUFRLENBQUMsS0FBSztRQUNaLE9BQU87WUFDTDtnQkFDRSxHQUFHLEVBQUUsMkJBQTJCO2dCQUNoQyxLQUFLLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFO2dCQUNqQyxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsSUFBSSxFQUFFLFNBQVM7YUFDaEI7WUFDRDtnQkFDRSxHQUFHLEVBQUUsbUJBQW1CO2dCQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7Z0JBQy9CLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLG1CQUFtQjtRQUN6QixPQUFPOzs7Ozs7Ozs7Ozs7O3FDQWEwQixDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxLQUFLOztjQUNsQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQzs7Y0FDNUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQ2hELE9BQU87RUFDVCxnQkFBZ0I7Ozs7RUFJaEIsWUFBWTs7O0VBR1osWUFBWTs7Ozs7OzhCQU1nQixDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxLQUFLO1FBQ3pCLE9BQU87WUFDTCw2Q0FBNkM7WUFDN0MsbURBQW1EO1NBQ3BEO2FBQ0UsTUFBTSxDQUNMLEtBQUs7YUFDRixNQUFNOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBQzthQUNsRCxHQUFHOzs7O1FBQ0YsSUFBSSxDQUFDLEVBQUUsQ0FDTCxZQUFZLElBQUksQ0FBQyxnQkFBZ0IsQ0FDL0IsSUFBSSxDQUNMLGNBQWMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQ3pELENBQ0o7YUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLEtBQUs7UUFDM0IsT0FBTyxLQUFLO2FBQ1QsTUFBTTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUM7YUFDbEQsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDO2FBQ3RFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQixDQUFDOzs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQyxJQUFJOztjQUNyQixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztjQUN6QixRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7UUFDakUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFFBQVEsV0FBVyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBRU8sd0JBQXdCLENBQUMsSUFBSTtRQUNuQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQTdGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxhQUFhOzs7Ozs7OztJQVFSLGdEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWF0U2VydmljZSB9IGZyb20gJ0B4bGF5ZXJzL3NrZXRjaC1saWInO1xyXG5cclxudHlwZSBXZWJDb2RlR2VuT3B0aW9ucyA9IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJCb290c3RyYXBTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZvcm1hdFNlcnZpY2U6IEZvcm1hdFNlcnZpY2UpIHt9XHJcblxyXG4gIGdlbmVyYXRlKGZpbGVzKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgdXJpOiAneGxheWVycy1yb3V0aW5nLm1vZHVsZS50cycsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyUm91dGluZ01vZHVsZSgpLFxyXG4gICAgICAgIGxhbmd1YWdlOiAndHlwZXNjcmlwdCcsXHJcbiAgICAgICAga2luZDogJ2FuZ3VsYXInXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB1cmk6ICd4bGF5ZXJzLm1vZHVsZS50cycsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyTW9kdWxlKGZpbGVzKSxcclxuICAgICAgICBsYW5ndWFnZTogJ3R5cGVzY3JpcHQnLFxyXG4gICAgICAgIGtpbmQ6ICdhbmd1bGFyJ1xyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJSb3V0aW5nTW9kdWxlKCkge1xyXG4gICAgcmV0dXJuIGBcXFxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmNvbnN0IHhsYXllcnNSb3V0ZXM6IFJvdXRlcyA9IFt7XHJcbiAgcGF0aDogJ3hsYXllcnMnLFxcXHJcbiAgbG9hZENoaWxkcmVuOiAnYXBwL3hsYXllcnMveGxheWVycy5tb2R1bGUjWGxheWVyc01vZHVsZSdcclxufV07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFsgUm91dGVyTW9kdWxlLmZvckNoaWxkKHhsYXllcnNSb3V0ZXMpIF0sXHJcbiAgZXhwb3J0czogWyBSb3V0ZXJNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWGxheWVyc1JvdXRpbmdNb2R1bGUge31gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJNb2R1bGUoZmlsZXMpIHtcclxuICAgIGNvbnN0IGltcG9ydFN0YXRlbWVudHMgPSB0aGlzLnJlbmRlckltcG9ydHMoZmlsZXMpO1xyXG4gICAgY29uc3QgbmdTdGF0ZW1lbnRzID0gdGhpcy5yZW5kZXJOZ0NsYXNzZXMoZmlsZXMpO1xyXG4gICAgcmV0dXJuIGBcXFxyXG4ke2ltcG9ydFN0YXRlbWVudHN9XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4ke25nU3RhdGVtZW50c31cclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuJHtuZ1N0YXRlbWVudHN9XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBYbGF5ZXJzTW9kdWxlIHt9YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVySW1wb3J0cyhmaWxlcykge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgJ2ltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcXCdAYW5ndWxhci9jb3JlXFwnOycsXHJcbiAgICAgICdpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFxcJ0Bhbmd1bGFyL2NvbW1vblxcJzsnXHJcbiAgICBdXHJcbiAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgZmlsZXNcclxuICAgICAgICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnVyaS5lbmRzV2l0aCgnLmNvbXBvbmVudC50cycpKVxyXG4gICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgZmlsZSA9PlxyXG4gICAgICAgICAgICAgIGBpbXBvcnQgeyAke3RoaXMuZXh0cmFjdENsYXNzTmFtZShcclxuICAgICAgICAgICAgICAgIGZpbGVcclxuICAgICAgICAgICAgICApfSB9IGZyb20gJy4vJHt0aGlzLmV4dHJhY3RDb21wZW5lbnRGaWxlTmFtZShmaWxlKX0nO2BcclxuICAgICAgICAgIClcclxuICAgICAgKVxyXG4gICAgICAuam9pbignXFxuJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlck5nQ2xhc3NlcyhmaWxlcykge1xyXG4gICAgcmV0dXJuIGZpbGVzXHJcbiAgICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnVyaS5lbmRzV2l0aCgnLmNvbXBvbmVudC50cycpKVxyXG4gICAgICAubWFwKGZpbGUgPT4gdGhpcy5mb3JtYXRTZXJ2aWNlLmluZGVudCgyLCB0aGlzLmV4dHJhY3RDbGFzc05hbWUoZmlsZSkpKVxyXG4gICAgICAuam9pbignLFxcbicpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0Q2xhc3NOYW1lKGZpbGUpIHtcclxuICAgIGNvbnN0IHVyaSA9IGZpbGUudXJpLnNwbGl0KCcvJyk7XHJcbiAgICBjb25zdCBmaWxlTmFtZSA9IHVyaVt1cmkubGVuZ3RoIC0gMV0ucmVwbGFjZSgnLmNvbXBvbmVudC50cycsICcnKTtcclxuICAgIHJldHVybiB0aGlzLmZvcm1hdFNlcnZpY2UuY2xhc3NOYW1lKGAke2ZpbGVOYW1lfUNvbXBvbmVudGApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0Q29tcGVuZW50RmlsZU5hbWUoZmlsZSkge1xyXG4gICAgcmV0dXJuIGZpbGUudXJpLnNwbGl0KCcudHMnKVswXTtcclxuICB9XHJcbn1cclxuIl19