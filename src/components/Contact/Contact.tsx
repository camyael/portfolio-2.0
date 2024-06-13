import { type FunctionComponent } from "react";
import FormContact from "./FormContact";
import LinksContact from "./LinksContact";

const Contact: FunctionComponent = () => (
    <section id="contactSection" className="w-4/6 mx-auto pb-20">
        <p className="lowercase text-center font-main italic text-4xl tracking-tighter">Contacto</p>
        <div className="py-10 flex gap-x-16">
            <div className="w-[60%]">
                <p className="text-sm text-center">Para contactarme completa el formulario o envíame un correo - camilavillaverde3@gmail.com</p>
                <FormContact/>
            </div>
            <div className="w-[40%]">
                <LinksContact/>
            </div>
        </div>
    </section>
)

export default Contact;