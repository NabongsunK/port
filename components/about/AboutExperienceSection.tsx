import { carrers } from "../../data/maindata";
import AboutExperienceItem from "./AboutExperienceItem";

const AboutExperienceSection = () => {
  return (
    <div>
      <div
        id="experience"
        className="flex flex-col gap-4 text-4xl font-bold mb-8"
      >
        EXPERIENCE
      </div>
      {carrers.map((Experience) => (
        <AboutExperienceItem
          key={`Experience ${Experience.id}`}
          experienceId={Experience.id}
        />
      ))}
    </div>
  );
};

export default AboutExperienceSection;
