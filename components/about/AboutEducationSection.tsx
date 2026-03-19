import { educations } from "../../data/maindata";

const AboutEducationSection = () => {
  return (
    <div>
      <div
        id="education"
        className="flex flex-col gap-4 text-4xl font-bold mb-8"
      >
        EDUCATION
      </div>
      <div className="border-l-2 border-gray-300 pl-4 md:ml-6 mb-8 space-y-8 ">
        {educations.map((education, detailIdx) => (
          <div key={`education ${detailIdx}`}>
            <div className="text-2xl text-gray-600">{education.date}</div>
            <div className="text-4xl font-semibold">{education.title}</div>
            <div className="text-2xl whitespace-pre-wrap">{education.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutEducationSection;
