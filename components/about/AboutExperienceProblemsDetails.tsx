type ExperienceProblem = {
  problem: string;
  solution: string;
};

type Props = {
  count: number;
  problems: ExperienceProblem[];
  problemKeyPrefix: string;
  renderProblemKey?: (pIdx: number) => string;
};

const AboutExperienceProblemsDetails = ({
  count,
  problems,
  problemKeyPrefix,
  renderProblemKey,
}: Props) => {
  return (
    <details className="mt-6 rounded-xl my_accent_surface">
      <summary className="cursor-pointer select-none list-none p-4 my_accent_surface_hover rounded-xl transition-colors">
        <div className="flex items-center justify-between gap-4">
          <div className="text-3xl font-semibold my_accent_text">
            문제 해결 사례 {count}건 보기
          </div>
          <div className="text-2xl my_accent_text">펼치기/접기</div>
        </div>
      </summary>
      <div className="px-4 pb-4 space-y-4">
        {problems.map((p, pIdx) => (
          <div
            key={
              renderProblemKey
                ? renderProblemKey(pIdx)
                : `${problemKeyPrefix}-${pIdx}`
            }
            className="bg-white rounded-xl p-4 shadow-sm"
          >
            <div className="text-2xl whitespace-pre-wrap">
              {`■ 문제점\n${p.problem}\n\n■ 해결책\n${p.solution}`}
            </div>
          </div>
        ))}
      </div>
    </details>
  );
};

export default AboutExperienceProblemsDetails;
