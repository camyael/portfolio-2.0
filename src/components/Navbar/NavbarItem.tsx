import { type FunctionComponent } from 'react';
import { INavbarItem } from "../../interfaces";

interface Props {
    item: INavbarItem,
    onClick?: () => void
}

const NavbarItem: FunctionComponent<Props> = ({ item, onClick }) => (
    <a className='flex flex-nowrap gap-1 px-10 md:px-0 md:text-sm 2xl:text-base' href={`#${item.href}`} onClick={onClick}>
        <span className='font-semibold italic text-pink-main'>#0{item.index}</span>
        <p className='font-medium'>{item.section}</p>
    </a>
)

export default NavbarItem;