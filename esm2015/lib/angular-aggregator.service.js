/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { WebCodeGenService } from '@xlayers/web-codegen';
import { FormatService } from '@xlayers/sketch-lib';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
export class AngularAggregatorService {
    /**
     * @param {?} formatService
     * @param {?} webCodeGenService
     */
    constructor(formatService, webCodeGenService) {
        this.formatService = formatService;
        this.webCodeGenService = webCodeGenService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    aggregate(current, data, options) {
        /** @type {?} */
        const fileName = this.formatService.normalizeName(current.name);
        return [
            ...this.webCodeGenService.aggregate(current, data, options).map((/**
             * @param {?} file
             * @return {?}
             */
            file => {
                switch (file.language) {
                    case 'html':
                        return Object.assign({}, file, { kind: 'angular', uri: `${options.componentDir}/${fileName}.component.html` });
                    case 'css':
                        return Object.assign({}, file, { kind: 'angular', uri: `${options.componentDir}/${fileName}.component.css` });
                    default:
                        return Object.assign({}, file, { kind: 'angular' });
                }
            })),
            {
                kind: 'angular',
                value: this.renderComponent(current.name, options),
                language: 'typescript',
                uri: `${options.componentDir}/${fileName}.component.ts`
            },
            {
                kind: 'angular',
                value: this.renderSpec(current.name),
                language: 'typescript',
                uri: `${options.componentDir}/${fileName}.spec.ts`
            }
        ];
    }
    /**
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    renderComponent(name, options) {
        /** @type {?} */
        const className = this.formatService.className(name);
        /** @type {?} */
        const normalizedName = this.formatService.normalizeName(name);
        /** @type {?} */
        const tagName = `${options.xmlPrefix}${normalizedName}`;
        return `\
import { Component } from '@angular/core';

@Component({
  selector: '${tagName}',
  templateUrl: './${normalizedName}.component.html',
  styleUrls: ['./${normalizedName}.component.css']
})
export class ${className}Component {}`;
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    renderSpec(name) {
        /** @type {?} */
        const className = this.formatService.className(name);
        /** @type {?} */
        const fileName = this.formatService.normalizeName(name);
        return `\
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ${className} } from "./${fileName}";

describe('${className}Component', () => {
  let component: ${className}Component;
  let fixture: ComponentFixture<${className}Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [${className}Component]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(${className}Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});`;
    }
}
AngularAggregatorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AngularAggregatorService.ctorParameters = () => [
    { type: FormatService },
    { type: WebCodeGenService }
];
/** @nocollapse */ AngularAggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AngularAggregatorService_Factory() { return new AngularAggregatorService(i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i2.WebCodeGenService)); }, token: AngularAggregatorService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1hZ2dyZWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9hbmd1bGFyLWNvZGVnZW4vIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1hZ2dyZWdhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBT3BELE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBQ25DLFlBQ21CLGFBQTRCLEVBQzVCLGlCQUFvQztRQURwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3BELENBQUM7Ozs7Ozs7SUFFSixTQUFTLENBQ1AsT0FBc0IsRUFDdEIsSUFBa0IsRUFDbEIsT0FBMEI7O2NBRXBCLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQy9ELE9BQU87WUFDTCxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3JFLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDckIsS0FBSyxNQUFNO3dCQUNULHlCQUNLLElBQUksSUFDUCxJQUFJLEVBQUUsU0FBUyxFQUNmLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksUUFBUSxpQkFBaUIsSUFDekQ7b0JBRUosS0FBSyxLQUFLO3dCQUNSLHlCQUNLLElBQUksSUFDUCxJQUFJLEVBQUUsU0FBUyxFQUNmLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksUUFBUSxnQkFBZ0IsSUFDeEQ7b0JBRUo7d0JBQ0UseUJBQ0ssSUFBSSxJQUNQLElBQUksRUFBRSxTQUFTLElBQ2Y7aUJBQ0w7WUFDSCxDQUFDLEVBQUM7WUFDRjtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztnQkFDbEQsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksUUFBUSxlQUFlO2FBQ3hEO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDcEMsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksUUFBUSxVQUFVO2FBQ25EO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxJQUFZLEVBQUUsT0FBMEI7O2NBQ2hELFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7O2NBQzlDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7O2NBQ3ZELE9BQU8sR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEdBQUcsY0FBYyxFQUFFO1FBQ3ZELE9BQU87Ozs7ZUFJSSxPQUFPO29CQUNGLGNBQWM7bUJBQ2YsY0FBYzs7ZUFFbEIsU0FBUyxjQUFjLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLElBQVk7O2NBQ3ZCLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7O2NBQzlDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDdkQsT0FBTzs7V0FFQSxTQUFTLGNBQWMsUUFBUTs7WUFFOUIsU0FBUzttQkFDRixTQUFTO2tDQUNNLFNBQVM7Ozs7dUJBSXBCLFNBQVM7Ozs7Ozt3Q0FNUSxTQUFTOzs7Ozs7OztJQVE3QyxDQUFDO0lBQ0gsQ0FBQzs7O1lBakdGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLGFBQWE7WUFEYixpQkFBaUI7Ozs7Ozs7O0lBVXRCLGlEQUE2Qzs7Ozs7SUFDN0MscURBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZWJDb2RlR2VuU2VydmljZSB9IGZyb20gJ0B4bGF5ZXJzL3dlYi1jb2RlZ2VuJztcclxuaW1wb3J0IHsgRm9ybWF0U2VydmljZSB9IGZyb20gJ0B4bGF5ZXJzL3NrZXRjaC1saWInO1xyXG5cclxudHlwZSBXZWJDb2RlR2VuT3B0aW9ucyA9IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJBZ2dyZWdhdG9yU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZvcm1hdFNlcnZpY2U6IEZvcm1hdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdlYkNvZGVHZW5TZXJ2aWNlOiBXZWJDb2RlR2VuU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgYWdncmVnYXRlKFxyXG4gICAgY3VycmVudDogU2tldGNoTVNMYXllcixcclxuICAgIGRhdGE6IFNrZXRjaE1TRGF0YSxcclxuICAgIG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zXHJcbiAgKSB7XHJcbiAgICBjb25zdCBmaWxlTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKGN1cnJlbnQubmFtZSk7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAuLi50aGlzLndlYkNvZGVHZW5TZXJ2aWNlLmFnZ3JlZ2F0ZShjdXJyZW50LCBkYXRhLCBvcHRpb25zKS5tYXAoZmlsZSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChmaWxlLmxhbmd1YWdlKSB7XHJcbiAgICAgICAgICBjYXNlICdodG1sJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAuLi5maWxlLFxyXG4gICAgICAgICAgICAgIGtpbmQ6ICdhbmd1bGFyJyxcclxuICAgICAgICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS5jb21wb25lbnQuaHRtbGBcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBjYXNlICdjc3MnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLmZpbGUsXHJcbiAgICAgICAgICAgICAga2luZDogJ2FuZ3VsYXInLFxyXG4gICAgICAgICAgICAgIHVyaTogYCR7b3B0aW9ucy5jb21wb25lbnREaXJ9LyR7ZmlsZU5hbWV9LmNvbXBvbmVudC5jc3NgXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAuLi5maWxlLFxyXG4gICAgICAgICAgICAgIGtpbmQ6ICdhbmd1bGFyJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICAgIHtcclxuICAgICAgICBraW5kOiAnYW5ndWxhcicsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyQ29tcG9uZW50KGN1cnJlbnQubmFtZSwgb3B0aW9ucyksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICd0eXBlc2NyaXB0JyxcclxuICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS5jb21wb25lbnQudHNgXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBraW5kOiAnYW5ndWxhcicsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyU3BlYyhjdXJyZW50Lm5hbWUpLFxyXG4gICAgICAgIGxhbmd1YWdlOiAndHlwZXNjcmlwdCcsXHJcbiAgICAgICAgdXJpOiBgJHtvcHRpb25zLmNvbXBvbmVudERpcn0vJHtmaWxlTmFtZX0uc3BlYy50c2BcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNvbXBvbmVudChuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zKSB7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2UuY2xhc3NOYW1lKG5hbWUpO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShuYW1lKTtcclxuICAgIGNvbnN0IHRhZ05hbWUgPSBgJHtvcHRpb25zLnhtbFByZWZpeH0ke25vcm1hbGl6ZWROYW1lfWA7XHJcbiAgICByZXR1cm4gYFxcXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICcke3RhZ05hbWV9JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vJHtub3JtYWxpemVkTmFtZX0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuLyR7bm9ybWFsaXplZE5hbWV9LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgJHtjbGFzc05hbWV9Q29tcG9uZW50IHt9YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyU3BlYyhuYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5jbGFzc05hbWUobmFtZSk7XHJcbiAgICBjb25zdCBmaWxlTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKG5hbWUpO1xyXG4gICAgcmV0dXJuIGBcXFxyXG5pbXBvcnQgeyBhc3luYywgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XHJcbmltcG9ydCB7ICR7Y2xhc3NOYW1lfSB9IGZyb20gXCIuLyR7ZmlsZU5hbWV9XCI7XHJcblxyXG5kZXNjcmliZSgnJHtjbGFzc05hbWV9Q29tcG9uZW50JywgKCkgPT4ge1xyXG4gIGxldCBjb21wb25lbnQ6ICR7Y2xhc3NOYW1lfUNvbXBvbmVudDtcclxuICBsZXQgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTwke2NsYXNzTmFtZX1Db21wb25lbnQ+O1xyXG5cclxuICBiZWZvcmVFYWNoKGFzeW5jKCgpID0+IHtcclxuICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XHJcbiAgICAgIGRlY2xhcmF0aW9uczogWyR7Y2xhc3NOYW1lfUNvbXBvbmVudF1cclxuICAgIH0pXHJcbiAgICAuY29tcGlsZUNvbXBvbmVudHMoKTtcclxuICB9KSk7XHJcblxyXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KCR7Y2xhc3NOYW1lfUNvbXBvbmVudCk7XHJcbiAgICBjb21wb25lbnQgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xyXG4gICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfSk7XHJcblxyXG4gIGl0KCdzaG91bGQgY3JlYXRlJywgKCkgPT4ge1xyXG4gICAgZXhwZWN0KGNvbXBvbmVudCkudG9CZVRydXRoeSgpO1xyXG4gIH0pO1xyXG59KTtgO1xyXG4gIH1cclxufVxyXG4iXX0=