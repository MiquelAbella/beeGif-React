import { GifsContainer, TagsContainer } from "../../components/Pages/Home";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#161519] p-6 pt-24">
      <TagsContainer />
      <GifsContainer />
    </div>
  );
};
