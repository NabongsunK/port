import { Introduce } from "../../data/maindata";

const AboutIntroduceSection = () => {
  return (
    <div>
      <div
        id="Introduce"
        className="flex flex-col gap-4 text-4xl font-bold mb-4"
      >
        INTRODUCE222
      </div>
      <div className="border-l-2 border-gray-300 pl-4 md:ml-6 mb-8 space-y-8 text-2xl whitespace-pre-wrap">
        {Introduce.main}
      </div>
      <div className="text-2xl text-gray-500 text-right mt-8">
        Latest Updated{" "}
        <span className="text-2xl  my_accent_surface rounded-3xl px-4 py-1">
          {Introduce.updateDate}
        </span>
      </div>
    </div>
  );
};
export default AboutIntroduceSection;
