abstract class Funcionario {
  constructor(
    protected nome: string,
    protected salario: number,
    protected cargo: string
  ) {}

  abstract calcularVencimentos(): number;

  getNome(): string {
    return this.nome;
  }

  getSalario(): number {
    return this.salario;
  }

  getCargo(): string {
    return this.cargo;
  }
}

class FuncionarioEfetivo extends Funcionario {
  constructor(
    nome: string,
    salario: number,
    cargo: string,
    private bonusAnual: number
  ) {
    super(nome, salario, cargo);
  }

  calcularVencimentos(): number {
    return this.salario + this.bonusAnual / 12;
  }

  getBonusAnual(): number {
    return this.bonusAnual;
  }
}

class FuncionarioTerceirizado extends Funcionario {
  constructor(
    nome: string,
    salario: number,
    cargo: string,
    private custoAdicionalPorProjeto: number,
    private numeroProjetosAtivos: number
  ) {
    super(nome, salario, cargo);
  }

  calcularVencimentos(): number {
    return (
      this.salario + this.custoAdicionalPorProjeto * this.numeroProjetosAtivos
    );
  }

  getCustoAdicionalPorProjeto(): number {
    return this.custoAdicionalPorProjeto;
  }

  getNumeroProjetosAtivos(): number {
    return this.numeroProjetosAtivos;
  }

  setNumeroProjetosAtivos(numeroProjetosAtivos: number): void {
    this.numeroProjetosAtivos = numeroProjetosAtivos;
  }
}

function demonstrarSistemaFuncionarios() {
  const efetivo = new FuncionarioEfetivo(
    "João Silva",
    5000,
    "Desenvolvedor Senior",
    12000
  );
  const terceirizado = new FuncionarioTerceirizado(
    "Maria Souza",
    4000,
    "Designer",
    1500,
    2
  );

  console.log(`Funcionário: ${efetivo.getNome()} (${efetivo.getCargo()})`);
  console.log(`Salário Base: R$ ${efetivo.getSalario()}`);
  console.log(`Bônus Anual: R$ ${efetivo.getBonusAnual()}`);
  console.log(`Vencimentos Totais: R$ ${efetivo.calcularVencimentos()}`);

  console.log("\n");

  console.log(
    `Funcionário: ${terceirizado.getNome()} (${terceirizado.getCargo()})`
  );
  console.log(`Salário Base: R$ ${terceirizado.getSalario()}`);
  console.log(
    `Custo Adicional por Projeto: R$ ${terceirizado.getCustoAdicionalPorProjeto()}`
  );
  console.log(
    `Número de Projetos Ativos: ${terceirizado.getNumeroProjetosAtivos()}`
  );
  console.log(`Vencimentos Totais: R$ ${terceirizado.calcularVencimentos()}`);
}

demonstrarSistemaFuncionarios();
