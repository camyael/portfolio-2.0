import { type FunctionComponent } from "react";
// import FormContact from "./FormContact";
import LinksContact from "./LinksContact";

const Contact: FunctionComponent = () => (
    <section id="contactSection" className="sm:w-4/6 mx-10 sm:mx-auto pt-10 pb-20 ">
        <p className="lowercase text-center font-main italic text-4xl tracking-tighter">Contacto</p>
        <div className="flex justify-center gap-y-16 pt-5 ">
            {/* <div className="md:w-[60%]">
                <p className="text-sm text-center">Para contactarme completa el formulario o envíame un correo - camilavillaverde3@gmail.com</p>
                <FormContact/>
            </div> */}
                <LinksContact/>
        </div>
    </section>
)

export default Contact;