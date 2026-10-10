import { useEffect, useState } from "react";

import RaceHUD from "./components/HUD/RaceHUD";
import RacingTrack from "./components/Track/RacingTrack";

import DriverSection from "./components/sections/DriverSection";
import CareerSection from "./components/sections/CareerSection";
import GarageSection from "./components/sections/GarageSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import TrophySection from "./components/sections/TrophySection";
import EducationSection from "./components/sections/EducationSection";
import PitLaneSection from "./components/sections/PitLaneSection";

import { raceSections } from "./data/raceSections";

function App() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll(".race-section-wrapper");

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
            b.intersectionRect.height - a.intersectionRect.height
          )[0];

        if (!visibleSection) {
          return;
        }

        const index = Number(visibleSection.target.dataset.sectionIndex);

        if (!Number.isNaN(index)) {
          setActiveSection(index);
        }
      },
      {
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const navigateToSection = (index) => {
    const section = document.querySelector(
      `[data-section-index="${index}"]`
    );

    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="portfolio-app">
      <RaceHUD
        activeSection={activeSection}
        totalSections={raceSections.length}
      />

      <RacingTrack
        activeIndex={activeSection}
      />

      <main className="race-world">
        <div
          className="race-section-wrapper"
          data-section-index="0"
        >
          <DriverSection />
        </div>

        <div
          className="race-section-wrapper"
          data-section-index="1"
        >
          <CareerSection />
        </div>

        <div
          className="race-section-wrapper"
          data-section-index="2"
        >
          <GarageSection />
        </div>

        <div
          className="race-section-wrapper"
          data-section-index="3"
        >
          <ProjectsSection />
        </div>

        <div
          className="race-section-wrapper"
          data-section-index="4"
        >
          <EducationSection />
        </div>

        <div
          className="race-section-wrapper"
          data-section-index="5"
        >
          <TrophySection />
        </div>

        <div
          className="race-section-wrapper"
          data-section-index="6"
        >
          <PitLaneSection />
        </div>
      </main>

      <nav
        className="race-navigation"
        aria-label="Portfolio sections"
      >
        {raceSections.map((section, index) => (
          <button
            key={section.id}
            type="button"
            className={
              index === activeSection
                ? "race-nav-item active"
                : "race-nav-item"
            }
            onClick={() =>
              navigateToSection(index)
            }
            aria-label={`Go to ${section.title}`}
            aria-current={
              index === activeSection
                ? "page"
                : undefined
            }
          >
            <span className="race-nav-number">
              {section.number}
            </span>

            <span className="race-nav-title">
              {section.title}
            </span>
          </button>
        ))}
      </nav>

      <div className="viewport-vignette" />
    </div>
  );
}

export default App;