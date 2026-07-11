import { getVimeoEmbedSrc } from "@/lib/projects";

type VimeoEmbedProps = {
  vimeoUrl: string;
  title: string;
  /** Set to false for embeds that appear above the fold, e.g. the homepage demo reel. */
  lazy?: boolean;
  className?: string;
};

export default function VimeoEmbed({ vimeoUrl, title, lazy = true, className = "" }: VimeoEmbedProps) {
  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-background-elevated ${className}`}>
      <iframe
        src={getVimeoEmbedSrc(vimeoUrl)}
        title={title}
        loading={lazy ? "lazy" : "eager"}
        allow="fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
