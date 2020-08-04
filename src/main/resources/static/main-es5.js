function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_nao_autorizado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/nao-autorizado.component */
    "./src/app/core/nao-autorizado.component.ts");
    /* harmony import */


    var _core_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/pagina-nao-encontrada.component */
    "./src/app/core/pagina-nao-encontrada.component.ts");

    var routes = [{
      path: 'lancamentos',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | lancamentos-lancamentos-module */
        [__webpack_require__.e("default~lancamentos-lancamentos-module~pessoas-pessoas-module"), __webpack_require__.e("default~lancamentos-lancamentos-module~relatorios-relatorios-module"), __webpack_require__.e("lancamentos-lancamentos-module")]).then(__webpack_require__.bind(null,
        /*! ./lancamentos/lancamentos.module */
        "./src/app/lancamentos/lancamentos.module.ts")).then(function (m) {
          return m.LancamentosModule;
        });
      }
    }, {
      path: 'pessoas',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pessoas-pessoas-module */
        [__webpack_require__.e("default~lancamentos-lancamentos-module~pessoas-pessoas-module"), __webpack_require__.e("default~dashboard-dashboard-module~pessoas-pessoas-module"), __webpack_require__.e("pessoas-pessoas-module")]).then(__webpack_require__.bind(null,
        /*! ./pessoas/pessoas.module */
        "./src/app/pessoas/pessoas.module.ts")).then(function (m) {
          return m.PessoasModule;
        });
      }
    }, {
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | dashboard-dashboard-module */
        [__webpack_require__.e("default~dashboard-dashboard-module~pessoas-pessoas-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
        /*! ./dashboard/dashboard.module */
        "./src/app/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashboardModule;
        });
      }
    }, {
      path: 'relatorios',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | relatorios-relatorios-module */
        [__webpack_require__.e("default~lancamentos-lancamentos-module~relatorios-relatorios-module"), __webpack_require__.e("relatorios-relatorios-module")]).then(__webpack_require__.bind(null,
        /*! ./relatorios/relatorios.module */
        "./src/app/relatorios/relatorios.module.ts")).then(function (m) {
          return m.RelatoriosModule;
        });
      }
    }, {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: 'nao-autorizado',
      component: _core_nao_autorizado_component__WEBPACK_IMPORTED_MODULE_2__["NaoAutorizadoComponent"]
    }, {
      path: 'pagina-nao-encontrada',
      component: _core_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_3__["PaginaNaoEncontradaComponent"]
    }, {
      path: '**',
      redirectTo: 'pagina-nao-encontrada'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/confirmdialog */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-confirmdialog.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./core/navbar/navbar.component */
    "./src/app/core/navbar/navbar.component.ts");

    function AppComponent_app_navbar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
      }

      _createClass(AppComponent, [{
        key: "exibindoNavbar",
        value: function exibindoNavbar() {
          return this.router.url !== '/login';
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 1,
      consts: [[4, "ngIf"], ["header", "Confirma\xE7\xE3o", "icon", "fa fa-question-circle"], ["confirmacao", ""], ["type", "button", "pButton", "", "icon", "fa fa-check", "label", "Sim", 3, "click"], ["type", "button", "pButton", "", "icon", "fa fa-times", "label", "N\xE3o", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_navbar_0_Template, 1, 0, "app-navbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-toast");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-confirmDialog", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return _r1.accept();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return _r1.reject();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exibindoNavbar());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], primeng_toast__WEBPACK_IMPORTED_MODULE_3__["Toast"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialog"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["Footer"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
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


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _seguranca_seguranca_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./seguranca/seguranca.module */
    "./src/app/seguranca/seguranca.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _seguranca_seguranca_module__WEBPACK_IMPORTED_MODULE_5__["SegurancaModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _seguranca_seguranca_module__WEBPACK_IMPORTED_MODULE_5__["SegurancaModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _seguranca_seguranca_module__WEBPACK_IMPORTED_MODULE_5__["SegurancaModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/categorias/categoria.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/categorias/categoria.service.ts ***!
    \*************************************************/

  /*! exports provided: CategoriaService */

  /***/
  function srcAppCategoriasCategoriaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriaService", function () {
      return CategoriaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _seguranca_money_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../seguranca/money-http */
    "./src/app/seguranca/money-http.ts");

    var CategoriaService = /*#__PURE__*/function () {
      function CategoriaService(http) {
        _classCallCheck(this, CategoriaService);

        this.http = http;
        this.categoriasUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/categorias");
      }

      _createClass(CategoriaService, [{
        key: "listarTodas",
        value: function listarTodas() {
          return this.http.get(this.categoriasUrl).toPromise();
        }
      }]);

      return CategoriaService;
    }();

    CategoriaService.ɵfac = function CategoriaService_Factory(t) {
      return new (t || CategoriaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_seguranca_money_http__WEBPACK_IMPORTED_MODULE_2__["MoneyHttp"]));
    };

    CategoriaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CategoriaService,
      factory: CategoriaService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _seguranca_money_http__WEBPACK_IMPORTED_MODULE_2__["MoneyHttp"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/locales/pt */
    "./node_modules/@angular/common/locales/pt.js");
    /* harmony import */


    var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/confirmdialog */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-confirmdialog.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _seguranca_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../seguranca/auth.service */
    "./src/app/seguranca/auth.service.ts");
    /* harmony import */


    var _error_handler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./error-handler.service */
    "./src/app/core/error-handler.service.ts");
    /* harmony import */


    var _pessoas_pessoa_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../pessoas/pessoa.service */
    "./src/app/pessoas/pessoa.service.ts");
    /* harmony import */


    var _lancamentos_lancamento_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./../lancamentos/lancamento.service */
    "./src/app/lancamentos/lancamento.service.ts");
    /* harmony import */


    var _categorias_categoria_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./../categorias/categoria.service */
    "./src/app/categorias/categoria.service.ts");
    /* harmony import */


    var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./../dashboard/dashboard.service */
    "./src/app/dashboard/dashboard.service.ts");
    /* harmony import */


    var _relatorios_relatorios_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./../relatorios/relatorios.service */
    "./src/app/relatorios/relatorios.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/core/navbar/navbar.component.ts");
    /* harmony import */


    var _nao_autorizado_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./nao-autorizado.component */
    "./src/app/core/nao-autorizado.component.ts");
    /* harmony import */


    var _pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pagina-nao-encontrada.component */
    "./src/app/core/pagina-nao-encontrada.component.ts");
    /* harmony import */


    var _seguranca_money_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../seguranca/money-http */
    "./src/app/seguranca/money-http.ts");
    /* harmony import */


    var primeng_menubar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! primeng/menubar */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-menubar.js");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default.a);

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      providers: [_lancamentos_lancamento_service__WEBPACK_IMPORTED_MODULE_13__["LancamentoService"], _pessoas_pessoa_service__WEBPACK_IMPORTED_MODULE_12__["PessoaService"], _categorias_categoria_service__WEBPACK_IMPORTED_MODULE_14__["CategoriaService"], _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_15__["DashboardService"], _relatorios_relatorios_service__WEBPACK_IMPORTED_MODULE_16__["RelatoriosService"], _error_handler_service__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlerService"], _seguranca_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _seguranca_money_http__WEBPACK_IMPORTED_MODULE_20__["MoneyHttp"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtHelperService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"],
        useValue: 'pt'
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_8__["ToastModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModule"], primeng_menubar__WEBPACK_IMPORTED_MODULE_21__["MenubarModule"]], primeng_toast__WEBPACK_IMPORTED_MODULE_8__["ToastModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoreModule, {
        declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"], _pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_19__["PaginaNaoEncontradaComponent"], _nao_autorizado_component__WEBPACK_IMPORTED_MODULE_18__["NaoAutorizadoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_8__["ToastModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModule"], primeng_menubar__WEBPACK_IMPORTED_MODULE_21__["MenubarModule"]],
        exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"], primeng_toast__WEBPACK_IMPORTED_MODULE_8__["ToastModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_8__["ToastModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModule"], primeng_menubar__WEBPACK_IMPORTED_MODULE_21__["MenubarModule"]],
          declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"], _pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_19__["PaginaNaoEncontradaComponent"], _nao_autorizado_component__WEBPACK_IMPORTED_MODULE_18__["NaoAutorizadoComponent"]],
          exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"], primeng_toast__WEBPACK_IMPORTED_MODULE_8__["ToastModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModule"]],
          providers: [_lancamentos_lancamento_service__WEBPACK_IMPORTED_MODULE_13__["LancamentoService"], _pessoas_pessoa_service__WEBPACK_IMPORTED_MODULE_12__["PessoaService"], _categorias_categoria_service__WEBPACK_IMPORTED_MODULE_14__["CategoriaService"], _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_15__["DashboardService"], _relatorios_relatorios_service__WEBPACK_IMPORTED_MODULE_16__["RelatoriosService"], _error_handler_service__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlerService"], _seguranca_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _seguranca_money_http__WEBPACK_IMPORTED_MODULE_20__["MoneyHttp"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtHelperService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"],
            useValue: 'pt'
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/error-handler.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/error-handler.service.ts ***!
    \***********************************************/

  /*! exports provided: ErrorHandlerService */

  /***/
  function srcAppCoreErrorHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function () {
      return ErrorHandlerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _seguranca_money_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../seguranca/money-http */
    "./src/app/seguranca/money-http.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ErrorHandlerService = /*#__PURE__*/function () {
      function ErrorHandlerService(messageService, router) {
        _classCallCheck(this, ErrorHandlerService);

        this.messageService = messageService;
        this.router = router;
      }

      _createClass(ErrorHandlerService, [{
        key: "handle",
        value: function handle(errorResponse) {
          var msg;

          if (typeof errorResponse === 'string') {
            msg = errorResponse;
          } else if (errorResponse instanceof _seguranca_money_http__WEBPACK_IMPORTED_MODULE_2__["NotAuthenticatedError"]) {
            msg = 'Sua sessão expirou!';
            this.router.navigate(['/login']);
          } else if (errorResponse instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && errorResponse.status >= 400 && errorResponse.status <= 499) {
            msg = 'Ocorreu um erro ao processar a sua solicitação';

            if (errorResponse.status === 403) {
              msg = 'Você não tem permissão para executar esta ação';
            }

            try {
              msg = errorResponse.error[0].mensagemUsuario;
            } catch (e) {}

            console.error('Ocorreu um erro', errorResponse);
          } else {
            msg = 'Erro ao processar serviço remoto. Tente novamente.';
            console.error('Ocorreu um erro', errorResponse);
          }

          this.messageService.add({
            severity: 'error',
            detail: msg
          });
        }
      }]);

      return ErrorHandlerService;
    }();

    ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) {
      return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorHandlerService,
      factory: ErrorHandlerService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/nao-autorizado.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/nao-autorizado.component.ts ***!
    \**************************************************/

  /*! exports provided: NaoAutorizadoComponent */

  /***/
  function srcAppCoreNaoAutorizadoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NaoAutorizadoComponent", function () {
      return NaoAutorizadoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _seguranca_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../seguranca/auth.service */
    "./src/app/seguranca/auth.service.ts");
    /* harmony import */


    var _seguranca_logout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../seguranca/logout.service */
    "./src/app/seguranca/logout.service.ts");
    /* harmony import */


    var _error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./error-handler.service */
    "./src/app/core/error-handler.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NaoAutorizadoComponent = /*#__PURE__*/function () {
      function NaoAutorizadoComponent(auth, logoutService, errorHandler, router) {
        _classCallCheck(this, NaoAutorizadoComponent);

        this.auth = auth;
        this.logoutService = logoutService;
        this.errorHandler = errorHandler;
        this.router = router;
      }

      _createClass(NaoAutorizadoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          var _this = this;

          this.logoutService.logout().then(function () {
            _this.router.navigate(['/login']);
          })["catch"](function (erro) {
            return _this.errorHandler.handle(erro);
          });
        }
      }]);

      return NaoAutorizadoComponent;
    }();

    NaoAutorizadoComponent.ɵfac = function NaoAutorizadoComponent_Factory(t) {
      return new (t || NaoAutorizadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_seguranca_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_seguranca_logout_service__WEBPACK_IMPORTED_MODULE_2__["LogoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    NaoAutorizadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NaoAutorizadoComponent,
      selectors: [["ng-component"]],
      decls: 6,
      vars: 0,
      consts: [[1, "container"], [1, "text-center"], [1, "navbar-menuitem"], ["href", "javascript:;", 3, "click"]],
      template: function NaoAutorizadoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Acesso negado!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NaoAutorizadoComponent_Template_a_click_4_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NaoAutorizadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: "\n  <div class=\"container\">\n    <h1 class=\"text-center\">Acesso negado!</h1>\n    <li class=\"navbar-menuitem\"><a href=\"javascript:;\" (click)=\"logout()\">Logout</a></li>\n  </div>\n  "
        }]
      }], function () {
        return [{
          type: _seguranca_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _seguranca_logout_service__WEBPACK_IMPORTED_MODULE_2__["LogoutService"]
        }, {
          type: _error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/navbar/navbar.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/navbar/navbar.component.ts ***!
    \*************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppCoreNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _seguranca_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../seguranca/auth.service */
    "./src/app/seguranca/auth.service.ts");
    /* harmony import */


    var _seguranca_logout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../seguranca/logout.service */
    "./src/app/seguranca/logout.service.ts");
    /* harmony import */


    var _error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../error-handler.service */
    "./src/app/core/error-handler.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NavbarComponent_li_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lan\xE7amentos");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pessoas");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_li_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Relat\xF3rio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(auth, logoutService, errorHandler, router) {
        _classCallCheck(this, NavbarComponent);

        this.auth = auth;
        this.logoutService = logoutService;
        this.errorHandler = errorHandler;
        this.router = router;
        this.exibindoMenu = false;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          var _this2 = this;

          this.logoutService.logout().then(function () {
            _this2.router.navigate(['/login']);
          })["catch"](function (erro) {
            return _this2.errorHandler.handle(erro);
          });
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_seguranca_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_seguranca_logout_service__WEBPACK_IMPORTED_MODULE_2__["LogoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 16,
      vars: 6,
      consts: [[1, "navbar"], [1, "container"], [1, "ui-g"], [1, "ui-g-12"], ["href", "javascript:;", 1, "navbar-toggle", 3, "click"], [1, "fa", "fa-bar-chart"], [1, "navbar-menu", 3, "hidden"], [1, "navbar-usuario"], ["class", "navbar-menuitem", "routerLinkActive", "ativo", 4, "ngIf"], [1, "navbar-menuitem"], ["href", "javascript:;", 3, "click"], ["routerLinkActive", "ativo", 1, "navbar-menuitem"], ["routerLink", "/dashboard"], ["routerLink", "/lancamentos"], ["routerLink", "/pessoas"], ["routerLink", "/relatorios/lancamentos"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_4_listener() {
            return ctx.exibindoMenu = !ctx.exibindoMenu;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavbarComponent_li_9_Template, 3, 0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_li_10_Template, 3, 0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavbarComponent_li_11_Template, 3, 0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavbarComponent_li_12_Template, 3, 0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_14_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.exibindoMenu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.auth.jwtPayload == null ? null : ctx.auth.jwtPayload.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.temPermissao("ROLE_PESQUISAR_LANCAMENTO"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.temPermissao("ROLE_PESQUISAR_LANCAMENTO"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.temPermissao("ROLE_PESQUISAR_PESSOA"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.temPermissao("ROLE_PESQUISAR_LANCAMENTO"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: [".navbar[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  background-color: #1db360;\n}\n\n.navbar-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.navbar-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 210px;\n  margin: 0;\n  padding: 0;\n  z-index: 9998;\n\n  background-color: #3a3633;\n\n  list-style: none;\n}\n\n.navbar-usuario[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #0e0606;\n\n  text-transform: uppercase;\n  font-weight: bold;\n  color: #fff;\n}\n\n.navbar-menuitem[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.navbar-menuitem[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #c0bbb7;\n  text-decoration: none;\n}\n\n.navbar-menuitem[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.navbar-menuitem.ativo[_ngcontent-%COMP%] {\n  background-color: #494541;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7O0VBRWIseUJBQXlCOztFQUV6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdDQUFnQzs7RUFFaEMseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRiMzYwO1xufVxuXG4ubmF2YmFyLXRvZ2dsZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyLW1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDIxMHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHotaW5kZXg6IDk5OTg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhMzYzMztcblxuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubmF2YmFyLXVzdWFyaW8ge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzBlMDYwNjtcblxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5uYXZiYXItbWVudWl0ZW0ge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ubmF2YmFyLW1lbnVpdGVtIGEge1xuICBjb2xvcjogI2MwYmJiNztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubmF2YmFyLW1lbnVpdGVtIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdmJhci1tZW51aXRlbS5hdGl2byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQ1NDE7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _seguranca_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _seguranca_logout_service__WEBPACK_IMPORTED_MODULE_2__["LogoutService"]
        }, {
          type: _error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/pagina-nao-encontrada.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/pagina-nao-encontrada.component.ts ***!
    \*********************************************************/

  /*! exports provided: PaginaNaoEncontradaComponent */

  /***/
  function srcAppCorePaginaNaoEncontradaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginaNaoEncontradaComponent", function () {
      return PaginaNaoEncontradaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PaginaNaoEncontradaComponent = function PaginaNaoEncontradaComponent() {
      _classCallCheck(this, PaginaNaoEncontradaComponent);
    };

    PaginaNaoEncontradaComponent.ɵfac = function PaginaNaoEncontradaComponent_Factory(t) {
      return new (t || PaginaNaoEncontradaComponent)();
    };

    PaginaNaoEncontradaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaginaNaoEncontradaComponent,
      selectors: [["ng-component"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container"], [1, "text-center"]],
      template: function PaginaNaoEncontradaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "P\xE1gina n\xE3o encontrada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginaNaoEncontradaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: "\n    <div class=\"container\">\n      <h1 class=\"text-center\">P\xE1gina n\xE3o encontrada</h1>\n    <div>\n  ",
          styles: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/dashboard/dashboard.service.ts ***!
    \************************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppDashboardDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _seguranca_money_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../seguranca/money-http */
    "./src/app/seguranca/money-http.ts");

    var DashboardService = /*#__PURE__*/function () {
      function DashboardService(http) {
        _classCallCheck(this, DashboardService);

        this.http = http;
        this.lancamentosUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/lancamentos");
      }

      _createClass(DashboardService, [{
        key: "lancamentosPorCategoria",
        value: function lancamentosPorCategoria() {
          return this.http.get("".concat(this.lancamentosUrl, "/estatisticas/por-categoria")).toPromise();
        }
      }, {
        key: "lancamentosPorDia",
        value: function lancamentosPorDia() {
          var _this3 = this;

          return this.http.get("".concat(this.lancamentosUrl, "/estatisticas/por-dia")).toPromise().then(function (response) {
            var dados = response;

            _this3.converterStringsParaDatas(dados);

            return dados;
          });
        }
      }, {
        key: "converterStringsParaDatas",
        value: function converterStringsParaDatas(dados) {
          var _iterator = _createForOfIteratorHelper(dados),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var dado = _step.value;
              dado.dia = moment__WEBPACK_IMPORTED_MODULE_1__(dado.dia, 'YYYY-MM-DD').toDate();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }]);

      return DashboardService;
    }();

    DashboardService.ɵfac = function DashboardService_Factory(t) {
      return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_seguranca_money_http__WEBPACK_IMPORTED_MODULE_3__["MoneyHttp"]));
    };

    DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DashboardService,
      factory: DashboardService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _seguranca_money_http__WEBPACK_IMPORTED_MODULE_3__["MoneyHttp"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lancamentos/lancamento.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/lancamentos/lancamento.service.ts ***!
    \***************************************************/

  /*! exports provided: LancamentoFiltro, LancamentoService */

  /***/
  function srcAppLancamentosLancamentoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LancamentoFiltro", function () {
      return LancamentoFiltro;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LancamentoService", function () {
      return LancamentoService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _seguranca_money_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../seguranca/money-http */
    "./src/app/seguranca/money-http.ts");

    var LancamentoFiltro = function LancamentoFiltro() {
      _classCallCheck(this, LancamentoFiltro);

      this.pagina = 0;
      this.itensPorPagina = 5;
    };

    var LancamentoService = /*#__PURE__*/function () {
      function LancamentoService(http) {
        _classCallCheck(this, LancamentoService);

        this.http = http;
        this.lancamentosUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/lancamentos");
      }

      _createClass(LancamentoService, [{
        key: "urlUploadAnexo",
        value: function urlUploadAnexo() {
          return "".concat(this.lancamentosUrl, "/anexo");
        }
      }, {
        key: "pesquisar",
        value: function pesquisar(filtro) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
              page: filtro.pagina.toString(),
              size: filtro.itensPorPagina.toString()
            }
          });

          if (filtro.descricao) {
            params = params.append('descricao', filtro.descricao);
          }

          if (filtro.dataVencimentoInicio) {
            params = params.append('dataVencimentoDe', moment__WEBPACK_IMPORTED_MODULE_2__(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
          }

          if (filtro.dataVencimentoFim) {
            params = params.append('dataVencimentoAte', moment__WEBPACK_IMPORTED_MODULE_2__(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
          }

          return this.http.get("".concat(this.lancamentosUrl, "?resumo"), {
            params: params
          }).toPromise().then(function (response) {
            var lancamentos = response.content;
            var resultado = {
              lancamentos: lancamentos,
              total: response.totalElements
            };
            return resultado;
          });
        }
      }, {
        key: "excluir",
        value: function excluir(codigo) {
          return this.http["delete"]("".concat(this.lancamentosUrl, "/").concat(codigo)).toPromise().then(function () {
            return null;
          });
        }
      }, {
        key: "adicionar",
        value: function adicionar(lancamento) {
          return this.http.post(this.lancamentosUrl, lancamento).toPromise();
        }
      }, {
        key: "atualizar",
        value: function atualizar(lancamento) {
          var _this4 = this;

          return this.http.put("".concat(this.lancamentosUrl, "/").concat(lancamento.codigo), lancamento).toPromise().then(function (response) {
            var lancamentoAlterado = response;

            _this4.converterStringsParaDatas([lancamentoAlterado]);

            return lancamentoAlterado;
          });
        }
      }, {
        key: "buscarPorCodigo",
        value: function buscarPorCodigo(codigo) {
          var _this5 = this;

          return this.http.get("".concat(this.lancamentosUrl, "/").concat(codigo)).toPromise().then(function (response) {
            var lancamento = response;

            _this5.converterStringsParaDatas([lancamento]);

            return lancamento;
          });
        }
      }, {
        key: "converterStringsParaDatas",
        value: function converterStringsParaDatas(lancamentos) {
          var _iterator2 = _createForOfIteratorHelper(lancamentos),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var lancamento = _step2.value;
              lancamento.dataVencimento = moment__WEBPACK_IMPORTED_MODULE_2__(lancamento.dataVencimento, 'YYYY-MM-DD').toDate();

              if (lancamento.dataPagamento) {
                lancamento.dataPagamento = moment__WEBPACK_IMPORTED_MODULE_2__(lancamento.dataPagamento, 'YYYY-MM-DD').toDate();
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }]);

      return LancamentoService;
    }();

    LancamentoService.ɵfac = function LancamentoService_Factory(t) {
      return new (t || LancamentoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_seguranca_money_http__WEBPACK_IMPORTED_MODULE_4__["MoneyHttp"]));
    };

    LancamentoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LancamentoService,
      factory: LancamentoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LancamentoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _seguranca_money_http__WEBPACK_IMPORTED_MODULE_4__["MoneyHttp"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pessoas/pessoa.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/pessoas/pessoa.service.ts ***!
    \*******************************************/

  /*! exports provided: PessoaFiltro, PessoaService */

  /***/
  function srcAppPessoasPessoaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PessoaFiltro", function () {
      return PessoaFiltro;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PessoaService", function () {
      return PessoaService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _seguranca_money_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../seguranca/money-http */
    "./src/app/seguranca/money-http.ts");

    var PessoaFiltro = function PessoaFiltro() {
      _classCallCheck(this, PessoaFiltro);

      this.pagina = 0;
      this.itensPorPagina = 5;
    };

    var PessoaService = /*#__PURE__*/function () {
      function PessoaService(http) {
        _classCallCheck(this, PessoaService);

        this.http = http;
        this.pessoasUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/pessoas");
        this.estadosUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/estados");
        this.cidadesUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/cidades");
      }

      _createClass(PessoaService, [{
        key: "pesquisar",
        value: function pesquisar(filtro) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
              page: filtro.pagina.toString(),
              size: filtro.itensPorPagina.toString()
            }
          });

          if (filtro.nome) {
            params = params.append('nome', filtro.nome);
          }

          return this.http.get("".concat(this.pessoasUrl), {
            params: params
          }).toPromise().then(function (response) {
            var pessoas = response.content;
            var resultado = {
              pessoas: pessoas,
              total: response.totalElements
            };
            return resultado;
          });
        }
      }, {
        key: "listarTodas",
        value: function listarTodas() {
          return this.http.get(this.pessoasUrl).toPromise().then(function (response) {
            return response.content;
          });
        }
      }, {
        key: "excluir",
        value: function excluir(codigo) {
          return this.http["delete"]("".concat(this.pessoasUrl, "/").concat(codigo)).toPromise().then(function () {
            return null;
          });
        }
      }, {
        key: "mudarStatus",
        value: function mudarStatus(codigo, ativo) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json');
          return this.http.put("".concat(this.pessoasUrl, "/").concat(codigo, "/ativo"), ativo, {
            headers: headers
          }).toPromise().then(function () {
            return null;
          });
        }
      }, {
        key: "adicionar",
        value: function adicionar(pessoa) {
          return this.http.post(this.pessoasUrl, pessoa).toPromise();
        }
      }, {
        key: "atualizar",
        value: function atualizar(pessoa) {
          return this.http.put("".concat(this.pessoasUrl, "/").concat(pessoa.codigo), pessoa).toPromise();
        }
      }, {
        key: "buscarPorCodigo",
        value: function buscarPorCodigo(codigo) {
          return this.http.get("".concat(this.pessoasUrl, "/").concat(codigo)).toPromise();
        }
      }, {
        key: "listarEstados",
        value: function listarEstados() {
          return this.http.get(this.estadosUrl).toPromise();
        }
      }, {
        key: "pesquisarCidades",
        value: function pesquisarCidades(estado) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('estado', estado);
          return this.http.get(this.cidadesUrl, {
            params: params
          }).toPromise();
        }
      }]);

      return PessoaService;
    }();

    PessoaService.ɵfac = function PessoaService_Factory(t) {
      return new (t || PessoaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_seguranca_money_http__WEBPACK_IMPORTED_MODULE_3__["MoneyHttp"]));
    };

    PessoaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PessoaService,
      factory: PessoaService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PessoaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _seguranca_money_http__WEBPACK_IMPORTED_MODULE_3__["MoneyHttp"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/relatorios/relatorios.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/relatorios/relatorios.service.ts ***!
    \**************************************************/

  /*! exports provided: RelatoriosService */

  /***/
  function srcAppRelatoriosRelatoriosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelatoriosService", function () {
      return RelatoriosService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _seguranca_money_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../seguranca/money-http */
    "./src/app/seguranca/money-http.ts");

    var RelatoriosService = /*#__PURE__*/function () {
      function RelatoriosService(http) {
        _classCallCheck(this, RelatoriosService);

        this.http = http;
        this.lancamentosUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/lancamentos");
      }

      _createClass(RelatoriosService, [{
        key: "relatorioLancamentosPorPessoa",
        value: function relatorioLancamentosPorPessoa(inicio, fim) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('inicio', moment__WEBPACK_IMPORTED_MODULE_2__(inicio).format('YYYY-MM-DD')).append('fim', moment__WEBPACK_IMPORTED_MODULE_2__(fim).format('YYYY-MM-DD'));
          return this.http.get("".concat(this.lancamentosUrl, "/relatorios/por-pessoa"), {
            params: params,
            responseType: 'blob'
          }).toPromise();
        }
      }]);

      return RelatoriosService;
    }();

    RelatoriosService.ɵfac = function RelatoriosService_Factory(t) {
      return new (t || RelatoriosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_seguranca_money_http__WEBPACK_IMPORTED_MODULE_4__["MoneyHttp"]));
    };

    RelatoriosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RelatoriosService,
      factory: RelatoriosService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatoriosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _seguranca_money_http__WEBPACK_IMPORTED_MODULE_4__["MoneyHttp"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/seguranca/auth.guard.ts":
  /*!*****************************************!*\
    !*** ./src/app/seguranca/auth.guard.ts ***!
    \*****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSegurancaAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/seguranca/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(auth, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this6 = this;

          if (this.auth.isAccessTokenInvalido()) {
            console.log('Navegação com access token inválido. Obtendo novo token...');
            return this.auth.obterNovoAccessToken().then(function () {
              if (_this6.auth.isAccessTokenInvalido()) {
                _this6.router.navigate(['/login']);

                return false;
              }

              return true;
            });
          } else if (next.data.roles && !this.auth.temQualquerPermissao(next.data.roles)) {
            this.router.navigate(['/nao-autorizado']);
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/seguranca/auth.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/seguranca/auth.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSegurancaAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, jwtHelper) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.jwtHelper = jwtHelper;
        this.oauthTokenUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/oauth/token");
        this.carregarToken();
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(usuario, senha) {
          var _this7 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/x-www-form-urlencoded').append('Authorization', 'Basic YXBwbGljYXRpb25fY2xpZW50X2lkOnNlY3JldA==');
          var body = "username=".concat(usuario, "&password=").concat(senha, "&grant_type=password");
          return this.http.post(this.oauthTokenUrl, body, {
            headers: headers,
            withCredentials: true
          }).toPromise().then(function (response) {
            _this7.armazenarToken(response.access_token);
          })["catch"](function (response) {
            console.log(response);

            if (response.status === 400) {
              if (response.error.error === 'invalid_grant') {
                return Promise.reject('Usuário ou senha inválida!');
              }
            }

            return Promise.reject(response);
          });
        }
      }, {
        key: "obterNovoAccessToken",
        value: function obterNovoAccessToken() {
          var _this8 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/x-www-form-urlencoded').append('Authorization', 'Basic YXBwbGljYXRpb25fY2xpZW50X2lkOnNlY3JldA==');
          var body = 'grant_type=refresh_token';
          return this.http.post(this.oauthTokenUrl, body, {
            headers: headers,
            withCredentials: true
          }).toPromise().then(function (response) {
            _this8.armazenarToken(response.access_token);

            console.log('Novo access token criado!');
            return Promise.resolve(null);
          })["catch"](function (response) {
            console.error('Erro ao renovar token.', response);
            return Promise.resolve(null);
          });
        }
      }, {
        key: "limparAccessToken",
        value: function limparAccessToken() {
          localStorage.removeItem('token');
          this.jwtPayload = null;
        }
      }, {
        key: "isAccessTokenInvalido",
        value: function isAccessTokenInvalido() {
          var token = localStorage.getItem('token');
          return !token || this.jwtHelper.isTokenExpired(token);
        }
      }, {
        key: "temPermissao",
        value: function temPermissao(permissao) {
          return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
        }
      }, {
        key: "temQualquerPermissao",
        value: function temQualquerPermissao(roles) {
          var _iterator3 = _createForOfIteratorHelper(roles),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var role = _step3.value;

              if (this.temPermissao(role)) {
                return true;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return false;
        }
      }, {
        key: "armazenarToken",
        value: function armazenarToken(token) {
          this.jwtPayload = this.jwtHelper.decodeToken(token);
          localStorage.setItem('token', token);
        }
      }, {
        key: "carregarToken",
        value: function carregarToken() {
          var token = localStorage.getItem('token');

          if (token) {
            this.armazenarToken(token);
          }
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }, {
          type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/seguranca/login-form/login-form.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/seguranca/login-form/login-form.component.ts ***!
    \**************************************************************/

  /*! exports provided: LoginFormComponent */

  /***/
  function srcAppSegurancaLoginFormLoginFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () {
      return LoginFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../auth.service */
    "./src/app/seguranca/auth.service.ts");
    /* harmony import */


    var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../core/error-handler.service */
    "./src/app/core/error-handler.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");

    var LoginFormComponent = /*#__PURE__*/function () {
      function LoginFormComponent(auth, errorHandler, router) {
        _classCallCheck(this, LoginFormComponent);

        this.auth = auth;
        this.errorHandler = errorHandler;
        this.router = router;
      }

      _createClass(LoginFormComponent, [{
        key: "login",
        value: function login(usuario, senha) {
          var _this9 = this;

          this.auth.login(usuario, senha).then(function () {
            _this9.router.navigate(['/dashboard']);
          })["catch"](function (erro) {
            _this9.errorHandler.handle(erro);
          });
        }
      }]);

      return LoginFormComponent;
    }();

    LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) {
      return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginFormComponent,
      selectors: [["app-login-form"]],
      decls: 15,
      vars: 1,
      consts: [[1, "container", 2, "max-width", "400px", "margin", "auto"], ["autocomplete", "off"], ["f", "ngForm"], [1, "ui-g", "ui-fluid"], [1, "ui-g-12"], ["pInputText", "", "type", "email", "name", "usuario", "placeholder", "E-mail", "ngModel", "", "required", ""], ["usuario", ""], ["pInputText", "", "type", "password", "name", "senha", "placeholder", "Senha", "ngModel", "", "required", ""], ["senha", ""], ["pButton", "", "type", "submit", "label", "Login", 3, "disabled", "click"]],
      template: function LoginFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginFormComponent_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            ctx.login(_r1.value, _r2.value);
            return _r2.value = "";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlZ3VyYW5jYS9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-form',
          templateUrl: './login-form.component.html',
          styleUrls: ['./login-form.component.css']
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _core_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/seguranca/logout.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/seguranca/logout.service.ts ***!
    \*********************************************/

  /*! exports provided: LogoutService */

  /***/
  function srcAppSegurancaLogoutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutService", function () {
      return LogoutService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _money_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./money-http */
    "./src/app/seguranca/money-http.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/seguranca/auth.service.ts");

    var LogoutService = /*#__PURE__*/function () {
      function LogoutService(http, auth) {
        _classCallCheck(this, LogoutService);

        this.http = http;
        this.auth = auth;
        this.tokensRenokeUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/tokens/revoke");
      }

      _createClass(LogoutService, [{
        key: "logout",
        value: function logout() {
          var _this10 = this;

          return this.http["delete"](this.tokensRenokeUrl, {
            withCredentials: true
          }).toPromise().then(function () {
            _this10.auth.limparAccessToken();
          });
        }
      }]);

      return LogoutService;
    }();

    LogoutService.ɵfac = function LogoutService_Factory(t) {
      return new (t || LogoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_money_http__WEBPACK_IMPORTED_MODULE_2__["MoneyHttp"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    LogoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LogoutService,
      factory: LogoutService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _money_http__WEBPACK_IMPORTED_MODULE_2__["MoneyHttp"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/seguranca/money-http.ts":
  /*!*****************************************!*\
    !*** ./src/app/seguranca/money-http.ts ***!
    \*****************************************/

  /*! exports provided: NotAuthenticatedError, MoneyHttp */

  /***/
  function srcAppSegurancaMoneyHttpTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotAuthenticatedError", function () {
      return NotAuthenticatedError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoneyHttp", function () {
      return MoneyHttp;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/seguranca/auth.service.ts");

    var NotAuthenticatedError = function NotAuthenticatedError() {
      _classCallCheck(this, NotAuthenticatedError);
    };

    var MoneyHttp = /*#__PURE__*/function (_angular_common_http_) {
      _inherits(MoneyHttp, _angular_common_http_);

      var _super = _createSuper(MoneyHttp);

      function MoneyHttp(auth, httpHandler) {
        var _this11;

        _classCallCheck(this, MoneyHttp);

        _this11 = _super.call(this, httpHandler);
        _this11.auth = auth;
        _this11.httpHandler = httpHandler;
        return _this11;
      }

      _createClass(MoneyHttp, [{
        key: "delete",
        value: function _delete(url, options) {
          var _this12 = this;

          return this.fazerRequisicao(function () {
            return _get(_getPrototypeOf(MoneyHttp.prototype), "delete", _this12).call(_this12, url, options);
          });
        }
      }, {
        key: "patch",
        value: function patch(url, body, options) {
          var _this13 = this;

          return this.fazerRequisicao(function () {
            return _get(_getPrototypeOf(MoneyHttp.prototype), "patch", _this13).call(_this13, url, options);
          });
        }
      }, {
        key: "head",
        value: function head(url, options) {
          var _this14 = this;

          return this.fazerRequisicao(function () {
            return _get(_getPrototypeOf(MoneyHttp.prototype), "head", _this14).call(_this14, url, options);
          });
        }
      }, {
        key: "options",
        value: function options(url, _options) {
          var _this15 = this;

          return this.fazerRequisicao(function () {
            return _get(_getPrototypeOf(MoneyHttp.prototype), "options", _this15).call(_this15, url, _options);
          });
        }
      }, {
        key: "get",
        value: function get(url, options) {
          var _this16 = this;

          return this.fazerRequisicao(function () {
            return _get(_getPrototypeOf(MoneyHttp.prototype), "get", _this16).call(_this16, url, options);
          });
        }
      }, {
        key: "post",
        value: function post(url, body, options) {
          var _this17 = this;

          return this.fazerRequisicao(function () {
            return _get(_getPrototypeOf(MoneyHttp.prototype), "post", _this17).call(_this17, url, body, options);
          });
        }
      }, {
        key: "put",
        value: function put(url, body, options) {
          var _this18 = this;

          return this.fazerRequisicao(function () {
            return _get(_getPrototypeOf(MoneyHttp.prototype), "put", _this18).call(_this18, url, body, options);
          });
        }
      }, {
        key: "fazerRequisicao",
        value: function fazerRequisicao(fn) {
          var _this19 = this;

          if (this.auth.isAccessTokenInvalido()) {
            console.log('Requisição HTTP com access token inválido. Obtendo novo token...');
            var chamadaNovoAccessToken = this.auth.obterNovoAccessToken().then(function () {
              if (_this19.auth.isAccessTokenInvalido()) {
                throw new NotAuthenticatedError();
              }

              return fn().toPromise();
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(chamadaNovoAccessToken);
          } else {
            return fn();
          }
        }
      }]);

      return MoneyHttp;
    }(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]);

    MoneyHttp.ɵfac = function MoneyHttp_Factory(t) {
      return new (t || MoneyHttp)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHandler"]));
    };

    MoneyHttp.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MoneyHttp,
      factory: MoneyHttp.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoneyHttp, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHandler"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/seguranca/seguranca-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/seguranca/seguranca-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: SegurancaRoutingModule */

  /***/
  function srcAppSegurancaSegurancaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SegurancaRoutingModule", function () {
      return SegurancaRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login-form/login-form.component */
    "./src/app/seguranca/login-form/login-form.component.ts");

    var routes = [{
      path: 'login',
      component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"]
    }];

    var SegurancaRoutingModule = function SegurancaRoutingModule() {
      _classCallCheck(this, SegurancaRoutingModule);
    };

    SegurancaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SegurancaRoutingModule
    });
    SegurancaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SegurancaRoutingModule_Factory(t) {
        return new (t || SegurancaRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SegurancaRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SegurancaRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/seguranca/seguranca.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/seguranca/seguranca.module.ts ***!
    \***********************************************/

  /*! exports provided: tokenGetter, SegurancaModule */

  /***/
  function srcAppSegurancaSegurancaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tokenGetter", function () {
      return tokenGetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SegurancaModule", function () {
      return SegurancaModule;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/seguranca/auth.guard.ts");
    /* harmony import */


    var _logout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./logout.service */
    "./src/app/seguranca/logout.service.ts");
    /* harmony import */


    var _seguranca_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./seguranca-routing.module */
    "./src/app/seguranca/seguranca-routing.module.ts");
    /* harmony import */


    var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login-form/login-form.component */
    "./src/app/seguranca/login-form/login-form.component.ts");

    function tokenGetter() {
      return localStorage.getItem('token');
    }

    var SegurancaModule = function SegurancaModule() {
      _classCallCheck(this, SegurancaModule);
    };

    SegurancaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SegurancaModule
    });
    SegurancaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SegurancaModule_Factory(t) {
        return new (t || SegurancaModule)();
      },
      providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _logout_service__WEBPACK_IMPORTED_MODULE_7__["LogoutService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtModule"].forRoot({
        config: {
          tokenGetter: tokenGetter
        }
      }), primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"], _seguranca_routing_module__WEBPACK_IMPORTED_MODULE_8__["SegurancaRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SegurancaModule, {
        declarations: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__["LoginFormComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"], _seguranca_routing_module__WEBPACK_IMPORTED_MODULE_8__["SegurancaRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SegurancaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtModule"].forRoot({
            config: {
              tokenGetter: tokenGetter
            }
          }), primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"], _seguranca_routing_module__WEBPACK_IMPORTED_MODULE_8__["SegurancaRoutingModule"]],
          declarations: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__["LoginFormComponent"]],
          providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _logout_service__WEBPACK_IMPORTED_MODULE_7__["LogoutService"]]
        }]
      }], null, null);
    })();
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
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false,
      apiUrl: ''
    };
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
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
    /*! C:\Users\Alex\Documents\project\github\appMoney\app-money-ui\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map