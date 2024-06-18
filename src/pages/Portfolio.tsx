import { useEffect, useState, type FunctionComponent } from "react"
import { AboutMe, Banner, Contact, Logo, Navbar, Projects, Skills } from "../components"
import star from '../assets/img/star.svg'
import './Portfolio.css';

const Portfolio: FunctionComponent = () => {
    const [intro, setIntro] = useState<boolean>(true);
    const [cursorX, setCursorX] = useState<number>();
    const [cursorY, setCursorY] = useState<number>();

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX);
        setCursorY(e.pageY);
    })
    
    useEffect(() => {
        let count = 0;
        const process = setInterval(() => {
            count++
            if(count === 10) {
                setIntro(false)
            }
        }, 100)
        if(count === 100) {
            clearInterval(process) 
        }
    }, [intro])

    return (
        <div className={`${intro ? 'bg-pink-lightPink w-full flex justify-center items-center' : 'bg-gray'} min-h-[100vh] font-secundary text-black pt-5`}>
            {
                intro ?
                <div className="w-[200px] h-[200px] flex flex-col justify-center items-center">
                    <Logo/>
                    <div className="border-to-lightPink border-l-pink-secondary border-4 w-[150px] h-[150px] absolute rounded-full animate-spin"></div>
                </div>
                : <div className="">
                    <Navbar/>
                    <Banner/>
                    <AboutMe/>
                    <img className="mx-auto py-40 w-[56px]" src={star}/>
                    <div className="bg-pink-lightPink">
                        <Skills/>
                    </div>
                    <img className="mx-auto py-40 w-[56px]" src={star}/>
                    <Projects/>
                    <img className="mx-auto py-40 w-[56px]" src={star}/>
                    <Contact/>
                    <div className="cursor" style={{left: cursorX + 'px',top:cursorY + 'px'}}></div>
                </div>
            }
        </div>
    )
}

export default Portfolio