/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormatService } from '@xlayers/sketch-lib';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
var AngularBootstrapService = /** @class */ (function () {
    function AngularBootstrapService(formatService) {
        this.formatService = formatService;
    }
    /**
     * @param {?} files
     * @return {?}
     */
    AngularBootstrapService.prototype.generate = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
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
    };
    /**
     * @private
     * @return {?}
     */
    AngularBootstrapService.prototype.renderRoutingModule = /**
     * @private
     * @return {?}
     */
    function () {
        return "import { NgModule } from '@angular/core'\nimport { RouterModule, Routes } from '@angular/router';\n\nconst xlayersRoutes: Routes = [{\n  path: 'xlayers',  loadChildren: 'app/xlayers/xlayers.module#XlayersModule'\n}];\n\n@NgModule({\n  imports: [ RouterModule.forChild(xlayersRoutes) ],\n  exports: [ RouterModule ]\n})\nexport class XlayersRoutingModule {}";
    };
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    AngularBootstrapService.prototype.renderModule = /**
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
    AngularBootstrapService.prototype.renderImports = /**
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
    AngularBootstrapService.prototype.renderNgClasses = /**
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
    AngularBootstrapService.prototype.extractClassName = /**
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
    AngularBootstrapService.prototype.extractCompenentFileName = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return file.uri.split('.ts')[0];
    };
    AngularBootstrapService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularBootstrapService.ctorParameters = function () { return [
        { type: FormatService }
    ]; };
    /** @nocollapse */ AngularBootstrapService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AngularBootstrapService_Factory() { return new AngularBootstrapService(i0.ɵɵinject(i1.FormatService)); }, token: AngularBootstrapService, providedIn: "root" });
    return AngularBootstrapService;
}());
export { AngularBootstrapService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AngularBootstrapService.prototype.formatService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1ib290c3RyYXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL2FuZ3VsYXItY29kZWdlbi8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWJvb3RzdHJhcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBSXBEO0lBSUUsaUNBQTZCLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQUcsQ0FBQzs7Ozs7SUFFN0QsMENBQVE7Ozs7SUFBUixVQUFTLEtBQUs7UUFDWixPQUFPO1lBQ0w7Z0JBQ0UsR0FBRyxFQUFFLDJCQUEyQjtnQkFDaEMsS0FBSyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtnQkFDakMsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLElBQUksRUFBRSxTQUFTO2FBQ2hCO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLG1CQUFtQjtnQkFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUMvQixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTyxxREFBbUI7Ozs7SUFBM0I7UUFDRSxPQUFPLHNXQWEwQixDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUVPLDhDQUFZOzs7OztJQUFwQixVQUFxQixLQUFLOztZQUNsQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQzs7WUFDNUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQ2hELE9BQ0YsZ0JBQWdCLDRDQUloQixZQUFZLDhCQUdaLFlBQVksbUZBTWdCLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBRU8sK0NBQWE7Ozs7O0lBQXJCLFVBQXNCLEtBQUs7UUFBM0IsaUJBZ0JDO1FBZkMsT0FBTztZQUNMLDZDQUE2QztZQUM3QyxtREFBbUQ7U0FDcEQ7YUFDRSxNQUFNLENBQ0wsS0FBSzthQUNGLE1BQU07Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFsQyxDQUFrQyxFQUFDO2FBQ2xELEdBQUc7Ozs7UUFDRixVQUFBLElBQUk7WUFDRixPQUFBLGNBQVksS0FBSSxDQUFDLGdCQUFnQixDQUMvQixJQUFJLENBQ0wsbUJBQWMsS0FBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxPQUFJO1FBRnRELENBRXNELEVBQ3pELENBQ0o7YUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRU8saURBQWU7Ozs7O0lBQXZCLFVBQXdCLEtBQUs7UUFBN0IsaUJBS0M7UUFKQyxPQUFPLEtBQUs7YUFDVCxNQUFNOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBbEMsQ0FBa0MsRUFBQzthQUNsRCxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQXpELENBQXlELEVBQUM7YUFDdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVPLGtEQUFnQjs7Ozs7SUFBeEIsVUFBeUIsSUFBSTs7WUFDckIsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7WUFDekIsUUFBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDO1FBQ2pFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUksUUFBUSxjQUFXLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFTywwREFBd0I7Ozs7O0lBQWhDLFVBQWlDLElBQUk7UUFDbkMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkE3RkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxhQUFhOzs7a0NBRHRCO0NBbUdDLEFBOUZELElBOEZDO1NBM0ZZLHVCQUF1Qjs7Ozs7O0lBQ3RCLGdEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWF0U2VydmljZSB9IGZyb20gJ0B4bGF5ZXJzL3NrZXRjaC1saWInO1xyXG5cclxudHlwZSBXZWJDb2RlR2VuT3B0aW9ucyA9IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJCb290c3RyYXBTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZvcm1hdFNlcnZpY2U6IEZvcm1hdFNlcnZpY2UpIHt9XHJcblxyXG4gIGdlbmVyYXRlKGZpbGVzKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgdXJpOiAneGxheWVycy1yb3V0aW5nLm1vZHVsZS50cycsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyUm91dGluZ01vZHVsZSgpLFxyXG4gICAgICAgIGxhbmd1YWdlOiAndHlwZXNjcmlwdCcsXHJcbiAgICAgICAga2luZDogJ2FuZ3VsYXInXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB1cmk6ICd4bGF5ZXJzLm1vZHVsZS50cycsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyTW9kdWxlKGZpbGVzKSxcclxuICAgICAgICBsYW5ndWFnZTogJ3R5cGVzY3JpcHQnLFxyXG4gICAgICAgIGtpbmQ6ICdhbmd1bGFyJ1xyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJSb3V0aW5nTW9kdWxlKCkge1xyXG4gICAgcmV0dXJuIGBcXFxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmNvbnN0IHhsYXllcnNSb3V0ZXM6IFJvdXRlcyA9IFt7XHJcbiAgcGF0aDogJ3hsYXllcnMnLFxcXHJcbiAgbG9hZENoaWxkcmVuOiAnYXBwL3hsYXllcnMveGxheWVycy5tb2R1bGUjWGxheWVyc01vZHVsZSdcclxufV07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFsgUm91dGVyTW9kdWxlLmZvckNoaWxkKHhsYXllcnNSb3V0ZXMpIF0sXHJcbiAgZXhwb3J0czogWyBSb3V0ZXJNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWGxheWVyc1JvdXRpbmdNb2R1bGUge31gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJNb2R1bGUoZmlsZXMpIHtcclxuICAgIGNvbnN0IGltcG9ydFN0YXRlbWVudHMgPSB0aGlzLnJlbmRlckltcG9ydHMoZmlsZXMpO1xyXG4gICAgY29uc3QgbmdTdGF0ZW1lbnRzID0gdGhpcy5yZW5kZXJOZ0NsYXNzZXMoZmlsZXMpO1xyXG4gICAgcmV0dXJuIGBcXFxyXG4ke2ltcG9ydFN0YXRlbWVudHN9XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4ke25nU3RhdGVtZW50c31cclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuJHtuZ1N0YXRlbWVudHN9XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBYbGF5ZXJzTW9kdWxlIHt9YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVySW1wb3J0cyhmaWxlcykge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgJ2ltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcXCdAYW5ndWxhci9jb3JlXFwnOycsXHJcbiAgICAgICdpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFxcJ0Bhbmd1bGFyL2NvbW1vblxcJzsnXHJcbiAgICBdXHJcbiAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgZmlsZXNcclxuICAgICAgICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnVyaS5lbmRzV2l0aCgnLmNvbXBvbmVudC50cycpKVxyXG4gICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgZmlsZSA9PlxyXG4gICAgICAgICAgICAgIGBpbXBvcnQgeyAke3RoaXMuZXh0cmFjdENsYXNzTmFtZShcclxuICAgICAgICAgICAgICAgIGZpbGVcclxuICAgICAgICAgICAgICApfSB9IGZyb20gJy4vJHt0aGlzLmV4dHJhY3RDb21wZW5lbnRGaWxlTmFtZShmaWxlKX0nO2BcclxuICAgICAgICAgIClcclxuICAgICAgKVxyXG4gICAgICAuam9pbignXFxuJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlck5nQ2xhc3NlcyhmaWxlcykge1xyXG4gICAgcmV0dXJuIGZpbGVzXHJcbiAgICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnVyaS5lbmRzV2l0aCgnLmNvbXBvbmVudC50cycpKVxyXG4gICAgICAubWFwKGZpbGUgPT4gdGhpcy5mb3JtYXRTZXJ2aWNlLmluZGVudCgyLCB0aGlzLmV4dHJhY3RDbGFzc05hbWUoZmlsZSkpKVxyXG4gICAgICAuam9pbignLFxcbicpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0Q2xhc3NOYW1lKGZpbGUpIHtcclxuICAgIGNvbnN0IHVyaSA9IGZpbGUudXJpLnNwbGl0KCcvJyk7XHJcbiAgICBjb25zdCBmaWxlTmFtZSA9IHVyaVt1cmkubGVuZ3RoIC0gMV0ucmVwbGFjZSgnLmNvbXBvbmVudC50cycsICcnKTtcclxuICAgIHJldHVybiB0aGlzLmZvcm1hdFNlcnZpY2UuY2xhc3NOYW1lKGAke2ZpbGVOYW1lfUNvbXBvbmVudGApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0Q29tcGVuZW50RmlsZU5hbWUoZmlsZSkge1xyXG4gICAgcmV0dXJuIGZpbGUudXJpLnNwbGl0KCcudHMnKVswXTtcclxuICB9XHJcbn1cclxuIl19