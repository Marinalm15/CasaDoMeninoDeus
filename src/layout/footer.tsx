import { Divider } from "antd"
import logo from "../assets/logo-footer.png"
import logoDrible from "../assets/logo_drible.png"
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react"

export function Footer() {
    return (
        <div className="flex flex-col p-20 bg-[#f7f7f7]">
            <div className="grid lg:grid-cols-3 grid-cols-1 pb-14 gap-10 lg:gap-0">
                <div>
                    <img src={logo} alt="logo" className="w-1/2" />
                </div>
                <div className="flex flex-col w-full justify-center font-semibold lg:items-center">
                    <span>Venerável Ordem Terceira de S. Francisco</span>
                    <span>Rua Dr. Manuel Pais, 273</span>
                    <span>4750-317 Barcelos Portugal</span>
                </div>
                <div className="flex flex-col justify-center lg:items-end">
                    <span className="text-4xl font-bold text-orange-600">253 811 260</span>
                    <span className="text-xs"> *chamada para rede fixa nacional</span>
                </div>
            </div>
            <Divider style={{ background: "black" }} />
            <div className="grid lg:grid-cols-6 grid-cols-1 mt-20 gap-10 lg:gap-0">
                <div>
                    <p className="font-semibold">Casa do Menino Deus</p>
                    <div className="flex flex-col text-sm gap-3 mt-3 cursor-pointer">
                        <a>Identidade</a>
                        <a>Missão</a>
                        <a>Equipa</a>
                        <a>Parceiros</a>
                        <a>Valores</a>
                    </div>

                </div>
                <div>
                    <p className="font-semibold">Documentos Essenciais</p>
                    <div className="flex flex-col text-sm gap-3 mt-3 cursor-pointer">
                        <a>Regulamento Interno</a>
                        <a>Projeto Educativo</a>
                        <a>Plano Anual de Atividades</a>
                        <a>Política de Qualidade</a>
                    </div>

                </div>
                <div>
                    <p className="font-semibold">Oferta Educativa</p>
                    <div className="flex flex-col text-sm gap-3 mt-3 cursor-pointer">
                        <a>Creche</a>
                        <a>Ensino Pré-Escolar</a>
                        <a>1º Ciclo</a>
                        <a>Casa de Acolhimento</a>
                    </div>
                </div>
                <div>
                    <p className="font-semibold">Inscrições</p>
                    <div className="flex flex-col text-sm gap-3 mt-3 cursor-pointer">
                        <a>Preçário</a>
                        <a>Normas de Admissão</a>
                        <a>Uniforme</a>
                        <a>Inscrições</a>
                        <a>FAQs</a>
                        <a>De Volta a Casa</a>
                    </div>
                </div>
                <div>
                    <p className="font-semibold">Ano Letivo 23/24</p>
                    <div className="flex flex-col text-sm gap-3 mt-3 cursor-pointer">
                        <span>Material Escolar</span>
                        <span>Manuais</span>
                        <span>Ementa</span>
                        <span>Calendário Escolar</span>
                    </div>
                </div>
                <div>
                    <p className="font-semibold">Links Úteis</p>
                    <div className="flex flex-col text-sm gap-3 mt-3 cursor-pointer">
                        <a>Contactos</a>
                        <a>Serviços Administrativos</a>
                        <a>E-Community</a>
                        <a>Livro de Reclamações</a>
                        <a>Política de Privacidade</a>
                    </div>
                </div>
            </div>
            <Divider style={{ background: "black" }} className="mt-20" />
            <div className="flex flex-row justify-between">
                <a href="https://www.drible.pt/">
                    <img src={logoDrible} alt="logo_drible" />
                </a>
                <div className="flex flex-row gap-3">
                    <a href="https://www.facebook.com/CasaMeninoDeus">
                        <FacebookLogo size={30} weight="fill" />
                    </a>
                    <a href="https://www.instagram.com/casameninodeus/">
                        <InstagramLogo size={30} />
                    </a>
                    <a href="https://www.linkedin.com/company/col%C3%A9gio-casa-do-menino-deus/">
                        <LinkedinLogo size={30} weight="fill" />
                    </a>
                </div>
            </div>
        </div>

    )
}