import skills from "../../assets/skills/skills";
import { SeparatorTitles } from "../../atoms";
import CarouselSkills from "./CarouselSkill";

const Skills = () => (
    <section id="skillsSection" className="md:w-4/6 mx-auto pt-20 pb-28">
        <SeparatorTitles section="skills" extra="técnicas"/>
        <div className="mx-10 md:mx-0 md:grid md:grid-cols-2 gap-x-2 gap-y-10">
            {
                skills.map((item) => <CarouselSkills type={item.type} skills={item.skills}/>)
            }
        </div>
    </section>
)

export default Skills;