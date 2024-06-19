import { Github, Linkedin } from "../../assets/icons";

const LinksContact = () => (
    <div className="flex flex-col gap-y-4 justify-center">
        <a href="https://www.linkedin.com/in/camilavillaverde" target="_blank" className="flex items-center gap-x-6" aria-label="Link al Linkedin de Camila">
            <Linkedin svg={{width: 25, height: 25, fill: "#B17686"}}/>
            <p className="text-sm">in/camilavillaverde</p>
        </a>
        <a href="https://github.com/camyael" target="_blank" className="flex items-center gap-x-6" aria-label="Link al Github de Camila">
            <Github svg={{width: 25, height: 25, fill: "#B17686"}}/>
            <p className="text-sm">github.com/camyael</p>
        </a>
    </div>
)

export default LinksContact;