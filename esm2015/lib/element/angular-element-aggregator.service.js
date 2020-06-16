/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormatService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import { AngularAggregatorService } from '../angular-aggregator.service';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
import * as i3 from "../angular-aggregator.service";
/** @type {?} */
const ELEMENT_MODULE_FILENAME = 'app.module.ts';
/** @type {?} */
const EXTRA_WEBPACK_CONFIG_FILENAME = 'webpack.extra.js';
/** @type {?} */
const COPY_BUNDLES_SCRIPT_FILENAME = 'copy.bundles.js';
/** @type {?} */
const DIST_FOLDER_NAME = 'dist';
/** @type {?} */
const BUNDLES_TARGET_PATH = `${DIST_FOLDER_NAME}/bundles`;
/** @type {?} */
const SAMPLE_INDEX_FILENAME = 'index.html';
/** @type {?} */
const ELEMENT_BUNDLE_FILENAME = 'main.js';
/** @type {?} */
const ELEMENT_CREATOR_APPNAME = 'element-creator';
export class AngularElementAggregatorService {
    /**
     * @param {?} formatService
     * @param {?} webCodeGenService
     * @param {?} angularAggregatorService
     */
    constructor(formatService, webCodeGenService, angularAggregatorService) {
        this.formatService = formatService;
        this.webCodeGenService = webCodeGenService;
        this.angularAggregatorService = angularAggregatorService;
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
        /** @type {?} */
        const componentPathName = `${options.componentDir}/${fileName}.component`;
        return [
            {
                uri: 'README.md',
                value: this.renderReadme(data.meta.app, options),
                language: 'markdown',
                kind: 'text'
            },
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
                        return Object.assign({}, file, { kind: 'angularElement' });
                }
            })),
            {
                uri: `${componentPathName}.ts`,
                value: this.angularAggregatorService.renderComponent(current.name, options),
                language: 'typescript',
                kind: 'angular'
            },
            {
                uri: ELEMENT_MODULE_FILENAME,
                value: this.renderElementModule(current.name, options, componentPathName),
                language: 'typescript',
                kind: 'angularElement'
            },
            {
                uri: EXTRA_WEBPACK_CONFIG_FILENAME,
                value: this.renderWebpackExtra(),
                language: 'javascript',
                kind: 'angularElement'
            },
            {
                uri: COPY_BUNDLES_SCRIPT_FILENAME,
                value: this.renderCopyUmdBundlesScript(),
                language: 'javascript',
                kind: 'angularElement'
            },
            {
                uri: SAMPLE_INDEX_FILENAME,
                value: this.renderSampleIndexHtml(current.name, options),
                language: 'html',
                kind: 'angularElement'
            }
        ];
    }
    /**
     * @private
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    renderReadme(name, options) {
        /** @type {?} */
        const className = this.formatService.className(name);
        /** @type {?} */
        const normalizedName = this.formatService.normalizeName(name);
        /** @type {?} */
        const tagName = `${options.xmlPrefix}${normalizedName}`;
        /** @type {?} */
        const codeSpan = (/**
         * @param {?} text
         * @return {?}
         */
        text => '`' + text + '`');
        /** @type {?} */
        const codeBlock = '```';
        return `
**Notice:**
The current implement of [Angular Elements](https://angular.io/guide/elements) is in MVP (minimum viable product) state.
Some features like content projection are not supported yet.
Keep in mind that the following build process and feature support will be improved in the future.
The creation of the bundled Angular Element is based on the process defined by [Manfred Steyer](https://twitter.com/manfredsteyer)'s example from
[${codeSpan('ngx-build-plus')}](https://github.com/manfredsteyer/ngx-build-plus).
## How to use the ${codeSpan(name)} Angular Element
1. In order to use an Angular Element as a web component, it first needs to be created, e.g. in the following way:
    a) Use the Angular CLI to create a minimal app which will be used to create the Angular Element:
    ${codeBlock}
    ng new ${ELEMENT_CREATOR_APPNAME} --minimal --style css --routing false
    cd ${ELEMENT_CREATOR_APPNAME}
    ${codeBlock}
    b) Add necessary dependencies for the following steps:
    ${codeBlock}
    ng add @angular/elements
    ng add ngx-build-plus
    npm install @webcomponents/custom-elements --save
    npm install --save-dev copy
    ${codeBlock}
    c) Download and extract the files of this generation. Place the files of the ${codeSpan(className)}
    into your standard ${codeSpan('src/app')} folder. Replace the ${codeSpan(ELEMENT_MODULE_FILENAME)} and remove the sample ${codeSpan('app.component.ts')}.
    Extract the files ${codeSpan(EXTRA_WEBPACK_CONFIG_FILENAME)} and ${codeSpan(COPY_BUNDLES_SCRIPT_FILENAME)} into the project root.
    e) Build the Angular Element:
    ${codeBlock}
    ng build --prod --extraWebpackConfig ${EXTRA_WEBPACK_CONFIG_FILENAME} --output-hashing none --single-bundle true
    ${codeBlock}
2. After the creation of the Angular Element, it can be found as single file
web component ${codeSpan(DIST_FOLDER_NAME +
            '/' +
            ELEMENT_CREATOR_APPNAME +
            '/' +
            ELEMENT_BUNDLE_FILENAME)} and can be consumed in the following way:
${codeBlock}
  // index.html
  <script src="./${DIST_FOLDER_NAME}/${ELEMENT_CREATOR_APPNAME}/${ELEMENT_BUNDLE_FILENAME}"></script>
  <${tagName}></${tagName}>
${codeBlock}
However due to the bundle splitting approach, the different dependent bundles must be added manually,
e.g. like described in the exported sample file ${codeSpan(SAMPLE_INDEX_FILENAME)}.
In order to get those script you can run the script ${codeSpan(COPY_BUNDLES_SCRIPT_FILENAME)} file.
${codeBlock}
  node ./${COPY_BUNDLES_SCRIPT_FILENAME}
${codeBlock}
>  For more information about [web components and browser support](https://github.com/WebComponents/webcomponentsjs#browser-support)
`;
    }
    /**
     * @private
     * @param {?} name
     * @param {?} options
     * @param {?} componentPathName
     * @return {?}
     */
    renderElementModule(name, options, componentPathName) {
        /** @type {?} */
        const className = this.formatService.className(name);
        /** @type {?} */
        const componentName = `${className}Component`;
        /** @type {?} */
        const normalizedName = this.formatService.normalizeName(name);
        /** @type {?} */
        const tagName = `${options.xmlPrefix}${normalizedName}`;
        return ('' +
            `
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ${componentName} } from './${componentPathName}';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ${componentName}
  ],
  entryComponents: [
    ${componentName}
  ],
})
export class AppModule {
  constructor(injector: Injector) {
    const element = createCustomElement(${componentName} , { injector });
    customElements.define('${tagName}', element);
  }
  ngDoBootstrap() { }
}
    `);
    }
    /**
     * @private
     * @return {?}
     */
    renderWebpackExtra() {
        return `
module.exports = {
  "externals": {
      "rxjs": "rxjs",
      "@angular/core": "ng.core",
      "@angular/common": "ng.common",
      "@angular/platform-browser": "ng.platformBrowser",
      "@angular/elements": "ng.elements"
  }
}
    `;
    }
    /**
     * @private
     * @return {?}
     */
    renderCopyUmdBundlesScript() {
        return `
//
// This script copies over UMD bundles to the folder dist/bundles
// If you call it manually, call it from your projects root
// > node /${COPY_BUNDLES_SCRIPT_FILENAME}
//
const copy = require('copy');
console.log('Copy UMD bundles ...');
copy('node_modules/@angular/*/bundles/*.umd.js', '${BUNDLES_TARGET_PATH}', {}, _ => {});
copy('node_modules/rxjs/bundles/*.js', '${BUNDLES_TARGET_PATH}/rxjs', {}, _ => {});
copy('node_modules/zone.js/dist/*.js', '${BUNDLES_TARGET_PATH}/zone.js', {}, _ => {});
copy('node_modules/core-js/client/*.js', '${BUNDLES_TARGET_PATH}/core-js', {}, _ => {});
copy('node_modules/@webcomponents/custom-elements/*.js', '${BUNDLES_TARGET_PATH}/custom-elements', {}, _ => {});
copy('node_modules/@webcomponents/custom-elements/src/native-shim*.js', '${BUNDLES_TARGET_PATH}/custom-elements/src', {}, _ => {});
    `;
    }
    /**
     * @private
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    renderSampleIndexHtml(name, options) {
        /** @type {?} */
        const normalizedName = this.formatService.normalizeName(name);
        /** @type {?} */
        const tagName = `${options.xmlPrefix}${normalizedName}`;
        return `
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>ElementsLoading</title>
<base href=".">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
<!-- Consider putting the following UMD (!) bundles -->
<!-- into a big one -->
<!-- core-js for legacy browsers -->
<script src="./${BUNDLES_TARGET_PATH}/core-js/core.js"></script>
<!-- Zone.js -->
<!--
    Consider excluding zone.js when creating
    custom Elements by using the noop zone.
-->
<script src="./${BUNDLES_TARGET_PATH}/zone.js/zone.js"></script>
<!--
    Polyfills for Browsers supporting
    Custom Elements. Needed b/c we downlevel
    to ES5. See: @webcomponents/custom-elements
-->
<script src="./${BUNDLES_TARGET_PATH}/custom-elements/src/native-shim.js"></script>
<!-- Polyfills for Browsers not supporting
        Custom Elements. See: @webcomponents/custom-elements
-->
<script src="./${BUNDLES_TARGET_PATH}/custom-elements/custom-elements.min.js"></script>
<!-- Rx -->
<script src="./${BUNDLES_TARGET_PATH}/rxjs/rxjs.umd.js"></script>
<!-- Angular Packages -->
<script src="./${BUNDLES_TARGET_PATH}/core/bundles/core.umd.js"></script>
<script src="./${BUNDLES_TARGET_PATH}/common/bundles/common.umd.js"></script>
<script src="./${BUNDLES_TARGET_PATH}/platform-browser/bundles/platform-browser.umd.js"></script>
<script src="./${BUNDLES_TARGET_PATH}/elements/bundles/elements.umd.js"></script>
<!-- Angular Element -->
<script src="./${DIST_FOLDER_NAME}/${ELEMENT_CREATOR_APPNAME}/${ELEMENT_BUNDLE_FILENAME}"></script>
<!-- Calling Custom Element -->
<${tagName}></${tagName}>
</body>
</html>
    `;
    }
}
AngularElementAggregatorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AngularElementAggregatorService.ctorParameters = () => [
    { type: FormatService },
    { type: WebCodeGenService },
    { type: AngularAggregatorService }
];
/** @nocollapse */ AngularElementAggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AngularElementAggregatorService_Factory() { return new AngularElementAggregatorService(i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i2.WebCodeGenService), i0.ɵɵinject(i3.AngularAggregatorService)); }, token: AngularElementAggregatorService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AngularElementAggregatorService.prototype.formatService;
    /**
     * @type {?}
     * @private
     */
    AngularElementAggregatorService.prototype.webCodeGenService;
    /**
     * @type {?}
     * @private
     */
    AngularElementAggregatorService.prototype.angularAggregatorService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lbGVtZW50LWFnZ3JlZ2F0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL2FuZ3VsYXItY29kZWdlbi8iLCJzb3VyY2VzIjpbImxpYi9lbGVtZW50L2FuZ3VsYXItZWxlbWVudC1hZ2dyZWdhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7TUFFbkUsdUJBQXVCLEdBQUcsZUFBZTs7TUFDekMsNkJBQTZCLEdBQUcsa0JBQWtCOztNQUNsRCw0QkFBNEIsR0FBRyxpQkFBaUI7O01BQ2hELGdCQUFnQixHQUFHLE1BQU07O01BQ3pCLG1CQUFtQixHQUFHLEdBQUcsZ0JBQWdCLFVBQVU7O01BQ25ELHFCQUFxQixHQUFHLFlBQVk7O01BQ3BDLHVCQUF1QixHQUFHLFNBQVM7O01BQ25DLHVCQUF1QixHQUFHLGlCQUFpQjtBQU9qRCxNQUFNLE9BQU8sK0JBQStCOzs7Ozs7SUFDMUMsWUFDbUIsYUFBNEIsRUFDNUIsaUJBQW9DLEVBQ3BDLHdCQUFrRDtRQUZsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFDbEUsQ0FBQzs7Ozs7OztJQUVKLFNBQVMsQ0FDUCxPQUFzQixFQUN0QixJQUFrQixFQUNsQixPQUEwQjs7Y0FFcEIsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7O2NBQ3pELGlCQUFpQixHQUFHLEdBQUcsT0FBTyxDQUFDLFlBQVksSUFBSSxRQUFRLFlBQVk7UUFFekUsT0FBTztZQUNMO2dCQUNFLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7Z0JBQ2hELFFBQVEsRUFBRSxVQUFVO2dCQUNwQixJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0QsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRzs7OztZQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNyRSxRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ3JCLEtBQUssTUFBTTt3QkFDVCx5QkFDSyxJQUFJLElBQ1AsSUFBSSxFQUFFLFNBQVMsRUFDZixHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsWUFBWSxJQUFJLFFBQVEsaUJBQWlCLElBQ3pEO29CQUVKLEtBQUssS0FBSzt3QkFDUix5QkFDSyxJQUFJLElBQ1AsSUFBSSxFQUFFLFNBQVMsRUFDZixHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsWUFBWSxJQUFJLFFBQVEsZ0JBQWdCLElBQ3hEO29CQUVKO3dCQUNFLHlCQUNLLElBQUksSUFDUCxJQUFJLEVBQUUsZ0JBQWdCLElBQ3RCO2lCQUNMO1lBQ0gsQ0FBQyxFQUFDO1lBQ0Y7Z0JBQ0UsR0FBRyxFQUFFLEdBQUcsaUJBQWlCLEtBQUs7Z0JBQzlCLEtBQUssRUFBRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUNsRCxPQUFPLENBQUMsSUFBSSxFQUNaLE9BQU8sQ0FDUjtnQkFDRCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsSUFBSSxFQUFFLFNBQVM7YUFDaEI7WUFDRDtnQkFDRSxHQUFHLEVBQUUsdUJBQXVCO2dCQUM1QixLQUFLLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUM3QixPQUFPLENBQUMsSUFBSSxFQUNaLE9BQU8sRUFDUCxpQkFBaUIsQ0FDbEI7Z0JBQ0QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLElBQUksRUFBRSxnQkFBZ0I7YUFDdkI7WUFDRDtnQkFDRSxHQUFHLEVBQUUsNkJBQTZCO2dCQUNsQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFO2dCQUNoQyxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsSUFBSSxFQUFFLGdCQUFnQjthQUN2QjtZQUNEO2dCQUNFLEdBQUcsRUFBRSw0QkFBNEI7Z0JBQ2pDLEtBQUssRUFBRSxJQUFJLENBQUMsMEJBQTBCLEVBQUU7Z0JBQ3hDLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3ZCO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLHFCQUFxQjtnQkFDMUIsS0FBSyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztnQkFDeEQsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLElBQUksRUFBRSxnQkFBZ0I7YUFDdkI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVPLFlBQVksQ0FBQyxJQUFZLEVBQUUsT0FBMEI7O2NBQ3JELFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7O2NBQzlDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7O2NBQ3ZELE9BQU8sR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEdBQUcsY0FBYyxFQUFFOztjQUNqRCxRQUFROzs7O1FBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQTs7Y0FDbkMsU0FBUyxHQUFHLEtBQUs7UUFDdkIsT0FBTzs7Ozs7O0dBTVIsUUFBUSxDQUNMLGdCQUFnQixDQUNqQjtvQkFDZSxRQUFRLENBQUMsSUFBSSxDQUFDOzs7TUFHNUIsU0FBUzthQUNGLHVCQUF1QjtTQUMzQix1QkFBdUI7TUFDMUIsU0FBUzs7TUFFVCxTQUFTOzs7OztNQUtULFNBQVM7bUZBQ29FLFFBQVEsQ0FDckYsU0FBUyxDQUNWO3lCQUNvQixRQUFRLENBQUMsU0FBUyxDQUFDLHdCQUF3QixRQUFRLENBQ3RFLHVCQUF1QixDQUN4QiwwQkFBMEIsUUFBUSxDQUFDLGtCQUFrQixDQUFDO3dCQUNuQyxRQUFRLENBQUMsNkJBQTZCLENBQUMsUUFBUSxRQUFRLENBQ3pFLDRCQUE0QixDQUM3Qjs7TUFFQyxTQUFTOzJDQUM0Qiw2QkFBNkI7TUFDbEUsU0FBUzs7Z0JBRUMsUUFBUSxDQUNsQixnQkFBZ0I7WUFDZCxHQUFHO1lBQ0gsdUJBQXVCO1lBQ3ZCLEdBQUc7WUFDSCx1QkFBdUIsQ0FDMUI7RUFDSCxTQUFTOzttQkFFUSxnQkFBZ0IsSUFBSSx1QkFBdUIsSUFBSSx1QkFBdUI7S0FDcEYsT0FBTyxNQUFNLE9BQU87RUFDdkIsU0FBUzs7a0RBRXVDLFFBQVEsQ0FDcEQscUJBQXFCLENBQ3RCO3NEQUNpRCxRQUFRLENBQ3hELDRCQUE0QixDQUM3QjtFQUNILFNBQVM7V0FDQSw0QkFBNEI7RUFDckMsU0FBUzs7Q0FFVixDQUFDO0lBQ0EsQ0FBQzs7Ozs7Ozs7SUFFTyxtQkFBbUIsQ0FDekIsSUFBWSxFQUNaLE9BQTBCLEVBQzFCLGlCQUF5Qjs7Y0FFbkIsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzs7Y0FDOUMsYUFBYSxHQUFHLEdBQUcsU0FBUyxXQUFXOztjQUN2QyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDOztjQUN2RCxPQUFPLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLGNBQWMsRUFBRTtRQUN2RCxPQUFPLENBQ0wsRUFBRTtZQUNGOzs7O1dBSUssYUFBYSxjQUFjLGlCQUFpQjs7Ozs7O01BTWpELGFBQWE7OztNQUdiLGFBQWE7Ozs7OzBDQUt1QixhQUFhOzZCQUMxQixPQUFPOzs7O0tBSS9CLENBQ0EsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU8sa0JBQWtCO1FBQ3hCLE9BQU87Ozs7Ozs7Ozs7S0FVTixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTywwQkFBMEI7UUFDaEMsT0FBTzs7OzthQUlFLDRCQUE0Qjs7OztvREFJVyxtQkFBbUI7MENBQzdCLG1CQUFtQjswQ0FDbkIsbUJBQW1COzRDQUNqQixtQkFBbUI7NERBQ0gsbUJBQW1COzJFQUNKLG1CQUFtQjtLQUN6RixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVPLHFCQUFxQixDQUFDLElBQVksRUFBRSxPQUEwQjs7Y0FDOUQsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQzs7Y0FDdkQsT0FBTyxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxjQUFjLEVBQUU7UUFFdkQsT0FBTzs7Ozs7Ozs7Ozs7Ozs7aUJBY00sbUJBQW1COzs7Ozs7aUJBTW5CLG1CQUFtQjs7Ozs7O2lCQU1uQixtQkFBbUI7Ozs7aUJBSW5CLG1CQUFtQjs7aUJBRW5CLG1CQUFtQjs7aUJBRW5CLG1CQUFtQjtpQkFDbkIsbUJBQW1CO2lCQUNuQixtQkFBbUI7aUJBQ25CLG1CQUFtQjs7aUJBRW5CLGdCQUFnQixJQUFJLHVCQUF1QixJQUFJLHVCQUF1Qjs7R0FFcEYsT0FBTyxNQUFNLE9BQU87OztLQUdsQixDQUFDO0lBQ0osQ0FBQzs7O1lBcFJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWpCUSxhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLHdCQUF3Qjs7Ozs7Ozs7SUFrQjdCLHdEQUE2Qzs7Ozs7SUFDN0MsNERBQXFEOzs7OztJQUNyRCxtRUFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1hdFNlcnZpY2UgfSBmcm9tICdAeGxheWVycy9za2V0Y2gtbGliJztcclxuaW1wb3J0IHsgV2ViQ29kZUdlblNlcnZpY2UgfSBmcm9tICdAeGxheWVycy93ZWItY29kZWdlbic7XHJcbmltcG9ydCB7IEFuZ3VsYXJBZ2dyZWdhdG9yU2VydmljZSB9IGZyb20gJy4uL2FuZ3VsYXItYWdncmVnYXRvci5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IEVMRU1FTlRfTU9EVUxFX0ZJTEVOQU1FID0gJ2FwcC5tb2R1bGUudHMnO1xyXG5jb25zdCBFWFRSQV9XRUJQQUNLX0NPTkZJR19GSUxFTkFNRSA9ICd3ZWJwYWNrLmV4dHJhLmpzJztcclxuY29uc3QgQ09QWV9CVU5ETEVTX1NDUklQVF9GSUxFTkFNRSA9ICdjb3B5LmJ1bmRsZXMuanMnO1xyXG5jb25zdCBESVNUX0ZPTERFUl9OQU1FID0gJ2Rpc3QnO1xyXG5jb25zdCBCVU5ETEVTX1RBUkdFVF9QQVRIID0gYCR7RElTVF9GT0xERVJfTkFNRX0vYnVuZGxlc2A7XHJcbmNvbnN0IFNBTVBMRV9JTkRFWF9GSUxFTkFNRSA9ICdpbmRleC5odG1sJztcclxuY29uc3QgRUxFTUVOVF9CVU5ETEVfRklMRU5BTUUgPSAnbWFpbi5qcyc7XHJcbmNvbnN0IEVMRU1FTlRfQ1JFQVRPUl9BUFBOQU1FID0gJ2VsZW1lbnQtY3JlYXRvcic7XHJcblxyXG50eXBlIFdlYkNvZGVHZW5PcHRpb25zID0gYW55O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhckVsZW1lbnRBZ2dyZWdhdG9yU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZvcm1hdFNlcnZpY2U6IEZvcm1hdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdlYkNvZGVHZW5TZXJ2aWNlOiBXZWJDb2RlR2VuU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYW5ndWxhckFnZ3JlZ2F0b3JTZXJ2aWNlOiBBbmd1bGFyQWdncmVnYXRvclNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGFnZ3JlZ2F0ZShcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBkYXRhOiBTa2V0Y2hNU0RhdGEsXHJcbiAgICBvcHRpb25zOiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgY29uc3QgZmlsZU5hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShjdXJyZW50Lm5hbWUpO1xyXG4gICAgY29uc3QgY29tcG9uZW50UGF0aE5hbWUgPSBgJHtvcHRpb25zLmNvbXBvbmVudERpcn0vJHtmaWxlTmFtZX0uY29tcG9uZW50YDtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgdXJpOiAnUkVBRE1FLm1kJyxcclxuICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJSZWFkbWUoZGF0YS5tZXRhLmFwcCwgb3B0aW9ucyksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdtYXJrZG93bicsXHJcbiAgICAgICAga2luZDogJ3RleHQnXHJcbiAgICAgIH0sXHJcbiAgICAgIC4uLnRoaXMud2ViQ29kZUdlblNlcnZpY2UuYWdncmVnYXRlKGN1cnJlbnQsIGRhdGEsIG9wdGlvbnMpLm1hcChmaWxlID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGZpbGUubGFuZ3VhZ2UpIHtcclxuICAgICAgICAgIGNhc2UgJ2h0bWwnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLmZpbGUsXHJcbiAgICAgICAgICAgICAga2luZDogJ2FuZ3VsYXInLFxyXG4gICAgICAgICAgICAgIHVyaTogYCR7b3B0aW9ucy5jb21wb25lbnREaXJ9LyR7ZmlsZU5hbWV9LmNvbXBvbmVudC5odG1sYFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNhc2UgJ2Nzcyc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uZmlsZSxcclxuICAgICAgICAgICAgICBraW5kOiAnYW5ndWxhcicsXHJcbiAgICAgICAgICAgICAgdXJpOiBgJHtvcHRpb25zLmNvbXBvbmVudERpcn0vJHtmaWxlTmFtZX0uY29tcG9uZW50LmNzc2BcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLmZpbGUsXHJcbiAgICAgICAgICAgICAga2luZDogJ2FuZ3VsYXJFbGVtZW50J1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICAgIHtcclxuICAgICAgICB1cmk6IGAke2NvbXBvbmVudFBhdGhOYW1lfS50c2AsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuYW5ndWxhckFnZ3JlZ2F0b3JTZXJ2aWNlLnJlbmRlckNvbXBvbmVudChcclxuICAgICAgICAgIGN1cnJlbnQubmFtZSxcclxuICAgICAgICAgIG9wdGlvbnNcclxuICAgICAgICApLFxyXG4gICAgICAgIGxhbmd1YWdlOiAndHlwZXNjcmlwdCcsXHJcbiAgICAgICAga2luZDogJ2FuZ3VsYXInXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB1cmk6IEVMRU1FTlRfTU9EVUxFX0ZJTEVOQU1FLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlckVsZW1lbnRNb2R1bGUoXHJcbiAgICAgICAgICBjdXJyZW50Lm5hbWUsXHJcbiAgICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgICAgY29tcG9uZW50UGF0aE5hbWVcclxuICAgICAgICApLFxyXG4gICAgICAgIGxhbmd1YWdlOiAndHlwZXNjcmlwdCcsXHJcbiAgICAgICAga2luZDogJ2FuZ3VsYXJFbGVtZW50J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdXJpOiBFWFRSQV9XRUJQQUNLX0NPTkZJR19GSUxFTkFNRSxcclxuICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJXZWJwYWNrRXh0cmEoKSxcclxuICAgICAgICBsYW5ndWFnZTogJ2phdmFzY3JpcHQnLFxyXG4gICAgICAgIGtpbmQ6ICdhbmd1bGFyRWxlbWVudCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHVyaTogQ09QWV9CVU5ETEVTX1NDUklQVF9GSUxFTkFNRSxcclxuICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJDb3B5VW1kQnVuZGxlc1NjcmlwdCgpLFxyXG4gICAgICAgIGxhbmd1YWdlOiAnamF2YXNjcmlwdCcsXHJcbiAgICAgICAga2luZDogJ2FuZ3VsYXJFbGVtZW50J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdXJpOiBTQU1QTEVfSU5ERVhfRklMRU5BTUUsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyU2FtcGxlSW5kZXhIdG1sKGN1cnJlbnQubmFtZSwgb3B0aW9ucyksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdodG1sJyxcclxuICAgICAgICBraW5kOiAnYW5ndWxhckVsZW1lbnQnXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlclJlYWRtZShuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zKSB7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2UuY2xhc3NOYW1lKG5hbWUpO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShuYW1lKTtcclxuICAgIGNvbnN0IHRhZ05hbWUgPSBgJHtvcHRpb25zLnhtbFByZWZpeH0ke25vcm1hbGl6ZWROYW1lfWA7XHJcbiAgICBjb25zdCBjb2RlU3BhbiA9IHRleHQgPT4gJ2AnICsgdGV4dCArICdgJztcclxuICAgIGNvbnN0IGNvZGVCbG9jayA9ICdgYGAnO1xyXG4gICAgcmV0dXJuIGBcclxuKipOb3RpY2U6KipcclxuVGhlIGN1cnJlbnQgaW1wbGVtZW50IG9mIFtBbmd1bGFyIEVsZW1lbnRzXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvZWxlbWVudHMpIGlzIGluIE1WUCAobWluaW11bSB2aWFibGUgcHJvZHVjdCkgc3RhdGUuXHJcblNvbWUgZmVhdHVyZXMgbGlrZSBjb250ZW50IHByb2plY3Rpb24gYXJlIG5vdCBzdXBwb3J0ZWQgeWV0LlxyXG5LZWVwIGluIG1pbmQgdGhhdCB0aGUgZm9sbG93aW5nIGJ1aWxkIHByb2Nlc3MgYW5kIGZlYXR1cmUgc3VwcG9ydCB3aWxsIGJlIGltcHJvdmVkIGluIHRoZSBmdXR1cmUuXHJcblRoZSBjcmVhdGlvbiBvZiB0aGUgYnVuZGxlZCBBbmd1bGFyIEVsZW1lbnQgaXMgYmFzZWQgb24gdGhlIHByb2Nlc3MgZGVmaW5lZCBieSBbTWFuZnJlZCBTdGV5ZXJdKGh0dHBzOi8vdHdpdHRlci5jb20vbWFuZnJlZHN0ZXllcikncyBleGFtcGxlIGZyb21cclxuWyR7Y29kZVNwYW4oXHJcbiAgICAgICduZ3gtYnVpbGQtcGx1cydcclxuICAgICl9XShodHRwczovL2dpdGh1Yi5jb20vbWFuZnJlZHN0ZXllci9uZ3gtYnVpbGQtcGx1cykuXHJcbiMjIEhvdyB0byB1c2UgdGhlICR7Y29kZVNwYW4obmFtZSl9IEFuZ3VsYXIgRWxlbWVudFxyXG4xLiBJbiBvcmRlciB0byB1c2UgYW4gQW5ndWxhciBFbGVtZW50IGFzIGEgd2ViIGNvbXBvbmVudCwgaXQgZmlyc3QgbmVlZHMgdG8gYmUgY3JlYXRlZCwgZS5nLiBpbiB0aGUgZm9sbG93aW5nIHdheTpcclxuICAgIGEpIFVzZSB0aGUgQW5ndWxhciBDTEkgdG8gY3JlYXRlIGEgbWluaW1hbCBhcHAgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSB0aGUgQW5ndWxhciBFbGVtZW50OlxyXG4gICAgJHtjb2RlQmxvY2t9XHJcbiAgICBuZyBuZXcgJHtFTEVNRU5UX0NSRUFUT1JfQVBQTkFNRX0gLS1taW5pbWFsIC0tc3R5bGUgY3NzIC0tcm91dGluZyBmYWxzZVxyXG4gICAgY2QgJHtFTEVNRU5UX0NSRUFUT1JfQVBQTkFNRX1cclxuICAgICR7Y29kZUJsb2NrfVxyXG4gICAgYikgQWRkIG5lY2Vzc2FyeSBkZXBlbmRlbmNpZXMgZm9yIHRoZSBmb2xsb3dpbmcgc3RlcHM6XHJcbiAgICAke2NvZGVCbG9ja31cclxuICAgIG5nIGFkZCBAYW5ndWxhci9lbGVtZW50c1xyXG4gICAgbmcgYWRkIG5neC1idWlsZC1wbHVzXHJcbiAgICBucG0gaW5zdGFsbCBAd2ViY29tcG9uZW50cy9jdXN0b20tZWxlbWVudHMgLS1zYXZlXHJcbiAgICBucG0gaW5zdGFsbCAtLXNhdmUtZGV2IGNvcHlcclxuICAgICR7Y29kZUJsb2NrfVxyXG4gICAgYykgRG93bmxvYWQgYW5kIGV4dHJhY3QgdGhlIGZpbGVzIG9mIHRoaXMgZ2VuZXJhdGlvbi4gUGxhY2UgdGhlIGZpbGVzIG9mIHRoZSAke2NvZGVTcGFuKFxyXG4gICAgICBjbGFzc05hbWVcclxuICAgICl9XHJcbiAgICBpbnRvIHlvdXIgc3RhbmRhcmQgJHtjb2RlU3Bhbignc3JjL2FwcCcpfSBmb2xkZXIuIFJlcGxhY2UgdGhlICR7Y29kZVNwYW4oXHJcbiAgICAgIEVMRU1FTlRfTU9EVUxFX0ZJTEVOQU1FXHJcbiAgICApfSBhbmQgcmVtb3ZlIHRoZSBzYW1wbGUgJHtjb2RlU3BhbignYXBwLmNvbXBvbmVudC50cycpfS5cclxuICAgIEV4dHJhY3QgdGhlIGZpbGVzICR7Y29kZVNwYW4oRVhUUkFfV0VCUEFDS19DT05GSUdfRklMRU5BTUUpfSBhbmQgJHtjb2RlU3BhbihcclxuICAgICAgQ09QWV9CVU5ETEVTX1NDUklQVF9GSUxFTkFNRVxyXG4gICAgKX0gaW50byB0aGUgcHJvamVjdCByb290LlxyXG4gICAgZSkgQnVpbGQgdGhlIEFuZ3VsYXIgRWxlbWVudDpcclxuICAgICR7Y29kZUJsb2NrfVxyXG4gICAgbmcgYnVpbGQgLS1wcm9kIC0tZXh0cmFXZWJwYWNrQ29uZmlnICR7RVhUUkFfV0VCUEFDS19DT05GSUdfRklMRU5BTUV9IC0tb3V0cHV0LWhhc2hpbmcgbm9uZSAtLXNpbmdsZS1idW5kbGUgdHJ1ZVxyXG4gICAgJHtjb2RlQmxvY2t9XHJcbjIuIEFmdGVyIHRoZSBjcmVhdGlvbiBvZiB0aGUgQW5ndWxhciBFbGVtZW50LCBpdCBjYW4gYmUgZm91bmQgYXMgc2luZ2xlIGZpbGVcclxud2ViIGNvbXBvbmVudCAke2NvZGVTcGFuKFxyXG4gICAgICBESVNUX0ZPTERFUl9OQU1FICtcclxuICAgICAgICAnLycgK1xyXG4gICAgICAgIEVMRU1FTlRfQ1JFQVRPUl9BUFBOQU1FICtcclxuICAgICAgICAnLycgK1xyXG4gICAgICAgIEVMRU1FTlRfQlVORExFX0ZJTEVOQU1FXHJcbiAgICApfSBhbmQgY2FuIGJlIGNvbnN1bWVkIGluIHRoZSBmb2xsb3dpbmcgd2F5OlxyXG4ke2NvZGVCbG9ja31cclxuICAvLyBpbmRleC5odG1sXHJcbiAgPHNjcmlwdCBzcmM9XCIuLyR7RElTVF9GT0xERVJfTkFNRX0vJHtFTEVNRU5UX0NSRUFUT1JfQVBQTkFNRX0vJHtFTEVNRU5UX0JVTkRMRV9GSUxFTkFNRX1cIj48L3NjcmlwdD5cclxuICA8JHt0YWdOYW1lfT48LyR7dGFnTmFtZX0+XHJcbiR7Y29kZUJsb2NrfVxyXG5Ib3dldmVyIGR1ZSB0byB0aGUgYnVuZGxlIHNwbGl0dGluZyBhcHByb2FjaCwgdGhlIGRpZmZlcmVudCBkZXBlbmRlbnQgYnVuZGxlcyBtdXN0IGJlIGFkZGVkIG1hbnVhbGx5LFxyXG5lLmcuIGxpa2UgZGVzY3JpYmVkIGluIHRoZSBleHBvcnRlZCBzYW1wbGUgZmlsZSAke2NvZGVTcGFuKFxyXG4gICAgICBTQU1QTEVfSU5ERVhfRklMRU5BTUVcclxuICAgICl9LlxyXG5JbiBvcmRlciB0byBnZXQgdGhvc2Ugc2NyaXB0IHlvdSBjYW4gcnVuIHRoZSBzY3JpcHQgJHtjb2RlU3BhbihcclxuICAgICAgQ09QWV9CVU5ETEVTX1NDUklQVF9GSUxFTkFNRVxyXG4gICAgKX0gZmlsZS5cclxuJHtjb2RlQmxvY2t9XHJcbiAgbm9kZSAuLyR7Q09QWV9CVU5ETEVTX1NDUklQVF9GSUxFTkFNRX1cclxuJHtjb2RlQmxvY2t9XHJcbj4gIEZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IFt3ZWIgY29tcG9uZW50cyBhbmQgYnJvd3NlciBzdXBwb3J0XShodHRwczovL2dpdGh1Yi5jb20vV2ViQ29tcG9uZW50cy93ZWJjb21wb25lbnRzanMjYnJvd3Nlci1zdXBwb3J0KVxyXG5gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJFbGVtZW50TW9kdWxlKFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgb3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnMsXHJcbiAgICBjb21wb25lbnRQYXRoTmFtZTogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2UuY2xhc3NOYW1lKG5hbWUpO1xyXG4gICAgY29uc3QgY29tcG9uZW50TmFtZSA9IGAke2NsYXNzTmFtZX1Db21wb25lbnRgO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShuYW1lKTtcclxuICAgIGNvbnN0IHRhZ05hbWUgPSBgJHtvcHRpb25zLnhtbFByZWZpeH0ke25vcm1hbGl6ZWROYW1lfWA7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAnJyArXHJcbiAgICAgIGBcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgJHtjb21wb25lbnROYW1lfSB9IGZyb20gJy4vJHtjb21wb25lbnRQYXRoTmFtZX0nO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgJHtjb21wb25lbnROYW1lfVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICAke2NvbXBvbmVudE5hbWV9XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgke2NvbXBvbmVudE5hbWV9ICwgeyBpbmplY3RvciB9KTtcclxuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnJHt0YWdOYW1lfScsIGVsZW1lbnQpO1xyXG4gIH1cclxuICBuZ0RvQm9vdHN0cmFwKCkgeyB9XHJcbn1cclxuICAgIGBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcldlYnBhY2tFeHRyYSgpIHtcclxuICAgIHJldHVybiBgXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIFwiZXh0ZXJuYWxzXCI6IHtcclxuICAgICAgXCJyeGpzXCI6IFwicnhqc1wiLFxyXG4gICAgICBcIkBhbmd1bGFyL2NvcmVcIjogXCJuZy5jb3JlXCIsXHJcbiAgICAgIFwiQGFuZ3VsYXIvY29tbW9uXCI6IFwibmcuY29tbW9uXCIsXHJcbiAgICAgIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiOiBcIm5nLnBsYXRmb3JtQnJvd3NlclwiLFxyXG4gICAgICBcIkBhbmd1bGFyL2VsZW1lbnRzXCI6IFwibmcuZWxlbWVudHNcIlxyXG4gIH1cclxufVxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyQ29weVVtZEJ1bmRsZXNTY3JpcHQoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4vL1xyXG4vLyBUaGlzIHNjcmlwdCBjb3BpZXMgb3ZlciBVTUQgYnVuZGxlcyB0byB0aGUgZm9sZGVyIGRpc3QvYnVuZGxlc1xyXG4vLyBJZiB5b3UgY2FsbCBpdCBtYW51YWxseSwgY2FsbCBpdCBmcm9tIHlvdXIgcHJvamVjdHMgcm9vdFxyXG4vLyA+IG5vZGUgLyR7Q09QWV9CVU5ETEVTX1NDUklQVF9GSUxFTkFNRX1cclxuLy9cclxuY29uc3QgY29weSA9IHJlcXVpcmUoJ2NvcHknKTtcclxuY29uc29sZS5sb2coJ0NvcHkgVU1EIGJ1bmRsZXMgLi4uJyk7XHJcbmNvcHkoJ25vZGVfbW9kdWxlcy9AYW5ndWxhci8qL2J1bmRsZXMvKi51bWQuanMnLCAnJHtCVU5ETEVTX1RBUkdFVF9QQVRIfScsIHt9LCBfID0+IHt9KTtcclxuY29weSgnbm9kZV9tb2R1bGVzL3J4anMvYnVuZGxlcy8qLmpzJywgJyR7QlVORExFU19UQVJHRVRfUEFUSH0vcnhqcycsIHt9LCBfID0+IHt9KTtcclxuY29weSgnbm9kZV9tb2R1bGVzL3pvbmUuanMvZGlzdC8qLmpzJywgJyR7QlVORExFU19UQVJHRVRfUEFUSH0vem9uZS5qcycsIHt9LCBfID0+IHt9KTtcclxuY29weSgnbm9kZV9tb2R1bGVzL2NvcmUtanMvY2xpZW50LyouanMnLCAnJHtCVU5ETEVTX1RBUkdFVF9QQVRIfS9jb3JlLWpzJywge30sIF8gPT4ge30pO1xyXG5jb3B5KCdub2RlX21vZHVsZXMvQHdlYmNvbXBvbmVudHMvY3VzdG9tLWVsZW1lbnRzLyouanMnLCAnJHtCVU5ETEVTX1RBUkdFVF9QQVRIfS9jdXN0b20tZWxlbWVudHMnLCB7fSwgXyA9PiB7fSk7XHJcbmNvcHkoJ25vZGVfbW9kdWxlcy9Ad2ViY29tcG9uZW50cy9jdXN0b20tZWxlbWVudHMvc3JjL25hdGl2ZS1zaGltKi5qcycsICcke0JVTkRMRVNfVEFSR0VUX1BBVEh9L2N1c3RvbS1lbGVtZW50cy9zcmMnLCB7fSwgXyA9PiB7fSk7XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJTYW1wbGVJbmRleEh0bWwobmFtZTogc3RyaW5nLCBvcHRpb25zOiBXZWJDb2RlR2VuT3B0aW9ucykge1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShuYW1lKTtcclxuICAgIGNvbnN0IHRhZ05hbWUgPSBgJHtvcHRpb25zLnhtbFByZWZpeH0ke25vcm1hbGl6ZWROYW1lfWA7XHJcblxyXG4gICAgcmV0dXJuIGBcclxuPCFkb2N0eXBlIGh0bWw+XHJcbjxodG1sIGxhbmc9XCJlblwiPlxyXG48aGVhZD5cclxuPG1ldGEgY2hhcnNldD1cInV0Zi04XCI+XHJcbjx0aXRsZT5FbGVtZW50c0xvYWRpbmc8L3RpdGxlPlxyXG48YmFzZSBocmVmPVwiLlwiPlxyXG48bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIj5cclxuPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiBocmVmPVwiZmF2aWNvbi5pY29cIj5cclxuPC9oZWFkPlxyXG48Ym9keT5cclxuPCEtLSBDb25zaWRlciBwdXR0aW5nIHRoZSBmb2xsb3dpbmcgVU1EICghKSBidW5kbGVzIC0tPlxyXG48IS0tIGludG8gYSBiaWcgb25lIC0tPlxyXG48IS0tIGNvcmUtanMgZm9yIGxlZ2FjeSBicm93c2VycyAtLT5cclxuPHNjcmlwdCBzcmM9XCIuLyR7QlVORExFU19UQVJHRVRfUEFUSH0vY29yZS1qcy9jb3JlLmpzXCI+PC9zY3JpcHQ+XHJcbjwhLS0gWm9uZS5qcyAtLT5cclxuPCEtLVxyXG4gICAgQ29uc2lkZXIgZXhjbHVkaW5nIHpvbmUuanMgd2hlbiBjcmVhdGluZ1xyXG4gICAgY3VzdG9tIEVsZW1lbnRzIGJ5IHVzaW5nIHRoZSBub29wIHpvbmUuXHJcbi0tPlxyXG48c2NyaXB0IHNyYz1cIi4vJHtCVU5ETEVTX1RBUkdFVF9QQVRIfS96b25lLmpzL3pvbmUuanNcIj48L3NjcmlwdD5cclxuPCEtLVxyXG4gICAgUG9seWZpbGxzIGZvciBCcm93c2VycyBzdXBwb3J0aW5nXHJcbiAgICBDdXN0b20gRWxlbWVudHMuIE5lZWRlZCBiL2Mgd2UgZG93bmxldmVsXHJcbiAgICB0byBFUzUuIFNlZTogQHdlYmNvbXBvbmVudHMvY3VzdG9tLWVsZW1lbnRzXHJcbi0tPlxyXG48c2NyaXB0IHNyYz1cIi4vJHtCVU5ETEVTX1RBUkdFVF9QQVRIfS9jdXN0b20tZWxlbWVudHMvc3JjL25hdGl2ZS1zaGltLmpzXCI+PC9zY3JpcHQ+XHJcbjwhLS0gUG9seWZpbGxzIGZvciBCcm93c2VycyBub3Qgc3VwcG9ydGluZ1xyXG4gICAgICAgIEN1c3RvbSBFbGVtZW50cy4gU2VlOiBAd2ViY29tcG9uZW50cy9jdXN0b20tZWxlbWVudHNcclxuLS0+XHJcbjxzY3JpcHQgc3JjPVwiLi8ke0JVTkRMRVNfVEFSR0VUX1BBVEh9L2N1c3RvbS1lbGVtZW50cy9jdXN0b20tZWxlbWVudHMubWluLmpzXCI+PC9zY3JpcHQ+XHJcbjwhLS0gUnggLS0+XHJcbjxzY3JpcHQgc3JjPVwiLi8ke0JVTkRMRVNfVEFSR0VUX1BBVEh9L3J4anMvcnhqcy51bWQuanNcIj48L3NjcmlwdD5cclxuPCEtLSBBbmd1bGFyIFBhY2thZ2VzIC0tPlxyXG48c2NyaXB0IHNyYz1cIi4vJHtCVU5ETEVTX1RBUkdFVF9QQVRIfS9jb3JlL2J1bmRsZXMvY29yZS51bWQuanNcIj48L3NjcmlwdD5cclxuPHNjcmlwdCBzcmM9XCIuLyR7QlVORExFU19UQVJHRVRfUEFUSH0vY29tbW9uL2J1bmRsZXMvY29tbW9uLnVtZC5qc1wiPjwvc2NyaXB0PlxyXG48c2NyaXB0IHNyYz1cIi4vJHtCVU5ETEVTX1RBUkdFVF9QQVRIfS9wbGF0Zm9ybS1icm93c2VyL2J1bmRsZXMvcGxhdGZvcm0tYnJvd3Nlci51bWQuanNcIj48L3NjcmlwdD5cclxuPHNjcmlwdCBzcmM9XCIuLyR7QlVORExFU19UQVJHRVRfUEFUSH0vZWxlbWVudHMvYnVuZGxlcy9lbGVtZW50cy51bWQuanNcIj48L3NjcmlwdD5cclxuPCEtLSBBbmd1bGFyIEVsZW1lbnQgLS0+XHJcbjxzY3JpcHQgc3JjPVwiLi8ke0RJU1RfRk9MREVSX05BTUV9LyR7RUxFTUVOVF9DUkVBVE9SX0FQUE5BTUV9LyR7RUxFTUVOVF9CVU5ETEVfRklMRU5BTUV9XCI+PC9zY3JpcHQ+XHJcbjwhLS0gQ2FsbGluZyBDdXN0b20gRWxlbWVudCAtLT5cclxuPCR7dGFnTmFtZX0+PC8ke3RhZ05hbWV9PlxyXG48L2JvZHk+XHJcbjwvaHRtbD5cclxuICAgIGA7XHJcbiAgfVxyXG59XHJcbiJdfQ==