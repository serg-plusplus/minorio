"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[574],{

/***/ 5574:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Square": function() { return /* reexport */ Square; }
});

// EXTERNAL MODULE: ./node_modules/snarkyjs/dist/web/index.js
var web = __webpack_require__(6400);
;// CONCATENATED MODULE: ../contracts/build/src/Square.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

class Square extends web/* SmartContract */.C3 {
    constructor() {
        super(...arguments);
        this.num = (0,web/* State */.ZM)();
    }
    deploy(args) {
        super.deploy(args);
        this.setPermissions({
            ...web/* Permissions.default */.Pl["default"](),
            editState: web/* Permissions.proofOrSignature */.Pl.proofOrSignature(),
        });
        this.num.set((0,web/* Field */.gN)(3));
    }
    update(square) {
        const currentState = this.num.get();
        this.num.assertEquals(currentState);
        square.assertEquals(currentState.mul(currentState));
        this.num.set(square);
    }
}
__decorate([
    (0,web/* state */.SB)(web/* Field */.gN),
    __metadata("design:type", Object)
], Square.prototype, "num", void 0);
__decorate([
    web/* method */.UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [web/* Field */.gN]),
    __metadata("design:returntype", void 0)
], Square.prototype, "update", null);
//# sourceMappingURL=Square.js.map
;// CONCATENATED MODULE: ../contracts/build/src/index.js


//# sourceMappingURL=index.js.map

/***/ })

}]);