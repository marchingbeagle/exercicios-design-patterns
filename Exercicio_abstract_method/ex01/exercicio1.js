// Concrete Products
var PlasticCar = /** @class */ (function () {
    function PlasticCar() {
    }
    PlasticCar.prototype.play = function () {
        console.log("Brincando com um carrinho de plástico. Ele é leve e colorido!");
    };
    return PlasticCar;
}());
var PlasticDoll = /** @class */ (function () {
    function PlasticDoll() {
    }
    PlasticDoll.prototype.play = function () {
        console.log("Brincando com uma boneca de plástico. Ela tem cabelos coloridos!");
    };
    return PlasticDoll;
}());
var WoodenCar = /** @class */ (function () {
    function WoodenCar() {
    }
    WoodenCar.prototype.play = function () {
        console.log("Brincando com um carrinho de madeira. Ele é resistente e natural!");
    };
    return WoodenCar;
}());
var WoodenDoll = /** @class */ (function () {
    function WoodenDoll() {
    }
    WoodenDoll.prototype.play = function () {
        console.log("Brincando com uma boneca de madeira. Ela é artesanal!");
    };
    return WoodenDoll;
}());
// Concrete Factories
var PlasticToyFactory = /** @class */ (function () {
    function PlasticToyFactory() {
    }
    PlasticToyFactory.prototype.createCar = function () {
        return new PlasticCar();
    };
    PlasticToyFactory.prototype.createDoll = function () {
        return new PlasticDoll();
    };
    return PlasticToyFactory;
}());
var WoodenToyFactory = /** @class */ (function () {
    function WoodenToyFactory() {
    }
    WoodenToyFactory.prototype.createCar = function () {
        return new WoodenCar();
    };
    WoodenToyFactory.prototype.createDoll = function () {
        return new WoodenDoll();
    };
    return WoodenToyFactory;
}());
// Client code
function testToyFactory(factory) {
    console.log("Testando fábrica de brinquedos:");
    var car = factory.createCar();
    var doll = factory.createDoll();
    car.play();
    doll.play();
    console.log("-------------------");
}
// Testing
var plasticFactory = new PlasticToyFactory();
var woodenFactory = new WoodenToyFactory();
testToyFactory(plasticFactory);
testToyFactory(woodenFactory);
