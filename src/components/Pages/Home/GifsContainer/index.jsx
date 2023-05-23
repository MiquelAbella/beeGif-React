import { GifCard } from "../../../GifCard";
import { useGifs } from "../../../../Context/GifsContext/GifsContext";
import { Loader } from "../../../Loader";

export const GifsContainer = () => {
  const { gifs, isLoading } = useGifs();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 w-full h-full gap-4">
      {isLoading ? (
        <div className="fixed top-0 bottom-0 right-0 left-0 m-auto">
          <Loader />
        </div>
      ) : gifs.length ? (
        gifs.map(({ title, url, _id, tag }) => (
          <GifCard title={title} img={url} gifId={_id} key={_id} tag={tag} />
        ))
      ) : null}
    </div>
  );
};
