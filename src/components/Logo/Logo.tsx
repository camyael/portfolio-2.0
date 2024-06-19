import star from '../../assets/stars/star2.svg';

const Logo = () => (
    <a className='px-[20px] relative cursor-pointer' href='/'>
        <div className='font-main text-[18px] font-semibold tracking-tighter italic'>
            <p>camila</p>
            <p className='mt-[-13px]'>villaverde</p>
        </div>
        <div className='absolute top-2 right-4'>
            <img className='w-[12px] h-[12px]' src={star} alt="Estrella" />
        </div>
    </a>
)

export default Logo;