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
var Publicacao = /** @class */ (function () {
    function Publicacao(titulo, autor, descricao) {
        this.titulo = titulo;
        this.autor = autor;
        this.descricao = descricao;
    }
    return Publicacao;
}());
var Artigo = /** @class */ (function (_super) {
    __extends(Artigo, _super);
    function Artigo(titulo, autor, descricao, numeroDePalavras) {
        var _this = _super.call(this, titulo, autor, descricao) || this;
        _this.numeroDePalavras = numeroDePalavras;
        return _this;
    }
    Artigo.prototype.exibirResumo = function () {
        return "".concat(this.titulo, " por ").concat(this.autor, " - ").concat(this.numeroDePalavras, " palavras");
    };
    return Artigo;
}(Publicacao));
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video(titulo, autor, descricao, duracao) {
        var _this = _super.call(this, titulo, autor, descricao) || this;
        _this.duracao = duracao;
        return _this;
    }
    Video.prototype.exibirResumo = function () {
        return "".concat(this.titulo, " por ").concat(this.autor, " - ").concat(this.duracao, " minutos");
    };
    return Video;
}(Publicacao));
