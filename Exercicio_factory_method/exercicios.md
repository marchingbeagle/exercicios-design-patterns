# exercicio 1

Sistema de Notificações
Como um administrador de um sistema de mensagens,
eu quero enviar notificações para os usuários,
para que eles possam receber alertas via e-mail ou SMS.
Requisitos:
● Deve haver uma classe Notification com um método send(message: string): void.
● Deve ser possível criar notificações do tipo EmailNotification e SMSNotification.
● Utilize Factory Method para instanciar o tipo correto de notificação.

# exercicio 2

Plataforma de Pagamentos
Como um cliente de uma plataforma de e-commerce,
eu quero poder pagar minhas compras com diferentes métodos de pagamento,
para que eu possa escolher entre cartão de crédito, PayPal ou boleto bancário.
Requisitos:
● Deve haver uma interface Payment com um método processPayment(amount: number):
void.
● As implementações devem incluir CreditCardPayment, PayPalPayment e BoletoPayment.
● O sistema deve utilizar o Factory Method para criar a instância correta do método de
pagamento.

# exercicio 3

Plataforma de Streaming
Como um desenvolvedor de uma plataforma de streaming,
eu quero que o sistema suporte diferentes tipos de mídia (áudio, vídeo e podcast),
para que os usuários possam consumir conteúdos de diferentes formatos de forma
padronizada.
Requisitos:
● Deve haver uma interface Media com métodos play(): void e stop(): void.
● As implementações devem incluir AudioMedia, VideoMedia e PodcastMedia.
● O sistema deve utilizar Factory Method para criar dinamicamente a mídia correta com
base no tipo recebido.
● Deve haver um tratamento de erro caso o tipo seja inválido.
