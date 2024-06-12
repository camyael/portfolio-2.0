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
        <div className='flex saturate-0 hover:filter-none transition-all duration-300 ease-in'>
            <img className="w-2/5 h-1/5 p-3 rounded-2xl px-3 pt-3 pb-16" src={`projects/${img}`}/>
            <div className="w-3/5 border-l-2 px-3 pt-3 pb-16 border-pink-main-transparent flex flex-col gap-y-3 justify-between">
                <div className="min-h-44">
                    <p className="font-main italic tracking-tighter lowercase text-2xl font-medium">{title}</p>
                    <p className="text-sm pt-3">{description}</p>
                </div>
                <div className="flex gap-x-5 gap-y-2 flex-wrap">
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