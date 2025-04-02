// Abstract Products
interface MagicalCreature {
  attack(): void;
}

// Concrete Products - Fire Kingdom
class Dragon implements MagicalCreature {
  attack(): void {
    console.log("O dragão ataca com uma rajada de fogo devastadora!");
  }
}

class FireSalamander implements MagicalCreature {
  attack(): void {
    console.log("A salamandra lança bolas de fogo em todas as direções!");
  }
}

// Concrete Products - Water Kingdom
class SeaSerpent implements MagicalCreature {
  attack(): void {
    console.log("A serpente marinha cria um tsunami poderoso para atacar!");
  }
}

class Triton implements MagicalCreature {
  attack(): void {
    console.log(
      "O tritão ataca com seu tridente mágico, controlando as ondas!"
    );
  }
}

// Abstract Factory
interface MagicalCreatureFactory {
  createFirstCreature(): MagicalCreature;
  createSecondCreature(): MagicalCreature;
}

// Concrete Factories
class FireKingdomFactory implements MagicalCreatureFactory {
  createFirstCreature(): MagicalCreature {
    return new Dragon();
  }

  createSecondCreature(): MagicalCreature {
    return new FireSalamander();
  }
}

class WaterKingdomFactory implements MagicalCreatureFactory {
  createFirstCreature(): MagicalCreature {
    return new SeaSerpent();
  }

  createSecondCreature(): MagicalCreature {
    return new Triton();
  }
}

// Client code
function testCreatureFactory(
  factory: MagicalCreatureFactory,
  kingdomName: string
) {
  console.log(`Criaturas do ${kingdomName}:`);

  const firstCreature = factory.createFirstCreature();
  const secondCreature = factory.createSecondCreature();

  firstCreature.attack();
  secondCreature.attack();

  console.log("-------------------");
}

// Testing
const fireFactory = new FireKingdomFactory();
const waterFactory = new WaterKingdomFactory();

testCreatureFactory(fireFactory, "Reino do Fogo");
testCreatureFactory(waterFactory, "Reino da Água");
