import { type FunctionComponent } from "react";
import { Github, LinkDeploy } from "../../assets/icons";
import Button from "../Button/Button";

interface Props {
    img: string,
    title: string,
    description: string,
    links?: {
        linkDeploy: string,
        linkGithub: string
    }
    technologies?: string[]
}

const ItemProject:FunctionComponent<Props> = ({ img, description, title, technologies, links}) =>{

    return  (
        <div className='flex flex-col md:items-center lg:items-start lg:flex-row saturate-0 hover:filter-none transition-all duration-300 ease-in'>
            <div className="lg:w-2/5 m-3 relative">
                <img className="rounded-lg w-full h-full" src={`projects/${img}`} alt={`Imagen del proyecto de ${title}`}/>
                <div className="absolute top-0 w-full rounded-lg h-full opacity-0 bg-gradient-to-bl from-from-white to-to-lightPink hover:opacity-100 transition-all duration-200 ease-in flex justify-center items-center gap-x-5">
                    {
                        links?.linkGithub && <a href={links.linkGithub} className="" target="_blank" aria-label="Link al Github del Proyecto">
                        <Github svg={{width: 30, height: 30, fill:'#444444'}}/>
                    </a>
                    }
                    {
                        links?.linkDeploy && <a href={links.linkDeploy} className="" target="_blank" aria-label="Link al Deploy del Proyecto">
                        <LinkDeploy svg={{width: 30, height: 30, stroke:'#444444'}}/>
                    </a>
                    }
                </div>
            </div>
            <div className="lg:w-3/5 lg:border-l-2 px-3 pt-3 pb-16 lg:border-pink-main-transparent flex flex-col gap-y-3 justify-between">
                <div className="lg:min-h-44">
                    <p className="font-main italic tracking-tighter lowercase text-2xl font-medium">{title}</p>
                    <p className="text-sm pt-1 lg:pt-3">{description}</p>
                </div>
                <div className="flex justify-center lg:justify-normal gap-x-2 lg:gap-x-5 gap-y-2 flex-wrap">
                    {
                        technologies?.map((technology, index) => (
                            <Button key={index} title={technology} style="lowercase px-4 py-1 text-xs cursor-default"/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemProject;