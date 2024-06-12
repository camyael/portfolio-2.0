import { type FunctionComponent } from "react";

interface Props {
    title: string;
    style?: string;
    handleClick? : () => void;
}

const Button:FunctionComponent<Props> = ({title, style, handleClick}) => (
    <button className={`border-[1px] border-pink-main rounded-3xl text-pink-main ${style}`} onClick={handleClick && handleClick}>
        {title}
    </button>
)

export default Button;