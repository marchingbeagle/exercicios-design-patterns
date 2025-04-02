// Concrete Products - Fire Kingdom
var Dragon = /** @class */ (function () {
    function Dragon() {
    }
    Dragon.prototype.attack = function () {
        console.log("O dragão ataca com uma rajada de fogo devastadora!");
    };
    return Dragon;
}());
var FireSalamander = /** @class */ (function () {
    function FireSalamander() {
    }
    FireSalamander.prototype.attack = function () {
        console.log("A salamandra lança bolas de fogo em todas as direções!");
    };
    return FireSalamander;
}());
// Concrete Products - Water Kingdom
var SeaSerpent = /** @class */ (function () {
    function SeaSerpent() {
    }
    SeaSerpent.prototype.attack = function () {
        console.log("A serpente marinha cria um tsunami poderoso para atacar!");
    };
    return SeaSerpent;
}());
var Triton = /** @class */ (function () {
    function Triton() {
    }
    Triton.prototype.attack = function () {
        console.log("O tritão ataca com seu tridente mágico, controlando as ondas!");
    };
    return Triton;
}());
// Concrete Factories
var FireKingdomFactory = /** @class */ (function () {
    function FireKingdomFactory() {
    }
    FireKingdomFactory.prototype.createFirstCreature = function () {
        return new Dragon();
    };
    FireKingdomFactory.prototype.createSecondCreature = function () {
        return new FireSalamander();
    };
    return FireKingdomFactory;
}());
var WaterKingdomFactory = /** @class */ (function () {
    function WaterKingdomFactory() {
    }
    WaterKingdomFactory.prototype.createFirstCreature = function () {
        return new SeaSerpent();
    };
    WaterKingdomFactory.prototype.createSecondCreature = function () {
        return new Triton();
    };
    return WaterKingdomFactory;
}());
// Client code
function testCreatureFactory(factory, kingdomName) {
    console.log("Criaturas do ".concat(kingdomName, ":"));
    var firstCreature = factory.createFirstCreature();
    var secondCreature = factory.createSecondCreature();
    firstCreature.attack();
    secondCreature.attack();
    console.log("-------------------");
}
// Testing
var fireFactory = new FireKingdomFactory();
var waterFactory = new WaterKingdomFactory();
testCreatureFactory(fireFactory, "Reino do Fogo");
testCreatureFactory(waterFactory, "Reino da Água");
