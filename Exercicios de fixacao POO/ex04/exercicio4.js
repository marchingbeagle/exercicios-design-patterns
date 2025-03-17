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
var Item = /** @class */ (function () {
    function Item(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    return Item;
}());
var Pedido = /** @class */ (function () {
    function Pedido(numero) {
        this.numero = numero;
        this.items = [];
    }
    Pedido.prototype.getNumero = function () {
        return this.numero;
    };
    Pedido.prototype.adicionarItem = function (item) {
        this.items.push(item);
    };
    Pedido.prototype.calcularTotal = function () {
        return this.items.reduce(function (total, item) { return total + item.preco; }, 0);
    };
    return Pedido;
}());
var PedidoDelivery = /** @class */ (function (_super) {
    __extends(PedidoDelivery, _super);
    function PedidoDelivery(numero, taxaEntrega) {
        var _this = _super.call(this, numero) || this;
        _this.taxaEntrega = taxaEntrega;
        return _this;
    }
    PedidoDelivery.prototype.calcularTotal = function () {
        return _super.prototype.calcularTotal.call(this) + this.taxaEntrega;
    };
    return PedidoDelivery;
}(Pedido));
function demonstrarSistemaDePedidos() {
    var pedidoPresencial = new Pedido(1);
    pedidoPresencial.adicionarItem(new Item("Hambúrguer", 20));
    pedidoPresencial.adicionarItem(new Item("Refrigerante", 5));
    console.log("Pedido Presencial #".concat(pedidoPresencial.getNumero()));
    console.log("Total: R$ ".concat(pedidoPresencial.calcularTotal()));
    console.log("\n");
    var pedidoDelivery = new PedidoDelivery(2, 10);
    pedidoDelivery.adicionarItem(new Item("Pizza", 50));
    pedidoDelivery.adicionarItem(new Item("Sobremesa", 15));
    console.log("Pedido Delivery #".concat(pedidoDelivery.getNumero()));
    console.log("Total: R$ ".concat(pedidoDelivery.calcularTotal()));
}
demonstrarSistemaDePedidos();
