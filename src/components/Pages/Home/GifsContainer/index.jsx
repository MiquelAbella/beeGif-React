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
      ) : gifs?.length ? (
        gifs.map(({ title, url, _id, tag }) => (
          <GifCard title={title} img={url} gifId={_id} key={_id} tag={tag} />
        ))
      ) : (
        <div className="absolute top-0 bottom-0 right-0 left-0 m-auto w-1/2 h-1/2 flex items-center justify-center flex-col">
          <img src="https://media2.giphy.com/media/X0QKGRNCxnwWs/giphy.gif?cid=6c09b9526tl5kbr9f8zo3iwayilkt8gb2p0mf7ka4jwvx20v&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
          <p className="text-white ">
            There is no gif matching this query search
          </p>
        </div>
      )}
    </div>
  );
};
