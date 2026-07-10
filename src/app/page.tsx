import StoryScroller from "@/components/story/StoryScroller";
import IntroLoader from "@/components/story/IntroLoader";
import IntroSection from "@/components/story/sections/IntroSection";
import TopTechSection from "@/components/story/sections/TopTechSection";
import MostPlayedSection from "@/components/story/sections/MostPlayedSection";
import CatalogSection from "@/components/story/sections/CatalogSection";
import SkillJumpSection from "@/components/story/sections/SkillJumpSection";
import InternshipSection from "@/components/story/sections/InternshipSection";
import DebugSection from "@/components/story/sections/DebugSection";
import ListeningSection from "@/components/story/sections/ListeningSection";
import TopSongsSection from "@/components/story/sections/TopSongsSection";
import FinalSection from "@/components/story/sections/FinalSection";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <StoryScroller>
        <IntroSection />
        <TopTechSection />
        <MostPlayedSection />
        <CatalogSection />
        <SkillJumpSection />
        <InternshipSection />
        <DebugSection />
        <TopSongsSection />
        <ListeningSection />
        <FinalSection />
      </StoryScroller>
    </>
  );
}
