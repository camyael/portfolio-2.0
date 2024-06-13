import { FormEvent, useState } from "react";
import { Button } from "../../atoms";

const FormContact = () => {
    const [submit, setSubmit] = useState<boolean>(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmit(true)
    }

    return (
        <form action="" className="px-12 py-8" onSubmit={handleSubmit}>
            <div className="flex flex-col py-3 relative">
                <label className="absolute top-0 text-sm text-pink-main bg-gray px-1 ml-2">Nombre</label>
                <input type="text" name="name" id="name" placeholder="Ingresa tu nombre" className="bg-gray border-pink-main border-[1px] rounded-lg py-2 px-4 text-sm" onChange={() => setSubmit(true)}/>
            </div>
            <div className="flex flex-col py-3 relative">
                <label className="absolute top-0 text-sm text-pink-main bg-gray px-1 ml-2">Email</label>
                <input type="text" name="mail" id="mail" placeholder="Ingresa tu correo electrónico" className="bg-gray border-pink-main border-[1px] rounded-lg py-2 px-4 text-sm" onChange={() => setSubmit(true)}/>
            </div>
            <div className="flex flex-col py-3 relative">
                <label className="absolute top-0 text-sm text-pink-main bg-gray px-1 ml-2">Mensaje</label>
                <textarea className="bg-gray border-pink-main border-[1px] rounded-lg py-2 px-4 text-sm h-40" placeholder="Escribe tu mensaje" onChange={() => setSubmit(true)}/>
            </div>
            <div className="text-center py-8">
                <Button title="enviar" style="uppercase bg-pink-main text-gray text-sm rounded-xl px-14 py-2 font-thin tracking-widest"/>
            </div>
            {
                submit &&
                <p className="text-center text-sm">Todavía no está funcionando el formulario! Podes contactarme por mis redes :)</p>
            }
        </form>
    )
}

export default FormContact;