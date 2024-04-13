import { type FunctionComponent } from "react";
import Logo from "../Logo/Logo";
import items from "./NavbarItems";
import NavbarItem from "./NavbarItem";

const Navbar: FunctionComponent = () => (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center items-center  py-[5px] w-[50%] mx-auto backdrop-filter backdrop-blur-md border-from-white border-2 rounded-md">
        <Logo/>
        <div className='flex gap-[16px] px-[40px]'>
            {
                items.map((item, index) => <NavbarItem item={item} key={index}/>)
            }
        </div>
    </nav>
)

export default Navbar;