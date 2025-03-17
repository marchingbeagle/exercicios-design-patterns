abstract class Veiculo {
  constructor(protected modelo: string, protected capacidade: string) {}

  abstract calcularConsumo(distancia: number, passageiros?: number): number;

  getModelo(): string {
    return this.modelo;
  }

  getCapacidade(): string {
    return this.capacidade;
  }
}

class Onibus extends Veiculo {
  constructor(
    modelo: string,
    capacidade: string,
    private consumoPorKm: number
  ) {
    super(modelo, capacidade);
  }

  calcularConsumo(distancia: number): number {
    return this.consumoPorKm * distancia;
  }

  getConsumoPorKm(): number {
    return this.consumoPorKm;
  }
}

class Taxi extends Veiculo {
  constructor(
    modelo: string,
    capacidade: string,
    private taxaPorPassageiro: number
  ) {
    super(modelo, capacidade);
  }

  calcularConsumo(distancia: number, passageiros: number = 1): number {
    return this.taxaPorPassageiro * passageiros * distancia;
  }

  getTaxaPorPassageiro(): number {
    return this.taxaPorPassageiro;
  }
}

function demonstrarSistemaTransporte() {
  const onibus = new Onibus("Mercedes-Benz", "50 passageiros", 0.5);
  const taxi = new Taxi("Toyota Prius", "4 passageiros", 2);

  console.log(`Ônibus: ${onibus.getModelo()} (${onibus.getCapacidade()})`);
  console.log(`Consumo por Km: ${onibus.getConsumoPorKm()} litros`);
  console.log(`Consumo para 100 Km: ${onibus.calcularConsumo(100)} litros`);

  console.log("\n");

  console.log(`Táxi: ${taxi.getModelo()} (${taxi.getCapacidade()})`);
  console.log(`Taxa por Passageiro: R$ ${taxi.getTaxaPorPassageiro()}`);
  console.log(
    `Consumo para 100 Km com 3 passageiros: R$ ${taxi.calcularConsumo(100, 3)}`
  );
}

demonstrarSistemaTransporte();
