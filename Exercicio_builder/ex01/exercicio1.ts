enum BreadType {
  BRIOCHE = "Brioche",
  TRADICIONAL = "Tradicional",
  INTEGRAL = "Integral",
  AUSTRALIANO = "Australiano",
}

enum ProteinType {
  CARNE = "Carne",
  FRANGO = "Frango",
  VEGETARIANO = "Vegetariano",
}

class BurgerOrder {
  constructor(
    private breadType: BreadType,
    private proteinType: ProteinType,
    private hasCheese: boolean = false,
    private hasLettuce: boolean = false,
    private hasTomato: boolean = false,
    private hasOnion: boolean = false,
    private hasSpecialSauce: boolean = false,
    private drink: string | null = null
  ) {}

  public describe(): string {
    let description = `Hambúrguer com pão ${this.breadType} e proteína ${this.proteinType}`;

    const ingredients: string[] = [];
    if (this.hasCheese) ingredients.push("queijo");
    if (this.hasLettuce) ingredients.push("alface");
    if (this.hasTomato) ingredients.push("tomate");
    if (this.hasOnion) ingredients.push("cebola");
    if (this.hasSpecialSauce) ingredients.push("molho especial");

    if (ingredients.length > 0) {
      description += ` com ${ingredients.join(", ")}`;
    }

    if (this.drink) {
      description += ` acompanhado de ${this.drink}`;
    }

    return description;
  }
}

class BurgerOrderBuilder {
  private breadType!: BreadType;
  private proteinType!: ProteinType;
  private hasCheese: boolean = false;
  private hasLettuce: boolean = false;
  private hasTomato: boolean = false;
  private hasOnion: boolean = false;
  private hasSpecialSauce: boolean = false;
  private drink: string | null = null;

  public setBread(breadType: BreadType): BurgerOrderBuilder {
    this.breadType = breadType;
    return this;
  }

  public setProtein(proteinType: ProteinType): BurgerOrderBuilder {
    this.proteinType = proteinType;
    return this;
  }

  public addCheese(): BurgerOrderBuilder {
    this.hasCheese = true;
    return this;
  }

  public addLettuce(): BurgerOrderBuilder {
    this.hasLettuce = true;
    return this;
  }

  public addTomato(): BurgerOrderBuilder {
    this.hasTomato = true;
    return this;
  }

  public addOnion(): BurgerOrderBuilder {
    this.hasOnion = true;
    return this;
  }

  public addSpecialSauce(): BurgerOrderBuilder {
    this.hasSpecialSauce = true;
    return this;
  }

  public withDrink(drink: string): BurgerOrderBuilder {
    this.drink = drink;
    return this;
  }

  public build(): BurgerOrder {
    if (!this.breadType || !this.proteinType) {
      throw new Error("Todo pedido deve conter um tipo de pão e uma proteína!");
    }

    return new BurgerOrder(
      this.breadType,
      this.proteinType,
      this.hasCheese,
      this.hasLettuce,
      this.hasTomato,
      this.hasOnion,
      this.hasSpecialSauce,
      this.drink
    );
  }
}

function demoBurgerBuilder() {
  const completeOrder = new BurgerOrderBuilder()
    .setBread(BreadType.BRIOCHE)
    .setProtein(ProteinType.CARNE)
    .addCheese()
    .addLettuce()
    .addTomato()
    .addSpecialSauce()
    .withDrink("Coca-Cola")
    .build();

  console.log(completeOrder.describe());

  const vegetarianOrder = new BurgerOrderBuilder()
    .setBread(BreadType.INTEGRAL)
    .setProtein(ProteinType.VEGETARIANO)
    .addLettuce()
    .addTomato()
    .build();

  console.log(vegetarianOrder.describe());
}

demoBurgerBuilder();
