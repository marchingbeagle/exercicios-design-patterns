var AudioMedia = /** @class */ (function () {
    function AudioMedia(title) {
        this.title = title;
    }
    AudioMedia.prototype.play = function () {
        console.log("Reproduzindo \u00E1udio: ".concat(this.title));
    };
    AudioMedia.prototype.stop = function () {
        console.log("Parando reprodu\u00E7\u00E3o do \u00E1udio: ".concat(this.title));
    };
    return AudioMedia;
}());
var VideoMedia = /** @class */ (function () {
    function VideoMedia(title) {
        this.title = title;
    }
    VideoMedia.prototype.play = function () {
        console.log("Reproduzindo v\u00EDdeo: ".concat(this.title));
    };
    VideoMedia.prototype.stop = function () {
        console.log("Parando reprodu\u00E7\u00E3o do v\u00EDdeo: ".concat(this.title));
    };
    return VideoMedia;
}());
var PodcastMedia = /** @class */ (function () {
    function PodcastMedia(title, episode) {
        this.title = title;
        this.episode = episode;
    }
    PodcastMedia.prototype.play = function () {
        console.log("Reproduzindo podcast: ".concat(this.title, " - Epis\u00F3dio ").concat(this.episode));
    };
    PodcastMedia.prototype.stop = function () {
        console.log("Parando reprodu\u00E7\u00E3o do podcast: ".concat(this.title, " - Epis\u00F3dio ").concat(this.episode));
    };
    return PodcastMedia;
}());
var MediaType;
(function (MediaType) {
    MediaType["AUDIO"] = "audio";
    MediaType["VIDEO"] = "video";
    MediaType["PODCAST"] = "podcast";
})(MediaType || (MediaType = {}));
var MediaFactory = /** @class */ (function () {
    function MediaFactory() {
    }
    MediaFactory.prototype.createMedia = function (type, title, episode) {
        switch (type) {
            case MediaType.AUDIO:
                return new AudioMedia(title);
            case MediaType.VIDEO:
                return new VideoMedia(title);
            case MediaType.PODCAST:
                if (episode === undefined) {
                    throw new Error("Episódio deve ser fornecido para podcasts");
                }
                return new PodcastMedia(title, episode);
            default:
                throw new Error("Tipo de m\u00EDdia n\u00E3o suportado: ".concat(type));
        }
    };
    return MediaFactory;
}());
function main() {
    var factory = new MediaFactory();
    try {
        var music = factory.createMedia(MediaType.AUDIO, "Bohemian Rhapsody");
        music.play();
        music.stop();
        var movie = factory.createMedia(MediaType.VIDEO, "Inception");
        movie.play();
        music.stop();
        var podcast = factory.createMedia(MediaType.PODCAST, "Tech Talk", 42);
        podcast.play();
        podcast.stop();
        var invalidMedia = factory.createMedia("live", "Live Stream");
    }
    catch (error) {
        console.error("Erro: ".concat(error.message));
    }
}
main();
