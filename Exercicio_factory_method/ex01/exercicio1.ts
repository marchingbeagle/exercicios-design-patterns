abstract class CustomNotification {
  abstract send(message: string): void;
}

class EmailNotification extends CustomNotification {
  send(message: string): void {
    console.log(`Enviando e-mail com a mensagem: ${message}`);
  }
}

class SMSNotification extends CustomNotification {
  send(message: string): void {
    console.log(`Enviando SMS com a mensagem: ${message}`);
  }
}

enum NotificationType {
  EMAIL = "email",
  SMS = "sms",
}

class NotificationFactory {
  createNotification(type: NotificationType): CustomNotification {
    switch (type) {
      case NotificationType.EMAIL:
        return new EmailNotification();
      case NotificationType.SMS:
        return new SMSNotification();
      default:
        throw new Error(`Tipo de notificação não suportado: ${type}`);
    }
  }
}

function runNotificationDemo() {
  const factory = new NotificationFactory();

  const emailNotification = factory.createNotification(NotificationType.EMAIL);
  emailNotification.send("Seu pedido foi confirmado!");

  const smsNotification = factory.createNotification(NotificationType.SMS);
  smsNotification.send("Seu código de verificação é 123456");
}

runNotificationDemo();
