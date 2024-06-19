import banner from '../../assets/img/background/banner.webp'
import { Curriculum, Github, Linkedin } from '../../assets/icons';
import start from '../../assets/stars/star2.svg';
import './Banner.css'

const Banner = () => (
    <div id='banner' className="mt-[6rem] mb-10 h-[70vh] md:h-[80vh] relative pt-9 after:h-[10vh]">
        <div className="h-[100%] bg-moon bg-cover bg-top mix-blend-screen">
        </div>
        <div className='absolute top-5 w-full'>
            <div className='w-[75px] h-[75px] mb-[-3%] ml-[80%] md:ml-[70%] hover:animate-spin'>
                <img className='text-end' width={75} src={start} alt='Estrella'/>
            </div>
            <img className='w-full h-full sm:w-3/4 md:w-2/4 mx-auto' src={banner} alt='Banner'/>
            <div className='text-pink-secondary flex flex-col items-center font-semibold italic w-1/12 mt-[-8%] sm:mt-[-10%] md:mt-[-8%] ml-[20%] md:ml-[32%]'>
                <span>&</span>
                <p>Diseñadora</p>
                <p>UX/UI</p>
            </div>
            <div className='w-[75px] h-[75px] ml-[10%] md:ml-[25%] hover:animate-spin'>
                <img width={75} src={start} alt='Estrella'/>
            </div>
            <p className='w-full sm:w-4/6 lg:w-3/6 xl:w-2/6 my-10 sm:my-0 md:my-10 lg:my-5 px-8 text-center mx-auto text-[1rem] tracking-tighter'>Desarrolladora apasionada en crear experiencias que sean atractivas, accesibles y centradas en el usuario.</p>
            <div className='flex justify-center gap-x-6 mt-6 lg:mt- mb-8'>
                <a href="Camila-Villaverde_CV.pdf" className='hover:scale-125 hover:bg-pink-lightPink rounded-full transition-all duration-300 ease-in p-4' download aria-label=''>
                    <Curriculum svg={{width: 24, height: 24, stroke:'#B17686'}} />
                </a>
                <a href="https://www.linkedin.com/in/camilavillaverde" className='hover:scale-125 hover:bg-pink-lightPink rounded-full transition-all duration-300 ease-in p-4' target='_blank' aria-label=''>
                    <Linkedin svg={{width: 24, height: 24, fill:'#B17686'}} />
                </a>
                <a href="https://github.com/camyael" className='hover:scale-125 hover:bg-pink-lightPink rounded-full transition-all duration-300 ease-in p-4' target='_blank' aria-label=''>
                    <Github svg={{width: 24, height: 24, fill:'#B17686'}} />
                </a>
            </div>
        </div>
    </div>
)

export default Banner;