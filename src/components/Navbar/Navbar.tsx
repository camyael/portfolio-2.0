import { useState, type FunctionComponent } from "react";
import Logo from "../Logo/Logo";
import items from "./NavbarItems";
import NavbarItem from "./NavbarItem";
import { BurgerButtom } from "../../assets/icons";

const Navbar: FunctionComponent = () => {
    //! ARREGLAR BOTON DE MENU
    const [menu, setMenu] = useState<boolean>(false)

    const handleMenu = () => setMenu(!menu)

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center items-center  py-[5px] w-[50%] mx-auto backdrop-filter backdrop-blur-md border-from-white border-2 rounded-md">
            <Logo/>
            <div className="">
                <div className="md:hidden cursor-pointer" onClick={handleMenu}>
                    <BurgerButtom svg={{width: 24, height: 24, fill: menu ? '#F5B5C5':'#444444'}}/>
                </div>
                <div className={`${menu ? 'absolute flex-col left-0 bg-gray h-[100vh] w-[100vw] z-50' : 'hidden'} md:flex md:gap-[16px] md:px-[40px]`}>
                    {
                        items.map((item, index) => <NavbarItem item={item} key={index}/>)
                    }
                </div>
        </div>
        </nav>
    )
}

export default Navbar;