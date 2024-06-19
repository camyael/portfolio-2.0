import { useState } from "react";
import { projects } from "../../assets/projects/projects";
import ItemProject from "./ItemProject";
import './Projects.css';
import SeparatorTitles from "../SeparatorTitles/SeparatorTitles";
import Button from "../Button/Button";

const Projects = () => {
    const [handleProjects, setHandleProjects] = useState<boolean>(false)

    const handleClick = ():void => {
        setHandleProjects(!handleProjects);
    }

    return (
        <section id="projectsSection" className="sm:w-4/6 mx-10 sm:mx-auto">
            <SeparatorTitles section="proyectos" extra="personales"/>
            <div className="mt-16 border-t-2 border-pink-main-transparent flex flex-col md:items-center md:mx-auto md:w-5/6 lg:w-full relative" id="projects">
                {
                    handleProjects
                    ? projects.map((project, index ) => <ItemProject img={project.img} title={project.title} description={project.description} technologies={project.technologies}  links={{linkDeploy: project.linkDeploy, linkGithub: project.linkGithub}} key={index}/>)
                    : projects.slice(0,3).map((project, index ) => <ItemProject img={project.img} title={project.title} description={project.description} technologies={project.technologies} links={{linkDeploy: project.linkDeploy, linkGithub: project.linkGithub}} key={index}/>)
                }
                {
                    !handleProjects ?
                    <Button title="ver todos" style="uppercase xl:w-1/6 px-4 py-1 mx-auto mt-10 tracking-widest z-40 hover:bg-pink-main hover:text-gray transition-all duration-300 ease-in" handleClick={handleClick}/>
                    : <Button title="ver menos" style="uppercase xl:w-1/6 px-4 py-1 mx-auto mt-10 tracking-widest z-40 hover:bg-pink-main hover:text-gray transition-all duration-300 ease-in" handleClick={handleClick}/>
                }
            </div>
        </section>
    )
}

export default Projects;