abstract class ContaBancaria {
  constructor(protected numero: string, protected saldo: number) {}

  depositar(valor: number): void {
    this.saldo += valor;
  }

  abstract sacar(valor: number): boolean;

  getNumero(): string {
    return this.numero;
  }

  getSaldo(): number {
    return this.saldo;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(
    numero: string,
    saldo: number,
    private limiteChequeEspecial: number
  ) {
    super(numero, saldo);
  }

  sacar(valor: number): boolean {
    if (valor <= this.saldo + this.limiteChequeEspecial) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  getLimiteChequeEspecial(): number {
    return this.limiteChequeEspecial;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(numero: string, saldo: number, private taxaJuros: number) {
    super(numero, saldo);
  }

  sacar(valor: number): boolean {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  aplicarJuros(): void {
    this.saldo += this.saldo * this.taxaJuros;
  }

  getTaxaJuros(): number {
    return this.taxaJuros;
  }
}

function demonstrarSistemaBancario() {
  const contaCorrente = new ContaCorrente("12345-6", 1000, 500);
  const contaPoupanca = new ContaPoupanca("65432-1", 2000, 0.01);

  console.log(`Conta Corrente: ${contaCorrente.getNumero()}`);
  console.log(`Saldo: R$ ${contaCorrente.getSaldo()}`);
  console.log(
    `Limite Cheque Especial: R$ ${contaCorrente.getLimiteChequeEspecial()}`
  );
  console.log(
    `Saque de R$ 1200: ${contaCorrente.sacar(1200) ? "Aprovado" : "Negado"}`
  );
  console.log(`Saldo após saque: R$ ${contaCorrente.getSaldo()}`);

  console.log("\n");

  console.log(`Conta Poupança: ${contaPoupanca.getNumero()}`);
  console.log(`Saldo: R$ ${contaPoupanca.getSaldo()}`);
  console.log(`Taxa de Juros: ${contaPoupanca.getTaxaJuros() * 100}%`);
  contaPoupanca.aplicarJuros();
  console.log(`Saldo após aplicar juros: R$ ${contaPoupanca.getSaldo()}`);
  console.log(
    `Saque de R$ 500: ${contaPoupanca.sacar(500) ? "Aprovado" : "Negado"}`
  );
  console.log(`Saldo após saque: R$ ${contaPoupanca.getSaldo()}`);
}

demonstrarSistemaBancario();
