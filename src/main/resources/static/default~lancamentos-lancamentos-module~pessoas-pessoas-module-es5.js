function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~lancamentos-lancamentos-module~pessoas-pessoas-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js ***!
    \*****************************************************************/

  /*! exports provided: BidiModule, DIR_DOCUMENT, Dir, Directionality, ɵangular_material_src_cdk_bidi_bidi_a */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015BidiJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BidiModule", function () {
      return BidiModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function () {
      return DIR_DOCUMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dir", function () {
      return Dir;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Directionality", function () {
      return Directionality;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_bidi_bidi_a", function () {
      return DIR_DOCUMENT_FACTORY;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Injection token used to inject the document into Directionality.
     * This is used so that the value can be faked in tests.
     *
     * We can't use the real document in tests because changing the real `dir` causes geometry-based
     * tests in Safari to fail.
     *
     * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
     * themselves use things like `querySelector` in test code.
     *
     * This token is defined in a separate file from Directionality as a workaround for
     * https://github.com/angular/angular/issues/22559
     *
     * @docs-private
     */


    var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cdk-dir-doc', {
      providedIn: 'root',
      factory: DIR_DOCUMENT_FACTORY
    });
    /** @docs-private */

    function DIR_DOCUMENT_FACTORY() {
      return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * The directionality (LTR / RTL) context for the application (or a subtree of it).
     * Exposes the current direction and a stream of direction changes.
     */


    var Directionality =
    /** @class */
    function () {
      var Directionality = /*#__PURE__*/function () {
        function Directionality(_document) {
          _classCallCheck(this, Directionality);

          /** The current 'ltr' or 'rtl' value. */
          this.value = 'ltr';
          /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

          if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            var bodyDir = _document.body ? _document.body.dir : null;
            var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            var value = bodyDir || htmlDir;
            this.value = value === 'ltr' || value === 'rtl' ? value : 'ltr';
          }
        }

        _createClass(Directionality, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.change.complete();
          }
        }]);

        return Directionality;
      }();

      Directionality.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function Directionality_Factory() {
          return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DIR_DOCUMENT, 8));
        },
        token: Directionality,
        providedIn: "root"
      });

      Directionality.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [DIR_DOCUMENT]
          }]
        }];
      };

      return Directionality;
    }()
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Directionality, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [DIR_DOCUMENT]
          }]
        }];
      }, null);
    })();

    ;

    Directionality.ɵfac = function Directionality_Factory(t) {
      return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DIR_DOCUMENT, 8));
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Directive to listen for changes of direction of part of the DOM.
     *
     * Provides itself as Directionality such that descendant directives only need to ever inject
     * Directionality to get the closest direction.
     */


    var Dir =
    /** @class */
    function () {
      var Dir = /*#__PURE__*/function () {
        function Dir() {
          _classCallCheck(this, Dir);

          /** Normalized direction that accounts for invalid/unsupported values. */
          this._dir = 'ltr';
          /** Whether the `value` has been set to its initial value. */

          this._isInitialized = false;
          /** Event emitted when the direction changes. */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /** @docs-private */


        _createClass(Dir, [{
          key: "ngAfterContentInit",

          /** Initialize once default value has been set. */
          value: function ngAfterContentInit() {
            this._isInitialized = true;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.change.complete();
          }
        }, {
          key: "dir",
          get: function get() {
            return this._dir;
          },
          set: function set(value) {
            var old = this._dir;
            var normalizedValue = value ? value.toLowerCase() : value;
            this._rawDir = value;
            this._dir = normalizedValue === 'ltr' || normalizedValue === 'rtl' ? normalizedValue : 'ltr';

            if (old !== this._dir && this._isInitialized) {
              this.change.emit(this._dir);
            }
          }
          /** Current layout direction of the element. */

        }, {
          key: "value",
          get: function get() {
            return this.dir;
          }
        }]);

        return Dir;
      }();

      Dir.propDecorators = {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['dirChange']
        }],
        dir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      return Dir;
    }()
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dir, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[dir]',
          providers: [{
            provide: Directionality,
            useExisting: Dir
          }],
          host: {
            '[attr.dir]': '_rawDir'
          },
          exportAs: 'dir'
        }]
      }], function () {
        return [];
      }, {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['dirChange']
        }],
        dir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    ;

    Dir.ɵfac = function Dir_Factory(t) {
      return new (t || Dir)();
    };

    Dir.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: Dir,
      selectors: [["", "dir", ""]],
      hostVars: 1,
      hostBindings: function Dir_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
        }
      },
      inputs: {
        dir: "dir"
      },
      outputs: {
        change: "dirChange"
      },
      exportAs: ["dir"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: Directionality,
        useExisting: Dir
      }])]
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var BidiModule =
    /** @class */
    function () {
      var BidiModule = function BidiModule() {
        _classCallCheck(this, BidiModule);
      };

      return BidiModule;
    }()(function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BidiModule, {
        declarations: [Dir],
        exports: [Dir]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [Dir],
          declarations: [Dir]
        }]
      }], null, null);
    })();

    ;
    BidiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BidiModule
    });
    BidiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BidiModule_Factory(t) {
        return new (t || BidiModule)();
      }
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=bidi.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js ***!
    \************************************************************************/

  /*! exports provided: ArrayDataSource, DataSource, SelectionModel, UniqueSelectionDispatcher, getMultipleValuesInSingleSelectionError, isDataSource */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015CollectionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function () {
      return ArrayDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataSource", function () {
      return DataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionModel", function () {
      return SelectionModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function () {
      return UniqueSelectionDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function () {
      return getMultipleValuesInSingleSelectionError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isDataSource", function () {
      return isDataSource;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var DataSource = function DataSource() {
      _classCallCheck(this, DataSource);
    };
    /** Checks whether an object is a data source. */


    function isDataSource(value) {
      // Check if the value is a DataSource by observing if it has a connect function. Cannot
      // be checked as an `instanceof DataSource` since people could create their own sources
      // that match the interface, but don't extend DataSource.
      return value && typeof value.connect === 'function';
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** DataSource wrapper for a native array. */


    var ArrayDataSource = /*#__PURE__*/function (_DataSource) {
      _inherits(ArrayDataSource, _DataSource);

      var _super = _createSuper(ArrayDataSource);

      function ArrayDataSource(_data) {
        var _this;

        _classCallCheck(this, ArrayDataSource);

        _this = _super.call(this);
        _this._data = _data;
        return _this;
      }

      _createClass(ArrayDataSource, [{
        key: "connect",
        value: function connect() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["isObservable"])(this._data) ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
        }
      }, {
        key: "disconnect",
        value: function disconnect() {}
      }]);

      return ArrayDataSource;
    }(DataSource);
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Class to be used to power selecting one or more options from a list.
     */


    var SelectionModel = /*#__PURE__*/function () {
      function SelectionModel() {
        var _this2 = this;

        var _multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        var initiallySelectedValues = arguments.length > 1 ? arguments[1] : undefined;

        var _emitChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        _classCallCheck(this, SelectionModel);

        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /** Currently-selected values. */

        this._selection = new Set();
        /** Keeps track of the deselected options that haven't been emitted by the change event. */

        this._deselectedToEmit = [];
        /** Keeps track of the selected options that haven't been emitted by the change event. */

        this._selectedToEmit = [];
        /** Event emitted when the value has changed. */

        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

        if (initiallySelectedValues && initiallySelectedValues.length) {
          if (_multiple) {
            initiallySelectedValues.forEach(function (value) {
              return _this2._markSelected(value);
            });
          } else {
            this._markSelected(initiallySelectedValues[0]);
          } // Clear the array in order to avoid firing the change event for preselected values.


          this._selectedToEmit.length = 0;
        }
      }
      /** Selected values. */


      _createClass(SelectionModel, [{
        key: "select",

        /**
         * Selects a value or an array of values.
         */
        value: function select() {
          var _this3 = this;

          for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
            values[_key] = arguments[_key];
          }

          this._verifyValueAssignment(values);

          values.forEach(function (value) {
            return _this3._markSelected(value);
          });

          this._emitChangeEvent();
        }
        /**
         * Deselects a value or an array of values.
         */

      }, {
        key: "deselect",
        value: function deselect() {
          var _this4 = this;

          for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            values[_key2] = arguments[_key2];
          }

          this._verifyValueAssignment(values);

          values.forEach(function (value) {
            return _this4._unmarkSelected(value);
          });

          this._emitChangeEvent();
        }
        /**
         * Toggles a value between selected and deselected.
         */

      }, {
        key: "toggle",
        value: function toggle(value) {
          this.isSelected(value) ? this.deselect(value) : this.select(value);
        }
        /**
         * Clears all of the selected values.
         */

      }, {
        key: "clear",
        value: function clear() {
          this._unmarkAll();

          this._emitChangeEvent();
        }
        /**
         * Determines whether a value is selected.
         */

      }, {
        key: "isSelected",
        value: function isSelected(value) {
          return this._selection.has(value);
        }
        /**
         * Determines whether the model does not have a value.
         */

      }, {
        key: "isEmpty",
        value: function isEmpty() {
          return this._selection.size === 0;
        }
        /**
         * Determines whether the model has a value.
         */

      }, {
        key: "hasValue",
        value: function hasValue() {
          return !this.isEmpty();
        }
        /**
         * Sorts the selected values based on a predicate function.
         */

      }, {
        key: "sort",
        value: function sort(predicate) {
          if (this._multiple && this.selected) {
            this._selected.sort(predicate);
          }
        }
        /**
         * Gets whether multiple values can be selected.
         */

      }, {
        key: "isMultipleSelection",
        value: function isMultipleSelection() {
          return this._multiple;
        }
        /** Emits a change event and clears the records of selected and deselected values. */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          // Clear the selected values so they can be re-cached.
          this._selected = null;

          if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
              source: this,
              added: this._selectedToEmit,
              removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
          }
        }
        /** Selects a value. */

      }, {
        key: "_markSelected",
        value: function _markSelected(value) {
          if (!this.isSelected(value)) {
            if (!this._multiple) {
              this._unmarkAll();
            }

            this._selection.add(value);

            if (this._emitChanges) {
              this._selectedToEmit.push(value);
            }
          }
        }
        /** Deselects a value. */

      }, {
        key: "_unmarkSelected",
        value: function _unmarkSelected(value) {
          if (this.isSelected(value)) {
            this._selection["delete"](value);

            if (this._emitChanges) {
              this._deselectedToEmit.push(value);
            }
          }
        }
        /** Clears out the selected values. */

      }, {
        key: "_unmarkAll",
        value: function _unmarkAll() {
          var _this5 = this;

          if (!this.isEmpty()) {
            this._selection.forEach(function (value) {
              return _this5._unmarkSelected(value);
            });
          }
        }
        /**
         * Verifies the value assignment and throws an error if the specified value array is
         * including multiple values while the selection model is not supporting multiple values.
         */

      }, {
        key: "_verifyValueAssignment",
        value: function _verifyValueAssignment(values) {
          if (values.length > 1 && !this._multiple) {
            throw getMultipleValuesInSingleSelectionError();
          }
        }
      }, {
        key: "selected",
        get: function get() {
          if (!this._selected) {
            this._selected = Array.from(this._selection.values());
          }

          return this._selected;
        }
      }]);

      return SelectionModel;
    }();
    /**
     * Returns an error that reports that multiple values are passed into a selection model
     * with a single value.
     * @docs-private
     */


    function getMultipleValuesInSingleSelectionError() {
      return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Class to coordinate unique selection based on name.
     * Intended to be consumed as an Angular service.
     * This service is needed because native radio change events are only fired on the item currently
     * being selected, and we still need to uncheck the previous selection.
     *
     * This service does not *store* any IDs and names because they may change at any time, so it is
     * less error-prone if they are simply passed through when the events occur.
     */


    var UniqueSelectionDispatcher =
    /** @class */
    function () {
      var UniqueSelectionDispatcher = /*#__PURE__*/function () {
        function UniqueSelectionDispatcher() {
          _classCallCheck(this, UniqueSelectionDispatcher);

          this._listeners = [];
        }
        /**
         * Notify other items that selection for the given name has been set.
         * @param id ID of the item.
         * @param name Name of the item.
         */


        _createClass(UniqueSelectionDispatcher, [{
          key: "notify",
          value: function notify(id, name) {
            var _iterator = _createForOfIteratorHelper(this._listeners),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var listener = _step.value;
                listener(id, name);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          /**
           * Listen for future changes to item selection.
           * @return Function used to deregister listener
           */

        }, {
          key: "listen",
          value: function listen(listener) {
            var _this6 = this;

            this._listeners.push(listener);

            return function () {
              _this6._listeners = _this6._listeners.filter(function (registered) {
                return listener !== registered;
              });
            };
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._listeners = [];
          }
        }]);

        return UniqueSelectionDispatcher;
      }();

      UniqueSelectionDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function UniqueSelectionDispatcher_Factory() {
          return new UniqueSelectionDispatcher();
        },
        token: UniqueSelectionDispatcher,
        providedIn: "root"
      });
      return UniqueSelectionDispatcher;
    }()
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    ;

    UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
      return new (t || UniqueSelectionDispatcher)();
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=collections.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js ***!
    \*********************************************************************/

  /*! exports provided: Platform, PlatformModule, _getShadowRoot, _supportsShadowDom, getRtlScrollAxisType, getSupportedInputTypes, normalizePassiveListenerOptions, supportsPassiveEventListeners, supportsScrollBehavior */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015PlatformJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Platform", function () {
      return Platform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlatformModule", function () {
      return PlatformModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_getShadowRoot", function () {
      return _getShadowRoot;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function () {
      return _supportsShadowDom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function () {
      return getRtlScrollAxisType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function () {
      return getSupportedInputTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function () {
      return normalizePassiveListenerOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function () {
      return supportsPassiveEventListeners;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function () {
      return supportsScrollBehavior;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // Whether the current platform supports the V8 Break Iterator. The V8 check
    // is necessary to detect all Blink based browsers.


    var hasV8BreakIterator; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
    // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
    // the consumer is providing a polyfilled `Map`. See:
    // https://github.com/Microsoft/ChakraCore/issues/3189
    // https://github.com/angular/components/issues/15687

    try {
      hasV8BreakIterator = typeof Intl !== 'undefined' && Intl.v8BreakIterator;
    } catch (_a) {
      hasV8BreakIterator = false;
    }
    /**
     * Service to detect the current platform by comparing the userAgent strings and
     * checking browser-specific global properties.
     */


    var Platform =
    /** @class */
    function () {
      var Platform = function Platform(_platformId) {
        _classCallCheck(this, Platform);

        this._platformId = _platformId; // We want to use the Angular platform check because if the Document is shimmed
        // without the navigator, the following checks will fail. This is preferred because
        // sometimes the Document may be shimmed without the user's knowledge or intention

        /** Whether the Angular application is being rendered in the browser. */

        this.isBrowser = this._platformId ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /** Whether the current browser is Microsoft Edge. */

        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /** Whether the current rendering engine is Microsoft Trident. */

        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent); // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.

        /** Whether the current rendering engine is Blink. */

        this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT; // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.

        /** Whether the current rendering engine is WebKit. */

        this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /** Whether the current platform is Apple iOS. */

        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window); // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.

        /** Whether the current browser is Firefox. */

        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /** Whether the current platform is Android. */
        // Trident on mobile adds the android platform to the userAgent to trick detections.

        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT; // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.

        /** Whether the current browser is Safari. */

        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
      };

      Platform.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function Platform_Factory() {
          return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
        },
        token: Platform,
        providedIn: "root"
      });

      Platform.ctorParameters = function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      };

      return Platform;
    }()
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Platform, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      }, null);
    })();

    ;

    Platform.ɵfac = function Platform_Factory(t) {
      return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var PlatformModule =
    /** @class */
    function () {
      var PlatformModule = function PlatformModule() {
        _classCallCheck(this, PlatformModule);
      };

      return PlatformModule;
    }()
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
      }], null, null);
    })();

    ;
    PlatformModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PlatformModule
    });
    PlatformModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PlatformModule_Factory(t) {
        return new (t || PlatformModule)();
      }
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Cached result Set of input types support by the current browser. */

    var supportedInputTypes;
    /** Types of `<input>` that *might* be supported. */

    var candidateInputTypes = [// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
    /** @returns The input types supported by this browser. */

    function getSupportedInputTypes() {
      // Result is cached.
      if (supportedInputTypes) {
        return supportedInputTypes;
      } // We can't check if an input type is not supported until we're on the browser, so say that
      // everything is supported when not on the browser. We don't use `Platform` here since it's
      // just a helper function and can't inject it.


      if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
      }

      var featureTestInput = document.createElement('input');
      supportedInputTypes = new Set(candidateInputTypes.filter(function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
      }));
      return supportedInputTypes;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Cached result of whether the user's browser supports passive event listeners. */


    var supportsPassiveEvents;
    /**
     * Checks whether the user's browser supports passive event listeners.
     * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
     */

    function supportsPassiveEventListeners() {
      if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
          window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
            get: function get() {
              return supportsPassiveEvents = true;
            }
          }));
        } finally {
          supportsPassiveEvents = supportsPassiveEvents || false;
        }
      }

      return supportsPassiveEvents;
    }
    /**
     * Normalizes an `AddEventListener` object to something that can be passed
     * to `addEventListener` on any browser, no matter whether it supports the
     * `options` parameter.
     * @param options Object to be normalized.
     */


    function normalizePassiveListenerOptions(options) {
      return supportsPassiveEventListeners() ? options : !!options.capture;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */


    var rtlScrollAxisType;
    /** Check whether the browser supports scroll behaviors. */

    function supportsScrollBehavior() {
      return !!(typeof document == 'object' && 'scrollBehavior' in document.documentElement.style);
    }
    /**
     * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
     * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
     */


    function getRtlScrollAxisType() {
      // We can't check unless we're on the browser. Just assume 'normal' if we're not.
      if (typeof document !== 'object' || !document) {
        return 0
        /* NORMAL */
        ;
      }

      if (rtlScrollAxisType == null) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        var scrollContainer = document.createElement('div');
        var containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        var content = document.createElement('div');
        var contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = 0
        /* NORMAL */
        ; // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.

        if (scrollContainer.scrollLeft === 0) {
          // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
          // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
          // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
          // return 0 when we read it again.
          scrollContainer.scrollLeft = 1;
          rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? 1
          /* NEGATED */
          : 2
          /* INVERTED */
          ;
        }

        scrollContainer.parentNode.removeChild(scrollContainer);
      }

      return rtlScrollAxisType;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var shadowDomIsSupported;
    /** Checks whether the user's browser support Shadow DOM. */

    function _supportsShadowDom() {
      if (shadowDomIsSupported == null) {
        var head = typeof document !== 'undefined' ? document.head : null;
        shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
      }

      return shadowDomIsSupported;
    }
    /** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */


    function _getShadowRoot(element) {
      if (_supportsShadowDom()) {
        var rootNode = element.getRootNode ? element.getRootNode() : null; // Note that this should be caught by `_supportsShadowDom`, but some
        // teams have been able to hit this code path on unsupported browsers.

        if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
          return rootNode;
        }
      }

      return null;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=platform.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js ***!
    \**********************************************************************/

  /*! exports provided: CdkFixedSizeVirtualScroll, CdkScrollable, CdkScrollableModule, CdkVirtualForOf, CdkVirtualScrollViewport, DEFAULT_RESIZE_TIME, DEFAULT_SCROLL_TIME, FixedSizeVirtualScrollStrategy, ScrollDispatcher, ScrollingModule, VIRTUAL_SCROLL_STRATEGY, ViewportRuler, _fixedSizeVirtualScrollStrategyFactory */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015ScrollingJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function () {
      return CdkFixedSizeVirtualScroll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
      return CdkScrollable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollableModule", function () {
      return CdkScrollableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function () {
      return CdkVirtualForOf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function () {
      return CdkVirtualScrollViewport;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function () {
      return DEFAULT_RESIZE_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function () {
      return DEFAULT_SCROLL_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function () {
      return FixedSizeVirtualScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
      return ScrollDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingModule", function () {
      return ScrollingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function () {
      return VIRTUAL_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
      return ViewportRuler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function () {
      return _fixedSizeVirtualScrollStrategyFactory;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** The injection token used to specify the virtual scrolling strategy. */


    var _c0 = ["contentWrapper"];
    var _c1 = ["*"];
    var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Virtual scrolling strategy for lists with items of known fixed size. */

    var FixedSizeVirtualScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param itemSize The size of the items in the virtually scrolling list.
       * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
        _classCallCheck(this, FixedSizeVirtualScrollStrategy);

        this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** @docs-private Implemented as part of VirtualScrollStrategy. */

        this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        /** The attached viewport. */

        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
      }
      /**
       * Attaches this scroll strategy to a viewport.
       * @param viewport The viewport to attach this strategy to.
       */


      _createClass(FixedSizeVirtualScrollStrategy, [{
        key: "attach",
        value: function attach(viewport) {
          this._viewport = viewport;

          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /** Detaches this scroll strategy from the currently attached viewport. */

      }, {
        key: "detach",
        value: function detach() {
          this._scrolledIndexChange.complete();

          this._viewport = null;
        }
        /**
         * Update the item size and buffer size.
         * @param itemSize The size of the items in the virtually scrolling list.
         * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
         * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
         */

      }, {
        key: "updateItemAndBufferSize",
        value: function updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
          if (maxBufferPx < minBufferPx) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
          }

          this._itemSize = itemSize;
          this._minBufferPx = minBufferPx;
          this._maxBufferPx = maxBufferPx;

          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /** @docs-private Implemented as part of VirtualScrollStrategy. */

      }, {
        key: "onContentScrolled",
        value: function onContentScrolled() {
          this._updateRenderedRange();
        }
        /** @docs-private Implemented as part of VirtualScrollStrategy. */

      }, {
        key: "onDataLengthChanged",
        value: function onDataLengthChanged() {
          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /** @docs-private Implemented as part of VirtualScrollStrategy. */

      }, {
        key: "onContentRendered",
        value: function onContentRendered() {}
        /** @docs-private Implemented as part of VirtualScrollStrategy. */

      }, {
        key: "onRenderedOffsetChanged",
        value: function onRenderedOffsetChanged() {}
        /**
         * Scroll to the offset for the given index.
         * @param index The index of the element to scroll to.
         * @param behavior The ScrollBehavior to use when scrolling.
         */

      }, {
        key: "scrollToIndex",
        value: function scrollToIndex(index, behavior) {
          if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
          }
        }
        /** Update the viewport's total content size. */

      }, {
        key: "_updateTotalContentSize",
        value: function _updateTotalContentSize() {
          if (!this._viewport) {
            return;
          }

          this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
        }
        /** Update the viewport's rendered range. */

      }, {
        key: "_updateRenderedRange",
        value: function _updateRenderedRange() {
          if (!this._viewport) {
            return;
          }

          var renderedRange = this._viewport.getRenderedRange();

          var newRange = {
            start: renderedRange.start,
            end: renderedRange.end
          };

          var viewportSize = this._viewport.getViewportSize();

          var dataLength = this._viewport.getDataLength();

          var scrollOffset = this._viewport.measureScrollOffset();

          var firstVisibleIndex = scrollOffset / this._itemSize; // If user scrolls to the bottom of the list and data changes to a smaller list

          if (newRange.end > dataLength) {
            // We have to recalculate the first visible index based on new data length and viewport size.
            var maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
            var newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems)); // If first visible index changed we must update scroll offset to handle start/end buffers
            // Current range must also be adjusted to cover the new position (bottom of new list).

            if (firstVisibleIndex != newVisibleIndex) {
              firstVisibleIndex = newVisibleIndex;
              scrollOffset = newVisibleIndex * this._itemSize;
              newRange.start = Math.floor(firstVisibleIndex);
            }

            newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
          }

          var startBuffer = scrollOffset - newRange.start * this._itemSize;

          if (startBuffer < this._minBufferPx && newRange.start != 0) {
            var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
          } else {
            var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);

            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
              var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);

              if (expandEnd > 0) {
                newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
              }
            }
          }

          this._viewport.setRenderedRange(newRange);

          this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);

          this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
        }
      }]);

      return FixedSizeVirtualScrollStrategy;
    }();
    /**
     * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
     * `FixedSizeVirtualScrollStrategy` from the given directive.
     * @param fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
     *     `FixedSizeVirtualScrollStrategy` from.
     */


    function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
      return fixedSizeDir._scrollStrategy;
    }
    /** A virtual scroll strategy that supports fixed-size items. */


    var CdkFixedSizeVirtualScroll =
    /** @class */
    function () {
      var CdkFixedSizeVirtualScroll = /*#__PURE__*/function () {
        function CdkFixedSizeVirtualScroll() {
          _classCallCheck(this, CdkFixedSizeVirtualScroll);

          this._itemSize = 20;
          this._minBufferPx = 100;
          this._maxBufferPx = 200;
          /** The scroll strategy used by this directive. */

          this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
        /** The size of the items in the list (in pixels). */


        _createClass(CdkFixedSizeVirtualScroll, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
          }
        }, {
          key: "itemSize",
          get: function get() {
            return this._itemSize;
          },
          set: function set(value) {
            this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
          }
          /**
           * The minimum amount of buffer rendered beyond the viewport (in pixels).
           * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
           */

        }, {
          key: "minBufferPx",
          get: function get() {
            return this._minBufferPx;
          },
          set: function set(value) {
            this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
          }
          /**
           * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
           */

        }, {
          key: "maxBufferPx",
          get: function get() {
            return this._maxBufferPx;
          },
          set: function set(value) {
            this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
          }
        }]);

        return CdkFixedSizeVirtualScroll;
      }();

      CdkFixedSizeVirtualScroll.propDecorators = {
        itemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      return CdkFixedSizeVirtualScroll;
    }()
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkFixedSizeVirtualScroll, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'cdk-virtual-scroll-viewport[itemSize]',
          providers: [{
            provide: VIRTUAL_SCROLL_STRATEGY,
            useFactory: _fixedSizeVirtualScrollStrategyFactory,
            deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return CdkFixedSizeVirtualScroll;
            })]
          }]
        }]
      }], function () {
        return [];
      }, {
        itemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    ;

    CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
      return new (t || CdkFixedSizeVirtualScroll)();
    };

    CdkFixedSizeVirtualScroll.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkFixedSizeVirtualScroll,
      selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
      inputs: {
        itemSize: "itemSize",
        minBufferPx: "minBufferPx",
        maxBufferPx: "maxBufferPx"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return CdkFixedSizeVirtualScroll;
        })]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Time in ms to throttle the scrolling events by default. */

    var DEFAULT_SCROLL_TIME = 20;
    /**
     * Service contained all registered Scrollable references and emits an event when any one of the
     * Scrollable references emit a scrolled event.
     */

    var ScrollDispatcher =
    /** @class */
    function () {
      var ScrollDispatcher = /*#__PURE__*/function () {
        function ScrollDispatcher(_ngZone, _platform,
        /** @breaking-change 11.0.0 make document required */
        document) {
          _classCallCheck(this, ScrollDispatcher);

          this._ngZone = _ngZone;
          this._platform = _platform;
          /** Subject for notifying that a registered scrollable reference element has been scrolled. */

          this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Keeps track of the global `scroll` and `resize` subscriptions. */

          this._globalSubscription = null;
          /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */

          this._scrolledCount = 0;
          /**
           * Map of all the scrollable references that are registered with the service and their
           * scroll event subscriptions.
           */

          this.scrollContainers = new Map();
          this._document = document;
        }
        /**
         * Registers a scrollable instance with the service and listens for its scrolled events. When the
         * scrollable is scrolled, the service emits the event to its scrolled observable.
         * @param scrollable Scrollable instance to be registered.
         */


        _createClass(ScrollDispatcher, [{
          key: "register",
          value: function register(scrollable) {
            var _this7 = this;

            if (!this.scrollContainers.has(scrollable)) {
              this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(function () {
                return _this7._scrolled.next(scrollable);
              }));
            }
          }
          /**
           * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
           * @param scrollable Scrollable instance to be deregistered.
           */

        }, {
          key: "deregister",
          value: function deregister(scrollable) {
            var scrollableReference = this.scrollContainers.get(scrollable);

            if (scrollableReference) {
              scrollableReference.unsubscribe();
              this.scrollContainers["delete"](scrollable);
            }
          }
          /**
           * Returns an observable that emits an event whenever any of the registered Scrollable
           * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
           * to override the default "throttle" time.
           *
           * **Note:** in order to avoid hitting change detection for every scroll event,
           * all of the events emitted from this stream will be run outside the Angular zone.
           * If you need to update any data bindings as a result of a scroll event, you have
           * to run the callback using `NgZone.run`.
           */

        }, {
          key: "scrolled",
          value: function scrolled() {
            var _this8 = this;

            var auditTimeInMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCROLL_TIME;

            if (!this._platform.isBrowser) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            }

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              if (!_this8._globalSubscription) {
                _this8._addGlobalListener();
              } // In the case of a 0ms delay, use an observable without auditTime
              // since it does add a perceptible delay in processing overhead.


              var subscription = auditTimeInMs > 0 ? _this8._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) : _this8._scrolled.subscribe(observer);
              _this8._scrolledCount++;
              return function () {
                subscription.unsubscribe();
                _this8._scrolledCount--;

                if (!_this8._scrolledCount) {
                  _this8._removeGlobalListener();
                }
              };
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this9 = this;

            this._removeGlobalListener();

            this.scrollContainers.forEach(function (_, container) {
              return _this9.deregister(container);
            });

            this._scrolled.complete();
          }
          /**
           * Returns an observable that emits whenever any of the
           * scrollable ancestors of an element are scrolled.
           * @param elementRef Element whose ancestors to listen for.
           * @param auditTimeInMs Time to throttle the scroll events.
           */

        }, {
          key: "ancestorScrolled",
          value: function ancestorScrolled(elementRef, auditTimeInMs) {
            var ancestors = this.getAncestorScrollContainers(elementRef);
            return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (target) {
              return !target || ancestors.indexOf(target) > -1;
            }));
          }
          /** Returns all registered Scrollables that contain the provided element. */

        }, {
          key: "getAncestorScrollContainers",
          value: function getAncestorScrollContainers(elementRef) {
            var _this10 = this;

            var scrollingContainers = [];
            this.scrollContainers.forEach(function (_subscription, scrollable) {
              if (_this10._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
              }
            });
            return scrollingContainers;
          }
          /** Access injected document if available or fallback to global document reference */

        }, {
          key: "_getDocument",
          value: function _getDocument() {
            return this._document || document;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var doc = this._getDocument();

            return doc.defaultView || window;
          }
          /** Returns true if the element is contained within the provided Scrollable. */

        }, {
          key: "_scrollableContainsElement",
          value: function _scrollableContainsElement(scrollable, elementRef) {
            var element = elementRef.nativeElement;
            var scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
            // are the scrollable's element.

            do {
              if (element == scrollableElement) {
                return true;
              }
            } while (element = element.parentElement);

            return false;
          }
          /** Sets up the global scroll listeners. */

        }, {
          key: "_addGlobalListener",
          value: function _addGlobalListener() {
            var _this11 = this;

            this._globalSubscription = this._ngZone.runOutsideAngular(function () {
              var window = _this11._getWindow();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(function () {
                return _this11._scrolled.next();
              });
            });
          }
          /** Cleans up the global scroll listener. */

        }, {
          key: "_removeGlobalListener",
          value: function _removeGlobalListener() {
            if (this._globalSubscription) {
              this._globalSubscription.unsubscribe();

              this._globalSubscription = null;
            }
          }
        }]);

        return ScrollDispatcher;
      }();

      ScrollDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ScrollDispatcher_Factory() {
          return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
        },
        token: ScrollDispatcher,
        providedIn: "root"
      });

      ScrollDispatcher.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      };

      return ScrollDispatcher;
    }()
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    ;

    ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
      return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Sends an event when the directive's element is scrolled. Registers itself with the
     * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
     * can be listened to through the service.
     */


    var CdkScrollable =
    /** @class */
    function () {
      var CdkScrollable = /*#__PURE__*/function () {
        function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
          var _this12 = this;

          _classCallCheck(this, CdkScrollable);

          this.elementRef = elementRef;
          this.scrollDispatcher = scrollDispatcher;
          this.ngZone = ngZone;
          this.dir = dir;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            return _this12.ngZone.runOutsideAngular(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this12.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this12._destroyed)).subscribe(observer);
            });
          });
        }

        _createClass(CdkScrollable, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.scrollDispatcher.register(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.scrollDispatcher.deregister(this);

            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Returns observable that emits when a scroll event is fired on the host element. */

        }, {
          key: "elementScrolled",
          value: function elementScrolled() {
            return this._elementScrolled;
          }
          /** Gets the ElementRef for the viewport. */

        }, {
          key: "getElementRef",
          value: function getElementRef() {
            return this.elementRef;
          }
          /**
           * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
           * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
           * left and right always refer to the left and right side of the scrolling container irrespective
           * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
           * in an RTL context.
           * @param options specified the offsets to scroll to.
           */

        }, {
          key: "scrollTo",
          value: function scrollTo(options) {
            var el = this.elementRef.nativeElement;
            var isRtl = this.dir && this.dir.value == 'rtl'; // Rewrite start & end offsets as right or left offsets.

            if (options.left == null) {
              options.left = isRtl ? options.end : options.start;
            }

            if (options.right == null) {
              options.right = isRtl ? options.start : options.end;
            } // Rewrite the bottom offset as a top offset.


            if (options.bottom != null) {
              options.top = el.scrollHeight - el.clientHeight - options.bottom;
            } // Rewrite the right offset as a left offset.


            if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != 0
            /* NORMAL */
            ) {
                if (options.left != null) {
                  options.right = el.scrollWidth - el.clientWidth - options.left;
                }

                if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
                /* INVERTED */
                ) {
                    options.left = options.right;
                  } else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
                /* NEGATED */
                ) {
                    options.left = options.right ? -options.right : options.right;
                  }
              } else {
              if (options.right != null) {
                options.left = el.scrollWidth - el.clientWidth - options.right;
              }
            }

            this._applyScrollToOptions(options);
          }
        }, {
          key: "_applyScrollToOptions",
          value: function _applyScrollToOptions(options) {
            var el = this.elementRef.nativeElement;

            if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
              el.scrollTo(options);
            } else {
              if (options.top != null) {
                el.scrollTop = options.top;
              }

              if (options.left != null) {
                el.scrollLeft = options.left;
              }
            }
          }
          /**
           * Measures the scroll offset relative to the specified edge of the viewport. This method can be
           * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
           * about what scrollLeft means in RTL. The values returned by this method are normalized such that
           * left and right always refer to the left and right side of the scrolling container irrespective
           * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
           * in an RTL context.
           * @param from The edge to measure from.
           */

        }, {
          key: "measureScrollOffset",
          value: function measureScrollOffset(from) {
            var LEFT = 'left';
            var RIGHT = 'right';
            var el = this.elementRef.nativeElement;

            if (from == 'top') {
              return el.scrollTop;
            }

            if (from == 'bottom') {
              return el.scrollHeight - el.clientHeight - el.scrollTop;
            } // Rewrite start & end as left or right offsets.


            var isRtl = this.dir && this.dir.value == 'rtl';

            if (from == 'start') {
              from = isRtl ? RIGHT : LEFT;
            } else if (from == 'end') {
              from = isRtl ? LEFT : RIGHT;
            }

            if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
            /* INVERTED */
            ) {
                // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
                // 0 when scrolled all the way right.
                if (from == LEFT) {
                  return el.scrollWidth - el.clientWidth - el.scrollLeft;
                } else {
                  return el.scrollLeft;
                }
              } else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
            /* NEGATED */
            ) {
                // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
                // 0 when scrolled all the way right.
                if (from == LEFT) {
                  return el.scrollLeft + el.scrollWidth - el.clientWidth;
                } else {
                  return -el.scrollLeft;
                }
              } else {
              // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
              // (scrollWidth - clientWidth) when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollLeft;
              } else {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
              }
            }
          }
        }]);

        return CdkScrollable;
      }();

      CdkScrollable.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: ScrollDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };

      return CdkScrollable;
    }()
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdk-scrollable], [cdkScrollable]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: ScrollDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();

    ;

    CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
      return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8));
    };

    CdkScrollable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkScrollable,
      selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Time in ms to throttle the resize events by default. */

    var DEFAULT_RESIZE_TIME = 20;
    /**
     * Simple utility for getting the bounds of the browser viewport.
     * @docs-private
     */

    var ViewportRuler =
    /** @class */
    function () {
      var ViewportRuler = /*#__PURE__*/function () {
        function ViewportRuler(_platform, ngZone,
        /** @breaking-change 11.0.0 make document required */
        document) {
          var _this13 = this;

          _classCallCheck(this, ViewportRuler);

          this._platform = _platform;
          this._document = document;
          ngZone.runOutsideAngular(function () {
            var window = _this13._getWindow();

            _this13._change = _platform.isBrowser ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange')) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(); // Note that we need to do the subscription inside `runOutsideAngular`
            // since subscribing is what causes the event listener to be added.

            _this13._invalidateCache = _this13.change().subscribe(function () {
              return _this13._updateViewportSize();
            });
          });
        }

        _createClass(ViewportRuler, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._invalidateCache.unsubscribe();
          }
          /** Returns the viewport's width and height. */

        }, {
          key: "getViewportSize",
          value: function getViewportSize() {
            if (!this._viewportSize) {
              this._updateViewportSize();
            }

            var output = {
              width: this._viewportSize.width,
              height: this._viewportSize.height
            }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

            if (!this._platform.isBrowser) {
              this._viewportSize = null;
            }

            return output;
          }
          /** Gets a ClientRect for the viewport's bounds. */

        }, {
          key: "getViewportRect",
          value: function getViewportRect() {
            // Use the document element's bounding rect rather than the window scroll properties
            // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
            // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
            // conceptual viewports. Under most circumstances these viewports are equivalent, but they
            // can disagree when the page is pinch-zoomed (on devices that support touch).
            // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
            // We use the documentElement instead of the body because, by default (without a css reset)
            // browsers typically give the document body an 8px margin, which is not included in
            // getBoundingClientRect().
            var scrollPosition = this.getViewportScrollPosition();

            var _this$getViewportSize = this.getViewportSize(),
                width = _this$getViewportSize.width,
                height = _this$getViewportSize.height;

            return {
              top: scrollPosition.top,
              left: scrollPosition.left,
              bottom: scrollPosition.top + height,
              right: scrollPosition.left + width,
              height: height,
              width: width
            };
          }
          /** Gets the (top, left) scroll position of the viewport. */

        }, {
          key: "getViewportScrollPosition",
          value: function getViewportScrollPosition() {
            // While we can get a reference to the fake document
            // during SSR, it doesn't have getBoundingClientRect.
            if (!this._platform.isBrowser) {
              return {
                top: 0,
                left: 0
              };
            } // The top-left-corner of the viewport is determined by the scroll position of the document
            // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
            // whether `document.body` or `document.documentElement` is the scrolled element, so reading
            // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
            // `document.documentElement` works consistently, where the `top` and `left` values will
            // equal negative the scroll position.


            var document = this._getDocument();

            var window = this._getWindow();

            var documentElement = document.documentElement;
            var documentRect = documentElement.getBoundingClientRect();
            var top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
            var left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
            return {
              top: top,
              left: left
            };
          }
          /**
           * Returns a stream that emits whenever the size of the viewport changes.
           * @param throttleTime Time in milliseconds to throttle the stream.
           */

        }, {
          key: "change",
          value: function change() {
            var throttleTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_RESIZE_TIME;
            return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
          }
          /** Access injected document if available or fallback to global document reference */

        }, {
          key: "_getDocument",
          value: function _getDocument() {
            return this._document || document;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var doc = this._getDocument();

            return doc.defaultView || window;
          }
          /** Updates the cached viewport size. */

        }, {
          key: "_updateViewportSize",
          value: function _updateViewportSize() {
            var window = this._getWindow();

            this._viewportSize = this._platform.isBrowser ? {
              width: window.innerWidth,
              height: window.innerHeight
            } : {
              width: 0,
              height: 0
            };
          }
        }]);

        return ViewportRuler;
      }();

      ViewportRuler.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ViewportRuler_Factory() {
          return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
        },
        token: ViewportRuler,
        providedIn: "root"
      });

      ViewportRuler.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      };

      return ViewportRuler;
    }()
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewportRuler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    ;

    ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
      return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Checks if the given ranges are equal. */


    function rangesEqual(r1, r2) {
      return r1.start == r2.start && r1.end == r2.end;
    }
    /**
     * Scheduler to be used for scroll events. Needs to fall back to
     * something that doesn't rely on requestAnimationFrame on environments
     * that don't support it (e.g. server-side rendering).
     */


    var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
    /** A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`. */

    var CdkVirtualScrollViewport =
    /** @class */
    function () {
      var CdkVirtualScrollViewport = /*#__PURE__*/function (_CdkScrollable) {
        _inherits(CdkVirtualScrollViewport, _CdkScrollable);

        var _super2 = _createSuper(CdkVirtualScrollViewport);

        function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher,
        /**
         * @deprecated `viewportRuler` parameter to become required.
         * @breaking-change 11.0.0
         */
        viewportRuler) {
          var _this14;

          _classCallCheck(this, CdkVirtualScrollViewport);

          _this14 = _super2.call(this, elementRef, scrollDispatcher, ngZone, dir);
          _this14.elementRef = elementRef;
          _this14._changeDetectorRef = _changeDetectorRef;
          _this14._scrollStrategy = _scrollStrategy;
          /** Emits when the viewport is detached from a CdkVirtualForOf. */

          _this14._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Emits when the rendered range changes. */

          _this14._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          _this14._orientation = 'vertical'; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
          // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
          // depending on how the strategy calculates the scrolled index, it may come at a cost to
          // performance.

          /** Emits when the index of the first element visible in the viewport changes. */

          _this14.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            return _this14._scrollStrategy.scrolledIndexChange.subscribe(function (index) {
              return Promise.resolve().then(function () {
                return _this14.ngZone.run(function () {
                  return observer.next(index);
                });
              });
            });
          });
          /** A stream that emits whenever the rendered range changes. */

          _this14.renderedRangeStream = _this14._renderedRangeSubject.asObservable();
          /**
           * The total size of all content (in pixels), including content that is not currently rendered.
           */

          _this14._totalContentSize = 0;
          /** A string representing the `style.width` property value to be used for the spacer element. */

          _this14._totalContentWidth = '';
          /** A string representing the `style.height` property value to be used for the spacer element. */

          _this14._totalContentHeight = '';
          /** The currently rendered range of indices. */

          _this14._renderedRange = {
            start: 0,
            end: 0
          };
          /** The length of the data bound to this viewport (in number of items). */

          _this14._dataLength = 0;
          /** The size of the viewport (in pixels). */

          _this14._viewportSize = 0;
          /** The last rendered content offset that was set. */

          _this14._renderedContentOffset = 0;
          /**
           * Whether the last rendered content offset was to the end of the content (and therefore needs to
           * be rewritten as an offset to the start of the content).
           */

          _this14._renderedContentOffsetNeedsRewrite = false;
          /** Whether there is a pending change detection cycle. */

          _this14._isChangeDetectionPending = false;
          /** A list of functions to run after the next change detection cycle. */

          _this14._runAfterChangeDetection = [];
          /** Subscription to changes in the viewport size. */

          _this14._viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;

          if (!_scrollStrategy) {
            throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
          } // @breaking-change 11.0.0 Remove null check for `viewportRuler`.


          if (viewportRuler) {
            _this14._viewportChanges = viewportRuler.change().subscribe(function () {
              _this14.checkViewportSize();
            });
          }

          return _this14;
        }
        /** The direction the viewport scrolls. */


        _createClass(CdkVirtualScrollViewport, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnInit", this).call(this); // It's still too early to measure the viewport at this point. Deferring with a promise allows
            // the Viewport to be rendered with the correct size before we measure. We run this outside the
            // zone to avoid causing more change detection cycles. We handle the change detection loop
            // ourselves instead.


            this.ngZone.runOutsideAngular(function () {
              return Promise.resolve().then(function () {
                _this15._measureViewportSize();

                _this15._scrollStrategy.attach(_this15);

                _this15.elementScrolled().pipe( // Start off with a fake scroll event so we properly detect our initial position.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), // Collect multiple events into one until the next animation frame. This way if
                // there are multiple scroll events in the same frame we only need to recheck
                // our layout once.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(function () {
                  return _this15._scrollStrategy.onContentScrolled();
                });

                _this15._markChangeDetectionNeeded();
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.detach();

            this._scrollStrategy.detach(); // Complete all subjects


            this._renderedRangeSubject.complete();

            this._detachedSubject.complete();

            this._viewportChanges.unsubscribe();

            _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnDestroy", this).call(this);
          }
          /** Attaches a `CdkVirtualForOf` to this viewport. */

        }, {
          key: "attach",
          value: function attach(forOf) {
            var _this16 = this;

            if (this._forOf) {
              throw Error('CdkVirtualScrollViewport is already attached.');
            } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
            // changes. Run outside the zone to avoid triggering change detection, since we're managing the
            // change detection loop ourselves.


            this.ngZone.runOutsideAngular(function () {
              _this16._forOf = forOf;

              _this16._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this16._detachedSubject)).subscribe(function (data) {
                var newLength = data.length;

                if (newLength !== _this16._dataLength) {
                  _this16._dataLength = newLength;

                  _this16._scrollStrategy.onDataLengthChanged();
                }

                _this16._doChangeDetection();
              });
            });
          }
          /** Detaches the current `CdkVirtualForOf`. */

        }, {
          key: "detach",
          value: function detach() {
            this._forOf = null;

            this._detachedSubject.next();
          }
          /** Gets the length of the data bound to this viewport (in number of items). */

        }, {
          key: "getDataLength",
          value: function getDataLength() {
            return this._dataLength;
          }
          /** Gets the size of the viewport (in pixels). */

        }, {
          key: "getViewportSize",
          value: function getViewportSize() {
            return this._viewportSize;
          } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
          // cycle happens. I'm being careful to only call it after the render cycle is complete and before
          // setting it to something else, but its error prone and should probably be split into
          // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

          /** Get the current rendered range of items. */

        }, {
          key: "getRenderedRange",
          value: function getRenderedRange() {
            return this._renderedRange;
          }
          /**
           * Sets the total size of all content (in pixels), including content that is not currently
           * rendered.
           */

        }, {
          key: "setTotalContentSize",
          value: function setTotalContentSize(size) {
            if (this._totalContentSize !== size) {
              this._totalContentSize = size;

              this._calculateSpacerSize();

              this._markChangeDetectionNeeded();
            }
          }
          /** Sets the currently rendered range of indices. */

        }, {
          key: "setRenderedRange",
          value: function setRenderedRange(range) {
            var _this17 = this;

            if (!rangesEqual(this._renderedRange, range)) {
              this._renderedRangeSubject.next(this._renderedRange = range);

              this._markChangeDetectionNeeded(function () {
                return _this17._scrollStrategy.onContentRendered();
              });
            }
          }
          /**
           * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
           */

        }, {
          key: "getOffsetToRenderedContentStart",
          value: function getOffsetToRenderedContentStart() {
            return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
          }
          /**
           * Sets the offset from the start of the viewport to either the start or end of the rendered data
           * (in pixels).
           */

        }, {
          key: "setRenderedContentOffset",
          value: function setRenderedContentOffset(offset) {
            var _this18 = this;

            var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'to-start';
            // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
            // in the negative direction.
            var isRtl = this.dir && this.dir.value == 'rtl';
            var isHorizontal = this.orientation == 'horizontal';
            var axis = isHorizontal ? 'X' : 'Y';
            var axisDirection = isHorizontal && isRtl ? -1 : 1;
            var transform = "translate".concat(axis, "(").concat(Number(axisDirection * offset), "px)");
            this._renderedContentOffset = offset;

            if (to === 'to-end') {
              transform += " translate".concat(axis, "(-100%)"); // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
              // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
              // expand upward).

              this._renderedContentOffsetNeedsRewrite = true;
            }

            if (this._renderedContentTransform != transform) {
              // We know this value is safe because we parse `offset` with `Number()` before passing it
              // into the string.
              this._renderedContentTransform = transform;

              this._markChangeDetectionNeeded(function () {
                if (_this18._renderedContentOffsetNeedsRewrite) {
                  _this18._renderedContentOffset -= _this18.measureRenderedContentSize();
                  _this18._renderedContentOffsetNeedsRewrite = false;

                  _this18.setRenderedContentOffset(_this18._renderedContentOffset);
                } else {
                  _this18._scrollStrategy.onRenderedOffsetChanged();
                }
              });
            }
          }
          /**
           * Scrolls to the given offset from the start of the viewport. Please note that this is not always
           * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
           * direction, this would be the equivalent of setting a fictional `scrollRight` property.
           * @param offset The offset to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
           */

        }, {
          key: "scrollToOffset",
          value: function scrollToOffset(offset) {
            var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
            var options = {
              behavior: behavior
            };

            if (this.orientation === 'horizontal') {
              options.start = offset;
            } else {
              options.top = offset;
            }

            this.scrollTo(options);
          }
          /**
           * Scrolls to the offset for the given index.
           * @param index The index of the element to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
           */

        }, {
          key: "scrollToIndex",
          value: function scrollToIndex(index) {
            var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

            this._scrollStrategy.scrollToIndex(index, behavior);
          }
          /**
           * Gets the current scroll offset from the start of the viewport (in pixels).
           * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
           *     in horizontal mode.
           */

        }, {
          key: "measureScrollOffset",
          value: function measureScrollOffset(from) {
            return from ? _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, from) : _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, this.orientation === 'horizontal' ? 'start' : 'top');
          }
          /** Measure the combined size of all of the rendered items. */

        }, {
          key: "measureRenderedContentSize",
          value: function measureRenderedContentSize() {
            var contentEl = this._contentWrapper.nativeElement;
            return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
          }
          /**
           * Measure the total combined size of the given range. Throws if the range includes items that are
           * not rendered.
           */

        }, {
          key: "measureRangeSize",
          value: function measureRangeSize(range) {
            if (!this._forOf) {
              return 0;
            }

            return this._forOf.measureRangeSize(range, this.orientation);
          }
          /** Update the viewport dimensions and re-render. */

        }, {
          key: "checkViewportSize",
          value: function checkViewportSize() {
            // TODO: Cleanup later when add logic for handling content resize
            this._measureViewportSize();

            this._scrollStrategy.onDataLengthChanged();
          }
          /** Measure the viewport size. */

        }, {
          key: "_measureViewportSize",
          value: function _measureViewportSize() {
            var viewportEl = this.elementRef.nativeElement;
            this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
          }
          /** Queue up change detection to run. */

        }, {
          key: "_markChangeDetectionNeeded",
          value: function _markChangeDetectionNeeded(runAfter) {
            var _this19 = this;

            if (runAfter) {
              this._runAfterChangeDetection.push(runAfter);
            } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
            // properties sequentially we only have to run `_doChangeDetection` once at the end.


            if (!this._isChangeDetectionPending) {
              this._isChangeDetectionPending = true;
              this.ngZone.runOutsideAngular(function () {
                return Promise.resolve().then(function () {
                  _this19._doChangeDetection();
                });
              });
            }
          }
          /** Run change detection. */

        }, {
          key: "_doChangeDetection",
          value: function _doChangeDetection() {
            var _this20 = this;

            this._isChangeDetectionPending = false; // Apply the content transform. The transform can't be set via an Angular binding because
            // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
            // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
            // the `Number` function first to coerce it to a numeric value.

            this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
            // from the root, since the repeated items are content projected in. Calling `detectChanges`
            // instead does not properly check the projected content.

            this.ngZone.run(function () {
              return _this20._changeDetectorRef.markForCheck();
            });
            var runAfterChangeDetection = this._runAfterChangeDetection;
            this._runAfterChangeDetection = [];

            var _iterator2 = _createForOfIteratorHelper(runAfterChangeDetection),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var fn = _step2.value;
                fn();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          /** Calculates the `style.width` and `style.height` for the spacer element. */

        }, {
          key: "_calculateSpacerSize",
          value: function _calculateSpacerSize() {
            this._totalContentHeight = this.orientation === 'horizontal' ? '' : "".concat(this._totalContentSize, "px");
            this._totalContentWidth = this.orientation === 'horizontal' ? "".concat(this._totalContentSize, "px") : '';
          }
        }, {
          key: "orientation",
          get: function get() {
            return this._orientation;
          },
          set: function set(orientation) {
            if (this._orientation !== orientation) {
              this._orientation = orientation;

              this._calculateSpacerSize();
            }
          }
        }]);

        return CdkVirtualScrollViewport;
      }(CdkScrollable);

      CdkVirtualScrollViewport.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [VIRTUAL_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: ScrollDispatcher
        }, {
          type: ViewportRuler,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };

      CdkVirtualScrollViewport.propDecorators = {
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrolledIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        _contentWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['contentWrapper', {
            "static": true
          }]
        }]
      };
      return CdkVirtualScrollViewport;
    }()
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualScrollViewport, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'cdk-virtual-scroll-viewport',
          template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
          host: {
            'class': 'cdk-virtual-scroll-viewport',
            '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
            '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          providers: [{
            provide: CdkScrollable,
            useExisting: CdkVirtualScrollViewport
          }],
          styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [VIRTUAL_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: ScrollDispatcher
        }, {
          type: ViewportRuler,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        scrolledIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _contentWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['contentWrapper', {
            "static": true
          }]
        }]
      });
    })();

    ;

    CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
      return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ViewportRuler, 8));
    };

    CdkVirtualScrollViewport.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CdkVirtualScrollViewport,
      selectors: [["cdk-virtual-scroll-viewport"]],
      viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
        }
      },
      hostAttrs: [1, "cdk-virtual-scroll-viewport"],
      hostVars: 4,
      hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
        }
      },
      inputs: {
        orientation: "orientation"
      },
      outputs: {
        scrolledIndexChange: "scrolledIndexChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: CdkScrollable,
        useExisting: CdkVirtualScrollViewport
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 4,
      consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
      template: function CdkVirtualScrollViewport_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
        }
      },
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Helper to extract size from a DOM Node. */

    function getSize(orientation, node) {
      var el = node;

      if (!el.getBoundingClientRect) {
        return 0;
      }

      var rect = el.getBoundingClientRect();
      return orientation == 'horizontal' ? rect.width : rect.height;
    }
    /**
     * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
     * container.
     */


    var CdkVirtualForOf =
    /** @class */
    function () {
      var CdkVirtualForOf = /*#__PURE__*/function () {
        function CdkVirtualForOf(
        /** The view container to add items to. */
        _viewContainerRef,
        /** The template to use when stamping out new items. */
        _template,
        /** The set of available differs. */
        _differs,
        /** The virtual scrolling viewport that these items are being rendered in. */
        _viewport, ngZone) {
          var _this21 = this;

          _classCallCheck(this, CdkVirtualForOf);

          this._viewContainerRef = _viewContainerRef;
          this._template = _template;
          this._differs = _differs;
          this._viewport = _viewport;
          /** Emits when the rendered view of the data changes. */

          this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Subject that emits when a new DataSource instance is given. */

          this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * The size of the cache used to store templates that are not being used for re-use later.
           * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
           */

          this.cdkVirtualForTemplateCacheSize = 20;
          /** Emits whenever the data in the current DataSource changes. */

          this.dataStream = this._dataSourceChanges.pipe( // Start off with null `DataSource`.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), // Bundle up the previous and current data sources so we can work with both.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
          // new one, passing back a stream of data changes which we run through `switchMap` to give
          // us a data stream that emits the latest data from whatever the current `DataSource` is.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                prev = _ref2[0],
                cur = _ref2[1];

            return _this21._changeDataSource(prev, cur);
          }), // Replay the last emitted data when someone subscribes.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
          /** The differ used to calculate changes to the data. */

          this._differ = null;
          /**
           * The template cache used to hold on ot template instancess that have been stamped out, but don't
           * currently need to be rendered. These instances will be reused in the future rather than
           * stamping out brand new ones.
           */

          this._templateCache = [];
          /** Whether the rendered data should be updated during the next ngDoCheck cycle. */

          this._needsUpdate = false;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.dataStream.subscribe(function (data) {
            _this21._data = data;

            _this21._onRenderedDataChange();
          });

          this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (range) {
            _this21._renderedRange = range;
            ngZone.run(function () {
              return _this21.viewChange.next(_this21._renderedRange);
            });

            _this21._onRenderedDataChange();
          });

          this._viewport.attach(this);
        }
        /** The DataSource to display. */


        _createClass(CdkVirtualForOf, [{
          key: "measureRangeSize",

          /**
           * Measures the combined size (width for horizontal orientation, height for vertical) of all items
           * in the specified range. Throws an error if the range includes items that are not currently
           * rendered.
           */
          value: function measureRangeSize(range, orientation) {
            if (range.start >= range.end) {
              return 0;
            }

            if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
              throw Error("Error: attempted to measure an item that isn't rendered.");
            } // The index into the list of rendered views for the first item in the range.


            var renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

            var rangeLen = range.end - range.start; // Loop over all root nodes for all items in the range and sum up their size.

            var totalSize = 0;
            var i = rangeLen;

            while (i--) {
              var view = this._viewContainerRef.get(i + renderedStartIndex);

              var j = view ? view.rootNodes.length : 0;

              while (j--) {
                totalSize += getSize(orientation, view.rootNodes[j]);
              }
            }

            return totalSize;
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this._differ && this._needsUpdate) {
              // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
              // this list being rendered (can use simpler algorithm) vs needs update due to data actually
              // changing (need to do this diff).
              var changes = this._differ.diff(this._renderedItems);

              if (!changes) {
                this._updateContext();
              } else {
                this._applyChanges(changes);
              }

              this._needsUpdate = false;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._viewport.detach();

            this._dataSourceChanges.next();

            this._dataSourceChanges.complete();

            this.viewChange.complete();

            this._destroyed.next();

            this._destroyed.complete();

            var _iterator3 = _createForOfIteratorHelper(this._templateCache),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var view = _step3.value;
                view.destroy();
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
          /** React to scroll state changes in the viewport. */

        }, {
          key: "_onRenderedDataChange",
          value: function _onRenderedDataChange() {
            if (!this._renderedRange) {
              return;
            }

            this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);

            if (!this._differ) {
              this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
            }

            this._needsUpdate = true;
          }
          /** Swap out one `DataSource` for another. */

        }, {
          key: "_changeDataSource",
          value: function _changeDataSource(oldDs, newDs) {
            if (oldDs) {
              oldDs.disconnect(this);
            }

            this._needsUpdate = true;
            return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
          }
          /** Update the `CdkVirtualForOfContext` for all views. */

        }, {
          key: "_updateContext",
          value: function _updateContext() {
            var count = this._data.length;
            var i = this._viewContainerRef.length;

            while (i--) {
              var view = this._viewContainerRef.get(i);

              view.context.index = this._renderedRange.start + i;
              view.context.count = count;

              this._updateComputedContextProperties(view.context);

              view.detectChanges();
            }
          }
          /** Apply changes to the DOM. */

        }, {
          key: "_applyChanges",
          value: function _applyChanges(changes) {
            var _this22 = this;

            // Rearrange the views to put them in the right location.
            changes.forEachOperation(function (record, adjustedPreviousIndex, currentIndex) {
              if (record.previousIndex == null) {
                // Item added.
                var view = _this22._insertViewForNewItem(currentIndex);

                view.context.$implicit = record.item;
              } else if (currentIndex == null) {
                // Item removed.
                _this22._cacheView(_this22._detachView(adjustedPreviousIndex));
              } else {
                // Item moved.
                var _view = _this22._viewContainerRef.get(adjustedPreviousIndex);

                _this22._viewContainerRef.move(_view, currentIndex);

                _view.context.$implicit = record.item;
              }
            }); // Update $implicit for any items that had an identity change.

            changes.forEachIdentityChange(function (record) {
              var view = _this22._viewContainerRef.get(record.currentIndex);

              view.context.$implicit = record.item;
            }); // Update the context variables on all items.

            var count = this._data.length;
            var i = this._viewContainerRef.length;

            while (i--) {
              var view = this._viewContainerRef.get(i);

              view.context.index = this._renderedRange.start + i;
              view.context.count = count;

              this._updateComputedContextProperties(view.context);
            }
          }
          /** Cache the given detached view. */

        }, {
          key: "_cacheView",
          value: function _cacheView(view) {
            if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
              this._templateCache.push(view);
            } else {
              var index = this._viewContainerRef.indexOf(view); // It's very unlikely that the index will ever be -1, but just in case,
              // destroy the view on its own, otherwise destroy it through the
              // container to ensure that all the references are removed.


              if (index === -1) {
                view.destroy();
              } else {
                this._viewContainerRef.remove(index);
              }
            }
          }
          /** Inserts a view for a new item, either from the cache or by creating a new one. */

        }, {
          key: "_insertViewForNewItem",
          value: function _insertViewForNewItem(index) {
            return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
          }
          /** Update the computed properties on the `CdkVirtualForOfContext`. */

        }, {
          key: "_updateComputedContextProperties",
          value: function _updateComputedContextProperties(context) {
            context.first = context.index === 0;
            context.last = context.index === context.count - 1;
            context.even = context.index % 2 === 0;
            context.odd = !context.even;
          }
          /** Creates a new embedded view and moves it to the given index */

        }, {
          key: "_createEmbeddedViewAt",
          value: function _createEmbeddedViewAt(index) {
            // Note that it's important that we insert the item directly at the proper index,
            // rather than inserting it and the moving it in place, because if there's a directive
            // on the same node that injects the `ViewContainerRef`, Angular will insert another
            // comment node which can throw off the move when it's being repeated for all items.
            return this._viewContainerRef.createEmbeddedView(this._template, {
              $implicit: null,
              // It's guaranteed that the iterable is not "undefined" or "null" because we only
              // generate views for elements if the "cdkVirtualForOf" iterable has elements.
              cdkVirtualForOf: this._cdkVirtualForOf,
              index: -1,
              count: -1,
              first: false,
              last: false,
              odd: false,
              even: false
            }, index);
          }
          /** Inserts a recycled view from the cache at the given index. */

        }, {
          key: "_insertViewFromCache",
          value: function _insertViewFromCache(index) {
            var cachedView = this._templateCache.pop();

            if (cachedView) {
              this._viewContainerRef.insert(cachedView, index);
            }

            return cachedView || null;
          }
          /** Detaches the embedded view at the given index. */

        }, {
          key: "_detachView",
          value: function _detachView(index) {
            return this._viewContainerRef.detach(index);
          }
        }, {
          key: "cdkVirtualForOf",
          get: function get() {
            return this._cdkVirtualForOf;
          },
          set: function set(value) {
            this._cdkVirtualForOf = value;

            if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["isDataSource"])(value)) {
              this._dataSourceChanges.next(value);
            } else {
              // Slice the value if its an NgIterable to ensure we're working with an array.
              this._dataSourceChanges.next(new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["ArrayDataSource"](Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(value) ? value : Array.prototype.slice.call(value || [])));
            }
          }
          /**
           * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
           * the item and produces a value to be used as the item's identity when tracking changes.
           */

        }, {
          key: "cdkVirtualForTrackBy",
          get: function get() {
            return this._cdkVirtualForTrackBy;
          },
          set: function set(fn) {
            var _this23 = this;

            this._needsUpdate = true;
            this._cdkVirtualForTrackBy = fn ? function (index, item) {
              return fn(index + (_this23._renderedRange ? _this23._renderedRange.start : 0), item);
            } : undefined;
          }
          /** The template used to stamp out new elements. */

        }, {
          key: "cdkVirtualForTemplate",
          set: function set(value) {
            if (value) {
              this._needsUpdate = true;
              this._template = value;
            }
          }
        }]);

        return CdkVirtualForOf;
      }();

      CdkVirtualForOf.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
        }, {
          type: CdkVirtualScrollViewport,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      CdkVirtualForOf.propDecorators = {
        cdkVirtualForOf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTemplateCacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      return CdkVirtualForOf;
    }()
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualForOf, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkVirtualFor][cdkVirtualForOf]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
        }, {
          type: CdkVirtualScrollViewport,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        cdkVirtualForTemplateCacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForOf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    ;

    CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
      return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CdkVirtualForOf.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkVirtualForOf,
      selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
      inputs: {
        cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize",
        cdkVirtualForOf: "cdkVirtualForOf",
        cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
        cdkVirtualForTemplate: "cdkVirtualForTemplate"
      }
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var CdkScrollableModule =
    /** @class */
    function () {
      var CdkScrollableModule = function CdkScrollableModule() {
        _classCallCheck(this, CdkScrollableModule);
      };

      return CdkScrollableModule;
    }()(function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CdkScrollableModule, {
        declarations: [CdkScrollable],
        exports: [CdkScrollable]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [CdkScrollable],
          declarations: [CdkScrollable]
        }]
      }], null, null);
    })();

    ;
    CdkScrollableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CdkScrollableModule
    });
    CdkScrollableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CdkScrollableModule_Factory(t) {
        return new (t || CdkScrollableModule)();
      }
    });

    var ScrollingModule =
    /** @class */
    function () {
      var ScrollingModule = function ScrollingModule() {
        _classCallCheck(this, ScrollingModule);
      };

      return ScrollingModule;
    }()(function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollingModule, {
        declarations: function declarations() {
          return [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
        },
        imports: function imports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule];
        },
        exports: function exports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule],
          exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport],
          declarations: [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport]
        }]
      }], null, null);
    })();

    ;
    ScrollingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ScrollingModule
    });
    ScrollingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ScrollingModule_Factory(t) {
        return new (t || ScrollingModule)();
      },
      imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule]
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=scrolling.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/fesm2015/coercion.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/cdk/fesm2015/coercion.js ***!
    \********************************************************/

  /*! exports provided: _isNumberValue, coerceArray, coerceBooleanProperty, coerceCssPixelValue, coerceElement, coerceNumberProperty */

  /***/
  function node_modulesAngularCdkFesm2015CoercionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_isNumberValue", function () {
      return _isNumberValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
      return coerceArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function () {
      return coerceBooleanProperty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function () {
      return coerceCssPixelValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceElement", function () {
      return coerceElement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function () {
      return coerceNumberProperty;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Coerces a data-bound value (typically a string) to a boolean. */


    function coerceBooleanProperty(value) {
      return value != null && "".concat(value) !== 'false';
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function coerceNumberProperty(value) {
      var fallbackValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return _isNumberValue(value) ? Number(value) : fallbackValue;
    }
    /**
     * Whether the provided value is considered a number.
     * @docs-private
     */


    function _isNumberValue(value) {
      // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
      // and other non-number values as NaN, where Number just uses 0) but it considers the string
      // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
      return !isNaN(parseFloat(value)) && !isNaN(Number(value));
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function coerceArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Coerces a value to a CSS pixel value. */


    function coerceCssPixelValue(value) {
      if (value == null) {
        return '';
      }

      return typeof value === 'string' ? value : "".concat(value, "px");
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Coerces an ElementRef or an Element into an element.
     * Useful for APIs that can accept either a ref or the native element itself.
     */


    function coerceElement(elementOrRef) {
      return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    //# sourceMappingURL=coercion.js.map

    /***/

  },

  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js":
  /*!************************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js ***!
    \************************************************************************/

  /*! exports provided: DROPDOWN_VALUE_ACCESSOR, Dropdown, DropdownItem, DropdownModule */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengDropdownJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DROPDOWN_VALUE_ACCESSOR", function () {
      return DROPDOWN_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dropdown", function () {
      return Dropdown;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownItem", function () {
      return DropdownItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownModule", function () {
      return DropdownModule;
    });
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/dom */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dom.js");
    /* harmony import */


    var primeng_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/utils */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-utils.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/tooltip */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tooltip.js");

    function DropdownItem_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.option.label || "empty");
      }
    }

    function DropdownItem_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "height": a0
      };
    };

    var _c1 = function _c1(a1, a2, a3) {
      return {
        "ui-dropdown-item ui-corner-all": true,
        "ui-state-highlight": a1,
        "ui-state-disabled": a2,
        "ui-dropdown-item-empty": a3
      };
    };

    var _c2 = function _c2(a0) {
      return {
        $implicit: a0
      };
    };

    var _c3 = ["container"];
    var _c4 = ["filter"];
    var _c5 = ["in"];
    var _c6 = ["editableInput"];

    function Dropdown_span_6_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.label || "empty");
      }
    }

    function Dropdown_span_6_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
      }
    }

    var _c7 = function _c7(a1) {
      return {
        "ui-dropdown-label ui-inputtext ui-corner-all": true,
        "ui-dropdown-label-empty": a1
      };
    };

    function Dropdown_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_span_6_ng_container_1_Template, 2, 1, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Dropdown_span_6_ng_container_2_Template, 1, 0, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c7, ctx_r2.label == null || ctx_r2.label.length === 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.selectedItemTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.selectedItemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, ctx_r2.selectedOption));
      }
    }

    var _c8 = function _c8(a1) {
      return {
        "ui-dropdown-label ui-inputtext ui-corner-all ui-placeholder": true,
        "ui-dropdown-label-empty": a1
      };
    };

    function Dropdown_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c8, ctx_r3.placeholder == null || ctx_r3.placeholder.length === 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.placeholder || "empty");
      }
    }

    function Dropdown_input_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Dropdown_input_8_Template_input_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r10.onEditableInputClick();
        })("input", function Dropdown_input_8_Template_input_input_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r12.onEditableInputChange($event);
        })("focus", function Dropdown_input_8_Template_input_focus_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r13.onEditableInputFocus($event);
        })("blur", function Dropdown_input_8_Template_input_blur_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.onInputBlur($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("maxlength", ctx_r4.maxlength)("aria-label", ctx_r4.selectedOption ? ctx_r4.selectedOption.label : " ")("placeholder", ctx_r4.placeholder)("aria-expanded", ctx_r4.overlayVisible);
      }
    }

    function Dropdown_i_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Dropdown_i_9_Template_i_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r15.clear($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function Dropdown_div_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Dropdown_div_12_div_1_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          return $event.stopPropagation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 25, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function Dropdown_div_12_div_1_Template_input_keydown_enter_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          return $event.preventDefault();
        })("keydown", function Dropdown_div_12_div_1_Template_input_keydown_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r27.onKeydown($event, false);
        })("input", function Dropdown_div_12_div_1_Template_input_input_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r28.onFilter($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r17.filterValue || "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("placeholder", ctx_r17.filterPlaceholder)("aria-label", ctx_r17.ariaFilterLabel);
      }
    }

    function Dropdown_div_12_ng_container_4_ng_template_1_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var optgroup_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](optgroup_r30.label || "empty");
      }
    }

    function Dropdown_div_12_ng_container_4_ng_template_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
      }
    }

    function Dropdown_div_12_ng_container_4_ng_template_1_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
      }
    }

    var _c9 = function _c9(a0, a1) {
      return {
        $implicit: a0,
        selectedOption: a1
      };
    };

    function Dropdown_div_12_ng_container_4_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_div_12_ng_container_4_ng_template_1_span_1_Template, 2, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Dropdown_div_12_ng_container_4_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Dropdown_div_12_ng_container_4_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 14);
      }

      if (rf & 2) {
        var optgroup_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r29.groupTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r29.groupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c2, optgroup_r30));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r20)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c9, optgroup_r30.items, ctx_r29.selectedOption));
      }
    }

    function Dropdown_div_12_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_div_12_ng_container_4_ng_template_1_Template, 4, 10, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r18.optionsToDisplay);
      }
    }

    function Dropdown_div_12_ng_container_5_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
      }
    }

    function Dropdown_div_12_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_div_12_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r20)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c9, ctx_r19.optionsToDisplay, ctx_r19.selectedOption));
      }
    }

    function Dropdown_div_12_ng_template_6_ng_container_0_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-dropdownItem", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function Dropdown_div_12_ng_template_6_ng_container_0_ng_template_1_Template_p_dropdownItem_onClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r44.onItemClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r42 = ctx.$implicit;

        var selectedOption_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).selectedOption;

        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("option", option_r42)("selected", selectedOption_r37 == option_r42)("template", ctx_r41.itemTemplate);
      }
    }

    function Dropdown_div_12_ng_template_6_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_div_12_ng_template_6_ng_container_0_ng_template_1_Template, 1, 3, "ng-template", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var options_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", options_r36);
      }
    }

    function Dropdown_div_12_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-dropdownItem", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function Dropdown_div_12_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template_p_dropdownItem_onClick_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);

          return ctx_r58.onItemClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var option_r51 = ctx.$implicit;

        var selectedOption_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).selectedOption;

        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("option", option_r51)("selected", selectedOption_r37 == option_r51)("template", ctx_r50.itemTemplate);
      }
    }

    function Dropdown_div_12_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 34, 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scrolledIndexChange", function Dropdown_div_12_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r61.scrollToSelectedVirtualScrollElement();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Dropdown_div_12_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template, 2, 3, "ng-container", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var options_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r48.scrollHeight))("itemSize", ctx_r48.itemSize);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkVirtualForOf", options_r36);
      }
    }

    function Dropdown_div_12_ng_template_6_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Dropdown_div_12_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template, 3, 5, "cdk-virtual-scroll-viewport", 33);
      }

      if (rf & 2) {
        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r40.virtualScroll && ctx_r40.optionsToDisplay && ctx_r40.optionsToDisplay.length);
      }
    }

    function Dropdown_div_12_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Dropdown_div_12_ng_template_6_ng_container_0_Template, 2, 1, "ng-container", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_div_12_ng_template_6_ng_template_1_Template, 1, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r21.virtualScroll)("ngIfElse", _r39);
      }
    }

    function Dropdown_div_12_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r22.emptyFilterMessage);
      }
    }

    var _c10 = function _c10(a0, a1) {
      return {
        showTransitionParams: a0,
        hideTransitionParams: a1
      };
    };

    var _c11 = function _c11(a1) {
      return {
        value: "visible",
        params: a1
      };
    };

    function Dropdown_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@overlayAnimation.start", function Dropdown_div_12_Template_div_animation_overlayAnimation_start_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r65);

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r64.onOverlayAnimationStart($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_div_12_div_1_Template, 4, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Dropdown_div_12_ng_container_4_Template, 2, 1, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, Dropdown_div_12_ng_container_5_Template, 2, 5, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, Dropdown_div_12_ng_template_6_Template, 3, 2, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, Dropdown_div_12_li_8_Template, 2, 1, "li", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r6.panelStyleClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ui-dropdown-panel  ui-widget ui-widget-content ui-corner-all ui-shadow")("@overlayAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c10, ctx_r6.showTransitionOptions, ctx_r6.hideTransitionOptions)))("ngStyle", ctx_r6.panelStyle);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.filter);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx_r6.virtualScroll ? "auto" : ctx_r6.scrollHeight || "auto");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.group);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.group);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.filter && (!ctx_r6.optionsToDisplay || ctx_r6.optionsToDisplay && ctx_r6.optionsToDisplay.length === 0));
      }
    }

    var _c12 = function _c12(a1, a2, a3, a4) {
      return {
        "ui-dropdown ui-widget ui-state-default ui-corner-all": true,
        "ui-state-disabled": a1,
        "ui-dropdown-open": a2,
        "ui-state-focus": a3,
        "ui-dropdown-clearable": a4
      };
    };

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var DROPDOWN_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return Dropdown;
      }),
      multi: true
    };

    var DropdownItem = /*#__PURE__*/function () {
      function DropdownItem() {
        _classCallCheck(this, DropdownItem);

        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(DropdownItem, [{
        key: "onOptionClick",
        value: function onOptionClick(event) {
          this.onClick.emit({
            originalEvent: event,
            option: this.option
          });
        }
      }]);

      return DropdownItem;
    }();

    DropdownItem.ɵfac = function DropdownItem_Factory(t) {
      return new (t || DropdownItem)();
    };

    DropdownItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DropdownItem,
      selectors: [["p-dropdownItem"]],
      inputs: {
        option: "option",
        selected: "selected",
        disabled: "disabled",
        visible: "visible",
        itemSize: "itemSize",
        template: "template"
      },
      outputs: {
        onClick: "onClick"
      },
      decls: 3,
      vars: 15,
      consts: [["role", "option", 3, "ngStyle", "ngClass", "click"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function DropdownItem_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DropdownItem_Template_li_click_0_listener($event) {
            return ctx.onOptionClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DropdownItem_span_1_Template, 2, 1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DropdownItem_ng_container_2_Template, 1, 0, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.itemSize + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](9, _c1, ctx.selected, ctx.option.disabled, !ctx.option.label || ctx.option.label.length === 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.option.label)("aria-selected", ctx.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.template);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c2, ctx.option));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]],
      encapsulation: 2
    });

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DropdownItem.prototype, "option", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DropdownItem.prototype, "selected", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DropdownItem.prototype, "disabled", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DropdownItem.prototype, "visible", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DropdownItem.prototype, "itemSize", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DropdownItem.prototype, "template", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DropdownItem.prototype, "onClick", void 0);

    var Dropdown = /*#__PURE__*/function () {
      function Dropdown(el, renderer, cd, zone) {
        _classCallCheck(this, Dropdown);

        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        this.scrollHeight = '200px';
        this.filterBy = 'label';
        this.resetFilterOnHide = false;
        this.dropdownIcon = 'pi pi-chevron-down';
        this.autoDisplayFirst = true;
        this.emptyFilterMessage = 'No results found';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.filterMatchMode = "contains";
        this.tooltip = '';
        this.tooltipPosition = 'right';
        this.tooltipPositionStyle = 'absolute';
        this.autofocusFilter = true;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.onModelChange = function () {};

        this.onModelTouched = function () {};

        this.viewPortOffsetTop = 0;
      }

      _createClass(Dropdown, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this24 = this;

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'item':
                _this24.itemTemplate = item.template;
                break;

              case 'selectedItem':
                _this24.selectedItemTemplate = item.template;
                break;

              case 'group':
                _this24.groupTemplate = item.template;
                break;

              default:
                _this24.itemTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.optionsToDisplay = this.options;
          this.updateSelectedOption(null);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.editable) {
            this.updateEditableLabel();
          }
        }
      }, {
        key: "updateEditableLabel",
        value: function updateEditableLabel() {
          if (this.editableInputViewChild && this.editableInputViewChild.nativeElement) {
            this.editableInputViewChild.nativeElement.value = this.selectedOption ? this.selectedOption.label : this.value || '';
          }
        }
      }, {
        key: "onItemClick",
        value: function onItemClick(event) {
          var _this25 = this;

          var option = event.option;

          if (!option.disabled) {
            this.selectItem(event, option);
            this.accessibleViewChild.nativeElement.focus();
          }

          setTimeout(function () {
            _this25.hide(event);
          }, 150);
        }
      }, {
        key: "selectItem",
        value: function selectItem(event, option) {
          var _this26 = this;

          if (this.selectedOption != option) {
            this.selectedOption = option;
            this.value = option.value;
            this.filled = true;
            this.onModelChange(this.value);
            this.updateEditableLabel();
            this.onChange.emit({
              originalEvent: event.originalEvent,
              value: this.value
            });

            if (this.virtualScroll) {
              setTimeout(function () {
                _this26.viewPortOffsetTop = _this26.viewPort ? _this26.viewPort.measureScrollOffset() : 0;
              }, 1);
            }
          }
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          var _this27 = this;

          if (this.optionsChanged && this.overlayVisible) {
            this.optionsChanged = false;

            if (this.virtualScroll) {
              this.updateVirtualScrollSelectedIndex(true);
            }

            this.zone.runOutsideAngular(function () {
              setTimeout(function () {
                _this27.alignOverlay();
              }, 1);
            });
          }

          if (this.selectedOptionUpdated && this.itemsWrapper) {
            if (this.virtualScroll && this.viewPort) {
              var range = this.viewPort.getRenderedRange();
              this.updateVirtualScrollSelectedIndex(false);

              if (range.start > this.virtualScrollSelectedIndex || range.end < this.virtualScrollSelectedIndex) {
                this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
              }
            }

            var selectedItem = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.overlay, 'li.ui-state-highlight');

            if (selectedItem) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].scrollInView(this.itemsWrapper, primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.overlay, 'li.ui-state-highlight'));
            }

            this.selectedOptionUpdated = false;
          }
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (this.filter) {
            this.resetFilter();
          }

          this.value = value;
          this.updateSelectedOption(value);
          this.updateEditableLabel();
          this.updateFilledState();
          this.cd.markForCheck();
        }
      }, {
        key: "resetFilter",
        value: function resetFilter() {
          this.filterValue = null;

          if (this.filterViewChild && this.filterViewChild.nativeElement) {
            this.filterViewChild.nativeElement.value = '';
          }

          this.optionsToDisplay = this.options;
        }
      }, {
        key: "updateSelectedOption",
        value: function updateSelectedOption(val) {
          this.selectedOption = this.findOption(val, this.optionsToDisplay);

          if (this.autoDisplayFirst && !this.placeholder && !this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.editable) {
            this.selectedOption = this.optionsToDisplay[0];
          }

          this.selectedOptionUpdated = true;
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onModelChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onModelTouched = fn;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(val) {
          this.disabled = val;
        }
      }, {
        key: "onMouseclick",
        value: function onMouseclick(event) {
          if (this.disabled || this.readonly || this.isInputClick(event)) {
            return;
          }

          this.onClick.emit(event);
          this.accessibleViewChild.nativeElement.focus();
          if (this.overlayVisible) this.hide(event);else this.show();
          this.cd.detectChanges();
        }
      }, {
        key: "isInputClick",
        value: function isInputClick(event) {
          return primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target, 'ui-dropdown-clear-icon') || event.target.isSameNode(this.accessibleViewChild.nativeElement) || this.editableInputViewChild && event.target.isSameNode(this.editableInputViewChild.nativeElement);
        }
      }, {
        key: "isOutsideClicked",
        value: function isOutsideClicked(event) {
          return !(this.el.nativeElement.isSameNode(event.target) || this.el.nativeElement.contains(event.target) || this.overlay && this.overlay.contains(event.target));
        }
      }, {
        key: "onEditableInputClick",
        value: function onEditableInputClick() {
          this.bindDocumentClickListener();
        }
      }, {
        key: "onEditableInputFocus",
        value: function onEditableInputFocus(event) {
          this.focused = true;
          this.hide(event);
          this.onFocus.emit(event);
        }
      }, {
        key: "onEditableInputChange",
        value: function onEditableInputChange(event) {
          this.value = event.target.value;
          this.updateSelectedOption(this.value);
          this.onModelChange(this.value);
          this.onChange.emit({
            originalEvent: event,
            value: this.value
          });
        }
      }, {
        key: "show",
        value: function show() {
          this.overlayVisible = true;
        }
      }, {
        key: "onOverlayAnimationStart",
        value: function onOverlayAnimationStart(event) {
          switch (event.toState) {
            case 'visible':
              this.overlay = event.element;
              var itemsWrapperSelector = this.virtualScroll ? '.cdk-virtual-scroll-viewport' : '.ui-dropdown-items-wrapper';
              this.itemsWrapper = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.overlay, itemsWrapperSelector);
              this.appendOverlay();

              if (this.autoZIndex) {
                this.overlay.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].zindex);
              }

              this.alignOverlay();
              this.bindDocumentClickListener();
              this.bindDocumentResizeListener();

              if (this.options && this.options.length) {
                if (!this.virtualScroll) {
                  var selectedListItem = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.itemsWrapper, '.ui-dropdown-item.ui-state-highlight');

                  if (selectedListItem) {
                    primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].scrollInView(this.itemsWrapper, selectedListItem);
                  }
                }
              }

              if (this.filterViewChild && this.filterViewChild.nativeElement) {
                this.preventModelTouched = true;

                if (this.autofocusFilter) {
                  this.filterViewChild.nativeElement.focus();
                }
              }

              this.onShow.emit(event);
              break;

            case 'void':
              this.onOverlayHide();
              break;
          }
        }
      }, {
        key: "scrollToSelectedVirtualScrollElement",
        value: function scrollToSelectedVirtualScrollElement() {
          if (!this.virtualAutoScrolled) {
            if (this.viewPortOffsetTop) {
              this.viewPort.scrollToOffset(this.viewPortOffsetTop);
            } else if (this.virtualScrollSelectedIndex > -1) {
              this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
            }
          }

          this.virtualAutoScrolled = true;
        }
      }, {
        key: "updateVirtualScrollSelectedIndex",
        value: function updateVirtualScrollSelectedIndex(resetOffset) {
          if (this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length) {
            if (resetOffset) {
              this.viewPortOffsetTop = 0;
            }

            this.virtualScrollSelectedIndex = this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay);
          }
        }
      }, {
        key: "appendOverlay",
        value: function appendOverlay() {
          if (this.appendTo) {
            if (this.appendTo === 'body') document.body.appendChild(this.overlay);else primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].appendChild(this.overlay, this.appendTo);

            if (!this.overlay.style.minWidth) {
              this.overlay.style.minWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getWidth(this.containerViewChild.nativeElement) + 'px';
            }
          }
        }
      }, {
        key: "restoreOverlayAppend",
        value: function restoreOverlayAppend() {
          if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
          }
        }
      }, {
        key: "hide",
        value: function hide(event) {
          this.overlayVisible = false;

          if (this.filter && this.resetFilterOnHide) {
            this.resetFilter();
          }

          if (this.virtualScroll) {
            this.virtualAutoScrolled = false;
          }

          this.cd.markForCheck();
          this.onHide.emit(event);
        }
      }, {
        key: "alignOverlay",
        value: function alignOverlay() {
          if (this.overlay) {
            if (this.appendTo) primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].absolutePosition(this.overlay, this.containerViewChild.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].relativePosition(this.overlay, this.containerViewChild.nativeElement);
          }
        }
      }, {
        key: "onInputFocus",
        value: function onInputFocus(event) {
          this.focused = true;
          this.onFocus.emit(event);
        }
      }, {
        key: "onInputBlur",
        value: function onInputBlur(event) {
          this.focused = false;
          this.onBlur.emit(event);

          if (!this.preventModelTouched) {
            this.onModelTouched();
          }

          this.preventModelTouched = false;
        }
      }, {
        key: "findPrevEnabledOption",
        value: function findPrevEnabledOption(index) {
          var prevEnabledOption;

          if (this.optionsToDisplay && this.optionsToDisplay.length) {
            for (var i = index - 1; 0 <= i; i--) {
              var option = this.optionsToDisplay[i];

              if (option.disabled) {
                continue;
              } else {
                prevEnabledOption = option;
                break;
              }
            }

            if (!prevEnabledOption) {
              for (var _i2 = this.optionsToDisplay.length - 1; _i2 >= index; _i2--) {
                var _option = this.optionsToDisplay[_i2];

                if (_option.disabled) {
                  continue;
                } else {
                  prevEnabledOption = _option;
                  break;
                }
              }
            }
          }

          return prevEnabledOption;
        }
      }, {
        key: "findNextEnabledOption",
        value: function findNextEnabledOption(index) {
          var nextEnabledOption;

          if (this.optionsToDisplay && this.optionsToDisplay.length) {
            for (var i = index + 1; index < this.optionsToDisplay.length - 1; i++) {
              var option = this.optionsToDisplay[i];

              if (option.disabled) {
                continue;
              } else {
                nextEnabledOption = option;
                break;
              }
            }

            if (!nextEnabledOption) {
              for (var _i3 = 0; _i3 < index; _i3++) {
                var _option2 = this.optionsToDisplay[_i3];

                if (_option2.disabled) {
                  continue;
                } else {
                  nextEnabledOption = _option2;
                  break;
                }
              }
            }
          }

          return nextEnabledOption;
        }
      }, {
        key: "onKeydown",
        value: function onKeydown(event, search) {
          if (this.readonly || !this.optionsToDisplay || this.optionsToDisplay.length === null) {
            return;
          }

          switch (event.which) {
            //down
            case 40:
              if (!this.overlayVisible && event.altKey) {
                this.show();
              } else {
                if (this.group) {
                  var selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : -1;

                  if (selectedItemIndex !== -1) {
                    var nextItemIndex = selectedItemIndex.itemIndex + 1;

                    if (nextItemIndex < this.optionsToDisplay[selectedItemIndex.groupIndex].items.length) {
                      this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex].items[nextItemIndex]);
                      this.selectedOptionUpdated = true;
                    } else if (this.optionsToDisplay[selectedItemIndex.groupIndex + 1]) {
                      this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex + 1].items[0]);
                      this.selectedOptionUpdated = true;
                    }
                  } else {
                    this.selectItem(event, this.optionsToDisplay[0].items[0]);
                  }
                } else {
                  var _selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;

                  var nextEnabledOption = this.findNextEnabledOption(_selectedItemIndex);

                  if (nextEnabledOption) {
                    this.selectItem(event, nextEnabledOption);
                    this.selectedOptionUpdated = true;
                  }
                }
              }

              event.preventDefault();
              break;
            //up

            case 38:
              if (this.group) {
                var _selectedItemIndex2 = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : -1;

                if (_selectedItemIndex2 !== -1) {
                  var prevItemIndex = _selectedItemIndex2.itemIndex - 1;

                  if (prevItemIndex >= 0) {
                    this.selectItem(event, this.optionsToDisplay[_selectedItemIndex2.groupIndex].items[prevItemIndex]);
                    this.selectedOptionUpdated = true;
                  } else if (prevItemIndex < 0) {
                    var prevGroup = this.optionsToDisplay[_selectedItemIndex2.groupIndex - 1];

                    if (prevGroup) {
                      this.selectItem(event, prevGroup.items[prevGroup.items.length - 1]);
                      this.selectedOptionUpdated = true;
                    }
                  }
                }
              } else {
                var _selectedItemIndex3 = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;

                var prevEnabledOption = this.findPrevEnabledOption(_selectedItemIndex3);

                if (prevEnabledOption) {
                  this.selectItem(event, prevEnabledOption);
                  this.selectedOptionUpdated = true;
                }
              }

              event.preventDefault();
              break;
            //space

            case 32:
            case 32:
              if (!this.overlayVisible) {
                this.show();
                event.preventDefault();
              }

              break;
            //enter

            case 13:
              if (!this.filter || this.optionsToDisplay && this.optionsToDisplay.length > 0) {
                this.hide(event);
              }

              event.preventDefault();
              break;
            //escape and tab

            case 27:
            case 9:
              this.hide(event);
              break;
            //search item based on keyboard input

            default:
              if (search) {
                this.search(event);
              }

              break;
          }
        }
      }, {
        key: "search",
        value: function search(event) {
          var _this28 = this;

          if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
          }

          var _char = event.key;
          this.previousSearchChar = this.currentSearchChar;
          this.currentSearchChar = _char;
          if (this.previousSearchChar === this.currentSearchChar) this.searchValue = this.currentSearchChar;else this.searchValue = this.searchValue ? this.searchValue + _char : _char;
          var newOption;

          if (this.group) {
            var searchIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : {
              groupIndex: 0,
              itemIndex: 0
            };
            newOption = this.searchOptionWithinGroup(searchIndex);
          } else {
            var _searchIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;

            newOption = this.searchOption(++_searchIndex);
          }

          if (newOption && !newOption.disabled) {
            this.selectItem(event, newOption);
            this.selectedOptionUpdated = true;
          }

          this.searchTimeout = setTimeout(function () {
            _this28.searchValue = null;
          }, 250);
        }
      }, {
        key: "searchOption",
        value: function searchOption(index) {
          var option;

          if (this.searchValue) {
            option = this.searchOptionInRange(index, this.optionsToDisplay.length);

            if (!option) {
              option = this.searchOptionInRange(0, index);
            }
          }

          return option;
        }
      }, {
        key: "searchOptionInRange",
        value: function searchOptionInRange(start, end) {
          for (var i = start; i < end; i++) {
            var opt = this.optionsToDisplay[i];

            if (opt.label.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !opt.disabled) {
              return opt;
            }
          }

          return null;
        }
      }, {
        key: "searchOptionWithinGroup",
        value: function searchOptionWithinGroup(index) {
          var option;

          if (this.searchValue) {
            for (var i = index.groupIndex; i < this.optionsToDisplay.length; i++) {
              for (var j = index.groupIndex === i ? index.itemIndex + 1 : 0; j < this.optionsToDisplay[i].items.length; j++) {
                var opt = this.optionsToDisplay[i].items[j];

                if (opt.label.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !opt.disabled) {
                  return opt;
                }
              }
            }

            if (!option) {
              for (var _i4 = 0; _i4 <= index.groupIndex; _i4++) {
                for (var _j = 0; _j < (index.groupIndex === _i4 ? index.itemIndex : this.optionsToDisplay[_i4].items.length); _j++) {
                  var _opt = this.optionsToDisplay[_i4].items[_j];

                  if (_opt.label.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !_opt.disabled) {
                    return _opt;
                  }
                }
              }
            }
          }

          return null;
        }
      }, {
        key: "findOptionIndex",
        value: function findOptionIndex(val, opts) {
          var index = -1;

          if (opts) {
            for (var i = 0; i < opts.length; i++) {
              if (val == null && opts[i].value == null || primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].equals(val, opts[i].value, this.dataKey)) {
                index = i;
                break;
              }
            }
          }

          return index;
        }
      }, {
        key: "findOptionGroupIndex",
        value: function findOptionGroupIndex(val, opts) {
          var groupIndex, itemIndex;

          if (opts) {
            for (var i = 0; i < opts.length; i++) {
              groupIndex = i;
              itemIndex = this.findOptionIndex(val, opts[i].items);

              if (itemIndex !== -1) {
                break;
              }
            }
          }

          if (itemIndex !== -1) {
            return {
              groupIndex: groupIndex,
              itemIndex: itemIndex
            };
          } else {
            return -1;
          }
        }
      }, {
        key: "findOption",
        value: function findOption(val, opts, inGroup) {
          if (this.group && !inGroup) {
            var opt;

            if (opts && opts.length) {
              var _iterator4 = _createForOfIteratorHelper(opts),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var optgroup = _step4.value;
                  opt = this.findOption(val, optgroup.items, true);

                  if (opt) {
                    break;
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }

            return opt;
          } else {
            var index = this.findOptionIndex(val, opts);
            return index != -1 ? opts[index] : null;
          }
        }
      }, {
        key: "onFilter",
        value: function onFilter(event) {
          var inputValue = event.target.value;

          if (inputValue && inputValue.length) {
            this.filterValue = inputValue;
            this.activateFilter();
          } else {
            this.filterValue = null;
            this.optionsToDisplay = this.options;
          }

          this.optionsChanged = true;
        }
      }, {
        key: "activateFilter",
        value: function activateFilter() {
          var searchFields = this.filterBy.split(',');

          if (this.options && this.options.length) {
            if (this.group) {
              var filteredGroups = [];

              var _iterator5 = _createForOfIteratorHelper(this.options),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var optgroup = _step5.value;
                  var filteredSubOptions = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["FilterUtils"].filter(optgroup.items, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);

                  if (filteredSubOptions && filteredSubOptions.length) {
                    filteredGroups.push({
                      label: optgroup.label,
                      value: optgroup.value,
                      items: filteredSubOptions
                    });
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              this.optionsToDisplay = filteredGroups;
            } else {
              this.optionsToDisplay = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["FilterUtils"].filter(this.options, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
            }

            this.optionsChanged = true;
          }
        }
      }, {
        key: "applyFocus",
        value: function applyFocus() {
          if (this.editable) primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.el.nativeElement, '.ui-dropdown-label.ui-inputtext').focus();else primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.el.nativeElement, 'input[readonly]').focus();
        }
      }, {
        key: "focus",
        value: function focus() {
          this.applyFocus();
        }
      }, {
        key: "bindDocumentClickListener",
        value: function bindDocumentClickListener() {
          var _this29 = this;

          if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function (event) {
              if (_this29.isOutsideClicked(event)) {
                _this29.hide(event);

                _this29.unbindDocumentClickListener();
              }

              _this29.cd.markForCheck();
            });
          }
        }
      }, {
        key: "unbindDocumentClickListener",
        value: function unbindDocumentClickListener() {
          if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
          }
        }
      }, {
        key: "bindDocumentResizeListener",
        value: function bindDocumentResizeListener() {
          this.documentResizeListener = this.onWindowResize.bind(this);
          window.addEventListener('resize', this.documentResizeListener);
        }
      }, {
        key: "unbindDocumentResizeListener",
        value: function unbindDocumentResizeListener() {
          if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
          }
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          if (!primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].isAndroid()) {
            this.hide(event);
          }
        }
      }, {
        key: "updateFilledState",
        value: function updateFilledState() {
          this.filled = this.selectedOption != null;
        }
      }, {
        key: "clear",
        value: function clear(event) {
          this.value = null;
          this.onModelChange(this.value);
          this.onChange.emit({
            originalEvent: event,
            value: this.value
          });
          this.updateSelectedOption(this.value);
          this.updateEditableLabel();
          this.updateFilledState();
        }
      }, {
        key: "onOverlayHide",
        value: function onOverlayHide() {
          this.unbindDocumentClickListener();
          this.unbindDocumentResizeListener();
          this.overlay = null;
          this.itemsWrapper = null;
          this.onModelTouched();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.restoreOverlayAppend();
          this.onOverlayHide();
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        },
        set: function set(_disabled) {
          if (_disabled) this.focused = false;
          this._disabled = _disabled;

          if (!this.cd.destroyed) {
            this.cd.detectChanges();
          }
        }
      }, {
        key: "options",
        get: function get() {
          return this._options;
        },
        set: function set(val) {
          var opts = this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].generateSelectItems(val, this.optionLabel) : val;
          this._options = opts;
          this.optionsToDisplay = this._options;
          this.updateSelectedOption(this.value);
          this.optionsChanged = true;
          this.updateFilledState();

          if (this.filterValue && this.filterValue.length) {
            this.activateFilter();
          }
        }
      }, {
        key: "label",
        get: function get() {
          return this.selectedOption ? this.selectedOption.label : null;
        }
      }]);

      return Dropdown;
    }();

    Dropdown.ɵfac = function Dropdown_Factory(t) {
      return new (t || Dropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    Dropdown.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: Dropdown,
      selectors: [["p-dropdown"]],
      contentQueries: function Dropdown_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Dropdown_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c6, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filterViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.accessibleViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.viewPort = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editableInputViewChild = _t.first);
        }
      },
      hostVars: 4,
      hostBindings: function Dropdown_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ui-inputwrapper-filled", ctx.filled)("ui-inputwrapper-focus", ctx.focused);
        }
      },
      inputs: {
        scrollHeight: "scrollHeight",
        filterBy: "filterBy",
        resetFilterOnHide: "resetFilterOnHide",
        dropdownIcon: "dropdownIcon",
        autoDisplayFirst: "autoDisplayFirst",
        emptyFilterMessage: "emptyFilterMessage",
        autoZIndex: "autoZIndex",
        baseZIndex: "baseZIndex",
        showTransitionOptions: "showTransitionOptions",
        hideTransitionOptions: "hideTransitionOptions",
        filterMatchMode: "filterMatchMode",
        tooltip: "tooltip",
        tooltipPosition: "tooltipPosition",
        tooltipPositionStyle: "tooltipPositionStyle",
        autofocusFilter: "autofocusFilter",
        disabled: "disabled",
        options: "options",
        filter: "filter",
        name: "name",
        style: "style",
        panelStyle: "panelStyle",
        styleClass: "styleClass",
        panelStyleClass: "panelStyleClass",
        readonly: "readonly",
        required: "required",
        editable: "editable",
        appendTo: "appendTo",
        tabindex: "tabindex",
        placeholder: "placeholder",
        filterPlaceholder: "filterPlaceholder",
        filterLocale: "filterLocale",
        inputId: "inputId",
        selectId: "selectId",
        dataKey: "dataKey",
        autofocus: "autofocus",
        optionLabel: "optionLabel",
        group: "group",
        showClear: "showClear",
        virtualScroll: "virtualScroll",
        itemSize: "itemSize",
        ariaFilterLabel: "ariaFilterLabel",
        ariaLabelledBy: "ariaLabelledBy",
        maxlength: "maxlength",
        tooltipStyleClass: "tooltipStyleClass"
      },
      outputs: {
        onChange: "onChange",
        onFocus: "onFocus",
        onBlur: "onBlur",
        onClick: "onClick",
        onShow: "onShow",
        onHide: "onHide"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DROPDOWN_VALUE_ACCESSOR])],
      decls: 13,
      vars: 27,
      consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "ui-helper-hidden-accessible"], ["type", "text", "readonly", "", "aria-haspopup", "listbox", "aria-haspopup", "listbox", "role", "listbox", 3, "disabled", "focus", "blur", "keydown"], ["in", ""], [1, "ui-dropdown-label-container", 3, "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [3, "ngClass", 4, "ngIf"], ["type", "text", "class", "ui-dropdown-label ui-inputtext ui-corner-all", "aria-haspopup", "listbox", 3, "disabled", "click", "input", "focus", "blur", 4, "ngIf"], ["class", "ui-dropdown-clear-icon pi pi-times", 3, "click", 4, "ngIf"], ["role", "button", "aria-haspopup", "listbox", 1, "ui-dropdown-trigger", "ui-state-default", "ui-corner-right"], [1, "ui-dropdown-trigger-icon", "ui-clickable", 3, "ngClass"], [3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "text", "aria-haspopup", "listbox", 1, "ui-dropdown-label", "ui-inputtext", "ui-corner-all", 3, "disabled", "click", "input", "focus", "blur"], ["editableInput", ""], [1, "ui-dropdown-clear-icon", "pi", "pi-times", 3, "click"], [3, "ngClass", "ngStyle"], ["class", "ui-dropdown-filter-container", 3, "click", 4, "ngIf"], [1, "ui-dropdown-items-wrapper"], ["role", "listbox", 1, "ui-dropdown-items", "ui-dropdown-list", "ui-widget-content", "ui-widget", "ui-corner-all", "ui-helper-reset"], ["itemslist", ""], ["class", "ui-dropdown-empty-message", 4, "ngIf"], [1, "ui-dropdown-filter-container", 3, "click"], ["type", "text", "autocomplete", "off", 1, "ui-dropdown-filter", "ui-inputtext", "ui-widget", "ui-state-default", "ui-corner-all", 3, "value", "keydown.enter", "keydown", "input"], ["filter", ""], [1, "ui-dropdown-filter-icon", "pi", "pi-search"], ["ngFor", "", 3, "ngForOf"], [1, "ui-dropdown-item-group"], [4, "ngIf", "ngIfElse"], ["virtualScrollList", ""], [3, "option", "selected", "template", "onClick"], [3, "ngStyle", "itemSize", "scrolledIndexChange", 4, "ngIf"], [3, "ngStyle", "itemSize", "scrolledIndexChange"], ["viewport", ""], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "ui-dropdown-empty-message"]],
      template: function Dropdown_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Dropdown_Template_div_click_0_listener($event) {
            return ctx.onMouseclick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function Dropdown_Template_input_focus_3_listener($event) {
            return ctx.onInputFocus($event);
          })("blur", function Dropdown_Template_input_blur_3_listener($event) {
            return ctx.onInputBlur($event);
          })("keydown", function Dropdown_Template_input_keydown_3_listener($event) {
            return ctx.onKeydown($event, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, Dropdown_span_6_Template, 3, 8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, Dropdown_span_7_Template, 2, 4, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, Dropdown_input_8_Template, 2, 5, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, Dropdown_i_9_Template, 1, 0, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, Dropdown_div_12_Template, 9, 16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.styleClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](22, _c12, ctx.disabled, ctx.overlayVisible, ctx.focused, ctx.showClear && !ctx.disabled))("ngStyle", ctx.style);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.inputId)("aria-label", ctx.selectedOption ? ctx.selectedOption.label : " ")("aria-expanded", ctx.overlayVisible)("aria-labelledby", ctx.ariaLabelledBy)("tabindex", ctx.tabindex)("autofocus", ctx.autofocus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pTooltip", ctx.tooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editable && ctx.label != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editable && ctx.label == null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editable);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.value != null && ctx.showClear && !ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.overlayVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.dropdownIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.overlayVisible);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], DropdownItem, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualForOf"]],
      encapsulation: 2,
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('overlayAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          transform: 'translateY(5%)',
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          transform: 'translateY(0)',
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}'))])]
      }
    });

    Dropdown.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "scrollHeight", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "filter", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "name", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "style", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "panelStyle", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "styleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "panelStyleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "readonly", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "required", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "editable", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "appendTo", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "tabindex", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "placeholder", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "filterPlaceholder", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "filterLocale", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "inputId", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "selectId", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "dataKey", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "filterBy", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "autofocus", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "resetFilterOnHide", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "dropdownIcon", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "optionLabel", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "autoDisplayFirst", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "group", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "showClear", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "emptyFilterMessage", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "virtualScroll", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "itemSize", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "autoZIndex", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "baseZIndex", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "showTransitionOptions", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "hideTransitionOptions", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "ariaFilterLabel", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "ariaLabelledBy", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "filterMatchMode", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "maxlength", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "tooltip", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "tooltipPosition", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "tooltipPositionStyle", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "tooltipStyleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "autofocusFilter", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Dropdown.prototype, "onChange", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Dropdown.prototype, "onFocus", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Dropdown.prototype, "onBlur", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Dropdown.prototype, "onClick", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Dropdown.prototype, "onShow", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Dropdown.prototype, "onHide", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container')], Dropdown.prototype, "containerViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filter')], Dropdown.prototype, "filterViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('in')], Dropdown.prototype, "accessibleViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"])], Dropdown.prototype, "viewPort", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editableInput')], Dropdown.prototype, "editableInputViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"])], Dropdown.prototype, "templates", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "disabled", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Dropdown.prototype, "options", null);

    var DropdownModule = function DropdownModule() {
      _classCallCheck(this, DropdownModule);
    };

    DropdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DropdownModule
    });
    DropdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function DropdownModule_Factory(t) {
        return new (t || DropdownModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"]], primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DropdownItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'p-dropdownItem',
          template: "\n        <li (click)=\"onOptionClick($event)\" role=\"option\"\n            [attr.aria-label]=\"option.label\" [attr.aria-selected]=\"selected\"\n            [ngStyle]=\"{'height': itemSize + 'px'}\"\n            [ngClass]=\"{'ui-dropdown-item ui-corner-all':true,\n                                                'ui-state-highlight': selected,\n                                                'ui-state-disabled':(option.disabled),\n                                                'ui-dropdown-item-empty': !option.label||option.label.length === 0}\">\n            <span *ngIf=\"!template\">{{option.label||'empty'}}</span>\n            <ng-container *ngTemplateOutlet=\"template; context: {$implicit: option}\"></ng-container>\n        </li>\n    "
        }]
      }], function () {
        return [];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        option: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        itemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Dropdown, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'p-dropdown',
          template: "\n         <div #container [ngClass]=\"{'ui-dropdown ui-widget ui-state-default ui-corner-all':true,\n            'ui-state-disabled':disabled, 'ui-dropdown-open':overlayVisible, 'ui-state-focus':focused, 'ui-dropdown-clearable': showClear && !disabled}\"\n            (click)=\"onMouseclick($event)\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #in [attr.id]=\"inputId\" type=\"text\" [attr.aria-label]=\"selectedOption ? selectedOption.label : ' '\" readonly (focus)=\"onInputFocus($event)\" aria-haspopup=\"listbox\"\n                    aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\" [attr.aria-labelledby]=\"ariaLabelledBy\" (blur)=\"onInputBlur($event)\" (keydown)=\"onKeydown($event, true)\"\n                    [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\" [attr.autofocus]=\"autofocus\" role=\"listbox\">\n            </div>\n            <div class=\"ui-dropdown-label-container\" [pTooltip]=\"tooltip\" [tooltipPosition]=\"tooltipPosition\" [positionStyle]=\"tooltipPositionStyle\" [tooltipStyleClass]=\"tooltipStyleClass\">\n                <span [ngClass]=\"{'ui-dropdown-label ui-inputtext ui-corner-all':true,'ui-dropdown-label-empty':(label == null || label.length === 0)}\" *ngIf=\"!editable && (label != null)\">\n                    <ng-container *ngIf=\"!selectedItemTemplate\">{{label||'empty'}}</ng-container>\n                    <ng-container *ngTemplateOutlet=\"selectedItemTemplate; context: {$implicit: selectedOption}\"></ng-container>\n                </span>\n                <span [ngClass]=\"{'ui-dropdown-label ui-inputtext ui-corner-all ui-placeholder':true,'ui-dropdown-label-empty': (placeholder == null || placeholder.length === 0)}\" *ngIf=\"!editable && (label == null)\">{{placeholder||'empty'}}</span>\n                <input #editableInput type=\"text\" [attr.maxlength]=\"maxlength\" [attr.aria-label]=\"selectedOption ? selectedOption.label : ' '\" class=\"ui-dropdown-label ui-inputtext ui-corner-all\" *ngIf=\"editable\" [disabled]=\"disabled\" [attr.placeholder]=\"placeholder\"\n                    aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\" (click)=\"onEditableInputClick()\" (input)=\"onEditableInputChange($event)\" (focus)=\"onEditableInputFocus($event)\" (blur)=\"onInputBlur($event)\">\n                <i class=\"ui-dropdown-clear-icon pi pi-times\" (click)=\"clear($event)\" *ngIf=\"value != null && showClear && !disabled\"></i>\n            </div>\n            <div class=\"ui-dropdown-trigger ui-state-default ui-corner-right\" role=\"button\" aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\">\n                <span class=\"ui-dropdown-trigger-icon ui-clickable\" [ngClass]=\"dropdownIcon\"></span>\n            </div>\n            <div *ngIf=\"overlayVisible\" [ngClass]=\"'ui-dropdown-panel  ui-widget ui-widget-content ui-corner-all ui-shadow'\" [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" [ngStyle]=\"panelStyle\" [class]=\"panelStyleClass\">\n                <div *ngIf=\"filter\" class=\"ui-dropdown-filter-container\" (click)=\"$event.stopPropagation()\">\n                    <input #filter type=\"text\" autocomplete=\"off\" [value]=\"filterValue||''\" class=\"ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all\" [attr.placeholder]=\"filterPlaceholder\"\n                    (keydown.enter)=\"$event.preventDefault()\" (keydown)=\"onKeydown($event, false)\" (input)=\"onFilter($event)\" [attr.aria-label]=\"ariaFilterLabel\">\n                    <span class=\"ui-dropdown-filter-icon pi pi-search\"></span>\n                </div>\n                <div class=\"ui-dropdown-items-wrapper\" [style.max-height]=\"virtualScroll ? 'auto' : (scrollHeight||'auto')\">\n                    <ul class=\"ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset\" role=\"listbox\">\n                        <ng-container *ngIf=\"group\">\n                            <ng-template ngFor let-optgroup [ngForOf]=\"optionsToDisplay\">\n                                <li class=\"ui-dropdown-item-group\">\n                                    <span *ngIf=\"!groupTemplate\">{{optgroup.label||'empty'}}</span>\n                                    <ng-container *ngTemplateOutlet=\"groupTemplate; context: {$implicit: optgroup}\"></ng-container>\n                                </li>\n                                <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: optgroup.items, selectedOption: selectedOption}\"></ng-container>\n                            </ng-template>\n                        </ng-container>\n                        <ng-container *ngIf=\"!group\">\n                            <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: optionsToDisplay, selectedOption: selectedOption}\"></ng-container>\n                        </ng-container>\n                        <ng-template #itemslist let-options let-selectedOption=\"selectedOption\">\n\n                            <ng-container *ngIf=\"!virtualScroll; else virtualScrollList\">\n                                <ng-template ngFor let-option let-i=\"index\" [ngForOf]=\"options\">\n                                    <p-dropdownItem [option]=\"option\" [selected]=\"selectedOption == option\"\n                                                    (onClick)=\"onItemClick($event)\"\n                                                    [template]=\"itemTemplate\"></p-dropdownItem>\n                                </ng-template>\n                            </ng-container>\n                            <ng-template #virtualScrollList>\n                                <cdk-virtual-scroll-viewport (scrolledIndexChange)=\"scrollToSelectedVirtualScrollElement()\" #viewport [ngStyle]=\"{'height': scrollHeight}\" [itemSize]=\"itemSize\" *ngIf=\"virtualScroll && optionsToDisplay && optionsToDisplay.length\">\n                                    <ng-container *cdkVirtualFor=\"let option of options; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd\">\n                                        <p-dropdownItem [option]=\"option\" [selected]=\"selectedOption == option\"\n                                                                   (onClick)=\"onItemClick($event)\"\n                                                                   [template]=\"itemTemplate\"></p-dropdownItem>\n                                    </ng-container>\n                                </cdk-virtual-scroll-viewport>\n                            </ng-template>\n                        </ng-template>\n                        <li *ngIf=\"filter && (!optionsToDisplay || (optionsToDisplay && optionsToDisplay.length === 0))\" class=\"ui-dropdown-empty-message\">{{emptyFilterMessage}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    ",
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('overlayAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'translateY(5%)',
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'translateY(0)',
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}'))])],
          host: {
            '[class.ui-inputwrapper-filled]': 'filled',
            '[class.ui-inputwrapper-focus]': 'focused'
          },
          providers: [DROPDOWN_VALUE_ACCESSOR],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        scrollHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        filterBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        resetFilterOnHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dropdownIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        autoDisplayFirst: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        emptyFilterMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        autoZIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        baseZIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showTransitionOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hideTransitionOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        filterMatchMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipPositionStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        autofocusFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        filter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        panelStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        styleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        panelStyleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        appendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tabindex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        filterPlaceholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        filterLocale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inputId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dataKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        autofocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        optionLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        group: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showClear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        virtualScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        itemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ariaFilterLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ariaLabelledBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxlength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipStyleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        containerViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['container']
        }],
        filterViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['filter']
        }],
        accessibleViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['in']
        }],
        viewPort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"]]
        }],
        editableInputViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['editableInput']
        }],
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"]]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DropdownModule, {
        declarations: function declarations() {
          return [Dropdown, DropdownItem];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"]];
        },
        exports: function exports() {
          return [Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DropdownModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"]],
          exports: [Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
          declarations: [Dropdown, DropdownItem]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-dropdown.js.map

    /***/

  },

  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-paginator.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-paginator.js ***!
    \*************************************************************************/

  /*! exports provided: Paginator, PaginatorModule */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengPaginatorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Paginator", function () {
      return Paginator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatorModule", function () {
      return PaginatorModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");

    function Paginator_div_0_div_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        $implicit: a0
      };
    };

    function Paginator_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_div_1_ng_container_1_Template, 1, 0, "ng-container", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.templateLeft)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.paginatorState));
      }
    }

    function Paginator_div_0_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.currentPageReport);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "ui-state-active": a0
      };
    };

    function Paginator_div_0_a_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_a_8_Template_a_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var pageLink_r7 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.onPageLinkClick($event, pageLink_r7 - 1);
        })("keydown.enter", function Paginator_div_0_a_8_Template_a_keydown_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var pageLink_r7 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.onPageLinkClick($event, pageLink_r7 - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pageLink_r7 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, pageLink_r7 - 1 == ctx_r3.getPage()));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pageLink_r7);
      }
    }

    function Paginator_div_0_p_dropdown_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dropdown", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Paginator_div_0_p_dropdown_13_Template_p_dropdown_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.rows = $event;
        })("onChange", function Paginator_div_0_p_dropdown_13_Template_p_dropdown_onChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.onRppChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r4.rowsPerPageItems)("ngModel", ctx_r4.rows)("appendTo", ctx_r4.dropdownAppendTo)("scrollHeight", ctx_r4.dropdownScrollHeight);
      }
    }

    function Paginator_div_0_div_14_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function Paginator_div_0_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_div_14_ng_container_1_Template, 1, 0, "ng-container", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.templateRight)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r5.paginatorState));
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "ui-state-disabled": a0
      };
    };

    function Paginator_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_div_1_Template, 2, 4, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Paginator_div_0_span_2_Template, 2, 1, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_Template_a_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.changePageToFirst($event);
        })("keydown.enter", function Paginator_div_0_Template_a_keydown_enter_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.changePageToFirst($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_Template_a_click_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.changePageToPrev($event);
        })("keydown.enter", function Paginator_div_0_Template_a_keydown_enter_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.changePageToPrev($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Paginator_div_0_a_8_Template, 2, 4, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_Template_a_click_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.changePageToNext($event);
        })("keydown.enter", function Paginator_div_0_Template_a_keydown_enter_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.changePageToNext($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.changePageToLast($event);
        })("keydown.enter", function Paginator_div_0_Template_a_keydown_enter_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.changePageToLast($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Paginator_div_0_p_dropdown_13_Template, 1, 4, "p-dropdown", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, Paginator_div_0_div_14_Template, 2, 4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.styleClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.style)("ngClass", "ui-paginator ui-widget ui-widget-header ui-unselectable-text ui-helper-clearfix");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.templateLeft);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showCurrentPageReport);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c2, ctx_r0.isFirstPage()))("tabindex", ctx_r0.isFirstPage() ? 0 - 1 : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r0.isFirstPage() ? null : "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c2, ctx_r0.isFirstPage()))("tabindex", ctx_r0.isFirstPage() ? 0 - 1 : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r0.isFirstPage() ? null : "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pageLinks);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c2, ctx_r0.isLastPage()))("tabindex", ctx_r0.isLastPage() ? 0 - 1 : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r0.isLastPage() ? null : "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c2, ctx_r0.isLastPage()))("tabindex", ctx_r0.isLastPage() ? 0 - 1 : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r0.isLastPage() ? null : "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.rowsPerPageOptions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.templateRight);
      }
    }

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var Paginator = /*#__PURE__*/function () {
      function Paginator(cd) {
        _classCallCheck(this, Paginator);

        this.cd = cd;
        this.pageLinkSize = 5;
        this.onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.alwaysShow = true;
        this.dropdownScrollHeight = '200px';
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this.totalRecords = 0;
        this.rows = 0;
        this._first = 0;
      }

      _createClass(Paginator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updatePaginatorState();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(simpleChange) {
          if (simpleChange.totalRecords) {
            this.updatePageLinks();
            this.updatePaginatorState();
            this.updateFirst();
            this.updateRowsPerPageOptions();
          }

          if (simpleChange.first) {
            this._first = simpleChange.first.currentValue;
            this.updatePageLinks();
            this.updatePaginatorState();
          }

          if (simpleChange.rows) {
            this.updatePageLinks();
            this.updatePaginatorState();
          }

          if (simpleChange.rowsPerPageOptions) {
            this.updateRowsPerPageOptions();
          }
        }
      }, {
        key: "updateRowsPerPageOptions",
        value: function updateRowsPerPageOptions() {
          if (this.rowsPerPageOptions) {
            this.rowsPerPageItems = [];

            var _iterator6 = _createForOfIteratorHelper(this.rowsPerPageOptions),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var opt = _step6.value;

                if (typeof opt == 'object' && opt['showAll']) {
                  this.rowsPerPageItems.unshift({
                    label: opt['showAll'],
                    value: this.totalRecords
                  });
                } else {
                  this.rowsPerPageItems.push({
                    label: String(opt),
                    value: opt
                  });
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        }
      }, {
        key: "isFirstPage",
        value: function isFirstPage() {
          return this.getPage() === 0;
        }
      }, {
        key: "isLastPage",
        value: function isLastPage() {
          return this.getPage() === this.getPageCount() - 1;
        }
      }, {
        key: "getPageCount",
        value: function getPageCount() {
          return Math.ceil(this.totalRecords / this.rows) || 1;
        }
      }, {
        key: "calculatePageLinkBoundaries",
        value: function calculatePageLinkBoundaries() {
          var numberOfPages = this.getPageCount(),
              visiblePages = Math.min(this.pageLinkSize, numberOfPages); //calculate range, keep current in middle if necessary

          var start = Math.max(0, Math.ceil(this.getPage() - visiblePages / 2)),
              end = Math.min(numberOfPages - 1, start + visiblePages - 1); //check when approaching to last page

          var delta = this.pageLinkSize - (end - start + 1);
          start = Math.max(0, start - delta);
          return [start, end];
        }
      }, {
        key: "updatePageLinks",
        value: function updatePageLinks() {
          this.pageLinks = [];
          var boundaries = this.calculatePageLinkBoundaries(),
              start = boundaries[0],
              end = boundaries[1];

          for (var i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
          }
        }
      }, {
        key: "changePage",
        value: function changePage(p) {
          var pc = this.getPageCount();

          if (p >= 0 && p < pc) {
            this._first = this.rows * p;
            var state = {
              page: p,
              first: this.first,
              rows: this.rows,
              pageCount: pc
            };
            this.updatePageLinks();
            this.onPageChange.emit(state);
            this.updatePaginatorState();
          }
        }
      }, {
        key: "updateFirst",
        value: function updateFirst() {
          var _this30 = this;

          var page = this.getPage();

          if (page > 0 && this.totalRecords && this.first >= this.totalRecords) {
            Promise.resolve(null).then(function () {
              return _this30.changePage(page - 1);
            });
          }
        }
      }, {
        key: "getPage",
        value: function getPage() {
          return Math.floor(this.first / this.rows);
        }
      }, {
        key: "changePageToFirst",
        value: function changePageToFirst(event) {
          if (!this.isFirstPage()) {
            this.changePage(0);
          }

          event.preventDefault();
        }
      }, {
        key: "changePageToPrev",
        value: function changePageToPrev(event) {
          this.changePage(this.getPage() - 1);
          event.preventDefault();
        }
      }, {
        key: "changePageToNext",
        value: function changePageToNext(event) {
          this.changePage(this.getPage() + 1);
          event.preventDefault();
        }
      }, {
        key: "changePageToLast",
        value: function changePageToLast(event) {
          if (!this.isLastPage()) {
            this.changePage(this.getPageCount() - 1);
          }

          event.preventDefault();
        }
      }, {
        key: "onPageLinkClick",
        value: function onPageLinkClick(event, page) {
          this.changePage(page);
          event.preventDefault();
        }
      }, {
        key: "onRppChange",
        value: function onRppChange(event) {
          this.changePage(this.getPage());
        }
      }, {
        key: "updatePaginatorState",
        value: function updatePaginatorState() {
          this.paginatorState = {
            page: this.getPage(),
            pageCount: this.getPageCount(),
            rows: this.rows,
            first: this.first,
            totalRecords: this.totalRecords
          };
        }
      }, {
        key: "first",
        get: function get() {
          return this._first;
        },
        set: function set(val) {
          this._first = val;
        }
      }, {
        key: "currentPageReport",
        get: function get() {
          return this.currentPageReportTemplate.replace("{currentPage}", String(this.getPage() + 1)).replace("{totalPages}", String(this.getPageCount())).replace("{first}", String(this._first + 1)).replace("{last}", String(Math.min(this._first + this.rows, this.totalRecords))).replace("{rows}", String(this.rows)).replace("{totalRecords}", String(this.totalRecords));
        }
      }]);

      return Paginator;
    }();

    Paginator.ɵfac = function Paginator_Factory(t) {
      return new (t || Paginator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    Paginator.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Paginator,
      selectors: [["p-paginator"]],
      inputs: {
        pageLinkSize: "pageLinkSize",
        alwaysShow: "alwaysShow",
        dropdownScrollHeight: "dropdownScrollHeight",
        currentPageReportTemplate: "currentPageReportTemplate",
        totalRecords: "totalRecords",
        rows: "rows",
        first: "first",
        style: "style",
        styleClass: "styleClass",
        templateLeft: "templateLeft",
        templateRight: "templateRight",
        dropdownAppendTo: "dropdownAppendTo",
        showCurrentPageReport: "showCurrentPageReport",
        rowsPerPageOptions: "rowsPerPageOptions"
      },
      outputs: {
        onPageChange: "onPageChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "class", "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "ngClass"], ["class", "ui-paginator-left-content", 4, "ngIf"], ["class", "ui-paginator-current", 4, "ngIf"], [1, "ui-paginator-first", "ui-paginator-element", "ui-state-default", "ui-corner-all", 3, "ngClass", "tabindex", "click", "keydown.enter"], [1, "ui-paginator-icon", "pi", "pi-step-backward"], ["tabindex", "0", 1, "ui-paginator-prev", "ui-paginator-element", "ui-state-default", "ui-corner-all", 3, "ngClass", "tabindex", "click", "keydown.enter"], [1, "ui-paginator-icon", "pi", "pi-caret-left"], [1, "ui-paginator-pages"], ["tabindex", "0", "class", "ui-paginator-page ui-paginator-element ui-state-default ui-corner-all", 3, "ngClass", "click", "keydown.enter", 4, "ngFor", "ngForOf"], [1, "ui-paginator-next", "ui-paginator-element", "ui-state-default", "ui-corner-all", 3, "ngClass", "tabindex", "click", "keydown.enter"], [1, "ui-paginator-icon", "pi", "pi-caret-right"], [1, "ui-paginator-last", "ui-paginator-element", "ui-state-default", "ui-corner-all", 3, "ngClass", "tabindex", "click", "keydown.enter"], [1, "ui-paginator-icon", "pi", "pi-step-forward"], [3, "options", "ngModel", "appendTo", "scrollHeight", "ngModelChange", "onChange", 4, "ngIf"], ["class", "ui-paginator-right-content", 4, "ngIf"], [1, "ui-paginator-left-content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ui-paginator-current"], ["tabindex", "0", 1, "ui-paginator-page", "ui-paginator-element", "ui-state-default", "ui-corner-all", 3, "ngClass", "click", "keydown.enter"], [3, "options", "ngModel", "appendTo", "scrollHeight", "ngModelChange", "onChange"], [1, "ui-paginator-right-content"]],
      template: function Paginator_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_Template, 15, 29, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alwaysShow ? true : ctx.pageLinks && ctx.pageLinks.length > 1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      encapsulation: 2
    });

    Paginator.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "pageLinkSize", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Paginator.prototype, "onPageChange", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "style", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "styleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "alwaysShow", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "templateLeft", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "templateRight", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "dropdownAppendTo", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "dropdownScrollHeight", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "currentPageReportTemplate", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "showCurrentPageReport", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "totalRecords", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "rows", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "rowsPerPageOptions", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Paginator.prototype, "first", null);

    var PaginatorModule = function PaginatorModule() {
      _classCallCheck(this, PaginatorModule);
    };

    PaginatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PaginatorModule
    });
    PaginatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PaginatorModule_Factory(t) {
        return new (t || PaginatorModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Paginator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'p-paginator',
          template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'ui-paginator ui-widget ui-widget-header ui-unselectable-text ui-helper-clearfix'\"\n            *ngIf=\"alwaysShow ? true : (pageLinks && pageLinks.length > 1)\">\n            <div class=\"ui-paginator-left-content\" *ngIf=\"templateLeft\">\n                <ng-container *ngTemplateOutlet=\"templateLeft; context: {$implicit: paginatorState}\"></ng-container>\n            </div>\n            <span class=\"ui-paginator-current\" *ngIf=\"showCurrentPageReport\">{{currentPageReport}}</span>\n            <a [attr.tabindex]=\"isFirstPage() ? null : '0'\" class=\"ui-paginator-first ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToFirst($event)\" (keydown.enter)=\"changePageToFirst($event)\" [ngClass]=\"{'ui-state-disabled':isFirstPage()}\" [tabindex]=\"isFirstPage() ? -1 : null\">\n                <span class=\"ui-paginator-icon pi pi-step-backward\"></span>\n            </a>\n            <a tabindex=\"0\" [attr.tabindex]=\"isFirstPage() ? null : '0'\" class=\"ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToPrev($event)\" (keydown.enter)=\"changePageToPrev($event)\" [ngClass]=\"{'ui-state-disabled':isFirstPage()}\" [tabindex]=\"isFirstPage() ? -1 : null\">\n                <span class=\"ui-paginator-icon pi pi-caret-left\"></span>\n            </a>\n            <span class=\"ui-paginator-pages\">\n                <a tabindex=\"0\" *ngFor=\"let pageLink of pageLinks\" class=\"ui-paginator-page ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"onPageLinkClick($event, pageLink - 1)\" (keydown.enter)=\"onPageLinkClick($event, pageLink - 1)\" [ngClass]=\"{'ui-state-active': (pageLink-1 == getPage())}\">{{pageLink}}</a>\n            </span>\n            <a [attr.tabindex]=\"isLastPage() ? null : '0'\" class=\"ui-paginator-next ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToNext($event)\" (keydown.enter)=\"changePageToNext($event)\" [ngClass]=\"{'ui-state-disabled':isLastPage()}\" [tabindex]=\"isLastPage() ? -1 : null\">\n                <span class=\"ui-paginator-icon pi pi-caret-right\"></span>\n            </a>\n            <a [attr.tabindex]=\"isLastPage() ? null : '0'\" class=\"ui-paginator-last ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToLast($event)\" (keydown.enter)=\"changePageToLast($event)\" [ngClass]=\"{'ui-state-disabled':isLastPage()}\" [tabindex]=\"isLastPage() ? -1 : null\">\n                <span class=\"ui-paginator-icon pi pi-step-forward\"></span>\n            </a>\n            <p-dropdown [options]=\"rowsPerPageItems\" [(ngModel)]=\"rows\" *ngIf=\"rowsPerPageOptions\" \n                (onChange)=\"onRppChange($event)\" [appendTo]=\"dropdownAppendTo\" [scrollHeight]=\"dropdownScrollHeight\"></p-dropdown>\n            <div class=\"ui-paginator-right-content\" *ngIf=\"templateRight\">\n                <ng-container *ngTemplateOutlet=\"templateRight; context: {$implicit: paginatorState}\"></ng-container>\n            </div>\n        </div>\n    ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        pageLinkSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onPageChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        alwaysShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropdownScrollHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        currentPageReportTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        totalRecords: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        first: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        styleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        templateLeft: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        templateRight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropdownAppendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showCurrentPageReport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rowsPerPageOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaginatorModule, {
        declarations: function declarations() {
          return [Paginator];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]];
        },
        exports: function exports() {
          return [Paginator, primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
          exports: [Paginator, primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
          declarations: [Paginator]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-paginator.js.map

    /***/

  },

  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js ***!
    \*********************************************************************/

  /*! exports provided: CancelEditableRow, CellEditor, ContextMenuRow, EditableColumn, EditableRow, InitEditableRow, ReorderableColumn, ReorderableRow, ReorderableRowHandle, ResizableColumn, RowToggler, SaveEditableRow, ScrollableView, SelectableRow, SelectableRowDblClick, SortIcon, SortableColumn, Table, TableBody, TableCheckbox, TableHeaderCheckbox, TableModule, TableRadioButton, TableService */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengTableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CancelEditableRow", function () {
      return CancelEditableRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CellEditor", function () {
      return CellEditor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContextMenuRow", function () {
      return ContextMenuRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditableColumn", function () {
      return EditableColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditableRow", function () {
      return EditableRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitEditableRow", function () {
      return InitEditableRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReorderableColumn", function () {
      return ReorderableColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReorderableRow", function () {
      return ReorderableRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReorderableRowHandle", function () {
      return ReorderableRowHandle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResizableColumn", function () {
      return ResizableColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RowToggler", function () {
      return RowToggler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaveEditableRow", function () {
      return SaveEditableRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollableView", function () {
      return ScrollableView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectableRow", function () {
      return SelectableRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectableRowDblClick", function () {
      return SelectableRowDblClick;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortIcon", function () {
      return SortIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortableColumn", function () {
      return SortableColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Table", function () {
      return Table;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableBody", function () {
      return TableBody;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableCheckbox", function () {
      return TableCheckbox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableHeaderCheckbox", function () {
      return TableHeaderCheckbox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableModule", function () {
      return TableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableRadioButton", function () {
      return TableRadioButton;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableService", function () {
      return TableService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var primeng_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/paginator */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-paginator.js");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/dom */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dom.js");
    /* harmony import */


    var primeng_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/utils */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-utils.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");

    var _c0 = ["container"];
    var _c1 = ["resizeHelper"];
    var _c2 = ["reorderIndicatorUp"];
    var _c3 = ["reorderIndicatorDown"];
    var _c4 = ["table"];
    var _c5 = ["scrollableView"];
    var _c6 = ["scrollableFrozenView"];

    function Table_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
      }
    }

    function Table_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("ui-table-loading-icon pi-spin " + ctx_r2.loadingIcon);
      }
    }

    function Table_div_4_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function Table_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_div_4_ng_container_1_Template, 1, 0, "ng-container", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.captionTemplate);
      }
    }

    function Table_p_paginator_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-paginator", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function Table_p_paginator_5_Template_p_paginator_onPageChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.onPageChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r4.rows)("first", ctx_r4.first)("totalRecords", ctx_r4.totalRecords)("pageLinkSize", ctx_r4.pageLinks)("alwaysShow", ctx_r4.alwaysShowPaginator)("rowsPerPageOptions", ctx_r4.rowsPerPageOptions)("templateLeft", ctx_r4.paginatorLeftTemplate)("templateRight", ctx_r4.paginatorRightTemplate)("dropdownAppendTo", ctx_r4.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r4.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r4.currentPageReportTemplate)("showCurrentPageReport", ctx_r4.showCurrentPageReport);
      }
    }

    function Table_div_6_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function Table_div_6_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function Table_div_6_tfoot_7_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c7 = function _c7(a0) {
      return {
        $implicit: a0
      };
    };

    function Table_div_6_tfoot_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tfoot", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_div_6_tfoot_7_ng_container_1_Template, 1, 0, "ng-container", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r18.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c7, ctx_r18.columns));
      }
    }

    function Table_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Table_div_6_ng_container_3_Template, 1, 0, "ng-container", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Table_div_6_ng_container_5_Template, 1, 0, "ng-container", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tbody", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Table_div_6_tfoot_7_Template, 2, 4, "tfoot", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.tableStyleClass)("ngStyle", ctx_r5.tableStyle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.colGroupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c7, ctx_r5.columns));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c7, ctx_r5.columns));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pTableBody", ctx_r5.columns)("pTableBodyTemplate", ctx_r5.bodyTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.footerTemplate);
      }
    }

    var _c8 = function _c8(a0) {
      return {
        width: a0
      };
    };

    function Table_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 30, 31);
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pScrollableView", ctx_r20.frozenColumns)("frozen", true)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c8, ctx_r20.frozenWidth))("scrollHeight", ctx_r20.scrollHeight);
      }
    }

    var _c9 = function _c9(a0, a1) {
      return {
        left: a0,
        width: a1
      };
    };

    function Table_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_div_7_div_1_Template, 2, 6, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 28, 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.frozenColumns || ctx_r6.frozenBodyTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pScrollableView", ctx_r6.columns)("frozen", false)("scrollHeight", ctx_r6.scrollHeight)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c9, ctx_r6.frozenWidth, "calc(100% - " + ctx_r6.frozenWidth + ")"));
      }
    }

    function Table_p_paginator_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-paginator", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function Table_p_paginator_8_Template_p_paginator_onPageChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.onPageChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r7.rows)("first", ctx_r7.first)("totalRecords", ctx_r7.totalRecords)("pageLinkSize", ctx_r7.pageLinks)("alwaysShow", ctx_r7.alwaysShowPaginator)("rowsPerPageOptions", ctx_r7.rowsPerPageOptions)("templateLeft", ctx_r7.paginatorLeftTemplate)("templateRight", ctx_r7.paginatorRightTemplate)("dropdownAppendTo", ctx_r7.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r7.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r7.currentPageReportTemplate)("showCurrentPageReport", ctx_r7.showCurrentPageReport);
      }
    }

    function Table_div_9_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function Table_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_div_9_ng_container_1_Template, 1, 0, "ng-container", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.summaryTemplate);
      }
    }

    function Table_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 34, 35);
      }
    }

    function Table_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 36, 37);
      }
    }

    function Table_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 38, 39);
      }
    }

    var _c10 = function _c10(a1, a2, a3, a4, a5, a6) {
      return {
        "ui-table ui-widget": true,
        "ui-table-responsive": a1,
        "ui-table-resizable": a2,
        "ui-table-resizable-fit": a3,
        "ui-table-hoverable-rows": a4,
        "ui-table-auto-layout": a5,
        "ui-table-flex-scrollable": a6
      };
    };

    var _c11 = ["pTableBody", ""];

    function TableBody_ng_container_0_ng_template_1_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c12 = function _c12(a0, a1, a2, a3) {
      return {
        $implicit: a0,
        rowIndex: a1,
        columns: a2,
        editing: a3
      };
    };

    function TableBody_ng_container_0_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableBody_ng_container_0_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 2);
      }

      if (rf & 2) {
        var rowData_r6 = ctx.$implicit;
        var rowIndex_r7 = ctx.index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c12, rowData_r6, ctx_r5.dt.paginator ? ctx_r5.dt.first + rowIndex_r7 : rowIndex_r7, ctx_r5.columns, ctx_r5.dt.editMode === "row" && ctx_r5.dt.isRowEditing(rowData_r6)));
      }
    }

    function TableBody_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_0_ng_template_1_Template, 1, 7, "ng-template", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.dt.paginator && !ctx_r0.dt.lazy ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, ctx_r0.dt.filteredValue || ctx_r0.dt.value, ctx_r0.dt.first, ctx_r0.dt.first + ctx_r0.dt.rows) : ctx_r0.dt.filteredValue || ctx_r0.dt.value)("ngForTrackBy", ctx_r0.dt.rowTrackBy);
      }
    }

    function TableBody_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function TableBody_ng_container_1_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableBody_ng_container_1_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 2);
      }

      if (rf & 2) {
        var rowData_r10 = ctx.$implicit;
        var rowIndex_r11 = ctx.index;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", rowData_r10 ? ctx_r9.template : ctx_r9.dt.loadingBodyTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c12, rowData_r10, ctx_r9.dt.paginator ? ctx_r9.dt.first + rowIndex_r11 : rowIndex_r11, ctx_r9.columns, ctx_r9.dt.editMode === "row" && ctx_r9.dt.isRowEditing(rowData_r10)));
      }
    }

    function TableBody_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_1_ng_template_1_Template, 1, 7, "ng-template", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx_r1.dt.value)("cdkVirtualForTrackBy", ctx_r1.dt.rowTrackBy);
      }
    }

    function TableBody_ng_container_2_ng_template_1_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c13 = function _c13(a0, a1, a2) {
      return {
        $implicit: a0,
        rowIndex: a1,
        columns: a2
      };
    };

    function TableBody_ng_container_2_ng_template_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var rowData_r14 = ctx_r19.$implicit;
        var rowIndex_r15 = ctx_r19.index;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r17.dt.expandedRowTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c13, rowData_r14, ctx_r17.dt.paginator ? ctx_r17.dt.first + rowIndex_r15 : rowIndex_r15, ctx_r17.columns));
      }
    }

    var _c14 = function _c14(a0, a1, a2, a3, a4) {
      return {
        $implicit: a0,
        rowIndex: a1,
        columns: a2,
        expanded: a3,
        editing: a4
      };
    };

    function TableBody_ng_container_2_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableBody_ng_container_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_2_ng_template_1_ng_container_1_Template, 2, 6, "ng-container", 0);
      }

      if (rf & 2) {
        var rowData_r14 = ctx.$implicit;
        var rowIndex_r15 = ctx.index;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r13.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](3, _c14, rowData_r14, ctx_r13.dt.paginator ? ctx_r13.dt.first + rowIndex_r15 : rowIndex_r15, ctx_r13.columns, ctx_r13.dt.isRowExpanded(rowData_r14), ctx_r13.dt.editMode === "row" && ctx_r13.dt.isRowEditing(rowData_r14)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.dt.isRowExpanded(rowData_r14));
      }
    }

    function TableBody_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_2_ng_template_1_Template, 2, 9, "ng-template", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.dt.paginator && !ctx_r2.dt.lazy ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, ctx_r2.dt.filteredValue || ctx_r2.dt.value, ctx_r2.dt.first, ctx_r2.dt.first + ctx_r2.dt.rows) : ctx_r2.dt.filteredValue || ctx_r2.dt.value)("ngForTrackBy", ctx_r2.dt.rowTrackBy);
      }
    }

    function TableBody_ng_container_3_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c15 = function _c15(a0, a1) {
      return {
        $implicit: a0,
        frozen: a1
      };
    };

    function TableBody_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.dt.loadingBodyTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c15, ctx_r3.columns, ctx_r3.frozen));
      }
    }

    function TableBody_ng_container_4_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function TableBody_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.dt.emptyMessageTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c15, ctx_r4.columns, ctx_r4.frozen));
      }
    }

    var _c16 = ["scrollHeader"];
    var _c17 = ["scrollHeaderBox"];
    var _c18 = ["scrollBody"];
    var _c19 = ["scrollTable"];
    var _c20 = ["scrollFooter"];
    var _c21 = ["scrollFooterBox"];
    var _c22 = ["scrollableAligner"];
    var _c23 = ["pScrollableView", ""];

    function ScrollableView_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function ScrollableView_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function ScrollableView_ng_template_9_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function ScrollableView_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ScrollableView_ng_template_9_ng_container_0_Template, 1, 0, "ng-container", 5);
      }

      if (rf & 2) {
        var rowData_r12 = ctx.$implicit;
        var rowIndex_r13 = ctx.index;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.dt.frozenRowsTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c13, rowData_r12, rowIndex_r13, ctx_r4.columns));
      }
    }

    function ScrollableView_ng_container_10_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function ScrollableView_ng_container_10_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23, 24);
      }
    }

    var _c24 = function _c24(a0) {
      return {
        "max-height": a0
      };
    };

    function ScrollableView_ng_container_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ScrollableView_ng_container_10_ng_container_5_Template, 1, 0, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tbody", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ScrollableView_ng_container_10_div_7_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c24, ctx_r5.dt.scrollHeight !== "flex" ? ctx_r5.scrollHeight : undefined));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r5.dt.tableStyleClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r5.dt.tableStyle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.frozen ? ctx_r5.dt.frozenColGroupTemplate || ctx_r5.dt.colGroupTemplate : ctx_r5.dt.colGroupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c7, ctx_r5.columns));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pTableBody", ctx_r5.columns)("pTableBodyTemplate", ctx_r5.frozen ? ctx_r5.dt.frozenBodyTemplate || ctx_r5.dt.bodyTemplate : ctx_r5.dt.bodyTemplate)("frozen", ctx_r5.frozen);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.frozen);
      }
    }

    function ScrollableView_ng_template_11_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function ScrollableView_ng_template_11_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23, 24);
      }
    }

    function ScrollableView_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolledIndexChange", function ScrollableView_ng_template_11_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.onScrollIndexChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScrollableView_ng_template_11_ng_container_3_Template, 1, 0, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tbody", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ScrollableView_ng_template_11_div_5_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r7.dt.scrollHeight !== "flex" ? ctx_r7.scrollHeight : undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", ctx_r7.dt.virtualRowHeight)("minBufferPx", ctx_r7.dt.minBufferPx)("maxBufferPx", ctx_r7.dt.maxBufferPx);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r7.dt.tableStyleClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r7.dt.tableStyle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.frozen ? ctx_r7.dt.frozenColGroupTemplate || ctx_r7.dt.colGroupTemplate : ctx_r7.dt.colGroupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c7, ctx_r7.columns));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pTableBody", ctx_r7.columns)("pTableBodyTemplate", ctx_r7.frozen ? ctx_r7.dt.frozenBodyTemplate || ctx_r7.dt.bodyTemplate : ctx_r7.dt.bodyTemplate)("frozen", ctx_r7.frozen);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.frozen);
      }
    }

    function ScrollableView_ng_container_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function ScrollableView_ng_container_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c25 = function _c25(a0, a1, a2) {
      return {
        "pi-sort-amount-up-alt": a0,
        "pi-sort-amount-down": a1,
        "pi-sort-alt": a2
      };
    };

    function CellEditor_ng_container_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function CellEditor_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CellEditor_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.inputTemplate);
      }
    }

    function CellEditor_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function CellEditor_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CellEditor_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.outputTemplate);
      }
    }

    var _c26 = ["box"];

    var _c27 = function _c27(a1, a2) {
      return {
        "ui-radiobutton-box ui-widget ui-state-default": true,
        "ui-state-active": a1,
        "ui-state-disabled": a2
      };
    };

    var _c28 = function _c28(a0) {
      return {
        "pi pi-circle-on": a0
      };
    };

    var _c29 = function _c29(a1, a2) {
      return {
        "ui-chkbox-box ui-widget ui-state-default": true,
        "ui-state-active": a1,
        "ui-state-disabled": a2
      };
    };

    var _c30 = function _c30(a0) {
      return {
        "pi pi-check": a0
      };
    };

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var TableService = /*#__PURE__*/function () {
      function TableService() {
        _classCallCheck(this, TableService);

        this.sortSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.selectionSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.contextMenuSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.valueSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.totalRecordsSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.columnsSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.sortSource$ = this.sortSource.asObservable();
        this.selectionSource$ = this.selectionSource.asObservable();
        this.contextMenuSource$ = this.contextMenuSource.asObservable();
        this.valueSource$ = this.valueSource.asObservable();
        this.totalRecordsSource$ = this.totalRecordsSource.asObservable();
        this.columnsSource$ = this.columnsSource.asObservable();
      }

      _createClass(TableService, [{
        key: "onSort",
        value: function onSort(sortMeta) {
          this.sortSource.next(sortMeta);
        }
      }, {
        key: "onSelectionChange",
        value: function onSelectionChange() {
          this.selectionSource.next();
        }
      }, {
        key: "onContextMenu",
        value: function onContextMenu(data) {
          this.contextMenuSource.next(data);
        }
      }, {
        key: "onValueChange",
        value: function onValueChange(value) {
          this.valueSource.next(value);
        }
      }, {
        key: "onTotalRecordsChange",
        value: function onTotalRecordsChange(value) {
          this.totalRecordsSource.next(value);
        }
      }, {
        key: "onColumnsChange",
        value: function onColumnsChange(columns) {
          this.columnsSource.next(columns);
        }
      }]);

      return TableService;
    }();

    TableService.ɵfac = function TableService_Factory(t) {
      return new (t || TableService)();
    };

    TableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TableService,
      factory: TableService.ɵfac
    });

    var Table = /*#__PURE__*/function () {
      function Table(el, zone, tableService, cd) {
        _classCallCheck(this, Table);

        this.el = el;
        this.zone = zone;
        this.tableService = tableService;
        this.cd = cd;
        this.pageLinks = 5;
        this.alwaysShowPaginator = true;
        this.paginatorPosition = 'bottom';
        this.paginatorDropdownScrollHeight = '200px';
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this.defaultSortOrder = 1;
        this.sortMode = 'single';
        this.resetPageOnSort = true;
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contextMenuSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contextMenuSelectionMode = "separate";

        this.rowTrackBy = function (index, item) {
          return item;
        };

        this.lazy = false;
        this.lazyLoadOnInit = true;
        this.compareSelectionBy = 'deepEquals';
        this.csvSeparator = ',';
        this.exportFilename = 'download';
        this.filters = {};
        this.filterDelay = 300;
        this.expandedRowKeys = {};
        this.editingRowKeys = {};
        this.rowExpandMode = 'multiple';
        this.virtualScrollDelay = 150;
        this.virtualRowHeight = 28;
        this.columnResizeMode = 'fit';
        this.loadingIcon = 'pi pi-spinner';
        this.showLoader = true;
        this.stateStorage = 'session';
        this.editMode = 'cell';
        this.onRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRowUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRowExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRowCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onContextMenuSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onColResize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onColReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRowReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEditInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEditComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEditCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHeaderCheckboxToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sortFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.firstChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onStateSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onStateRestore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._value = [];
        this._totalRecords = 0;
        this._first = 0;
        this.selectionKeys = {};
        this._sortOrder = 1;
      }

      _createClass(Table, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.lazy && this.lazyLoadOnInit) {
            if (!this.virtualScroll) {
              this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }

            if (this.restoringFilter) {
              this.restoringFilter = false;
            }
          }

          this.initialized = true;
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this31 = this;

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'caption':
                _this31.captionTemplate = item.template;
                break;

              case 'header':
                _this31.headerTemplate = item.template;
                break;

              case 'body':
                _this31.bodyTemplate = item.template;
                break;

              case 'loadingbody':
                _this31.loadingBodyTemplate = item.template;
                break;

              case 'footer':
                _this31.footerTemplate = item.template;
                break;

              case 'summary':
                _this31.summaryTemplate = item.template;
                break;

              case 'colgroup':
                _this31.colGroupTemplate = item.template;
                break;

              case 'rowexpansion':
                _this31.expandedRowTemplate = item.template;
                break;

              case 'frozenrows':
                _this31.frozenRowsTemplate = item.template;
                break;

              case 'frozenheader':
                _this31.frozenHeaderTemplate = item.template;
                break;

              case 'frozenbody':
                _this31.frozenBodyTemplate = item.template;
                break;

              case 'frozenfooter':
                _this31.frozenFooterTemplate = item.template;
                break;

              case 'frozencolgroup':
                _this31.frozenColGroupTemplate = item.template;
                break;

              case 'emptymessage':
                _this31.emptyMessageTemplate = item.template;
                break;

              case 'paginatorleft':
                _this31.paginatorLeftTemplate = item.template;
                break;

              case 'paginatorright':
                _this31.paginatorRightTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.isStateful() && this.resizableColumns) {
            this.restoreColumnWidths();
          }
        }
      }, {
        key: "clearCache",
        value: function clearCache() {
          if (this.scrollable) {
            if (this.scrollableViewChild) {
              this.scrollableViewChild.clearCache();
            }

            if (this.scrollableFrozenViewChild) {
              this.scrollableViewChild.clearCache();
            }
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(simpleChange) {
          if (simpleChange.value) {
            if (this.isStateful() && !this.stateRestored) {
              this.restoreState();
            }

            this._value = simpleChange.value.currentValue;

            if (!this.lazy) {
              this.clearCache();
              this.totalRecords = this._value ? this._value.length : 0;
              if (this.sortMode == 'single' && this.sortField) this.sortSingle();else if (this.sortMode == 'multiple' && this.multiSortMeta) this.sortMultiple();else if (this.hasFilter()) //sort already filters
                this._filter();
            }

            this.tableService.onValueChange(simpleChange.value.currentValue);
          }

          if (simpleChange.columns) {
            this._columns = simpleChange.columns.currentValue;
            this.tableService.onColumnsChange(simpleChange.columns.currentValue);

            if (this._columns && this.isStateful() && this.reorderableColumns && !this.columnOrderStateRestored) {
              this.restoreColumnOrder();
            }
          }

          if (simpleChange.sortField) {
            this._sortField = simpleChange.sortField.currentValue; //avoid triggering lazy load prior to lazy initialization at onInit

            if (!this.lazy || this.initialized) {
              if (this.sortMode === 'single') {
                this.sortSingle();
              }
            }
          }

          if (simpleChange.sortOrder) {
            this._sortOrder = simpleChange.sortOrder.currentValue; //avoid triggering lazy load prior to lazy initialization at onInit

            if (!this.lazy || this.initialized) {
              if (this.sortMode === 'single') {
                this.sortSingle();
              }
            }
          }

          if (simpleChange.multiSortMeta) {
            this._multiSortMeta = simpleChange.multiSortMeta.currentValue;

            if (this.sortMode === 'multiple') {
              this.sortMultiple();
            }
          }

          if (simpleChange.selection) {
            this._selection = simpleChange.selection.currentValue;

            if (!this.preventSelectionSetterPropagation) {
              this.updateSelectionKeys();
              this.tableService.onSelectionChange();
            }

            this.preventSelectionSetterPropagation = false;
          }
        }
      }, {
        key: "updateSelectionKeys",
        value: function updateSelectionKeys() {
          if (this.dataKey && this._selection) {
            this.selectionKeys = {};

            if (Array.isArray(this._selection)) {
              var _iterator7 = _createForOfIteratorHelper(this._selection),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var data = _step7.value;
                  this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data, this.dataKey))] = 1;
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            } else {
              this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(this._selection, this.dataKey))] = 1;
            }
          }
        }
      }, {
        key: "onPageChange",
        value: function onPageChange(event) {
          this.first = event.first;
          this.rows = event.rows;

          if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
          }

          this.onPage.emit({
            first: this.first,
            rows: this.rows
          });
          this.firstChange.emit(this.first);
          this.rowsChange.emit(this.rows);
          this.tableService.onValueChange(this.value);

          if (this.isStateful()) {
            this.saveState();
          }

          this.anchorRowIndex = null;

          if (this.scrollable) {
            this.resetScrollTop();
          }
        }
      }, {
        key: "sort",
        value: function sort(event) {
          var originalEvent = event.originalEvent;

          if (this.sortMode === 'single') {
            this._sortOrder = this.sortField === event.field ? this.sortOrder * -1 : this.defaultSortOrder;
            this._sortField = event.field;
            this.sortSingle();

            if (this.resetPageOnSort) {
              this._first = 0;
              this.firstChange.emit(this._first);

              if (this.scrollable) {
                this.resetScrollTop();
              }
            }
          }

          if (this.sortMode === 'multiple') {
            var metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
            var sortMeta = this.getSortMeta(event.field);

            if (sortMeta) {
              if (!metaKey) {
                this._multiSortMeta = [{
                  field: event.field,
                  order: sortMeta.order * -1
                }];

                if (this.resetPageOnSort) {
                  this._first = 0;
                  this.firstChange.emit(this._first);

                  if (this.scrollable) {
                    this.resetScrollTop();
                  }
                }
              } else {
                sortMeta.order = sortMeta.order * -1;
              }
            } else {
              if (!metaKey || !this.multiSortMeta) {
                this._multiSortMeta = [];

                if (this.resetPageOnSort) {
                  this._first = 0;
                  this.firstChange.emit(this._first);
                }
              }

              this._multiSortMeta.push({
                field: event.field,
                order: this.defaultSortOrder
              });
            }

            this.sortMultiple();
          }

          if (this.isStateful()) {
            this.saveState();
          }

          this.anchorRowIndex = null;
        }
      }, {
        key: "sortSingle",
        value: function sortSingle() {
          var _this32 = this;

          if (this.sortField && this.sortOrder) {
            if (this.restoringSort) {
              this.restoringSort = false;
            }

            if (this.lazy) {
              this.onLazyLoad.emit(this.createLazyLoadMetadata());
            } else if (this.value) {
              if (this.customSort) {
                this.sortFunction.emit({
                  data: this.value,
                  mode: this.sortMode,
                  field: this.sortField,
                  order: this.sortOrder
                });
              } else {
                this.value.sort(function (data1, data2) {
                  var value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data1, _this32.sortField);
                  var value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data2, _this32.sortField);
                  var result = null;
                  if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
                  return _this32.sortOrder * result;
                });
              }

              if (this.hasFilter()) {
                this._filter();
              }
            }

            var sortMeta = {
              field: this.sortField,
              order: this.sortOrder
            };
            this.onSort.emit(sortMeta);
            this.tableService.onSort(sortMeta);
          }
        }
      }, {
        key: "sortMultiple",
        value: function sortMultiple() {
          var _this33 = this;

          if (this.multiSortMeta) {
            if (this.lazy) {
              this.onLazyLoad.emit(this.createLazyLoadMetadata());
            } else if (this.value) {
              if (this.customSort) {
                this.sortFunction.emit({
                  data: this.value,
                  mode: this.sortMode,
                  multiSortMeta: this.multiSortMeta
                });
              } else {
                this.value.sort(function (data1, data2) {
                  return _this33.multisortField(data1, data2, _this33.multiSortMeta, 0);
                });
              }

              if (this.hasFilter()) {
                this._filter();
              }
            }

            this.onSort.emit({
              multisortmeta: this.multiSortMeta
            });
            this.tableService.onSort(this.multiSortMeta);
          }
        }
      }, {
        key: "multisortField",
        value: function multisortField(data1, data2, multiSortMeta, index) {
          var value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data1, multiSortMeta[index].field);
          var value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data2, multiSortMeta[index].field);
          var result = null;
          if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 == 'string' || value1 instanceof String) {
            if (value1.localeCompare && value1 != value2) {
              return multiSortMeta[index].order * value1.localeCompare(value2);
            }
          } else {
            result = value1 < value2 ? -1 : 1;
          }

          if (value1 == value2) {
            return multiSortMeta.length - 1 > index ? this.multisortField(data1, data2, multiSortMeta, index + 1) : 0;
          }

          return multiSortMeta[index].order * result;
        }
      }, {
        key: "getSortMeta",
        value: function getSortMeta(field) {
          if (this.multiSortMeta && this.multiSortMeta.length) {
            for (var i = 0; i < this.multiSortMeta.length; i++) {
              if (this.multiSortMeta[i].field === field) {
                return this.multiSortMeta[i];
              }
            }
          }

          return null;
        }
      }, {
        key: "isSorted",
        value: function isSorted(field) {
          if (this.sortMode === 'single') {
            return this.sortField && this.sortField === field;
          } else if (this.sortMode === 'multiple') {
            var sorted = false;

            if (this.multiSortMeta) {
              for (var i = 0; i < this.multiSortMeta.length; i++) {
                if (this.multiSortMeta[i].field == field) {
                  sorted = true;
                  break;
                }
              }
            }

            return sorted;
          }
        }
      }, {
        key: "handleRowClick",
        value: function handleRowClick(event) {
          var target = event.originalEvent.target;
          var targetNode = target.nodeName;
          var parentNode = target.parentElement && target.parentElement.nodeName;

          if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' || parentNode == 'INPUT' || parentNode == 'BUTTON' || parentNode == 'A' || primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.originalEvent.target, 'ui-clickable')) {
            return;
          }

          if (this.selectionMode) {
            this.preventSelectionSetterPropagation = true;

            if (this.isMultipleSelectionMode() && event.originalEvent.shiftKey && this.anchorRowIndex != null) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();

              if (this.rangeRowIndex != null) {
                this.clearSelectionRange(event.originalEvent);
              }

              this.rangeRowIndex = event.rowIndex;
              this.selectRange(event.originalEvent, event.rowIndex);
            } else {
              var rowData = event.rowData;
              var selected = this.isSelected(rowData);
              var metaSelection = this.rowTouched ? false : this.metaKeySelection;
              var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)) : null;
              this.anchorRowIndex = event.rowIndex;
              this.rangeRowIndex = event.rowIndex;

              if (metaSelection) {
                var metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;

                if (selected && metaKey) {
                  if (this.isSingleSelectionMode()) {
                    this._selection = null;
                    this.selectionKeys = {};
                    this.selectionChange.emit(null);
                  } else {
                    var selectionIndex = this.findIndexInSelection(rowData);
                    this._selection = this.selection.filter(function (val, i) {
                      return i != selectionIndex;
                    });
                    this.selectionChange.emit(this.selection);

                    if (dataKeyValue) {
                      delete this.selectionKeys[dataKeyValue];
                    }
                  }

                  this.onRowUnselect.emit({
                    originalEvent: event.originalEvent,
                    data: rowData,
                    type: 'row'
                  });
                } else {
                  if (this.isSingleSelectionMode()) {
                    this._selection = rowData;
                    this.selectionChange.emit(rowData);

                    if (dataKeyValue) {
                      this.selectionKeys = {};
                      this.selectionKeys[dataKeyValue] = 1;
                    }
                  } else if (this.isMultipleSelectionMode()) {
                    if (metaKey) {
                      this._selection = this.selection || [];
                    } else {
                      this._selection = [];
                      this.selectionKeys = {};
                    }

                    this._selection = [].concat(_toConsumableArray(this.selection), [rowData]);
                    this.selectionChange.emit(this.selection);

                    if (dataKeyValue) {
                      this.selectionKeys[dataKeyValue] = 1;
                    }
                  }

                  this.onRowSelect.emit({
                    originalEvent: event.originalEvent,
                    data: rowData,
                    type: 'row',
                    index: event.rowIndex
                  });
                }
              } else {
                if (this.selectionMode === 'single') {
                  if (selected) {
                    this._selection = null;
                    this.selectionKeys = {};
                    this.selectionChange.emit(this.selection);
                    this.onRowUnselect.emit({
                      originalEvent: event.originalEvent,
                      data: rowData,
                      type: 'row'
                    });
                  } else {
                    this._selection = rowData;
                    this.selectionChange.emit(this.selection);
                    this.onRowSelect.emit({
                      originalEvent: event.originalEvent,
                      data: rowData,
                      type: 'row',
                      index: event.rowIndex
                    });

                    if (dataKeyValue) {
                      this.selectionKeys = {};
                      this.selectionKeys[dataKeyValue] = 1;
                    }
                  }
                } else if (this.selectionMode === 'multiple') {
                  if (selected) {
                    var _selectionIndex = this.findIndexInSelection(rowData);

                    this._selection = this.selection.filter(function (val, i) {
                      return i != _selectionIndex;
                    });
                    this.selectionChange.emit(this.selection);
                    this.onRowUnselect.emit({
                      originalEvent: event.originalEvent,
                      data: rowData,
                      type: 'row'
                    });

                    if (dataKeyValue) {
                      delete this.selectionKeys[dataKeyValue];
                    }
                  } else {
                    this._selection = this.selection ? [].concat(_toConsumableArray(this.selection), [rowData]) : [rowData];
                    this.selectionChange.emit(this.selection);
                    this.onRowSelect.emit({
                      originalEvent: event.originalEvent,
                      data: rowData,
                      type: 'row',
                      index: event.rowIndex
                    });

                    if (dataKeyValue) {
                      this.selectionKeys[dataKeyValue] = 1;
                    }
                  }
                }
              }
            }

            this.tableService.onSelectionChange();

            if (this.isStateful()) {
              this.saveState();
            }
          }

          this.rowTouched = false;
        }
      }, {
        key: "handleRowTouchEnd",
        value: function handleRowTouchEnd(event) {
          this.rowTouched = true;
        }
      }, {
        key: "handleRowRightClick",
        value: function handleRowRightClick(event) {
          if (this.contextMenu) {
            var rowData = event.rowData;

            if (this.contextMenuSelectionMode === 'separate') {
              this.contextMenuSelection = rowData;
              this.contextMenuSelectionChange.emit(rowData);
              this.onContextMenuSelect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                index: event.rowIndex
              });
              this.contextMenu.show(event.originalEvent);
              this.tableService.onContextMenu(rowData);
            } else if (this.contextMenuSelectionMode === 'joint') {
              this.preventSelectionSetterPropagation = true;
              var selected = this.isSelected(rowData);
              var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)) : null;

              if (!selected) {
                if (this.isSingleSelectionMode()) {
                  this.selection = rowData;
                  this.selectionChange.emit(rowData);
                } else if (this.isMultipleSelectionMode()) {
                  this.selection = [rowData];
                  this.selectionChange.emit(this.selection);
                }

                if (dataKeyValue) {
                  this.selectionKeys[dataKeyValue] = 1;
                }
              }

              this.contextMenu.show(event.originalEvent);
              this.onContextMenuSelect.emit({
                originalEvent: event,
                data: rowData,
                index: event.rowIndex
              });
            }
          }
        }
      }, {
        key: "selectRange",
        value: function selectRange(event, rowIndex) {
          var rangeStart, rangeEnd;

          if (this.anchorRowIndex > rowIndex) {
            rangeStart = rowIndex;
            rangeEnd = this.anchorRowIndex;
          } else if (this.anchorRowIndex < rowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = rowIndex;
          } else {
            rangeStart = rowIndex;
            rangeEnd = rowIndex;
          }

          if (this.lazy && this.paginator) {
            rangeStart -= this.first;
            rangeEnd -= this.first;
          }

          for (var i = rangeStart; i <= rangeEnd; i++) {
            var rangeRowData = this.filteredValue ? this.filteredValue[i] : this.value[i];

            if (!this.isSelected(rangeRowData)) {
              this._selection = [].concat(_toConsumableArray(this.selection), [rangeRowData]);
              var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rangeRowData, this.dataKey)) : null;

              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }

              this.onRowSelect.emit({
                originalEvent: event,
                data: rangeRowData,
                type: 'row'
              });
            }
          }

          this.selectionChange.emit(this.selection);
        }
      }, {
        key: "clearSelectionRange",
        value: function clearSelectionRange(event) {
          var _this34 = this;

          var rangeStart, rangeEnd;

          if (this.rangeRowIndex > this.anchorRowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = this.rangeRowIndex;
          } else if (this.rangeRowIndex < this.anchorRowIndex) {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.anchorRowIndex;
          } else {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.rangeRowIndex;
          }

          var _loop = function _loop(i) {
            var rangeRowData = _this34.value[i];

            var selectionIndex = _this34.findIndexInSelection(rangeRowData);

            _this34._selection = _this34.selection.filter(function (val, i) {
              return i != selectionIndex;
            });
            var dataKeyValue = _this34.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rangeRowData, _this34.dataKey)) : null;

            if (dataKeyValue) {
              delete _this34.selectionKeys[dataKeyValue];
            }

            _this34.onRowUnselect.emit({
              originalEvent: event,
              data: rangeRowData,
              type: 'row'
            });
          };

          for (var i = rangeStart; i <= rangeEnd; i++) {
            _loop(i);
          }
        }
      }, {
        key: "isSelected",
        value: function isSelected(rowData) {
          if (rowData && this.selection) {
            if (this.dataKey) {
              return this.selectionKeys[primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)] !== undefined;
            } else {
              if (this.selection instanceof Array) return this.findIndexInSelection(rowData) > -1;else return this.equals(rowData, this.selection);
            }
          }

          return false;
        }
      }, {
        key: "findIndexInSelection",
        value: function findIndexInSelection(rowData) {
          var index = -1;

          if (this.selection && this.selection.length) {
            for (var i = 0; i < this.selection.length; i++) {
              if (this.equals(rowData, this.selection[i])) {
                index = i;
                break;
              }
            }
          }

          return index;
        }
      }, {
        key: "toggleRowWithRadio",
        value: function toggleRowWithRadio(event, rowData) {
          this.preventSelectionSetterPropagation = true;

          if (this.selection != rowData) {
            this._selection = rowData;
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({
              originalEvent: event.originalEvent,
              index: event.rowIndex,
              data: rowData,
              type: 'radiobutton'
            });

            if (this.dataKey) {
              this.selectionKeys = {};
              this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey))] = 1;
            }
          } else {
            this._selection = null;
            this.selectionChange.emit(this.selection);
            this.onRowUnselect.emit({
              originalEvent: event.originalEvent,
              index: event.rowIndex,
              data: rowData,
              type: 'radiobutton'
            });
          }

          this.tableService.onSelectionChange();

          if (this.isStateful()) {
            this.saveState();
          }
        }
      }, {
        key: "toggleRowWithCheckbox",
        value: function toggleRowWithCheckbox(event, rowData) {
          this.selection = this.selection || [];
          var selected = this.isSelected(rowData);
          var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)) : null;
          this.preventSelectionSetterPropagation = true;

          if (selected) {
            var selectionIndex = this.findIndexInSelection(rowData);
            this._selection = this.selection.filter(function (val, i) {
              return i != selectionIndex;
            });
            this.selectionChange.emit(this.selection);
            this.onRowUnselect.emit({
              originalEvent: event.originalEvent,
              index: event.rowIndex,
              data: rowData,
              type: 'checkbox'
            });

            if (dataKeyValue) {
              delete this.selectionKeys[dataKeyValue];
            }
          } else {
            this._selection = this.selection ? [].concat(_toConsumableArray(this.selection), [rowData]) : [rowData];
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({
              originalEvent: event.originalEvent,
              index: event.rowIndex,
              data: rowData,
              type: 'checkbox'
            });

            if (dataKeyValue) {
              this.selectionKeys[dataKeyValue] = 1;
            }
          }

          this.tableService.onSelectionChange();

          if (this.isStateful()) {
            this.saveState();
          }
        }
      }, {
        key: "toggleRowsWithCheckbox",
        value: function toggleRowsWithCheckbox(event, check) {
          this._selection = check ? this.filteredValue ? this.filteredValue.slice() : this.value.slice() : [];
          this.preventSelectionSetterPropagation = true;
          this.updateSelectionKeys();
          this.selectionChange.emit(this._selection);
          this.tableService.onSelectionChange();
          this.onHeaderCheckboxToggle.emit({
            originalEvent: event,
            checked: check
          });

          if (this.isStateful()) {
            this.saveState();
          }
        }
      }, {
        key: "equals",
        value: function equals(data1, data2) {
          return this.compareSelectionBy === 'equals' ? data1 === data2 : primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].equals(data1, data2, this.dataKey);
        }
      }, {
        key: "filter",
        value: function filter(value, field, matchMode) {
          var _this35 = this;

          if (this.filterTimeout) {
            clearTimeout(this.filterTimeout);
          }

          if (!this.isFilterBlank(value)) {
            this.filters[field] = {
              value: value,
              matchMode: matchMode
            };
          } else if (this.filters[field]) {
            delete this.filters[field];
          }

          this.filterTimeout = setTimeout(function () {
            _this35._filter();

            _this35.filterTimeout = null;
          }, this.filterDelay);
          this.anchorRowIndex = null;
        }
      }, {
        key: "filterGlobal",
        value: function filterGlobal(value, matchMode) {
          this.filter(value, 'global', matchMode);
        }
      }, {
        key: "isFilterBlank",
        value: function isFilterBlank(filter) {
          if (filter !== null && filter !== undefined) {
            if (typeof filter === 'string' && filter.trim().length == 0 || filter instanceof Array && filter.length == 0) return true;else return false;
          }

          return true;
        }
      }, {
        key: "_filter",
        value: function _filter() {
          if (!this.restoringFilter) {
            this.first = 0;
            this.firstChange.emit(this.first);
          }

          if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
          } else {
            if (!this.value) {
              return;
            }

            if (!this.hasFilter()) {
              this.filteredValue = null;

              if (this.paginator) {
                this.totalRecords = this.value ? this.value.length : 0;
              }
            } else {
              var globalFilterFieldsArray;

              if (this.filters['global']) {
                if (!this.columns && !this.globalFilterFields) throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');else globalFilterFieldsArray = this.globalFilterFields || this.columns;
              }

              this.filteredValue = [];

              for (var i = 0; i < this.value.length; i++) {
                var localMatch = true;
                var globalMatch = false;
                var localFiltered = false;

                for (var prop in this.filters) {
                  if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
                    localFiltered = true;
                    var filterMeta = this.filters[prop];
                    var filterField = prop;
                    var filterValue = filterMeta.value;
                    var filterMatchMode = filterMeta.matchMode || 'startsWith';
                    var dataFieldValue = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(this.value[i], filterField);
                    var filterConstraint = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"][filterMatchMode];

                    if (!filterConstraint(dataFieldValue, filterValue, this.filterLocale)) {
                      localMatch = false;
                    }

                    if (!localMatch) {
                      break;
                    }
                  }
                }

                if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
                  for (var j = 0; j < globalFilterFieldsArray.length; j++) {
                    var globalFilterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
                    globalMatch = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"][this.filters['global'].matchMode](primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(this.value[i], globalFilterField), this.filters['global'].value, this.filterLocale);

                    if (globalMatch) {
                      break;
                    }
                  }
                }

                var matches = void 0;

                if (this.filters['global']) {
                  matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
                } else {
                  matches = localFiltered && localMatch;
                }

                if (matches) {
                  this.filteredValue.push(this.value[i]);
                }
              }

              if (this.filteredValue.length === this.value.length) {
                this.filteredValue = null;
              }

              if (this.paginator) {
                this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
              }
            }
          }

          this.onFilter.emit({
            filters: this.filters,
            filteredValue: this.filteredValue || this.value
          });
          this.tableService.onValueChange(this.value);

          if (this.isStateful() && !this.restoringFilter) {
            this.saveState();
          }

          if (this.restoringFilter) {
            this.restoringFilter = false;
          }

          this.cd.markForCheck();

          if (this.scrollable) {
            this.resetScrollTop();
          }
        }
      }, {
        key: "hasFilter",
        value: function hasFilter() {
          var empty = true;

          for (var prop in this.filters) {
            if (this.filters.hasOwnProperty(prop)) {
              empty = false;
              break;
            }
          }

          return !empty;
        }
      }, {
        key: "createLazyLoadMetadata",
        value: function createLazyLoadMetadata() {
          return {
            first: this.first,
            rows: this.rows,
            sortField: this.sortField,
            sortOrder: this.sortOrder,
            filters: this.filters,
            globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
            multiSortMeta: this.multiSortMeta
          };
        }
      }, {
        key: "reset",
        value: function reset() {
          this._sortField = null;
          this._sortOrder = this.defaultSortOrder;
          this._multiSortMeta = null;
          this.tableService.onSort(null);
          this.filteredValue = null;
          this.filters = {};
          this.first = 0;
          this.firstChange.emit(this.first);

          if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
          } else {
            this.totalRecords = this._value ? this._value.length : 0;
          }
        }
      }, {
        key: "exportCSV",
        value: function exportCSV(options) {
          var _this36 = this;

          var data = this.filteredValue || this.value;
          var csv = '';

          if (options && options.selectionOnly) {
            data = this.selection || [];
          } //headers


          for (var i = 0; i < this.columns.length; i++) {
            var column = this.columns[i];

            if (column.exportable !== false && column.field) {
              csv += '"' + (column.header || column.field) + '"';

              if (i < this.columns.length - 1) {
                csv += this.csvSeparator;
              }
            }
          } //body


          data.forEach(function (record, i) {
            csv += '\n';

            for (var _i5 = 0; _i5 < _this36.columns.length; _i5++) {
              var _column = _this36.columns[_i5];

              if (_column.exportable !== false && _column.field) {
                var cellData = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(record, _column.field);

                if (cellData != null) {
                  if (_this36.exportFunction) {
                    cellData = _this36.exportFunction({
                      data: cellData,
                      field: _column.field
                    });
                  } else cellData = String(cellData).replace(/"/g, '""');
                } else cellData = '';

                csv += '"' + cellData + '"';

                if (_i5 < _this36.columns.length - 1) {
                  csv += _this36.csvSeparator;
                }
              }
            }
          });
          var blob = new Blob([csv], {
            type: 'text/csv;charset=utf-8;'
          });

          if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, this.exportFilename + '.csv');
          } else {
            var link = document.createElement("a");
            link.style.display = 'none';
            document.body.appendChild(link);

            if (link.download !== undefined) {
              link.setAttribute('href', URL.createObjectURL(blob));
              link.setAttribute('download', this.exportFilename + '.csv');
              link.click();
            } else {
              csv = 'data:text/csv;charset=utf-8,' + csv;
              window.open(encodeURI(csv));
            }

            document.body.removeChild(link);
          }
        }
      }, {
        key: "resetScrollTop",
        value: function resetScrollTop() {
          if (this.virtualScroll) this.scrollToVirtualIndex(0);else this.scrollTo({
            top: 0
          });
        }
      }, {
        key: "scrollToVirtualIndex",
        value: function scrollToVirtualIndex(index) {
          if (this.scrollableViewChild) {
            this.scrollableViewChild.scrollToVirtualIndex(index);
          }

          if (this.scrollableFrozenViewChild) {
            this.scrollableFrozenViewChild.scrollToVirtualIndex(index);
          }
        }
      }, {
        key: "scrollTo",
        value: function scrollTo(options) {
          if (this.scrollableViewChild) {
            this.scrollableViewChild.scrollTo(options);
          }

          if (this.scrollableFrozenViewChild) {
            this.scrollableFrozenViewChild.scrollTo(options);
          }
        }
      }, {
        key: "updateEditingCell",
        value: function updateEditingCell(cell, data, field, index) {
          this.editingCell = cell;
          this.editingCellData = data;
          this.editingCellField = field;
          this.editingCellRowIndex = index;
          this.bindDocumentEditListener();
        }
      }, {
        key: "isEditingCellValid",
        value: function isEditingCellValid() {
          return this.editingCell && primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.editingCell, '.ng-invalid.ng-dirty').length === 0;
        }
      }, {
        key: "bindDocumentEditListener",
        value: function bindDocumentEditListener() {
          var _this37 = this;

          if (!this.documentEditListener) {
            this.documentEditListener = function (event) {
              if (_this37.editingCell && !_this37.editingCellClick && _this37.isEditingCellValid()) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(_this37.editingCell, 'ui-editing-cell');
                _this37.editingCell = null;

                _this37.onEditComplete.emit({
                  field: _this37.editingCellField,
                  data: _this37.editingCellData,
                  originalEvent: event,
                  index: _this37.editingCellRowIndex
                });

                _this37.editingCellField = null;
                _this37.editingCellData = null;
                _this37.editingCellRowIndex = null;

                _this37.unbindDocumentEditListener();
              }

              _this37.editingCellClick = false;
            };

            document.addEventListener('click', this.documentEditListener);
          }
        }
      }, {
        key: "unbindDocumentEditListener",
        value: function unbindDocumentEditListener() {
          if (this.documentEditListener) {
            document.removeEventListener('click', this.documentEditListener);
            this.documentEditListener = null;
          }
        }
      }, {
        key: "initRowEdit",
        value: function initRowEdit(rowData) {
          var dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));
          this.editingRowKeys[dataKeyValue] = true;
        }
      }, {
        key: "saveRowEdit",
        value: function saveRowEdit(rowData, rowElement) {
          if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(rowElement, '.ng-invalid.ng-dirty').length === 0) {
            var dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));
            delete this.editingRowKeys[dataKeyValue];
          }
        }
      }, {
        key: "cancelRowEdit",
        value: function cancelRowEdit(rowData) {
          var dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));
          delete this.editingRowKeys[dataKeyValue];
        }
      }, {
        key: "toggleRow",
        value: function toggleRow(rowData, event) {
          if (!this.dataKey) {
            throw new Error('dataKey must be defined to use row expansion');
          }

          var dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));

          if (this.expandedRowKeys[dataKeyValue] != null) {
            delete this.expandedRowKeys[dataKeyValue];
            this.onRowCollapse.emit({
              originalEvent: event,
              data: rowData
            });
          } else {
            if (this.rowExpandMode === 'single') {
              this.expandedRowKeys = {};
            }

            this.expandedRowKeys[dataKeyValue] = true;
            this.onRowExpand.emit({
              originalEvent: event,
              data: rowData
            });
          }

          if (event) {
            event.preventDefault();
          }

          if (this.isStateful()) {
            this.saveState();
          }
        }
      }, {
        key: "isRowExpanded",
        value: function isRowExpanded(rowData) {
          return this.expandedRowKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey))] === true;
        }
      }, {
        key: "isRowEditing",
        value: function isRowEditing(rowData) {
          return this.editingRowKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey))] === true;
        }
      }, {
        key: "isSingleSelectionMode",
        value: function isSingleSelectionMode() {
          return this.selectionMode === 'single';
        }
      }, {
        key: "isMultipleSelectionMode",
        value: function isMultipleSelectionMode() {
          return this.selectionMode === 'multiple';
        }
      }, {
        key: "onColumnResizeBegin",
        value: function onColumnResizeBegin(event) {
          var containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.containerViewChild.nativeElement).left;
          this.lastResizerHelperX = event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft;
          this.onColumnResize(event);
          event.preventDefault();
        }
      }, {
        key: "onColumnResize",
        value: function onColumnResize(event) {
          var containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.containerViewChild.nativeElement).left;
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
          this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild.nativeElement.offsetHeight + 'px';
          this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
          this.resizeHelperViewChild.nativeElement.style.left = event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft + 'px';
          this.resizeHelperViewChild.nativeElement.style.display = 'block';
        }
      }, {
        key: "onColumnResizeEnd",
        value: function onColumnResizeEnd(event, column) {
          var delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
          var columnWidth = column.offsetWidth;
          var minWidth = parseInt(column.style.minWidth || 15);

          if (columnWidth + delta < minWidth) {
            delta = minWidth - columnWidth;
          }

          var newColumnWidth = columnWidth + delta;

          if (newColumnWidth >= minWidth) {
            if (this.columnResizeMode === 'fit') {
              var nextColumn = column.nextElementSibling;

              while (!nextColumn.offsetParent) {
                nextColumn = nextColumn.nextElementSibling;
              }

              if (nextColumn) {
                var nextColumnWidth = nextColumn.offsetWidth - delta;
                var nextColumnMinWidth = nextColumn.style.minWidth || 15;

                if (newColumnWidth > 15 && nextColumnWidth > parseInt(nextColumnMinWidth)) {
                  if (this.scrollable) {
                    var scrollableView = this.findParentScrollableView(column);
                    var scrollableBodyTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-body table');
                    var scrollableHeaderTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, 'table.ui-table-scrollable-header-table');
                    var scrollableFooterTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, 'table.ui-table-scrollable-footer-table');
                    var resizeColumnIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(column);
                    this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                    this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                    this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                  } else {
                    column.style.width = newColumnWidth + 'px';

                    if (nextColumn) {
                      nextColumn.style.width = nextColumnWidth + 'px';
                    }
                  }
                }
              }
            } else if (this.columnResizeMode === 'expand') {
              if (newColumnWidth > minWidth) {
                if (this.scrollable) {
                  this.setScrollableItemsWidthOnExpandResize(column, newColumnWidth, delta);
                } else {
                  this.tableViewChild.nativeElement.style.width = this.tableViewChild.nativeElement.offsetWidth + delta + 'px';
                  column.style.width = newColumnWidth + 'px';
                  var containerWidth = this.tableViewChild.nativeElement.style.width;
                  this.containerViewChild.nativeElement.style.width = containerWidth + 'px';
                }
              }
            }

            this.onColResize.emit({
              element: column,
              delta: delta
            });

            if (this.isStateful()) {
              this.saveState();
            }
          }

          this.resizeHelperViewChild.nativeElement.style.display = 'none';
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
        }
      }, {
        key: "setScrollableItemsWidthOnExpandResize",
        value: function setScrollableItemsWidthOnExpandResize(column, newColumnWidth, delta) {
          var scrollableView = column ? this.findParentScrollableView(column) : this.containerViewChild.nativeElement;
          var scrollableBody = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-body');
          var scrollableHeader = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-header');
          var scrollableFooter = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-footer');
          var scrollableBodyTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableBody, '.ui-table-scrollable-body table');
          var scrollableHeaderTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableHeader, 'table.ui-table-scrollable-header-table');
          var scrollableFooterTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableFooter, 'table.ui-table-scrollable-footer-table');
          var scrollableBodyTableWidth = column ? scrollableBodyTable.offsetWidth + delta : newColumnWidth;
          var scrollableHeaderTableWidth = column ? scrollableHeaderTable.offsetWidth + delta : newColumnWidth;
          var isContainerInViewport = this.containerViewChild.nativeElement.offsetWidth >= scrollableBodyTableWidth;

          var setWidth = function setWidth(container, table, width, isContainerInViewport) {
            if (container && table) {
              container.style.width = isContainerInViewport ? width + primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth(scrollableBody) + 'px' : 'auto';
              table.style.width = width + 'px';
            }
          };

          setWidth(scrollableBody, scrollableBodyTable, scrollableBodyTableWidth, isContainerInViewport);
          setWidth(scrollableHeader, scrollableHeaderTable, scrollableHeaderTableWidth, isContainerInViewport);
          setWidth(scrollableFooter, scrollableFooterTable, scrollableHeaderTableWidth, isContainerInViewport);

          if (column) {
            var resizeColumnIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(column);
            this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
            this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
            this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
          }
        }
      }, {
        key: "findParentScrollableView",
        value: function findParentScrollableView(column) {
          if (column) {
            var parent = column.parentElement;

            while (parent && !primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(parent, 'ui-table-scrollable-view')) {
              parent = parent.parentElement;
            }

            return parent;
          } else {
            return null;
          }
        }
      }, {
        key: "resizeColGroup",
        value: function resizeColGroup(table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
          if (table) {
            var colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;

            if (colGroup) {
              var col = colGroup.children[resizeColumnIndex];
              var nextCol = col.nextElementSibling;
              col.style.width = newColumnWidth + 'px';

              if (nextCol && nextColumnWidth) {
                nextCol.style.width = nextColumnWidth + 'px';
              }
            } else {
              throw "Scrollable tables require a colgroup to support resizable columns";
            }
          }
        }
      }, {
        key: "onColumnDragStart",
        value: function onColumnDragStart(event, columnElement) {
          this.reorderIconWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild.nativeElement);
          this.reorderIconHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild.nativeElement);
          this.draggedColumn = columnElement;
          event.dataTransfer.setData('text', 'b'); // For firefox
        }
      }, {
        key: "onColumnDragEnter",
        value: function onColumnDragEnter(event, dropHeader) {
          if (this.reorderableColumns && this.draggedColumn && dropHeader) {
            event.preventDefault();
            var containerOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.containerViewChild.nativeElement);
            var dropHeaderOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(dropHeader);

            if (this.draggedColumn != dropHeader) {
              var dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
              var dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(dropHeader, 'preorderablecolumn');
              var targetLeft = dropHeaderOffset.left - containerOffset.left;
              var targetTop = containerOffset.top - dropHeaderOffset.top;
              var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
              this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + 'px';
              this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';

              if (event.pageX > columnCenter) {
                this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + 'px';
                this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + 'px';
                this.dropPosition = 1;
              } else {
                this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + 'px';
                this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + 'px';
                this.dropPosition = -1;
              }

              if (dropIndex - dragIndex === 1 && this.dropPosition === -1 || dropIndex - dragIndex === -1 && this.dropPosition === 1) {
                this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
                this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
              } else {
                this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
                this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
              }
            } else {
              event.dataTransfer.dropEffect = 'none';
            }
          }
        }
      }, {
        key: "onColumnDragLeave",
        value: function onColumnDragLeave(event) {
          if (this.reorderableColumns && this.draggedColumn) {
            event.preventDefault();
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
          }
        }
      }, {
        key: "onColumnDrop",
        value: function onColumnDrop(event, dropColumn) {
          var _this38 = this;

          event.preventDefault();

          if (this.draggedColumn) {
            var dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
            var dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(dropColumn, 'preorderablecolumn');
            var allowDrop = dragIndex != dropIndex;

            if (allowDrop && (dropIndex - dragIndex == 1 && this.dropPosition === -1 || dragIndex - dropIndex == 1 && this.dropPosition === 1)) {
              allowDrop = false;
            }

            if (allowDrop && dropIndex < dragIndex && this.dropPosition === 1) {
              dropIndex = dropIndex + 1;
            }

            if (allowDrop && dropIndex > dragIndex && this.dropPosition === -1) {
              dropIndex = dropIndex - 1;
            }

            if (allowDrop) {
              primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].reorderArray(this.columns, dragIndex, dropIndex);
              this.onColReorder.emit({
                dragIndex: dragIndex,
                dropIndex: dropIndex,
                columns: this.columns
              });

              if (this.isStateful()) {
                this.zone.runOutsideAngular(function () {
                  setTimeout(function () {
                    _this38.saveState();
                  });
                });
              }
            }

            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
            this.draggedColumn.draggable = false;
            this.draggedColumn = null;
            this.dropPosition = null;
          }
        }
      }, {
        key: "onRowDragStart",
        value: function onRowDragStart(event, index) {
          this.rowDragging = true;
          this.draggedRowIndex = index;
          event.dataTransfer.setData('text', 'b'); // For firefox
        }
      }, {
        key: "onRowDragOver",
        value: function onRowDragOver(event, index, rowElement) {
          if (this.rowDragging && this.draggedRowIndex !== index) {
            var rowY = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(rowElement).top + primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getWindowScrollTop();
            var pageY = event.pageY;
            var rowMidY = rowY + primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(rowElement) / 2;
            var prevRowElement = rowElement.previousElementSibling;

            if (pageY < rowMidY) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(rowElement, 'ui-table-dragpoint-bottom');
              this.droppedRowIndex = index;
              if (prevRowElement) primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(prevRowElement, 'ui-table-dragpoint-bottom');else primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(rowElement, 'ui-table-dragpoint-top');
            } else {
              if (prevRowElement) primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(prevRowElement, 'ui-table-dragpoint-bottom');else primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(rowElement, 'ui-table-dragpoint-top');
              this.droppedRowIndex = index + 1;
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(rowElement, 'ui-table-dragpoint-bottom');
            }
          }
        }
      }, {
        key: "onRowDragLeave",
        value: function onRowDragLeave(event, rowElement) {
          var prevRowElement = rowElement.previousElementSibling;

          if (prevRowElement) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(prevRowElement, 'ui-table-dragpoint-bottom');
          }

          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(rowElement, 'ui-table-dragpoint-bottom');
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(rowElement, 'ui-table-dragpoint-top');
        }
      }, {
        key: "onRowDragEnd",
        value: function onRowDragEnd(event) {
          this.rowDragging = false;
          this.draggedRowIndex = null;
          this.droppedRowIndex = null;
        }
      }, {
        key: "onRowDrop",
        value: function onRowDrop(event, rowElement) {
          if (this.droppedRowIndex != null) {
            var dropIndex = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1;
            primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].reorderArray(this.value, this.draggedRowIndex, dropIndex);
            this.onRowReorder.emit({
              dragIndex: this.draggedRowIndex,
              dropIndex: dropIndex
            });
          } //cleanup


          this.onRowDragLeave(event, rowElement);
          this.onRowDragEnd(event);
        }
      }, {
        key: "isEmpty",
        value: function isEmpty() {
          var data = this.filteredValue || this.value;
          return data == null || data.length == 0;
        }
      }, {
        key: "getBlockableElement",
        value: function getBlockableElement() {
          return this.el.nativeElement.children[0];
        }
      }, {
        key: "getStorage",
        value: function getStorage() {
          switch (this.stateStorage) {
            case 'local':
              return window.localStorage;

            case 'session':
              return window.sessionStorage;

            default:
              throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
          }
        }
      }, {
        key: "isStateful",
        value: function isStateful() {
          return this.stateKey != null;
        }
      }, {
        key: "saveState",
        value: function saveState() {
          var storage = this.getStorage();
          var state = {};

          if (this.paginator) {
            state.first = this.first;
            state.rows = this.rows;
          }

          if (this.sortField) {
            state.sortField = this.sortField;
            state.sortOrder = this.sortOrder;
          }

          if (this.multiSortMeta) {
            state.multiSortMeta = this.multiSortMeta;
          }

          if (this.hasFilter()) {
            state.filters = this.filters;
          }

          if (this.resizableColumns) {
            this.saveColumnWidths(state);
          }

          if (this.reorderableColumns) {
            this.saveColumnOrder(state);
          }

          if (this.selection) {
            state.selection = this.selection;
          }

          if (Object.keys(this.expandedRowKeys).length) {
            state.expandedRowKeys = this.expandedRowKeys;
          }

          if (Object.keys(state).length) {
            storage.setItem(this.stateKey, JSON.stringify(state));
          }

          this.onStateSave.emit(state);
        }
      }, {
        key: "clearState",
        value: function clearState() {
          var storage = this.getStorage();

          if (this.stateKey) {
            storage.removeItem(this.stateKey);
          }
        }
      }, {
        key: "restoreState",
        value: function restoreState() {
          var _this39 = this;

          var storage = this.getStorage();
          var stateString = storage.getItem(this.stateKey);

          if (stateString) {
            var state = JSON.parse(stateString);

            if (this.paginator) {
              this.first = state.first;
              this.rows = state.rows;
              this.firstChange.emit(this.first);
              this.rowsChange.emit(this.rows);
            }

            if (state.sortField) {
              this.restoringSort = true;
              this._sortField = state.sortField;
              this._sortOrder = state.sortOrder;
            }

            if (state.multiSortMeta) {
              this.restoringSort = true;
              this._multiSortMeta = state.multiSortMeta;
            }

            if (state.filters) {
              this.restoringFilter = true;
              this.filters = state.filters;
            }

            if (this.resizableColumns) {
              this.columnWidthsState = state.columnWidths;
              this.tableWidthState = state.tableWidth;
            }

            if (state.expandedRowKeys) {
              this.expandedRowKeys = state.expandedRowKeys;
            }

            if (state.selection) {
              Promise.resolve(null).then(function () {
                return _this39.selectionChange.emit(state.selection);
              });
            }

            this.stateRestored = true;
            this.onStateRestore.emit(state);
          }
        }
      }, {
        key: "saveColumnWidths",
        value: function saveColumnWidths(state) {
          var widths = [];
          var headers = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.containerViewChild.nativeElement, '.ui-table-thead > tr:first-child > th');
          headers.map(function (header) {
            return widths.push(primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(header));
          });
          state.columnWidths = widths.join(',');

          if (this.columnResizeMode === 'expand') {
            state.tableWidth = this.scrollable ? primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.containerViewChild.nativeElement, '.ui-table-scrollable-header-table').style.width : primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(this.tableViewChild.nativeElement) + 'px';
          }
        }
      }, {
        key: "restoreColumnWidths",
        value: function restoreColumnWidths() {
          if (this.columnWidthsState) {
            var widths = this.columnWidthsState.split(',');

            if (this.columnResizeMode === 'expand' && this.tableWidthState) {
              if (this.scrollable) {
                this.setScrollableItemsWidthOnExpandResize(null, this.tableWidthState, 0);
              } else {
                this.tableViewChild.nativeElement.style.width = this.tableWidthState;
                this.containerViewChild.nativeElement.style.width = this.tableWidthState;
              }
            }

            if (this.scrollable) {
              var headerCols = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.containerViewChild.nativeElement, '.ui-table-scrollable-header-table > colgroup > col');
              var bodyCols = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.containerViewChild.nativeElement, '.ui-table-scrollable-body table > colgroup > col');
              headerCols.map(function (col, index) {
                return col.style.width = widths[index] + 'px';
              });
              bodyCols.map(function (col, index) {
                return col.style.width = widths[index] + 'px';
              });
            } else {
              var headers = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.tableViewChild.nativeElement, '.ui-table-thead > tr:first-child > th');
              headers.map(function (header, index) {
                return header.style.width = widths[index] + 'px';
              });
            }
          }
        }
      }, {
        key: "saveColumnOrder",
        value: function saveColumnOrder(state) {
          if (this.columns) {
            var columnOrder = [];
            this.columns.map(function (column) {
              columnOrder.push(column.field || column.key);
            });
            state.columnOrder = columnOrder;
          }
        }
      }, {
        key: "restoreColumnOrder",
        value: function restoreColumnOrder() {
          var _this40 = this;

          var storage = this.getStorage();
          var stateString = storage.getItem(this.stateKey);

          if (stateString) {
            var state = JSON.parse(stateString);
            var columnOrder = state.columnOrder;

            if (columnOrder) {
              var reorderedColumns = [];
              columnOrder.map(function (key) {
                return reorderedColumns.push(_this40.findColumnByKey(key));
              });
              this.columnOrderStateRestored = true;
              this.columns = reorderedColumns;
            }
          }
        }
      }, {
        key: "findColumnByKey",
        value: function findColumnByKey(key) {
          if (this.columns) {
            var _iterator8 = _createForOfIteratorHelper(this.columns),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var col = _step8.value;
                if (col.key === key || col.field === key) return col;else continue;
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          } else {
            return null;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unbindDocumentEditListener();
          this.editingCell = null;
          this.initialized = null;
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(val) {
          this._value = val;
        }
      }, {
        key: "columns",
        get: function get() {
          return this._columns;
        },
        set: function set(cols) {
          this._columns = cols;
        }
      }, {
        key: "first",
        get: function get() {
          return this._first;
        },
        set: function set(val) {
          this._first = val;
        }
      }, {
        key: "rows",
        get: function get() {
          return this._rows;
        },
        set: function set(val) {
          this._rows = val;
        }
      }, {
        key: "totalRecords",
        get: function get() {
          return this._totalRecords;
        },
        set: function set(val) {
          this._totalRecords = val;
          this.tableService.onTotalRecordsChange(this._totalRecords);
        }
      }, {
        key: "sortField",
        get: function get() {
          return this._sortField;
        },
        set: function set(val) {
          this._sortField = val;
        }
      }, {
        key: "sortOrder",
        get: function get() {
          return this._sortOrder;
        },
        set: function set(val) {
          this._sortOrder = val;
        }
      }, {
        key: "multiSortMeta",
        get: function get() {
          return this._multiSortMeta;
        },
        set: function set(val) {
          this._multiSortMeta = val;
        }
      }, {
        key: "selection",
        get: function get() {
          return this._selection;
        },
        set: function set(val) {
          this._selection = val;
        }
      }]);

      return Table;
    }();

    Table.ɵfac = function Table_Factory(t) {
      return new (t || Table)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    Table.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Table,
      selectors: [["p-table"]],
      contentQueries: function Table_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"], false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Table_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resizeHelperViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.reorderIndicatorUpViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.reorderIndicatorDownViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollableViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollableFrozenViewChild = _t.first);
        }
      },
      inputs: {
        pageLinks: "pageLinks",
        alwaysShowPaginator: "alwaysShowPaginator",
        paginatorPosition: "paginatorPosition",
        paginatorDropdownScrollHeight: "paginatorDropdownScrollHeight",
        currentPageReportTemplate: "currentPageReportTemplate",
        defaultSortOrder: "defaultSortOrder",
        sortMode: "sortMode",
        resetPageOnSort: "resetPageOnSort",
        contextMenuSelectionMode: "contextMenuSelectionMode",
        rowTrackBy: "rowTrackBy",
        lazy: "lazy",
        lazyLoadOnInit: "lazyLoadOnInit",
        compareSelectionBy: "compareSelectionBy",
        csvSeparator: "csvSeparator",
        exportFilename: "exportFilename",
        filters: "filters",
        filterDelay: "filterDelay",
        expandedRowKeys: "expandedRowKeys",
        editingRowKeys: "editingRowKeys",
        rowExpandMode: "rowExpandMode",
        virtualScrollDelay: "virtualScrollDelay",
        virtualRowHeight: "virtualRowHeight",
        columnResizeMode: "columnResizeMode",
        loadingIcon: "loadingIcon",
        showLoader: "showLoader",
        stateStorage: "stateStorage",
        editMode: "editMode",
        totalRecords: "totalRecords",
        value: "value",
        columns: "columns",
        first: "first",
        rows: "rows",
        sortField: "sortField",
        sortOrder: "sortOrder",
        multiSortMeta: "multiSortMeta",
        selection: "selection",
        contextMenuSelection: "contextMenuSelection",
        frozenColumns: "frozenColumns",
        frozenValue: "frozenValue",
        style: "style",
        styleClass: "styleClass",
        tableStyle: "tableStyle",
        tableStyleClass: "tableStyleClass",
        paginator: "paginator",
        rowsPerPageOptions: "rowsPerPageOptions",
        paginatorDropdownAppendTo: "paginatorDropdownAppendTo",
        showCurrentPageReport: "showCurrentPageReport",
        selectionMode: "selectionMode",
        dataKey: "dataKey",
        metaKeySelection: "metaKeySelection",
        globalFilterFields: "globalFilterFields",
        filterLocale: "filterLocale",
        scrollable: "scrollable",
        scrollHeight: "scrollHeight",
        virtualScroll: "virtualScroll",
        frozenWidth: "frozenWidth",
        responsive: "responsive",
        contextMenu: "contextMenu",
        resizableColumns: "resizableColumns",
        reorderableColumns: "reorderableColumns",
        loading: "loading",
        rowHover: "rowHover",
        customSort: "customSort",
        autoLayout: "autoLayout",
        exportFunction: "exportFunction",
        stateKey: "stateKey",
        minBufferPx: "minBufferPx",
        maxBufferPx: "maxBufferPx"
      },
      outputs: {
        selectionChange: "selectionChange",
        contextMenuSelectionChange: "contextMenuSelectionChange",
        onRowSelect: "onRowSelect",
        onRowUnselect: "onRowUnselect",
        onPage: "onPage",
        onSort: "onSort",
        onFilter: "onFilter",
        onLazyLoad: "onLazyLoad",
        onRowExpand: "onRowExpand",
        onRowCollapse: "onRowCollapse",
        onContextMenuSelect: "onContextMenuSelect",
        onColResize: "onColResize",
        onColReorder: "onColReorder",
        onRowReorder: "onRowReorder",
        onEditInit: "onEditInit",
        onEditComplete: "onEditComplete",
        onEditCancel: "onEditCancel",
        onHeaderCheckboxToggle: "onHeaderCheckboxToggle",
        sortFunction: "sortFunction",
        firstChange: "firstChange",
        rowsChange: "rowsChange",
        onStateSave: "onStateSave",
        onStateRestore: "onStateRestore"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([TableService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 13,
      vars: 22,
      consts: [[3, "ngStyle", "ngClass"], ["container", ""], ["class", "ui-table-loading ui-widget-overlay", 4, "ngIf"], ["class", "ui-table-loading-content", 4, "ngIf"], ["class", "ui-table-caption ui-widget-header", 4, "ngIf"], ["styleClass", "ui-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showCurrentPageReport", "onPageChange", 4, "ngIf"], ["class", "ui-table-wrapper", 4, "ngIf"], ["class", "ui-table-scrollable-wrapper", 4, "ngIf"], ["styleClass", "ui-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showCurrentPageReport", "onPageChange", 4, "ngIf"], ["class", "ui-table-summary ui-widget-header", 4, "ngIf"], ["class", "ui-column-resizer-helper ui-state-highlight", "style", "display:none", 4, "ngIf"], ["class", "pi pi-arrow-down ui-table-reorder-indicator-up", "style", "display:none", 4, "ngIf"], ["class", "pi pi-arrow-up ui-table-reorder-indicator-down", "style", "display:none", 4, "ngIf"], [1, "ui-table-loading", "ui-widget-overlay"], [1, "ui-table-loading-content"], [1, "ui-table-caption", "ui-widget-header"], [4, "ngTemplateOutlet"], ["styleClass", "ui-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showCurrentPageReport", "onPageChange"], [1, "ui-table-wrapper"], ["role", "grid", 3, "ngClass", "ngStyle"], ["table", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ui-table-thead"], [1, "ui-table-tbody", 3, "pTableBody", "pTableBodyTemplate"], ["class", "ui-table-tfoot", 4, "ngIf"], [1, "ui-table-tfoot"], [1, "ui-table-scrollable-wrapper"], ["class", "ui-table-scrollable-view ui-table-frozen-view", 3, "pScrollableView", "frozen", "ngStyle", "scrollHeight", 4, "ngIf"], [1, "ui-table-scrollable-view", 3, "pScrollableView", "frozen", "scrollHeight", "ngStyle"], ["scrollableView", ""], [1, "ui-table-scrollable-view", "ui-table-frozen-view", 3, "pScrollableView", "frozen", "ngStyle", "scrollHeight"], ["scrollableFrozenView", ""], ["styleClass", "ui-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showCurrentPageReport", "onPageChange"], [1, "ui-table-summary", "ui-widget-header"], [1, "ui-column-resizer-helper", "ui-state-highlight", 2, "display", "none"], ["resizeHelper", ""], [1, "pi", "pi-arrow-down", "ui-table-reorder-indicator-up", 2, "display", "none"], ["reorderIndicatorUp", ""], [1, "pi", "pi-arrow-up", "ui-table-reorder-indicator-down", 2, "display", "none"], ["reorderIndicatorDown", ""]],
      template: function Table_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Table_div_2_Template, 1, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Table_div_3_Template, 2, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Table_div_4_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Table_p_paginator_5_Template, 1, 12, "p-paginator", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Table_div_6_Template, 8, 13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Table_div_7_Template, 4, 8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Table_p_paginator_8_Template, 1, 12, "p-paginator", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Table_div_9_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Table_div_10_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Table_span_11_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Table_span_12_Template, 2, 0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](15, _c10, ctx.responsive, ctx.resizableColumns, ctx.resizableColumns && ctx.columnResizeMode === "fit", ctx.rowHover || ctx.selectionMode, ctx.autoLayout, ctx.scrollable && ctx.scrollHeight === "flex"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading && ctx.showLoader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading && ctx.showLoader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.captionTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.scrollable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scrollable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.summaryTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resizableColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reorderableColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reorderableColumns);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], primeng_paginator__WEBPACK_IMPORTED_MODULE_3__["Paginator"], TableBody, ScrollableView];
      },
      encapsulation: 2
    });

    Table.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: TableService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "frozenColumns", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "frozenValue", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "style", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "styleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "tableStyle", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "tableStyleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "paginator", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "pageLinks", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "rowsPerPageOptions", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "alwaysShowPaginator", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "paginatorPosition", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "paginatorDropdownAppendTo", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "paginatorDropdownScrollHeight", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "currentPageReportTemplate", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "showCurrentPageReport", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "defaultSortOrder", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "sortMode", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "resetPageOnSort", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "selectionMode", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "selectionChange", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "contextMenuSelection", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "contextMenuSelectionChange", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "contextMenuSelectionMode", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "dataKey", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "metaKeySelection", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "rowTrackBy", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "lazy", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "lazyLoadOnInit", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "compareSelectionBy", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "csvSeparator", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "exportFilename", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "filters", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "globalFilterFields", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "filterDelay", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "filterLocale", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "expandedRowKeys", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "editingRowKeys", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "rowExpandMode", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "scrollable", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "scrollHeight", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "virtualScroll", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "virtualScrollDelay", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "virtualRowHeight", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "frozenWidth", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "responsive", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "contextMenu", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "resizableColumns", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "columnResizeMode", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "reorderableColumns", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "loading", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "loadingIcon", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "showLoader", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "rowHover", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "customSort", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "autoLayout", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "exportFunction", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "stateKey", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "stateStorage", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "editMode", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "minBufferPx", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "maxBufferPx", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onRowSelect", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onRowUnselect", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onPage", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onSort", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onFilter", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onLazyLoad", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onRowExpand", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onRowCollapse", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onContextMenuSelect", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onColResize", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onColReorder", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onRowReorder", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onEditInit", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onEditComplete", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onEditCancel", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onHeaderCheckboxToggle", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "sortFunction", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "firstChange", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "rowsChange", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onStateSave", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Table.prototype, "onStateRestore", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container')], Table.prototype, "containerViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resizeHelper')], Table.prototype, "resizeHelperViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reorderIndicatorUp')], Table.prototype, "reorderIndicatorUpViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reorderIndicatorDown')], Table.prototype, "reorderIndicatorDownViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('table')], Table.prototype, "tableViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollableView')], Table.prototype, "scrollableViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollableFrozenView')], Table.prototype, "scrollableFrozenViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"])], Table.prototype, "templates", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "value", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "columns", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "first", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "rows", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "totalRecords", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "sortField", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "sortOrder", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "multiSortMeta", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Table.prototype, "selection", null);

    var TableBody = function TableBody(dt) {
      _classCallCheck(this, TableBody);

      this.dt = dt;
    };

    TableBody.ɵfac = function TableBody_Factory(t) {
      return new (t || TableBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table));
    };

    TableBody.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableBody,
      selectors: [["", "pTableBody", ""]],
      inputs: {
        columns: ["pTableBody", "columns"],
        template: ["pTableBodyTemplate", "template"],
        frozen: "frozen"
      },
      attrs: _c11,
      decls: 5,
      vars: 5,
      consts: [[4, "ngIf"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy"]],
      template: function TableBody_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableBody_ng_container_0_Template, 3, 6, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_1_Template, 2, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableBody_ng_container_2_Template, 3, 6, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableBody_ng_container_3_Template, 2, 5, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableBody_ng_container_4_Template, 2, 5, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dt.expandedRowTemplate && !ctx.dt.virtualScroll);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dt.expandedRowTemplate && ctx.dt.virtualScroll);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dt.expandedRowTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dt.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dt.isEmpty() && !ctx.dt.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkVirtualForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"]],
      encapsulation: 2
    });

    TableBody.ctorParameters = function () {
      return [{
        type: Table
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pTableBody")], TableBody.prototype, "columns", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pTableBodyTemplate")], TableBody.prototype, "template", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableBody.prototype, "frozen", void 0);

    var ScrollableView = /*#__PURE__*/function () {
      function ScrollableView(dt, el, zone) {
        var _this41 = this;

        _classCallCheck(this, ScrollableView);

        this.dt = dt;
        this.el = el;
        this.zone = zone;
        this.loadedPages = [];
        this.subscription = this.dt.tableService.valueSource$.subscribe(function () {
          _this41.zone.runOutsideAngular(function () {
            setTimeout(function () {
              _this41.alignScrollBar();
            }, 50);
          });
        });
        this.initialized = false;
      }

      _createClass(ScrollableView, [{
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          if (!this.initialized && this.el.nativeElement.offsetParent) {
            this.alignScrollBar();
            this.initialized = true;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (!this.frozen) {
            if (this.dt.frozenColumns || this.dt.frozenBodyTemplate) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-table-unfrozen-view');
            }

            var frozenView = this.el.nativeElement.previousElementSibling;

            if (frozenView) {
              if (this.dt.virtualScroll) this.frozenSiblingBody = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(frozenView, '.ui-table-virtual-scrollable-body');else this.frozenSiblingBody = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(frozenView, '.ui-table-scrollable-body');
            }
          } else {
            if (this.scrollableAlignerViewChild && this.scrollableAlignerViewChild.nativeElement) {
              this.scrollableAlignerViewChild.nativeElement.style.height = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarHeight() + 'px';
            }
          }

          this.bindEvents();
          this.alignScrollBar();
        }
      }, {
        key: "bindEvents",
        value: function bindEvents() {
          var _this42 = this;

          this.zone.runOutsideAngular(function () {
            if (_this42.scrollHeaderViewChild && _this42.scrollHeaderViewChild.nativeElement) {
              _this42.headerScrollListener = _this42.onHeaderScroll.bind(_this42);

              _this42.scrollHeaderViewChild.nativeElement.addEventListener('scroll', _this42.headerScrollListener);
            }

            if (_this42.scrollFooterViewChild && _this42.scrollFooterViewChild.nativeElement) {
              _this42.footerScrollListener = _this42.onFooterScroll.bind(_this42);

              _this42.scrollFooterViewChild.nativeElement.addEventListener('scroll', _this42.footerScrollListener);
            }

            if (!_this42.frozen) {
              _this42.bodyScrollListener = _this42.onBodyScroll.bind(_this42);
              if (_this42.dt.virtualScroll) _this42.virtualScrollBody.getElementRef().nativeElement.addEventListener('scroll', _this42.bodyScrollListener);else _this42.scrollBodyViewChild.nativeElement.addEventListener('scroll', _this42.bodyScrollListener);
            }
          });
        }
      }, {
        key: "unbindEvents",
        value: function unbindEvents() {
          if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderViewChild.nativeElement.removeEventListener('scroll', this.headerScrollListener);
          }

          if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.removeEventListener('scroll', this.footerScrollListener);
          }

          if (this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
            this.scrollBodyViewChild.nativeElement.removeEventListener('scroll', this.bodyScrollListener);
          }

          if (this.virtualScrollBody && this.virtualScrollBody.getElementRef()) {
            this.virtualScrollBody.getElementRef().nativeElement.removeEventListener('scroll', this.bodyScrollListener);
          }
        }
      }, {
        key: "onHeaderScroll",
        value: function onHeaderScroll() {
          var scrollLeft = this.scrollHeaderViewChild.nativeElement.scrollLeft;
          this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;

          if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.scrollLeft = scrollLeft;
          }

          this.preventBodyScrollPropagation = true;
        }
      }, {
        key: "onFooterScroll",
        value: function onFooterScroll() {
          var scrollLeft = this.scrollFooterViewChild.nativeElement.scrollLeft;
          this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;

          if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderViewChild.nativeElement.scrollLeft = scrollLeft;
          }

          this.preventBodyScrollPropagation = true;
        }
      }, {
        key: "onBodyScroll",
        value: function onBodyScroll(event) {
          if (this.preventBodyScrollPropagation) {
            this.preventBodyScrollPropagation = false;
            return;
          }

          if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + 'px';
          }

          if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + 'px';
          }

          if (this.frozenSiblingBody) {
            this.frozenSiblingBody.scrollTop = event.target.scrollTop;
          }
        }
      }, {
        key: "onScrollIndexChange",
        value: function onScrollIndexChange(index) {
          var _this43 = this;

          if (this.dt.lazy) {
            var pageRange = this.createPageRange(Math.floor(index / this.dt.rows));
            pageRange.forEach(function (page) {
              return _this43.loadPage(page);
            });
          }
        }
      }, {
        key: "createPageRange",
        value: function createPageRange(page) {
          var range = [];

          if (page !== 0) {
            range.push(page - 1);
          }

          range.push(page);

          if (page !== this.getPageCount() - 1) {
            range.push(page + 1);
          }

          return range;
        }
      }, {
        key: "loadPage",
        value: function loadPage(page) {
          if (!this.loadedPages.includes(page)) {
            this.dt.onLazyLoad.emit({
              first: this.dt.rows * page,
              rows: this.dt.rows,
              sortField: this.dt.sortField,
              sortOrder: this.dt.sortOrder,
              filters: this.dt.filters,
              globalFilter: this.dt.filters && this.dt.filters['global'] ? this.dt.filters['global'].value : null,
              multiSortMeta: this.dt.multiSortMeta
            });
            this.loadedPages.push(page);
          }
        }
      }, {
        key: "clearCache",
        value: function clearCache() {
          this.loadedPages = [];
        }
      }, {
        key: "getPageCount",
        value: function getPageCount() {
          var dataToRender = this.dt.filteredValue || this.dt.value;
          var dataLength = dataToRender ? dataToRender.length : 0;
          return Math.ceil(dataLength / this.dt.rows);
        }
      }, {
        key: "scrollToVirtualIndex",
        value: function scrollToVirtualIndex(index) {
          if (this.virtualScrollBody) {
            this.virtualScrollBody.scrollToIndex(index);
          }
        }
      }, {
        key: "scrollTo",
        value: function scrollTo(options) {
          if (this.virtualScrollBody) {
            this.virtualScrollBody.scrollTo(options);
          } else {
            if (this.scrollBodyViewChild.nativeElement.scrollTo) {
              this.scrollBodyViewChild.nativeElement.scrollTo(options);
            } else {
              this.scrollBodyViewChild.nativeElement.scrollLeft = options.left;
              this.scrollBodyViewChild.nativeElement.scrollTop = options.top;
            }
          }
        }
      }, {
        key: "hasVerticalOverflow",
        value: function hasVerticalOverflow() {
          if (this.dt.virtualScroll) return this.virtualScrollBody.getDataLength() * this.dt.virtualRowHeight > this.virtualScrollBody.getViewportSize();else return primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.scrollTableViewChild.nativeElement) > primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.scrollBodyViewChild.nativeElement);
        }
      }, {
        key: "alignScrollBar",
        value: function alignScrollBar() {
          if (!this.frozen) {
            var scrollBarWidth = this.hasVerticalOverflow() ? primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth() : 0;
            this.scrollHeaderBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + 'px';

            if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
              this.scrollFooterBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + 'px';
            }
          }

          this.initialized = false;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unbindEvents();
          this.frozenSiblingBody = null;

          if (this.subscription) {
            this.subscription.unsubscribe();
          }

          this.initialized = false;
        }
      }, {
        key: "scrollHeight",
        get: function get() {
          return this._scrollHeight;
        },
        set: function set(val) {
          this._scrollHeight = val;

          if (val != null && (val.includes('%') || val.includes('calc'))) {
            console.log('Percentage scroll height calculation is removed in favor of the more performant CSS based flex mode, use scrollHeight="flex" instead.');
          }
        }
      }]);

      return ScrollableView;
    }();

    ScrollableView.ɵfac = function ScrollableView_Factory(t) {
      return new (t || ScrollableView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    ScrollableView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScrollableView,
      selectors: [["", "pScrollableView", ""]],
      viewQuery: function ScrollableView_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c16, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c17, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c18, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c19, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c20, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c21, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c22, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkVirtualScrollViewport"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollHeaderViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollHeaderBoxViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollBodyViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollTableViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollFooterViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollFooterBoxViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollableAlignerViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.virtualScrollBody = _t.first);
        }
      },
      inputs: {
        scrollHeight: "scrollHeight",
        columns: ["pScrollableView", "columns"],
        frozen: "frozen"
      },
      attrs: _c23,
      decls: 21,
      vars: 24,
      consts: [[1, "ui-table-scrollable-header", "ui-widget-header"], ["scrollHeader", ""], [1, "ui-table-scrollable-header-box"], ["scrollHeaderBox", ""], [1, "ui-table-scrollable-header-table", 3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ui-table-thead"], [1, "ui-table-tbody"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [4, "ngIf", "ngIfElse"], ["virtualScrollTemplate", ""], [1, "ui-table-scrollable-footer", "ui-widget-header"], ["scrollFooter", ""], [1, "ui-table-scrollable-footer-box"], ["scrollFooterBox", ""], [1, "ui-table-scrollable-footer-table", 3, "ngClass", "ngStyle"], [1, "ui-table-tfoot"], [1, "ui-table-scrollable-body", 3, "ngStyle"], ["scrollBody", ""], [3, "ngStyle"], ["scrollTable", ""], [1, "ui-table-tbody", 3, "pTableBody", "pTableBodyTemplate", "frozen"], ["style", "background-color:transparent", 4, "ngIf"], [2, "background-color", "transparent"], ["scrollableAligner", ""], [1, "ui-table-virtual-scrollable-body", 3, "itemSize", "minBufferPx", "maxBufferPx", "scrolledIndexChange"]],
      template: function ScrollableView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ScrollableView_ng_container_5_Template, 1, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ScrollableView_ng_container_7_Template, 1, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ScrollableView_ng_template_9_Template, 1, 6, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ScrollableView_ng_container_10_Template, 8, 14, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ScrollableView_ng_template_11_Template, 6, 16, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ScrollableView_ng_container_18_Template, 1, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tfoot", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ScrollableView_ng_container_20_Template, 1, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.dt.tableStyleClass)("ngStyle", ctx.dt.tableStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.frozen ? ctx.dt.frozenColGroupTemplate || ctx.dt.colGroupTemplate : ctx.dt.colGroupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c7, ctx.columns));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.frozen ? ctx.dt.frozenHeaderTemplate || ctx.dt.headerTemplate : ctx.dt.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c7, ctx.columns));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dt.frozenValue)("ngForTrackBy", ctx.dt.rowTrackBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dt.virtualScroll)("ngIfElse", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.dt.tableStyleClass)("ngStyle", ctx.dt.tableStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.frozen ? ctx.dt.frozenColGroupTemplate || ctx.dt.colGroupTemplate : ctx.dt.colGroupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c7, ctx.columns));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.frozen ? ctx.dt.frozenFooterTemplate || ctx.dt.footerTemplate : ctx.dt.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c7, ctx.columns));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], TableBody, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkFixedSizeVirtualScroll"]],
      encapsulation: 2
    });

    ScrollableView.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pScrollableView")], ScrollableView.prototype, "columns", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ScrollableView.prototype, "frozen", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollHeader')], ScrollableView.prototype, "scrollHeaderViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollHeaderBox')], ScrollableView.prototype, "scrollHeaderBoxViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollBody')], ScrollableView.prototype, "scrollBodyViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollTable')], ScrollableView.prototype, "scrollTableViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollFooter')], ScrollableView.prototype, "scrollFooterViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollFooterBox')], ScrollableView.prototype, "scrollFooterBoxViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollableAligner')], ScrollableView.prototype, "scrollableAlignerViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkVirtualScrollViewport"])], ScrollableView.prototype, "virtualScrollBody", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ScrollableView.prototype, "scrollHeight", null);

    var SortableColumn = /*#__PURE__*/function () {
      function SortableColumn(dt) {
        var _this44 = this;

        _classCallCheck(this, SortableColumn);

        this.dt = dt;

        if (this.isEnabled()) {
          this.subscription = this.dt.tableService.sortSource$.subscribe(function (sortMeta) {
            _this44.updateSortState();
          });
        }
      }

      _createClass(SortableColumn, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.isEnabled()) {
            this.updateSortState();
          }
        }
      }, {
        key: "updateSortState",
        value: function updateSortState() {
          this.sorted = this.dt.isSorted(this.field);
          this.sortOrder = this.sorted ? this.dt.sortOrder === 1 ? 'ascending' : 'descending' : 'none';
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.updateSortState();
            this.dt.sort({
              originalEvent: event,
              field: this.field
            });
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
          }
        }
      }, {
        key: "onEnterKey",
        value: function onEnterKey(event) {
          this.onClick(event);
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pSortableColumnDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return SortableColumn;
    }();

    SortableColumn.ɵfac = function SortableColumn_Factory(t) {
      return new (t || SortableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table));
    };

    SortableColumn.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SortableColumn,
      selectors: [["", "pSortableColumn", ""]],
      hostVars: 7,
      hostBindings: function SortableColumn_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortableColumn_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          })("keydown.enter", function SortableColumn_keydown_enter_HostBindingHandler($event) {
            return ctx.onEnterKey($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.isEnabled() ? "0" : null)("role", "columnheader")("aria-sort", ctx.sortOrder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ui-sortable-column", ctx.isEnabled())("ui-state-highlight", ctx.sorted);
        }
      },
      inputs: {
        field: ["pSortableColumn", "field"],
        pSortableColumnDisabled: "pSortableColumnDisabled"
      }
    });

    SortableColumn.ctorParameters = function () {
      return [{
        type: Table
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pSortableColumn")], SortableColumn.prototype, "field", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], SortableColumn.prototype, "pSortableColumnDisabled", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])], SortableColumn.prototype, "onClick", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.enter', ['$event'])], SortableColumn.prototype, "onEnterKey", null);

    var SortIcon = /*#__PURE__*/function () {
      function SortIcon(dt) {
        var _this45 = this;

        _classCallCheck(this, SortIcon);

        this.dt = dt;
        this.subscription = this.dt.tableService.sortSource$.subscribe(function (sortMeta) {
          _this45.updateSortState();
        });
      }

      _createClass(SortIcon, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateSortState();
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          event.preventDefault();
        }
      }, {
        key: "updateSortState",
        value: function updateSortState() {
          if (this.dt.sortMode === 'single') {
            this.sortOrder = this.dt.isSorted(this.field) ? this.dt.sortOrder : 0;
          } else if (this.dt.sortMode === 'multiple') {
            var sortMeta = this.dt.getSortMeta(this.field);
            this.sortOrder = sortMeta ? sortMeta.order : 0;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return SortIcon;
    }();

    SortIcon.ɵfac = function SortIcon_Factory(t) {
      return new (t || SortIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table));
    };

    SortIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SortIcon,
      selectors: [["p-sortIcon"]],
      inputs: {
        field: "field"
      },
      decls: 1,
      vars: 5,
      consts: [[1, "ui-sortable-column-icon", "pi", "pi-fw", 3, "ngClass"]],
      template: function SortIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c25, ctx.sortOrder === 1, ctx.sortOrder === 0 - 1, ctx.sortOrder === 0));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      encapsulation: 2
    });

    SortIcon.ctorParameters = function () {
      return [{
        type: Table
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], SortIcon.prototype, "field", void 0);

    var SelectableRow = /*#__PURE__*/function () {
      function SelectableRow(dt, tableService) {
        var _this46 = this;

        _classCallCheck(this, SelectableRow);

        this.dt = dt;
        this.tableService = tableService;

        if (this.isEnabled()) {
          this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this46.selected = _this46.dt.isSelected(_this46.data);
          });
        }
      }

      _createClass(SelectableRow, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.isEnabled()) {
            this.selected = this.dt.isSelected(this.data);
          }
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.dt.handleRowClick({
              originalEvent: event,
              rowData: this.data,
              rowIndex: this.index
            });
          }
        }
      }, {
        key: "onTouchEnd",
        value: function onTouchEnd(event) {
          if (this.isEnabled()) {
            this.dt.handleRowTouchEnd(event);
          }
        }
      }, {
        key: "onArrowDownKeyDown",
        value: function onArrowDownKeyDown(event) {
          if (!this.isEnabled()) {
            return;
          }

          var row = event.currentTarget;
          var nextRow = this.findNextSelectableRow(row);

          if (nextRow) {
            nextRow.focus();
          }

          event.preventDefault();
        }
      }, {
        key: "onArrowUpKeyDown",
        value: function onArrowUpKeyDown(event) {
          if (!this.isEnabled()) {
            return;
          }

          var row = event.currentTarget;
          var prevRow = this.findPrevSelectableRow(row);

          if (prevRow) {
            prevRow.focus();
          }

          event.preventDefault();
        }
      }, {
        key: "onEnterKeyDown",
        value: function onEnterKeyDown(event) {
          if (!this.isEnabled()) {
            return;
          }

          this.dt.handleRowClick({
            originalEvent: event,
            rowData: this.data,
            rowIndex: this.index
          });
        }
      }, {
        key: "findNextSelectableRow",
        value: function findNextSelectableRow(row) {
          var nextRow = row.nextElementSibling;

          if (nextRow) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(nextRow, 'ui-selectable-row')) return nextRow;else return this.findNextSelectableRow(nextRow);
          } else {
            return null;
          }
        }
      }, {
        key: "findPrevSelectableRow",
        value: function findPrevSelectableRow(row) {
          var prevRow = row.previousElementSibling;

          if (prevRow) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(prevRow, 'ui-selectable-row')) return prevRow;else return this.findPrevSelectableRow(prevRow);
          } else {
            return null;
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pSelectableRowDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return SelectableRow;
    }();

    SelectableRow.ɵfac = function SelectableRow_Factory(t) {
      return new (t || SelectableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService));
    };

    SelectableRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SelectableRow,
      selectors: [["", "pSelectableRow", ""]],
      hostVars: 5,
      hostBindings: function SelectableRow_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectableRow_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          })("touchend", function SelectableRow_touchend_HostBindingHandler($event) {
            return ctx.onTouchEnd($event);
          })("keydown.arrowdown", function SelectableRow_keydown_arrowdown_HostBindingHandler($event) {
            return ctx.onArrowDownKeyDown($event);
          })("keydown.arrowup", function SelectableRow_keydown_arrowup_HostBindingHandler($event) {
            return ctx.onArrowUpKeyDown($event);
          })("keydown.enter", function SelectableRow_keydown_enter_HostBindingHandler($event) {
            return ctx.onEnterKeyDown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.isEnabled() ? 0 : undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ui-selectable-row", ctx.isEnabled())("ui-state-highlight", ctx.selected);
        }
      },
      inputs: {
        data: ["pSelectableRow", "data"],
        index: ["pSelectableRowIndex", "index"],
        pSelectableRowDisabled: "pSelectableRowDisabled"
      }
    });

    SelectableRow.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: TableService
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pSelectableRow")], SelectableRow.prototype, "data", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pSelectableRowIndex")], SelectableRow.prototype, "index", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], SelectableRow.prototype, "pSelectableRowDisabled", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])], SelectableRow.prototype, "onClick", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('touchend', ['$event'])], SelectableRow.prototype, "onTouchEnd", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.arrowdown', ['$event'])], SelectableRow.prototype, "onArrowDownKeyDown", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.arrowup', ['$event'])], SelectableRow.prototype, "onArrowUpKeyDown", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.enter', ['$event'])], SelectableRow.prototype, "onEnterKeyDown", null);

    var SelectableRowDblClick = /*#__PURE__*/function () {
      function SelectableRowDblClick(dt, tableService) {
        var _this47 = this;

        _classCallCheck(this, SelectableRowDblClick);

        this.dt = dt;
        this.tableService = tableService;

        if (this.isEnabled()) {
          this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this47.selected = _this47.dt.isSelected(_this47.data);
          });
        }
      }

      _createClass(SelectableRowDblClick, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.isEnabled()) {
            this.selected = this.dt.isSelected(this.data);
          }
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.dt.handleRowClick({
              originalEvent: event,
              rowData: this.data,
              rowIndex: this.index
            });
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pSelectableRowDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return SelectableRowDblClick;
    }();

    SelectableRowDblClick.ɵfac = function SelectableRowDblClick_Factory(t) {
      return new (t || SelectableRowDblClick)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService));
    };

    SelectableRowDblClick.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SelectableRowDblClick,
      selectors: [["", "pSelectableRowDblClick", ""]],
      hostVars: 4,
      hostBindings: function SelectableRowDblClick_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function SelectableRowDblClick_dblclick_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ui-selectable-row", ctx.isEnabled())("ui-state-highlight", ctx.selected);
        }
      },
      inputs: {
        data: ["pSelectableRowDblClick", "data"],
        index: ["pSelectableRowIndex", "index"],
        pSelectableRowDisabled: "pSelectableRowDisabled"
      }
    });

    SelectableRowDblClick.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: TableService
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pSelectableRowDblClick")], SelectableRowDblClick.prototype, "data", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pSelectableRowIndex")], SelectableRowDblClick.prototype, "index", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], SelectableRowDblClick.prototype, "pSelectableRowDisabled", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dblclick', ['$event'])], SelectableRowDblClick.prototype, "onClick", null);

    var ContextMenuRow = /*#__PURE__*/function () {
      function ContextMenuRow(dt, tableService, el) {
        var _this48 = this;

        _classCallCheck(this, ContextMenuRow);

        this.dt = dt;
        this.tableService = tableService;
        this.el = el;

        if (this.isEnabled()) {
          this.subscription = this.dt.tableService.contextMenuSource$.subscribe(function (data) {
            _this48.selected = _this48.dt.equals(_this48.data, data);
          });
        }
      }

      _createClass(ContextMenuRow, [{
        key: "onContextMenu",
        value: function onContextMenu(event) {
          if (this.isEnabled()) {
            this.dt.handleRowRightClick({
              originalEvent: event,
              rowData: this.data,
              rowIndex: this.index
            });
            this.el.nativeElement.focus();
            event.preventDefault();
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pContextMenuRowDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return ContextMenuRow;
    }();

    ContextMenuRow.ɵfac = function ContextMenuRow_Factory(t) {
      return new (t || ContextMenuRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ContextMenuRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ContextMenuRow,
      selectors: [["", "pContextMenuRow", ""]],
      hostVars: 3,
      hostBindings: function ContextMenuRow_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function ContextMenuRow_contextmenu_HostBindingHandler($event) {
            return ctx.onContextMenu($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.isEnabled() ? 0 : undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ui-contextmenu-selected", ctx.selected);
        }
      },
      inputs: {
        data: ["pContextMenuRow", "data"],
        index: ["pContextMenuRowIndex", "index"],
        pContextMenuRowDisabled: "pContextMenuRowDisabled"
      }
    });

    ContextMenuRow.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: TableService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pContextMenuRow")], ContextMenuRow.prototype, "data", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pContextMenuRowIndex")], ContextMenuRow.prototype, "index", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ContextMenuRow.prototype, "pContextMenuRowDisabled", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('contextmenu', ['$event'])], ContextMenuRow.prototype, "onContextMenu", null);

    var RowToggler = /*#__PURE__*/function () {
      function RowToggler(dt) {
        _classCallCheck(this, RowToggler);

        this.dt = dt;
      }

      _createClass(RowToggler, [{
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.dt.toggleRow(this.data, event);
            event.preventDefault();
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pRowTogglerDisabled !== true;
        }
      }]);

      return RowToggler;
    }();

    RowToggler.ɵfac = function RowToggler_Factory(t) {
      return new (t || RowToggler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table));
    };

    RowToggler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: RowToggler,
      selectors: [["", "pRowToggler", ""]],
      hostBindings: function RowToggler_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RowToggler_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      },
      inputs: {
        data: ["pRowToggler", "data"],
        pRowTogglerDisabled: "pRowTogglerDisabled"
      }
    });

    RowToggler.ctorParameters = function () {
      return [{
        type: Table
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pRowToggler')], RowToggler.prototype, "data", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], RowToggler.prototype, "pRowTogglerDisabled", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])], RowToggler.prototype, "onClick", null);

    var ResizableColumn = /*#__PURE__*/function () {
      function ResizableColumn(dt, el, zone) {
        _classCallCheck(this, ResizableColumn);

        this.dt = dt;
        this.el = el;
        this.zone = zone;
      }

      _createClass(ResizableColumn, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this49 = this;

          if (this.isEnabled()) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-resizable-column');
            this.resizer = document.createElement('span');
            this.resizer.className = 'ui-column-resizer ui-clickable';
            this.el.nativeElement.appendChild(this.resizer);
            this.zone.runOutsideAngular(function () {
              _this49.resizerMouseDownListener = _this49.onMouseDown.bind(_this49);

              _this49.resizer.addEventListener('mousedown', _this49.resizerMouseDownListener);
            });
          }
        }
      }, {
        key: "bindDocumentEvents",
        value: function bindDocumentEvents() {
          var _this50 = this;

          this.zone.runOutsideAngular(function () {
            _this50.documentMouseMoveListener = _this50.onDocumentMouseMove.bind(_this50);
            document.addEventListener('mousemove', _this50.documentMouseMoveListener);
            _this50.documentMouseUpListener = _this50.onDocumentMouseUp.bind(_this50);
            document.addEventListener('mouseup', _this50.documentMouseUpListener);
          });
        }
      }, {
        key: "unbindDocumentEvents",
        value: function unbindDocumentEvents() {
          if (this.documentMouseMoveListener) {
            document.removeEventListener('mousemove', this.documentMouseMoveListener);
            this.documentMouseMoveListener = null;
          }

          if (this.documentMouseUpListener) {
            document.removeEventListener('mouseup', this.documentMouseUpListener);
            this.documentMouseUpListener = null;
          }
        }
      }, {
        key: "onMouseDown",
        value: function onMouseDown(event) {
          if (event.which === 1) {
            this.dt.onColumnResizeBegin(event);
            this.bindDocumentEvents();
          }
        }
      }, {
        key: "onDocumentMouseMove",
        value: function onDocumentMouseMove(event) {
          this.dt.onColumnResize(event);
        }
      }, {
        key: "onDocumentMouseUp",
        value: function onDocumentMouseUp(event) {
          this.dt.onColumnResizeEnd(event, this.el.nativeElement);
          this.unbindDocumentEvents();
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pResizableColumnDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.resizerMouseDownListener) {
            this.resizer.removeEventListener('mousedown', this.resizerMouseDownListener);
          }

          this.unbindDocumentEvents();
        }
      }]);

      return ResizableColumn;
    }();

    ResizableColumn.ɵfac = function ResizableColumn_Factory(t) {
      return new (t || ResizableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    ResizableColumn.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ResizableColumn,
      selectors: [["", "pResizableColumn", ""]],
      inputs: {
        pResizableColumnDisabled: "pResizableColumnDisabled"
      }
    });

    ResizableColumn.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ResizableColumn.prototype, "pResizableColumnDisabled", void 0);

    var ReorderableColumn = /*#__PURE__*/function () {
      function ReorderableColumn(dt, el, zone) {
        _classCallCheck(this, ReorderableColumn);

        this.dt = dt;
        this.el = el;
        this.zone = zone;
      }

      _createClass(ReorderableColumn, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.isEnabled()) {
            this.bindEvents();
          }
        }
      }, {
        key: "bindEvents",
        value: function bindEvents() {
          var _this51 = this;

          this.zone.runOutsideAngular(function () {
            _this51.mouseDownListener = _this51.onMouseDown.bind(_this51);

            _this51.el.nativeElement.addEventListener('mousedown', _this51.mouseDownListener);

            _this51.dragStartListener = _this51.onDragStart.bind(_this51);

            _this51.el.nativeElement.addEventListener('dragstart', _this51.dragStartListener);

            _this51.dragOverListener = _this51.onDragEnter.bind(_this51);

            _this51.el.nativeElement.addEventListener('dragover', _this51.dragOverListener);

            _this51.dragEnterListener = _this51.onDragEnter.bind(_this51);

            _this51.el.nativeElement.addEventListener('dragenter', _this51.dragEnterListener);

            _this51.dragLeaveListener = _this51.onDragLeave.bind(_this51);

            _this51.el.nativeElement.addEventListener('dragleave', _this51.dragLeaveListener);
          });
        }
      }, {
        key: "unbindEvents",
        value: function unbindEvents() {
          if (this.mouseDownListener) {
            document.removeEventListener('mousedown', this.mouseDownListener);
            this.mouseDownListener = null;
          }

          if (this.dragOverListener) {
            document.removeEventListener('dragover', this.dragOverListener);
            this.dragOverListener = null;
          }

          if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
          }

          if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
          }

          if (this.dragLeaveListener) {
            document.removeEventListener('dragleave', this.dragLeaveListener);
            this.dragLeaveListener = null;
          }
        }
      }, {
        key: "onMouseDown",
        value: function onMouseDown(event) {
          if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.target, 'ui-column-resizer')) this.el.nativeElement.draggable = false;else this.el.nativeElement.draggable = true;
        }
      }, {
        key: "onDragStart",
        value: function onDragStart(event) {
          this.dt.onColumnDragStart(event, this.el.nativeElement);
        }
      }, {
        key: "onDragOver",
        value: function onDragOver(event) {
          event.preventDefault();
        }
      }, {
        key: "onDragEnter",
        value: function onDragEnter(event) {
          this.dt.onColumnDragEnter(event, this.el.nativeElement);
        }
      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          this.dt.onColumnDragLeave(event);
        }
      }, {
        key: "onDrop",
        value: function onDrop(event) {
          if (this.isEnabled()) {
            this.dt.onColumnDrop(event, this.el.nativeElement);
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pReorderableColumnDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unbindEvents();
        }
      }]);

      return ReorderableColumn;
    }();

    ReorderableColumn.ɵfac = function ReorderableColumn_Factory(t) {
      return new (t || ReorderableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    ReorderableColumn.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ReorderableColumn,
      selectors: [["", "pReorderableColumn", ""]],
      hostBindings: function ReorderableColumn_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function ReorderableColumn_drop_HostBindingHandler($event) {
            return ctx.onDrop($event);
          });
        }
      },
      inputs: {
        pReorderableColumnDisabled: "pReorderableColumnDisabled"
      }
    });

    ReorderableColumn.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ReorderableColumn.prototype, "pReorderableColumnDisabled", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event'])], ReorderableColumn.prototype, "onDrop", null);

    var EditableColumn = /*#__PURE__*/function () {
      function EditableColumn(dt, el, zone) {
        _classCallCheck(this, EditableColumn);

        this.dt = dt;
        this.el = el;
        this.zone = zone;
      }

      _createClass(EditableColumn, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.isEnabled()) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-editable-column');
          }
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.dt.editingCellClick = true;

            if (this.dt.editingCell) {
              if (this.dt.editingCell !== this.el.nativeElement) {
                if (!this.dt.isEditingCellValid()) {
                  return;
                }

                this.closeEditingCell(true, event);
                this.openCell();
              }
            } else {
              this.openCell();
            }
          }
        }
      }, {
        key: "openCell",
        value: function openCell() {
          var _this52 = this;

          this.dt.updateEditingCell(this.el.nativeElement, this.data, this.field, this.rowIndex);
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-editing-cell');
          this.dt.onEditInit.emit({
            field: this.field,
            data: this.data,
            index: this.rowIndex
          });
          this.zone.runOutsideAngular(function () {
            setTimeout(function () {
              var focusCellSelector = _this52.pFocusCellSelector || 'input, textarea, select';
              var focusableElement = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(_this52.el.nativeElement, focusCellSelector);

              if (focusableElement) {
                focusableElement.focus();
              }
            }, 50);
          });
        }
      }, {
        key: "closeEditingCell",
        value: function closeEditingCell(completed, event) {
          if (completed) this.dt.onEditComplete.emit({
            field: this.dt.editingCellField,
            data: this.dt.editingCellData,
            originalEvent: event,
            index: this.rowIndex
          });else this.dt.onEditCancel.emit({
            field: this.dt.editingCellField,
            data: this.dt.editingCellData,
            originalEvent: event,
            index: this.rowIndex
          });
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.dt.editingCell, 'ui-editing-cell');
          this.dt.editingCell = null;
          this.dt.editingCellData = null;
          this.dt.editingCellField = null;
          this.dt.unbindDocumentEditListener();
        }
      }, {
        key: "onEnterKeyDown",
        value: function onEnterKeyDown(event) {
          if (this.isEnabled()) {
            if (this.dt.isEditingCellValid()) {
              this.closeEditingCell(true, event);
            }

            event.preventDefault();
          }
        }
      }, {
        key: "onEscapeKeyDown",
        value: function onEscapeKeyDown(event) {
          if (this.isEnabled()) {
            if (this.dt.isEditingCellValid()) {
              this.closeEditingCell(false, event);
            }

            event.preventDefault();
          }
        }
      }, {
        key: "onShiftKeyDown",
        value: function onShiftKeyDown(event) {
          if (this.isEnabled()) {
            if (event.shiftKey) this.moveToPreviousCell(event);else {
              this.moveToNextCell(event);
            }
          }
        }
      }, {
        key: "findCell",
        value: function findCell(element) {
          if (element) {
            var cell = element;

            while (cell && !primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(cell, 'ui-editing-cell')) {
              cell = cell.parentElement;
            }

            return cell;
          } else {
            return null;
          }
        }
      }, {
        key: "moveToPreviousCell",
        value: function moveToPreviousCell(event) {
          var currentCell = this.findCell(event.target);

          if (currentCell) {
            var targetCell = this.findPreviousEditableColumn(currentCell);

            if (targetCell) {
              if (this.dt.isEditingCellValid()) {
                this.closeEditingCell(true, event);
              }

              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(event.target, 'blur');
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(targetCell, 'click');
              event.preventDefault();
            }
          }
        }
      }, {
        key: "moveToNextCell",
        value: function moveToNextCell(event) {
          var currentCell = this.findCell(event.target);

          if (currentCell) {
            var targetCell = this.findNextEditableColumn(currentCell);

            if (targetCell) {
              if (this.dt.isEditingCellValid()) {
                this.closeEditingCell(true, event);
              }

              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(event.target, 'blur');
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(targetCell, 'click');
              event.preventDefault();
            }
          }
        }
      }, {
        key: "findPreviousEditableColumn",
        value: function findPreviousEditableColumn(cell) {
          var prevCell = cell.previousElementSibling;

          if (!prevCell) {
            var previousRow = cell.parentElement.previousElementSibling;

            if (previousRow) {
              prevCell = previousRow.lastElementChild;
            }
          }

          if (prevCell) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(prevCell, 'ui-editable-column')) return prevCell;else return this.findPreviousEditableColumn(prevCell);
          } else {
            return null;
          }
        }
      }, {
        key: "findNextEditableColumn",
        value: function findNextEditableColumn(cell) {
          var nextCell = cell.nextElementSibling;

          if (!nextCell) {
            var nextRow = cell.parentElement.nextElementSibling;

            if (nextRow) {
              nextCell = nextRow.firstElementChild;
            }
          }

          if (nextCell) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(nextCell, 'ui-editable-column')) return nextCell;else return this.findNextEditableColumn(nextCell);
          } else {
            return null;
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pEditableColumnDisabled !== true;
        }
      }]);

      return EditableColumn;
    }();

    EditableColumn.ɵfac = function EditableColumn_Factory(t) {
      return new (t || EditableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    EditableColumn.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: EditableColumn,
      selectors: [["", "pEditableColumn", ""]],
      hostBindings: function EditableColumn_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditableColumn_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          })("keydown.enter", function EditableColumn_keydown_enter_HostBindingHandler($event) {
            return ctx.onEnterKeyDown($event);
          })("keydown.escape", function EditableColumn_keydown_escape_HostBindingHandler($event) {
            return ctx.onEscapeKeyDown($event);
          })("keydown.tab", function EditableColumn_keydown_tab_HostBindingHandler($event) {
            return ctx.onShiftKeyDown($event);
          })("keydown.shift.tab", function EditableColumn_keydown_shift_tab_HostBindingHandler($event) {
            return ctx.onShiftKeyDown($event);
          })("keydown.meta.tab", function EditableColumn_keydown_meta_tab_HostBindingHandler($event) {
            return ctx.onShiftKeyDown($event);
          });
        }
      },
      inputs: {
        data: ["pEditableColumn", "data"],
        field: ["pEditableColumnField", "field"],
        rowIndex: ["pEditableColumnRowIndex", "rowIndex"],
        pEditableColumnDisabled: "pEditableColumnDisabled",
        pFocusCellSelector: "pFocusCellSelector"
      }
    });

    EditableColumn.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pEditableColumn")], EditableColumn.prototype, "data", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pEditableColumnField")], EditableColumn.prototype, "field", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pEditableColumnRowIndex")], EditableColumn.prototype, "rowIndex", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], EditableColumn.prototype, "pEditableColumnDisabled", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], EditableColumn.prototype, "pFocusCellSelector", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])], EditableColumn.prototype, "onClick", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.enter', ['$event'])], EditableColumn.prototype, "onEnterKeyDown", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.escape', ['$event'])], EditableColumn.prototype, "onEscapeKeyDown", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.tab', ['$event']), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.shift.tab', ['$event']), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.meta.tab', ['$event'])], EditableColumn.prototype, "onShiftKeyDown", null);

    var EditableRow = /*#__PURE__*/function () {
      function EditableRow(el) {
        _classCallCheck(this, EditableRow);

        this.el = el;
      }

      _createClass(EditableRow, [{
        key: "isEnabled",
        value: function isEnabled() {
          return this.pEditableRowDisabled !== true;
        }
      }]);

      return EditableRow;
    }();

    EditableRow.ɵfac = function EditableRow_Factory(t) {
      return new (t || EditableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    EditableRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: EditableRow,
      selectors: [["", "pEditableRow", ""]],
      inputs: {
        data: ["pEditableRow", "data"],
        pEditableRowDisabled: "pEditableRowDisabled"
      }
    });

    EditableRow.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pEditableRow")], EditableRow.prototype, "data", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], EditableRow.prototype, "pEditableRowDisabled", void 0);

    var InitEditableRow = /*#__PURE__*/function () {
      function InitEditableRow(dt, editableRow) {
        _classCallCheck(this, InitEditableRow);

        this.dt = dt;
        this.editableRow = editableRow;
      }

      _createClass(InitEditableRow, [{
        key: "onClick",
        value: function onClick(event) {
          this.dt.initRowEdit(this.editableRow.data);
          event.preventDefault();
        }
      }]);

      return InitEditableRow;
    }();

    InitEditableRow.ɵfac = function InitEditableRow_Factory(t) {
      return new (t || InitEditableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableRow));
    };

    InitEditableRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: InitEditableRow,
      selectors: [["", "pInitEditableRow", ""]],
      hostBindings: function InitEditableRow_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InitEditableRow_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      }
    });

    InitEditableRow.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: EditableRow
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])], InitEditableRow.prototype, "onClick", null);

    var SaveEditableRow = /*#__PURE__*/function () {
      function SaveEditableRow(dt, editableRow) {
        _classCallCheck(this, SaveEditableRow);

        this.dt = dt;
        this.editableRow = editableRow;
      }

      _createClass(SaveEditableRow, [{
        key: "onClick",
        value: function onClick(event) {
          this.dt.saveRowEdit(this.editableRow.data, this.editableRow.el.nativeElement);
          event.preventDefault();
        }
      }]);

      return SaveEditableRow;
    }();

    SaveEditableRow.ɵfac = function SaveEditableRow_Factory(t) {
      return new (t || SaveEditableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableRow));
    };

    SaveEditableRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SaveEditableRow,
      selectors: [["", "pSaveEditableRow", ""]],
      hostBindings: function SaveEditableRow_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveEditableRow_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      }
    });

    SaveEditableRow.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: EditableRow
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])], SaveEditableRow.prototype, "onClick", null);

    var CancelEditableRow = /*#__PURE__*/function () {
      function CancelEditableRow(dt, editableRow) {
        _classCallCheck(this, CancelEditableRow);

        this.dt = dt;
        this.editableRow = editableRow;
      }

      _createClass(CancelEditableRow, [{
        key: "onClick",
        value: function onClick(event) {
          this.dt.cancelRowEdit(this.editableRow.data);
          event.preventDefault();
        }
      }]);

      return CancelEditableRow;
    }();

    CancelEditableRow.ɵfac = function CancelEditableRow_Factory(t) {
      return new (t || CancelEditableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableRow));
    };

    CancelEditableRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CancelEditableRow,
      selectors: [["", "pCancelEditableRow", ""]],
      hostBindings: function CancelEditableRow_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CancelEditableRow_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      }
    });

    CancelEditableRow.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: EditableRow
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])], CancelEditableRow.prototype, "onClick", null);

    var CellEditor = /*#__PURE__*/function () {
      function CellEditor(dt, editableColumn, editableRow) {
        _classCallCheck(this, CellEditor);

        this.dt = dt;
        this.editableColumn = editableColumn;
        this.editableRow = editableRow;
      }

      _createClass(CellEditor, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this53 = this;

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'input':
                _this53.inputTemplate = item.template;
                break;

              case 'output':
                _this53.outputTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "editing",
        get: function get() {
          return this.dt.editingCell && this.editableColumn && this.dt.editingCell === this.editableColumn.el.nativeElement || this.editableRow && this.dt.editMode === 'row' && this.dt.isRowEditing(this.editableRow.data);
        }
      }]);

      return CellEditor;
    }();

    CellEditor.ɵfac = function CellEditor_Factory(t) {
      return new (t || CellEditor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableColumn, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableRow, 8));
    };

    CellEditor.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CellEditor,
      selectors: [["p-cellEditor"]],
      contentQueries: function CellEditor_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"], false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]],
      template: function CellEditor_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CellEditor_ng_container_0_Template, 2, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CellEditor_ng_container_1_Template, 2, 1, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editing);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
      encapsulation: 2
    });

    CellEditor.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: EditableColumn,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: EditableRow,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"])], CellEditor.prototype, "templates", void 0);

    CellEditor = __decorate([__param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])())], CellEditor);

    var TableRadioButton = /*#__PURE__*/function () {
      function TableRadioButton(dt, tableService) {
        var _this54 = this;

        _classCallCheck(this, TableRadioButton);

        this.dt = dt;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
          _this54.checked = _this54.dt.isSelected(_this54.value);
        });
      }

      _createClass(TableRadioButton, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checked = this.dt.isSelected(this.value);
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (!this.disabled) {
            this.dt.toggleRowWithRadio({
              originalEvent: event,
              rowIndex: this.index
            }, this.value);
          }

          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return TableRadioButton;
    }();

    TableRadioButton.ɵfac = function TableRadioButton_Factory(t) {
      return new (t || TableRadioButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService));
    };

    TableRadioButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableRadioButton,
      selectors: [["p-tableRadioButton"]],
      viewQuery: function TableRadioButton_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c26, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.boxViewChild = _t.first);
        }
      },
      inputs: {
        disabled: "disabled",
        value: "value",
        index: "index",
        inputId: "inputId",
        name: "name",
        ariaLabel: "ariaLabel"
      },
      decls: 6,
      vars: 13,
      consts: [[1, "ui-radiobutton", "ui-widget", 3, "click"], [1, "ui-helper-hidden-accessible"], ["type", "radio", 3, "checked", "disabled", "focus", "blur"], ["role", "radio", 3, "ngClass"], ["box", ""], [1, "ui-radiobutton-icon", "ui-clickable", 3, "ngClass"]],
      template: function TableRadioButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableRadioButton_Template_div_click_0_listener($event) {
            return ctx.onClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TableRadioButton_Template_input_focus_2_listener() {
            return ctx.onFocus();
          })("blur", function TableRadioButton_Template_input_blur_2_listener() {
            return ctx.onBlur();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("name", ctx.name)("aria-label", ctx.ariaLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c27, ctx.checked, ctx.disabled));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx.checked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c28, ctx.checked));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      encapsulation: 2
    });

    TableRadioButton.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: TableService
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableRadioButton.prototype, "disabled", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableRadioButton.prototype, "value", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableRadioButton.prototype, "index", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableRadioButton.prototype, "inputId", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableRadioButton.prototype, "name", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableRadioButton.prototype, "ariaLabel", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('box')], TableRadioButton.prototype, "boxViewChild", void 0);

    var TableCheckbox = /*#__PURE__*/function () {
      function TableCheckbox(dt, tableService) {
        var _this55 = this;

        _classCallCheck(this, TableCheckbox);

        this.dt = dt;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
          _this55.checked = _this55.dt.isSelected(_this55.value);
        });
      }

      _createClass(TableCheckbox, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checked = this.dt.isSelected(this.value);
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (!this.disabled) {
            this.dt.toggleRowWithCheckbox({
              originalEvent: event,
              rowIndex: this.index
            }, this.value);
          }

          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return TableCheckbox;
    }();

    TableCheckbox.ɵfac = function TableCheckbox_Factory(t) {
      return new (t || TableCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService));
    };

    TableCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableCheckbox,
      selectors: [["p-tableCheckbox"]],
      viewQuery: function TableCheckbox_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c26, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.boxViewChild = _t.first);
        }
      },
      inputs: {
        disabled: "disabled",
        value: "value",
        index: "index",
        inputId: "inputId",
        name: "name",
        required: "required",
        ariaLabel: "ariaLabel"
      },
      decls: 6,
      vars: 14,
      consts: [[1, "ui-chkbox", "ui-widget", 3, "click"], [1, "ui-helper-hidden-accessible"], ["type", "checkbox", 3, "checked", "disabled", "focus", "blur"], ["role", "checkbox", 3, "ngClass"], ["box", ""], [1, "ui-chkbox-icon", "ui-clickable", 3, "ngClass"]],
      template: function TableCheckbox_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableCheckbox_Template_div_click_0_listener($event) {
            return ctx.onClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TableCheckbox_Template_input_focus_2_listener() {
            return ctx.onFocus();
          })("blur", function TableCheckbox_Template_input_blur_2_listener() {
            return ctx.onBlur();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("name", ctx.name)("required", ctx.required)("aria-label", ctx.ariaLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c29, ctx.checked, ctx.disabled));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx.checked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c30, ctx.checked));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      encapsulation: 2
    });

    TableCheckbox.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: TableService
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableCheckbox.prototype, "disabled", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableCheckbox.prototype, "value", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableCheckbox.prototype, "index", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableCheckbox.prototype, "inputId", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableCheckbox.prototype, "name", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableCheckbox.prototype, "required", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableCheckbox.prototype, "ariaLabel", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('box')], TableCheckbox.prototype, "boxViewChild", void 0);

    var TableHeaderCheckbox = /*#__PURE__*/function () {
      function TableHeaderCheckbox(dt, tableService) {
        var _this56 = this;

        _classCallCheck(this, TableHeaderCheckbox);

        this.dt = dt;
        this.tableService = tableService;
        this.valueChangeSubscription = this.dt.tableService.valueSource$.subscribe(function () {
          _this56.checked = _this56.updateCheckedState();
        });
        this.selectionChangeSubscription = this.dt.tableService.selectionSource$.subscribe(function () {
          _this56.checked = _this56.updateCheckedState();
        });
      }

      _createClass(TableHeaderCheckbox, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checked = this.updateCheckedState();
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (!this.disabled) {
            if (this.dt.value && this.dt.value.length > 0) {
              this.dt.toggleRowsWithCheckbox(event, !this.checked);
            }
          }

          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "isDisabled",
        value: function isDisabled() {
          return this.disabled || !this.dt.value || !this.dt.value.length;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.selectionChangeSubscription) {
            this.selectionChangeSubscription.unsubscribe();
          }

          if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
          }
        }
      }, {
        key: "updateCheckedState",
        value: function updateCheckedState() {
          if (this.dt.filteredValue) {
            var val = this.dt.filteredValue;
            return val && val.length > 0 && this.dt.selection && this.dt.selection.length > 0 && this.isAllFilteredValuesChecked();
          } else {
            var _val = this.dt.value;
            return _val && _val.length > 0 && this.dt.selection && this.dt.selection.length > 0 && this.dt.selection.length === _val.length;
          }
        }
      }, {
        key: "isAllFilteredValuesChecked",
        value: function isAllFilteredValuesChecked() {
          if (!this.dt.filteredValue) {
            return false;
          } else {
            var _iterator9 = _createForOfIteratorHelper(this.dt.filteredValue),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var rowData = _step9.value;

                if (!this.dt.isSelected(rowData)) {
                  return false;
                }
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            return true;
          }
        }
      }]);

      return TableHeaderCheckbox;
    }();

    TableHeaderCheckbox.ɵfac = function TableHeaderCheckbox_Factory(t) {
      return new (t || TableHeaderCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService));
    };

    TableHeaderCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableHeaderCheckbox,
      selectors: [["p-tableHeaderCheckbox"]],
      viewQuery: function TableHeaderCheckbox_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c26, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.boxViewChild = _t.first);
        }
      },
      inputs: {
        disabled: "disabled",
        inputId: "inputId",
        name: "name",
        ariaLabel: "ariaLabel"
      },
      decls: 7,
      vars: 13,
      consts: [[1, "ui-chkbox", "ui-widget", 3, "click"], [1, "ui-helper-hidden-accessible"], ["type", "checkbox", 3, "checked", "disabled", "focus", "blur"], ["cb", ""], ["role", "checkbox", 3, "ngClass"], ["box", ""], [1, "ui-chkbox-icon", "ui-clickable", 3, "ngClass"]],
      template: function TableHeaderCheckbox_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableHeaderCheckbox_Template_div_click_0_listener($event) {
            return ctx.onClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TableHeaderCheckbox_Template_input_focus_2_listener() {
            return ctx.onFocus();
          })("blur", function TableHeaderCheckbox_Template_input_blur_2_listener() {
            return ctx.onBlur();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.isDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("name", ctx.name)("aria-label", ctx.ariaLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c29, ctx.checked, ctx.isDisabled()));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx.checked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c30, ctx.checked));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      encapsulation: 2
    });

    TableHeaderCheckbox.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: TableService
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('box')], TableHeaderCheckbox.prototype, "boxViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableHeaderCheckbox.prototype, "disabled", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableHeaderCheckbox.prototype, "inputId", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableHeaderCheckbox.prototype, "name", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], TableHeaderCheckbox.prototype, "ariaLabel", void 0);

    var ReorderableRowHandle = /*#__PURE__*/function () {
      function ReorderableRowHandle(el) {
        _classCallCheck(this, ReorderableRowHandle);

        this.el = el;
      }

      _createClass(ReorderableRowHandle, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-table-reorderablerow-handle');
        }
      }]);

      return ReorderableRowHandle;
    }();

    ReorderableRowHandle.ɵfac = function ReorderableRowHandle_Factory(t) {
      return new (t || ReorderableRowHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ReorderableRowHandle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ReorderableRowHandle,
      selectors: [["", "pReorderableRowHandle", ""]],
      inputs: {
        index: ["pReorderableRowHandle", "index"]
      }
    });

    ReorderableRowHandle.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pReorderableRowHandle")], ReorderableRowHandle.prototype, "index", void 0);

    var ReorderableRow = /*#__PURE__*/function () {
      function ReorderableRow(dt, el, zone) {
        _classCallCheck(this, ReorderableRow);

        this.dt = dt;
        this.el = el;
        this.zone = zone;
      }

      _createClass(ReorderableRow, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.isEnabled()) {
            this.el.nativeElement.droppable = true;
            this.bindEvents();
          }
        }
      }, {
        key: "bindEvents",
        value: function bindEvents() {
          var _this57 = this;

          this.zone.runOutsideAngular(function () {
            _this57.mouseDownListener = _this57.onMouseDown.bind(_this57);

            _this57.el.nativeElement.addEventListener('mousedown', _this57.mouseDownListener);

            _this57.dragStartListener = _this57.onDragStart.bind(_this57);

            _this57.el.nativeElement.addEventListener('dragstart', _this57.dragStartListener);

            _this57.dragEndListener = _this57.onDragEnd.bind(_this57);

            _this57.el.nativeElement.addEventListener('dragend', _this57.dragEndListener);

            _this57.dragOverListener = _this57.onDragOver.bind(_this57);

            _this57.el.nativeElement.addEventListener('dragover', _this57.dragOverListener);

            _this57.dragLeaveListener = _this57.onDragLeave.bind(_this57);

            _this57.el.nativeElement.addEventListener('dragleave', _this57.dragLeaveListener);
          });
        }
      }, {
        key: "unbindEvents",
        value: function unbindEvents() {
          if (this.mouseDownListener) {
            document.removeEventListener('mousedown', this.mouseDownListener);
            this.mouseDownListener = null;
          }

          if (this.dragStartListener) {
            document.removeEventListener('dragstart', this.dragStartListener);
            this.dragStartListener = null;
          }

          if (this.dragEndListener) {
            document.removeEventListener('dragend', this.dragEndListener);
            this.dragEndListener = null;
          }

          if (this.dragOverListener) {
            document.removeEventListener('dragover', this.dragOverListener);
            this.dragOverListener = null;
          }

          if (this.dragLeaveListener) {
            document.removeEventListener('dragleave', this.dragLeaveListener);
            this.dragLeaveListener = null;
          }
        }
      }, {
        key: "onMouseDown",
        value: function onMouseDown(event) {
          if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.target, 'ui-table-reorderablerow-handle')) this.el.nativeElement.draggable = true;else this.el.nativeElement.draggable = false;
        }
      }, {
        key: "onDragStart",
        value: function onDragStart(event) {
          this.dt.onRowDragStart(event, this.index);
        }
      }, {
        key: "onDragEnd",
        value: function onDragEnd(event) {
          this.dt.onRowDragEnd(event);
          this.el.nativeElement.draggable = false;
        }
      }, {
        key: "onDragOver",
        value: function onDragOver(event) {
          this.dt.onRowDragOver(event, this.index, this.el.nativeElement);
          event.preventDefault();
        }
      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          this.dt.onRowDragLeave(event, this.el.nativeElement);
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pReorderableRowDisabled !== true;
        }
      }, {
        key: "onDrop",
        value: function onDrop(event) {
          if (this.isEnabled() && this.dt.rowDragging) {
            this.dt.onRowDrop(event, this.el.nativeElement);
          }

          event.preventDefault();
        }
      }]);

      return ReorderableRow;
    }();

    ReorderableRow.ɵfac = function ReorderableRow_Factory(t) {
      return new (t || ReorderableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    ReorderableRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ReorderableRow,
      selectors: [["", "pReorderableRow", ""]],
      hostBindings: function ReorderableRow_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function ReorderableRow_drop_HostBindingHandler($event) {
            return ctx.onDrop($event);
          });
        }
      },
      inputs: {
        index: ["pReorderableRow", "index"],
        pReorderableRowDisabled: "pReorderableRowDisabled"
      }
    });

    ReorderableRow.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pReorderableRow")], ReorderableRow.prototype, "index", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ReorderableRow.prototype, "pReorderableRowDisabled", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event'])], ReorderableRow.prototype, "onDrop", null);

    var TableModule = function TableModule() {
      _classCallCheck(this, TableModule);
    };

    TableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TableModule
    });
    TableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TableModule_Factory(t) {
        return new (t || TableModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_3__["PaginatorModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"]], primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Table, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'p-table',
          template: "\n        <div #container [ngStyle]=\"style\" [class]=\"styleClass\"\n            [ngClass]=\"{'ui-table ui-widget': true, 'ui-table-responsive': responsive, 'ui-table-resizable': resizableColumns,\n                'ui-table-resizable-fit': (resizableColumns && columnResizeMode === 'fit'),\n                'ui-table-hoverable-rows': (rowHover||selectionMode), 'ui-table-auto-layout': autoLayout,\n                'ui-table-flex-scrollable': (scrollable && scrollHeight === 'flex')}\">\n            <div class=\"ui-table-loading ui-widget-overlay\" *ngIf=\"loading && showLoader\"></div>\n            <div class=\"ui-table-loading-content\" *ngIf=\"loading && showLoader\">\n                <i [class]=\"'ui-table-loading-icon pi-spin ' + loadingIcon\"></i>\n            </div>\n            <div *ngIf=\"captionTemplate\" class=\"ui-table-caption ui-widget-header\">\n                <ng-container *ngTemplateOutlet=\"captionTemplate\"></ng-container>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-top\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'top' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\" [dropdownScrollHeight]=\"paginatorDropdownScrollHeight\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\"></p-paginator>\n\n            <div class=\"ui-table-wrapper\" *ngIf=\"!scrollable\">\n                <table role=\"grid\" #table [ngClass]=\"tableStyleClass\" [ngStyle]=\"tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"ui-table-thead\">\n                        <ng-container *ngTemplateOutlet=\"headerTemplate; context: {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tbody class=\"ui-table-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"bodyTemplate\"></tbody>\n                    <tfoot *ngIf=\"footerTemplate\" class=\"ui-table-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                </table>\n            </div>\n\n            <div class=\"ui-table-scrollable-wrapper\" *ngIf=\"scrollable\">\n               <div class=\"ui-table-scrollable-view ui-table-frozen-view\" *ngIf=\"frozenColumns||frozenBodyTemplate\" #scrollableFrozenView [pScrollableView]=\"frozenColumns\" [frozen]=\"true\" [ngStyle]=\"{width: frozenWidth}\" [scrollHeight]=\"scrollHeight\"></div>\n               <div class=\"ui-table-scrollable-view\" #scrollableView [pScrollableView]=\"columns\" [frozen]=\"false\" [scrollHeight]=\"scrollHeight\" [ngStyle]=\"{left: frozenWidth, width: 'calc(100% - '+frozenWidth+')'}\"></div>\n            </div>\n\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-bottom\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\" [dropdownScrollHeight]=\"paginatorDropdownScrollHeight\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\"></p-paginator>\n\n                <div *ngIf=\"summaryTemplate\" class=\"ui-table-summary ui-widget-header\">\n                <ng-container *ngTemplateOutlet=\"summaryTemplate\"></ng-container>\n            </div>\n\n            <div #resizeHelper class=\"ui-column-resizer-helper ui-state-highlight\" style=\"display:none\" *ngIf=\"resizableColumns\"></div>\n\n            <span #reorderIndicatorUp class=\"pi pi-arrow-down ui-table-reorder-indicator-up\" style=\"display:none\" *ngIf=\"reorderableColumns\"></span>\n            <span #reorderIndicatorDown class=\"pi pi-arrow-up ui-table-reorder-indicator-down\" style=\"display:none\" *ngIf=\"reorderableColumns\"></span>\n        </div>\n    ",
          providers: [TableService],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: TableService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        pageLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        alwaysShowPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        paginatorPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        paginatorDropdownScrollHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        currentPageReportTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        defaultSortOrder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sortMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resetPageOnSort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        contextMenuSelectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        contextMenuSelectionMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rowTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lazy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lazyLoadOnInit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        compareSelectionBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        csvSeparator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        exportFilename: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        filters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        filterDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        expandedRowKeys: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        editingRowKeys: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rowExpandMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        virtualScrollDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        virtualRowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        columnResizeMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        loadingIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showLoader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        stateStorage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        editMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onRowSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onRowUnselect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onSort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onLazyLoad: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onRowExpand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onRowCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onContextMenuSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onColResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onColReorder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onRowReorder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onEditInit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onEditComplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onEditCancel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHeaderCheckboxToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        sortFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        firstChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        rowsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onStateSave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onStateRestore: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        totalRecords: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        columns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        first: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sortField: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sortOrder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        multiSortMeta: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contextMenuSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        frozenColumns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        frozenValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        styleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tableStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tableStyleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rowsPerPageOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        paginatorDropdownAppendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showCurrentPageReport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectionMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dataKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        metaKeySelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        globalFilterFields: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        filterLocale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scrollable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scrollHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        virtualScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        frozenWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        responsive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contextMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resizableColumns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        reorderableColumns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rowHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customSort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoLayout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        exportFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        stateKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        containerViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['container']
        }],
        resizeHelperViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['resizeHelper']
        }],
        reorderIndicatorUpViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['reorderIndicatorUp']
        }],
        reorderIndicatorDownViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['reorderIndicatorDown']
        }],
        tableViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['table']
        }],
        scrollableViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scrollableView']
        }],
        scrollableFrozenViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scrollableFrozenView']
        }],
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"]]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableBody, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: '[pTableBody]',
          template: "\n        <ng-container *ngIf=\"!dt.expandedRowTemplate && !dt.virtualScroll\">\n            <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"(dt.paginator && !dt.lazy) ? ((dt.filteredValue||dt.value) | slice:dt.first:(dt.first + dt.rows)) : (dt.filteredValue||dt.value)\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}\"></ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"!dt.expandedRowTemplate && dt.virtualScroll\">\n            <ng-template cdkVirtualFor let-rowData let-rowIndex=\"index\" [cdkVirtualForOf]=\"dt.value\" [cdkVirtualForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngTemplateOutlet=\"rowData ? template: dt.loadingBodyTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}\"></ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"dt.expandedRowTemplate\">\n            <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"(dt.paginator && !dt.lazy) ? ((dt.filteredValue||dt.value) | slice:dt.first:(dt.first + dt.rows)) : (dt.filteredValue||dt.value)\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, expanded: dt.isRowExpanded(rowData), editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}\"></ng-container>\n                <ng-container *ngIf=\"dt.isRowExpanded(rowData)\">\n                    <ng-container *ngTemplateOutlet=\"dt.expandedRowTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns}\"></ng-container>\n                </ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"dt.loading\">\n            <ng-container *ngTemplateOutlet=\"dt.loadingBodyTemplate; context: {$implicit: columns, frozen: frozen}\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"dt.isEmpty() && !dt.loading\">\n            <ng-container *ngTemplateOutlet=\"dt.emptyMessageTemplate; context: {$implicit: columns, frozen: frozen}\"></ng-container>\n        </ng-container>\n    "
        }]
      }], function () {
        return [{
          type: Table
        }];
      }, {
        columns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["pTableBody"]
        }],
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["pTableBodyTemplate"]
        }],
        frozen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollableView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: '[pScrollableView]',
          template: "\n        <div #scrollHeader class=\"ui-table-scrollable-header ui-widget-header\">\n            <div #scrollHeaderBox class=\"ui-table-scrollable-header-box\">\n                <table class=\"ui-table-scrollable-header-table\" [ngClass]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"ui-table-thead\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenHeaderTemplate||dt.headerTemplate : dt.headerTemplate; context {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tbody class=\"ui-table-tbody\">\n                        <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"dt.frozenValue\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                            <ng-container *ngTemplateOutlet=\"dt.frozenRowsTemplate; context: {$implicit: rowData, rowIndex: rowIndex, columns: columns}\"></ng-container>\n                        </ng-template>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <ng-container *ngIf=\"!dt.virtualScroll; else virtualScrollTemplate\">\n            <div #scrollBody class=\"ui-table-scrollable-body\" [ngStyle]=\"{'max-height': dt.scrollHeight !== 'flex' ? scrollHeight : undefined}\">\n                <table #scrollTable [class]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tbody class=\"ui-table-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"frozen ? dt.frozenBodyTemplate||dt.bodyTemplate : dt.bodyTemplate\" [frozen]=\"frozen\"></tbody>\n                </table>\n                <div #scrollableAligner style=\"background-color:transparent\" *ngIf=\"frozen\"></div>\n            </div>\n        </ng-container>\n        <ng-template #virtualScrollTemplate>\n            <cdk-virtual-scroll-viewport [itemSize]=\"dt.virtualRowHeight\" [style.height]=\"dt.scrollHeight !== 'flex' ? scrollHeight : undefined\" \n                    [minBufferPx]=\"dt.minBufferPx\" [maxBufferPx]=\"dt.maxBufferPx\" (scrolledIndexChange)=\"onScrollIndexChange($event)\" class=\"ui-table-virtual-scrollable-body\">\n                <table #scrollTable [class]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tbody class=\"ui-table-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"frozen ? dt.frozenBodyTemplate||dt.bodyTemplate : dt.bodyTemplate\" [frozen]=\"frozen\"></tbody>\n                </table>\n                <div #scrollableAligner style=\"background-color:transparent\" *ngIf=\"frozen\"></div>\n            </cdk-virtual-scroll-viewport>\n        </ng-template>\n        <div #scrollFooter class=\"ui-table-scrollable-footer ui-widget-header\">\n            <div #scrollFooterBox class=\"ui-table-scrollable-footer-box\">\n                <table class=\"ui-table-scrollable-footer-table\" [ngClass]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tfoot class=\"ui-table-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenFooterTemplate||dt.footerTemplate : dt.footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    "
        }]
      }], function () {
        return [{
          type: Table
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, {
        scrollHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        columns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["pScrollableView"]
        }],
        frozen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scrollHeaderViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scrollHeader']
        }],
        scrollHeaderBoxViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scrollHeaderBox']
        }],
        scrollBodyViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scrollBody']
        }],
        scrollTableViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scrollTable']
        }],
        scrollFooterViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scrollFooter']
        }],
        scrollFooterBoxViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scrollFooterBox']
        }],
        scrollableAlignerViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scrollableAligner']
        }],
        virtualScrollBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkVirtualScrollViewport"]]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortableColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pSortableColumn]',
          host: {
            '[class.ui-sortable-column]': 'isEnabled()',
            '[class.ui-state-highlight]': 'sorted',
            '[attr.tabindex]': 'isEnabled() ? "0" : null',
            '[attr.role]': '"columnheader"',
            '[attr.aria-sort]': 'sortOrder'
          }
        }]
      }], function () {
        return [{
          type: Table
        }];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }],
        onEnterKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.enter', ['$event']]
        }],
        field: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["pSortableColumn"]
        }],
        pSortableColumnDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'p-sortIcon',
          template: "\n        <i class=\"ui-sortable-column-icon pi pi-fw\" [ngClass]=\"{'pi-sort-amount-up-alt': sortOrder === 1, 'pi-sort-amount-down': sortOrder === -1, 'pi-sort-alt': sortOrder === 0}\"></i>\n    "
        }]
      }], function () {
        return [{
          type: Table
        }];
      }, {
        field: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectableRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pSelectableRow]',
          host: {
            '[class.ui-selectable-row]': 'isEnabled()',
            '[class.ui-state-highlight]': 'selected',
            '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
          }
        }]
      }], function () {
        return [{
          type: Table
        }, {
          type: TableService
        }];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }],
        onTouchEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchend', ['$event']]
        }],
        onArrowDownKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.arrowdown', ['$event']]
        }],
        onArrowUpKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.arrowup', ['$event']]
        }],
        onEnterKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.enter', ['$event']]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["pSelectableRow"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["pSelectableRowIndex"]
        }],
        pSelectableRowDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectableRowDblClick, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pSelectableRowDblClick]',
          host: {
            '[class.ui-selectable-row]': 'isEnabled()',
            '[class.ui-state-highlight]': 'selected'
          }
        }]
      }], function () {
        return [{
          type: Table
        }, {
          type: TableService
        }];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dblclick', ['$event']]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["pSelectableRowDblClick"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["pSelectableRowIndex"]
        }],
        pSelectableRowDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMenuRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pContextMenuRow]',
          host: {
            '[class.ui-contextmenu-selected]': 'selected',
            '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
          }
        }]
      }], function () {
        return [{
          type: Table
        }, {
          type: TableService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        onContextMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['contextmenu', ['$event']]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["pContextMenuRow"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["pContextMenuRowIndex"]
        }],
        pContextMenuRowDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RowToggler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pRowToggler]'
        }]
      }], function () {
        return [{
          type: Table
        }];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['pRowToggler']
        }],
        pRowTogglerDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizableColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pResizableColumn]'
        }]
      }], function () {
        return [{
          type: Table
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, {
        pResizableColumnDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReorderableColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pReorderableColumn]'
        }]
      }], function () {
        return [{
          type: Table
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, {
        onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['drop', ['$event']]
        }],
        pReorderableColumnDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditableColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pEditableColumn]'
        }]
      }], function () {
        return [{
          type: Table
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }],
        onEnterKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.enter', ['$event']]
        }],
        onEscapeKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.escape', ['$event']]
        }],
        onShiftKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.tab', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.shift.tab', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.meta.tab', ['$event']]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["pEditableColumn"]
        }],
        field: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["pEditableColumnField"]
        }],
        rowIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["pEditableColumnRowIndex"]
        }],
        pEditableColumnDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pFocusCellSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditableRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pEditableRow]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["pEditableRow"]
        }],
        pEditableRowDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitEditableRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pInitEditableRow]'
        }]
      }], function () {
        return [{
          type: Table
        }, {
          type: EditableRow
        }];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaveEditableRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pSaveEditableRow]'
        }]
      }], function () {
        return [{
          type: Table
        }, {
          type: EditableRow
        }];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CancelEditableRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pCancelEditableRow]'
        }]
      }], function () {
        return [{
          type: Table
        }, {
          type: EditableRow
        }];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CellEditor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'p-cellEditor',
          template: "\n        <ng-container *ngIf=\"editing\">\n            <ng-container *ngTemplateOutlet=\"inputTemplate\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"!editing\">\n            <ng-container *ngTemplateOutlet=\"outputTemplate\"></ng-container>\n        </ng-container>\n    "
        }]
      }], function () {
        return [{
          type: Table
        }, {
          type: EditableColumn,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: EditableRow,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"]]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableRadioButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'p-tableRadioButton',
          template: "\n        <div class=\"ui-radiobutton ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input type=\"radio\" [attr.id]=\"inputId\" [attr.name]=\"name\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\"\n                [disabled]=\"disabled\" [attr.aria-label]=\"ariaLabel\">\n            </div>\n            <div #box [ngClass]=\"{'ui-radiobutton-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled':disabled}\" role=\"radio\" [attr.aria-checked]=\"checked\">\n                <span class=\"ui-radiobutton-icon ui-clickable\" [ngClass]=\"{'pi pi-circle-on':checked}\"></span>\n            </div>\n        </div>\n    "
        }]
      }], function () {
        return [{
          type: Table
        }, {
          type: TableService
        }];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        boxViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['box']
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableCheckbox, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'p-tableCheckbox',
          template: "\n        <div class=\"ui-chkbox ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input type=\"checkbox\" [attr.id]=\"inputId\" [attr.name]=\"name\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [disabled]=\"disabled\"\n                [attr.required]=\"required\" [attr.aria-label]=\"ariaLabel\">\n            </div>\n            <div #box [ngClass]=\"{'ui-chkbox-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled':disabled}\" role=\"checkbox\" [attr.aria-checked]=\"checked\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'pi pi-check':checked}\"></span>\n            </div>\n        </div>\n    "
        }]
      }], function () {
        return [{
          type: Table
        }, {
          type: TableService
        }];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        boxViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['box']
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableHeaderCheckbox, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'p-tableHeaderCheckbox',
          template: "\n        <div class=\"ui-chkbox ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [attr.name]=\"name\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\"\n                [disabled]=\"isDisabled()\" [attr.aria-label]=\"ariaLabel\">\n            </div>\n            <div #box [ngClass]=\"{'ui-chkbox-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled': isDisabled()}\" role=\"checkbox\" [attr.aria-checked]=\"checked\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'pi pi-check':checked}\"></span>\n            </div>\n        </div>\n    "
        }]
      }], function () {
        return [{
          type: Table
        }, {
          type: TableService
        }];
      }, {
        boxViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['box']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReorderableRowHandle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pReorderableRowHandle]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["pReorderableRowHandle"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReorderableRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pReorderableRow]'
        }]
      }], function () {
        return [{
          type: Table
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, {
        onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['drop', ['$event']]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["pReorderableRow"]
        }],
        pReorderableRowDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TableModule, {
        declarations: function declarations() {
          return [Table, SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, ScrollableView, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_3__["PaginatorModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"]];
        },
        exports: function exports() {
          return [Table, primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_3__["PaginatorModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"]],
          exports: [Table, primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"]],
          declarations: [Table, SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, ScrollableView, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-table.js.map

    /***/

  },

  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tooltip.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tooltip.js ***!
    \***********************************************************************/

  /*! exports provided: Tooltip, TooltipModule */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengTooltipJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tooltip", function () {
      return Tooltip;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipModule", function () {
      return TooltipModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/dom */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dom.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var Tooltip = /*#__PURE__*/function () {
      function Tooltip(el, zone) {
        _classCallCheck(this, Tooltip);

        this.el = el;
        this.zone = zone;
        this.tooltipPosition = 'right';
        this.tooltipEvent = 'hover';
        this.appendTo = 'body';
        this.tooltipZIndex = 'auto';
        this.escape = true;
      }

      _createClass(Tooltip, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this58 = this;

          this.zone.runOutsideAngular(function () {
            if (_this58.tooltipEvent === 'hover') {
              _this58.mouseEnterListener = _this58.onMouseEnter.bind(_this58);
              _this58.mouseLeaveListener = _this58.onMouseLeave.bind(_this58);
              _this58.clickListener = _this58.onClick.bind(_this58);

              _this58.el.nativeElement.addEventListener('mouseenter', _this58.mouseEnterListener);

              _this58.el.nativeElement.addEventListener('mouseleave', _this58.mouseLeaveListener);

              _this58.el.nativeElement.addEventListener('click', _this58.clickListener);
            } else if (_this58.tooltipEvent === 'focus') {
              _this58.focusListener = _this58.onFocus.bind(_this58);
              _this58.blurListener = _this58.onBlur.bind(_this58);

              _this58.el.nativeElement.addEventListener('focus', _this58.focusListener);

              _this58.el.nativeElement.addEventListener('blur', _this58.blurListener);
            }
          });
        }
      }, {
        key: "onMouseEnter",
        value: function onMouseEnter(e) {
          if (!this.container && !this.showTimeout) {
            this.activate();
          }
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave(e) {
          this.deactivate();
        }
      }, {
        key: "onFocus",
        value: function onFocus(e) {
          this.activate();
        }
      }, {
        key: "onBlur",
        value: function onBlur(e) {
          this.deactivate();
        }
      }, {
        key: "onClick",
        value: function onClick(e) {
          this.deactivate();
        }
      }, {
        key: "activate",
        value: function activate() {
          var _this59 = this;

          this.active = true;
          this.clearHideTimeout();
          if (this.showDelay) this.showTimeout = setTimeout(function () {
            _this59.show();
          }, this.showDelay);else this.show();

          if (this.life) {
            var duration = this.showDelay ? this.life + this.showDelay : this.life;
            this.hideTimeout = setTimeout(function () {
              _this59.hide();
            }, duration);
          }
        }
      }, {
        key: "deactivate",
        value: function deactivate() {
          var _this60 = this;

          this.active = false;
          this.clearShowTimeout();

          if (this.hideDelay) {
            this.clearHideTimeout(); //life timeout

            this.hideTimeout = setTimeout(function () {
              _this60.hide();
            }, this.hideDelay);
          } else {
            this.hide();
          }
        }
      }, {
        key: "create",
        value: function create() {
          if (this.container) {
            this.clearHideTimeout();
            this.remove();
          }

          this.container = document.createElement('div');
          var tooltipArrow = document.createElement('div');
          tooltipArrow.className = 'ui-tooltip-arrow';
          this.container.appendChild(tooltipArrow);
          this.tooltipText = document.createElement('div');
          this.tooltipText.className = 'ui-tooltip-text ui-shadow ui-corner-all';
          this.updateText();

          if (this.positionStyle) {
            this.container.style.position = this.positionStyle;
          }

          this.container.appendChild(this.tooltipText);
          if (this.appendTo === 'body') document.body.appendChild(this.container);else if (this.appendTo === 'target') primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].appendChild(this.container, this.el.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].appendChild(this.container, this.appendTo);
          this.container.style.display = 'inline-block';
        }
      }, {
        key: "show",
        value: function show() {
          if (!this.text || this.disabled) {
            return;
          }

          this.create();
          this.align();
          primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].fadeIn(this.container, 250);
          if (this.tooltipZIndex === 'auto') this.container.style.zIndex = ++primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].zindex;else this.container.style.zIndex = this.tooltipZIndex;
          this.bindDocumentResizeListener();
        }
      }, {
        key: "hide",
        value: function hide() {
          this.remove();
        }
      }, {
        key: "updateText",
        value: function updateText() {
          if (this.escape) {
            this.tooltipText.innerHTML = '';
            this.tooltipText.appendChild(document.createTextNode(this._text));
          } else {
            this.tooltipText.innerHTML = this._text;
          }
        }
      }, {
        key: "align",
        value: function align() {
          var position = this.tooltipPosition;

          switch (position) {
            case 'top':
              this.alignTop();

              if (this.isOutOfBounds()) {
                this.alignBottom();

                if (this.isOutOfBounds()) {
                  this.alignRight();

                  if (this.isOutOfBounds()) {
                    this.alignLeft();
                  }
                }
              }

              break;

            case 'bottom':
              this.alignBottom();

              if (this.isOutOfBounds()) {
                this.alignTop();

                if (this.isOutOfBounds()) {
                  this.alignRight();

                  if (this.isOutOfBounds()) {
                    this.alignLeft();
                  }
                }
              }

              break;

            case 'left':
              this.alignLeft();

              if (this.isOutOfBounds()) {
                this.alignRight();

                if (this.isOutOfBounds()) {
                  this.alignTop();

                  if (this.isOutOfBounds()) {
                    this.alignBottom();
                  }
                }
              }

              break;

            case 'right':
              this.alignRight();

              if (this.isOutOfBounds()) {
                this.alignLeft();

                if (this.isOutOfBounds()) {
                  this.alignTop();

                  if (this.isOutOfBounds()) {
                    this.alignBottom();
                  }
                }
              }

              break;
          }
        }
      }, {
        key: "getHostOffset",
        value: function getHostOffset() {
          if (this.appendTo === 'body' || this.appendTo === 'target') {
            var offset = this.el.nativeElement.getBoundingClientRect();
            var targetLeft = offset.left + primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getWindowScrollLeft();
            var targetTop = offset.top + primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getWindowScrollTop();
            return {
              left: targetLeft,
              top: targetTop
            };
          } else {
            return {
              left: 0,
              top: 0
            };
          }
        }
      }, {
        key: "alignRight",
        value: function alignRight() {
          this.preAlign('right');
          var hostOffset = this.getHostOffset();
          var left = hostOffset.left + primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.el.nativeElement);
          var top = hostOffset.top + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.container)) / 2;
          this.container.style.left = left + 'px';
          this.container.style.top = top + 'px';
        }
      }, {
        key: "alignLeft",
        value: function alignLeft() {
          this.preAlign('left');
          var hostOffset = this.getHostOffset();
          var left = hostOffset.left - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.container);
          var top = hostOffset.top + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.container)) / 2;
          this.container.style.left = left + 'px';
          this.container.style.top = top + 'px';
        }
      }, {
        key: "alignTop",
        value: function alignTop() {
          this.preAlign('top');
          var hostOffset = this.getHostOffset();
          var left = hostOffset.left + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.container)) / 2;
          var top = hostOffset.top - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.container);
          this.container.style.left = left + 'px';
          this.container.style.top = top + 'px';
        }
      }, {
        key: "alignBottom",
        value: function alignBottom() {
          this.preAlign('bottom');
          var hostOffset = this.getHostOffset();
          var left = hostOffset.left + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.container)) / 2;
          var top = hostOffset.top + primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.el.nativeElement);
          this.container.style.left = left + 'px';
          this.container.style.top = top + 'px';
        }
      }, {
        key: "preAlign",
        value: function preAlign(position) {
          this.container.style.left = -999 + 'px';
          this.container.style.top = -999 + 'px';
          var defaultClassName = 'ui-tooltip ui-widget ui-tooltip-' + position;
          this.container.className = this.tooltipStyleClass ? defaultClassName + ' ' + this.tooltipStyleClass : defaultClassName;
        }
      }, {
        key: "isOutOfBounds",
        value: function isOutOfBounds() {
          var offset = this.container.getBoundingClientRect();
          var targetTop = offset.top;
          var targetLeft = offset.left;
          var width = primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.container);
          var height = primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.container);
          var viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getViewport();
          return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize(e) {
          this.hide();
        }
      }, {
        key: "bindDocumentResizeListener",
        value: function bindDocumentResizeListener() {
          var _this61 = this;

          this.zone.runOutsideAngular(function () {
            _this61.resizeListener = _this61.onWindowResize.bind(_this61);
            window.addEventListener('resize', _this61.resizeListener);
          });
        }
      }, {
        key: "unbindDocumentResizeListener",
        value: function unbindDocumentResizeListener() {
          if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
            this.resizeListener = null;
          }
        }
      }, {
        key: "unbindEvents",
        value: function unbindEvents() {
          if (this.tooltipEvent === 'hover') {
            this.el.nativeElement.removeEventListener('mouseenter', this.mouseEnterListener);
            this.el.nativeElement.removeEventListener('mouseleave', this.mouseLeaveListener);
            this.el.nativeElement.removeEventListener('click', this.clickListener);
          } else if (this.tooltipEvent === 'focus') {
            this.el.nativeElement.removeEventListener('focus', this.focusListener);
            this.el.nativeElement.removeEventListener('blur', this.blurListener);
          }

          this.unbindDocumentResizeListener();
        }
      }, {
        key: "remove",
        value: function remove() {
          if (this.container && this.container.parentElement) {
            if (this.appendTo === 'body') document.body.removeChild(this.container);else if (this.appendTo === 'target') this.el.nativeElement.removeChild(this.container);else primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeChild(this.container, this.appendTo);
          }

          this.unbindDocumentResizeListener();
          this.clearTimeouts();
          this.container = null;
        }
      }, {
        key: "clearShowTimeout",
        value: function clearShowTimeout() {
          if (this.showTimeout) {
            clearTimeout(this.showTimeout);
            this.showTimeout = null;
          }
        }
      }, {
        key: "clearHideTimeout",
        value: function clearHideTimeout() {
          if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
          }
        }
      }, {
        key: "clearTimeouts",
        value: function clearTimeouts() {
          this.clearShowTimeout();
          this.clearHideTimeout();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unbindEvents();
          this.remove();
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        },
        set: function set(val) {
          this._disabled = val;
          this.deactivate();
        }
      }, {
        key: "text",
        get: function get() {
          return this._text;
        },
        set: function set(text) {
          this._text = text;

          if (this.active) {
            if (this._text) {
              if (this.container && this.container.offsetParent) {
                this.updateText();
                this.align();
              } else {
                this.show();
              }
            } else {
              this.hide();
            }
          }
        }
      }]);

      return Tooltip;
    }();

    Tooltip.ɵfac = function Tooltip_Factory(t) {
      return new (t || Tooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    Tooltip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: Tooltip,
      selectors: [["", "pTooltip", ""]],
      inputs: {
        tooltipPosition: "tooltipPosition",
        tooltipEvent: "tooltipEvent",
        appendTo: "appendTo",
        tooltipZIndex: "tooltipZIndex",
        escape: "escape",
        disabled: ["tooltipDisabled", "disabled"],
        text: ["pTooltip", "text"],
        positionStyle: "positionStyle",
        tooltipStyleClass: "tooltipStyleClass",
        showDelay: "showDelay",
        hideDelay: "hideDelay",
        life: "life"
      }
    });

    Tooltip.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Tooltip.prototype, "tooltipPosition", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Tooltip.prototype, "tooltipEvent", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Tooltip.prototype, "appendTo", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Tooltip.prototype, "positionStyle", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Tooltip.prototype, "tooltipStyleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Tooltip.prototype, "tooltipZIndex", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Tooltip.prototype, "escape", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Tooltip.prototype, "showDelay", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Tooltip.prototype, "hideDelay", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Tooltip.prototype, "life", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("tooltipDisabled")], Tooltip.prototype, "disabled", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pTooltip')], Tooltip.prototype, "text", null);

    var TooltipModule = function TooltipModule() {
      _classCallCheck(this, TooltipModule);
    };

    TooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TooltipModule
    });
    TooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TooltipModule_Factory(t) {
        return new (t || TooltipModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Tooltip, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pTooltip]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, {
        tooltipPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipZIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        escape: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["tooltipDisabled"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['pTooltip']
        }],
        positionStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipStyleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hideDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        life: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TooltipModule, {
        declarations: function declarations() {
          return [Tooltip];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [Tooltip];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [Tooltip],
          declarations: [Tooltip]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-tooltip.js.map

    /***/

  },

  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-utils.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-utils.js ***!
    \*********************************************************************/

  /*! exports provided: FilterUtils, ObjectUtils, UniqueComponentId, lastId */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengUtilsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterUtils", function () {
      return FilterUtils;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObjectUtils", function () {
      return ObjectUtils;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniqueComponentId", function () {
      return UniqueComponentId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "lastId", function () {
      return lastId;
    });

    var ObjectUtils = /*#__PURE__*/function () {
      function ObjectUtils() {
        _classCallCheck(this, ObjectUtils);
      }

      _createClass(ObjectUtils, null, [{
        key: "equals",
        value: function equals(obj1, obj2, field) {
          if (field) return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);else return this.equalsByValue(obj1, obj2);
        }
      }, {
        key: "equalsByValue",
        value: function equalsByValue(obj1, obj2) {
          if (obj1 === obj2) return true;

          if (obj1 && obj2 && typeof obj1 == 'object' && typeof obj2 == 'object') {
            var arrA = Array.isArray(obj1),
                arrB = Array.isArray(obj2),
                i,
                length,
                key;

            if (arrA && arrB) {
              length = obj1.length;
              if (length != obj2.length) return false;

              for (i = length; i-- !== 0;) {
                if (!this.equalsByValue(obj1[i], obj2[i])) return false;
              }

              return true;
            }

            if (arrA != arrB) return false;
            var dateA = obj1 instanceof Date,
                dateB = obj2 instanceof Date;
            if (dateA != dateB) return false;
            if (dateA && dateB) return obj1.getTime() == obj2.getTime();
            var regexpA = obj1 instanceof RegExp,
                regexpB = obj2 instanceof RegExp;
            if (regexpA != regexpB) return false;
            if (regexpA && regexpB) return obj1.toString() == obj2.toString();
            var keys = Object.keys(obj1);
            length = keys.length;
            if (length !== Object.keys(obj2).length) return false;

            for (i = length; i-- !== 0;) {
              if (!Object.prototype.hasOwnProperty.call(obj2, keys[i])) return false;
            }

            for (i = length; i-- !== 0;) {
              key = keys[i];
              if (!this.equalsByValue(obj1[key], obj2[key])) return false;
            }

            return true;
          }

          return obj1 !== obj1 && obj2 !== obj2;
        }
      }, {
        key: "resolveFieldData",
        value: function resolveFieldData(data, field) {
          if (data && field) {
            if (this.isFunction(field)) {
              return field(data);
            } else if (field.indexOf('.') == -1) {
              return data[field];
            } else {
              var fields = field.split('.');
              var value = data;

              for (var i = 0, len = fields.length; i < len; ++i) {
                if (value == null) {
                  return null;
                }

                value = value[fields[i]];
              }

              return value;
            }
          } else {
            return null;
          }
        }
      }, {
        key: "isFunction",
        value: function isFunction(obj) {
          return !!(obj && obj.constructor && obj.call && obj.apply);
        }
      }, {
        key: "reorderArray",
        value: function reorderArray(value, from, to) {
          var target;

          if (value && from !== to) {
            if (to >= value.length) {
              to %= value.length;
              from %= value.length;
            }

            value.splice(to, 0, value.splice(from, 1)[0]);
          }
        }
      }, {
        key: "generateSelectItems",
        value: function generateSelectItems(val, field) {
          var selectItems;

          if (val && val.length) {
            selectItems = [];

            var _iterator10 = _createForOfIteratorHelper(val),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var item = _step10.value;
                selectItems.push({
                  label: this.resolveFieldData(item, field),
                  value: item
                });
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }

          return selectItems;
        }
      }, {
        key: "insertIntoOrderedArray",
        value: function insertIntoOrderedArray(item, index, arr, sourceArr) {
          if (arr.length > 0) {
            var injected = false;

            for (var i = 0; i < arr.length; i++) {
              var currentItemIndex = this.findIndexInList(arr[i], sourceArr);

              if (currentItemIndex > index) {
                arr.splice(i, 0, item);
                injected = true;
                break;
              }
            }

            if (!injected) {
              arr.push(item);
            }
          } else {
            arr.push(item);
          }
        }
      }, {
        key: "findIndexInList",
        value: function findIndexInList(item, list) {
          var index = -1;

          if (list) {
            for (var i = 0; i < list.length; i++) {
              if (list[i] == item) {
                index = i;
                break;
              }
            }
          }

          return index;
        }
      }, {
        key: "removeAccents",
        value: function removeAccents(str) {
          if (str && str.search(/[\xC0-\xFF]/g) > -1) {
            str = str.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y");
          }

          return str;
        }
      }]);

      return ObjectUtils;
    }();

    var FilterUtils = /*#__PURE__*/function () {
      function FilterUtils() {
        _classCallCheck(this, FilterUtils);
      }

      _createClass(FilterUtils, null, [{
        key: "filter",
        value: function filter(value, fields, filterValue, filterMatchMode, filterLocale) {
          var filteredItems = [];
          var filterText = ObjectUtils.removeAccents(filterValue).toLocaleLowerCase(filterLocale);

          if (value) {
            var _iterator11 = _createForOfIteratorHelper(value),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var item = _step11.value;

                var _iterator12 = _createForOfIteratorHelper(fields),
                    _step12;

                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                    var field = _step12.value;
                    var fieldValue = ObjectUtils.removeAccents(String(ObjectUtils.resolveFieldData(item, field))).toLocaleLowerCase(filterLocale);

                    if (FilterUtils[filterMatchMode](fieldValue, filterText, filterLocale)) {
                      filteredItems.push(item);
                      break;
                    }
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          }

          return filteredItems;
        }
      }, {
        key: "startsWith",
        value: function startsWith(value, filter, filterLocale) {
          if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          var filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
          var stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
          return stringValue.slice(0, filterValue.length) === filterValue;
        }
      }, {
        key: "contains",
        value: function contains(value, filter, filterLocale) {
          if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          var filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
          var stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
          return stringValue.indexOf(filterValue) !== -1;
        }
      }, {
        key: "endsWith",
        value: function endsWith(value, filter, filterLocale) {
          if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          var filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
          var stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
          return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
        }
      }, {
        key: "equals",
        value: function equals(value, filter, filterLocale) {
          if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();else return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        }
      }, {
        key: "notEquals",
        value: function notEquals(value, filter, filterLocale) {
          if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
            return false;
          }

          if (value === undefined || value === null) {
            return true;
          }

          if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();else return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        }
      }, {
        key: "in",
        value: function _in(value, filter, filterLocale) {
          if (filter === undefined || filter === null || filter.length === 0) {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          for (var i = 0; i < filter.length; i++) {
            if (ObjectUtils.equals(value, filter[i])) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "lt",
        value: function lt(value, filter, filterLocale) {
          if (filter === undefined || filter === null) {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();else return value < filter;
        }
      }, {
        key: "lte",
        value: function lte(value, filter, filterLocale) {
          if (filter === undefined || filter === null) {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();else return value <= filter;
        }
      }, {
        key: "gt",
        value: function gt(value, filter, filterLocale) {
          if (filter === undefined || filter === null) {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();else return value > filter;
        }
      }, {
        key: "gte",
        value: function gte(value, filter, filterLocale) {
          if (filter === undefined || filter === null) {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();else return value >= filter;
        }
      }]);

      return FilterUtils;
    }();

    var lastId = 0;

    function UniqueComponentId() {
      var prefix = 'pr_id_';
      lastId++;
      return "".concat(prefix).concat(lastId);
    }
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-utils.js.map

    /***/

  },

  /***/
  "./src/app/core/model.ts":
  /*!*******************************!*\
    !*** ./src/app/core/model.ts ***!
    \*******************************/

  /*! exports provided: Estado, Cidade, Endereco, Contato, Pessoa, Categoria, Lancamento */

  /***/
  function srcAppCoreModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Estado", function () {
      return Estado;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cidade", function () {
      return Cidade;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Endereco", function () {
      return Endereco;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Contato", function () {
      return Contato;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pessoa", function () {
      return Pessoa;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Categoria", function () {
      return Categoria;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Lancamento", function () {
      return Lancamento;
    });

    var Estado = function Estado() {
      _classCallCheck(this, Estado);
    };

    var Cidade = function Cidade() {
      _classCallCheck(this, Cidade);

      this.estado = new Estado();
    };

    var Endereco = function Endereco() {
      _classCallCheck(this, Endereco);

      this.cidade = new Cidade();
    };

    var Contato = function Contato(codigo, nome, email, telefone) {
      _classCallCheck(this, Contato);

      this.codigo = codigo;
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
    };

    var Pessoa = function Pessoa() {
      _classCallCheck(this, Pessoa);

      this.endereco = new Endereco();
      this.ativo = true;
      this.contatos = new Array();
    };

    var Categoria = function Categoria() {
      _classCallCheck(this, Categoria);
    };

    var Lancamento = function Lancamento() {
      _classCallCheck(this, Lancamento);

      this.tipo = 'RECEITA';
      this.pessoa = new Pessoa();
      this.categoria = new Categoria();
    };
    /***/

  },

  /***/
  "./src/app/shared/message/message.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/message/message.component.ts ***!
    \*****************************************************/

  /*! exports provided: MessageComponent */

  /***/
  function srcAppSharedMessageMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageComponent", function () {
      return MessageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MessageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.text, " ");
      }
    }

    var MessageComponent = /*#__PURE__*/function () {
      function MessageComponent() {
        _classCallCheck(this, MessageComponent);
      }

      _createClass(MessageComponent, [{
        key: "temErro",
        value: function temErro() {
          return this.control.hasError(this.error) && this.control.dirty;
        }
      }]);

      return MessageComponent;
    }();

    MessageComponent.ɵfac = function MessageComponent_Factory(t) {
      return new (t || MessageComponent)();
    };

    MessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MessageComponent,
      selectors: [["app-message"]],
      inputs: {
        error: "error",
        control: "control",
        text: "text"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "ui-message ui-messages-error", 4, "ngIf"], [1, "ui-message", "ui-messages-error"]],
      template: function MessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessageComponent_div_0_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.temErro());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".ui-messages-error[_ngcontent-%COMP%] {\n      margin: 0;\n      margin-top: 4px;\n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-message',
          template: "\n    <div *ngIf=\"temErro()\" class=\"ui-message ui-messages-error\">\n      {{ text }}\n    </div>\n  ",
          styles: ["\n    .ui-messages-error {\n      margin: 0;\n      margin-top: 4px;\n    }\n  "]
        }]
      }], null, {
        error: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        control: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _message_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./message/message.component */
    "./src/app/shared/message/message.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_message_message_component__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_message_message_component__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_message_message_component__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"]],
          exports: [_message_message_component__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~lancamentos-lancamentos-module~pessoas-pessoas-module-es5.js.map