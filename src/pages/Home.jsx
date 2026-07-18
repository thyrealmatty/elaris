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
      <section className="min-h-screen">

        <div className="mx-auto max-w-6xl">

          <Hero />
          <ContinueReading />
          <SpecialMomentCard moment={specialMoment} />
          <div className="mt-12 mb-6">
              <p className="text-sm font-semibold uppercase tracking-[4px] text-pink-400">
                Explore Your World
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#2C2C2C]">
                Everything you've created together.
              </h2>

              <p className="mt-2 text-gray-500">
                Letters, memories, music and milestones—all in one place.
              </p>
            </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2">

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
                
          </div>
            <div className="mt-8">
              <QuoteCard 
                  quote={thought.text} 
                  author={thought.author} 
              />
            </div>
        </div>

      </section>
  );
}