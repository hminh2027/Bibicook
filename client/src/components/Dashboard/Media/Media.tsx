import useMedia from "../../../hooks/useMedia";
import MediaItem from "./MediaItem";

export const Media = () => {
  const { data: medias }: any = useMedia();
  console.log(medias);
  return (
    <div className="flex gap-2">
      {medias?.map((media) => (
        <MediaItem key={media?.url} media={media} />
      ))}
    </div>
  );
};

export default Media;
