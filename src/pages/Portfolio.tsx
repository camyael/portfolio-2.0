import { useEffect, useState, type FunctionComponent } from "react"
import { AboutMe, Banner, Contact, Logo, Navbar, Projects, Skills } from "../components"
import star from '../assets/img/star.svg'
import './Portfolio.css'

const Portfolio: FunctionComponent = () => {
    const [intro, setIntro] = useState<boolean>(true);
    const [position, setPosition] = useState<{
        x: number;
        y: number;
    }>({x: 0, y: 0})
    
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

        const handleMove = (event: any) => {
            const { clientX, clientY } = event;
            setPosition({
              x: clientX,
              y: clientY
            })
          }
          
          !intro && window.addEventListener('pointermove', handleMove)
      
          return () => {
            window.removeEventListener('pointermove', handleMove)
          }
    }, [intro])

    if(intro) return (
    <div className='bg-pink-lightPink w-full h-[100vh] flex justify-center items-center'>
        <div className="w-[200px] h-[200px] flex flex-col justify-center items-center">
        <Logo/>
        <div className="border-to-lightPink border-l-pink-secondary border-4 w-[150px] h-[150px] absolute rounded-full animate-spin"></div>
    </div> 
    </div>)

    return (
        <main id="portfolio" className='bg-gray min-h-[100vh] font-secundary text-black pt-5 relative'>
            <div style={{
                    position: 'fixed',
                    borderRadius: '50%',
                    opacity: .5,
                    pointerEvents: 'none',
                    left: -50,
                    top: -50,
                    transform: `translate(${position.x}px,${position.y}px)`,
                    width: '200px',
                    height: '200px',
                    filter: 'blur(30px)',
                    background: 'linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%)',
                    zIndex:1
            }}/>
            <Navbar/>
            <Banner/>
            <AboutMe/>
            <img className="mx-auto py-40 w-[56px]" src={star} alt="Separador de Estrella"/>
            <div className="bg-pink-lightPink">
                <Skills/>
            </div>
            <img className="mx-auto py-40 w-[56px]" src={star} alt="Separador de Estrella"/>
            <Projects/>
            <img className="mx-auto py-40 w-[56px]" src={star} alt="Separador de Estrella"/>
            <div className="bg-pink-lightPink">
                <Contact/> 
            </div>
        </main>
    )
}

export default Portfolio