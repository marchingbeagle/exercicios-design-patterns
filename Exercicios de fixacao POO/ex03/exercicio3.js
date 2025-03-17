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
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    ContaBancaria.prototype.getNumero = function () {
        return this.numero;
    };
    ContaBancaria.prototype.getSaldo = function () {
        return this.saldo;
    };
    return ContaBancaria;
}());
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(numero, saldo, limiteChequeEspecial) {
        var _this = _super.call(this, numero, saldo) || this;
        _this.limiteChequeEspecial = limiteChequeEspecial;
        return _this;
    }
    ContaCorrente.prototype.sacar = function (valor) {
        if (valor <= this.saldo + this.limiteChequeEspecial) {
            this.saldo -= valor;
            return true;
        }
        return false;
    };
    ContaCorrente.prototype.getLimiteChequeEspecial = function () {
        return this.limiteChequeEspecial;
    };
    return ContaCorrente;
}(ContaBancaria));
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca(numero, saldo, taxaJuros) {
        var _this = _super.call(this, numero, saldo) || this;
        _this.taxaJuros = taxaJuros;
        return _this;
    }
    ContaPoupanca.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        return false;
    };
    ContaPoupanca.prototype.aplicarJuros = function () {
        this.saldo += this.saldo * this.taxaJuros;
    };
    ContaPoupanca.prototype.getTaxaJuros = function () {
        return this.taxaJuros;
    };
    return ContaPoupanca;
}(ContaBancaria));
function demonstrarSistemaBancario() {
    var contaCorrente = new ContaCorrente("12345-6", 1000, 500);
    var contaPoupanca = new ContaPoupanca("65432-1", 2000, 0.01);
    console.log("Conta Corrente: ".concat(contaCorrente.getNumero()));
    console.log("Saldo: R$ ".concat(contaCorrente.getSaldo()));
    console.log("Limite Cheque Especial: R$ ".concat(contaCorrente.getLimiteChequeEspecial()));
    console.log("Saque de R$ 1200: ".concat(contaCorrente.sacar(1200) ? "Aprovado" : "Negado"));
    console.log("Saldo ap\u00F3s saque: R$ ".concat(contaCorrente.getSaldo()));
    console.log("\n");
    console.log("Conta Poupan\u00E7a: ".concat(contaPoupanca.getNumero()));
    console.log("Saldo: R$ ".concat(contaPoupanca.getSaldo()));
    console.log("Taxa de Juros: ".concat(contaPoupanca.getTaxaJuros() * 100, "%"));
    contaPoupanca.aplicarJuros();
    console.log("Saldo ap\u00F3s aplicar juros: R$ ".concat(contaPoupanca.getSaldo()));
    console.log("Saque de R$ 500: ".concat(contaPoupanca.sacar(500) ? "Aprovado" : "Negado"));
    console.log("Saldo ap\u00F3s saque: R$ ".concat(contaPoupanca.getSaldo()));
}
demonstrarSistemaBancario();
