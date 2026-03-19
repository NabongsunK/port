import Container from "../../components/Container";
import AboutSidebar from "../../components/about/AboutSidebar";
import AboutExperienceSection from "../../components/about/AboutExperienceSection";
import AboutEducationSection from "../../components/about/AboutEducationSection";
import AboutProjectsSection from "../../components/about/AboutProjectsSection";
import AboutIntroduceSection from "../../components/about/AboutIntroduceSection";

const About = () => {
  return (
    <Container>
      <div className="flex flex-row justify-center py-10 lg:justify-start">
        <div className="container flex flex-col items-start md:flex-row mb-48">
          <AboutSidebar />
          <div className="container mx-auto w-full h-full flex flex-col gap-20">
            <AboutIntroduceSection />
            <AboutExperienceSection />
            <AboutEducationSection />
            <AboutProjectsSection />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default About;
