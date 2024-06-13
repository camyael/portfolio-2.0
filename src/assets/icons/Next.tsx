import { FunctionComponent } from "react";
import { IICons } from "../../interfaces";

interface Props {
    svg: IICons
}

const Next: FunctionComponent<Props> = ({ svg }) => (
    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={svg.width} height={svg.height} fill={svg.fill} viewBox="0 0 24 24">
        <path stroke={svg.stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
    </svg>
)

export default Next;