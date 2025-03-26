interface Payment {
  processPayment(amount: number): void;
}

class CreditCardPayment implements Payment {
  processPayment(amount: number): void {
    console.log(`Processando pagamento de R$ ${amount} via cartão de crédito`);
  }
}

class PayPalPayment implements Payment {
  processPayment(amount: number): void {
    console.log(`Processando pagamento de R$ ${amount} via PayPal`);
  }
}

class BoletoPayment implements Payment {
  processPayment(amount: number): void {
    console.log(`Gerando boleto para pagamento de R$ ${amount}`);
    console.log(
      "Código do boleto: 23790.12345 67890.123456 78901.234567 8 90123456789012"
    );
  }
}

enum PaymentType {
  CREDIT_CARD = "credit_card",
  PAYPAL = "paypal",
  BOLETO = "boleto",
}

class PaymentFactory {
  createPayment(type: PaymentType): Payment {
    switch (type) {
      case PaymentType.CREDIT_CARD:
        return new CreditCardPayment();
      case PaymentType.PAYPAL:
        return new PayPalPayment();
      case PaymentType.BOLETO:
        return new BoletoPayment();
      default:
        throw new Error(`Método de pagamento não suportado: ${type}`);
    }
  }
}

function executePaymentDemo() {
  const factory = new PaymentFactory();
  const orderAmount = 199.99;

  const creditCardPayment = factory.createPayment(PaymentType.CREDIT_CARD);
  creditCardPayment.processPayment(orderAmount);

  const paypalPayment = factory.createPayment(PaymentType.PAYPAL);
  paypalPayment.processPayment(orderAmount);

  const boletoPayment = factory.createPayment(PaymentType.BOLETO);
  boletoPayment.processPayment(orderAmount);
}

executePaymentDemo();
