import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { FormatService, SymbolService, ImageService, LayerService } from '@xlayers/sketch-lib';
import { WebCodeGenService, WebCodeGenModule } from '@xlayers/web-codegen';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularAggregatorService {
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
/** @nocollapse */ AngularAggregatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularAggregatorService_Factory() { return new AngularAggregatorService(ɵɵinject(FormatService), ɵɵinject(WebCodeGenService)); }, token: AngularAggregatorService, providedIn: "root" });
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
class AngularElementAggregatorService {
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
/** @nocollapse */ AngularElementAggregatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularElementAggregatorService_Factory() { return new AngularElementAggregatorService(ɵɵinject(FormatService), ɵɵinject(WebCodeGenService), ɵɵinject(AngularAggregatorService)); }, token: AngularElementAggregatorService, providedIn: "root" });
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
class AngularElementCodeGenService {
    /**
     * @param {?} symbolService
     * @param {?} imageService
     * @param {?} webCodeGen
     * @param {?} angularElementAggretatorService
     * @param {?} layerService
     */
    constructor(symbolService, imageService, webCodeGen, angularElementAggretatorService, layerService) {
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
    compute(current, data, options) {
        this.webCodeGen.compute(current, data, this.compileOptions(options));
    }
    /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    aggregate(data, options) {
        return data.pages.flatMap((/**
         * @param {?} page
         * @return {?}
         */
        page => this.visit(page, data, this.compileOptions(options))));
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
        return this.visitContent(current, data, options).concat(this.angularElementAggretatorService.aggregate(current, data, options));
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
}
AngularElementCodeGenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AngularElementCodeGenService.ctorParameters = () => [
    { type: SymbolService },
    { type: ImageService },
    { type: WebCodeGenService },
    { type: AngularElementAggregatorService },
    { type: LayerService }
];
/** @nocollapse */ AngularElementCodeGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularElementCodeGenService_Factory() { return new AngularElementCodeGenService(ɵɵinject(SymbolService), ɵɵinject(ImageService), ɵɵinject(WebCodeGenService), ɵɵinject(AngularElementAggregatorService), ɵɵinject(LayerService)); }, token: AngularElementCodeGenService, providedIn: "root" });
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
class AngularCodeGenModule {
}
AngularCodeGenModule.decorators = [
    { type: NgModule, args: [{
                imports: [WebCodeGenModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularElementCodeGenModule {
}
AngularElementCodeGenModule.decorators = [
    { type: NgModule, args: [{
                imports: [WebCodeGenModule, AngularCodeGenModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularDocGenService {
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
/** @nocollapse */ AngularDocGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularDocGenService_Factory() { return new AngularDocGenService(); }, token: AngularDocGenService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularBootstrapService {
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
/** @nocollapse */ AngularBootstrapService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularBootstrapService_Factory() { return new AngularBootstrapService(ɵɵinject(FormatService)); }, token: AngularBootstrapService, providedIn: "root" });
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
class AngularCodeGenService {
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
/** @nocollapse */ AngularCodeGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularCodeGenService_Factory() { return new AngularCodeGenService(ɵɵinject(SymbolService), ɵɵinject(ImageService), ɵɵinject(WebCodeGenService), ɵɵinject(FormatService), ɵɵinject(AngularAggregatorService), ɵɵinject(LayerService)); }, token: AngularCodeGenService, providedIn: "root" });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularBootstrapService, AngularCodeGenModule, AngularCodeGenService, AngularDocGenService, AngularElementCodeGenModule, AngularElementCodeGenService, AngularElementAggregatorService as ɵa, AngularAggregatorService as ɵb };
//# sourceMappingURL=xlayers-angular-codegen.js.map
