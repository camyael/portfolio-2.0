import ItemSkill from "./ItemSkill";
import { Next, Previous } from "../../assets/icons";
import { FunctionComponent, useState } from "react";
import { ISkills } from "../../interfaces";

interface Props {
    type: string,
    skills: ISkills[]
}

const CarouselSkills:FunctionComponent<Props> = ({type, skills}) => {
    const [length, setLenght] = useState<number[]>([0,5]);
    const [previous, setPrevious] = useState<boolean>(true);
    const [next, setNext] = useState<boolean>(true);

    const handlePrevious = () => {
        setLenght([length[0]-1, length[1]-1])
        if (length[1] == skills.length) setNext(true)
        if (length[0] == 0) setPrevious(false)
    }

    const handleNext = () => {
        if (length[1] != skills.length) setLenght([length[0]+1, length[1]+1])
        if (length[1] == skills.length-1) setNext(!next)
    }

    return (
        <div className="flex flex-col items-center pt-6">
            <p className="text-pink-main font-medium">{type}</p>
            <div className="flex gap-x-2 md:gap-x-4 py-4 relative">
                {
                    skills.slice(length[0], length[1]).map(skill => <ItemSkill skill={skill.skill} img={skill.img}/>)
                }
                {
                    (skills.length > 5 && next) &&
                    <div className="absolute content-[''] w-1/6 h-[100%] top-0 right-0 bg-gradient-to-r from-from-lightPink to-to-lightPink"></div>
                }
                {
                    (length[0] > 0 && previous) &&
                    <div className="absolute content-[''] w-1/6 h-[100%] top-0 left-0 bg-gradient-to-l from-from-lightPink to-to-lightPink"></div>
                }
                {
                    (length[0] > 0 && previous) &&
                    <button className="bg-pink-main w-[28px] h-[28px] absolute left-0 bottom-[50%] rounded-full flex justify-center items-center" onClick={handlePrevious}>
                        <Previous svg={{width: 10, height: 10, stroke: "#F4EBED"}}/>
                    </button>
                }
                {
                    (skills.length > 5 && next) &&
                    <button className="bg-pink-main w-[28px] h-[28px] absolute right-0 bottom-[50%] rounded-full flex justify-center items-center" onClick={handleNext}>
                        <Next svg={{width: 10, height: 10, stroke: "#F4EBED"}}/>
                    </button>
                }
            </div>
        </div>
    )
}

export default CarouselSkills;