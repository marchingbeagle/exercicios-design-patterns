// Concrete Products - Earth Propulsion
var JetEngine = /** @class */ (function () {
    function JetEngine() {
    }
    JetEngine.prototype.describe = function () {
        return "Motor a jato avançado";
    };
    return JetEngine;
}());
var ElectricMotor = /** @class */ (function () {
    function ElectricMotor() {
    }
    ElectricMotor.prototype.describe = function () {
        return "Motor elétrico de alta eficiência";
    };
    return ElectricMotor;
}());
// Concrete Products - Space Propulsion
var PlasmaDrive = /** @class */ (function () {
    function PlasmaDrive() {
    }
    PlasmaDrive.prototype.describe = function () {
        return "Propulsão de plasma interestelar";
    };
    return PlasmaDrive;
}());
var IonEngine = /** @class */ (function () {
    function IonEngine() {
    }
    IonEngine.prototype.describe = function () {
        return "Motor de íons para viagens espaciais";
    };
    return IonEngine;
}());
// Concrete Products - Earth Control Systems
var AI = /** @class */ (function () {
    function AI() {
    }
    AI.prototype.describe = function () {
        return "Inteligência artificial de última geração";
    };
    return AI;
}());
var HybridControl = /** @class */ (function () {
    function HybridControl() {
    }
    HybridControl.prototype.describe = function () {
        return "Sistema de controle híbrido (manual e automático)";
    };
    return HybridControl;
}());
// Concrete Products - Space Control Systems
var QuantumComputer = /** @class */ (function () {
    function QuantumComputer() {
    }
    QuantumComputer.prototype.describe = function () {
        return "Computador quântico para navegação espacial";
    };
    return QuantumComputer;
}());
var RemoteControl = /** @class */ (function () {
    function RemoteControl() {
    }
    RemoteControl.prototype.describe = function () {
        return "Sistema de controle remoto de longa distância";
    };
    return RemoteControl;
}());
// Concrete Vehicles - Earth
var FlyingCar = /** @class */ (function () {
    function FlyingCar(propulsion, control) {
        this.propulsion = propulsion;
        this.control = control;
    }
    FlyingCar.prototype.getPropulsion = function () {
        return this.propulsion;
    };
    FlyingCar.prototype.getControlSystem = function () {
        return this.control;
    };
    FlyingCar.prototype.getDescription = function () {
        return "Carro Voador com ".concat(this.propulsion.describe(), " e ").concat(this.control.describe());
    };
    return FlyingCar;
}());
var AutonomousMotorcycle = /** @class */ (function () {
    function AutonomousMotorcycle(propulsion, control) {
        this.propulsion = propulsion;
        this.control = control;
    }
    AutonomousMotorcycle.prototype.getPropulsion = function () {
        return this.propulsion;
    };
    AutonomousMotorcycle.prototype.getControlSystem = function () {
        return this.control;
    };
    AutonomousMotorcycle.prototype.getDescription = function () {
        return "Moto Aut\u00F4noma com ".concat(this.propulsion.describe(), " e ").concat(this.control.describe());
    };
    return AutonomousMotorcycle;
}());
// Concrete Vehicles - Space
var Spaceship = /** @class */ (function () {
    function Spaceship(propulsion, control) {
        this.propulsion = propulsion;
        this.control = control;
    }
    Spaceship.prototype.getPropulsion = function () {
        return this.propulsion;
    };
    Spaceship.prototype.getControlSystem = function () {
        return this.control;
    };
    Spaceship.prototype.getDescription = function () {
        return "Nave Espacial com ".concat(this.propulsion.describe(), " e ").concat(this.control.describe());
    };
    return Spaceship;
}());
var RoboticExplorer = /** @class */ (function () {
    function RoboticExplorer(propulsion, control) {
        this.propulsion = propulsion;
        this.control = control;
    }
    RoboticExplorer.prototype.getPropulsion = function () {
        return this.propulsion;
    };
    RoboticExplorer.prototype.getControlSystem = function () {
        return this.control;
    };
    RoboticExplorer.prototype.getDescription = function () {
        return "Explorador Rob\u00F3tico com ".concat(this.propulsion.describe(), " e ").concat(this.control.describe());
    };
    return RoboticExplorer;
}());
