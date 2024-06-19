import { type FunctionComponent } from "react";
import { IICons } from "../../interfaces";

interface Props {
    svg: IICons
}

const Curriculum: FunctionComponent<Props> = ({ svg }) => (
    <svg className="text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={svg.width} height={svg.height} fill="none" viewBox="0 0 24 24">
    <path stroke={svg.stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/>
  </svg>
  
)

export default Curriculum;