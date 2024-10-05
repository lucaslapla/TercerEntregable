"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoYCamioneta = void 0;
var Vehiculo_1 = require("./Vehiculo"); //herencia (Padre )
var AutoYCamioneta = /** @class */ (function (_super) {
    __extends(AutoYCamioneta, _super);
    function AutoYCamioneta(tipoVehiculo, marca, modelo, patente, nroMotor, nroChasis, cantPuertas) {
        var _this = _super.call(this, tipoVehiculo, marca, modelo, patente, nroMotor, nroChasis) || this;
        _this.cantPuertas = cantPuertas;
        return _this;
    }
    AutoYCamioneta.prototype.getcantPuertas = function () {
        return this.cantPuertas;
    };
    AutoYCamioneta.prototype.setcanPuertas = function (cantPuertas) {
        this.cantPuertas = cantPuertas;
    };
    return AutoYCamioneta;
}(Vehiculo_1.Vehiculo));
exports.AutoYCamioneta = AutoYCamioneta;
