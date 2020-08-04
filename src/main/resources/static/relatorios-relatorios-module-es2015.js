(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["relatorios-relatorios-module"],{

/***/ "./src/app/relatorios/relatorio-lancamentos/relatorio-lancamentos.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/relatorios/relatorio-lancamentos/relatorio-lancamentos.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RelatorioLancamentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioLancamentosComponent", function() { return RelatorioLancamentosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _relatorios_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../relatorios.service */ "./src/app/relatorios/relatorios.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-calendar.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");






const _c0 = function () { return { "width": "95px" }; };
class RelatorioLancamentosComponent {
    constructor(relatoriosService) {
        this.relatoriosService = relatoriosService;
    }
    ngOnInit() {
    }
    gerar() {
        this.relatoriosService.relatorioLancamentosPorPessoa(this.periodoInicio, this.periodoFim)
            .then(relatorio => {
            const url = window.URL.createObjectURL(relatorio);
            window.open(url);
        });
    }
}
RelatorioLancamentosComponent.ɵfac = function RelatorioLancamentosComponent_Factory(t) { return new (t || RelatorioLancamentosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_relatorios_service__WEBPACK_IMPORTED_MODULE_1__["RelatoriosService"])); };
RelatorioLancamentosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RelatorioLancamentosComponent, selectors: [["app-relatorio-lancamentos"]], decls: 16, vars: 7, consts: [[1, "container"], [1, "ui-g"], [1, "ui-g-12"], [3, "ngSubmit"], ["f", "ngForm"], [1, "ui-g-10", "relatorio-filtro"], ["dateFormat", "dd/mm/yy", "required", "", "name", "periodoInicio", 3, "inputStyle", "ngModel", "ngModelChange"], ["dateFormat", "dd/mm/yy", "required", "", "name", "periodoFim", 3, "inputStyle", "ngModel", "ngModelChange"], ["pButton", "", "type", "submit", "label", "Gerar", 3, "disabled"]], template: function RelatorioLancamentosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Relat\u00F3rio de lan\u00E7amentos por pessoa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RelatorioLancamentosComponent_Template_form_ngSubmit_5_listener() { return ctx.gerar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Vencimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p-calendar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RelatorioLancamentosComponent_Template_p_calendar_ngModelChange_10_listener($event) { return ctx.periodoInicio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "at\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p-calendar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RelatorioLancamentosComponent_Template_p_calendar_ngModelChange_13_listener($event) { return ctx.periodoFim = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("ngModel", ctx.periodoInicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("ngModel", ctx.periodoFim);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], primeng_calendar__WEBPACK_IMPORTED_MODULE_3__["Calendar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbGF0b3Jpb3MvcmVsYXRvcmlvLWxhbmNhbWVudG9zL3JlbGF0b3Jpby1sYW5jYW1lbnRvcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatorioLancamentosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-relatorio-lancamentos',
                templateUrl: './relatorio-lancamentos.component.html',
                styleUrls: ['./relatorio-lancamentos.component.css']
            }]
    }], function () { return [{ type: _relatorios_service__WEBPACK_IMPORTED_MODULE_1__["RelatoriosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/relatorios/relatorios-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/relatorios/relatorios-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: RelatoriosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatoriosRoutingModule", function() { return RelatoriosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _relatorio_lancamentos_relatorio_lancamentos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relatorio-lancamentos/relatorio-lancamentos.component */ "./src/app/relatorios/relatorio-lancamentos/relatorio-lancamentos.component.ts");
/* harmony import */ var _seguranca_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../seguranca/auth.guard */ "./src/app/seguranca/auth.guard.ts");






const routes = [
    {
        path: 'lancamentos',
        component: _relatorio_lancamentos_relatorio_lancamentos_component__WEBPACK_IMPORTED_MODULE_2__["RelatorioLancamentosComponent"],
        canActivate: [_seguranca_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: { roles: ['ROLE_PESQUISAR_LANCAMENTO'] }
    }
];
class RelatoriosRoutingModule {
}
RelatoriosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RelatoriosRoutingModule });
RelatoriosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RelatoriosRoutingModule_Factory(t) { return new (t || RelatoriosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RelatoriosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatoriosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/relatorios/relatorios.module.ts":
/*!*************************************************!*\
  !*** ./src/app/relatorios/relatorios.module.ts ***!
  \*************************************************/
/*! exports provided: RelatoriosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatoriosModule", function() { return RelatoriosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-calendar.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./relatorios-routing.module */ "./src/app/relatorios/relatorios-routing.module.ts");
/* harmony import */ var _relatorio_lancamentos_relatorio_lancamentos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relatorio-lancamentos/relatorio-lancamentos.component */ "./src/app/relatorios/relatorio-lancamentos/relatorio-lancamentos.component.ts");








class RelatoriosModule {
}
RelatoriosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RelatoriosModule });
RelatoriosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RelatoriosModule_Factory(t) { return new (t || RelatoriosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            primeng_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_5__["RelatoriosRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RelatoriosModule, { declarations: [_relatorio_lancamentos_relatorio_lancamentos_component__WEBPACK_IMPORTED_MODULE_6__["RelatorioLancamentosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_5__["RelatoriosRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatoriosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    primeng_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_5__["RelatoriosRoutingModule"]
                ],
                declarations: [_relatorio_lancamentos_relatorio_lancamentos_component__WEBPACK_IMPORTED_MODULE_6__["RelatorioLancamentosComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/message/message.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/message/message.component.ts ***!
  \*****************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MessageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.text, " ");
} }
class MessageComponent {
    temErro() {
        return this.control.hasError(this.error) && this.control.dirty;
    }
}
MessageComponent.ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(); };
MessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageComponent, selectors: [["app-message"]], inputs: { error: "error", control: "control", text: "text" }, decls: 1, vars: 1, consts: [["class", "ui-message ui-messages-error", 4, "ngIf"], [1, "ui-message", "ui-messages-error"]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessageComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.temErro());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".ui-messages-error[_ngcontent-%COMP%] {\n      margin: 0;\n      margin-top: 4px;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-message',
                template: `
    <div *ngIf="temErro()" class="ui-message ui-messages-error">
      {{ text }}
    </div>
  `,
                styles: [`
    .ui-messages-error {
      margin: 0;
      margin-top: 4px;
    }
  `]
            }]
    }], null, { error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message/message.component */ "./src/app/shared/message/message.component.ts");




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_message_message_component__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_message_message_component__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [_message_message_component__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"]],
                exports: [_message_message_component__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=relatorios-relatorios-module-es2015.js.map