import { type FunctionComponent } from "react";

const Contact: FunctionComponent = () => (
    <section className="w-4/6 mx-auto pb-96">
        <p className="lowercase text-center font-main italic text-4xl tracking-tighter">Contacto</p>
        <div className="py-10 flex gap-x-16">
            <div className="w-[60%]">
                <p className="text-sm text-center">Para contactarme completa el formulario o envíame un correo - camilavillaverde3@gmail.com</p>
                <form action="" className="">
                    <div className="flex flex-col py-3 relative">
                        <label className="absolute top-0">Nombre</label>
                        <input type="text" name="name" id="name" placeholder="Ingresa tu nombre" className="bg-gray border-pink-main border-[1px] rounded-lg w"/>
                    </div>
                    <div className="flex flex-col py-3 relative">
                        <label className="absolute top-0">Email</label>
                    </div>
                        <input type="text" name="mail" id="mail" className="bg-gray border-pink-main border-[1px] rounded-lg w" placeholder="Ingresa tu correo electrónico"/>
                    <div className="flex flex-col py-3 relative">
                        <label className="absolute top-0">Mensaje</label>
                        <textarea className="bg-gray border-pink-main border-[1px] rounded-lg w" placeholder="Escribe tu mensaje"/>
                    </div>
                    <div></div>
                </form>
            </div>
            <div className="w-[40%]">
                <p>links</p>
            </div>
        </div>
    </section>
)

export default Contact;