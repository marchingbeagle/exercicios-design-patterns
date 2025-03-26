var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CustomNotification = /** @class */ (function () {
    function CustomNotification() {
    }
    return CustomNotification;
}());
var EmailNotification = /** @class */ (function (_super) {
    __extends(EmailNotification, _super);
    function EmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailNotification.prototype.send = function (message) {
        console.log("Enviando e-mail com a mensagem: ".concat(message));
    };
    return EmailNotification;
}(CustomNotification));
var SMSNotification = /** @class */ (function (_super) {
    __extends(SMSNotification, _super);
    function SMSNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSNotification.prototype.send = function (message) {
        console.log("Enviando SMS com a mensagem: ".concat(message));
    };
    return SMSNotification;
}(CustomNotification));
var NotificationType;
(function (NotificationType) {
    NotificationType["EMAIL"] = "email";
    NotificationType["SMS"] = "sms";
})(NotificationType || (NotificationType = {}));
var NotificationFactory = /** @class */ (function () {
    function NotificationFactory() {
    }
    NotificationFactory.prototype.createNotification = function (type) {
        switch (type) {
            case NotificationType.EMAIL:
                return new EmailNotification();
            case NotificationType.SMS:
                return new SMSNotification();
            default:
                throw new Error("Tipo de notifica\u00E7\u00E3o n\u00E3o suportado: ".concat(type));
        }
    };
    return NotificationFactory;
}());
function runNotificationDemo() {
    var factory = new NotificationFactory();
    var emailNotification = factory.createNotification(NotificationType.EMAIL);
    emailNotification.send("Seu pedido foi confirmado!");
    var smsNotification = factory.createNotification(NotificationType.SMS);
    smsNotification.send("Seu código de verificação é 123456");
}
runNotificationDemo();
