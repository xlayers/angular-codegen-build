/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { WebCodeGenService } from '@xlayers/web-codegen';
import { FormatService } from '@xlayers/sketch-lib';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
var AngularAggregatorService = /** @class */ (function () {
    function AngularAggregatorService(formatService, webCodeGenService) {
        this.formatService = formatService;
        this.webCodeGenService = webCodeGenService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    AngularAggregatorService.prototype.aggregate = /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        /** @type {?} */
        var fileName = this.formatService.normalizeName(current.name);
        return tslib_1.__spread(this.webCodeGenService.aggregate(current, data, options).map((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            switch (file.language) {
                case 'html':
                    return tslib_1.__assign({}, file, { kind: 'angular', uri: options.componentDir + "/" + fileName + ".component.html" });
                case 'css':
                    return tslib_1.__assign({}, file, { kind: 'angular', uri: options.componentDir + "/" + fileName + ".component.css" });
                default:
                    return tslib_1.__assign({}, file, { kind: 'angular' });
            }
        })), [
            {
                kind: 'angular',
                value: this.renderComponent(current.name, options),
                language: 'typescript',
                uri: options.componentDir + "/" + fileName + ".component.ts"
            },
            {
                kind: 'angular',
                value: this.renderSpec(current.name),
                language: 'typescript',
                uri: options.componentDir + "/" + fileName + ".spec.ts"
            }
        ]);
    };
    /**
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    AngularAggregatorService.prototype.renderComponent = /**
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    function (name, options) {
        /** @type {?} */
        var className = this.formatService.className(name);
        /** @type {?} */
        var normalizedName = this.formatService.normalizeName(name);
        /** @type {?} */
        var tagName = "" + options.xmlPrefix + normalizedName;
        return "import { Component } from '@angular/core';\n\n@Component({\n  selector: '" + tagName + "',\n  templateUrl: './" + normalizedName + ".component.html',\n  styleUrls: ['./" + normalizedName + ".component.css']\n})\nexport class " + className + "Component {}";
    };
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    AngularAggregatorService.prototype.renderSpec = /**
     * @private
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var className = this.formatService.className(name);
        /** @type {?} */
        var fileName = this.formatService.normalizeName(name);
        return "import { async, ComponentFixture, TestBed } from '@angular/core/testing';\nimport { " + className + " } from \"./" + fileName + "\";\n\ndescribe('" + className + "Component', () => {\n  let component: " + className + "Component;\n  let fixture: ComponentFixture<" + className + "Component>;\n\n  beforeEach(async(() => {\n    TestBed.configureTestingModule({\n      declarations: [" + className + "Component]\n    })\n    .compileComponents();\n  }));\n\n  beforeEach(() => {\n    fixture = TestBed.createComponent(" + className + "Component);\n    component = fixture.componentInstance;\n    fixture.detectChanges();\n  });\n\n  it('should create', () => {\n    expect(component).toBeTruthy();\n  });\n});";
    };
    AngularAggregatorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularAggregatorService.ctorParameters = function () { return [
        { type: FormatService },
        { type: WebCodeGenService }
    ]; };
    /** @nocollapse */ AngularAggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AngularAggregatorService_Factory() { return new AngularAggregatorService(i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i2.WebCodeGenService)); }, token: AngularAggregatorService, providedIn: "root" });
    return AngularAggregatorService;
}());
export { AngularAggregatorService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AngularAggregatorService.prototype.formatService;
    /**
     * @type {?}
     * @private
     */
    AngularAggregatorService.prototype.webCodeGenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1hZ2dyZWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9hbmd1bGFyLWNvZGVnZW4vIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1hZ2dyZWdhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUlwRDtJQUlFLGtDQUNtQixhQUE0QixFQUM1QixpQkFBb0M7UUFEcEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUNwRCxDQUFDOzs7Ozs7O0lBRUosNENBQVM7Ozs7OztJQUFULFVBQ0UsT0FBc0IsRUFDdEIsSUFBa0IsRUFDbEIsT0FBMEI7O1lBRXBCLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQy9ELHdCQUNLLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ2xFLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDckIsS0FBSyxNQUFNO29CQUNULDRCQUNLLElBQUksSUFDUCxJQUFJLEVBQUUsU0FBUyxFQUNmLEdBQUcsRUFBSyxPQUFPLENBQUMsWUFBWSxTQUFJLFFBQVEsb0JBQWlCLElBQ3pEO2dCQUVKLEtBQUssS0FBSztvQkFDUiw0QkFDSyxJQUFJLElBQ1AsSUFBSSxFQUFFLFNBQVMsRUFDZixHQUFHLEVBQUssT0FBTyxDQUFDLFlBQVksU0FBSSxRQUFRLG1CQUFnQixJQUN4RDtnQkFFSjtvQkFDRSw0QkFDSyxJQUFJLElBQ1AsSUFBSSxFQUFFLFNBQVMsSUFDZjthQUNMO1FBQ0gsQ0FBQyxFQUFDO1lBQ0Y7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7Z0JBQ2xELFFBQVEsRUFBRSxZQUFZO2dCQUN0QixHQUFHLEVBQUssT0FBTyxDQUFDLFlBQVksU0FBSSxRQUFRLGtCQUFlO2FBQ3hEO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDcEMsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLEdBQUcsRUFBSyxPQUFPLENBQUMsWUFBWSxTQUFJLFFBQVEsYUFBVTthQUNuRDtXQUNEO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsa0RBQWU7Ozs7O0lBQWYsVUFBZ0IsSUFBWSxFQUFFLE9BQTBCOztZQUNoRCxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDOztZQUM5QyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDOztZQUN2RCxPQUFPLEdBQUcsS0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLGNBQWdCO1FBQ3ZELE9BQU8sOEVBSUksT0FBTyw4QkFDRixjQUFjLDRDQUNmLGNBQWMsMkNBRWxCLFNBQVMsaUJBQWMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFTyw2Q0FBVTs7Ozs7SUFBbEIsVUFBbUIsSUFBWTs7WUFDdkIsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzs7WUFDOUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUN2RCxPQUFPLHlGQUVBLFNBQVMsb0JBQWMsUUFBUSx5QkFFOUIsU0FBUyw4Q0FDRixTQUFTLG9EQUNNLFNBQVMsOEdBSXBCLFNBQVMsNkhBTVEsU0FBUyxtTEFRN0MsQ0FBQztJQUNILENBQUM7O2dCQWpHRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5RLGFBQWE7Z0JBRGIsaUJBQWlCOzs7bUNBRDFCO0NBd0dDLEFBbEdELElBa0dDO1NBL0ZZLHdCQUF3Qjs7Ozs7O0lBRWpDLGlEQUE2Qzs7Ozs7SUFDN0MscURBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWJDb2RlR2VuU2VydmljZSB9IGZyb20gJ0B4bGF5ZXJzL3dlYi1jb2RlZ2VuJztcclxuaW1wb3J0IHsgRm9ybWF0U2VydmljZSB9IGZyb20gJ0B4bGF5ZXJzL3NrZXRjaC1saWInO1xyXG5cclxudHlwZSBXZWJDb2RlR2VuT3B0aW9ucyA9IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJBZ2dyZWdhdG9yU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZvcm1hdFNlcnZpY2U6IEZvcm1hdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdlYkNvZGVHZW5TZXJ2aWNlOiBXZWJDb2RlR2VuU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgYWdncmVnYXRlKFxyXG4gICAgY3VycmVudDogU2tldGNoTVNMYXllcixcclxuICAgIGRhdGE6IFNrZXRjaE1TRGF0YSxcclxuICAgIG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zXHJcbiAgKSB7XHJcbiAgICBjb25zdCBmaWxlTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKGN1cnJlbnQubmFtZSk7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAuLi50aGlzLndlYkNvZGVHZW5TZXJ2aWNlLmFnZ3JlZ2F0ZShjdXJyZW50LCBkYXRhLCBvcHRpb25zKS5tYXAoZmlsZSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChmaWxlLmxhbmd1YWdlKSB7XHJcbiAgICAgICAgICBjYXNlICdodG1sJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAuLi5maWxlLFxyXG4gICAgICAgICAgICAgIGtpbmQ6ICdhbmd1bGFyJyxcclxuICAgICAgICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS5jb21wb25lbnQuaHRtbGBcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBjYXNlICdjc3MnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLmZpbGUsXHJcbiAgICAgICAgICAgICAga2luZDogJ2FuZ3VsYXInLFxyXG4gICAgICAgICAgICAgIHVyaTogYCR7b3B0aW9ucy5jb21wb25lbnREaXJ9LyR7ZmlsZU5hbWV9LmNvbXBvbmVudC5jc3NgXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAuLi5maWxlLFxyXG4gICAgICAgICAgICAgIGtpbmQ6ICdhbmd1bGFyJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICAgIHtcclxuICAgICAgICBraW5kOiAnYW5ndWxhcicsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyQ29tcG9uZW50KGN1cnJlbnQubmFtZSwgb3B0aW9ucyksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICd0eXBlc2NyaXB0JyxcclxuICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS5jb21wb25lbnQudHNgXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBraW5kOiAnYW5ndWxhcicsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyU3BlYyhjdXJyZW50Lm5hbWUpLFxyXG4gICAgICAgIGxhbmd1YWdlOiAndHlwZXNjcmlwdCcsXHJcbiAgICAgICAgdXJpOiBgJHtvcHRpb25zLmNvbXBvbmVudERpcn0vJHtmaWxlTmFtZX0uc3BlYy50c2BcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNvbXBvbmVudChuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zKSB7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2UuY2xhc3NOYW1lKG5hbWUpO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShuYW1lKTtcclxuICAgIGNvbnN0IHRhZ05hbWUgPSBgJHtvcHRpb25zLnhtbFByZWZpeH0ke25vcm1hbGl6ZWROYW1lfWA7XHJcbiAgICByZXR1cm4gYFxcXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICcke3RhZ05hbWV9JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vJHtub3JtYWxpemVkTmFtZX0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuLyR7bm9ybWFsaXplZE5hbWV9LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgJHtjbGFzc05hbWV9Q29tcG9uZW50IHt9YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyU3BlYyhuYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5jbGFzc05hbWUobmFtZSk7XHJcbiAgICBjb25zdCBmaWxlTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKG5hbWUpO1xyXG4gICAgcmV0dXJuIGBcXFxyXG5pbXBvcnQgeyBhc3luYywgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XHJcbmltcG9ydCB7ICR7Y2xhc3NOYW1lfSB9IGZyb20gXCIuLyR7ZmlsZU5hbWV9XCI7XHJcblxyXG5kZXNjcmliZSgnJHtjbGFzc05hbWV9Q29tcG9uZW50JywgKCkgPT4ge1xyXG4gIGxldCBjb21wb25lbnQ6ICR7Y2xhc3NOYW1lfUNvbXBvbmVudDtcclxuICBsZXQgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTwke2NsYXNzTmFtZX1Db21wb25lbnQ+O1xyXG5cclxuICBiZWZvcmVFYWNoKGFzeW5jKCgpID0+IHtcclxuICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XHJcbiAgICAgIGRlY2xhcmF0aW9uczogWyR7Y2xhc3NOYW1lfUNvbXBvbmVudF1cclxuICAgIH0pXHJcbiAgICAuY29tcGlsZUNvbXBvbmVudHMoKTtcclxuICB9KSk7XHJcblxyXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KCR7Y2xhc3NOYW1lfUNvbXBvbmVudCk7XHJcbiAgICBjb21wb25lbnQgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xyXG4gICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfSk7XHJcblxyXG4gIGl0KCdzaG91bGQgY3JlYXRlJywgKCkgPT4ge1xyXG4gICAgZXhwZWN0KGNvbXBvbmVudCkudG9CZVRydXRoeSgpO1xyXG4gIH0pO1xyXG59KTtgO1xyXG4gIH1cclxufVxyXG4iXX0=