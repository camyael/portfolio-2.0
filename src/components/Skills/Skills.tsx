import skills from "../../assets/skills/skills";
import SeparatorTitles from "../SeparatorTitles/SeparatorTitles";
import CarouselSkills from "./CarouselSkill";

const Skills = () => (
    <section id="skillsSection" className="sm:w-4/6 mx-10 sm:mx-auto pt-20 pb-28">
        <SeparatorTitles section="skills" extra="técnicas"/>
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-5 xl:gap-x-2 gap-y-10">
            {
                skills.map((item) => <CarouselSkills type={item.type} skills={item.skills}/>)
            }
        </div>
    </section>
)

export default Skills;