(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@xlayers/sketch-lib'), require('@xlayers/web-codegen')) :
    typeof define === 'function' && define.amd ? define('@xlayers/angular-codegen', ['exports', '@angular/core', '@xlayers/sketch-lib', '@xlayers/web-codegen'], factory) :
    (global = global || self, factory((global.xlayers = global.xlayers || {}, global.xlayers['angular-codegen'] = {}), global.ng.core, global.sketchLib, global.webCodegen));
}(this, (function (exports, core, sketchLib, webCodegen) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            return __spread(this.webCodeGenService.aggregate(current, data, options).map((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                switch (file.language) {
                    case 'html':
                        return __assign({}, file, { kind: 'angular', uri: options.componentDir + "/" + fileName + ".component.html" });
                    case 'css':
                        return __assign({}, file, { kind: 'angular', uri: options.componentDir + "/" + fileName + ".component.css" });
                    default:
                        return __assign({}, file, { kind: 'angular' });
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AngularAggregatorService.ctorParameters = function () { return [
            { type: sketchLib.FormatService },
            { type: webCodegen.WebCodeGenService }
        ]; };
        /** @nocollapse */ AngularAggregatorService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AngularAggregatorService_Factory() { return new AngularAggregatorService(core.ɵɵinject(sketchLib.FormatService), core.ɵɵinject(webCodegen.WebCodeGenService)); }, token: AngularAggregatorService, providedIn: "root" });
        return AngularAggregatorService;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            return __spread([
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
                        return __assign({}, file, { kind: 'angular', uri: options.componentDir + "/" + fileName + ".component.html" });
                    case 'css':
                        return __assign({}, file, { kind: 'angular', uri: options.componentDir + "/" + fileName + ".component.css" });
                    default:
                        return __assign({}, file, { kind: 'angularElement' });
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AngularElementAggregatorService.ctorParameters = function () { return [
            { type: sketchLib.FormatService },
            { type: webCodegen.WebCodeGenService },
            { type: AngularAggregatorService }
        ]; };
        /** @nocollapse */ AngularElementAggregatorService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AngularElementAggregatorService_Factory() { return new AngularElementAggregatorService(core.ɵɵinject(sketchLib.FormatService), core.ɵɵinject(webCodegen.WebCodeGenService), core.ɵɵinject(AngularAggregatorService)); }, token: AngularElementAggregatorService, providedIn: "root" });
        return AngularElementAggregatorService;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularElementCodeGenService = /** @class */ (function () {
        function AngularElementCodeGenService(symbolService, imageService, webCodeGen, angularElementAggretatorService, layerService) {
            this.symbolService = symbolService;
            this.imageService = imageService;
            this.webCodeGen = webCodeGen;
            this.angularElementAggretatorService = angularElementAggretatorService;
            this.layerService = layerService;
        }
        /**
         * @param {?} current
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        AngularElementCodeGenService.prototype.compute = /**
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
        AngularElementCodeGenService.prototype.aggregate = /**
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        function (data, options) {
            var _this = this;
            return data.pages.flatMap((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                return _this.visit(page, data, _this.compileOptions(options));
            }));
        };
        /**
         * @param {?} current
         * @return {?}
         */
        AngularElementCodeGenService.prototype.identify = /**
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
        AngularElementCodeGenService.prototype.context = /**
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
        AngularElementCodeGenService.prototype.visit = /**
         * @private
         * @param {?} current
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        function (current, data, options) {
            return this.visitContent(current, data, options).concat(this.angularElementAggretatorService.aggregate(current, data, options));
        };
        /**
         * @private
         * @param {?} current
         * @param {?} data
         * @param {?} options
         * @return {?}
         */
        AngularElementCodeGenService.prototype.visitContent = /**
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
        AngularElementCodeGenService.prototype.visitLayer = /**
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
        AngularElementCodeGenService.prototype.visitSymbolMaster = /**
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
        AngularElementCodeGenService.prototype.compileOptions = /**
         * @private
         * @param {?} options
         * @return {?}
         */
        function (options) {
            return __assign({ textTagName: 'span', bitmapTagName: 'img', blockTagName: 'div', xmlPrefix: 'xly-', cssPrefix: 'xly_', componentDir: 'components', assetDir: 'assets' }, options);
        };
        AngularElementCodeGenService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AngularElementCodeGenService.ctorParameters = function () { return [
            { type: sketchLib.SymbolService },
            { type: sketchLib.ImageService },
            { type: webCodegen.WebCodeGenService },
            { type: AngularElementAggregatorService },
            { type: sketchLib.LayerService }
        ]; };
        /** @nocollapse */ AngularElementCodeGenService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AngularElementCodeGenService_Factory() { return new AngularElementCodeGenService(core.ɵɵinject(sketchLib.SymbolService), core.ɵɵinject(sketchLib.ImageService), core.ɵɵinject(webCodegen.WebCodeGenService), core.ɵɵinject(AngularElementAggregatorService), core.ɵɵinject(sketchLib.LayerService)); }, token: AngularElementCodeGenService, providedIn: "root" });
        return AngularElementCodeGenService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AngularElementCodeGenService.prototype.symbolService;
        /**
         * @type {?}
         * @private
         */
        AngularElementCodeGenService.prototype.imageService;
        /**
         * @type {?}
         * @private
         */
        AngularElementCodeGenService.prototype.webCodeGen;
        /**
         * @type {?}
         * @private
         */
        AngularElementCodeGenService.prototype.angularElementAggretatorService;
        /**
         * @type {?}
         * @private
         */
        AngularElementCodeGenService.prototype.layerService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularCodeGenModule = /** @class */ (function () {
        function AngularCodeGenModule() {
        }
        AngularCodeGenModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [webCodegen.WebCodeGenModule]
                    },] }
        ];
        return AngularCodeGenModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularElementCodeGenModule = /** @class */ (function () {
        function AngularElementCodeGenModule() {
        }
        AngularElementCodeGenModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [webCodegen.WebCodeGenModule, AngularCodeGenModule]
                    },] }
        ];
        return AngularElementCodeGenModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularDocGenService = /** @class */ (function () {
        function AngularDocGenService() {
        }
        /**
         * @param {?} data
         * @return {?}
         */
        AngularDocGenService.prototype.aggregate = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return [
                {
                    uri: 'README.md',
                    value: this.renderReadme(data.meta.app),
                    language: 'markdown',
                    kind: 'text'
                }
            ];
        };
        /**
         * @private
         * @param {?} name
         * @return {?}
         */
        AngularDocGenService.prototype.renderReadme = /**
         * @private
         * @param {?} name
         * @return {?}
         */
        function (name) {
            return "## How to use the " + name + " Angular module\n\n1. Download and extract the exported module into your workspace,\n\n2. Option #1: Import eagerly the XlayersModule into your AppModule or other module.\n```\nimport { XlayersModule } from './xlayers/xlayers.module';\n\n@NgModule({\n  imports: [\n    XlayersModule,\n    ...\n  ],\n})\nexport class AppModule {}\n```\n\n2. Option #2: Import lazily the XlayersModule routing configuration into your AppModule or other module.\nMake sure your router is setup properly in order to use this option (see: https://angular.io/guide/lazy-loading-ngmodules).\n\n```\nimport { XlayersRoutingModule } from './xlayers/xlayers-routing.module';\n@NgModule({\n  imports: [\n    XlayersRoutingModule,\n    ...\n  ],\n})\nexport class AppModule {}\n```\n\n3. Enjoy.";
        };
        AngularDocGenService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ AngularDocGenService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AngularDocGenService_Factory() { return new AngularDocGenService(); }, token: AngularDocGenService, providedIn: "root" });
        return AngularDocGenService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AngularBootstrapService.ctorParameters = function () { return [
            { type: sketchLib.FormatService }
        ]; };
        /** @nocollapse */ AngularBootstrapService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AngularBootstrapService_Factory() { return new AngularBootstrapService(core.ɵɵinject(sketchLib.FormatService)); }, token: AngularBootstrapService, providedIn: "root" });
        return AngularBootstrapService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AngularBootstrapService.prototype.formatService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            return __spread([
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
            return __assign({ textTagName: 'span', bitmapTagName: 'img', blockTagName: 'div', xmlPrefix: 'xly-', cssPrefix: 'xly_', componentDir: 'components', assetDir: 'assets' }, options);
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AngularCodeGenService.ctorParameters = function () { return [
            { type: sketchLib.SymbolService },
            { type: sketchLib.ImageService },
            { type: webCodegen.WebCodeGenService },
            { type: sketchLib.FormatService },
            { type: AngularAggregatorService },
            { type: sketchLib.LayerService }
        ]; };
        /** @nocollapse */ AngularCodeGenService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AngularCodeGenService_Factory() { return new AngularCodeGenService(core.ɵɵinject(sketchLib.SymbolService), core.ɵɵinject(sketchLib.ImageService), core.ɵɵinject(webCodegen.WebCodeGenService), core.ɵɵinject(sketchLib.FormatService), core.ɵɵinject(AngularAggregatorService), core.ɵɵinject(sketchLib.LayerService)); }, token: AngularCodeGenService, providedIn: "root" });
        return AngularCodeGenService;
    }());
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

    exports.AngularBootstrapService = AngularBootstrapService;
    exports.AngularCodeGenModule = AngularCodeGenModule;
    exports.AngularCodeGenService = AngularCodeGenService;
    exports.AngularDocGenService = AngularDocGenService;
    exports.AngularElementCodeGenModule = AngularElementCodeGenModule;
    exports.AngularElementCodeGenService = AngularElementCodeGenService;
    exports.ɵa = AngularElementAggregatorService;
    exports.ɵb = AngularAggregatorService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=xlayers-angular-codegen.umd.js.map
