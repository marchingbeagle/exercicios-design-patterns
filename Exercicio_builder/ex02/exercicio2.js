var RoomType;
(function (RoomType) {
    RoomType["STANDARD"] = "Standard";
    RoomType["LUXO"] = "Luxo";
    RoomType["PRESIDENCIAL"] = "Presidencial";
})(RoomType || (RoomType = {}));
var HotelReservation = /** @class */ (function () {
    function HotelReservation(roomType, numberOfNights, includesBreakfast, hasOceanView, hasPremiumWifi, hasLateCheckout, guestName, checkInDate) {
        if (includesBreakfast === void 0) { includesBreakfast = false; }
        if (hasOceanView === void 0) { hasOceanView = false; }
        if (hasPremiumWifi === void 0) { hasPremiumWifi = false; }
        if (hasLateCheckout === void 0) { hasLateCheckout = false; }
        this.roomType = roomType;
        this.numberOfNights = numberOfNights;
        this.includesBreakfast = includesBreakfast;
        this.hasOceanView = hasOceanView;
        this.hasPremiumWifi = hasPremiumWifi;
        this.hasLateCheckout = hasLateCheckout;
        this.guestName = guestName;
        this.checkInDate = checkInDate;
    }
    HotelReservation.prototype.calculatePrice = function () {
        var basePrice = 0;
        switch (this.roomType) {
            case RoomType.STANDARD:
                basePrice = 200;
                break;
            case RoomType.LUXO:
                basePrice = 350;
                break;
            case RoomType.PRESIDENCIAL:
                basePrice = 800;
                break;
        }
        var totalPrice = basePrice * this.numberOfNights;
        if (this.includesBreakfast)
            totalPrice += 30 * this.numberOfNights;
        if (this.hasOceanView)
            totalPrice += 50 * this.numberOfNights;
        if (this.hasPremiumWifi)
            totalPrice += 15 * this.numberOfNights;
        if (this.hasLateCheckout)
            totalPrice += 40;
        return totalPrice;
    };
    HotelReservation.prototype.describe = function () {
        var description = "Reserva para ".concat(this.guestName, ": Quarto ").concat(this.roomType, " por ").concat(this.numberOfNights, " noites");
        description += " (Check-in: ".concat(this.checkInDate.toLocaleDateString(), ")");
        var amenities = [];
        if (this.includesBreakfast)
            amenities.push("café da manhã");
        if (this.hasOceanView)
            amenities.push("vista para o mar");
        if (this.hasPremiumWifi)
            amenities.push("wifi premium");
        if (this.hasLateCheckout)
            amenities.push("late checkout");
        if (amenities.length > 0) {
            description += "\nComodidades adicionais: ".concat(amenities.join(", "));
        }
        description += "\nPre\u00E7o total: R$ ".concat(this.calculatePrice().toFixed(2));
        return description;
    };
    return HotelReservation;
}());
var HotelReservationBuilder = /** @class */ (function () {
    function HotelReservationBuilder() {
        this.includesBreakfast = false;
        this.hasOceanView = false;
        this.hasPremiumWifi = false;
        this.hasLateCheckout = false;
    }
    HotelReservationBuilder.prototype.setRoomType = function (roomType) {
        this.roomType = roomType;
        return this;
    };
    HotelReservationBuilder.prototype.setNumberOfNights = function (nights) {
        if (nights <= 0) {
            throw new Error("O número de noites deve ser maior que zero");
        }
        this.numberOfNights = nights;
        return this;
    };
    HotelReservationBuilder.prototype.withBreakfast = function () {
        this.includesBreakfast = true;
        return this;
    };
    HotelReservationBuilder.prototype.withOceanView = function () {
        this.hasOceanView = true;
        return this;
    };
    HotelReservationBuilder.prototype.withPremiumWifi = function () {
        this.hasPremiumWifi = true;
        return this;
    };
    HotelReservationBuilder.prototype.withLateCheckout = function () {
        this.hasLateCheckout = true;
        return this;
    };
    HotelReservationBuilder.prototype.forGuest = function (name) {
        this.guestName = name;
        return this;
    };
    HotelReservationBuilder.prototype.withCheckInDate = function (date) {
        this.checkInDate = date;
        return this;
    };
    HotelReservationBuilder.prototype.standardPackage = function (guestName, checkInDate, nights) {
        this.roomType = RoomType.STANDARD;
        this.numberOfNights = nights;
        this.guestName = guestName;
        this.checkInDate = checkInDate;
        this.includesBreakfast = true;
        return this;
    };
    HotelReservationBuilder.prototype.deluxePackage = function (guestName, checkInDate, nights) {
        this.roomType = RoomType.LUXO;
        this.numberOfNights = nights;
        this.guestName = guestName;
        this.checkInDate = checkInDate;
        this.includesBreakfast = true;
        this.hasOceanView = true;
        this.hasPremiumWifi = true;
        return this;
    };
    HotelReservationBuilder.prototype.premiumPackage = function (guestName, checkInDate, nights) {
        this.roomType = RoomType.PRESIDENCIAL;
        this.numberOfNights = nights;
        this.guestName = guestName;
        this.checkInDate = checkInDate;
        this.includesBreakfast = true;
        this.hasOceanView = true;
        this.hasPremiumWifi = true;
        this.hasLateCheckout = true;
        return this;
    };
    HotelReservationBuilder.prototype.build = function () {
        if (!this.roomType ||
            !this.numberOfNights ||
            !this.guestName ||
            !this.checkInDate) {
            throw new Error("Toda reserva deve incluir tipo de quarto, número de noites, nome do hóspede e data de check-in!");
        }
        return new HotelReservation(this.roomType, this.numberOfNights, this.includesBreakfast, this.hasOceanView, this.hasPremiumWifi, this.hasLateCheckout, this.guestName, this.checkInDate);
    };
    return HotelReservationBuilder;
}());
function demoHotelReservationBuilder() {
    var customReservation = new HotelReservationBuilder()
        .setRoomType(RoomType.LUXO)
        .setNumberOfNights(3)
        .withBreakfast()
        .withOceanView()
        .forGuest("Maria Silva")
        .withCheckInDate(new Date("2023-12-25"))
        .build();
    console.log(customReservation.describe());
    console.log("-----------------------");
    var standardPackage = new HotelReservationBuilder()
        .standardPackage("João Santos", new Date("2023-12-15"), 2)
        .build();
    console.log(standardPackage.describe());
    console.log("-----------------------");
    var premiumPackage = new HotelReservationBuilder()
        .premiumPackage("Carlos Oliveira", new Date("2023-12-31"), 5)
        .build();
    console.log(premiumPackage.describe());
}
demoHotelReservationBuilder();
