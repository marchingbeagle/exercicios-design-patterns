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
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    Funcionario.prototype.getCargo = function () {
        return this.cargo;
    };
    return Funcionario;
}());
var FuncionarioEfetivo = /** @class */ (function (_super) {
    __extends(FuncionarioEfetivo, _super);
    function FuncionarioEfetivo(nome, salario, cargo, bonusAnual) {
        var _this = _super.call(this, nome, salario, cargo) || this;
        _this.bonusAnual = bonusAnual;
        return _this;
    }
    FuncionarioEfetivo.prototype.calcularVencimentos = function () {
        return this.salario + this.bonusAnual / 12;
    };
    FuncionarioEfetivo.prototype.getBonusAnual = function () {
        return this.bonusAnual;
    };
    return FuncionarioEfetivo;
}(Funcionario));
var FuncionarioTerceirizado = /** @class */ (function (_super) {
    __extends(FuncionarioTerceirizado, _super);
    function FuncionarioTerceirizado(nome, salario, cargo, custoAdicionalPorProjeto, numeroProjetosAtivos) {
        var _this = _super.call(this, nome, salario, cargo) || this;
        _this.custoAdicionalPorProjeto = custoAdicionalPorProjeto;
        _this.numeroProjetosAtivos = numeroProjetosAtivos;
        return _this;
    }
    FuncionarioTerceirizado.prototype.calcularVencimentos = function () {
        return (this.salario + this.custoAdicionalPorProjeto * this.numeroProjetosAtivos);
    };
    FuncionarioTerceirizado.prototype.getCustoAdicionalPorProjeto = function () {
        return this.custoAdicionalPorProjeto;
    };
    FuncionarioTerceirizado.prototype.getNumeroProjetosAtivos = function () {
        return this.numeroProjetosAtivos;
    };
    FuncionarioTerceirizado.prototype.setNumeroProjetosAtivos = function (numeroProjetosAtivos) {
        this.numeroProjetosAtivos = numeroProjetosAtivos;
    };
    return FuncionarioTerceirizado;
}(Funcionario));
function demonstrarSistemaFuncionarios() {
    var efetivo = new FuncionarioEfetivo("João Silva", 5000, "Desenvolvedor Senior", 12000);
    var terceirizado = new FuncionarioTerceirizado("Maria Souza", 4000, "Designer", 1500, 2);
    console.log("Funcion\u00E1rio: ".concat(efetivo.getNome(), " (").concat(efetivo.getCargo(), ")"));
    console.log("Sal\u00E1rio Base: R$ ".concat(efetivo.getSalario()));
    console.log("B\u00F4nus Anual: R$ ".concat(efetivo.getBonusAnual()));
    console.log("Vencimentos Totais: R$ ".concat(efetivo.calcularVencimentos()));
    console.log("\n");
    console.log("Funcion\u00E1rio: ".concat(terceirizado.getNome(), " (").concat(terceirizado.getCargo(), ")"));
    console.log("Sal\u00E1rio Base: R$ ".concat(terceirizado.getSalario()));
    console.log("Custo Adicional por Projeto: R$ ".concat(terceirizado.getCustoAdicionalPorProjeto()));
    console.log("N\u00FAmero de Projetos Ativos: ".concat(terceirizado.getNumeroProjetosAtivos()));
    console.log("Vencimentos Totais: R$ ".concat(terceirizado.calcularVencimentos()));
}
demonstrarSistemaFuncionarios();
