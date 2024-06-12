import { type FunctionComponent } from "react";
import './SeparatorTitles.css'

interface Props {
    section: string,
    extra: string
}

const SeparatorTitles:FunctionComponent<Props> = ({ section, extra }) => (
    <div>
        <p className="font-secundary font-medium tracking-tighter text-3xl stroke">{section}</p>
        <p className="-mt-5 pl-14 font-main italic font-semibold text-4xl tracking-tighter text-pink-main">{extra}</p>
    </div>
)

export default SeparatorTitles;