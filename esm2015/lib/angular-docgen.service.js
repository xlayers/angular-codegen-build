/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AngularDocGenService {
    /**
     * @param {?} data
     * @return {?}
     */
    aggregate(data) {
        return [
            {
                uri: 'README.md',
                value: this.renderReadme(data.meta.app),
                language: 'markdown',
                kind: 'text'
            }
        ];
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    renderReadme(name) {
        return `\
## How to use the ${name} Angular module

1. Download and extract the exported module into your workspace,

2. Option #1: Import eagerly the XlayersModule into your AppModule or other module.
\`\`\`
import { XlayersModule } from './xlayers/xlayers.module';

@NgModule({
  imports: [
    XlayersModule,
    ...
  ],
})
export class AppModule {}
\`\`\`

2. Option #2: Import lazily the XlayersModule routing configuration into your AppModule or other module.
Make sure your router is setup properly in order to use this option (see: https://angular.io/guide/lazy-loading-ngmodules).

\`\`\`
import { XlayersRoutingModule } from './xlayers/xlayers-routing.module';
@NgModule({
  imports: [
    XlayersRoutingModule,
    ...
  ],
})
export class AppModule {}
\`\`\`

3. Enjoy.`;
    }
}
AngularDocGenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ AngularDocGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AngularDocGenService_Factory() { return new AngularDocGenService(); }, token: AngularDocGenService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1kb2NnZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL2FuZ3VsYXItY29kZWdlbi8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWRvY2dlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sb0JBQW9COzs7OztJQUMvQixTQUFTLENBQUMsSUFBa0I7UUFDMUIsT0FBTztZQUNMO2dCQUNFLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDdkMsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLElBQVk7UUFDL0IsT0FBTztvQkFDUyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBK0JkLENBQUM7SUFDVCxDQUFDOzs7WUFqREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhckRvY0dlblNlcnZpY2Uge1xyXG4gIGFnZ3JlZ2F0ZShkYXRhOiBTa2V0Y2hNU0RhdGEpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICB1cmk6ICdSRUFETUUubWQnLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlclJlYWRtZShkYXRhLm1ldGEuYXBwKSxcclxuICAgICAgICBsYW5ndWFnZTogJ21hcmtkb3duJyxcclxuICAgICAgICBraW5kOiAndGV4dCdcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyUmVhZG1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGBcXFxyXG4jIyBIb3cgdG8gdXNlIHRoZSAke25hbWV9IEFuZ3VsYXIgbW9kdWxlXHJcblxyXG4xLiBEb3dubG9hZCBhbmQgZXh0cmFjdCB0aGUgZXhwb3J0ZWQgbW9kdWxlIGludG8geW91ciB3b3Jrc3BhY2UsXHJcblxyXG4yLiBPcHRpb24gIzE6IEltcG9ydCBlYWdlcmx5IHRoZSBYbGF5ZXJzTW9kdWxlIGludG8geW91ciBBcHBNb2R1bGUgb3Igb3RoZXIgbW9kdWxlLlxyXG5cXGBcXGBcXGBcclxuaW1wb3J0IHsgWGxheWVyc01vZHVsZSB9IGZyb20gJy4veGxheWVycy94bGF5ZXJzLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIFhsYXllcnNNb2R1bGUsXHJcbiAgICAuLi5cclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcblxcYFxcYFxcYFxyXG5cclxuMi4gT3B0aW9uICMyOiBJbXBvcnQgbGF6aWx5IHRoZSBYbGF5ZXJzTW9kdWxlIHJvdXRpbmcgY29uZmlndXJhdGlvbiBpbnRvIHlvdXIgQXBwTW9kdWxlIG9yIG90aGVyIG1vZHVsZS5cclxuTWFrZSBzdXJlIHlvdXIgcm91dGVyIGlzIHNldHVwIHByb3Blcmx5IGluIG9yZGVyIHRvIHVzZSB0aGlzIG9wdGlvbiAoc2VlOiBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvbGF6eS1sb2FkaW5nLW5nbW9kdWxlcykuXHJcblxyXG5cXGBcXGBcXGBcclxuaW1wb3J0IHsgWGxheWVyc1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3hsYXllcnMveGxheWVycy1yb3V0aW5nLm1vZHVsZSc7XHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgWGxheWVyc1JvdXRpbmdNb2R1bGUsXHJcbiAgICAuLi5cclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcblxcYFxcYFxcYFxyXG5cclxuMy4gRW5qb3kuYDtcclxuICB9XHJcbn1cclxuIl19