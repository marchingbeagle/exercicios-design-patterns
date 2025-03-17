abstract class Publicacao {
  constructor(
    protected titulo: string,
    protected autor: string,
    protected descricao: string
  ) {}

  abstract exibirResumo(): string;
}

class Artigo extends Publicacao {
  constructor(
    titulo: string,
    autor: string,
    descricao: string,
    private numeroDePalavras: number
  ) {
    super(titulo, autor, descricao);
  }

  exibirResumo(): string {
    return `${this.titulo} por ${this.autor} - ${this.numeroDePalavras} palavras`;
  }
}

class Video extends Publicacao {
  constructor(
    titulo: string,
    autor: string,
    descricao: string,
    private duracao: number
  ) {
    super(titulo, autor, descricao);
  }

  exibirResumo(): string {
    return `${this.titulo} por ${this.autor} - ${this.duracao} minutos`;
  }
}
