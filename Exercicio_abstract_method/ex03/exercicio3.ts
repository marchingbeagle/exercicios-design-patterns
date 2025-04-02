// Abstract Products
interface PropulsionSystem {
  describe(): string;
}

interface ControlSystem {
  describe(): string;
}

interface Vehicle {
  getPropulsion(): PropulsionSystem;
  getControlSystem(): ControlSystem;
  getDescription(): string;
}

// Concrete Products - Earth Propulsion
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

// Concrete Products - Space Propulsion
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

// Concrete Products - Earth Control Systems
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

// Concrete Products - Space Control Systems
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

// Concrete Vehicles - Earth
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

// Concrete Vehicles - Space
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
