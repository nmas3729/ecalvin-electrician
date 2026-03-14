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
    <section className={cn("py-16 bg-gray-50", className)}>
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Images */}
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}

          {/* Videos */}
          {showVideos &&
            GALLERY_VIDEOS.map((video) => (
              <div key={video.src} className="rounded-lg overflow-hidden">
                <video
                  src={video.src}
                  controls
                  className="w-full aspect-video bg-black"
                  preload="metadata"
                >
                  <track kind="captions" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
}
