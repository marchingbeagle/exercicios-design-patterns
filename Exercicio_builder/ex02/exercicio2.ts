enum RoomType {
  STANDARD = "Standard",
  LUXO = "Luxo",
  PRESIDENCIAL = "Presidencial",
}

class HotelReservation {
  constructor(
    private roomType: RoomType,
    private numberOfNights: number,
    private includesBreakfast: boolean = false,
    private hasOceanView: boolean = false,
    private hasPremiumWifi: boolean = false,
    private hasLateCheckout: boolean = false,
    private guestName: string,
    private checkInDate: Date
  ) {}

  public calculatePrice(): number {
    let basePrice = 0;
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

    let totalPrice = basePrice * this.numberOfNights;

    if (this.includesBreakfast) totalPrice += 30 * this.numberOfNights;
    if (this.hasOceanView) totalPrice += 50 * this.numberOfNights;
    if (this.hasPremiumWifi) totalPrice += 15 * this.numberOfNights;
    if (this.hasLateCheckout) totalPrice += 40;

    return totalPrice;
  }

  public describe(): string {
    let description = `Reserva para ${this.guestName}: Quarto ${this.roomType} por ${this.numberOfNights} noites`;
    description += ` (Check-in: ${this.checkInDate.toLocaleDateString()})`;

    const amenities: string[] = [];
    if (this.includesBreakfast) amenities.push("café da manhã");
    if (this.hasOceanView) amenities.push("vista para o mar");
    if (this.hasPremiumWifi) amenities.push("wifi premium");
    if (this.hasLateCheckout) amenities.push("late checkout");

    if (amenities.length > 0) {
      description += `\nComodidades adicionais: ${amenities.join(", ")}`;
    }

    description += `\nPreço total: R$ ${this.calculatePrice().toFixed(2)}`;

    return description;
  }
}

class HotelReservationBuilder {
  private roomType!: RoomType;
  private numberOfNights!: number;
  private includesBreakfast: boolean = false;
  private hasOceanView: boolean = false;
  private hasPremiumWifi: boolean = false;
  private hasLateCheckout: boolean = false;
  private guestName!: string;
  private checkInDate!: Date;

  public setRoomType(roomType: RoomType): HotelReservationBuilder {
    this.roomType = roomType;
    return this;
  }

  public setNumberOfNights(nights: number): HotelReservationBuilder {
    if (nights <= 0) {
      throw new Error("O número de noites deve ser maior que zero");
    }
    this.numberOfNights = nights;
    return this;
  }

  public withBreakfast(): HotelReservationBuilder {
    this.includesBreakfast = true;
    return this;
  }

  public withOceanView(): HotelReservationBuilder {
    this.hasOceanView = true;
    return this;
  }

  public withPremiumWifi(): HotelReservationBuilder {
    this.hasPremiumWifi = true;
    return this;
  }

  public withLateCheckout(): HotelReservationBuilder {
    this.hasLateCheckout = true;
    return this;
  }

  public forGuest(name: string): HotelReservationBuilder {
    this.guestName = name;
    return this;
  }

  public withCheckInDate(date: Date): HotelReservationBuilder {
    this.checkInDate = date;
    return this;
  }

  public standardPackage(
    guestName: string,
    checkInDate: Date,
    nights: number
  ): HotelReservationBuilder {
    this.roomType = RoomType.STANDARD;
    this.numberOfNights = nights;
    this.guestName = guestName;
    this.checkInDate = checkInDate;
    this.includesBreakfast = true;
    return this;
  }

  public deluxePackage(
    guestName: string,
    checkInDate: Date,
    nights: number
  ): HotelReservationBuilder {
    this.roomType = RoomType.LUXO;
    this.numberOfNights = nights;
    this.guestName = guestName;
    this.checkInDate = checkInDate;
    this.includesBreakfast = true;
    this.hasOceanView = true;
    this.hasPremiumWifi = true;
    return this;
  }

  public premiumPackage(
    guestName: string,
    checkInDate: Date,
    nights: number
  ): HotelReservationBuilder {
    this.roomType = RoomType.PRESIDENCIAL;
    this.numberOfNights = nights;
    this.guestName = guestName;
    this.checkInDate = checkInDate;
    this.includesBreakfast = true;
    this.hasOceanView = true;
    this.hasPremiumWifi = true;
    this.hasLateCheckout = true;
    return this;
  }

  public build(): HotelReservation {
    if (
      !this.roomType ||
      !this.numberOfNights ||
      !this.guestName ||
      !this.checkInDate
    ) {
      throw new Error(
        "Toda reserva deve incluir tipo de quarto, número de noites, nome do hóspede e data de check-in!"
      );
    }

    return new HotelReservation(
      this.roomType,
      this.numberOfNights,
      this.includesBreakfast,
      this.hasOceanView,
      this.hasPremiumWifi,
      this.hasLateCheckout,
      this.guestName,
      this.checkInDate
    );
  }
}

function demoHotelReservationBuilder() {
  const customReservation = new HotelReservationBuilder()
    .setRoomType(RoomType.LUXO)
    .setNumberOfNights(3)
    .withBreakfast()
    .withOceanView()
    .forGuest("Maria Silva")
    .withCheckInDate(new Date("2023-12-25"))
    .build();

  console.log(customReservation.describe());
  console.log("-----------------------");

  const standardPackage = new HotelReservationBuilder()
    .standardPackage("João Santos", new Date("2023-12-15"), 2)
    .build();

  console.log(standardPackage.describe());
  console.log("-----------------------");

  const premiumPackage = new HotelReservationBuilder()
    .premiumPackage("Carlos Oliveira", new Date("2023-12-31"), 5)
    .build();

  console.log(premiumPackage.describe());
}

demoHotelReservationBuilder();
