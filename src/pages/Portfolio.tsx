import { type FunctionComponent } from "react"
import { AboutMe, Banner, Contact, Navbar, Projects, Skills } from "../components"
import star from '../assets/img/star.svg'

const Portfolio: FunctionComponent = () => (
    <div className="bg-gray min-h-[100vh] font-secundary text-black pt-5 relative">
        <Navbar/>
        <Banner/>
        <AboutMe/>
        <img className="mx-auto py-20 w-[56px]" src={star}/>
        <Skills/>
        <img className="mx-auto py-20 w-[56px]" src={star}/>
        <Projects/>
        <img className="mx-auto py-20 w-[56px]" src={star}/>
        <Contact/>
    </div>
)

export default Portfolio