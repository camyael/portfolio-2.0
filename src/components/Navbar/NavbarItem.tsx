import { type FunctionComponent } from 'react';
import { INavbarItem } from "../../interfaces";

interface Props {
    item: INavbarItem
}

const NavbarItem: FunctionComponent<Props> = ({ item }) => (
    <a className='flex flex-nowrap gap-1'>
        <span className='font-semibold italic text-pink-main'>#0{item.index}</span>
        <p className='font-medium'>{item.section}</p>
    </a>
)

export default NavbarItem;