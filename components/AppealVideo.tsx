type AppealVideoProps = {
  videoId: string;
  title: string;
};

export default function AppealVideo({ videoId, title }: AppealVideoProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#f5efe6] border border-gray-200">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        sandbox="allow-scripts allow-same-origin allow-presentation"
        allowFullScreen
      />
    </div>
  );
}
