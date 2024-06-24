import { CaretDown, CaretUp } from "phosphor-react";
import { useState } from "react";

export function NavbarMenuMobile() {

    const [openMenuMobile1, setOpenMenuMobile1] = useState(false)
    const [openMenuMobile2, setOpenMenuMobile2] = useState(false)
    const [openMenuMobile3, setOpenMenuMobile3] = useState(false)

    return (
        <>
            <div className="flex flex-col gap-5 items-start my-10 h-screen">
                <button
                    onClick={() => setOpenMenuMobile1(prev => !prev)}
                    className="flex flex-row gap-3 border-b-[1px] border-black w-full pb-2"
                >
                    <span>Casa do Menino Deus</span>
                    {openMenuMobile1 ?
                        <CaretUp size={20} weight="light" />
                        :
                        <CaretDown size={20} weight="light" />
                    }
                </button>
                {
                    openMenuMobile1 &&
                    <div className="flex flex-col items-start gap-3">
                        <button className="btn_navbar">VOTSF</button>
                        <button className="btn_navbar">A Nossa História</button>
                        <button className="btn_navbar">A Nossa Identidade</button>
                        <button className="btn_navbar">Documentos Essenciais</button>
                    </div>
                }
                <button
                    onClick={() => setOpenMenuMobile2(prev => !prev)}
                    className="flex flex-row gap-3 border-b-[1px] border-black w-full pb-2"
                >
                    <span>Oferta Educativa</span>
                    {openMenuMobile2 ?
                        <CaretUp size={20} weight="light" />
                        :
                        <CaretDown size={20} weight="light" />
                    }
                </button>
                {
                    openMenuMobile2 &&
                    <div className="flex flex-col items-start gap-3">
                        <button className="btn_navbar">Oferta Educativa</button>
                        <button className="btn_navbar">Atividades de Complemento Curricular</button>
                        <button className="btn_navbar">Normas de Admissão</button>
                        <button className="btn_navbar">Preçário</button>
                    </div>
                }
                <button
                    onClick={() => setOpenMenuMobile3(prev => !prev)}
                    className="flex flex-row gap-3 border-b-[1px] border-black w-full pb-2"
                >
                    <span>Ano Letivo 23/24</span>
                    {openMenuMobile3 ?
                        <CaretUp size={20} weight="light" />
                        :
                        <CaretDown size={20} weight="light" />
                    }
                </button>
                {
                    openMenuMobile3 &&
                    <div className="flex flex-col items-start gap-3">
                        <button className="btn_navbar">Informações Úteis</button>
                        <button className="btn_navbar">Calendário Escolar</button>
                        <button className="btn_navbar">Ementa</button>
                        <button className="btn_navbar">Galeria Atividades</button>
                    </div>
                }
                <button
                    className="flex flex-row gap-3 border-b-[1px] border-black w-full pb-2"
                >
                    E-community
                </button>
            </div>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg rounded-xl px-5 py-2">
                Contactos
            </button>
        </>
    )
}
