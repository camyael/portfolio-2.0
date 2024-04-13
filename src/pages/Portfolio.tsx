import { type FunctionComponent } from "react"
import { Banner, Navbar } from "../components"

const Portfolio: FunctionComponent = () => (
    <div className="bg-gray min-h-[100vh] font-secundary text-black pt-5 relative">
        <Navbar/>
        <Banner/>
    </div>
)

export default Portfolio