import Image from "next/image";
import { cn } from "@/lib/utils";
import { GALLERY_IMAGES, GALLERY_VIDEOS } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

interface GallerySectionProps {
  title?: string;
  subtitle?: string;
  showVideos?: boolean;
  className?: string;
}

export default function GallerySection({
  title = "Our Work",
  subtitle = "View our recent electrical and solar installation projects",
  showVideos = true,
  className,
}: GallerySectionProps) {
  return (
    <section className={cn("py-16 bg-muted/50", className)}>
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-muted shadow-md"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay with alt text */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Videos Grid - 16:9 aspect ratio */}
        {showVideos && GALLERY_VIDEOS.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GALLERY_VIDEOS.map((video) => (
              <div
                key={video.src}
                className="rounded-xl overflow-hidden shadow-md bg-black"
              >
                <video
                  src={video.src}
                  controls
                  className="w-full aspect-video"
                  preload="metadata"
                  playsInline
                >
                  <track kind="captions" label="English" />
                  Your browser does not support the video tag.
                </video>
                <div className="bg-foreground/95 px-4 py-3">
                  <p className="text-background text-sm font-medium">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
