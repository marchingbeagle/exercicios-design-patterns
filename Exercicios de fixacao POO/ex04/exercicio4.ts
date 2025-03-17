class Item {
  constructor(public nome: string, public preco: number) {}
}

class PedidoBase {
  protected items: Item[] = [];

  constructor(protected numero: number) {}

  getNumero(): number {
    return this.numero;
  }

  adicionarItem(item: Item): void {
    this.items.push(item);
  }

  calcularTotal(): number {
    return this.items.reduce((total, item) => total + item.preco, 0);
  }
}

class PedidoDelivery extends PedidoBase {
  constructor(numero: number, private taxaEntrega: number) {
    super(numero);
  }

  calcularTotal(): number {
    return super.calcularTotal() + this.taxaEntrega;
  }
}

function demonstrarSistemaDePedidos() {
  const pedidoPresencial = new PedidoBase(1);
  pedidoPresencial.adicionarItem(new Item("Hambúrguer", 20));
  pedidoPresencial.adicionarItem(new Item("Refrigerante", 5));
  console.log(`Pedido Presencial #${pedidoPresencial.getNumero()}`);
  console.log(`Total: R$ ${pedidoPresencial.calcularTotal()}`);

  console.log("\n");

  const pedidoDelivery = new PedidoDelivery(2, 10);
  pedidoDelivery.adicionarItem(new Item("Pizza", 50));
  pedidoDelivery.adicionarItem(new Item("Sobremesa", 15));
  console.log(`Pedido Delivery #${pedidoDelivery.getNumero()}`);
  console.log(`Total: R$ ${pedidoDelivery.calcularTotal()}`);
}

demonstrarSistemaDePedidos();
