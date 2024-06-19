import { FunctionComponent } from "react";
import { IICons } from "../../interfaces";

interface Props {
    svg: IICons
}

const Previous: FunctionComponent<Props> = ({ svg }) => (
    <svg className="text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={svg.width} height={svg.height} fill="none" viewBox="0 0 24 24">
        <path stroke={svg.stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
    </svg>
)

export default Previous;