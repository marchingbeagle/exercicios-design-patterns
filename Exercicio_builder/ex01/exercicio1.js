var BreadType;
(function (BreadType) {
    BreadType["BRIOCHE"] = "Brioche";
    BreadType["TRADICIONAL"] = "Tradicional";
    BreadType["INTEGRAL"] = "Integral";
    BreadType["AUSTRALIANO"] = "Australiano";
})(BreadType || (BreadType = {}));
var ProteinType;
(function (ProteinType) {
    ProteinType["CARNE"] = "Carne";
    ProteinType["FRANGO"] = "Frango";
    ProteinType["VEGETARIANO"] = "Vegetariano";
})(ProteinType || (ProteinType = {}));
var BurgerOrder = /** @class */ (function () {
    function BurgerOrder(breadType, proteinType, hasCheese, hasLettuce, hasTomato, hasOnion, hasSpecialSauce, drink) {
        if (hasCheese === void 0) { hasCheese = false; }
        if (hasLettuce === void 0) { hasLettuce = false; }
        if (hasTomato === void 0) { hasTomato = false; }
        if (hasOnion === void 0) { hasOnion = false; }
        if (hasSpecialSauce === void 0) { hasSpecialSauce = false; }
        if (drink === void 0) { drink = null; }
        this.breadType = breadType;
        this.proteinType = proteinType;
        this.hasCheese = hasCheese;
        this.hasLettuce = hasLettuce;
        this.hasTomato = hasTomato;
        this.hasOnion = hasOnion;
        this.hasSpecialSauce = hasSpecialSauce;
        this.drink = drink;
    }
    BurgerOrder.prototype.describe = function () {
        var description = "Hamb\u00FArguer com p\u00E3o ".concat(this.breadType, " e prote\u00EDna ").concat(this.proteinType);
        var ingredients = [];
        if (this.hasCheese)
            ingredients.push("queijo");
        if (this.hasLettuce)
            ingredients.push("alface");
        if (this.hasTomato)
            ingredients.push("tomate");
        if (this.hasOnion)
            ingredients.push("cebola");
        if (this.hasSpecialSauce)
            ingredients.push("molho especial");
        if (ingredients.length > 0) {
            description += " com ".concat(ingredients.join(", "));
        }
        if (this.drink) {
            description += " acompanhado de ".concat(this.drink);
        }
        return description;
    };
    return BurgerOrder;
}());
var BurgerOrderBuilder = /** @class */ (function () {
    function BurgerOrderBuilder() {
        this.hasCheese = false;
        this.hasLettuce = false;
        this.hasTomato = false;
        this.hasOnion = false;
        this.hasSpecialSauce = false;
        this.drink = null;
    }
    BurgerOrderBuilder.prototype.setBread = function (breadType) {
        this.breadType = breadType;
        return this;
    };
    BurgerOrderBuilder.prototype.setProtein = function (proteinType) {
        this.proteinType = proteinType;
        return this;
    };
    BurgerOrderBuilder.prototype.addCheese = function () {
        this.hasCheese = true;
        return this;
    };
    BurgerOrderBuilder.prototype.addLettuce = function () {
        this.hasLettuce = true;
        return this;
    };
    BurgerOrderBuilder.prototype.addTomato = function () {
        this.hasTomato = true;
        return this;
    };
    BurgerOrderBuilder.prototype.addOnion = function () {
        this.hasOnion = true;
        return this;
    };
    BurgerOrderBuilder.prototype.addSpecialSauce = function () {
        this.hasSpecialSauce = true;
        return this;
    };
    BurgerOrderBuilder.prototype.withDrink = function (drink) {
        this.drink = drink;
        return this;
    };
    BurgerOrderBuilder.prototype.build = function () {
        if (!this.breadType || !this.proteinType) {
            throw new Error("Todo pedido deve conter um tipo de pão e uma proteína!");
        }
        return new BurgerOrder(this.breadType, this.proteinType, this.hasCheese, this.hasLettuce, this.hasTomato, this.hasOnion, this.hasSpecialSauce, this.drink);
    };
    return BurgerOrderBuilder;
}());
function demoBurgerBuilder() {
    var completeOrder = new BurgerOrderBuilder()
        .setBread(BreadType.BRIOCHE)
        .setProtein(ProteinType.CARNE)
        .addCheese()
        .addLettuce()
        .addTomato()
        .addSpecialSauce()
        .withDrink("Coca-Cola")
        .build();
    console.log(completeOrder.describe());
    var vegetarianOrder = new BurgerOrderBuilder()
        .setBread(BreadType.INTEGRAL)
        .setProtein(ProteinType.VEGETARIANO)
        .addLettuce()
        .addTomato()
        .build();
    console.log(vegetarianOrder.describe());
}
demoBurgerBuilder();
