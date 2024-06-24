import logo from "../assets/logo-footer.png"
import { useState } from "react";
import { useScreenSize } from "../hooks/screenSize";
import { List, X } from "phosphor-react";
import { NavbarMenuMobile } from "./navbarMenuMobile";


export function Navbar() {

    const screenSize = useScreenSize()
    const isMobile = screenSize.width < 768

    const [current, setCurrent] = useState('')
    const [scroll, setScroll] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)



    window.onscroll = function () {
        const distanceScrolled = document.documentElement.scrollTop;
        if (distanceScrolled > 0) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    return (
        <div
            className={`w-full flex flex-col justify-center items-center top-0 left-0 z-10 fixed ${scroll ? "mt-0" : "mt-10"}`}
        >
            <div className={`${scroll ? "w-full" : "w-11/12 rounded-xl"} bg-[#F4F4F4] p-5`}>
                <div className="flex justify-between items-center">
                    <img src={logo} alt="logo" className="md:w-1/6 w-1/3" />
                    {!isMobile &&
                        <>
                            <div className="flex gap-10">
                                <button
                                    onClick={() => setCurrent('casa_do_menino_deus')}
                                    onMouseEnter={() => setCurrent('casa_do_menino_deus')}
                                    className="btn_navbar"
                                >
                                    Casa do Menino Deus
                                </button>
                                <button
                                    onClick={() => setCurrent('oferta_educativa')}
                                    onMouseEnter={() => setCurrent('oferta_educativa')}
                                    className="btn_navbar"
                                >
                                    Oferta Educativa
                                </button>
                                <button
                                    onClick={() => setCurrent('ano_letivo')}
                                    onMouseEnter={() => setCurrent('ano_letivo')}
                                    className="btn_navbar"
                                >
                                    Ano Letivo 23/24
                                </button>
                                <button
                                    className="btn_navbar"
                                    onMouseEnter={() => setCurrent('')}
                                >
                                    E-community
                                </button>
                            </div>
                            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg rounded-xl px-5 py-2">
                                Contactos
                            </button>
                        </>
                    }
                    {isMobile &&
                        <>
                            {!openMenu ?
                                <List size={32} onClick={() => setOpenMenu(prev => !prev)} />
                                :
                                <X size={32} onClick={() => setOpenMenu(prev => !prev)} />
                            }
                        </>

                    }

                </div>
                {isMobile && openMenu &&
                    <NavbarMenuMobile />
                }
            </div>
            {!isMobile && current &&
                <div className={`${scroll ? "w-full" : "w-11/12 rounded-xl"} bg-white rounded-lg flex justify-center p-10 gap-8`}
                    onMouseLeave={() => setCurrent('')}
                >
                    {current === 'casa_do_menino_deus' &&
                        <>
                            <button className="btn_navbar">VOTSF</button>
                            <button className="btn_navbar">A Nossa História</button>
                            <button className="btn_navbar">A Nossa Identidade</button>
                            <button className="btn_navbar">Documentos Essenciais</button>
                        </>
                    }
                    {current === 'oferta_educativa' &&
                        <>
                            <button className="btn_navbar">Oferta Educativa</button>
                            <button className="btn_navbar">Atividades de Complemento Curricular</button>
                            <button className="btn_navbar">Normas de Admissão</button>
                            <button className="btn_navbar">Preçário</button>
                        </>
                    }
                    {current === 'ano_letivo' &&
                        <>
                            <button className="btn_navbar">Informações Úteis</button>
                            <button className="btn_navbar">Calendário Escolar</button>
                            <button className="btn_navbar">Ementa</button>
                            <button className="btn_navbar">Galeria Atividades</button>
                        </>
                    }
                </div>
            }
        </div>
    )
}