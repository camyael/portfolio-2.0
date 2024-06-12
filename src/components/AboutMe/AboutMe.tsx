import { type FunctionComponent } from "react";
import profile from '../../assets/img/portfolio-profile.png';
import './AboutMe.css';
import { Button } from "../../atoms";

const AboutMe:FunctionComponent = () => (
    <section className="flex w-5/6 items-center justify-center gap-[110px] mx-auto py-10 saturate-0 hover:filter-none transition-all duration-300 ease-in">
        <div className="relative rounded-full border-pink-secondary border-[0.7px] w-[251px] h-[251px] flex justify-center items-center">
            <img src={profile} className="w-[225px] text-center rounded-full bg-gray-secondary"/>
            <div className="star"></div>
        </div>
        <div className="w-2/5">
            <h3 className="font-main italic font-medium text-3xl tracking-tighter mb-[23px]">¡hola! soy camila</h3>
            <p>Estudiante de Sistemas con +1 año de experiencia como Desarrolladora Frontend y Diseñadora UX/UI Freelancer. Me fascina poder llevar mis ideas a código y volverlas realidad, dejar mi marca en cada creación.
            </p>
            <p className="mt-[18px]">Me caracterizo por ser una persona responsable, ordenada y curiosa. Siempre estoy abierta a nuevos desafíos que me hagan superarme y vivir nuevas experiencias, para aprender y crecer tanto personal como profesionalmente.
            </p>
            <div className="flex justify-center py-[23px]">
                <Button title="curriculum" style="uppercase py-2 px-6 tracking-widest"/>
            </div>
        </div>
    </section>
)

export default AboutMe;