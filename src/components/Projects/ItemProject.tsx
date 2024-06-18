import { type FunctionComponent } from "react";
import { Button } from "../../atoms";

interface Props {
    img: string,
    title: string,
    description: string,
    linkGithub?: string,
    linkDeploy?: string,
    technologies?: string[]
}

const ItemProject:FunctionComponent<Props> = ({ img, description, title, technologies}) =>{

    return  (
        <div className='flex flex-col md:items-center lg:items-start lg:flex-row saturate-0 hover:filter-none transition-all duration-300 ease-in'>
            <img className="lg:w-2/5 h-1/5 lg:p-3 rounded-2xl px-3 pt-3 lg:pb-16" src={`projects/${img}`}/>
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