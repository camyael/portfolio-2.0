import { FunctionComponent } from "react";
import { ISkills } from "../../interfaces";

const ItemSkill:FunctionComponent<ISkills> = ({img, skill}) => (
    <div className="flex flex-col text-pink-main items-center">
        <img src={`/skills/${img}`} className="h-[30px] md:h-[45px] w-[30px] md:w-[45px]"/>
        <p className='text-sm text-center lowercase pt-2'>{skill}</p>
    </div>
)

export default ItemSkill;