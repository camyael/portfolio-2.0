import { type FunctionComponent } from "react";
import profile from '../../assets/img/portfolio-profile.webp';
import './AboutMe.css';
import Button from "../Button/Button";

const AboutMe:FunctionComponent = () => (
    <section id="aboutMeSection" className="flex flex-col lg:flex-row sm:w-5/6 md:w-4/6 items-center lg:justify-between xl:justify-center gap-9 xl:gap-[110px] mx-auto py-10 saturate-0 hover:filter-none transition-all duration-300 ease-in">
        <div className="relative rounded-full border-pink-secondary border-[0.7px] w-[251px] h-[251px] flex justify-center items-center">
            <img src={profile} alt="Foto de Camila" className="w-[225px] h-[225px] text-center rounded-full bg-gray-secondary"/>
            <div className="star"></div>
        </div>
        <div className="mx-10 md:mx-0 lg:w-3/5 xl:w-2/5">
            <h3 className="font-main italic font-medium text-3xl tracking-tighter mb-[23px]">¡hola! soy camila</h3>
            <p>Estudiante de Sistemas con +1 año de experiencia como Desarrolladora Frontend y Diseñadora UX/UI Freelancer. Me fascina poder llevar mis ideas a código y volverlas realidad, dejar mi marca en cada creación.
            </p>
            <p className="mt-[18px]">Me caracterizo por ser una persona responsable, ordenada y curiosa. Siempre estoy abierta a nuevos desafíos que me hagan superarme y vivir nuevas experiencias, para aprender y crecer tanto personal como profesionalmente.
            </p>
            <a className="flex justify-center py-[23px]" href="/Camila-Villaverde_CV.pdf" download={'Camila Villaverde - CV'} aria-label="Enlace para descargar el CV">
                <Button title="curriculum" style="uppercase py-2 px-6 tracking-widest hover:bg-pink-main hover:text-gray transition-all duration-300 ease-in"/>
            </a>
        </div>
    </section>
)

export default AboutMe;