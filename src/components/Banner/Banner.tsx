import banner from '../../assets/background/banner.png'
import { Curriculum, Github, Linkedin } from '../../assets/icons';
import start from '../../assets/stars/star2.svg'

const Banner = () => (
    <div className="mt-[6rem] h-[80vh] relative pt-9">
        <div className="h-[100%] bg-moon bg-cover bg-top mix-blend-screen">
        </div>
        <div className='absolute top-5 w-full'>
            <div className='w-1/12 mb-[-3%] ml-[70%]'>
                <img className='text-end' width={75} src={start}/>
            </div>
            <img className='w-2/4 mx-auto' src={banner}/>
            <div className='text-pink-secondary text-center font-semibold italic w-1/12 mt-[-8%] ml-[32%]'>
                <span>&</span>
                <p>Diseñadora</p>
                <p>UX/UI</p>
            </div>
            <div className='w-1/12 ml-[25%]'>
                <img width={75} src={start}/>
            </div>
            <p className='w-2/6 px-8 text-center mx-auto text-[1rem] tracking-tighter'>Desarrolladora apasionada en crear experiencias que sean atractivas, accesibles y centradas en el usuario.</p>
            <div className='flex justify-center gap-x-6 mt-6'>
                <a href="" target='_blank'>
                    <Curriculum svg={{width: 24, height: 24, stroke:'#B17686'}} />
                </a>
                <a href="" target='_blank'>
                    <Linkedin svg={{width: 24, height: 24, fill:'#B17686'}} />
                </a>
                <a href="https://github.com/camyael" target='_blank'>
                    <Github svg={{width: 24, height: 24, fill:'#B17686'}} />
                </a>
            </div>
        </div>
    </div>
)

export default Banner;