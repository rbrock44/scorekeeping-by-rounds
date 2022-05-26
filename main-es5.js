(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
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
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _page_ranking_page_ranking_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page/ranking-page/ranking-page.component */
    "./src/app/page/ranking-page/ranking-page.component.ts");
    /* harmony import */


    var _page_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./page/settings-page/settings-page.component */
    "./src/app/page/settings-page/settings-page.component.ts");
    /* harmony import */


    var _page_score_entry_page_score_entry_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./page/score-entry-page/score-entry-page.component */
    "./src/app/page/score-entry-page/score-entry-page.component.ts");

    const routes = [{
      path: '',
      component: _page_ranking_page_ranking_page_component__WEBPACK_IMPORTED_MODULE_3__["RankingPageComponent"]
    }, {
      path: 'rankings',
      component: _page_ranking_page_ranking_page_component__WEBPACK_IMPORTED_MODULE_3__["RankingPageComponent"]
    }, {
      path: 'score-entry',
      component: _page_score_entry_page_score_entry_page_component__WEBPACK_IMPORTED_MODULE_5__["ScoreEntryPageComponent"]
    }, {
      path: 'settings',
      component: _page_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_4__["SettingsPageComponent"]
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service/settings.service */
    "./src/app/service/settings.service.ts");

    let AppComponent = class AppComponent {
      constructor(settingsService) {
        this.settingsService = settingsService;
        this.title = 'scorekeeping-by-rounds';
      }

      ngOnDestroy() {
        this.settingsService.ngOnDestroy();
      }

    };

    AppComponent.ctorParameters = () => [{
      type: _service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]
    }];

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: `
    <div>
      <app-header></app-header>
      <div class="main-content">
        <router-outlet></router-outlet>
        <app-alert></app-alert>
      </div>
    </div>
  `,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _page_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./page/settings-page/settings-page.component */
    "./src/app/page/settings-page/settings-page.component.ts");
    /* harmony import */


    var _page_ranking_page_ranking_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./page/ranking-page/ranking-page.component */
    "./src/app/page/ranking-page/ranking-page.component.ts");
    /* harmony import */


    var _page_score_entry_page_score_entry_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./page/score-entry-page/score-entry-page.component */
    "./src/app/page/score-entry-page/score-entry-page.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _component_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./component/header/header.component */
    "./src/app/component/header/header.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _component_yes_no_dropdown_yes_no_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./component/yes-no-dropdown/yes-no-dropdown.component */
    "./src/app/component/yes-no-dropdown/yes-no-dropdown.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _component_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./component/confirmation-popup/confirmation-popup.component */
    "./src/app/component/confirmation-popup/confirmation-popup.component.ts");
    /* harmony import */


    var _component_alert_alert_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./component/alert/alert.module */
    "./src/app/component/alert/alert.module.ts");
    /* harmony import */


    var _service_excel_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./service/excel.service */
    "./src/app/service/excel.service.ts");
    /* harmony import */


    var _service_settings_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./service/settings.service */
    "./src/app/service/settings.service.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _component_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmationPopupComponent"], _component_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _page_ranking_page_ranking_page_component__WEBPACK_IMPORTED_MODULE_6__["RankingPageComponent"], _page_score_entry_page_score_entry_page_component__WEBPACK_IMPORTED_MODULE_7__["ScoreEntryPageComponent"], _page_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_5__["SettingsPageComponent"], _component_yes_no_dropdown_yes_no_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["YesNoDropdownComponent"]],
      entryComponents: [_component_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmationPopupComponent"]],
      imports: [_component_alert_alert_module__WEBPACK_IMPORTED_MODULE_15__["AlertModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"]],
      providers: [_service_excel_service__WEBPACK_IMPORTED_MODULE_16__["ExcelService"], _service_settings_service__WEBPACK_IMPORTED_MODULE_17__["SettingsService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/component/alert/alert.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/component/alert/alert.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentAlertAlertComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "[data-alert-container] {\n  background-color: antiquewhite;\n  max-width: 600px;\n  border-radius: 10px;\n  position: fixed;\n  bottom: 10px;\n  right: 50px;\n}\n\n[data-a] {\n  font-size: xx-large;\n  padding-right: 5px;\n  padding-left: 5px;\n  cursor: default;\n}\n\n[data-span] {\n  font-size: xx-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2FsZXJ0L0M6XFx3b3Jrc3BhY2VcXHNjb3Jla2VlcGluZy1ieS1yb3VuZHMvc3JjXFxhcHBcXGNvbXBvbmVudFxcYWxlcnRcXGFsZXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbZGF0YS1hbGVydC1jb250YWluZXJdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDEwcHg7XHJcbiAgcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbltkYXRhLWFdIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbltkYXRhLXNwYW5dIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG59XHJcbiIsIltkYXRhLWFsZXJ0LWNvbnRhaW5lcl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogNTBweDtcbn1cblxuW2RhdGEtYV0ge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbltkYXRhLXNwYW5dIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/component/alert/alert.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/component/alert/alert.component.ts ***!
    \****************************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcAppComponentAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _model_alert_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../model/alert.model */
    "./src/app/model/alert.model.ts");
    /* harmony import */


    var _service_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/alert.service */
    "./src/app/service/alert.service.ts");

    let AlertComponent = class AlertComponent {
      constructor(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
      }

      ngOnInit() {
        // subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id).subscribe(alert => {
          // clear alerts when an empty alert is received
          if (!alert.message) {
            // filter out alerts without 'keepAfterRouteChange' flag
            this.alerts = this.alerts.filter(x => x.keepAfterRouteChange); // remove 'keepAfterRouteChange' flag on the rest

            this.alerts.forEach(x => delete x.keepAfterRouteChange);
            return;
          } // add alert to array


          this.alerts.push(alert); // auto close alert if required

          if (alert.autoClose) {
            setTimeout(() => this.removeAlert(alert), 3000);
          }
        }); // clear alerts on location change

        this.routeSubscription = this.router.events.subscribe(event => {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            this.alertService.clear(this.id);
          }
        });
      }

      ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
      }

      removeAlert(alert) {
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert)) {
          return;
        }

        if (this.fade) {
          // fade out alert
          this.alerts.find(x => x === alert).fade = true; // remove alert after faded out

          setTimeout(() => {
            this.alerts = this.alerts.filter(x => x !== alert);
          }, 250);
        } else {
          // remove alert
          this.alerts = this.alerts.filter(x => x !== alert);
        }
      }

      cssClass(alert) {
        if (!alert) {
          return;
        }

        const classes = ['alert', 'alert-dismissable'];
        const alertTypeClass = {
          [_model_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success]: 'alert alert-success',
          [_model_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error]: 'alert alert-danger',
          [_model_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info]: 'alert alert-info',
          [_model_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning]: 'alert alert-warning'
        };
        classes.push(alertTypeClass[alert.type]);

        if (alert.fade) {
          classes.push('fade');
        }

        return classes.join(' ');
      }

    };

    AlertComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _service_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AlertComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AlertComponent.prototype, "fade", void 0);
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alert',
      template: `
    <div *ngFor="let alert of alerts" class="{{cssClass(alert)}}" data-alert-container>
      <a class="close" (click)="removeAlert(alert)" data-a>&times;</a>
      <span [innerHTML]="alert.message" data-span></span>
    </div>
  `,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./alert.component.scss */
      "./src/app/component/alert/alert.component.scss")).default]
    })], AlertComponent);
    /***/
  },

  /***/
  "./src/app/component/alert/alert.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/component/alert/alert.module.ts ***!
    \*************************************************/

  /*! exports provided: AlertModule */

  /***/
  function srcAppComponentAlertAlertModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertModule", function () {
      return AlertModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alert.component */
    "./src/app/component/alert/alert.component.ts");

    let AlertModule = class AlertModule {};
    AlertModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
      exports: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]]
    })], AlertModule);
    /***/
  },

  /***/
  "./src/app/component/confirmation-popup/confirmation-popup.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/component/confirmation-popup/confirmation-popup.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentConfirmationPopupConfirmationPopupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n:root {\n  --blue-color: #236367;\n  --blue-color-rgb: 35,99,103;\n  --blue-color-40: #3dacb3;\n  --blue-color-40-rgb: 61,172,179;\n  --blue-color-80: #82d0d4;\n  --blue-color-80-rgb: 130,208,212;\n  --white-color: #fff;\n  --white-color-rgb: 255,255,255;\n  --white-color-40: white;\n  --white-color-40-rgb: 255,255,255;\n  --white-color-80: white;\n  --white-color-80-rgb: 255,255,255;\n  --black-color: #42413d;\n  --black-color-rgb: 66,65,61;\n  --black-color-40: #77756e;\n  --black-color-40-rgb: 119,117,110;\n  --black-color-80: #a9a8a2;\n  --black-color-80-rgb: 169,168,162;\n  --gray-color: #A9A9A9;\n  --gray-color-rgb: 169,169,169;\n  --gray-color-40: gainsboro;\n  --gray-color-40-rgb: 220,220,220;\n  --gray-color-80: white;\n  --gray-color-80-rgb: 255,255,255;\n  --gray-dark-color: #808080;\n  --gray-dark-color-rgb: 128,128,128;\n  --gray-dark-color-40: #b3b3b3;\n  --gray-dark-color-40-rgb: 179,179,179;\n  --gray-dark-color-80: #e6e6e6;\n  --gray-dark-color-80-rgb: 230,230,230;\n  --green-color: #20ae44;\n  --green-color-rgb: 32,174,68;\n  --green-color-40: #54e078;\n  --green-color-40-rgb: 84,224,120;\n  --green-color-80: #abefbc;\n  --green-color-80-rgb: 171,239,188;\n  --pink-color: #ff4124;\n  --pink-color-rgb: 255,65,36;\n  --pink-color-40: #ff998a;\n  --pink-color-40-rgb: 255,153,138;\n  --pink-color-80: #fff2f0;\n  --pink-color-80-rgb: 255,242,240;\n  --red-color: #FF0000;\n  --red-color-rgb: 255,0,0;\n  --red-color-40: #ff6666;\n  --red-color-40-rgb: 255,102,102;\n  --red-color-80: #ffcccc;\n  --red-color-80-rgb: 255,204,204;\n  --purple-color: #4A235A;\n  --purple-color-rgb: 74,35,90;\n  --purple-color-40: #8640a3;\n  --purple-color-40-rgb: 134,64,163;\n  --purple-color-80: #b57dcc;\n  --purple-color-80-rgb: 181,125,204;\n  --orange-color: #FF6600;\n  --orange-color-rgb: 255,102,0;\n  --orange-color-40: #ffa366;\n  --orange-color-40-rgb: 255,163,102;\n  --orange-color-80: #ffe0cc;\n  --orange-color-80-rgb: 255,224,204;\n  --yellow-color: #fae361;\n  --yellow-color-rgb: 250,227,97;\n  --yellow-color-40: #fdf5c4;\n  --yellow-color-40-rgb: 253,245,196;\n  --yellow-color-80: white;\n  --yellow-color-80-rgb: 255,255,255;\n  --buttonColor: var(--blue-color-40);\n  --backgroundColor: var(--blue-color-80);\n}\n.confirm-label {\n  padding: 5px;\n  font-size: x-large;\n  font-weight: 400;\n}\n[data-popup-ctn] {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.button-div {\n  text-align: center;\n  font-size: large;\n}\n[data-confirm-button], [data-cancel-button] {\n  height: 30px;\n  margin: 10px;\n  width: 100px;\n  font-size: large;\n  font-weight: 400;\n  background: var(--buttonColor);\n  border-style: groove;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NvbmZpcm1hdGlvbi1wb3B1cC9DOlxcd29ya3NwYWNlXFxzY29yZWtlZXBpbmctYnktcm91bmRzL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9jb25maXJtYXRpb24tcG9wdXAvY29uZmlybWF0aW9uLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvY29uZmlybWF0aW9uLXBvcHVwL0M6XFx3b3Jrc3BhY2VcXHNjb3Jla2VlcGluZy1ieS1yb3VuZHMvc3JjXFxhcHBcXGNvbXBvbmVudFxcY29uZmlybWF0aW9uLXBvcHVwXFxjb25maXJtYXRpb24tcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFFQTtFQUNFLFlBQUE7QUNBRjtBREdBO0VBQ0UsU0FBQTtFQUNBLGlEQUFBO0FDQUY7QUR1REE7RUFYRSxxQkFBQTtFQUNBLDJCQUFBO0VBR0Usd0JBQUE7RUFDQSwrQkFBQTtFQURBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFMRixtQkFBQTtFQUNBLDhCQUFBO0VBR0UsdUJBQUE7RUFDQSxpQ0FBQTtFQURBLHVCQUFBO0VBQ0EsaUNBQUE7RUFMRixzQkFBQTtFQUNBLDJCQUFBO0VBR0UseUJBQUE7RUFDQSxpQ0FBQTtFQURBLHlCQUFBO0VBQ0EsaUNBQUE7RUFMRixxQkFBQTtFQUNBLDZCQUFBO0VBR0UsMEJBQUE7RUFDQSxnQ0FBQTtFQURBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFMRiwwQkFBQTtFQUNBLGtDQUFBO0VBR0UsNkJBQUE7RUFDQSxxQ0FBQTtFQURBLDZCQUFBO0VBQ0EscUNBQUE7RUFMRixzQkFBQTtFQUNBLDRCQUFBO0VBR0UseUJBQUE7RUFDQSxnQ0FBQTtFQURBLHlCQUFBO0VBQ0EsaUNBQUE7RUFMRixxQkFBQTtFQUNBLDJCQUFBO0VBR0Usd0JBQUE7RUFDQSxnQ0FBQTtFQURBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFMRixvQkFBQTtFQUNBLHdCQUFBO0VBR0UsdUJBQUE7RUFDQSwrQkFBQTtFQURBLHVCQUFBO0VBQ0EsK0JBQUE7RUFMRix1QkFBQTtFQUNBLDRCQUFBO0VBR0UsMEJBQUE7RUFDQSxpQ0FBQTtFQURBLDBCQUFBO0VBQ0Esa0NBQUE7RUFMRix1QkFBQTtFQUNBLDZCQUFBO0VBR0UsMEJBQUE7RUFDQSxrQ0FBQTtFQURBLDBCQUFBO0VBQ0Esa0NBQUE7RUFMRix1QkFBQTtFQUNBLDhCQUFBO0VBR0UsMEJBQUE7RUFDQSxrQ0FBQTtFQURBLHdCQUFBO0VBQ0Esa0NBQUE7RUFXRixtQ0FBQTtFQUNBLHVDQUFBO0FDVUY7QUM3RUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRGdGRjtBQzdFQTtFQUNFLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QURnRkY7QUM3RUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FEZ0ZGO0FDN0VBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFRk9BLDhCQUFBO0VBQ0Esb0JBQUE7QUMwRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvY29uZmlybWF0aW9uLXBvcHVwL2NvbmZpcm1hdGlvbi1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuQG1peGluIG1vYmlsZURpc3BsYXkoKSB7XHJcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtaXhpbiBib3goJGhlaWdodDogNjBweCwgJHdpZHRoOiA2MHB4KSB7XHJcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gIHdpZHRoOiAkd2lkdGg7XHJcbn1cclxuXHJcbkBtaXhpbiBsYXJnZUZvbnQge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuQG1peGluIGNlbnRlckZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIGJ1dHRvblN0eWxpbmcge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbkNvbG9yKTtcclxuICBib3JkZXItc3R5bGU6IGdyb292ZTtcclxufVxyXG5cclxuJHRhcmdldC1jb2xvcnM6IChcclxuICBibHVlLWNvbG9yOiAjMjM2MzY3LFxyXG4gIHdoaXRlLWNvbG9yOiAjZmZmLFxyXG4gIGJsYWNrLWNvbG9yOiAjNDI0MTNkLFxyXG4gIGdyYXktY29sb3I6ICNBOUE5QTksXHJcbiAgZ3JheS1kYXJrLWNvbG9yOiAjODA4MDgwLFxyXG4gIGdyZWVuLWNvbG9yOiAjMjBhZTQ0LFxyXG4gIHBpbmstY29sb3I6ICNmZjQxMjQsXHJcbiAgcmVkLWNvbG9yOiAjRkYwMDAwLFxyXG4gIHB1cnBsZS1jb2xvcjogIzRBMjM1QSxcclxuICBvcmFuZ2UtY29sb3I6ICNGRjY2MDAsXHJcbiAgeWVsbG93LWNvbG9yOiAjZmFlMzYxLFxyXG4pO1xyXG5cclxuJHRvbmVzOiA0MCwgODA7XHJcblxyXG5AbWl4aW4gZ2VuZXJhdGUtY29sb3ItdmFyKCRrZXksICR2YWx1ZSkge1xyXG4gIC0tI3ska2V5fTogI3skdmFsdWV9O1xyXG4gIC0tI3ska2V5fS1yZ2I6ICN7cmVkKCR2YWx1ZSl9LCN7Z3JlZW4oJHZhbHVlKX0sI3tibHVlKCR2YWx1ZSl9O1xyXG4gIEBlYWNoICR0b25lIGluICR0b25lcyB7XHJcbiAgICAkc2NhbGUtdmFsdWU6IGFkanVzdC1jb2xvcigkdmFsdWUsICRsaWdodG5lc3M6ICR0b25lIC8gMiAqIDElKTtcclxuICAgIC0tI3ska2V5fS0jeyR0b25lfTogI3skc2NhbGUtdmFsdWV9O1xyXG4gICAgLS0jeyRrZXl9LSN7JHRvbmV9LXJnYjogI3tyZWQoJHNjYWxlLXZhbHVlKX0sI3tncmVlbigkc2NhbGUtdmFsdWUpfSwje2JsdWUoJHNjYWxlLXZhbHVlKX07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDb2xvciBQYWxldHRlOiBUcmlhZGljIFNjaGVtZVxyXG5cclxuOnJvb3Qge1xyXG4gIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkdGFyZ2V0LWNvbG9ycyB7XHJcbiAgICBAaW5jbHVkZSBnZW5lcmF0ZS1jb2xvci12YXIoJGtleSwgJHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC0tYnV0dG9uQ29sb3I6IHZhcigtLWJsdWUtY29sb3ItNDApO1xyXG4gIC0tYmFja2dyb3VuZENvbG9yOiB2YXIoLS1ibHVlLWNvbG9yLTgwKTtcclxufVxyXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbjpyb290IHtcbiAgLS1ibHVlLWNvbG9yOiAjMjM2MzY3O1xuICAtLWJsdWUtY29sb3ItcmdiOiAzNSw5OSwxMDM7XG4gIC0tYmx1ZS1jb2xvci00MDogIzNkYWNiMztcbiAgLS1ibHVlLWNvbG9yLTQwLXJnYjogNjEsMTcyLDE3OTtcbiAgLS1ibHVlLWNvbG9yLTgwOiAjODJkMGQ0O1xuICAtLWJsdWUtY29sb3ItODAtcmdiOiAxMzAsMjA4LDIxMjtcbiAgLS13aGl0ZS1jb2xvcjogI2ZmZjtcbiAgLS13aGl0ZS1jb2xvci1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLXdoaXRlLWNvbG9yLTQwOiB3aGl0ZTtcbiAgLS13aGl0ZS1jb2xvci00MC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLXdoaXRlLWNvbG9yLTgwOiB3aGl0ZTtcbiAgLS13aGl0ZS1jb2xvci04MC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWJsYWNrLWNvbG9yOiAjNDI0MTNkO1xuICAtLWJsYWNrLWNvbG9yLXJnYjogNjYsNjUsNjE7XG4gIC0tYmxhY2stY29sb3ItNDA6ICM3Nzc1NmU7XG4gIC0tYmxhY2stY29sb3ItNDAtcmdiOiAxMTksMTE3LDExMDtcbiAgLS1ibGFjay1jb2xvci04MDogI2E5YThhMjtcbiAgLS1ibGFjay1jb2xvci04MC1yZ2I6IDE2OSwxNjgsMTYyO1xuICAtLWdyYXktY29sb3I6ICNBOUE5QTk7XG4gIC0tZ3JheS1jb2xvci1yZ2I6IDE2OSwxNjksMTY5O1xuICAtLWdyYXktY29sb3ItNDA6IGdhaW5zYm9ybztcbiAgLS1ncmF5LWNvbG9yLTQwLXJnYjogMjIwLDIyMCwyMjA7XG4gIC0tZ3JheS1jb2xvci04MDogd2hpdGU7XG4gIC0tZ3JheS1jb2xvci04MC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWdyYXktZGFyay1jb2xvcjogIzgwODA4MDtcbiAgLS1ncmF5LWRhcmstY29sb3ItcmdiOiAxMjgsMTI4LDEyODtcbiAgLS1ncmF5LWRhcmstY29sb3ItNDA6ICNiM2IzYjM7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLTQwLXJnYjogMTc5LDE3OSwxNzk7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLTgwOiAjZTZlNmU2O1xuICAtLWdyYXktZGFyay1jb2xvci04MC1yZ2I6IDIzMCwyMzAsMjMwO1xuICAtLWdyZWVuLWNvbG9yOiAjMjBhZTQ0O1xuICAtLWdyZWVuLWNvbG9yLXJnYjogMzIsMTc0LDY4O1xuICAtLWdyZWVuLWNvbG9yLTQwOiAjNTRlMDc4O1xuICAtLWdyZWVuLWNvbG9yLTQwLXJnYjogODQsMjI0LDEyMDtcbiAgLS1ncmVlbi1jb2xvci04MDogI2FiZWZiYztcbiAgLS1ncmVlbi1jb2xvci04MC1yZ2I6IDE3MSwyMzksMTg4O1xuICAtLXBpbmstY29sb3I6ICNmZjQxMjQ7XG4gIC0tcGluay1jb2xvci1yZ2I6IDI1NSw2NSwzNjtcbiAgLS1waW5rLWNvbG9yLTQwOiAjZmY5OThhO1xuICAtLXBpbmstY29sb3ItNDAtcmdiOiAyNTUsMTUzLDEzODtcbiAgLS1waW5rLWNvbG9yLTgwOiAjZmZmMmYwO1xuICAtLXBpbmstY29sb3ItODAtcmdiOiAyNTUsMjQyLDI0MDtcbiAgLS1yZWQtY29sb3I6ICNGRjAwMDA7XG4gIC0tcmVkLWNvbG9yLXJnYjogMjU1LDAsMDtcbiAgLS1yZWQtY29sb3ItNDA6ICNmZjY2NjY7XG4gIC0tcmVkLWNvbG9yLTQwLXJnYjogMjU1LDEwMiwxMDI7XG4gIC0tcmVkLWNvbG9yLTgwOiAjZmZjY2NjO1xuICAtLXJlZC1jb2xvci04MC1yZ2I6IDI1NSwyMDQsMjA0O1xuICAtLXB1cnBsZS1jb2xvcjogIzRBMjM1QTtcbiAgLS1wdXJwbGUtY29sb3ItcmdiOiA3NCwzNSw5MDtcbiAgLS1wdXJwbGUtY29sb3ItNDA6ICM4NjQwYTM7XG4gIC0tcHVycGxlLWNvbG9yLTQwLXJnYjogMTM0LDY0LDE2MztcbiAgLS1wdXJwbGUtY29sb3ItODA6ICNiNTdkY2M7XG4gIC0tcHVycGxlLWNvbG9yLTgwLXJnYjogMTgxLDEyNSwyMDQ7XG4gIC0tb3JhbmdlLWNvbG9yOiAjRkY2NjAwO1xuICAtLW9yYW5nZS1jb2xvci1yZ2I6IDI1NSwxMDIsMDtcbiAgLS1vcmFuZ2UtY29sb3ItNDA6ICNmZmEzNjY7XG4gIC0tb3JhbmdlLWNvbG9yLTQwLXJnYjogMjU1LDE2MywxMDI7XG4gIC0tb3JhbmdlLWNvbG9yLTgwOiAjZmZlMGNjO1xuICAtLW9yYW5nZS1jb2xvci04MC1yZ2I6IDI1NSwyMjQsMjA0O1xuICAtLXllbGxvdy1jb2xvcjogI2ZhZTM2MTtcbiAgLS15ZWxsb3ctY29sb3ItcmdiOiAyNTAsMjI3LDk3O1xuICAtLXllbGxvdy1jb2xvci00MDogI2ZkZjVjNDtcbiAgLS15ZWxsb3ctY29sb3ItNDAtcmdiOiAyNTMsMjQ1LDE5NjtcbiAgLS15ZWxsb3ctY29sb3ItODA6IHdoaXRlO1xuICAtLXllbGxvdy1jb2xvci04MC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWJ1dHRvbkNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yLTQwKTtcbiAgLS1iYWNrZ3JvdW5kQ29sb3I6IHZhcigtLWJsdWUtY29sb3ItODApO1xufVxuXG4uY29uZmlybS1sYWJlbCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5bZGF0YS1wb3B1cC1jdG5dIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJ1dHRvbi1kaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbltkYXRhLWNvbmZpcm0tYnV0dG9uXSwgW2RhdGEtY2FuY2VsLWJ1dHRvbl0ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b25Db2xvcik7XG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy5zY3NzJztcclxuXHJcbi5jb25maXJtLWxhYmVsIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbltkYXRhLXBvcHVwLWN0bl0ge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYnV0dG9uLWRpdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbltkYXRhLWNvbmZpcm0tYnV0dG9uXSwgW2RhdGEtY2FuY2VsLWJ1dHRvbl0ge1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBAaW5jbHVkZSBidXR0b25TdHlsaW5nKCk7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/component/confirmation-popup/confirmation-popup.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/component/confirmation-popup/confirmation-popup.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ConfirmationPopupComponent */

  /***/
  function srcAppComponentConfirmationPopupConfirmationPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationPopupComponent", function () {
      return ConfirmationPopupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    let ConfirmationPopupComponent = class ConfirmationPopupComponent {
      constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.PERFORM_THIS_ACTION = 'Are you sure you want to perform this action?';
        this.dialogRef.disableClose = true;
      }

      ngOnInit() {
        if (this.data) {
          this.label = this.data.label;
        }
      }

      closeDialog(shouldPerformAction) {
        this.dialogRef.close(shouldPerformAction);
      }

    };

    ConfirmationPopupComponent.ctorParameters = () => [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }];

    ConfirmationPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confirmation-popup',
      template: `
    <div data-border-div>
      <div data-popup-ctn>
        <div data-question-label class="confirm-label">{{label}}</div>
        <div data-perform-action class="confirm-label">{{PERFORM_THIS_ACTION}}</div>
        <div class="button-div">
          <button data-confirm-button mat-stroked-button
                  type="button"
                  (click)="closeDialog(true)">
            Confirm
          </button>
          <button type="button" data-cancel-button mat-stroked-button (click)="closeDialog(false)">
            Cancel
          </button>
        </div>
      </div>
    </div>
  `,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirmation-popup.component.scss */
      "./src/app/component/confirmation-popup/confirmation-popup.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ConfirmationPopupComponent);
    /***/
  },

  /***/
  "./src/app/component/header/header.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/component/header/header.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav {\n  float: left;\n  width: 100%;\n}\n\n.nav-bar-bar {\n  height: 50px;\n}\n\n.nav-bar-link {\n  margin: 15px;\n  border: black;\n  font-size: large;\n}\n\n.nav-bar-div {\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9DOlxcd29ya3NwYWNlXFxzY29yZWtlZXBpbmctYnktcm91bmRzL3NyY1xcYXBwXFxjb21wb25lbnRcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5hdi1iYXItYmFyIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5uYXYtYmFyLWxpbmsge1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBib3JkZXI6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5uYXYtYmFyLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4iLCJuYXYge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtYmFyLWJhciB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLm5hdi1iYXItbGluayB7XG4gIG1hcmdpbjogMTVweDtcbiAgYm9yZGVyOiBibGFjaztcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLm5hdi1iYXItZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/component/header/header.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/component/header/header.component.ts ***!
    \******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let HeaderComponent = class HeaderComponent {
      constructor() {}

      ngOnInit() {}

    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: `
    <div>
      <div class="nav-bar-bar">
        <nav mat-tab-nav-bar>
          <div class="nav-bar-div">
            <a mat-tab-link
               mat-theme="accent"
               [routerLink]="['/rankings']"
               class="nav-bar-link"
               data-ranking-nav>Rankings</a>
            <a mat-tab-link
               mat-theme="accent"
               [routerLink]="['/score-entry']"
               class="nav-bar-link"
               data-score-entry-nav>Score Entry</a>
            <a mat-tab-link
               mat-theme="accent"
               [routerLink]="['/settings']"
               class="nav-bar-link"
               data-settings-nav>Settings</a>
          </div>
        </nav>
      </div>
    </div>
  `,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/component/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/component/yes-no-dropdown/yes-no-dropdown.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/component/yes-no-dropdown/yes-no-dropdown.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentYesNoDropdownYesNoDropdownComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n:root {\n  --blue-color: #236367;\n  --blue-color-rgb: 35,99,103;\n  --blue-color-40: #3dacb3;\n  --blue-color-40-rgb: 61,172,179;\n  --blue-color-80: #82d0d4;\n  --blue-color-80-rgb: 130,208,212;\n  --white-color: #fff;\n  --white-color-rgb: 255,255,255;\n  --white-color-40: white;\n  --white-color-40-rgb: 255,255,255;\n  --white-color-80: white;\n  --white-color-80-rgb: 255,255,255;\n  --black-color: #42413d;\n  --black-color-rgb: 66,65,61;\n  --black-color-40: #77756e;\n  --black-color-40-rgb: 119,117,110;\n  --black-color-80: #a9a8a2;\n  --black-color-80-rgb: 169,168,162;\n  --gray-color: #A9A9A9;\n  --gray-color-rgb: 169,169,169;\n  --gray-color-40: gainsboro;\n  --gray-color-40-rgb: 220,220,220;\n  --gray-color-80: white;\n  --gray-color-80-rgb: 255,255,255;\n  --gray-dark-color: #808080;\n  --gray-dark-color-rgb: 128,128,128;\n  --gray-dark-color-40: #b3b3b3;\n  --gray-dark-color-40-rgb: 179,179,179;\n  --gray-dark-color-80: #e6e6e6;\n  --gray-dark-color-80-rgb: 230,230,230;\n  --green-color: #20ae44;\n  --green-color-rgb: 32,174,68;\n  --green-color-40: #54e078;\n  --green-color-40-rgb: 84,224,120;\n  --green-color-80: #abefbc;\n  --green-color-80-rgb: 171,239,188;\n  --pink-color: #ff4124;\n  --pink-color-rgb: 255,65,36;\n  --pink-color-40: #ff998a;\n  --pink-color-40-rgb: 255,153,138;\n  --pink-color-80: #fff2f0;\n  --pink-color-80-rgb: 255,242,240;\n  --red-color: #FF0000;\n  --red-color-rgb: 255,0,0;\n  --red-color-40: #ff6666;\n  --red-color-40-rgb: 255,102,102;\n  --red-color-80: #ffcccc;\n  --red-color-80-rgb: 255,204,204;\n  --purple-color: #4A235A;\n  --purple-color-rgb: 74,35,90;\n  --purple-color-40: #8640a3;\n  --purple-color-40-rgb: 134,64,163;\n  --purple-color-80: #b57dcc;\n  --purple-color-80-rgb: 181,125,204;\n  --orange-color: #FF6600;\n  --orange-color-rgb: 255,102,0;\n  --orange-color-40: #ffa366;\n  --orange-color-40-rgb: 255,163,102;\n  --orange-color-80: #ffe0cc;\n  --orange-color-80-rgb: 255,224,204;\n  --yellow-color: #fae361;\n  --yellow-color-rgb: 250,227,97;\n  --yellow-color-40: #fdf5c4;\n  --yellow-color-40-rgb: 253,245,196;\n  --yellow-color-80: white;\n  --yellow-color-80-rgb: 255,255,255;\n  --buttonColor: var(--blue-color-40);\n  --backgroundColor: var(--blue-color-80);\n}\n@media only screen and (max-width: 768px) {\n  /* For mobile phones: */\n  [class*=dropdown-ctn] {\n    display: inline !important;\n  }\n}\n.dropdown-ctn {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.dropdown {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.dropdown__label {\n  font-weight: 500;\n  min-width: 260px;\n}\n.dropdown-form-field {\n  min-width: 100px;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n::ng-deep .mat-option {\n  white-space: pre-wrap !important;\n  text-indent: 0;\n}\n::ng-deep .mat-option-text {\n  line-height: 1.5em !important;\n  padding: 8px;\n  box-sizing: content-box;\n}\n::ng-deep .mat-select {\n  overflow: visible;\n}\n::ng-deep .mat-select-value-text {\n  word-wrap: break-word !important;\n  white-space: pre-wrap !important;\n  box-sizing: content-box;\n  padding: 5px;\n}\n::ng-deep .mat-form-field .mat-select {\n  height: 24px;\n  overflow: visible;\n}\n::ng-deep .mat-form-field .mat-select .mat-select-value-text {\n  overflow: visible;\n  display: -webkit-box;\n  display: flex;\n}\n::ng-deep .mat-form-field .mat-select-value {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3llcy1uby1kcm9wZG93bi9DOlxcd29ya3NwYWNlXFxzY29yZWtlZXBpbmctYnktcm91bmRzL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC95ZXMtbm8tZHJvcGRvd24veWVzLW5vLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQveWVzLW5vLWRyb3Bkb3duL0M6XFx3b3Jrc3BhY2VcXHNjb3Jla2VlcGluZy1ieS1yb3VuZHMvc3JjXFxhcHBcXGNvbXBvbmVudFxceWVzLW5vLWRyb3Bkb3duXFx5ZXMtbm8tZHJvcGRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFFQTtFQUNFLFlBQUE7QUNBRjtBREdBO0VBQ0UsU0FBQTtFQUNBLGlEQUFBO0FDQUY7QUR1REE7RUFYRSxxQkFBQTtFQUNBLDJCQUFBO0VBR0Usd0JBQUE7RUFDQSwrQkFBQTtFQURBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFMRixtQkFBQTtFQUNBLDhCQUFBO0VBR0UsdUJBQUE7RUFDQSxpQ0FBQTtFQURBLHVCQUFBO0VBQ0EsaUNBQUE7RUFMRixzQkFBQTtFQUNBLDJCQUFBO0VBR0UseUJBQUE7RUFDQSxpQ0FBQTtFQURBLHlCQUFBO0VBQ0EsaUNBQUE7RUFMRixxQkFBQTtFQUNBLDZCQUFBO0VBR0UsMEJBQUE7RUFDQSxnQ0FBQTtFQURBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFMRiwwQkFBQTtFQUNBLGtDQUFBO0VBR0UsNkJBQUE7RUFDQSxxQ0FBQTtFQURBLDZCQUFBO0VBQ0EscUNBQUE7RUFMRixzQkFBQTtFQUNBLDRCQUFBO0VBR0UseUJBQUE7RUFDQSxnQ0FBQTtFQURBLHlCQUFBO0VBQ0EsaUNBQUE7RUFMRixxQkFBQTtFQUNBLDJCQUFBO0VBR0Usd0JBQUE7RUFDQSxnQ0FBQTtFQURBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFMRixvQkFBQTtFQUNBLHdCQUFBO0VBR0UsdUJBQUE7RUFDQSwrQkFBQTtFQURBLHVCQUFBO0VBQ0EsK0JBQUE7RUFMRix1QkFBQTtFQUNBLDRCQUFBO0VBR0UsMEJBQUE7RUFDQSxpQ0FBQTtFQURBLDBCQUFBO0VBQ0Esa0NBQUE7RUFMRix1QkFBQTtFQUNBLDZCQUFBO0VBR0UsMEJBQUE7RUFDQSxrQ0FBQTtFQURBLDBCQUFBO0VBQ0Esa0NBQUE7RUFMRix1QkFBQTtFQUNBLDhCQUFBO0VBR0UsMEJBQUE7RUFDQSxrQ0FBQTtFQURBLHdCQUFBO0VBQ0Esa0NBQUE7RUFXRixtQ0FBQTtFQUNBLHVDQUFBO0FDVUY7QUM3RUE7RUFDRSx1QkFBQTtFQUNBO0lGUUEsMEJBQUE7RUN5RUE7QUFDRjtBQzdFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUQrRUY7QUM1RUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FEK0VGO0FDNUVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBRCtFRjtBQzVFQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBRCtFRjtBQzVFQTtFQUNFLGdDQUFBO0VBQ0EsY0FBQTtBRCtFRjtBQzVFQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FEK0VGO0FDNUVBO0VBQ0UsaUJBQUE7QUQrRUY7QUM1RUE7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FEK0VGO0FDMUVFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FENkVKO0FDM0VJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUQ2RU47QUN6RUU7RUFDRSxpQkFBQTtBRDJFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC95ZXMtbm8tZHJvcGRvd24veWVzLW5vLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWl4aW4gbW9iaWxlRGlzcGxheSgpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1peGluIGJveCgkaGVpZ2h0OiA2MHB4LCAkd2lkdGg6IDYwcHgpIHtcclxuICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgd2lkdGg6ICR3aWR0aDtcclxufVxyXG5cclxuQG1peGluIGxhcmdlRm9udCB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5AbWl4aW4gY2VudGVyRmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uU3R5bGluZyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uQ29sb3IpO1xyXG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xyXG59XHJcblxyXG4kdGFyZ2V0LWNvbG9yczogKFxyXG4gIGJsdWUtY29sb3I6ICMyMzYzNjcsXHJcbiAgd2hpdGUtY29sb3I6ICNmZmYsXHJcbiAgYmxhY2stY29sb3I6ICM0MjQxM2QsXHJcbiAgZ3JheS1jb2xvcjogI0E5QTlBOSxcclxuICBncmF5LWRhcmstY29sb3I6ICM4MDgwODAsXHJcbiAgZ3JlZW4tY29sb3I6ICMyMGFlNDQsXHJcbiAgcGluay1jb2xvcjogI2ZmNDEyNCxcclxuICByZWQtY29sb3I6ICNGRjAwMDAsXHJcbiAgcHVycGxlLWNvbG9yOiAjNEEyMzVBLFxyXG4gIG9yYW5nZS1jb2xvcjogI0ZGNjYwMCxcclxuICB5ZWxsb3ctY29sb3I6ICNmYWUzNjEsXHJcbik7XHJcblxyXG4kdG9uZXM6IDQwLCA4MDtcclxuXHJcbkBtaXhpbiBnZW5lcmF0ZS1jb2xvci12YXIoJGtleSwgJHZhbHVlKSB7XHJcbiAgLS0jeyRrZXl9OiAjeyR2YWx1ZX07XHJcbiAgLS0jeyRrZXl9LXJnYjogI3tyZWQoJHZhbHVlKX0sI3tncmVlbigkdmFsdWUpfSwje2JsdWUoJHZhbHVlKX07XHJcbiAgQGVhY2ggJHRvbmUgaW4gJHRvbmVzIHtcclxuICAgICRzY2FsZS12YWx1ZTogYWRqdXN0LWNvbG9yKCR2YWx1ZSwgJGxpZ2h0bmVzczogJHRvbmUgLyAyICogMSUpO1xyXG4gICAgLS0jeyRrZXl9LSN7JHRvbmV9OiAjeyRzY2FsZS12YWx1ZX07XHJcbiAgICAtLSN7JGtleX0tI3skdG9uZX0tcmdiOiAje3JlZCgkc2NhbGUtdmFsdWUpfSwje2dyZWVuKCRzY2FsZS12YWx1ZSl9LCN7Ymx1ZSgkc2NhbGUtdmFsdWUpfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIENvbG9yIFBhbGV0dGU6IFRyaWFkaWMgU2NoZW1lXHJcblxyXG46cm9vdCB7XHJcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICR0YXJnZXQtY29sb3JzIHtcclxuICAgIEBpbmNsdWRlIGdlbmVyYXRlLWNvbG9yLXZhcigka2V5LCAkdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLS1idXR0b25Db2xvcjogdmFyKC0tYmx1ZS1jb2xvci00MCk7XHJcbiAgLS1iYWNrZ3JvdW5kQ29sb3I6IHZhcigtLWJsdWUtY29sb3ItODApO1xyXG59XHJcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuOnJvb3Qge1xuICAtLWJsdWUtY29sb3I6ICMyMzYzNjc7XG4gIC0tYmx1ZS1jb2xvci1yZ2I6IDM1LDk5LDEwMztcbiAgLS1ibHVlLWNvbG9yLTQwOiAjM2RhY2IzO1xuICAtLWJsdWUtY29sb3ItNDAtcmdiOiA2MSwxNzIsMTc5O1xuICAtLWJsdWUtY29sb3ItODA6ICM4MmQwZDQ7XG4gIC0tYmx1ZS1jb2xvci04MC1yZ2I6IDEzMCwyMDgsMjEyO1xuICAtLXdoaXRlLWNvbG9yOiAjZmZmO1xuICAtLXdoaXRlLWNvbG9yLXJnYjogMjU1LDI1NSwyNTU7XG4gIC0td2hpdGUtY29sb3ItNDA6IHdoaXRlO1xuICAtLXdoaXRlLWNvbG9yLTQwLXJnYjogMjU1LDI1NSwyNTU7XG4gIC0td2hpdGUtY29sb3ItODA6IHdoaXRlO1xuICAtLXdoaXRlLWNvbG9yLTgwLXJnYjogMjU1LDI1NSwyNTU7XG4gIC0tYmxhY2stY29sb3I6ICM0MjQxM2Q7XG4gIC0tYmxhY2stY29sb3ItcmdiOiA2Niw2NSw2MTtcbiAgLS1ibGFjay1jb2xvci00MDogIzc3NzU2ZTtcbiAgLS1ibGFjay1jb2xvci00MC1yZ2I6IDExOSwxMTcsMTEwO1xuICAtLWJsYWNrLWNvbG9yLTgwOiAjYTlhOGEyO1xuICAtLWJsYWNrLWNvbG9yLTgwLXJnYjogMTY5LDE2OCwxNjI7XG4gIC0tZ3JheS1jb2xvcjogI0E5QTlBOTtcbiAgLS1ncmF5LWNvbG9yLXJnYjogMTY5LDE2OSwxNjk7XG4gIC0tZ3JheS1jb2xvci00MDogZ2FpbnNib3JvO1xuICAtLWdyYXktY29sb3ItNDAtcmdiOiAyMjAsMjIwLDIyMDtcbiAgLS1ncmF5LWNvbG9yLTgwOiB3aGl0ZTtcbiAgLS1ncmF5LWNvbG9yLTgwLXJnYjogMjU1LDI1NSwyNTU7XG4gIC0tZ3JheS1kYXJrLWNvbG9yOiAjODA4MDgwO1xuICAtLWdyYXktZGFyay1jb2xvci1yZ2I6IDEyOCwxMjgsMTI4O1xuICAtLWdyYXktZGFyay1jb2xvci00MDogI2IzYjNiMztcbiAgLS1ncmF5LWRhcmstY29sb3ItNDAtcmdiOiAxNzksMTc5LDE3OTtcbiAgLS1ncmF5LWRhcmstY29sb3ItODA6ICNlNmU2ZTY7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLTgwLXJnYjogMjMwLDIzMCwyMzA7XG4gIC0tZ3JlZW4tY29sb3I6ICMyMGFlNDQ7XG4gIC0tZ3JlZW4tY29sb3ItcmdiOiAzMiwxNzQsNjg7XG4gIC0tZ3JlZW4tY29sb3ItNDA6ICM1NGUwNzg7XG4gIC0tZ3JlZW4tY29sb3ItNDAtcmdiOiA4NCwyMjQsMTIwO1xuICAtLWdyZWVuLWNvbG9yLTgwOiAjYWJlZmJjO1xuICAtLWdyZWVuLWNvbG9yLTgwLXJnYjogMTcxLDIzOSwxODg7XG4gIC0tcGluay1jb2xvcjogI2ZmNDEyNDtcbiAgLS1waW5rLWNvbG9yLXJnYjogMjU1LDY1LDM2O1xuICAtLXBpbmstY29sb3ItNDA6ICNmZjk5OGE7XG4gIC0tcGluay1jb2xvci00MC1yZ2I6IDI1NSwxNTMsMTM4O1xuICAtLXBpbmstY29sb3ItODA6ICNmZmYyZjA7XG4gIC0tcGluay1jb2xvci04MC1yZ2I6IDI1NSwyNDIsMjQwO1xuICAtLXJlZC1jb2xvcjogI0ZGMDAwMDtcbiAgLS1yZWQtY29sb3ItcmdiOiAyNTUsMCwwO1xuICAtLXJlZC1jb2xvci00MDogI2ZmNjY2NjtcbiAgLS1yZWQtY29sb3ItNDAtcmdiOiAyNTUsMTAyLDEwMjtcbiAgLS1yZWQtY29sb3ItODA6ICNmZmNjY2M7XG4gIC0tcmVkLWNvbG9yLTgwLXJnYjogMjU1LDIwNCwyMDQ7XG4gIC0tcHVycGxlLWNvbG9yOiAjNEEyMzVBO1xuICAtLXB1cnBsZS1jb2xvci1yZ2I6IDc0LDM1LDkwO1xuICAtLXB1cnBsZS1jb2xvci00MDogIzg2NDBhMztcbiAgLS1wdXJwbGUtY29sb3ItNDAtcmdiOiAxMzQsNjQsMTYzO1xuICAtLXB1cnBsZS1jb2xvci04MDogI2I1N2RjYztcbiAgLS1wdXJwbGUtY29sb3ItODAtcmdiOiAxODEsMTI1LDIwNDtcbiAgLS1vcmFuZ2UtY29sb3I6ICNGRjY2MDA7XG4gIC0tb3JhbmdlLWNvbG9yLXJnYjogMjU1LDEwMiwwO1xuICAtLW9yYW5nZS1jb2xvci00MDogI2ZmYTM2NjtcbiAgLS1vcmFuZ2UtY29sb3ItNDAtcmdiOiAyNTUsMTYzLDEwMjtcbiAgLS1vcmFuZ2UtY29sb3ItODA6ICNmZmUwY2M7XG4gIC0tb3JhbmdlLWNvbG9yLTgwLXJnYjogMjU1LDIyNCwyMDQ7XG4gIC0teWVsbG93LWNvbG9yOiAjZmFlMzYxO1xuICAtLXllbGxvdy1jb2xvci1yZ2I6IDI1MCwyMjcsOTc7XG4gIC0teWVsbG93LWNvbG9yLTQwOiAjZmRmNWM0O1xuICAtLXllbGxvdy1jb2xvci00MC1yZ2I6IDI1MywyNDUsMTk2O1xuICAtLXllbGxvdy1jb2xvci04MDogd2hpdGU7XG4gIC0teWVsbG93LWNvbG9yLTgwLXJnYjogMjU1LDI1NSwyNTU7XG4gIC0tYnV0dG9uQ29sb3I6IHZhcigtLWJsdWUtY29sb3ItNDApO1xuICAtLWJhY2tncm91bmRDb2xvcjogdmFyKC0tYmx1ZS1jb2xvci04MCk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXG4gIFtjbGFzcyo9ZHJvcGRvd24tY3RuXSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5kcm9wZG93bi1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZHJvcGRvd24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZHJvcGRvd25fX2xhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWluLXdpZHRoOiAyNjBweDtcbn1cblxuLmRyb3Bkb3duLWZvcm0tZmllbGQge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtb3B0aW9uIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG4gIHRleHQtaW5kZW50OiAwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1vcHRpb24tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zZWxlY3Qge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlLXRleHQge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3Qge1xuICBoZWlnaHQ6IDI0cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCAubWF0LXNlbGVjdCAubWF0LXNlbGVjdC12YWx1ZS10ZXh0IHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzLnNjc3MnO1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xyXG4gIFtjbGFzcyo9XCJkcm9wZG93bi1jdG5cIl0ge1xyXG4gICAgQGluY2x1ZGUgbW9iaWxlRGlzcGxheSgpO1xyXG4gIH1cclxufVxyXG5cclxuLmRyb3Bkb3duLWN0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duX19sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtaW4td2lkdGg6IDI2MHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tZm9ybS1maWVsZCB7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1vcHRpb24ge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xyXG4gIHRleHQtaW5kZW50OiAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1vcHRpb24tdGV4dCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNWVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3Qge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUtdGV4dCB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXBcclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAubWF0LXNlbGVjdCB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuXHJcbiAgICAubWF0LXNlbGVjdC12YWx1ZS10ZXh0IHtcclxuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/component/yes-no-dropdown/yes-no-dropdown.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/component/yes-no-dropdown/yes-no-dropdown.component.ts ***!
    \************************************************************************/

  /*! exports provided: YesNoDropdownComponent */

  /***/
  function srcAppComponentYesNoDropdownYesNoDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YesNoDropdownComponent", function () {
      return YesNoDropdownComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let YesNoDropdownComponent = class YesNoDropdownComponent {
      constructor() {
        this.yesOption = 'Yes';
        this.noOption = 'No';
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      get className() {
        return this.htmlId + '-option';
      }

      onChange() {
        this.changeEvent.emit();
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], YesNoDropdownComponent.prototype, "control", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], YesNoDropdownComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], YesNoDropdownComponent.prototype, "htmlId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], YesNoDropdownComponent.prototype, "yesOption", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], YesNoDropdownComponent.prototype, "noOption", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], YesNoDropdownComponent.prototype, "changeEvent", void 0);
    YesNoDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-yes-no-dropdown',
      template: `
    <div class="dropdown-ctn">
      <div data-dropdown-label class="dropdown__label">
        {{name}}
      </div>
      <div class="dropdown__data">
        <mat-form-field class="dropdown-form-field">
          <mat-label>Select Value</mat-label>
          <mat-select [formControl]="control" (selectionChange)="onChange()"
                      [id]="htmlId">
            <mat-option data-dropdown-option [value]="true" [ngClass]="className">
              {{yesOption}}
            </mat-option>
            <mat-option data-dropdown-option [value]="false" [ngClass]="className">
              {{noOption}}
            </mat-option>
          </mat-select>
          <mat-error data-basic-error *ngIf="!control.valid">
            {{name}} is required
          </mat-error>
        </mat-form-field>
      </div>
    </div>
  `,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./yes-no-dropdown.component.scss */
      "./src/app/component/yes-no-dropdown/yes-no-dropdown.component.scss")).default]
    })], YesNoDropdownComponent);
    /***/
  },

  /***/
  "./src/app/model/alert.model.ts":
  /*!**************************************!*\
    !*** ./src/app/model/alert.model.ts ***!
    \**************************************/

  /*! exports provided: Alert, AlertType */

  /***/
  function srcAppModelAlertModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Alert", function () {
      return Alert;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertType", function () {
      return AlertType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class Alert {
      constructor(init) {
        this.autoClose = true;
        this.keepAfterRouteChange = false;
        this.fade = true;
        Object.assign(this, init);
      }

    }

    var AlertType;

    (function (AlertType) {
      AlertType[AlertType["Success"] = 0] = "Success";
      AlertType[AlertType["Error"] = 1] = "Error";
      AlertType[AlertType["Info"] = 2] = "Info";
      AlertType[AlertType["Warning"] = 3] = "Warning";
    })(AlertType || (AlertType = {}));
    /***/

  },

  /***/
  "./src/app/page/ranking-page/ranking-page.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/page/ranking-page/ranking-page.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageRankingPageRankingPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n:root {\n  --blue-color: #236367;\n  --blue-color-rgb: 35,99,103;\n  --blue-color-40: #3dacb3;\n  --blue-color-40-rgb: 61,172,179;\n  --blue-color-80: #82d0d4;\n  --blue-color-80-rgb: 130,208,212;\n  --white-color: #fff;\n  --white-color-rgb: 255,255,255;\n  --white-color-40: white;\n  --white-color-40-rgb: 255,255,255;\n  --white-color-80: white;\n  --white-color-80-rgb: 255,255,255;\n  --black-color: #42413d;\n  --black-color-rgb: 66,65,61;\n  --black-color-40: #77756e;\n  --black-color-40-rgb: 119,117,110;\n  --black-color-80: #a9a8a2;\n  --black-color-80-rgb: 169,168,162;\n  --gray-color: #A9A9A9;\n  --gray-color-rgb: 169,169,169;\n  --gray-color-40: gainsboro;\n  --gray-color-40-rgb: 220,220,220;\n  --gray-color-80: white;\n  --gray-color-80-rgb: 255,255,255;\n  --gray-dark-color: #808080;\n  --gray-dark-color-rgb: 128,128,128;\n  --gray-dark-color-40: #b3b3b3;\n  --gray-dark-color-40-rgb: 179,179,179;\n  --gray-dark-color-80: #e6e6e6;\n  --gray-dark-color-80-rgb: 230,230,230;\n  --green-color: #20ae44;\n  --green-color-rgb: 32,174,68;\n  --green-color-40: #54e078;\n  --green-color-40-rgb: 84,224,120;\n  --green-color-80: #abefbc;\n  --green-color-80-rgb: 171,239,188;\n  --pink-color: #ff4124;\n  --pink-color-rgb: 255,65,36;\n  --pink-color-40: #ff998a;\n  --pink-color-40-rgb: 255,153,138;\n  --pink-color-80: #fff2f0;\n  --pink-color-80-rgb: 255,242,240;\n  --red-color: #FF0000;\n  --red-color-rgb: 255,0,0;\n  --red-color-40: #ff6666;\n  --red-color-40-rgb: 255,102,102;\n  --red-color-80: #ffcccc;\n  --red-color-80-rgb: 255,204,204;\n  --purple-color: #4A235A;\n  --purple-color-rgb: 74,35,90;\n  --purple-color-40: #8640a3;\n  --purple-color-40-rgb: 134,64,163;\n  --purple-color-80: #b57dcc;\n  --purple-color-80-rgb: 181,125,204;\n  --orange-color: #FF6600;\n  --orange-color-rgb: 255,102,0;\n  --orange-color-40: #ffa366;\n  --orange-color-40-rgb: 255,163,102;\n  --orange-color-80: #ffe0cc;\n  --orange-color-80-rgb: 255,224,204;\n  --yellow-color: #fae361;\n  --yellow-color-rgb: 250,227,97;\n  --yellow-color-40: #fdf5c4;\n  --yellow-color-40-rgb: 253,245,196;\n  --yellow-color-80: white;\n  --yellow-color-80-rgb: 255,255,255;\n  --buttonColor: var(--blue-color-40);\n  --backgroundColor: var(--blue-color-80);\n}\n@media only screen and (max-width: 768px) {\n  /* For mobile phones: */\n  [class*=score-div-ctn] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n\n  [class*=score-title] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n\n  [class*=score-ctn] {\n    padding-bottom: 2vh;\n  }\n}\n.header-div {\n  text-align: center;\n}\n[data-header-title] {\n  font-size: xx-large;\n  padding: 5px;\n}\n.score-ctn {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.score-title {\n  font-size: x-large;\n  font-weight: 500;\n  padding: 5px;\n}\n[data-score-div] {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  margin-top: 50px;\n}\n.player-score-value {\n  display: -webkit-box;\n  display: flex;\n  padding: 5px 15px 5px 5px;\n}\n.player-label {\n  min-width: 100px;\n}\n.player-score-ctn {\n  display: -webkit-box;\n  display: flex;\n  align-self: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  flex-wrap: wrap;\n  max-height: 78vh;\n  align-content: center;\n}\n.player-score-value:nth-child(odd) {\n  background: var(--backgroundColor);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9yYW5raW5nLXBhZ2UvQzpcXHdvcmtzcGFjZVxcc2NvcmVrZWVwaW5nLWJ5LXJvdW5kcy9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9wYWdlL3JhbmtpbmctcGFnZS9yYW5raW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2UvcmFua2luZy1wYWdlL0M6XFx3b3Jrc3BhY2VcXHNjb3Jla2VlcGluZy1ieS1yb3VuZHMvc3JjXFxhcHBcXHBhZ2VcXHJhbmtpbmctcGFnZVxccmFua2luZy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBRUE7RUFDRSxZQUFBO0FDQUY7QURHQTtFQUNFLFNBQUE7RUFDQSxpREFBQTtBQ0FGO0FEdURBO0VBWEUscUJBQUE7RUFDQSwyQkFBQTtFQUdFLHdCQUFBO0VBQ0EsK0JBQUE7RUFEQSx3QkFBQTtFQUNBLGdDQUFBO0VBTEYsbUJBQUE7RUFDQSw4QkFBQTtFQUdFLHVCQUFBO0VBQ0EsaUNBQUE7RUFEQSx1QkFBQTtFQUNBLGlDQUFBO0VBTEYsc0JBQUE7RUFDQSwyQkFBQTtFQUdFLHlCQUFBO0VBQ0EsaUNBQUE7RUFEQSx5QkFBQTtFQUNBLGlDQUFBO0VBTEYscUJBQUE7RUFDQSw2QkFBQTtFQUdFLDBCQUFBO0VBQ0EsZ0NBQUE7RUFEQSxzQkFBQTtFQUNBLGdDQUFBO0VBTEYsMEJBQUE7RUFDQSxrQ0FBQTtFQUdFLDZCQUFBO0VBQ0EscUNBQUE7RUFEQSw2QkFBQTtFQUNBLHFDQUFBO0VBTEYsc0JBQUE7RUFDQSw0QkFBQTtFQUdFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFEQSx5QkFBQTtFQUNBLGlDQUFBO0VBTEYscUJBQUE7RUFDQSwyQkFBQTtFQUdFLHdCQUFBO0VBQ0EsZ0NBQUE7RUFEQSx3QkFBQTtFQUNBLGdDQUFBO0VBTEYsb0JBQUE7RUFDQSx3QkFBQTtFQUdFLHVCQUFBO0VBQ0EsK0JBQUE7RUFEQSx1QkFBQTtFQUNBLCtCQUFBO0VBTEYsdUJBQUE7RUFDQSw0QkFBQTtFQUdFLDBCQUFBO0VBQ0EsaUNBQUE7RUFEQSwwQkFBQTtFQUNBLGtDQUFBO0VBTEYsdUJBQUE7RUFDQSw2QkFBQTtFQUdFLDBCQUFBO0VBQ0Esa0NBQUE7RUFEQSwwQkFBQTtFQUNBLGtDQUFBO0VBTEYsdUJBQUE7RUFDQSw4QkFBQTtFQUdFLDBCQUFBO0VBQ0Esa0NBQUE7RUFEQSx3QkFBQTtFQUNBLGtDQUFBO0VBV0YsbUNBQUE7RUFDQSx1Q0FBQTtBQ1VGO0FDN0VBO0VBQ0UsdUJBQUE7RUFDQTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtFRGdGRjs7RUM3RUE7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSx3QkFBQTtZQUFBLHVCQUFBO0VEZ0ZGOztFQzdFQTtJQUNFLG1CQUFBO0VEZ0ZGO0FBQ0Y7QUM3RUE7RUFDRSxrQkFBQTtBRCtFRjtBQzVFQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBRCtFRjtBQzVFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBRCtFRjtBQzVFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FEK0VGO0FDNUVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBRCtFRjtBQzVFQTtFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO0FEOEVGO0FDM0VBO0VBQ0UsZ0JBQUE7QUQ4RUY7QUMzRUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FENkVGO0FDMUVBO0VBQ0Usa0NBQUE7QUQ2RUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlL3JhbmtpbmctcGFnZS9yYW5raW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLCBib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtaXhpbiBtb2JpbGVEaXNwbGF5KCkge1xyXG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWl4aW4gYm94KCRoZWlnaHQ6IDYwcHgsICR3aWR0aDogNjBweCkge1xyXG4gIGhlaWdodDogJGhlaWdodDtcclxuICB3aWR0aDogJHdpZHRoO1xyXG59XHJcblxyXG5AbWl4aW4gbGFyZ2VGb250IHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbkBtaXhpbiBjZW50ZXJGbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b25TdHlsaW5nIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b25Db2xvcik7XHJcbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XHJcbn1cclxuXHJcbiR0YXJnZXQtY29sb3JzOiAoXHJcbiAgYmx1ZS1jb2xvcjogIzIzNjM2NyxcclxuICB3aGl0ZS1jb2xvcjogI2ZmZixcclxuICBibGFjay1jb2xvcjogIzQyNDEzZCxcclxuICBncmF5LWNvbG9yOiAjQTlBOUE5LFxyXG4gIGdyYXktZGFyay1jb2xvcjogIzgwODA4MCxcclxuICBncmVlbi1jb2xvcjogIzIwYWU0NCxcclxuICBwaW5rLWNvbG9yOiAjZmY0MTI0LFxyXG4gIHJlZC1jb2xvcjogI0ZGMDAwMCxcclxuICBwdXJwbGUtY29sb3I6ICM0QTIzNUEsXHJcbiAgb3JhbmdlLWNvbG9yOiAjRkY2NjAwLFxyXG4gIHllbGxvdy1jb2xvcjogI2ZhZTM2MSxcclxuKTtcclxuXHJcbiR0b25lczogNDAsIDgwO1xyXG5cclxuQG1peGluIGdlbmVyYXRlLWNvbG9yLXZhcigka2V5LCAkdmFsdWUpIHtcclxuICAtLSN7JGtleX06ICN7JHZhbHVlfTtcclxuICAtLSN7JGtleX0tcmdiOiAje3JlZCgkdmFsdWUpfSwje2dyZWVuKCR2YWx1ZSl9LCN7Ymx1ZSgkdmFsdWUpfTtcclxuICBAZWFjaCAkdG9uZSBpbiAkdG9uZXMge1xyXG4gICAgJHNjYWxlLXZhbHVlOiBhZGp1c3QtY29sb3IoJHZhbHVlLCAkbGlnaHRuZXNzOiAkdG9uZSAvIDIgKiAxJSk7XHJcbiAgICAtLSN7JGtleX0tI3skdG9uZX06ICN7JHNjYWxlLXZhbHVlfTtcclxuICAgIC0tI3ska2V5fS0jeyR0b25lfS1yZ2I6ICN7cmVkKCRzY2FsZS12YWx1ZSl9LCN7Z3JlZW4oJHNjYWxlLXZhbHVlKX0sI3tibHVlKCRzY2FsZS12YWx1ZSl9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ29sb3IgUGFsZXR0ZTogVHJpYWRpYyBTY2hlbWVcclxuXHJcbjpyb290IHtcclxuICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJHRhcmdldC1jb2xvcnMge1xyXG4gICAgQGluY2x1ZGUgZ2VuZXJhdGUtY29sb3ItdmFyKCRrZXksICR2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAtLWJ1dHRvbkNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yLTQwKTtcclxuICAtLWJhY2tncm91bmRDb2xvcjogdmFyKC0tYmx1ZS1jb2xvci04MCk7XHJcbn1cclxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46cm9vdCB7XG4gIC0tYmx1ZS1jb2xvcjogIzIzNjM2NztcbiAgLS1ibHVlLWNvbG9yLXJnYjogMzUsOTksMTAzO1xuICAtLWJsdWUtY29sb3ItNDA6ICMzZGFjYjM7XG4gIC0tYmx1ZS1jb2xvci00MC1yZ2I6IDYxLDE3MiwxNzk7XG4gIC0tYmx1ZS1jb2xvci04MDogIzgyZDBkNDtcbiAgLS1ibHVlLWNvbG9yLTgwLXJnYjogMTMwLDIwOCwyMTI7XG4gIC0td2hpdGUtY29sb3I6ICNmZmY7XG4gIC0td2hpdGUtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS13aGl0ZS1jb2xvci00MDogd2hpdGU7XG4gIC0td2hpdGUtY29sb3ItNDAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS13aGl0ZS1jb2xvci04MDogd2hpdGU7XG4gIC0td2hpdGUtY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1ibGFjay1jb2xvcjogIzQyNDEzZDtcbiAgLS1ibGFjay1jb2xvci1yZ2I6IDY2LDY1LDYxO1xuICAtLWJsYWNrLWNvbG9yLTQwOiAjNzc3NTZlO1xuICAtLWJsYWNrLWNvbG9yLTQwLXJnYjogMTE5LDExNywxMTA7XG4gIC0tYmxhY2stY29sb3ItODA6ICNhOWE4YTI7XG4gIC0tYmxhY2stY29sb3ItODAtcmdiOiAxNjksMTY4LDE2MjtcbiAgLS1ncmF5LWNvbG9yOiAjQTlBOUE5O1xuICAtLWdyYXktY29sb3ItcmdiOiAxNjksMTY5LDE2OTtcbiAgLS1ncmF5LWNvbG9yLTQwOiBnYWluc2Jvcm87XG4gIC0tZ3JheS1jb2xvci00MC1yZ2I6IDIyMCwyMjAsMjIwO1xuICAtLWdyYXktY29sb3ItODA6IHdoaXRlO1xuICAtLWdyYXktY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1ncmF5LWRhcmstY29sb3I6ICM4MDgwODA7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLXJnYjogMTI4LDEyOCwxMjg7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLTQwOiAjYjNiM2IzO1xuICAtLWdyYXktZGFyay1jb2xvci00MC1yZ2I6IDE3OSwxNzksMTc5O1xuICAtLWdyYXktZGFyay1jb2xvci04MDogI2U2ZTZlNjtcbiAgLS1ncmF5LWRhcmstY29sb3ItODAtcmdiOiAyMzAsMjMwLDIzMDtcbiAgLS1ncmVlbi1jb2xvcjogIzIwYWU0NDtcbiAgLS1ncmVlbi1jb2xvci1yZ2I6IDMyLDE3NCw2ODtcbiAgLS1ncmVlbi1jb2xvci00MDogIzU0ZTA3ODtcbiAgLS1ncmVlbi1jb2xvci00MC1yZ2I6IDg0LDIyNCwxMjA7XG4gIC0tZ3JlZW4tY29sb3ItODA6ICNhYmVmYmM7XG4gIC0tZ3JlZW4tY29sb3ItODAtcmdiOiAxNzEsMjM5LDE4ODtcbiAgLS1waW5rLWNvbG9yOiAjZmY0MTI0O1xuICAtLXBpbmstY29sb3ItcmdiOiAyNTUsNjUsMzY7XG4gIC0tcGluay1jb2xvci00MDogI2ZmOTk4YTtcbiAgLS1waW5rLWNvbG9yLTQwLXJnYjogMjU1LDE1MywxMzg7XG4gIC0tcGluay1jb2xvci04MDogI2ZmZjJmMDtcbiAgLS1waW5rLWNvbG9yLTgwLXJnYjogMjU1LDI0MiwyNDA7XG4gIC0tcmVkLWNvbG9yOiAjRkYwMDAwO1xuICAtLXJlZC1jb2xvci1yZ2I6IDI1NSwwLDA7XG4gIC0tcmVkLWNvbG9yLTQwOiAjZmY2NjY2O1xuICAtLXJlZC1jb2xvci00MC1yZ2I6IDI1NSwxMDIsMTAyO1xuICAtLXJlZC1jb2xvci04MDogI2ZmY2NjYztcbiAgLS1yZWQtY29sb3ItODAtcmdiOiAyNTUsMjA0LDIwNDtcbiAgLS1wdXJwbGUtY29sb3I6ICM0QTIzNUE7XG4gIC0tcHVycGxlLWNvbG9yLXJnYjogNzQsMzUsOTA7XG4gIC0tcHVycGxlLWNvbG9yLTQwOiAjODY0MGEzO1xuICAtLXB1cnBsZS1jb2xvci00MC1yZ2I6IDEzNCw2NCwxNjM7XG4gIC0tcHVycGxlLWNvbG9yLTgwOiAjYjU3ZGNjO1xuICAtLXB1cnBsZS1jb2xvci04MC1yZ2I6IDE4MSwxMjUsMjA0O1xuICAtLW9yYW5nZS1jb2xvcjogI0ZGNjYwMDtcbiAgLS1vcmFuZ2UtY29sb3ItcmdiOiAyNTUsMTAyLDA7XG4gIC0tb3JhbmdlLWNvbG9yLTQwOiAjZmZhMzY2O1xuICAtLW9yYW5nZS1jb2xvci00MC1yZ2I6IDI1NSwxNjMsMTAyO1xuICAtLW9yYW5nZS1jb2xvci04MDogI2ZmZTBjYztcbiAgLS1vcmFuZ2UtY29sb3ItODAtcmdiOiAyNTUsMjI0LDIwNDtcbiAgLS15ZWxsb3ctY29sb3I6ICNmYWUzNjE7XG4gIC0teWVsbG93LWNvbG9yLXJnYjogMjUwLDIyNyw5NztcbiAgLS15ZWxsb3ctY29sb3ItNDA6ICNmZGY1YzQ7XG4gIC0teWVsbG93LWNvbG9yLTQwLXJnYjogMjUzLDI0NSwxOTY7XG4gIC0teWVsbG93LWNvbG9yLTgwOiB3aGl0ZTtcbiAgLS15ZWxsb3ctY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1idXR0b25Db2xvcjogdmFyKC0tYmx1ZS1jb2xvci00MCk7XG4gIC0tYmFja2dyb3VuZENvbG9yOiB2YXIoLS1ibHVlLWNvbG9yLTgwKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cbiAgW2NsYXNzKj1zY29yZS1kaXYtY3RuXSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgW2NsYXNzKj1zY29yZS10aXRsZV0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICBbY2xhc3MqPXNjb3JlLWN0bl0ge1xuICAgIHBhZGRpbmctYm90dG9tOiAydmg7XG4gIH1cbn1cbi5oZWFkZXItZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5bZGF0YS1oZWFkZXItdGl0bGVdIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uc2NvcmUtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNjb3JlLXRpdGxlIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbltkYXRhLXNjb3JlLWRpdl0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnBsYXllci1zY29yZS12YWx1ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweCA1cHg7XG59XG5cbi5wbGF5ZXItbGFiZWwge1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4ucGxheWVyLXNjb3JlLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXgtaGVpZ2h0OiA3OHZoO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wbGF5ZXItc2NvcmUtdmFsdWU6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kQ29sb3IpO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy5zY3NzJztcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cclxuICBbY2xhc3MqPVwic2NvcmUtZGl2LWN0blwiXSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIFtjbGFzcyo9XCJzY29yZS10aXRsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBbY2xhc3MqPVwic2NvcmUtY3RuXCJdIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAydmg7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyLWRpdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5bZGF0YS1oZWFkZXItdGl0bGVdIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnNjb3JlLWN0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc2NvcmUtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuW2RhdGEtc2NvcmUtZGl2XSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4ucGxheWVyLXNjb3JlLXZhbHVlIHtcclxuICAvL3RleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweCA1cHg7XHJcbn1cclxuXHJcbi5wbGF5ZXItbGFiZWwge1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5wbGF5ZXItc2NvcmUtY3RuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8vYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWF4LWhlaWdodDogNzh2aDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wbGF5ZXItc2NvcmUtdmFsdWU6bnRoLWNoaWxkKG9kZCkge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmRDb2xvcik7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/page/ranking-page/ranking-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/page/ranking-page/ranking-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: RankingPageComponent */

  /***/
  function srcAppPageRankingPageRankingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RankingPageComponent", function () {
      return RankingPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/settings.service */
    "./src/app/service/settings.service.ts");

    let RankingPageComponent = class RankingPageComponent {
      constructor(settingsService) {
        this.settingsService = settingsService;
        this.lastRoundNumber = 1;
        this.title = '';
      }

      ngOnInit() {
        this.getSubscriptionsStarted();
        this.settingsService.readLocalStorage();
        window.setInterval(() => {
          this.settingsService.readLocalStorage();
        }, 20000); // 20000 = 20 seconds
      }

      ngOnDestroy() {
        this.settingsService.ngOnDestroy();
      }

      getData() {
        this.title = this.settingsService.makeRankingTitle();
        this.settingsService.kickOffInitialScoreAndTotal();
      }

      getSubscriptionsStarted() {
        this.settingsService.scoresChange.subscribe(scores => {
          this.overallScores = scores;
        });
        this.settingsService.lastRoundChange.subscribe(scores => {
          this.lastRoundScores = scores;
          this.lastRoundNumber = this.settingsService.lastRoundNumber;
        });
        this.settingsService.settingsReset.subscribe(scores => {
          this.settingsService.kickOffInitialScoreAndTotal();
          this.getData();
        });
        this.getData();
      }

    };

    RankingPageComponent.ctorParameters = () => [{
      type: _service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]
    }];

    RankingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ranking-page',
      template: `
    <div>
      <div class="header-div">
        <header data-header-title>{{this.title}}</header>
      </div>

      <div data-score-div class="score-div-ctn">
        <div data-overall-score-ctn class="score-ctn">
          <div data-overall-score-label class="score-title">Overall Score</div>
          <div class="player-score-ctn">
            <div *ngFor="let sc of overallScores" class="player-score-value">
              <div data-overall-value-name class="player-label">{{sc.player}}</div>&nbsp;
              <div data-overall-value-score>{{sc.totalScore}}</div>
            </div>
          </div>
        </div>

        <div *ngIf="settingsService.showLastRoundScores" data-last-round-score-ctn class="score-ctn">
          <div data-last-round-score-label class="score-title">Last Round ({{this.lastRoundNumber + 1}}) Scores</div>
          <div class="player-score-ctn">
            <div *ngFor="let sc of lastRoundScores" class="player-score-value">
              <div data-last-round-value-name class="player-label">{{sc.player}}</div>&nbsp;
              <div data-last-round-value-score>{{sc.totalScore}}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ranking-page.component.scss */
      "./src/app/page/ranking-page/ranking-page.component.scss")).default]
    })], RankingPageComponent);
    /***/
  },

  /***/
  "./src/app/page/score-entry-page/score-entry-page.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/page/score-entry-page/score-entry-page.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageScoreEntryPageScoreEntryPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n:root {\n  --blue-color: #236367;\n  --blue-color-rgb: 35,99,103;\n  --blue-color-40: #3dacb3;\n  --blue-color-40-rgb: 61,172,179;\n  --blue-color-80: #82d0d4;\n  --blue-color-80-rgb: 130,208,212;\n  --white-color: #fff;\n  --white-color-rgb: 255,255,255;\n  --white-color-40: white;\n  --white-color-40-rgb: 255,255,255;\n  --white-color-80: white;\n  --white-color-80-rgb: 255,255,255;\n  --black-color: #42413d;\n  --black-color-rgb: 66,65,61;\n  --black-color-40: #77756e;\n  --black-color-40-rgb: 119,117,110;\n  --black-color-80: #a9a8a2;\n  --black-color-80-rgb: 169,168,162;\n  --gray-color: #A9A9A9;\n  --gray-color-rgb: 169,169,169;\n  --gray-color-40: gainsboro;\n  --gray-color-40-rgb: 220,220,220;\n  --gray-color-80: white;\n  --gray-color-80-rgb: 255,255,255;\n  --gray-dark-color: #808080;\n  --gray-dark-color-rgb: 128,128,128;\n  --gray-dark-color-40: #b3b3b3;\n  --gray-dark-color-40-rgb: 179,179,179;\n  --gray-dark-color-80: #e6e6e6;\n  --gray-dark-color-80-rgb: 230,230,230;\n  --green-color: #20ae44;\n  --green-color-rgb: 32,174,68;\n  --green-color-40: #54e078;\n  --green-color-40-rgb: 84,224,120;\n  --green-color-80: #abefbc;\n  --green-color-80-rgb: 171,239,188;\n  --pink-color: #ff4124;\n  --pink-color-rgb: 255,65,36;\n  --pink-color-40: #ff998a;\n  --pink-color-40-rgb: 255,153,138;\n  --pink-color-80: #fff2f0;\n  --pink-color-80-rgb: 255,242,240;\n  --red-color: #FF0000;\n  --red-color-rgb: 255,0,0;\n  --red-color-40: #ff6666;\n  --red-color-40-rgb: 255,102,102;\n  --red-color-80: #ffcccc;\n  --red-color-80-rgb: 255,204,204;\n  --purple-color: #4A235A;\n  --purple-color-rgb: 74,35,90;\n  --purple-color-40: #8640a3;\n  --purple-color-40-rgb: 134,64,163;\n  --purple-color-80: #b57dcc;\n  --purple-color-80-rgb: 181,125,204;\n  --orange-color: #FF6600;\n  --orange-color-rgb: 255,102,0;\n  --orange-color-40: #ffa366;\n  --orange-color-40-rgb: 255,163,102;\n  --orange-color-80: #ffe0cc;\n  --orange-color-80-rgb: 255,224,204;\n  --yellow-color: #fae361;\n  --yellow-color-rgb: 250,227,97;\n  --yellow-color-40: #fdf5c4;\n  --yellow-color-40-rgb: 253,245,196;\n  --yellow-color-80: white;\n  --yellow-color-80-rgb: 255,255,255;\n  --buttonColor: var(--blue-color-40);\n  --backgroundColor: var(--blue-color-80);\n}\n@media only screen and (max-width: 1225px) and (min-width: 800px) {\n  /* For mobile phones: */\n  [class*=score-entry-ctn] {\n    max-height: 200vw !important;\n  }\n}\n@media only screen and (max-width: 1585px) and (min-width: 1226px) {\n  /* For mobile phones: */\n  [class*=score-entry-ctn] {\n    max-height: 120vw !important;\n  }\n}\n@media only screen and (max-width: 1875px) and (min-width: 1586px) {\n  /* For mobile phones: */\n  [class*=score-entry-ctn] {\n    max-height: 80vw !important;\n  }\n}\n@media only screen and (max-width: 799px) and (min-width: 769px) {\n  /* For mobile phones: */\n  [class*=score-entry-ctn] {\n    max-height: 240vw !important;\n  }\n}\n@media only screen and (max-width: 768px) {\n  /* For mobile phones: */\n  [class*=score-entry-ctn] {\n    max-height: none !important;\n  }\n}\n.pagination-button {\n  height: 60px;\n  width: 60px;\n  font-size: large;\n  font-weight: 400;\n  margin: 15px;\n  background: var(--buttonColor);\n  border-style: groove;\n}\n.apply-button {\n  height: 30px;\n  width: 100px;\n  margin: 10px;\n  font-size: large;\n  font-weight: 400;\n  background: var(--buttonColor);\n  border-style: groove;\n}\n.button-div {\n  text-align: center;\n  font-size: large;\n}\n.header-div {\n  text-align: center;\n}\n#round-title {\n  font-size: x-large;\n}\n#score-title {\n  font-size: xx-large;\n  padding: 5px;\n}\n[data-score-entry-ctn] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  flex-wrap: wrap;\n  max-height: 35vw;\n  align-content: center;\n}\n[data-player-label] {\n  font-weight: 500;\n  min-width: 100px;\n}\n.player-score-form-field {\n  min-width: 50px;\n  width: 50px;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n[data-for-each-player] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n}\n[data-for-each-player]:nth-child(odd) {\n  background: var(--backgroundColor);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9zY29yZS1lbnRyeS1wYWdlL0M6XFx3b3Jrc3BhY2VcXHNjb3Jla2VlcGluZy1ieS1yb3VuZHMvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvcGFnZS9zY29yZS1lbnRyeS1wYWdlL3Njb3JlLWVudHJ5LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2Uvc2NvcmUtZW50cnktcGFnZS9DOlxcd29ya3NwYWNlXFxzY29yZWtlZXBpbmctYnktcm91bmRzL3NyY1xcYXBwXFxwYWdlXFxzY29yZS1lbnRyeS1wYWdlXFxzY29yZS1lbnRyeS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBRUE7RUFDRSxZQUFBO0FDQUY7QURHQTtFQUNFLFNBQUE7RUFDQSxpREFBQTtBQ0FGO0FEdURBO0VBWEUscUJBQUE7RUFDQSwyQkFBQTtFQUdFLHdCQUFBO0VBQ0EsK0JBQUE7RUFEQSx3QkFBQTtFQUNBLGdDQUFBO0VBTEYsbUJBQUE7RUFDQSw4QkFBQTtFQUdFLHVCQUFBO0VBQ0EsaUNBQUE7RUFEQSx1QkFBQTtFQUNBLGlDQUFBO0VBTEYsc0JBQUE7RUFDQSwyQkFBQTtFQUdFLHlCQUFBO0VBQ0EsaUNBQUE7RUFEQSx5QkFBQTtFQUNBLGlDQUFBO0VBTEYscUJBQUE7RUFDQSw2QkFBQTtFQUdFLDBCQUFBO0VBQ0EsZ0NBQUE7RUFEQSxzQkFBQTtFQUNBLGdDQUFBO0VBTEYsMEJBQUE7RUFDQSxrQ0FBQTtFQUdFLDZCQUFBO0VBQ0EscUNBQUE7RUFEQSw2QkFBQTtFQUNBLHFDQUFBO0VBTEYsc0JBQUE7RUFDQSw0QkFBQTtFQUdFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFEQSx5QkFBQTtFQUNBLGlDQUFBO0VBTEYscUJBQUE7RUFDQSwyQkFBQTtFQUdFLHdCQUFBO0VBQ0EsZ0NBQUE7RUFEQSx3QkFBQTtFQUNBLGdDQUFBO0VBTEYsb0JBQUE7RUFDQSx3QkFBQTtFQUdFLHVCQUFBO0VBQ0EsK0JBQUE7RUFEQSx1QkFBQTtFQUNBLCtCQUFBO0VBTEYsdUJBQUE7RUFDQSw0QkFBQTtFQUdFLDBCQUFBO0VBQ0EsaUNBQUE7RUFEQSwwQkFBQTtFQUNBLGtDQUFBO0VBTEYsdUJBQUE7RUFDQSw2QkFBQTtFQUdFLDBCQUFBO0VBQ0Esa0NBQUE7RUFEQSwwQkFBQTtFQUNBLGtDQUFBO0VBTEYsdUJBQUE7RUFDQSw4QkFBQTtFQUdFLDBCQUFBO0VBQ0Esa0NBQUE7RUFEQSx3QkFBQTtFQUNBLGtDQUFBO0VBV0YsbUNBQUE7RUFDQSx1Q0FBQTtBQ1VGO0FDN0VBO0VBQ0UsdUJBQUE7RUFDQTtJQUNFLDRCQUFBO0VEZ0ZGO0FBQ0Y7QUM3RUE7RUFDRSx1QkFBQTtFQUNBO0lBQ0UsNEJBQUE7RUQrRUY7QUFDRjtBQzVFQTtFQUNFLHVCQUFBO0VBQ0E7SUFDRSwyQkFBQTtFRDhFRjtBQUNGO0FDM0VBO0VBQ0UsdUJBQUE7RUFDQTtJQUNFLDRCQUFBO0VENkVGO0FBQ0Y7QUMxRUE7RUFDRSx1QkFBQTtFQUNBO0lBQ0UsMkJBQUE7RUQ0RUY7QUFDRjtBQ3ZFQTtFRnZCRSxZQURrQjtFQUVsQixXQUZnQztFQU1oQyxnQkFBQTtFQUNBLGdCQUFBO0VFb0JBLFlBQUE7RUZYQSw4QkFBQTtFQUNBLG9CQUFBO0FDdUZGO0FDekVBO0VGOUJFLFlFK0JhO0VGOUJiLFlFOEJtQjtFQUNuQixZQUFBO0VGM0JBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFTQSw4QkFBQTtFQUNBLG9CQUFBO0FDaUdGO0FDNUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBRCtFRjtBQzVFQTtFQUNFLGtCQUFBO0FEK0VGO0FDNUVBO0VBQ0Usa0JBQUE7QUQrRUY7QUM1RUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUQrRUY7QUM1RUE7RUY3Q0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFRThDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBRGdGRjtBQzdFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QURnRkY7QUM3RUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QURnRkY7QUM3RUE7RUZqRUUsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFRWtFQSxrQkFBQTtBRGlGRjtBQzlFQTtFQUNFLGtDQUFBO0FEaUZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9zY29yZS1lbnRyeS1wYWdlL3Njb3JlLWVudHJ5LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLCBib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtaXhpbiBtb2JpbGVEaXNwbGF5KCkge1xyXG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWl4aW4gYm94KCRoZWlnaHQ6IDYwcHgsICR3aWR0aDogNjBweCkge1xyXG4gIGhlaWdodDogJGhlaWdodDtcclxuICB3aWR0aDogJHdpZHRoO1xyXG59XHJcblxyXG5AbWl4aW4gbGFyZ2VGb250IHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbkBtaXhpbiBjZW50ZXJGbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b25TdHlsaW5nIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b25Db2xvcik7XHJcbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XHJcbn1cclxuXHJcbiR0YXJnZXQtY29sb3JzOiAoXHJcbiAgYmx1ZS1jb2xvcjogIzIzNjM2NyxcclxuICB3aGl0ZS1jb2xvcjogI2ZmZixcclxuICBibGFjay1jb2xvcjogIzQyNDEzZCxcclxuICBncmF5LWNvbG9yOiAjQTlBOUE5LFxyXG4gIGdyYXktZGFyay1jb2xvcjogIzgwODA4MCxcclxuICBncmVlbi1jb2xvcjogIzIwYWU0NCxcclxuICBwaW5rLWNvbG9yOiAjZmY0MTI0LFxyXG4gIHJlZC1jb2xvcjogI0ZGMDAwMCxcclxuICBwdXJwbGUtY29sb3I6ICM0QTIzNUEsXHJcbiAgb3JhbmdlLWNvbG9yOiAjRkY2NjAwLFxyXG4gIHllbGxvdy1jb2xvcjogI2ZhZTM2MSxcclxuKTtcclxuXHJcbiR0b25lczogNDAsIDgwO1xyXG5cclxuQG1peGluIGdlbmVyYXRlLWNvbG9yLXZhcigka2V5LCAkdmFsdWUpIHtcclxuICAtLSN7JGtleX06ICN7JHZhbHVlfTtcclxuICAtLSN7JGtleX0tcmdiOiAje3JlZCgkdmFsdWUpfSwje2dyZWVuKCR2YWx1ZSl9LCN7Ymx1ZSgkdmFsdWUpfTtcclxuICBAZWFjaCAkdG9uZSBpbiAkdG9uZXMge1xyXG4gICAgJHNjYWxlLXZhbHVlOiBhZGp1c3QtY29sb3IoJHZhbHVlLCAkbGlnaHRuZXNzOiAkdG9uZSAvIDIgKiAxJSk7XHJcbiAgICAtLSN7JGtleX0tI3skdG9uZX06ICN7JHNjYWxlLXZhbHVlfTtcclxuICAgIC0tI3ska2V5fS0jeyR0b25lfS1yZ2I6ICN7cmVkKCRzY2FsZS12YWx1ZSl9LCN7Z3JlZW4oJHNjYWxlLXZhbHVlKX0sI3tibHVlKCRzY2FsZS12YWx1ZSl9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ29sb3IgUGFsZXR0ZTogVHJpYWRpYyBTY2hlbWVcclxuXHJcbjpyb290IHtcclxuICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJHRhcmdldC1jb2xvcnMge1xyXG4gICAgQGluY2x1ZGUgZ2VuZXJhdGUtY29sb3ItdmFyKCRrZXksICR2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAtLWJ1dHRvbkNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yLTQwKTtcclxuICAtLWJhY2tncm91bmRDb2xvcjogdmFyKC0tYmx1ZS1jb2xvci04MCk7XHJcbn1cclxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46cm9vdCB7XG4gIC0tYmx1ZS1jb2xvcjogIzIzNjM2NztcbiAgLS1ibHVlLWNvbG9yLXJnYjogMzUsOTksMTAzO1xuICAtLWJsdWUtY29sb3ItNDA6ICMzZGFjYjM7XG4gIC0tYmx1ZS1jb2xvci00MC1yZ2I6IDYxLDE3MiwxNzk7XG4gIC0tYmx1ZS1jb2xvci04MDogIzgyZDBkNDtcbiAgLS1ibHVlLWNvbG9yLTgwLXJnYjogMTMwLDIwOCwyMTI7XG4gIC0td2hpdGUtY29sb3I6ICNmZmY7XG4gIC0td2hpdGUtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS13aGl0ZS1jb2xvci00MDogd2hpdGU7XG4gIC0td2hpdGUtY29sb3ItNDAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS13aGl0ZS1jb2xvci04MDogd2hpdGU7XG4gIC0td2hpdGUtY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1ibGFjay1jb2xvcjogIzQyNDEzZDtcbiAgLS1ibGFjay1jb2xvci1yZ2I6IDY2LDY1LDYxO1xuICAtLWJsYWNrLWNvbG9yLTQwOiAjNzc3NTZlO1xuICAtLWJsYWNrLWNvbG9yLTQwLXJnYjogMTE5LDExNywxMTA7XG4gIC0tYmxhY2stY29sb3ItODA6ICNhOWE4YTI7XG4gIC0tYmxhY2stY29sb3ItODAtcmdiOiAxNjksMTY4LDE2MjtcbiAgLS1ncmF5LWNvbG9yOiAjQTlBOUE5O1xuICAtLWdyYXktY29sb3ItcmdiOiAxNjksMTY5LDE2OTtcbiAgLS1ncmF5LWNvbG9yLTQwOiBnYWluc2Jvcm87XG4gIC0tZ3JheS1jb2xvci00MC1yZ2I6IDIyMCwyMjAsMjIwO1xuICAtLWdyYXktY29sb3ItODA6IHdoaXRlO1xuICAtLWdyYXktY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1ncmF5LWRhcmstY29sb3I6ICM4MDgwODA7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLXJnYjogMTI4LDEyOCwxMjg7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLTQwOiAjYjNiM2IzO1xuICAtLWdyYXktZGFyay1jb2xvci00MC1yZ2I6IDE3OSwxNzksMTc5O1xuICAtLWdyYXktZGFyay1jb2xvci04MDogI2U2ZTZlNjtcbiAgLS1ncmF5LWRhcmstY29sb3ItODAtcmdiOiAyMzAsMjMwLDIzMDtcbiAgLS1ncmVlbi1jb2xvcjogIzIwYWU0NDtcbiAgLS1ncmVlbi1jb2xvci1yZ2I6IDMyLDE3NCw2ODtcbiAgLS1ncmVlbi1jb2xvci00MDogIzU0ZTA3ODtcbiAgLS1ncmVlbi1jb2xvci00MC1yZ2I6IDg0LDIyNCwxMjA7XG4gIC0tZ3JlZW4tY29sb3ItODA6ICNhYmVmYmM7XG4gIC0tZ3JlZW4tY29sb3ItODAtcmdiOiAxNzEsMjM5LDE4ODtcbiAgLS1waW5rLWNvbG9yOiAjZmY0MTI0O1xuICAtLXBpbmstY29sb3ItcmdiOiAyNTUsNjUsMzY7XG4gIC0tcGluay1jb2xvci00MDogI2ZmOTk4YTtcbiAgLS1waW5rLWNvbG9yLTQwLXJnYjogMjU1LDE1MywxMzg7XG4gIC0tcGluay1jb2xvci04MDogI2ZmZjJmMDtcbiAgLS1waW5rLWNvbG9yLTgwLXJnYjogMjU1LDI0MiwyNDA7XG4gIC0tcmVkLWNvbG9yOiAjRkYwMDAwO1xuICAtLXJlZC1jb2xvci1yZ2I6IDI1NSwwLDA7XG4gIC0tcmVkLWNvbG9yLTQwOiAjZmY2NjY2O1xuICAtLXJlZC1jb2xvci00MC1yZ2I6IDI1NSwxMDIsMTAyO1xuICAtLXJlZC1jb2xvci04MDogI2ZmY2NjYztcbiAgLS1yZWQtY29sb3ItODAtcmdiOiAyNTUsMjA0LDIwNDtcbiAgLS1wdXJwbGUtY29sb3I6ICM0QTIzNUE7XG4gIC0tcHVycGxlLWNvbG9yLXJnYjogNzQsMzUsOTA7XG4gIC0tcHVycGxlLWNvbG9yLTQwOiAjODY0MGEzO1xuICAtLXB1cnBsZS1jb2xvci00MC1yZ2I6IDEzNCw2NCwxNjM7XG4gIC0tcHVycGxlLWNvbG9yLTgwOiAjYjU3ZGNjO1xuICAtLXB1cnBsZS1jb2xvci04MC1yZ2I6IDE4MSwxMjUsMjA0O1xuICAtLW9yYW5nZS1jb2xvcjogI0ZGNjYwMDtcbiAgLS1vcmFuZ2UtY29sb3ItcmdiOiAyNTUsMTAyLDA7XG4gIC0tb3JhbmdlLWNvbG9yLTQwOiAjZmZhMzY2O1xuICAtLW9yYW5nZS1jb2xvci00MC1yZ2I6IDI1NSwxNjMsMTAyO1xuICAtLW9yYW5nZS1jb2xvci04MDogI2ZmZTBjYztcbiAgLS1vcmFuZ2UtY29sb3ItODAtcmdiOiAyNTUsMjI0LDIwNDtcbiAgLS15ZWxsb3ctY29sb3I6ICNmYWUzNjE7XG4gIC0teWVsbG93LWNvbG9yLXJnYjogMjUwLDIyNyw5NztcbiAgLS15ZWxsb3ctY29sb3ItNDA6ICNmZGY1YzQ7XG4gIC0teWVsbG93LWNvbG9yLTQwLXJnYjogMjUzLDI0NSwxOTY7XG4gIC0teWVsbG93LWNvbG9yLTgwOiB3aGl0ZTtcbiAgLS15ZWxsb3ctY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1idXR0b25Db2xvcjogdmFyKC0tYmx1ZS1jb2xvci00MCk7XG4gIC0tYmFja2dyb3VuZENvbG9yOiB2YXIoLS1ibHVlLWNvbG9yLTgwKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjI1cHgpIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cbiAgW2NsYXNzKj1zY29yZS1lbnRyeS1jdG5dIHtcbiAgICBtYXgtaGVpZ2h0OiAyMDB2dyAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1ODVweCkgYW5kIChtaW4td2lkdGg6IDEyMjZweCkge1xuICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cbiAgW2NsYXNzKj1zY29yZS1lbnRyeS1jdG5dIHtcbiAgICBtYXgtaGVpZ2h0OiAxMjB2dyAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE4NzVweCkgYW5kIChtaW4td2lkdGg6IDE1ODZweCkge1xuICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cbiAgW2NsYXNzKj1zY29yZS1lbnRyeS1jdG5dIHtcbiAgICBtYXgtaGVpZ2h0OiA4MHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzk5cHgpIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cbiAgW2NsYXNzKj1zY29yZS1lbnRyeS1jdG5dIHtcbiAgICBtYXgtaGVpZ2h0OiAyNDB2dyAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xuICBbY2xhc3MqPXNjb3JlLWVudHJ5LWN0bl0ge1xuICAgIG1heC1oZWlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLnBhZ2luYXRpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b25Db2xvcik7XG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xufVxuXG4uYXBwbHktYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uQ29sb3IpO1xuICBib3JkZXItc3R5bGU6IGdyb292ZTtcbn1cblxuLmJ1dHRvbi1kaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5oZWFkZXItZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcm91bmQtdGl0bGUge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbiNzY29yZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuW2RhdGEtc2NvcmUtZW50cnktY3RuXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWF4LWhlaWdodDogMzV2dztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG5bZGF0YS1wbGF5ZXItbGFiZWxdIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLnBsYXllci1zY29yZS1mb3JtLWZpZWxkIHtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbltkYXRhLWZvci1lYWNoLXBsYXllcl0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbltkYXRhLWZvci1lYWNoLXBsYXllcl06bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kQ29sb3IpO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy5zY3NzJztcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIyNXB4KSBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cclxuICBbY2xhc3MqPVwic2NvcmUtZW50cnktY3RuXCJdIHtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1ODVweCkgYW5kIChtaW4td2lkdGg6IDEyMjZweCkge1xyXG4gIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xyXG4gIFtjbGFzcyo9XCJzY29yZS1lbnRyeS1jdG5cIl0ge1xyXG4gICAgbWF4LWhlaWdodDogMTIwdncgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTg3NXB4KSBhbmQgKG1pbi13aWR0aDogMTU4NnB4KSB7XHJcbiAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXHJcbiAgW2NsYXNzKj1cInNjb3JlLWVudHJ5LWN0blwiXSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5OXB4KSBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cclxuICBbY2xhc3MqPVwic2NvcmUtZW50cnktY3RuXCJdIHtcclxuICAgIG1heC1oZWlnaHQ6IDI0MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXHJcbiAgW2NsYXNzKj1cInNjb3JlLWVudHJ5LWN0blwiXSB7XHJcbiAgICBtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5wYWdpbmF0aW9uLWJ1dHRvbiB7XHJcbiAgQGluY2x1ZGUgYm94KCk7XHJcbiAgQGluY2x1ZGUgbGFyZ2VGb250KCk7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIEBpbmNsdWRlIGJ1dHRvblN0eWxpbmcoKTtcclxufVxyXG5cclxuLmFwcGx5LWJ1dHRvbiB7XHJcbiAgQGluY2x1ZGUgYm94KDMwcHgsIDEwMHB4KTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgQGluY2x1ZGUgbGFyZ2VGb250KCk7XHJcbiAgQGluY2x1ZGUgYnV0dG9uU3R5bGluZygpO1xyXG59XHJcblxyXG4uYnV0dG9uLWRpdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5oZWFkZXItZGl2IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNyb3VuZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4jc2NvcmUtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5bZGF0YS1zY29yZS1lbnRyeS1jdG5dIHtcclxuICBAaW5jbHVkZSBjZW50ZXJGbGV4KCk7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWF4LWhlaWdodDogMzV2dztcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbltkYXRhLXBsYXllci1sYWJlbF0ge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLnBsYXllci1zY29yZS1mb3JtLWZpZWxkIHtcclxuICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG5cclxuW2RhdGEtZm9yLWVhY2gtcGxheWVyXSB7XHJcbiAgQGluY2x1ZGUgY2VudGVyRmxleCgpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuW2RhdGEtZm9yLWVhY2gtcGxheWVyXTpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZENvbG9yKTtcclxuXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/page/score-entry-page/score-entry-page.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/page/score-entry-page/score-entry-page.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ScoreEntryPageComponent */

  /***/
  function srcAppPageScoreEntryPageScoreEntryPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScoreEntryPageComponent", function () {
      return ScoreEntryPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/settings.service */
    "./src/app/service/settings.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/alert.service */
    "./src/app/service/alert.service.ts");

    let ScoreEntryPageComponent = class ScoreEntryPageComponent {
      constructor(alertService, settingsService) {
        this.alertService = alertService;
        this.settingsService = settingsService;
        this.scoreEntryFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.isFormGroupLoaded = false;
        this.players = [];
      }

      ngOnInit() {
        this.settingsService.settingsReset.subscribe(scores => {
          this.setupPage();
        });
        this.setupPage();
      }

      ngOnDestroy() {
        this.settingsService.ngOnDestroy();
      }

      setupPage() {
        this.makeFormControls();
        this.roundNumber = this.settingsService.figureOutLastRoundEnteredNotAboveNumberOfRounds();
        this.loadScoresByRound();
      }

      makeFormControls() {
        let i = 0;

        for (i; i < this.settingsService.numberOfPlayers; i++) {
          this.players.push(i);
          let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(1000)]);
          this.scoreEntryFormGroup.addControl(i.toString(), formControl);
        }

        this.isFormGroupLoaded = true;
      }

      previousRound() {
        this.roundNumber -= 1;
        this.loadScoresByRound();
      }

      nextRound() {
        this.roundNumber += 1;
        this.loadScoresByRound();
      }

      loadScoresByRound() {
        let i = 0;

        for (i; i < this.settingsService.numberOfPlayers; i++) {
          this.scoreEntryFormGroup.get(i.toString()).setValue(this.settingsService.scores[i].score[this.roundNumber]);
        }
      }

      recordScores() {
        let scores = [this.settingsService.numberOfPlayers];
        let i = 0;

        for (i; i < this.settingsService.numberOfPlayers; i++) {
          scores[i] = this.scoreEntryFormGroup.get(i.toString()).value;
        }

        this.settingsService.updateScores(this.roundNumber, scores);

        if (this.settingsService.applyScoresNextRound) {
          this.nextRound();
        }

        this.alertService.success(this.getRoundSavedMessage(), Date.now());
      }

      getRoundSavedMessage() {
        return 'Round ' + this.roundNumber + ' saved successfully.';
      }

    };

    ScoreEntryPageComponent.ctorParameters = () => [{
      type: _service_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
    }, {
      type: _service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]
    }];

    ScoreEntryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-score-entry-page',
      template: `
    <div>
      <div class="header-div">
        <header data-header-title id="score-title">Score Entry</header>
        <header data-round-number id="round-title"> Round #{{this.roundNumber + 1}}</header>
      </div>
      <div class="button-div">
        <div data-round-pagination-buttons>
          <button data-button-previous-round (click)="previousRound()" [disabled]="roundNumber === 0" class="pagination-button"><</button>
          <button data-button-next-round
                  (click)="nextRound()"
                  [disabled]="roundNumber === this.settingsService.numberOfRounds - 1"
                  class="pagination-button">>
          </button>
        </div>
        <div>
          <button data-button-apply
                  (click)="recordScores()"
                  [disabled]="!this.scoreEntryFormGroup.valid"
                  class="apply-button">Apply
          </button>
        </div>
      </div>
      <div *ngIf="isFormGroupLoaded" data-score-entry-ctn class="score-entry-ctn">
        <div *ngFor="let i of players" data-for-each-player>
          <div data-player-label>{{this.settingsService.getPlayerName(i)}}</div>
          <mat-form-field class="player-score-form-field">
            <input matInput data-score-entry-input
                   type="number"
                   rows="1"
                   [formControl]="scoreEntryFormGroup.get(i.toString())"
            >
            <mat-error data-basic-error *ngIf="!scoreEntryFormGroup.get(i.toString()).valid">
              Enter {{this.settingsService.usePlayer ? this.settingsService.PLAYER : this.settingsService.TEAM}}'s score
            </mat-error>
          </mat-form-field>
        </div>
      </div>
      <div class="button-div">
        <div>
          <button data-button-apply-2
                  (click)="recordScores()"
                  [disabled]="!this.scoreEntryFormGroup.valid"
                  class="apply-button">Apply
          </button>
        </div>
        <div data-round-pagination-buttons-2>
          <button data-button-previous-round-2 (click)="previousRound()" [disabled]="roundNumber === 0" class="pagination-button"><</button>
          <button data-button-next-round-2
                  (click)="nextRound()"
                  [disabled]="roundNumber === this.settingsService.numberOfRounds - 1"
                  class="pagination-button">>
          </button>
        </div>
      </div>
    </div>
  `,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./score-entry-page.component.scss */
      "./src/app/page/score-entry-page/score-entry-page.component.scss")).default]
    })], ScoreEntryPageComponent);
    /***/
  },

  /***/
  "./src/app/page/settings-page/settings-page.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/page/settings-page/settings-page.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageSettingsPageSettingsPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n:root {\n  --blue-color: #236367;\n  --blue-color-rgb: 35,99,103;\n  --blue-color-40: #3dacb3;\n  --blue-color-40-rgb: 61,172,179;\n  --blue-color-80: #82d0d4;\n  --blue-color-80-rgb: 130,208,212;\n  --white-color: #fff;\n  --white-color-rgb: 255,255,255;\n  --white-color-40: white;\n  --white-color-40-rgb: 255,255,255;\n  --white-color-80: white;\n  --white-color-80-rgb: 255,255,255;\n  --black-color: #42413d;\n  --black-color-rgb: 66,65,61;\n  --black-color-40: #77756e;\n  --black-color-40-rgb: 119,117,110;\n  --black-color-80: #a9a8a2;\n  --black-color-80-rgb: 169,168,162;\n  --gray-color: #A9A9A9;\n  --gray-color-rgb: 169,169,169;\n  --gray-color-40: gainsboro;\n  --gray-color-40-rgb: 220,220,220;\n  --gray-color-80: white;\n  --gray-color-80-rgb: 255,255,255;\n  --gray-dark-color: #808080;\n  --gray-dark-color-rgb: 128,128,128;\n  --gray-dark-color-40: #b3b3b3;\n  --gray-dark-color-40-rgb: 179,179,179;\n  --gray-dark-color-80: #e6e6e6;\n  --gray-dark-color-80-rgb: 230,230,230;\n  --green-color: #20ae44;\n  --green-color-rgb: 32,174,68;\n  --green-color-40: #54e078;\n  --green-color-40-rgb: 84,224,120;\n  --green-color-80: #abefbc;\n  --green-color-80-rgb: 171,239,188;\n  --pink-color: #ff4124;\n  --pink-color-rgb: 255,65,36;\n  --pink-color-40: #ff998a;\n  --pink-color-40-rgb: 255,153,138;\n  --pink-color-80: #fff2f0;\n  --pink-color-80-rgb: 255,242,240;\n  --red-color: #FF0000;\n  --red-color-rgb: 255,0,0;\n  --red-color-40: #ff6666;\n  --red-color-40-rgb: 255,102,102;\n  --red-color-80: #ffcccc;\n  --red-color-80-rgb: 255,204,204;\n  --purple-color: #4A235A;\n  --purple-color-rgb: 74,35,90;\n  --purple-color-40: #8640a3;\n  --purple-color-40-rgb: 134,64,163;\n  --purple-color-80: #b57dcc;\n  --purple-color-80-rgb: 181,125,204;\n  --orange-color: #FF6600;\n  --orange-color-rgb: 255,102,0;\n  --orange-color-40: #ffa366;\n  --orange-color-40-rgb: 255,163,102;\n  --orange-color-80: #ffe0cc;\n  --orange-color-80-rgb: 255,224,204;\n  --yellow-color: #fae361;\n  --yellow-color-rgb: 250,227,97;\n  --yellow-color-40: #fdf5c4;\n  --yellow-color-40-rgb: 253,245,196;\n  --yellow-color-80: white;\n  --yellow-color-80-rgb: 255,255,255;\n  --buttonColor: var(--blue-color-40);\n  --backgroundColor: var(--blue-color-80);\n}\n@media only screen and (max-width: 768px) {\n  /* For mobile phones: */\n  [class*=settings-value-ctn] {\n    display: inline !important;\n  }\n\n  [class*=dropdown-ctn] {\n    display: inline !important;\n  }\n\n  [class*=small-button] {\n    display: inline !important;\n    width: 100px;\n  }\n\n  [class*=buttons-ctn-big] {\n    display: none;\n  }\n\n  [class*=buttons] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n}\n.header-div {\n  text-align: center;\n  margin-bottom: 50px;\n}\n[data-settings-input] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n[data-header-title] {\n  font-size: xx-large;\n  padding: 5px;\n}\n.buttons {\n  text-align: center;\n  margin-top: 50px;\n}\n.apply-button {\n  height: 30px;\n  margin: 10px;\n  width: 100px;\n  font-size: large;\n  background: var(--buttonColor);\n  border-style: groove;\n}\n[data-button-export] {\n  height: 30px;\n  margin: 10px;\n  font-size: large;\n  background: var(--buttonColor);\n  border-style: groove;\n}\n.reset-button {\n  margin: 15px;\n  font-size: large;\n  background: var(--buttonColor);\n  border-style: groove;\n}\n.settings-value-label {\n  font-weight: 500;\n  min-width: 260px;\n}\n.settings-value-form-field {\n  min-width: 100px;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n.settings-value-ctn {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.dropdown__label {\n  font-weight: 500;\n  min-width: 260px;\n}\n.dropdown-ctn {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9zZXR0aW5ncy1wYWdlL0M6XFx3b3Jrc3BhY2VcXHNjb3Jla2VlcGluZy1ieS1yb3VuZHMvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvcGFnZS9zZXR0aW5ncy1wYWdlL3NldHRpbmdzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2Uvc2V0dGluZ3MtcGFnZS9DOlxcd29ya3NwYWNlXFxzY29yZWtlZXBpbmctYnktcm91bmRzL3NyY1xcYXBwXFxwYWdlXFxzZXR0aW5ncy1wYWdlXFxzZXR0aW5ncy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBRUE7RUFDRSxZQUFBO0FDQUY7QURHQTtFQUNFLFNBQUE7RUFDQSxpREFBQTtBQ0FGO0FEdURBO0VBWEUscUJBQUE7RUFDQSwyQkFBQTtFQUdFLHdCQUFBO0VBQ0EsK0JBQUE7RUFEQSx3QkFBQTtFQUNBLGdDQUFBO0VBTEYsbUJBQUE7RUFDQSw4QkFBQTtFQUdFLHVCQUFBO0VBQ0EsaUNBQUE7RUFEQSx1QkFBQTtFQUNBLGlDQUFBO0VBTEYsc0JBQUE7RUFDQSwyQkFBQTtFQUdFLHlCQUFBO0VBQ0EsaUNBQUE7RUFEQSx5QkFBQTtFQUNBLGlDQUFBO0VBTEYscUJBQUE7RUFDQSw2QkFBQTtFQUdFLDBCQUFBO0VBQ0EsZ0NBQUE7RUFEQSxzQkFBQTtFQUNBLGdDQUFBO0VBTEYsMEJBQUE7RUFDQSxrQ0FBQTtFQUdFLDZCQUFBO0VBQ0EscUNBQUE7RUFEQSw2QkFBQTtFQUNBLHFDQUFBO0VBTEYsc0JBQUE7RUFDQSw0QkFBQTtFQUdFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFEQSx5QkFBQTtFQUNBLGlDQUFBO0VBTEYscUJBQUE7RUFDQSwyQkFBQTtFQUdFLHdCQUFBO0VBQ0EsZ0NBQUE7RUFEQSx3QkFBQTtFQUNBLGdDQUFBO0VBTEYsb0JBQUE7RUFDQSx3QkFBQTtFQUdFLHVCQUFBO0VBQ0EsK0JBQUE7RUFEQSx1QkFBQTtFQUNBLCtCQUFBO0VBTEYsdUJBQUE7RUFDQSw0QkFBQTtFQUdFLDBCQUFBO0VBQ0EsaUNBQUE7RUFEQSwwQkFBQTtFQUNBLGtDQUFBO0VBTEYsdUJBQUE7RUFDQSw2QkFBQTtFQUdFLDBCQUFBO0VBQ0Esa0NBQUE7RUFEQSwwQkFBQTtFQUNBLGtDQUFBO0VBTEYsdUJBQUE7RUFDQSw4QkFBQTtFQUdFLDBCQUFBO0VBQ0Esa0NBQUE7RUFEQSx3QkFBQTtFQUNBLGtDQUFBO0VBV0YsbUNBQUE7RUFDQSx1Q0FBQTtBQ1VGO0FDN0VBO0VBQ0UsdUJBQUE7RUFDQTtJRlFBLDBCQUFBO0VDeUVBOztFQzdFQTtJRklBLDBCQUFBO0VDNkVBOztFQzdFQTtJRkFBLDBCQUFBO0lFRUUsWUFBQTtFRGdGRjs7RUM3RUE7SUFDRSxhQUFBO0VEZ0ZGOztFQzdFQTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7RURnRkY7QUFDRjtBQzdFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUQrRUY7QUM1RUE7RUZQRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VFUUEsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FEZ0ZGO0FDN0VBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FEZ0ZGO0FDN0VBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBRGdGRjtBQzdFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VGckJBLDhCQUFBO0VBQ0Esb0JBQUE7QUNzR0Y7QUM5RUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VGNUJBLDhCQUFBO0VBQ0Esb0JBQUE7QUM4R0Y7QUMvRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUZsQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQ3FIRjtBQ2hGQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QURtRkY7QUNoRkE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QURtRkY7QUNoRkE7RUZ0REUsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQzBJRjtBQ2pGQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QURvRkY7QUNqRkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FEb0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9zZXR0aW5ncy1wYWdlL3NldHRpbmdzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLCBib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtaXhpbiBtb2JpbGVEaXNwbGF5KCkge1xyXG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWl4aW4gYm94KCRoZWlnaHQ6IDYwcHgsICR3aWR0aDogNjBweCkge1xyXG4gIGhlaWdodDogJGhlaWdodDtcclxuICB3aWR0aDogJHdpZHRoO1xyXG59XHJcblxyXG5AbWl4aW4gbGFyZ2VGb250IHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbkBtaXhpbiBjZW50ZXJGbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b25TdHlsaW5nIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b25Db2xvcik7XHJcbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XHJcbn1cclxuXHJcbiR0YXJnZXQtY29sb3JzOiAoXHJcbiAgYmx1ZS1jb2xvcjogIzIzNjM2NyxcclxuICB3aGl0ZS1jb2xvcjogI2ZmZixcclxuICBibGFjay1jb2xvcjogIzQyNDEzZCxcclxuICBncmF5LWNvbG9yOiAjQTlBOUE5LFxyXG4gIGdyYXktZGFyay1jb2xvcjogIzgwODA4MCxcclxuICBncmVlbi1jb2xvcjogIzIwYWU0NCxcclxuICBwaW5rLWNvbG9yOiAjZmY0MTI0LFxyXG4gIHJlZC1jb2xvcjogI0ZGMDAwMCxcclxuICBwdXJwbGUtY29sb3I6ICM0QTIzNUEsXHJcbiAgb3JhbmdlLWNvbG9yOiAjRkY2NjAwLFxyXG4gIHllbGxvdy1jb2xvcjogI2ZhZTM2MSxcclxuKTtcclxuXHJcbiR0b25lczogNDAsIDgwO1xyXG5cclxuQG1peGluIGdlbmVyYXRlLWNvbG9yLXZhcigka2V5LCAkdmFsdWUpIHtcclxuICAtLSN7JGtleX06ICN7JHZhbHVlfTtcclxuICAtLSN7JGtleX0tcmdiOiAje3JlZCgkdmFsdWUpfSwje2dyZWVuKCR2YWx1ZSl9LCN7Ymx1ZSgkdmFsdWUpfTtcclxuICBAZWFjaCAkdG9uZSBpbiAkdG9uZXMge1xyXG4gICAgJHNjYWxlLXZhbHVlOiBhZGp1c3QtY29sb3IoJHZhbHVlLCAkbGlnaHRuZXNzOiAkdG9uZSAvIDIgKiAxJSk7XHJcbiAgICAtLSN7JGtleX0tI3skdG9uZX06ICN7JHNjYWxlLXZhbHVlfTtcclxuICAgIC0tI3ska2V5fS0jeyR0b25lfS1yZ2I6ICN7cmVkKCRzY2FsZS12YWx1ZSl9LCN7Z3JlZW4oJHNjYWxlLXZhbHVlKX0sI3tibHVlKCRzY2FsZS12YWx1ZSl9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ29sb3IgUGFsZXR0ZTogVHJpYWRpYyBTY2hlbWVcclxuXHJcbjpyb290IHtcclxuICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJHRhcmdldC1jb2xvcnMge1xyXG4gICAgQGluY2x1ZGUgZ2VuZXJhdGUtY29sb3ItdmFyKCRrZXksICR2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAtLWJ1dHRvbkNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yLTQwKTtcclxuICAtLWJhY2tncm91bmRDb2xvcjogdmFyKC0tYmx1ZS1jb2xvci04MCk7XHJcbn1cclxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46cm9vdCB7XG4gIC0tYmx1ZS1jb2xvcjogIzIzNjM2NztcbiAgLS1ibHVlLWNvbG9yLXJnYjogMzUsOTksMTAzO1xuICAtLWJsdWUtY29sb3ItNDA6ICMzZGFjYjM7XG4gIC0tYmx1ZS1jb2xvci00MC1yZ2I6IDYxLDE3MiwxNzk7XG4gIC0tYmx1ZS1jb2xvci04MDogIzgyZDBkNDtcbiAgLS1ibHVlLWNvbG9yLTgwLXJnYjogMTMwLDIwOCwyMTI7XG4gIC0td2hpdGUtY29sb3I6ICNmZmY7XG4gIC0td2hpdGUtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS13aGl0ZS1jb2xvci00MDogd2hpdGU7XG4gIC0td2hpdGUtY29sb3ItNDAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS13aGl0ZS1jb2xvci04MDogd2hpdGU7XG4gIC0td2hpdGUtY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1ibGFjay1jb2xvcjogIzQyNDEzZDtcbiAgLS1ibGFjay1jb2xvci1yZ2I6IDY2LDY1LDYxO1xuICAtLWJsYWNrLWNvbG9yLTQwOiAjNzc3NTZlO1xuICAtLWJsYWNrLWNvbG9yLTQwLXJnYjogMTE5LDExNywxMTA7XG4gIC0tYmxhY2stY29sb3ItODA6ICNhOWE4YTI7XG4gIC0tYmxhY2stY29sb3ItODAtcmdiOiAxNjksMTY4LDE2MjtcbiAgLS1ncmF5LWNvbG9yOiAjQTlBOUE5O1xuICAtLWdyYXktY29sb3ItcmdiOiAxNjksMTY5LDE2OTtcbiAgLS1ncmF5LWNvbG9yLTQwOiBnYWluc2Jvcm87XG4gIC0tZ3JheS1jb2xvci00MC1yZ2I6IDIyMCwyMjAsMjIwO1xuICAtLWdyYXktY29sb3ItODA6IHdoaXRlO1xuICAtLWdyYXktY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1ncmF5LWRhcmstY29sb3I6ICM4MDgwODA7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLXJnYjogMTI4LDEyOCwxMjg7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLTQwOiAjYjNiM2IzO1xuICAtLWdyYXktZGFyay1jb2xvci00MC1yZ2I6IDE3OSwxNzksMTc5O1xuICAtLWdyYXktZGFyay1jb2xvci04MDogI2U2ZTZlNjtcbiAgLS1ncmF5LWRhcmstY29sb3ItODAtcmdiOiAyMzAsMjMwLDIzMDtcbiAgLS1ncmVlbi1jb2xvcjogIzIwYWU0NDtcbiAgLS1ncmVlbi1jb2xvci1yZ2I6IDMyLDE3NCw2ODtcbiAgLS1ncmVlbi1jb2xvci00MDogIzU0ZTA3ODtcbiAgLS1ncmVlbi1jb2xvci00MC1yZ2I6IDg0LDIyNCwxMjA7XG4gIC0tZ3JlZW4tY29sb3ItODA6ICNhYmVmYmM7XG4gIC0tZ3JlZW4tY29sb3ItODAtcmdiOiAxNzEsMjM5LDE4ODtcbiAgLS1waW5rLWNvbG9yOiAjZmY0MTI0O1xuICAtLXBpbmstY29sb3ItcmdiOiAyNTUsNjUsMzY7XG4gIC0tcGluay1jb2xvci00MDogI2ZmOTk4YTtcbiAgLS1waW5rLWNvbG9yLTQwLXJnYjogMjU1LDE1MywxMzg7XG4gIC0tcGluay1jb2xvci04MDogI2ZmZjJmMDtcbiAgLS1waW5rLWNvbG9yLTgwLXJnYjogMjU1LDI0MiwyNDA7XG4gIC0tcmVkLWNvbG9yOiAjRkYwMDAwO1xuICAtLXJlZC1jb2xvci1yZ2I6IDI1NSwwLDA7XG4gIC0tcmVkLWNvbG9yLTQwOiAjZmY2NjY2O1xuICAtLXJlZC1jb2xvci00MC1yZ2I6IDI1NSwxMDIsMTAyO1xuICAtLXJlZC1jb2xvci04MDogI2ZmY2NjYztcbiAgLS1yZWQtY29sb3ItODAtcmdiOiAyNTUsMjA0LDIwNDtcbiAgLS1wdXJwbGUtY29sb3I6ICM0QTIzNUE7XG4gIC0tcHVycGxlLWNvbG9yLXJnYjogNzQsMzUsOTA7XG4gIC0tcHVycGxlLWNvbG9yLTQwOiAjODY0MGEzO1xuICAtLXB1cnBsZS1jb2xvci00MC1yZ2I6IDEzNCw2NCwxNjM7XG4gIC0tcHVycGxlLWNvbG9yLTgwOiAjYjU3ZGNjO1xuICAtLXB1cnBsZS1jb2xvci04MC1yZ2I6IDE4MSwxMjUsMjA0O1xuICAtLW9yYW5nZS1jb2xvcjogI0ZGNjYwMDtcbiAgLS1vcmFuZ2UtY29sb3ItcmdiOiAyNTUsMTAyLDA7XG4gIC0tb3JhbmdlLWNvbG9yLTQwOiAjZmZhMzY2O1xuICAtLW9yYW5nZS1jb2xvci00MC1yZ2I6IDI1NSwxNjMsMTAyO1xuICAtLW9yYW5nZS1jb2xvci04MDogI2ZmZTBjYztcbiAgLS1vcmFuZ2UtY29sb3ItODAtcmdiOiAyNTUsMjI0LDIwNDtcbiAgLS15ZWxsb3ctY29sb3I6ICNmYWUzNjE7XG4gIC0teWVsbG93LWNvbG9yLXJnYjogMjUwLDIyNyw5NztcbiAgLS15ZWxsb3ctY29sb3ItNDA6ICNmZGY1YzQ7XG4gIC0teWVsbG93LWNvbG9yLTQwLXJnYjogMjUzLDI0NSwxOTY7XG4gIC0teWVsbG93LWNvbG9yLTgwOiB3aGl0ZTtcbiAgLS15ZWxsb3ctY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1idXR0b25Db2xvcjogdmFyKC0tYmx1ZS1jb2xvci00MCk7XG4gIC0tYmFja2dyb3VuZENvbG9yOiB2YXIoLS1ibHVlLWNvbG9yLTgwKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cbiAgW2NsYXNzKj1zZXR0aW5ncy12YWx1ZS1jdG5dIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIFtjbGFzcyo9ZHJvcGRvd24tY3RuXSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cblxuICBbY2xhc3MqPXNtYWxsLWJ1dHRvbl0ge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuXG4gIFtjbGFzcyo9YnV0dG9ucy1jdG4tYmlnXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIFtjbGFzcyo9YnV0dG9uc10ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG4uaGVhZGVyLWRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuW2RhdGEtc2V0dGluZ3MtaW5wdXRdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuW2RhdGEtaGVhZGVyLXRpdGxlXSB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5hcHBseS1idXR0b24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b25Db2xvcik7XG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xufVxuXG5bZGF0YS1idXR0b24tZXhwb3J0XSB7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b25Db2xvcik7XG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xufVxuXG4ucmVzZXQtYnV0dG9uIHtcbiAgbWFyZ2luOiAxNXB4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b25Db2xvcik7XG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xufVxuXG4uc2V0dGluZ3MtdmFsdWUtbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBtaW4td2lkdGg6IDI2MHB4O1xufVxuXG4uc2V0dGluZ3MtdmFsdWUtZm9ybS1maWVsZCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4uc2V0dGluZ3MtdmFsdWUtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRyb3Bkb3duX19sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1pbi13aWR0aDogMjYwcHg7XG59XG5cbi5kcm9wZG93bi1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy5zY3NzJztcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cclxuICBbY2xhc3MqPVwic2V0dGluZ3MtdmFsdWUtY3RuXCJdIHtcclxuICAgIEBpbmNsdWRlIG1vYmlsZURpc3BsYXkoKTtcclxuICB9XHJcblxyXG4gIFtjbGFzcyo9XCJkcm9wZG93bi1jdG5cIl0ge1xyXG4gICAgQGluY2x1ZGUgbW9iaWxlRGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgW2NsYXNzKj1cInNtYWxsLWJ1dHRvblwiXSB7XHJcbiAgICBAaW5jbHVkZSBtb2JpbGVEaXNwbGF5KCk7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICBbY2xhc3MqPVwiYnV0dG9ucy1jdG4tYmlnXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBbY2xhc3MqPVwiYnV0dG9uc1wiXSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyLWRpdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbltkYXRhLXNldHRpbmdzLWlucHV0XSB7XHJcbiAgQGluY2x1ZGUgY2VudGVyRmxleCgpO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbltkYXRhLWhlYWRlci10aXRsZV0ge1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5hcHBseS1idXR0b24ge1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgQGluY2x1ZGUgYnV0dG9uU3R5bGluZygpO1xyXG59XHJcblxyXG5bZGF0YS1idXR0b24tZXhwb3J0XSB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIEBpbmNsdWRlIGJ1dHRvblN0eWxpbmcoKTtcclxufVxyXG5cclxuLnJlc2V0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgQGluY2x1ZGUgYnV0dG9uU3R5bGluZygpO1xyXG59XHJcblxyXG4uc2V0dGluZ3MtdmFsdWUtbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWluLXdpZHRoOiAyNjBweDtcclxufVxyXG5cclxuLnNldHRpbmdzLXZhbHVlLWZvcm0tZmllbGQge1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG5cclxuLnNldHRpbmdzLXZhbHVlLWN0biB7XHJcbiAgQGluY2x1ZGUgY2VudGVyRmxleCgpO1xyXG59XHJcblxyXG4uZHJvcGRvd25fX2xhYmVsIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1pbi13aWR0aDogMjYwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jdG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/page/settings-page/settings-page.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/page/settings-page/settings-page.component.ts ***!
    \***************************************************************/

  /*! exports provided: SettingsPageComponent */

  /***/
  function srcAppPageSettingsPageSettingsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageComponent", function () {
      return SettingsPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/settings.service */
    "./src/app/service/settings.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _component_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../component/confirmation-popup/confirmation-popup.component */
    "./src/app/component/confirmation-popup/confirmation-popup.component.ts");
    /* harmony import */


    var _service_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../service/alert.service */
    "./src/app/service/alert.service.ts");

    let SettingsPageComponent = class SettingsPageComponent {
      constructor(dialog, alertService, settingsService) {
        this.dialog = dialog;
        this.alertService = alertService;
        this.settingsService = settingsService;
        this.colors = [{
          name: 'Black',
          value: '--black-color-'
        }, {
          name: 'Blue',
          value: '--blue-color-'
        }, {
          name: 'Gray',
          value: '--gray-color-'
        }, {
          name: 'Gray Dark',
          value: '--gray-dark-color-'
        }, {
          name: 'Green',
          value: '--green-color-'
        }, {
          name: 'Orange',
          value: '--orange-color-'
        }, {
          name: 'Pink',
          value: '--pink-color-'
        }, {
          name: 'Purple',
          value: '--purple-color-'
        }, {
          name: 'Red',
          value: '--red-color-'
        }, {
          name: 'Yellow',
          value: '--yellow-color-'
        }, {
          name: 'White',
          value: '--white-color-'
        }];
        this.numberOfRoundsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9.]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.numberOfPlayersControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9.]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.shouldSortByPlayerControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.showLastRoundControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.usePlayerControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.applyNextRoundControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.colorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.RESET_EVERYTHING_MESSAGE = 'This will reset everything to the default settings.';
        this.RESET_SCORES_MESSAGE = 'This will reset the scores only.';
        this.APPLY_SETTING_MESSAGE = 'Applying settings changes will reset scores.';
        this.RESET_SCORES_SUCCESS_MESSAGE = 'Scores reset successfully.';
        this.RESET_EVERYTHING_SUCCESS_MESSAGE = 'Settings and scores reset successfully.';
        this.APPLY_SETTING_SUCCESS_MESSAGE = 'Settings applied successfully.';
        this.ACTION_CANCELLED_MESSAGE = 'Action Cancelled.';
      }

      ngOnInit() {
        this.settingsFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          numberOfPlayers: this.numberOfPlayersControl,
          numberOfRounds: this.numberOfRoundsControl,
          title: this.titleControl,
          shouldSortByRank: this.shouldSortByPlayerControl,
          showLastRound: this.showLastRoundControl,
          usePlayer: this.usePlayerControl,
          applyNextRound: this.applyNextRoundControl
        });
        this.applySettingsValuesToFormControls();
      }

      ngOnDestroy() {
        this.settingsService.ngOnDestroy();
      }

      resetEverything() {
        const dialogRef = this.dialog.open(_component_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationPopupComponent"], {
          data: {
            label: this.RESET_EVERYTHING_MESSAGE
          },
          id: 'confirmation-modal',
          width: '35vw'
        });

        if (dialogRef) {
          dialogRef.afterClosed().subscribe(shouldReset => {
            if (shouldReset) {
              this.settingsService.resetEverything();
              this.applySettingsValuesToFormControls();
              this.alertService.success(this.RESET_EVERYTHING_SUCCESS_MESSAGE, Date.now());
            } else {
              this.alertService.warn(this.ACTION_CANCELLED_MESSAGE, Date.now());
            }
          });
        }
      }

      applyToSettings() {
        const dialogRef = this.dialog.open(_component_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationPopupComponent"], {
          data: {
            label: this.APPLY_SETTING_MESSAGE
          },
          id: 'confirmation-modal',
          width: '35vw'
        });

        if (dialogRef) {
          dialogRef.afterClosed().subscribe(shouldApply => {
            if (shouldApply) {
              this.settingsService.applySettings(this.numberOfRoundsControl.value, this.numberOfPlayersControl.value, this.titleControl.value, this.usePlayerControl.value, this.shouldSortByPlayerControl.value, this.showLastRoundControl.value, this.applyNextRoundControl.value);
              this.alertService.success(this.APPLY_SETTING_SUCCESS_MESSAGE, Date.now());
            } else {
              this.alertService.warn(this.ACTION_CANCELLED_MESSAGE, Date.now());
            }
          });
        }
      }

      resetOnlyScores() {
        const dialogRef = this.dialog.open(_component_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationPopupComponent"], {
          data: {
            label: this.RESET_SCORES_MESSAGE
          },
          id: 'confirmation-modal',
          width: '35vw'
        });

        if (dialogRef) {
          dialogRef.afterClosed().subscribe(shouldReset => {
            if (shouldReset) {
              this.settingsService.resetScores(true);
              this.alertService.success(this.RESET_SCORES_SUCCESS_MESSAGE, Date.now());
            } else {
              this.alertService.warn(this.ACTION_CANCELLED_MESSAGE, Date.now());
            }
          });
        }
      }

      applySettingsValuesToFormControls() {
        this.numberOfPlayersControl.setValue(this.settingsService.numberOfPlayers);
        this.numberOfRoundsControl.setValue(this.settingsService.numberOfRounds);
        this.shouldSortByPlayerControl.setValue(this.settingsService.shouldSortByPlayer);
        this.showLastRoundControl.setValue(this.settingsService.showLastRoundScores);
        this.usePlayerControl.setValue(this.settingsService.usePlayer);
        this.applyNextRoundControl.setValue(this.settingsService.applyScoresNextRound);
        this.titleControl.setValue(this.settingsService.title);
        this.colorControl.setValue(this.settingsService.color);
      }

      setColor() {
        this.settingsService.setColor(this.colorControl.value);
      }

      getBackgroundColor(value) {
        return 'var(' + value + 40 + ')';
      }

    };

    SettingsPageComponent.ctorParameters = () => [{
      type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
    }, {
      type: _service_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
    }, {
      type: _service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]
    }];

    SettingsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings-page',
      template: `
    <div>
      <div class="header-div">
        <header data-header-title>Settings</header>
      </div>

      <div data-settings-input>
        <!-- TITLE  -->
        <div class="settings-value-ctn">
          <div data-title-label class="settings-value-label">Title</div>
          <mat-form-field class="settings-value-form-field">
            <input matInput data-title
                   type="text"
                   rows="1"
                   [formControl]="titleControl"
            >
            <mat-error data-basic-error *ngIf="!titleControl.valid">
              Title is required
            </mat-error>
          </mat-form-field>
        </div>
        <!-- NUMBER OF ROUNDS  -->
        <div class="settings-value-ctn">
          <div data-number-of-rounds-input-label class="settings-value-label">Number Of Rounds</div>
          <mat-form-field class="settings-value-form-field">
            <input matInput data-number-of-rounds-input
                   type="number"
                   rows="1"
                   [formControl]="numberOfRoundsControl"
            >
            <mat-error data-basic-error *ngIf="!numberOfRoundsControl.hasError('required')">
              Number of {{this.settingsService.PLAYERS}} is required
            </mat-error>
            <mat-error data-max-error *ngIf="!numberOfRoundsControl.hasError('max')">
              Number of {{this.settingsService.PLAYERS}} cannot exceed 1000
            </mat-error>
          </mat-form-field>
        </div>
        <!-- NUMBER OF PLAYERS  -->
        <div class="settings-value-ctn">
          <div data-number-of-players-input-label class="settings-value-label">
            Number Of {{this.settingsService.usePlayer ? this.settingsService.PLAYERS : this.settingsService.TEAMS}}
          </div>
          <mat-form-field class="settings-value-form-field">
            <input matInput data-number-of-players-input
                   type="number"
                   rows="1"
                   [formControl]="numberOfPlayersControl"
            >
            <mat-error data-basic-error *ngIf="!numberOfPlayersControl.hasError('required')">
              Number of {{this.settingsService.PLAYERS}} is required
            </mat-error>
            <mat-error data-max-error *ngIf="!numberOfPlayersControl.hasError('max')">
              Number of {{this.settingsService.PLAYERS}} cannot exceed 1000
            </mat-error>
          </mat-form-field>
        </div>
        <!-- USE PLAYER?  -->
        <app-yes-no-dropdown [control]="usePlayerControl"
                             [htmlId]="'use player select'"
                             [yesOption]="this.settingsService.PLAYERS"
                             [noOption]="this.settingsService.TEAMS"
                             [name]="'Use Players or Teams'"
        ></app-yes-no-dropdown>
        <!-- SHOULD SORT BY RANK?  -->
        <app-yes-no-dropdown [control]="shouldSortByPlayerControl"
                             [htmlId]="'sort-by-player-select'"
                             [name]="'Should Sort By'"
                             [yesOption]="this.settingsService.usePlayer ? 'Player #' : 'Team #'"
                             [noOption]="'Rank #'"
        ></app-yes-no-dropdown>
        <!-- SHOW LAST ROUND SCORES?  -->
        <app-yes-no-dropdown [control]="showLastRoundControl"
                             [htmlId]="'show-last-round-select'"
                             [name]="'Show Last Round Scores'"
        ></app-yes-no-dropdown>
        <!-- APPLY SCORES GO TOES NEXT ROUND?  -->
        <app-yes-no-dropdown [control]="applyNextRoundControl"
                             [htmlId]="'apply-scores-next-round-select'"
                             [name]="'Apply Scores Goes To Next Round'"
        ></app-yes-no-dropdown>
        <!-- COLOR  -->
        <div class="dropdown-ctn">
          <div data-dropdown-label class="dropdown__label">
            Color - *Applies Immediately
          </div>
          <div class="dropdown__data">
            <mat-form-field class="dropdown-form-field">
              <mat-label>Select Value</mat-label>
              <mat-select [formControl]="colorControl" (selectionChange)="setColor()"
                          [ngStyle]="{'background-color': getBackgroundColor(this.colorControl.value)}">
                <mat-option *ngFor="let color of this.colors" data-dropdown-option [value]="color.value"
                            [ngStyle]="{'background-color': getBackgroundColor(color.value)}"
                >
                  {{color.name}}
                </mat-option>
              </mat-select>
            </mat-form-field>
          </div>
        </div>
      </div>

      <div class="buttons">
        <button data-button-apply
                (click)="applyToSettings()"
                [disabled]="!this.settingsFormGroup.valid"
                class="apply-button">Apply
        </button>
        <div class="buttons-ctn-big">
          <button data-button-reset-only-scores
                  (click)="resetOnlyScores()"
                  class="reset-button">Reset Only Scores
          </button>
          <button data-button-reset-everything
                  (click)="resetEverything()"
                  class="reset-button">Reset Everything
          </button>
        </div>
        <button data-button-export (click)="this.settingsService.exportScoresToExcel()">
          Export Scores
        </button>
      </div>
    </div>
  `,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings-page.component.scss */
      "./src/app/page/settings-page/settings-page.component.scss")).default]
    })], SettingsPageComponent);
    /***/
  },

  /***/
  "./src/app/service/alert.service.ts":
  /*!******************************************!*\
    !*** ./src/app/service/alert.service.ts ***!
    \******************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppServiceAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _model_alert_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/alert.model */
    "./src/app/model/alert.model.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let AlertService = class AlertService {
      constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.defaultId = 'default-alert';
      } // enable subscribing to alerts observable


      onAlert(id = this.defaultId) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(x => x && x.id === id));
      } // convenience methods


      success(message, options) {
        this.alert(new _model_alert_model__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign({}, options, {
          type: _model_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success,
          message
        })));
      }

      error(message, options) {
        this.alert(new _model_alert_model__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign({}, options, {
          type: _model_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error,
          message
        })));
      }

      info(message, options) {
        this.alert(new _model_alert_model__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign({}, options, {
          type: _model_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info,
          message
        })));
      }

      warn(message, options) {
        this.alert(new _model_alert_model__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign({}, options, {
          type: _model_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning,
          message
        })));
      } // main alert method


      alert(alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
      } // clear alerts


      clear(id = this.defaultId) {
        this.subject.next(new _model_alert_model__WEBPACK_IMPORTED_MODULE_3__["Alert"]({
          id
        }));
      }

    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AlertService);
    /***/
  },

  /***/
  "./src/app/service/excel.service.ts":
  /*!******************************************!*\
    !*** ./src/app/service/excel.service.ts ***!
    \******************************************/

  /*! exports provided: ExcelService */

  /***/
  function srcAppServiceExcelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExcelService", function () {
      return ExcelService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);

    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    let ExcelService = class ExcelService {
      constructor() {}

      exportAsExcelFile(json, excelFileName) {
        const data = 'data';
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json);
        const workbook = {
          Sheets: {
            data: worksheet
          },
          SheetNames: [data]
        };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, {
          bookType: 'xlsx',
          type: 'array'
        });
        this.saveAsExcelFile(excelBuffer, excelFileName);
      }

      saveAsExcelFile(buffer, fileName) {
        const data = new Blob([buffer], {
          type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
      }

    };
    ExcelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ExcelService);
    /***/
  },

  /***/
  "./src/app/service/settings.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/service/settings.service.ts ***!
    \*********************************************/

  /*! exports provided: SettingsService */

  /***/
  function srcAppServiceSettingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
      return SettingsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./excel.service */
    "./src/app/service/excel.service.ts");

    let SettingsService = class SettingsService {
      constructor(excelService) {
        this.excelService = excelService; // tslint:disable-next-line:variable-name

        this._scoresUpdatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](); // tslint:disable-next-line:variable-name

        this._lastRoundUpdatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](); // tslint:disable-next-line:variable-name

        this._settingsResetSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.TEAM = 'Team';
        this.PLAYER = 'Player';
        this.TEAMS = 'Teams';
        this.PLAYERS = 'Players';
        this.NUMBER_OF_PLAYERS_DEFAULT = '10';
        this.NUMBER_OF_ROUNDS_DEFAULT = '10';
        this.TITLE_DEFAULT = 'Trivia';
        this.USE_PLAYER_DEFAULT = 'true';
        this.SORT_BY_PLAYER_DEFAULT = 'true';
        this.SHOW_LAST_ROUND_DEFAULT = 'true';
        this.APPLY_SCORES_NEXT_ROUND_DEFAULT = 'true';
        this.LAST_ROUND_DEFAULT = '0';
        this.COLOR_DEFAULT = '--blue-color-';
        this.readFromLocalStorage();
        this.resetScores(false);
      }

      ngOnDestroy() {
        this.saveToLocalStorage();
      }

      get scoresChange() {
        return this._scoresUpdatedSubject;
      }

      get lastRoundChange() {
        return this._lastRoundUpdatedSubject;
      }

      get settingsReset() {
        return this._settingsResetSubject;
      }

      setColor(value) {
        this.color = value;
        this.saveColorToLocalStorage();
        const root = document.documentElement;
        let buttonValue = value + 40;
        let backgroundValue = value + 80;
        root.style.setProperty('--buttonColor', `var(${buttonValue})`);
        root.style.setProperty('--backgroundColor', `var(${backgroundValue})`);
      }

      applySettings(rounds, players, title, usePlayer, sortByRank, showLastRound, applyScoresNextRound) {
        this.numberOfRounds = rounds;
        this.numberOfPlayers = players;
        this.usePlayer = usePlayer;
        this.title = title;
        this.shouldSortByPlayer = sortByRank;
        this.showLastRoundScores = showLastRound;
        this.applyScoresNextRound = applyScoresNextRound;
        this.resetScores(true);
        this.saveToLocalStorage();
      } //#region Reset Methods


      resetEverything() {
        window.localStorage.clear();
        this.numberOfRounds = +lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.NUMBER_OF_ROUNDS_DEFAULT);
        this.numberOfPlayers = +lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.NUMBER_OF_PLAYERS_DEFAULT);
        this.lastRoundNumber = +lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.LAST_ROUND_DEFAULT);
        this.usePlayer = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.getBoolean(this.USE_PLAYER_DEFAULT));
        this.shouldSortByPlayer = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.getBoolean(this.SORT_BY_PLAYER_DEFAULT));
        this.showLastRoundScores = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.getBoolean(this.SHOW_LAST_ROUND_DEFAULT));
        this.applyScoresNextRound = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.getBoolean(this.APPLY_SCORES_NEXT_ROUND_DEFAULT));
        this.title = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.TITLE_DEFAULT);
        this.setColor(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.COLOR_DEFAULT));
        this.resetScores(true);
        this.saveToLocalStorage();

        this._settingsResetSubject.next(true);
      }

      resetScores(useDefault) {
        this.reloadScoresAndTotal(useDefault);

        this._settingsResetSubject.next(true);
      }

      reloadScoresAndTotal(useDefault) {
        this.scores = this.getScoresOrDefault(useDefault);
        this.totals = this.getTotalsOrDefault(useDefault);
      } //#endregion
      //#region String Concatenation Methods


      getPlayerName(num) {
        const name = this.usePlayer ? 'Player ' : 'Team ';
        return name + (num + 1);
      }

      makeRankingTitle() {
        return this.title + ' Rankings';
      } //#endregion
      //#region Score Related Methods


      updateScores(roundIndex, roundScores) {
        let x = 0;

        for (x; x < this.numberOfPlayers; x++) {
          this.scores[x].score[roundIndex] = roundScores[x];
        }

        this.updateTotals();
        this.scoreChanged();
        this.lastRoundChanged(roundIndex);
      }

      kickOffInitialScoreAndTotal() {
        this.updateTotals();
        this.scoreChanged();
        this.lastRoundChanged(this.lastRoundNumber - 1);
      }

      lastRoundChanged(roundNumber) {
        this.lastRoundNumber = roundNumber;
        let scores = [];
        let i = 0;

        for (i; i < this.numberOfPlayers; i++) {
          const playerScore = {
            player: this.getPlayerName(i),
            totalScore: this.scores[i].score[roundNumber]
          };
          scores.push(playerScore);
        }

        if (!this.shouldSortByPlayer) {
          scores.sort((a, b) => {
            if (!a.totalScore || a.totalScore < b.totalScore) {
              return -1;
            } else if (!b.totalScore || a.totalScore > b.totalScore) {
              return 1;
            }

            return 0;
          });
        }

        if (!this.shouldSortByPlayer) {
          scores = scores.sort((a, b) => b.totalScore - a.totalScore);
        }

        this._lastRoundUpdatedSubject.next(scores);
      }

      figureOutLastCompleteRoundEntered() {
        let i = 0;
        let x;
        let total;

        for (i; i < this.numberOfRounds; i++) {
          x = 0;
          total = 0;

          for (x; x < this.numberOfPlayers; x++) {
            total += this.getScoreFromEntry(this.scores[x].score[i].toString());
          }

          if (total === 0) {
            return i - 1;
          }
        }

        return lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.numberOfRounds);
      }

      figureOutLastRoundEnteredNotAboveNumberOfRounds() {
        let round = this.figureOutLastCompleteRoundEntered();
        return round >= this.numberOfRounds - 1 ? this.numberOfRounds - 1 : round + 1;
      }

      getScoreFromEntry(num) {
        if (isNaN(+num) || num === undefined || num === null) {
          return 0;
        } else {
          return +num;
        }
      }

      scoreChanged() {
        let scores = [];
        let i = 0;

        for (i; i < this.numberOfPlayers; i++) {
          const playerScore = {
            player: this.getPlayerName(i),
            totalScore: this.totals[i]
          };
          scores.push(playerScore);
        }

        if (!this.shouldSortByPlayer) {
          scores = scores.sort((a, b) => b.totalScore - a.totalScore);
        }

        this._scoresUpdatedSubject.next(scores);
      }

      updateTotals() {
        this.totals = [this.numberOfPlayers];
        let i = 0;
        let x;
        let total;

        for (i; i < this.numberOfPlayers; i++) {
          x = 0;
          total = 0;

          for (x; x < this.numberOfRounds; x++) {
            total += this.scores[i].score[x];
          }

          this.totals[i] = total;
        }

        this.saveToLocalStorage();
      }

      exportScoresToExcel() {
        const name = 'Name';
        const total = 'Total';
        const round = 'Round ';
        let dataArray = [];
        let i = 0;

        for (i; i < this.numberOfPlayers; i++) {
          let data = {};
          let x = 0;
          data[name] = this.getPlayerName(i);
          data[total] = this.totals[i];

          for (x; x < this.scores[i].score.length; x++) {
            data[round + (x + 1)] = this.scores[i].score[x];
          }

          dataArray.push(data);
        }

        this.excelService.exportAsExcelFile(dataArray, this.makeRankingTitle()); // This helped
        // https://medium.com/@madhavmahesh/exporting-an-excel-file-in-angular-927756ac9857
      } //#endregion
      //#region Get From Local Storage


      readLocalStorage() {
        this.readFromLocalStorage();

        if (this.lastRoundNumber < this.figureOutLastRoundEnteredNotAboveNumberOfRounds()) {
          this.lastRoundNumber = this.figureOutLastRoundEnteredNotAboveNumberOfRounds();
        }

        this.kickOffInitialScoreAndTotal();
      }

      readFromLocalStorage() {
        this.numberOfPlayers = +this.getNumberOfPlayersOrDefault();
        this.numberOfRounds = +this.getNumberOfRoundsOrDefault();
        this.lastRoundNumber = +this.getLastRoundOrDefault();
        this.title = this.getTitleOrDefault();
        this.shouldSortByPlayer = this.getBoolean(this.getSortByPlayerOrDefault());
        this.showLastRoundScores = this.getBoolean(this.getShowLastRoundOrDefault());
        this.usePlayer = this.getBoolean(this.getUsePlayerOrDefault());
        this.applyScoresNextRound = this.getBoolean(this.getApplyScoresNextRoundOrDefault());
        this.scores = this.getScoresOrDefault(false);
        this.totals = this.getTotalsOrDefault(false);
        this.setColor(this.getColorOrDefault());
      }

      getBoolean(value) {
        switch (value) {
          case true:
          case 'true':
          case 1:
          case '1':
          case 'on':
          case 'yes':
            return true;

          default:
            return false;
        }
      }

      isNullOrUndefined(str) {
        if (str == null || str === undefined || str === 'undefined' || str === 'null') {
          return true;
        } else {
          return false;
        }
      }

      getNumberOfPlayersOrDefault() {
        const players = window.localStorage.getItem('players');
        return !this.isNullOrUndefined(players) ? players : lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.NUMBER_OF_PLAYERS_DEFAULT);
      }

      getLastRoundOrDefault() {
        const lastRound = window.localStorage.getItem('last-round');
        return !this.isNullOrUndefined(lastRound) ? lastRound : lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.LAST_ROUND_DEFAULT);
      }

      getNumberOfRoundsOrDefault() {
        const rounds = window.localStorage.getItem('rounds');
        return !this.isNullOrUndefined(rounds) ? rounds : lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.NUMBER_OF_ROUNDS_DEFAULT);
      }

      getTitleOrDefault() {
        const title = window.localStorage.getItem('title');
        return !this.isNullOrUndefined(title) ? title : lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.TITLE_DEFAULT);
      }

      getColorOrDefault() {
        const color = window.localStorage.getItem('color');
        return !this.isNullOrUndefined(color) ? color : lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.COLOR_DEFAULT);
      }

      getShowLastRoundOrDefault() {
        const showLastRound = window.localStorage.getItem('show-last-round');
        return !this.isNullOrUndefined(showLastRound) ? showLastRound : lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.SHOW_LAST_ROUND_DEFAULT);
      }

      getSortByPlayerOrDefault() {
        const sortByRank = window.localStorage.getItem('sort-by-player');
        return !this.isNullOrUndefined(sortByRank) ? sortByRank : lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.SORT_BY_PLAYER_DEFAULT);
      }

      getTotalsOrDefault(useDefault) {
        const total = window.localStorage.getItem('totals');
        let value = !this.isNullOrUndefined(total) ? JSON.parse(total) : lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"]([]);

        if (value.length === 0 || useDefault) {
          let i = 0;

          for (i; i < this.numberOfPlayers; i++) {
            let y = 0;
            value[i] = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](y);
          }
        }

        return value;
      }

      getScoresOrDefault(useDefault) {
        const score = window.localStorage.getItem('scores');
        let value = !this.isNullOrUndefined(score) ? JSON.parse(score) : lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"]([]);

        if (value.length === 0 || useDefault) {
          let i = 0;

          for (i; i < this.numberOfPlayers; i++) {
            let y = {
              score: []
            };
            let x = 0;

            for (x; x < this.numberOfRounds; x++) {
              y.score.push(0);
            }

            value[i] = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](y);
          }
        }

        return value;
      }

      getApplyScoresNextRoundOrDefault() {
        const applyNextRound = window.localStorage.getItem('apply-scores-next-round');
        return !this.isNullOrUndefined(applyNextRound) ? applyNextRound : lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.APPLY_SCORES_NEXT_ROUND_DEFAULT);
      }

      getUsePlayerOrDefault() {
        const usePlayer = window.localStorage.getItem('use-player');
        return !this.isNullOrUndefined(usePlayer) ? usePlayer : lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.USE_PLAYER_DEFAULT);
      } //#endregion
      //#region Save to Local Storage


      saveToLocalStorage() {
        window.localStorage.setItem('players', this.numberOfPlayers.toString());
        window.localStorage.setItem('rounds', this.numberOfRounds.toString());
        window.localStorage.setItem('last-round', this.lastRoundNumber.toString());
        window.localStorage.setItem('sort-by-player', this.shouldSortByPlayer.toString());
        window.localStorage.setItem('show-last-round', this.showLastRoundScores.toString());
        window.localStorage.setItem('use-player', this.usePlayer.toString());
        window.localStorage.setItem('apply-scores-next-round', this.applyScoresNextRound.toString());
        window.localStorage.setItem('title', this.title);
        this.saveColorToLocalStorage();
        window.localStorage.setItem('scores', JSON.stringify(this.scores));
        window.localStorage.setItem('totals', JSON.stringify(this.totals));
      }

      saveColorToLocalStorage() {
        window.localStorage.setItem('color', this.color);
      }

    };

    SettingsService.ctorParameters = () => [{
      type: _excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"]
    }];

    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SettingsService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\workspace\scorekeeping-by-rounds\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!************************!*\
    !*** stream (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map