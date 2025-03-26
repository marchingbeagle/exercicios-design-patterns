var CreditCardPayment = /** @class */ (function () {
    function CreditCardPayment() {
    }
    CreditCardPayment.prototype.processPayment = function (amount) {
        console.log("Processando pagamento de R$ ".concat(amount, " via cart\u00E3o de cr\u00E9dito"));
    };
    return CreditCardPayment;
}());
var PayPalPayment = /** @class */ (function () {
    function PayPalPayment() {
    }
    PayPalPayment.prototype.processPayment = function (amount) {
        console.log("Processando pagamento de R$ ".concat(amount, " via PayPal"));
    };
    return PayPalPayment;
}());
var BoletoPayment = /** @class */ (function () {
    function BoletoPayment() {
    }
    BoletoPayment.prototype.processPayment = function (amount) {
        console.log("Gerando boleto para pagamento de R$ ".concat(amount));
        console.log("Código do boleto: 23790.12345 67890.123456 78901.234567 8 90123456789012");
    };
    return BoletoPayment;
}());
var PaymentType;
(function (PaymentType) {
    PaymentType["CREDIT_CARD"] = "credit_card";
    PaymentType["PAYPAL"] = "paypal";
    PaymentType["BOLETO"] = "boleto";
})(PaymentType || (PaymentType = {}));
var PaymentFactory = /** @class */ (function () {
    function PaymentFactory() {
    }
    PaymentFactory.prototype.createPayment = function (type) {
        switch (type) {
            case PaymentType.CREDIT_CARD:
                return new CreditCardPayment();
            case PaymentType.PAYPAL:
                return new PayPalPayment();
            case PaymentType.BOLETO:
                return new BoletoPayment();
            default:
                throw new Error("M\u00E9todo de pagamento n\u00E3o suportado: ".concat(type));
        }
    };
    return PaymentFactory;
}());
function executePaymentDemo() {
    var factory = new PaymentFactory();
    var orderAmount = 199.99;
    var creditCardPayment = factory.createPayment(PaymentType.CREDIT_CARD);
    creditCardPayment.processPayment(orderAmount);
    var paypalPayment = factory.createPayment(PaymentType.PAYPAL);
    paypalPayment.processPayment(orderAmount);
    var boletoPayment = factory.createPayment(PaymentType.BOLETO);
    boletoPayment.processPayment(orderAmount);
}
executePaymentDemo();
