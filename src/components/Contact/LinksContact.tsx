import { Github, Linkedin } from "../../assets/icons";

const LinksContact = () => (
    <div className="flex flex-col gap-y-4">
        <a href="https://www.linkedin.com/in/camilavillaverde" target="_blank" className="flex items-end gap-x-6">
            <Linkedin svg={{width: 33, height: 33, fill: "#B17686"}}/>
            <p className="text-sm">in/camilavillaverde</p>
        </a>
        <a href="https://github.com/camyael" target="_blank" className="flex items-end gap-x-6">
            <Github svg={{width: 33, height: 33, fill: "#B17686"}}/>
            <p className="text-sm">github.com/camyael</p>
        </a>
    </div>
)

export default LinksContact;