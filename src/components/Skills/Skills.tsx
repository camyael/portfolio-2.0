import skills from "../../assets/skills/skills";
import { SeparatorTitles } from "../../atoms";
import CarouselSkills from "./CarouselSkill";

const Skills = () => (
    <section id="skillsSection" className="w-4/6 mx-auto pt-20 pb-28">
        <SeparatorTitles section="skills" extra="técnicas"/>
        <div className="grid grid-cols-2 gap-x-2 gap-y-10">
            {
                skills.map((item) => <CarouselSkills type={item.type} skills={item.skills}/>)
            }

        </div>
    </section>
)

export default Skills;