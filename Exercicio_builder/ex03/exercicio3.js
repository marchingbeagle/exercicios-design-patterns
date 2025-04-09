var EngineType;
(function (EngineType) {
    EngineType["GASOLINA"] = "Gasolina";
    EngineType["ELETRICO"] = "El\u00E9trico";
    EngineType["HIBRIDO"] = "H\u00EDbrido";
})(EngineType || (EngineType = {}));
var TransmissionType;
(function (TransmissionType) {
    TransmissionType["MANUAL"] = "Manual";
    TransmissionType["AUTOMATICO"] = "Autom\u00E1tico";
})(TransmissionType || (TransmissionType = {}));
var Car = /** @class */ (function () {
    function Car(model, engineType, color, transmission, hasSunroof, hasPremiumSound, hasLeatherSeats) {
        if (color === void 0) { color = null; }
        if (transmission === void 0) { transmission = null; }
        if (hasSunroof === void 0) { hasSunroof = false; }
        if (hasPremiumSound === void 0) { hasPremiumSound = false; }
        if (hasLeatherSeats === void 0) { hasLeatherSeats = false; }
        this.model = model;
        this.engineType = engineType;
        this.color = color;
        this.transmission = transmission;
        this.hasSunroof = hasSunroof;
        this.hasPremiumSound = hasPremiumSound;
        this.hasLeatherSeats = hasLeatherSeats;
    }
    Car.prototype.describe = function () {
        var description = "Carro modelo ".concat(this.model, " com motor ").concat(this.engineType);
        var options = [];
        if (this.color)
            options.push("cor ".concat(this.color));
        if (this.transmission)
            options.push("c\u00E2mbio ".concat(this.transmission));
        if (this.hasSunroof)
            options.push("teto solar");
        if (this.hasPremiumSound)
            options.push("som premium");
        if (this.hasLeatherSeats)
            options.push("bancos de couro");
        if (options.length > 0) {
            description += " equipado com ".concat(options.join(", "));
        }
        return description;
    };
    return Car;
}());
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this.model = null;
        this.engineType = null;
        this.color = null;
        this.transmission = null;
        this.hasSunroof = false;
        this.hasPremiumSound = false;
        this.hasLeatherSeats = false;
    }
    CarBuilder.prototype.setModel = function (model) {
        this.model = model;
        return this;
    };
    CarBuilder.prototype.setEngineType = function (engineType) {
        this.engineType = engineType;
        return this;
    };
    CarBuilder.prototype.setColor = function (color) {
        this.color = color;
        return this;
    };
    CarBuilder.prototype.setTransmission = function (transmission) {
        this.transmission = transmission;
        return this;
    };
    CarBuilder.prototype.addSunroof = function () {
        this.hasSunroof = true;
        return this;
    };
    CarBuilder.prototype.addPremiumSound = function () {
        this.hasPremiumSound = true;
        return this;
    };
    CarBuilder.prototype.addLeatherSeats = function () {
        this.hasLeatherSeats = true;
        return this;
    };
    CarBuilder.prototype.countOptions = function () {
        var count = 0;
        if (this.color)
            count++;
        if (this.transmission)
            count++;
        if (this.hasSunroof)
            count++;
        if (this.hasPremiumSound)
            count++;
        if (this.hasLeatherSeats)
            count++;
        return count;
    };
    CarBuilder.prototype.validateRequiredFields = function () {
        if (!this.model) {
            throw new Error("O modelo do carro é obrigatório");
        }
        if (!this.engineType) {
            throw new Error("O tipo de motor é obrigatório");
        }
        if (this.countOptions() < 2) {
            throw new Error("O carro deve ter pelo menos dois opcionais selecionados");
        }
    };
    CarBuilder.prototype.build = function () {
        this.validateRequiredFields();
        return new Car(this.model, this.engineType, this.color, this.transmission, this.hasSunroof, this.hasPremiumSound, this.hasLeatherSeats);
    };
    return CarBuilder;
}());
var CarDirector = /** @class */ (function () {
    function CarDirector(builder) {
        this.builder = builder;
    }
    CarDirector.prototype.constructSportsCar = function () {
        return this.builder
            .setModel("SportX")
            .setEngineType(EngineType.GASOLINA)
            .setColor("Vermelho")
            .setTransmission(TransmissionType.AUTOMATICO)
            .addSunroof()
            .addPremiumSound()
            .addLeatherSeats()
            .build();
    };
    CarDirector.prototype.constructEcoCar = function () {
        return this.builder
            .setModel("EcoFriendly")
            .setEngineType(EngineType.HIBRIDO)
            .setColor("Verde")
            .setTransmission(TransmissionType.AUTOMATICO)
            .addPremiumSound()
            .build();
    };
    CarDirector.prototype.constructLuxuryCar = function () {
        return this.builder
            .setModel("LuxuryPlus")
            .setEngineType(EngineType.ELETRICO)
            .setColor("Preto")
            .setTransmission(TransmissionType.AUTOMATICO)
            .addSunroof()
            .addPremiumSound()
            .addLeatherSeats()
            .build();
    };
    return CarDirector;
}());
function demoCarBuilder() {
    try {
        var customCar = new CarBuilder()
            .setModel("Sedan Premium")
            .setEngineType(EngineType.GASOLINA)
            .setColor("Azul")
            .setTransmission(TransmissionType.MANUAL)
            .addLeatherSeats()
            .build();
        console.log(customCar.describe());
    }
    catch (error) {
        console.error("Erro: ".concat(error.message));
    }
    try {
        var invalidCar = new CarBuilder()
            .setModel("SUV Basic")
            .setEngineType(EngineType.HIBRIDO)
            .setColor("Branco")
            .build();
        console.log(invalidCar.describe());
    }
    catch (error) {
        console.error("Erro: ".concat(error.message));
    }
    var builder = new CarBuilder();
    var director = new CarDirector(builder);
    var sportsCar = director.constructSportsCar();
    console.log(sportsCar.describe());
    var ecoCar = director.constructEcoCar();
    console.log(ecoCar.describe());
    var luxuryCar = director.constructLuxuryCar();
    console.log(luxuryCar.describe());
}
demoCarBuilder();
