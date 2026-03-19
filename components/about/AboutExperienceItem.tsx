import { carrers, carrerDetails } from "../../data/maindata";
import AboutExperienceDetailBlock from "./AboutExperienceDetailBlock";

type Props = {
  experienceId: number;
};

// ExperienceItem은 1개의 경력(=carrers 1개)을 렌더링하고,
// 그 아래 carrerDetails를 filter/map으로 내려줍니다.
const AboutExperienceItem = ({ experienceId }: Props) => {
  // 마인데이터(carrers)가 배열로 내려오므로 여기서 제목/날짜를 찾습니다.
  const experience = carrers.find((c) => c.id === experienceId);
  if (!experience) return null;

  return (
    <div key={`Experience ${experience.id}`} className="mb-8">
      <div className="flex flex-row items-center gap-4">
        <div className="text-5xl font-semibold my_accent_text">
          {experience.title}
        </div>
        <div className="text-4xl text-gray-600">{experience.date}</div>
      </div>

      {/* 여기서부터는 메인 캐리어 '아래'에 위치 */}
      <div className="mt-3 md:ml-6 space-y-8">
        {carrerDetails
          .filter((d) => d.parentId === experience.id)
          .map((detail, detailIdx) => (
            <AboutExperienceDetailBlock
              key={`ExperienceDetail ${detailIdx}`}
              careerDetail={detail}
              detailIdx={detailIdx}
            />
          ))}
      </div>
    </div>
  );
};

export default AboutExperienceItem;
