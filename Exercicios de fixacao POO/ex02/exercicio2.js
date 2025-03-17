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
var Veiculo = /** @class */ (function () {
    function Veiculo(modelo, capacidade) {
        this.modelo = modelo;
        this.capacidade = capacidade;
    }
    Veiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Veiculo.prototype.getCapacidade = function () {
        return this.capacidade;
    };
    return Veiculo;
}());
var Onibus = /** @class */ (function (_super) {
    __extends(Onibus, _super);
    function Onibus(modelo, capacidade, consumoPorKm) {
        var _this = _super.call(this, modelo, capacidade) || this;
        _this.consumoPorKm = consumoPorKm;
        return _this;
    }
    Onibus.prototype.calcularConsumo = function (distancia) {
        return this.consumoPorKm * distancia;
    };
    Onibus.prototype.getConsumoPorKm = function () {
        return this.consumoPorKm;
    };
    return Onibus;
}(Veiculo));
var Taxi = /** @class */ (function (_super) {
    __extends(Taxi, _super);
    function Taxi(modelo, capacidade, taxaPorPassageiro) {
        var _this = _super.call(this, modelo, capacidade) || this;
        _this.taxaPorPassageiro = taxaPorPassageiro;
        return _this;
    }
    Taxi.prototype.calcularConsumo = function (distancia, passageiros) {
        if (passageiros === void 0) { passageiros = 1; }
        return this.taxaPorPassageiro * passageiros * distancia;
    };
    Taxi.prototype.getTaxaPorPassageiro = function () {
        return this.taxaPorPassageiro;
    };
    return Taxi;
}(Veiculo));
function demonstrarSistemaTransporte() {
    var onibus = new Onibus("Mercedes-Benz", "50 passageiros", 0.5);
    var taxi = new Taxi("Toyota Prius", "4 passageiros", 2);
    console.log("\u00D4nibus: ".concat(onibus.getModelo(), " (").concat(onibus.getCapacidade(), ")"));
    console.log("Consumo por Km: ".concat(onibus.getConsumoPorKm(), " litros"));
    console.log("Consumo para 100 Km: ".concat(onibus.calcularConsumo(100), " litros"));
    console.log("\n");
    console.log("T\u00E1xi: ".concat(taxi.getModelo(), " (").concat(taxi.getCapacidade(), ")"));
    console.log("Taxa por Passageiro: R$ ".concat(taxi.getTaxaPorPassageiro()));
    console.log("Consumo para 100 Km com 3 passageiros: R$ ".concat(taxi.calcularConsumo(100, 3)));
}
demonstrarSistemaTransporte();
