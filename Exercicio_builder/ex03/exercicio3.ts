enum EngineType {
  GASOLINA = "Gasolina",
  ELETRICO = "Elétrico",
  HIBRIDO = "Híbrido",
}

enum TransmissionType {
  MANUAL = "Manual",
  AUTOMATICO = "Automático",
}

class Car {
  constructor(
    private model: string,
    private engineType: EngineType,
    private color: string | null = null,
    private transmission: TransmissionType | null = null,
    private hasSunroof: boolean = false,
    private hasPremiumSound: boolean = false,
    private hasLeatherSeats: boolean = false
  ) {}

  public describe(): string {
    let description = `Carro modelo ${this.model} com motor ${this.engineType}`;

    const options: string[] = [];
    if (this.color) options.push(`cor ${this.color}`);
    if (this.transmission) options.push(`câmbio ${this.transmission}`);
    if (this.hasSunroof) options.push("teto solar");
    if (this.hasPremiumSound) options.push("som premium");
    if (this.hasLeatherSeats) options.push("bancos de couro");

    if (options.length > 0) {
      description += ` equipado com ${options.join(", ")}`;
    }

    return description;
  }
}

class CarBuilder {
  private model: string | null = null;
  private engineType: EngineType | null = null;
  private color: string | null = null;
  private transmission: TransmissionType | null = null;
  private hasSunroof: boolean = false;
  private hasPremiumSound: boolean = false;
  private hasLeatherSeats: boolean = false;

  public setModel(model: string): CarBuilder {
    this.model = model;
    return this;
  }

  public setEngineType(engineType: EngineType): CarBuilder {
    this.engineType = engineType;
    return this;
  }

  public setColor(color: string): CarBuilder {
    this.color = color;
    return this;
  }

  public setTransmission(transmission: TransmissionType): CarBuilder {
    this.transmission = transmission;
    return this;
  }

  public addSunroof(): CarBuilder {
    this.hasSunroof = true;
    return this;
  }

  public addPremiumSound(): CarBuilder {
    this.hasPremiumSound = true;
    return this;
  }

  public addLeatherSeats(): CarBuilder {
    this.hasLeatherSeats = true;
    return this;
  }

  private countOptions(): number {
    let count = 0;
    if (this.color) count++;
    if (this.transmission) count++;
    if (this.hasSunroof) count++;
    if (this.hasPremiumSound) count++;
    if (this.hasLeatherSeats) count++;
    return count;
  }

  private validateRequiredFields(): void {
    if (!this.model) {
      throw new Error("O modelo do carro é obrigatório");
    }
    if (!this.engineType) {
      throw new Error("O tipo de motor é obrigatório");
    }

    if (this.countOptions() < 2) {
      throw new Error(
        "O carro deve ter pelo menos dois opcionais selecionados"
      );
    }
  }

  public build(): Car {
    this.validateRequiredFields();

    return new Car(
      this.model!,
      this.engineType!,
      this.color,
      this.transmission,
      this.hasSunroof,
      this.hasPremiumSound,
      this.hasLeatherSeats
    );
  }
}

class CarDirector {
  private builder: CarBuilder;

  constructor(builder: CarBuilder) {
    this.builder = builder;
  }

  public constructSportsCar(): Car {
    return this.builder
      .setModel("SportX")
      .setEngineType(EngineType.GASOLINA)
      .setColor("Vermelho")
      .setTransmission(TransmissionType.AUTOMATICO)
      .addSunroof()
      .addPremiumSound()
      .addLeatherSeats()
      .build();
  }

  public constructEcoCar(): Car {
    return this.builder
      .setModel("EcoFriendly")
      .setEngineType(EngineType.HIBRIDO)
      .setColor("Verde")
      .setTransmission(TransmissionType.AUTOMATICO)
      .addPremiumSound()
      .build();
  }

  public constructLuxuryCar(): Car {
    return this.builder
      .setModel("LuxuryPlus")
      .setEngineType(EngineType.ELETRICO)
      .setColor("Preto")
      .setTransmission(TransmissionType.AUTOMATICO)
      .addSunroof()
      .addPremiumSound()
      .addLeatherSeats()
      .build();
  }
}

function demoCarBuilder() {
  try {
    const customCar = new CarBuilder()
      .setModel("Sedan Premium")
      .setEngineType(EngineType.GASOLINA)
      .setColor("Azul")
      .setTransmission(TransmissionType.MANUAL)
      .addLeatherSeats()
      .build();

    console.log(customCar.describe());
  } catch (error: any) {
    console.error(`Erro: ${error.message}`);
  }

  try {
    const invalidCar = new CarBuilder()
      .setModel("SUV Basic")
      .setEngineType(EngineType.HIBRIDO)
      .setColor("Branco")
      .build();

    console.log(invalidCar.describe());
  } catch (error: any) {
    console.error(`Erro: ${error.message}`);
  }

  const builder = new CarBuilder();
  const director = new CarDirector(builder);

  const sportsCar = director.constructSportsCar();
  console.log(sportsCar.describe());

  const ecoCar = director.constructEcoCar();
  console.log(ecoCar.describe());

  const luxuryCar = director.constructLuxuryCar();
  console.log(luxuryCar.describe());
}

demoCarBuilder();
