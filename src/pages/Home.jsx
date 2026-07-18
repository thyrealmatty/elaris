import Hero from "../components/home/Hero";
import DashboardCard from "../components/home/DashboardCard";
import QuoteCard from "../components/home/QuoteCard";
import getTodaysThought from "../utils/getTodaysThought";
import chapters from "../data/chapters";
import memories from "../data/memories";
import ContinueReading from "../components/home/ContinueReading";
import getSpecialMoment from "../utils/getSpecialMoment";
import SpecialMomentCard from "../components/home/SpecialMomentCard";

const thought = getTodaysThought();
const specialMoment = getSpecialMoment();

import {
  FiBookOpen,
  FiMusic,
  FiImage,
  FiHeart,
} from "react-icons/fi";

export default function Home() {
  const latestChapter = chapters[chapters.length - 1];
  const latestMemory = memories[memories.length - 1];

  return (
      <section className="min-h-screen pt-32 pb-20 px-6">

        <div className="mx-auto max-w-7xl">

          <Hero />
          <ContinueReading />
          <SpecialMomentCard moment={specialMoment} />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">

           <DashboardCard
  icon={<FiBookOpen />}
  title="Latest Chapter"
  subtitle={`Continue reading "${latestChapter.title}".`}
  to={`/chapters/${latestChapter.id}`}
/>

            <DashboardCard
              icon={<FiMusic />}
              title="Soundtrack"
              subtitle="Every chapter carries its own Lumari."
              to="/soundtrack"
            />

            <DashboardCard
              icon={<FiImage />}
              title="Latest Memory"
              subtitle={latestMemory.title}
              to="/memories"
            />

            <DashboardCard
              icon={<FiHeart />}
              title="Our Journey"
              subtitle="Relive every milestone we've shared."
              to="/journey"
            />
                <QuoteCard quote={thought.text} author={thought.author} />
          </div>

        </div>

      </section>
  );
}