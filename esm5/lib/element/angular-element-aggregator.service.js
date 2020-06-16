/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormatService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import { AngularAggregatorService } from '../angular-aggregator.service';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
import * as i3 from "../angular-aggregator.service";
/** @type {?} */
var ELEMENT_MODULE_FILENAME = 'app.module.ts';
/** @type {?} */
var EXTRA_WEBPACK_CONFIG_FILENAME = 'webpack.extra.js';
/** @type {?} */
var COPY_BUNDLES_SCRIPT_FILENAME = 'copy.bundles.js';
/** @type {?} */
var DIST_FOLDER_NAME = 'dist';
/** @type {?} */
var BUNDLES_TARGET_PATH = DIST_FOLDER_NAME + "/bundles";
/** @type {?} */
var SAMPLE_INDEX_FILENAME = 'index.html';
/** @type {?} */
var ELEMENT_BUNDLE_FILENAME = 'main.js';
/** @type {?} */
var ELEMENT_CREATOR_APPNAME = 'element-creator';
var AngularElementAggregatorService = /** @class */ (function () {
    function AngularElementAggregatorService(formatService, webCodeGenService, angularAggregatorService) {
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
    AngularElementAggregatorService.prototype.aggregate = /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        /** @type {?} */
        var fileName = this.formatService.normalizeName(current.name);
        /** @type {?} */
        var componentPathName = options.componentDir + "/" + fileName + ".component";
        return tslib_1.__spread([
            {
                uri: 'README.md',
                value: this.renderReadme(data.meta.app, options),
                language: 'markdown',
                kind: 'text'
            }
        ], this.webCodeGenService.aggregate(current, data, options).map((/**
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
                    return tslib_1.__assign({}, file, { kind: 'angularElement' });
            }
        })), [
            {
                uri: componentPathName + ".ts",
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
        ]);
    };
    /**
     * @private
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    AngularElementAggregatorService.prototype.renderReadme = /**
     * @private
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
        /** @type {?} */
        var codeSpan = (/**
         * @param {?} text
         * @return {?}
         */
        function (text) { return '`' + text + '`'; });
        /** @type {?} */
        var codeBlock = '```';
        return "\n**Notice:**\nThe current implement of [Angular Elements](https://angular.io/guide/elements) is in MVP (minimum viable product) state.\nSome features like content projection are not supported yet.\nKeep in mind that the following build process and feature support will be improved in the future.\nThe creation of the bundled Angular Element is based on the process defined by [Manfred Steyer](https://twitter.com/manfredsteyer)'s example from\n[" + codeSpan('ngx-build-plus') + "](https://github.com/manfredsteyer/ngx-build-plus).\n## How to use the " + codeSpan(name) + " Angular Element\n1. In order to use an Angular Element as a web component, it first needs to be created, e.g. in the following way:\n    a) Use the Angular CLI to create a minimal app which will be used to create the Angular Element:\n    " + codeBlock + "\n    ng new " + ELEMENT_CREATOR_APPNAME + " --minimal --style css --routing false\n    cd " + ELEMENT_CREATOR_APPNAME + "\n    " + codeBlock + "\n    b) Add necessary dependencies for the following steps:\n    " + codeBlock + "\n    ng add @angular/elements\n    ng add ngx-build-plus\n    npm install @webcomponents/custom-elements --save\n    npm install --save-dev copy\n    " + codeBlock + "\n    c) Download and extract the files of this generation. Place the files of the " + codeSpan(className) + "\n    into your standard " + codeSpan('src/app') + " folder. Replace the " + codeSpan(ELEMENT_MODULE_FILENAME) + " and remove the sample " + codeSpan('app.component.ts') + ".\n    Extract the files " + codeSpan(EXTRA_WEBPACK_CONFIG_FILENAME) + " and " + codeSpan(COPY_BUNDLES_SCRIPT_FILENAME) + " into the project root.\n    e) Build the Angular Element:\n    " + codeBlock + "\n    ng build --prod --extraWebpackConfig " + EXTRA_WEBPACK_CONFIG_FILENAME + " --output-hashing none --single-bundle true\n    " + codeBlock + "\n2. After the creation of the Angular Element, it can be found as single file\nweb component " + codeSpan(DIST_FOLDER_NAME +
            '/' +
            ELEMENT_CREATOR_APPNAME +
            '/' +
            ELEMENT_BUNDLE_FILENAME) + " and can be consumed in the following way:\n" + codeBlock + "\n  // index.html\n  <script src=\"./" + DIST_FOLDER_NAME + "/" + ELEMENT_CREATOR_APPNAME + "/" + ELEMENT_BUNDLE_FILENAME + "\"></script>\n  <" + tagName + "></" + tagName + ">\n" + codeBlock + "\nHowever due to the bundle splitting approach, the different dependent bundles must be added manually,\ne.g. like described in the exported sample file " + codeSpan(SAMPLE_INDEX_FILENAME) + ".\nIn order to get those script you can run the script " + codeSpan(COPY_BUNDLES_SCRIPT_FILENAME) + " file.\n" + codeBlock + "\n  node ./" + COPY_BUNDLES_SCRIPT_FILENAME + "\n" + codeBlock + "\n>  For more information about [web components and browser support](https://github.com/WebComponents/webcomponentsjs#browser-support)\n";
    };
    /**
     * @private
     * @param {?} name
     * @param {?} options
     * @param {?} componentPathName
     * @return {?}
     */
    AngularElementAggregatorService.prototype.renderElementModule = /**
     * @private
     * @param {?} name
     * @param {?} options
     * @param {?} componentPathName
     * @return {?}
     */
    function (name, options, componentPathName) {
        /** @type {?} */
        var className = this.formatService.className(name);
        /** @type {?} */
        var componentName = className + "Component";
        /** @type {?} */
        var normalizedName = this.formatService.normalizeName(name);
        /** @type {?} */
        var tagName = "" + options.xmlPrefix + normalizedName;
        return ('' +
            ("\nimport { BrowserModule } from '@angular/platform-browser';\nimport { NgModule, Injector } from '@angular/core';\nimport { createCustomElement } from '@angular/elements';\nimport { " + componentName + " } from './" + componentPathName + "';\n@NgModule({\n  imports: [\n    BrowserModule\n  ],\n  declarations: [\n    " + componentName + "\n  ],\n  entryComponents: [\n    " + componentName + "\n  ],\n})\nexport class AppModule {\n  constructor(injector: Injector) {\n    const element = createCustomElement(" + componentName + " , { injector });\n    customElements.define('" + tagName + "', element);\n  }\n  ngDoBootstrap() { }\n}\n    "));
    };
    /**
     * @private
     * @return {?}
     */
    AngularElementAggregatorService.prototype.renderWebpackExtra = /**
     * @private
     * @return {?}
     */
    function () {
        return "\nmodule.exports = {\n  \"externals\": {\n      \"rxjs\": \"rxjs\",\n      \"@angular/core\": \"ng.core\",\n      \"@angular/common\": \"ng.common\",\n      \"@angular/platform-browser\": \"ng.platformBrowser\",\n      \"@angular/elements\": \"ng.elements\"\n  }\n}\n    ";
    };
    /**
     * @private
     * @return {?}
     */
    AngularElementAggregatorService.prototype.renderCopyUmdBundlesScript = /**
     * @private
     * @return {?}
     */
    function () {
        return "\n//\n// This script copies over UMD bundles to the folder dist/bundles\n// If you call it manually, call it from your projects root\n// > node /" + COPY_BUNDLES_SCRIPT_FILENAME + "\n//\nconst copy = require('copy');\nconsole.log('Copy UMD bundles ...');\ncopy('node_modules/@angular/*/bundles/*.umd.js', '" + BUNDLES_TARGET_PATH + "', {}, _ => {});\ncopy('node_modules/rxjs/bundles/*.js', '" + BUNDLES_TARGET_PATH + "/rxjs', {}, _ => {});\ncopy('node_modules/zone.js/dist/*.js', '" + BUNDLES_TARGET_PATH + "/zone.js', {}, _ => {});\ncopy('node_modules/core-js/client/*.js', '" + BUNDLES_TARGET_PATH + "/core-js', {}, _ => {});\ncopy('node_modules/@webcomponents/custom-elements/*.js', '" + BUNDLES_TARGET_PATH + "/custom-elements', {}, _ => {});\ncopy('node_modules/@webcomponents/custom-elements/src/native-shim*.js', '" + BUNDLES_TARGET_PATH + "/custom-elements/src', {}, _ => {});\n    ";
    };
    /**
     * @private
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    AngularElementAggregatorService.prototype.renderSampleIndexHtml = /**
     * @private
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    function (name, options) {
        /** @type {?} */
        var normalizedName = this.formatService.normalizeName(name);
        /** @type {?} */
        var tagName = "" + options.xmlPrefix + normalizedName;
        return "\n<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>ElementsLoading</title>\n<base href=\".\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\n</head>\n<body>\n<!-- Consider putting the following UMD (!) bundles -->\n<!-- into a big one -->\n<!-- core-js for legacy browsers -->\n<script src=\"./" + BUNDLES_TARGET_PATH + "/core-js/core.js\"></script>\n<!-- Zone.js -->\n<!--\n    Consider excluding zone.js when creating\n    custom Elements by using the noop zone.\n-->\n<script src=\"./" + BUNDLES_TARGET_PATH + "/zone.js/zone.js\"></script>\n<!--\n    Polyfills for Browsers supporting\n    Custom Elements. Needed b/c we downlevel\n    to ES5. See: @webcomponents/custom-elements\n-->\n<script src=\"./" + BUNDLES_TARGET_PATH + "/custom-elements/src/native-shim.js\"></script>\n<!-- Polyfills for Browsers not supporting\n        Custom Elements. See: @webcomponents/custom-elements\n-->\n<script src=\"./" + BUNDLES_TARGET_PATH + "/custom-elements/custom-elements.min.js\"></script>\n<!-- Rx -->\n<script src=\"./" + BUNDLES_TARGET_PATH + "/rxjs/rxjs.umd.js\"></script>\n<!-- Angular Packages -->\n<script src=\"./" + BUNDLES_TARGET_PATH + "/core/bundles/core.umd.js\"></script>\n<script src=\"./" + BUNDLES_TARGET_PATH + "/common/bundles/common.umd.js\"></script>\n<script src=\"./" + BUNDLES_TARGET_PATH + "/platform-browser/bundles/platform-browser.umd.js\"></script>\n<script src=\"./" + BUNDLES_TARGET_PATH + "/elements/bundles/elements.umd.js\"></script>\n<!-- Angular Element -->\n<script src=\"./" + DIST_FOLDER_NAME + "/" + ELEMENT_CREATOR_APPNAME + "/" + ELEMENT_BUNDLE_FILENAME + "\"></script>\n<!-- Calling Custom Element -->\n<" + tagName + "></" + tagName + ">\n</body>\n</html>\n    ";
    };
    AngularElementAggregatorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularElementAggregatorService.ctorParameters = function () { return [
        { type: FormatService },
        { type: WebCodeGenService },
        { type: AngularAggregatorService }
    ]; };
    /** @nocollapse */ AngularElementAggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AngularElementAggregatorService_Factory() { return new AngularElementAggregatorService(i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i2.WebCodeGenService), i0.ɵɵinject(i3.AngularAggregatorService)); }, token: AngularElementAggregatorService, providedIn: "root" });
    return AngularElementAggregatorService;
}());
export { AngularElementAggregatorService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lbGVtZW50LWFnZ3JlZ2F0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL2FuZ3VsYXItY29kZWdlbi8iLCJzb3VyY2VzIjpbImxpYi9lbGVtZW50L2FuZ3VsYXItZWxlbWVudC1hZ2dyZWdhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7O0lBRW5FLHVCQUF1QixHQUFHLGVBQWU7O0lBQ3pDLDZCQUE2QixHQUFHLGtCQUFrQjs7SUFDbEQsNEJBQTRCLEdBQUcsaUJBQWlCOztJQUNoRCxnQkFBZ0IsR0FBRyxNQUFNOztJQUN6QixtQkFBbUIsR0FBTSxnQkFBZ0IsYUFBVTs7SUFDbkQscUJBQXFCLEdBQUcsWUFBWTs7SUFDcEMsdUJBQXVCLEdBQUcsU0FBUzs7SUFDbkMsdUJBQXVCLEdBQUcsaUJBQWlCO0FBSWpEO0lBSUUseUNBQ21CLGFBQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyx3QkFBa0Q7UUFGbEQsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQ2xFLENBQUM7Ozs7Ozs7SUFFSixtREFBUzs7Ozs7O0lBQVQsVUFDRSxPQUFzQixFQUN0QixJQUFrQixFQUNsQixPQUEwQjs7WUFFcEIsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7O1lBQ3pELGlCQUFpQixHQUFNLE9BQU8sQ0FBQyxZQUFZLFNBQUks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SUFBbEM7UUFDRSxPQUFPLHNKQUlFLDRCQUE0QixxSUFJVyxtQkFBbUIsa0VBQzdCLG1CQUFtQix1RUFDbkIsbUJBQW1CLDRFQUNqQixtQkFBbUIsNEZBQ0gsbUJBQW1CLG1IQUNKLG1CQUFtQiwrQ0FDekYsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFTywrREFBcUI7Ozs7OztJQUE3QixVQUE4QixJQUFZLEVBQUUsT0FBMEI7O1lBQzlELGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7O1lBQ3ZELE9BQU8sR0FBRyxLQUFHLE9BQU8sQ0FBQyxTQUFTLEdBQUcsY0FBZ0I7UUFFdkQsT0FBTyxvYUFjTSxtQkFBbUIsOEtBTW5CLG1CQUFtQix1TUFNbkIsbUJBQW1CLHdMQUluQixtQkFBbUIsMEZBRW5CLG1CQUFtQixrRkFFbkIsbUJBQW1CLCtEQUNuQixtQkFBbUIsbUVBQ25CLG1CQUFtQix1RkFDbkIsbUJBQW1CLGlHQUVuQixnQkFBZ0IsU0FBSSx1QkFBdUIsU0FBSSx1QkFBdUIsd0RBRXBGLE9BQU8sV0FBTSxPQUFPLDhCQUdsQixDQUFDO0lBQ0osQ0FBQzs7Z0JBcFJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBakJRLGFBQWE7Z0JBQ2IsaUJBQWlCO2dCQUNqQix3QkFBd0I7OzswQ0FIakM7Q0FxU0MsQUFyUkQsSUFxUkM7U0FsUlksK0JBQStCOzs7Ozs7SUFFeEMsd0RBQTZDOzs7OztJQUM3Qyw0REFBcUQ7Ozs7O0lBQ3JELG1FQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWF0U2VydmljZSB9IGZyb20gJ0B4bGF5ZXJzL3NrZXRjaC1saWInO1xyXG5pbXBvcnQgeyBXZWJDb2RlR2VuU2VydmljZSB9IGZyb20gJ0B4bGF5ZXJzL3dlYi1jb2RlZ2VuJztcclxuaW1wb3J0IHsgQW5ndWxhckFnZ3JlZ2F0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vYW5ndWxhci1hZ2dyZWdhdG9yLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgRUxFTUVOVF9NT0RVTEVfRklMRU5BTUUgPSAnYXBwLm1vZHVsZS50cyc7XHJcbmNvbnN0IEVYVFJBX1dFQlBBQ0tfQ09ORklHX0ZJTEVOQU1FID0gJ3dlYnBhY2suZXh0cmEuanMnO1xyXG5jb25zdCBDT1BZX0JVTkRMRVNfU0NSSVBUX0ZJTEVOQU1FID0gJ2NvcHkuYnVuZGxlcy5qcyc7XHJcbmNvbnN0IERJU1RfRk9MREVSX05BTUUgPSAnZGlzdCc7XHJcbmNvbnN0IEJVTkRMRVNfVEFSR0VUX1BBVEggPSBgJHtESVNUX0ZPTERFUl9OQU1FfS9idW5kbGVzYDtcclxuY29uc3QgU0FNUExFX0lOREVYX0ZJTEVOQU1FID0gJ2luZGV4Lmh0bWwnO1xyXG5jb25zdCBFTEVNRU5UX0JVTkRMRV9GSUxFTkFNRSA9ICdtYWluLmpzJztcclxuY29uc3QgRUxFTUVOVF9DUkVBVE9SX0FQUE5BTUUgPSAnZWxlbWVudC1jcmVhdG9yJztcclxuXHJcbnR5cGUgV2ViQ29kZUdlbk9wdGlvbnMgPSBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRWxlbWVudEFnZ3JlZ2F0b3JTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0U2VydmljZTogRm9ybWF0U2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgd2ViQ29kZUdlblNlcnZpY2U6IFdlYkNvZGVHZW5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhbmd1bGFyQWdncmVnYXRvclNlcnZpY2U6IEFuZ3VsYXJBZ2dyZWdhdG9yU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgYWdncmVnYXRlKFxyXG4gICAgY3VycmVudDogU2tldGNoTVNMYXllcixcclxuICAgIGRhdGE6IFNrZXRjaE1TRGF0YSxcclxuICAgIG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zXHJcbiAgKSB7XHJcbiAgICBjb25zdCBmaWxlTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKGN1cnJlbnQubmFtZSk7XHJcbiAgICBjb25zdCBjb21wb25lbnRQYXRoTmFtZSA9IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS5jb21wb25lbnRgO1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICB1cmk6ICdSRUFETUUubWQnLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlclJlYWRtZShkYXRhLm1ldGEuYXBwLCBvcHRpb25zKSxcclxuICAgICAgICBsYW5ndWFnZTogJ21hcmtkb3duJyxcclxuICAgICAgICBraW5kOiAndGV4dCdcclxuICAgICAgfSxcclxuICAgICAgLi4udGhpcy53ZWJDb2RlR2VuU2VydmljZS5hZ2dyZWdhdGUoY3VycmVudCwgZGF0YSwgb3B0aW9ucykubWFwKGZpbGUgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoZmlsZS5sYW5ndWFnZSkge1xyXG4gICAgICAgICAgY2FzZSAnaHRtbCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uZmlsZSxcclxuICAgICAgICAgICAgICBraW5kOiAnYW5ndWxhcicsXHJcbiAgICAgICAgICAgICAgdXJpOiBgJHtvcHRpb25zLmNvbXBvbmVudERpcn0vJHtmaWxlTmFtZX0uY29tcG9uZW50Lmh0bWxgXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY2FzZSAnY3NzJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAuLi5maWxlLFxyXG4gICAgICAgICAgICAgIGtpbmQ6ICdhbmd1bGFyJyxcclxuICAgICAgICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS5jb21wb25lbnQuY3NzYFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uZmlsZSxcclxuICAgICAgICAgICAgICBraW5kOiAnYW5ndWxhckVsZW1lbnQnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAge1xyXG4gICAgICAgIHVyaTogYCR7Y29tcG9uZW50UGF0aE5hbWV9LnRzYCxcclxuICAgICAgICB2YWx1ZTogdGhpcy5hbmd1bGFyQWdncmVnYXRvclNlcnZpY2UucmVuZGVyQ29tcG9uZW50KFxyXG4gICAgICAgICAgY3VycmVudC5uYW1lLFxyXG4gICAgICAgICAgb3B0aW9uc1xyXG4gICAgICAgICksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICd0eXBlc2NyaXB0JyxcclxuICAgICAgICBraW5kOiAnYW5ndWxhcidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHVyaTogRUxFTUVOVF9NT0RVTEVfRklMRU5BTUUsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyRWxlbWVudE1vZHVsZShcclxuICAgICAgICAgIGN1cnJlbnQubmFtZSxcclxuICAgICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgICBjb21wb25lbnRQYXRoTmFtZVxyXG4gICAgICAgICksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICd0eXBlc2NyaXB0JyxcclxuICAgICAgICBraW5kOiAnYW5ndWxhckVsZW1lbnQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB1cmk6IEVYVFJBX1dFQlBBQ0tfQ09ORklHX0ZJTEVOQU1FLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlcldlYnBhY2tFeHRyYSgpLFxyXG4gICAgICAgIGxhbmd1YWdlOiAnamF2YXNjcmlwdCcsXHJcbiAgICAgICAga2luZDogJ2FuZ3VsYXJFbGVtZW50J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdXJpOiBDT1BZX0JVTkRMRVNfU0NSSVBUX0ZJTEVOQU1FLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlckNvcHlVbWRCdW5kbGVzU2NyaXB0KCksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdqYXZhc2NyaXB0JyxcclxuICAgICAgICBraW5kOiAnYW5ndWxhckVsZW1lbnQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB1cmk6IFNBTVBMRV9JTkRFWF9GSUxFTkFNRSxcclxuICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJTYW1wbGVJbmRleEh0bWwoY3VycmVudC5uYW1lLCBvcHRpb25zKSxcclxuICAgICAgICBsYW5ndWFnZTogJ2h0bWwnLFxyXG4gICAgICAgIGtpbmQ6ICdhbmd1bGFyRWxlbWVudCdcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyUmVhZG1lKG5hbWU6IHN0cmluZywgb3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnMpIHtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5jbGFzc05hbWUobmFtZSk7XHJcbiAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKG5hbWUpO1xyXG4gICAgY29uc3QgdGFnTmFtZSA9IGAke29wdGlvbnMueG1sUHJlZml4fSR7bm9ybWFsaXplZE5hbWV9YDtcclxuICAgIGNvbnN0IGNvZGVTcGFuID0gdGV4dCA9PiAnYCcgKyB0ZXh0ICsgJ2AnO1xyXG4gICAgY29uc3QgY29kZUJsb2NrID0gJ2BgYCc7XHJcbiAgICByZXR1cm4gYFxyXG4qKk5vdGljZToqKlxyXG5UaGUgY3VycmVudCBpbXBsZW1lbnQgb2YgW0FuZ3VsYXIgRWxlbWVudHNdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9lbGVtZW50cykgaXMgaW4gTVZQIChtaW5pbXVtIHZpYWJsZSBwcm9kdWN0KSBzdGF0ZS5cclxuU29tZSBmZWF0dXJlcyBsaWtlIGNvbnRlbnQgcHJvamVjdGlvbiBhcmUgbm90IHN1cHBvcnRlZCB5ZXQuXHJcbktlZXAgaW4gbWluZCB0aGF0IHRoZSBmb2xsb3dpbmcgYnVpbGQgcHJvY2VzcyBhbmQgZmVhdHVyZSBzdXBwb3J0IHdpbGwgYmUgaW1wcm92ZWQgaW4gdGhlIGZ1dHVyZS5cclxuVGhlIGNyZWF0aW9uIG9mIHRoZSBidW5kbGVkIEFuZ3VsYXIgRWxlbWVudCBpcyBiYXNlZCBvbiB0aGUgcHJvY2VzcyBkZWZpbmVkIGJ5IFtNYW5mcmVkIFN0ZXllcl0oaHR0cHM6Ly90d2l0dGVyLmNvbS9tYW5mcmVkc3RleWVyKSdzIGV4YW1wbGUgZnJvbVxyXG5bJHtjb2RlU3BhbihcclxuICAgICAgJ25neC1idWlsZC1wbHVzJ1xyXG4gICAgKX1dKGh0dHBzOi8vZ2l0aHViLmNvbS9tYW5mcmVkc3RleWVyL25neC1idWlsZC1wbHVzKS5cclxuIyMgSG93IHRvIHVzZSB0aGUgJHtjb2RlU3BhbihuYW1lKX0gQW5ndWxhciBFbGVtZW50XHJcbjEuIEluIG9yZGVyIHRvIHVzZSBhbiBBbmd1bGFyIEVsZW1lbnQgYXMgYSB3ZWIgY29tcG9uZW50LCBpdCBmaXJzdCBuZWVkcyB0byBiZSBjcmVhdGVkLCBlLmcuIGluIHRoZSBmb2xsb3dpbmcgd2F5OlxyXG4gICAgYSkgVXNlIHRoZSBBbmd1bGFyIENMSSB0byBjcmVhdGUgYSBtaW5pbWFsIGFwcCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIHRoZSBBbmd1bGFyIEVsZW1lbnQ6XHJcbiAgICAke2NvZGVCbG9ja31cclxuICAgIG5nIG5ldyAke0VMRU1FTlRfQ1JFQVRPUl9BUFBOQU1FfSAtLW1pbmltYWwgLS1zdHlsZSBjc3MgLS1yb3V0aW5nIGZhbHNlXHJcbiAgICBjZCAke0VMRU1FTlRfQ1JFQVRPUl9BUFBOQU1FfVxyXG4gICAgJHtjb2RlQmxvY2t9XHJcbiAgICBiKSBBZGQgbmVjZXNzYXJ5IGRlcGVuZGVuY2llcyBmb3IgdGhlIGZvbGxvd2luZyBzdGVwczpcclxuICAgICR7Y29kZUJsb2NrfVxyXG4gICAgbmcgYWRkIEBhbmd1bGFyL2VsZW1lbnRzXHJcbiAgICBuZyBhZGQgbmd4LWJ1aWxkLXBsdXNcclxuICAgIG5wbSBpbnN0YWxsIEB3ZWJjb21wb25lbnRzL2N1c3RvbS1lbGVtZW50cyAtLXNhdmVcclxuICAgIG5wbSBpbnN0YWxsIC0tc2F2ZS1kZXYgY29weVxyXG4gICAgJHtjb2RlQmxvY2t9XHJcbiAgICBjKSBEb3dubG9hZCBhbmQgZXh0cmFjdCB0aGUgZmlsZXMgb2YgdGhpcyBnZW5lcmF0aW9uLiBQbGFjZSB0aGUgZmlsZXMgb2YgdGhlICR7Y29kZVNwYW4oXHJcbiAgICAgIGNsYXNzTmFtZVxyXG4gICAgKX1cclxuICAgIGludG8geW91ciBzdGFuZGFyZCAke2NvZGVTcGFuKCdzcmMvYXBwJyl9IGZvbGRlci4gUmVwbGFjZSB0aGUgJHtjb2RlU3BhbihcclxuICAgICAgRUxFTUVOVF9NT0RVTEVfRklMRU5BTUVcclxuICAgICl9IGFuZCByZW1vdmUgdGhlIHNhbXBsZSAke2NvZGVTcGFuKCdhcHAuY29tcG9uZW50LnRzJyl9LlxyXG4gICAgRXh0cmFjdCB0aGUgZmlsZXMgJHtjb2RlU3BhbihFWFRSQV9XRUJQQUNLX0NPTkZJR19GSUxFTkFNRSl9IGFuZCAke2NvZGVTcGFuKFxyXG4gICAgICBDT1BZX0JVTkRMRVNfU0NSSVBUX0ZJTEVOQU1FXHJcbiAgICApfSBpbnRvIHRoZSBwcm9qZWN0IHJvb3QuXHJcbiAgICBlKSBCdWlsZCB0aGUgQW5ndWxhciBFbGVtZW50OlxyXG4gICAgJHtjb2RlQmxvY2t9XHJcbiAgICBuZyBidWlsZCAtLXByb2QgLS1leHRyYVdlYnBhY2tDb25maWcgJHtFWFRSQV9XRUJQQUNLX0NPTkZJR19GSUxFTkFNRX0gLS1vdXRwdXQtaGFzaGluZyBub25lIC0tc2luZ2xlLWJ1bmRsZSB0cnVlXHJcbiAgICAke2NvZGVCbG9ja31cclxuMi4gQWZ0ZXIgdGhlIGNyZWF0aW9uIG9mIHRoZSBBbmd1bGFyIEVsZW1lbnQsIGl0IGNhbiBiZSBmb3VuZCBhcyBzaW5nbGUgZmlsZVxyXG53ZWIgY29tcG9uZW50ICR7Y29kZVNwYW4oXHJcbiAgICAgIERJU1RfRk9MREVSX05BTUUgK1xyXG4gICAgICAgICcvJyArXHJcbiAgICAgICAgRUxFTUVOVF9DUkVBVE9SX0FQUE5BTUUgK1xyXG4gICAgICAgICcvJyArXHJcbiAgICAgICAgRUxFTUVOVF9CVU5ETEVfRklMRU5BTUVcclxuICAgICl9IGFuZCBjYW4gYmUgY29uc3VtZWQgaW4gdGhlIGZvbGxvd2luZyB3YXk6XHJcbiR7Y29kZUJsb2NrfVxyXG4gIC8vIGluZGV4Lmh0bWxcclxuICA8c2NyaXB0IHNyYz1cIi4vJHtESVNUX0ZPTERFUl9OQU1FfS8ke0VMRU1FTlRfQ1JFQVRPUl9BUFBOQU1FfS8ke0VMRU1FTlRfQlVORExFX0ZJTEVOQU1FfVwiPjwvc2NyaXB0PlxyXG4gIDwke3RhZ05hbWV9PjwvJHt0YWdOYW1lfT5cclxuJHtjb2RlQmxvY2t9XHJcbkhvd2V2ZXIgZHVlIHRvIHRoZSBidW5kbGUgc3BsaXR0aW5nIGFwcHJvYWNoLCB0aGUgZGlmZmVyZW50IGRlcGVuZGVudCBidW5kbGVzIG11c3QgYmUgYWRkZWQgbWFudWFsbHksXHJcbmUuZy4gbGlrZSBkZXNjcmliZWQgaW4gdGhlIGV4cG9ydGVkIHNhbXBsZSBmaWxlICR7Y29kZVNwYW4oXHJcbiAgICAgIFNBTVBMRV9JTkRFWF9GSUxFTkFNRVxyXG4gICAgKX0uXHJcbkluIG9yZGVyIHRvIGdldCB0aG9zZSBzY3JpcHQgeW91IGNhbiBydW4gdGhlIHNjcmlwdCAke2NvZGVTcGFuKFxyXG4gICAgICBDT1BZX0JVTkRMRVNfU0NSSVBUX0ZJTEVOQU1FXHJcbiAgICApfSBmaWxlLlxyXG4ke2NvZGVCbG9ja31cclxuICBub2RlIC4vJHtDT1BZX0JVTkRMRVNfU0NSSVBUX0ZJTEVOQU1FfVxyXG4ke2NvZGVCbG9ja31cclxuPiAgRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgW3dlYiBjb21wb25lbnRzIGFuZCBicm93c2VyIHN1cHBvcnRdKGh0dHBzOi8vZ2l0aHViLmNvbS9XZWJDb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcyNicm93c2VyLXN1cHBvcnQpXHJcbmA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckVsZW1lbnRNb2R1bGUoXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zOiBXZWJDb2RlR2VuT3B0aW9ucyxcclxuICAgIGNvbXBvbmVudFBhdGhOYW1lOiBzdHJpbmdcclxuICApIHtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5jbGFzc05hbWUobmFtZSk7XHJcbiAgICBjb25zdCBjb21wb25lbnROYW1lID0gYCR7Y2xhc3NOYW1lfUNvbXBvbmVudGA7XHJcbiAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKG5hbWUpO1xyXG4gICAgY29uc3QgdGFnTmFtZSA9IGAke29wdGlvbnMueG1sUHJlZml4fSR7bm9ybWFsaXplZE5hbWV9YDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICcnICtcclxuICAgICAgYFxyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjcmVhdGVDdXN0b21FbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyAke2NvbXBvbmVudE5hbWV9IH0gZnJvbSAnLi8ke2NvbXBvbmVudFBhdGhOYW1lfSc7XHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3Nlck1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAke2NvbXBvbmVudE5hbWV9XHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICR7Y29tcG9uZW50TmFtZX1cclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDdXN0b21FbGVtZW50KCR7Y29tcG9uZW50TmFtZX0gLCB7IGluamVjdG9yIH0pO1xyXG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCcke3RhZ05hbWV9JywgZWxlbWVudCk7XHJcbiAgfVxyXG4gIG5nRG9Cb290c3RyYXAoKSB7IH1cclxufVxyXG4gICAgYFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyV2VicGFja0V4dHJhKCkge1xyXG4gICAgcmV0dXJuIGBcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgXCJleHRlcm5hbHNcIjoge1xyXG4gICAgICBcInJ4anNcIjogXCJyeGpzXCIsXHJcbiAgICAgIFwiQGFuZ3VsYXIvY29yZVwiOiBcIm5nLmNvcmVcIixcclxuICAgICAgXCJAYW5ndWxhci9jb21tb25cIjogXCJuZy5jb21tb25cIixcclxuICAgICAgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI6IFwibmcucGxhdGZvcm1Ccm93c2VyXCIsXHJcbiAgICAgIFwiQGFuZ3VsYXIvZWxlbWVudHNcIjogXCJuZy5lbGVtZW50c1wiXHJcbiAgfVxyXG59XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJDb3B5VW1kQnVuZGxlc1NjcmlwdCgpIHtcclxuICAgIHJldHVybiBgXHJcbi8vXHJcbi8vIFRoaXMgc2NyaXB0IGNvcGllcyBvdmVyIFVNRCBidW5kbGVzIHRvIHRoZSBmb2xkZXIgZGlzdC9idW5kbGVzXHJcbi8vIElmIHlvdSBjYWxsIGl0IG1hbnVhbGx5LCBjYWxsIGl0IGZyb20geW91ciBwcm9qZWN0cyByb290XHJcbi8vID4gbm9kZSAvJHtDT1BZX0JVTkRMRVNfU0NSSVBUX0ZJTEVOQU1FfVxyXG4vL1xyXG5jb25zdCBjb3B5ID0gcmVxdWlyZSgnY29weScpO1xyXG5jb25zb2xlLmxvZygnQ29weSBVTUQgYnVuZGxlcyAuLi4nKTtcclxuY29weSgnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyLyovYnVuZGxlcy8qLnVtZC5qcycsICcke0JVTkRMRVNfVEFSR0VUX1BBVEh9Jywge30sIF8gPT4ge30pO1xyXG5jb3B5KCdub2RlX21vZHVsZXMvcnhqcy9idW5kbGVzLyouanMnLCAnJHtCVU5ETEVTX1RBUkdFVF9QQVRIfS9yeGpzJywge30sIF8gPT4ge30pO1xyXG5jb3B5KCdub2RlX21vZHVsZXMvem9uZS5qcy9kaXN0LyouanMnLCAnJHtCVU5ETEVTX1RBUkdFVF9QQVRIfS96b25lLmpzJywge30sIF8gPT4ge30pO1xyXG5jb3B5KCdub2RlX21vZHVsZXMvY29yZS1qcy9jbGllbnQvKi5qcycsICcke0JVTkRMRVNfVEFSR0VUX1BBVEh9L2NvcmUtanMnLCB7fSwgXyA9PiB7fSk7XHJcbmNvcHkoJ25vZGVfbW9kdWxlcy9Ad2ViY29tcG9uZW50cy9jdXN0b20tZWxlbWVudHMvKi5qcycsICcke0JVTkRMRVNfVEFSR0VUX1BBVEh9L2N1c3RvbS1lbGVtZW50cycsIHt9LCBfID0+IHt9KTtcclxuY29weSgnbm9kZV9tb2R1bGVzL0B3ZWJjb21wb25lbnRzL2N1c3RvbS1lbGVtZW50cy9zcmMvbmF0aXZlLXNoaW0qLmpzJywgJyR7QlVORExFU19UQVJHRVRfUEFUSH0vY3VzdG9tLWVsZW1lbnRzL3NyYycsIHt9LCBfID0+IHt9KTtcclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlclNhbXBsZUluZGV4SHRtbChuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zKSB7XHJcbiAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKG5hbWUpO1xyXG4gICAgY29uc3QgdGFnTmFtZSA9IGAke29wdGlvbnMueG1sUHJlZml4fSR7bm9ybWFsaXplZE5hbWV9YDtcclxuXHJcbiAgICByZXR1cm4gYFxyXG48IWRvY3R5cGUgaHRtbD5cclxuPGh0bWwgbGFuZz1cImVuXCI+XHJcbjxoZWFkPlxyXG48bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cclxuPHRpdGxlPkVsZW1lbnRzTG9hZGluZzwvdGl0bGU+XHJcbjxiYXNlIGhyZWY9XCIuXCI+XHJcbjxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiPlxyXG48bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIGhyZWY9XCJmYXZpY29uLmljb1wiPlxyXG48L2hlYWQ+XHJcbjxib2R5PlxyXG48IS0tIENvbnNpZGVyIHB1dHRpbmcgdGhlIGZvbGxvd2luZyBVTUQgKCEpIGJ1bmRsZXMgLS0+XHJcbjwhLS0gaW50byBhIGJpZyBvbmUgLS0+XHJcbjwhLS0gY29yZS1qcyBmb3IgbGVnYWN5IGJyb3dzZXJzIC0tPlxyXG48c2NyaXB0IHNyYz1cIi4vJHtCVU5ETEVTX1RBUkdFVF9QQVRIfS9jb3JlLWpzL2NvcmUuanNcIj48L3NjcmlwdD5cclxuPCEtLSBab25lLmpzIC0tPlxyXG48IS0tXHJcbiAgICBDb25zaWRlciBleGNsdWRpbmcgem9uZS5qcyB3aGVuIGNyZWF0aW5nXHJcbiAgICBjdXN0b20gRWxlbWVudHMgYnkgdXNpbmcgdGhlIG5vb3Agem9uZS5cclxuLS0+XHJcbjxzY3JpcHQgc3JjPVwiLi8ke0JVTkRMRVNfVEFSR0VUX1BBVEh9L3pvbmUuanMvem9uZS5qc1wiPjwvc2NyaXB0PlxyXG48IS0tXHJcbiAgICBQb2x5ZmlsbHMgZm9yIEJyb3dzZXJzIHN1cHBvcnRpbmdcclxuICAgIEN1c3RvbSBFbGVtZW50cy4gTmVlZGVkIGIvYyB3ZSBkb3dubGV2ZWxcclxuICAgIHRvIEVTNS4gU2VlOiBAd2ViY29tcG9uZW50cy9jdXN0b20tZWxlbWVudHNcclxuLS0+XHJcbjxzY3JpcHQgc3JjPVwiLi8ke0JVTkRMRVNfVEFSR0VUX1BBVEh9L2N1c3RvbS1lbGVtZW50cy9zcmMvbmF0aXZlLXNoaW0uanNcIj48L3NjcmlwdD5cclxuPCEtLSBQb2x5ZmlsbHMgZm9yIEJyb3dzZXJzIG5vdCBzdXBwb3J0aW5nXHJcbiAgICAgICAgQ3VzdG9tIEVsZW1lbnRzLiBTZWU6IEB3ZWJjb21wb25lbnRzL2N1c3RvbS1lbGVtZW50c1xyXG4tLT5cclxuPHNjcmlwdCBzcmM9XCIuLyR7QlVORExFU19UQVJHRVRfUEFUSH0vY3VzdG9tLWVsZW1lbnRzL2N1c3RvbS1lbGVtZW50cy5taW4uanNcIj48L3NjcmlwdD5cclxuPCEtLSBSeCAtLT5cclxuPHNjcmlwdCBzcmM9XCIuLyR7QlVORExFU19UQVJHRVRfUEFUSH0vcnhqcy9yeGpzLnVtZC5qc1wiPjwvc2NyaXB0PlxyXG48IS0tIEFuZ3VsYXIgUGFja2FnZXMgLS0+XHJcbjxzY3JpcHQgc3JjPVwiLi8ke0JVTkRMRVNfVEFSR0VUX1BBVEh9L2NvcmUvYnVuZGxlcy9jb3JlLnVtZC5qc1wiPjwvc2NyaXB0PlxyXG48c2NyaXB0IHNyYz1cIi4vJHtCVU5ETEVTX1RBUkdFVF9QQVRIfS9jb21tb24vYnVuZGxlcy9jb21tb24udW1kLmpzXCI+PC9zY3JpcHQ+XHJcbjxzY3JpcHQgc3JjPVwiLi8ke0JVTkRMRVNfVEFSR0VUX1BBVEh9L3BsYXRmb3JtLWJyb3dzZXIvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLnVtZC5qc1wiPjwvc2NyaXB0PlxyXG48c2NyaXB0IHNyYz1cIi4vJHtCVU5ETEVTX1RBUkdFVF9QQVRIfS9lbGVtZW50cy9idW5kbGVzL2VsZW1lbnRzLnVtZC5qc1wiPjwvc2NyaXB0PlxyXG48IS0tIEFuZ3VsYXIgRWxlbWVudCAtLT5cclxuPHNjcmlwdCBzcmM9XCIuLyR7RElTVF9GT0xERVJfTkFNRX0vJHtFTEVNRU5UX0NSRUFUT1JfQVBQTkFNRX0vJHtFTEVNRU5UX0JVTkRMRV9GSUxFTkFNRX1cIj48L3NjcmlwdD5cclxuPCEtLSBDYWxsaW5nIEN1c3RvbSBFbGVtZW50IC0tPlxyXG48JHt0YWdOYW1lfT48LyR7dGFnTmFtZX0+XHJcbjwvYm9keT5cclxuPC9odG1sPlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuIl19