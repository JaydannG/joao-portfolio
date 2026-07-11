import VimeoEmbed from "@/components/media/VimeoEmbed";

type DemoReelProps = {
  vimeoUrl: string;
  title: string;
};

export default function DemoReel({ vimeoUrl, title }: DemoReelProps) {
  return (
    <div className="border border-border-subtle bg-background-elevated p-2 sm:p-3">
      <VimeoEmbed vimeoUrl={vimeoUrl} title={title} lazy={false} />
    </div>
  );
}
