// Import the types and concrete classes from exercise 3
import {
  PropulsionSystem,
  ControlSystem,
  Vehicle,
  JetEngine,
  ElectricMotor,
  PlasmaDrive,
  IonEngine,
  AI,
  HybridControl,
  QuantumComputer,
  RemoteControl,
  FlyingCar,
  AutonomousMotorcycle,
  Spaceship,
  RoboticExplorer,
} from "../ex03/exercicio3";

// Abstract Factory
interface VehicleFactory {
  createFirstVehicle(
    propulsion: PropulsionSystem,
    control: ControlSystem
  ): Vehicle;
  createSecondVehicle(
    propulsion: PropulsionSystem,
    control: ControlSystem
  ): Vehicle;
  createPropulsion(type: string): PropulsionSystem;
  createControlSystem(type: string): ControlSystem;
}

// Concrete Factories
class EarthVehicleFactory implements VehicleFactory {
  createFirstVehicle(
    propulsion: PropulsionSystem,
    control: ControlSystem
  ): Vehicle {
    return new FlyingCar(propulsion, control);
  }

  createSecondVehicle(
    propulsion: PropulsionSystem,
    control: ControlSystem
  ): Vehicle {
    return new AutonomousMotorcycle(propulsion, control);
  }

  createPropulsion(type: string): PropulsionSystem {
    if (type === "jet") {
      return new JetEngine();
    } else {
      return new ElectricMotor();
    }
  }

  createControlSystem(type: string): ControlSystem {
    if (type === "ai") {
      return new AI();
    } else {
      return new HybridControl();
    }
  }
}

class SpaceVehicleFactory implements VehicleFactory {
  createFirstVehicle(
    propulsion: PropulsionSystem,
    control: ControlSystem
  ): Vehicle {
    return new Spaceship(propulsion, control);
  }

  createSecondVehicle(
    propulsion: PropulsionSystem,
    control: ControlSystem
  ): Vehicle {
    return new RoboticExplorer(propulsion, control);
  }

  createPropulsion(type: string): PropulsionSystem {
    if (type === "plasma") {
      return new PlasmaDrive();
    } else {
      return new IonEngine();
    }
  }

  createControlSystem(type: string): ControlSystem {
    if (type === "quantum") {
      return new QuantumComputer();
    } else {
      return new RemoteControl();
    }
  }
}

// Concrete Classes (recreated from exercise 3 if not imported)
class JetEngine implements PropulsionSystem {
  describe(): string {
    return "Motor a jato avançado";
  }
}

class ElectricMotor implements PropulsionSystem {
  describe(): string {
    return "Motor elétrico de alta eficiência";
  }
}

class PlasmaDrive implements PropulsionSystem {
  describe(): string {
    return "Propulsão de plasma interestelar";
  }
}

class IonEngine implements PropulsionSystem {
  describe(): string {
    return "Motor de íons para viagens espaciais";
  }
}

class AI implements ControlSystem {
  describe(): string {
    return "Inteligência artificial de última geração";
  }
}

class HybridControl implements ControlSystem {
  describe(): string {
    return "Sistema de controle híbrido (manual e automático)";
  }
}

class QuantumComputer implements ControlSystem {
  describe(): string {
    return "Computador quântico para navegação espacial";
  }
}

class RemoteControl implements ControlSystem {
  describe(): string {
    return "Sistema de controle remoto de longa distância";
  }
}

class FlyingCar implements Vehicle {
  private propulsion: PropulsionSystem;
  private control: ControlSystem;

  constructor(propulsion: PropulsionSystem, control: ControlSystem) {
    this.propulsion = propulsion;
    this.control = control;
  }

  getPropulsion(): PropulsionSystem {
    return this.propulsion;
  }
  getControlSystem(): ControlSystem {
    return this.control;
  }
  getDescription(): string {
    return `Carro Voador com ${this.propulsion.describe()} e ${this.control.describe()}`;
  }
}

class AutonomousMotorcycle implements Vehicle {
  private propulsion: PropulsionSystem;
  private control: ControlSystem;

  constructor(propulsion: PropulsionSystem, control: ControlSystem) {
    this.propulsion = propulsion;
    this.control = control;
  }

  getPropulsion(): PropulsionSystem {
    return this.propulsion;
  }
  getControlSystem(): ControlSystem {
    return this.control;
  }
  getDescription(): string {
    return `Moto Autônoma com ${this.propulsion.describe()} e ${this.control.describe()}`;
  }
}

class Spaceship implements Vehicle {
  private propulsion: PropulsionSystem;
  private control: ControlSystem;

  constructor(propulsion: PropulsionSystem, control: ControlSystem) {
    this.propulsion = propulsion;
    this.control = control;
  }

  getPropulsion(): PropulsionSystem {
    return this.propulsion;
  }
  getControlSystem(): ControlSystem {
    return this.control;
  }
  getDescription(): string {
    return `Nave Espacial com ${this.propulsion.describe()} e ${this.control.describe()}`;
  }
}

class RoboticExplorer implements Vehicle {
  private propulsion: PropulsionSystem;
  private control: ControlSystem;

  constructor(propulsion: PropulsionSystem, control: ControlSystem) {
    this.propulsion = propulsion;
    this.control = control;
  }

  getPropulsion(): PropulsionSystem {
    return this.propulsion;
  }
  getControlSystem(): ControlSystem {
    return this.control;
  }
  getDescription(): string {
    return `Explorador Robótico com ${this.propulsion.describe()} e ${this.control.describe()}`;
  }
}

// Client code
function configureVehicle(
  environment: string,
  vehicleType: string,
  propulsionType: string,
  controlType: string
): Vehicle {
  let factory: VehicleFactory;

  if (environment === "terra") {
    factory = new EarthVehicleFactory();
  } else if (environment === "espaco") {
    factory = new SpaceVehicleFactory();
  } else {
    throw new Error("Ambiente desconhecido");
  }

  const propulsion = factory.createPropulsion(propulsionType);
  const control = factory.createControlSystem(controlType);

  if (vehicleType === "primeiro") {
    return factory.createFirstVehicle(propulsion, control);
  } else {
    return factory.createSecondVehicle(propulsion, control);
  }
}

// Testing
console.log("--- Configurando veículos ---");

const earthCar = configureVehicle("terra", "primeiro", "jet", "ai");
console.log(earthCar.getDescription());

const earthMotorcycle = configureVehicle(
  "terra",
  "segundo",
  "electric",
  "hybrid"
);
console.log(earthMotorcycle.getDescription());

const spaceship = configureVehicle("espaco", "primeiro", "plasma", "quantum");
console.log(spaceship.getDescription());

const explorer = configureVehicle("espaco", "segundo", "ion", "remote");
console.log(explorer.getDescription());
