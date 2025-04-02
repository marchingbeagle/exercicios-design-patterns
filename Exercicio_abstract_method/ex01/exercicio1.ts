// Abstract Products
interface Toy {
  play(): void;
}

// Concrete Products
class PlasticCar implements Toy {
  play(): void {
    console.log(
      "Brincando com um carrinho de plástico. Ele é leve e colorido!"
    );
  }
}

class PlasticDoll implements Toy {
  play(): void {
    console.log(
      "Brincando com uma boneca de plástico. Ela tem cabelos coloridos!"
    );
  }
}

class WoodenCar implements Toy {
  play(): void {
    console.log(
      "Brincando com um carrinho de madeira. Ele é resistente e natural!"
    );
  }
}

class WoodenDoll implements Toy {
  play(): void {
    console.log("Brincando com uma boneca de madeira. Ela é artesanal!");
  }
}

// Abstract Factory
interface ToyFactory {
  createCar(): Toy;
  createDoll(): Toy;
}

// Concrete Factories
class PlasticToyFactory implements ToyFactory {
  createCar(): Toy {
    return new PlasticCar();
  }

  createDoll(): Toy {
    return new PlasticDoll();
  }
}

class WoodenToyFactory implements ToyFactory {
  createCar(): Toy {
    return new WoodenCar();
  }

  createDoll(): Toy {
    return new WoodenDoll();
  }
}

// Client code
function testToyFactory(factory: ToyFactory) {
  console.log("Testando fábrica de brinquedos:");

  const car = factory.createCar();
  const doll = factory.createDoll();

  car.play();
  doll.play();

  console.log("-------------------");
}

// Testing
const plasticFactory = new PlasticToyFactory();
const woodenFactory = new WoodenToyFactory();

testToyFactory(plasticFactory);
testToyFactory(woodenFactory);
