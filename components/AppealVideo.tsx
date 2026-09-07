type AppealVideoProps = {
  videoId: string;
  title: string;
};

export default function AppealVideo({ videoId, title }: AppealVideoProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#f5efe6] border border-gray-200 shadow-sm">
      <iframe
        className="absolute inset-0 w-full h-full border-0"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
