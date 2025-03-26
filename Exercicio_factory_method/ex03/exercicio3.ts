interface Media {
  play(): void;
  stop(): void;
}

class AudioMedia implements Media {
  constructor(private title: string) {}

  play(): void {
    console.log(`Reproduzindo áudio: ${this.title}`);
  }

  stop(): void {
    console.log(`Parando reprodução do áudio: ${this.title}`);
  }
}

class VideoMedia implements Media {
  constructor(private title: string) {}

  play(): void {
    console.log(`Reproduzindo vídeo: ${this.title}`);
  }

  stop(): void {
    console.log(`Parando reprodução do vídeo: ${this.title}`);
  }
}

class PodcastMedia implements Media {
  constructor(private title: string, private episode: number) {}

  play(): void {
    console.log(
      `Reproduzindo podcast: ${this.title} - Episódio ${this.episode}`
    );
  }

  stop(): void {
    console.log(
      `Parando reprodução do podcast: ${this.title} - Episódio ${this.episode}`
    );
  }
}

enum MediaType {
  AUDIO = "audio",
  VIDEO = "video",
  PODCAST = "podcast",
}

class MediaFactory {
  createMedia(type: MediaType, title: string, episode?: number): Media {
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
        throw new Error(`Tipo de mídia não suportado: ${type}`);
    }
  }
}

function main() {
  const factory = new MediaFactory();

  try {
    const music = factory.createMedia(MediaType.AUDIO, "Bohemian Rhapsody");
    music.play();
    music.stop();

    const movie = factory.createMedia(MediaType.VIDEO, "Inception");
    movie.play();
    music.stop();

    const podcast = factory.createMedia(MediaType.PODCAST, "Tech Talk", 42);
    podcast.play();
    podcast.stop();

    const invalidMedia = factory.createMedia(
      "live" as MediaType,
      "Live Stream"
    );
  } catch (error) {
    console.error(`Erro: ${error.message}`);
  }
}

main();
