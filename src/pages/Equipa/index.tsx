import { ArrowCircleLeft, ArrowCircleRight, CaretDown } from "phosphor-react";
import { useContext, useState } from "react";
import { departamentos } from "../../helpers/departamentos";
import { DepartamentosContext } from "../../Context/departamentosContext";
import { Direcao } from "./Departamentos/direcao";
import { Creche } from "./Departamentos/creche";
import { Administrativo } from "./Departamentos/administrativo";
import { Portaria } from "./Departamentos/portaria";
import { Motoristas } from "./Departamentos/motoristas";
import { Despensa } from "./Departamentos/despensa";
import { ServicosGerais } from "./Departamentos/gerais";
import { Lavandaria } from "./Departamentos/lavandaria";
import { Cozinha } from "./Departamentos/cozinha";
import { PreEscola } from "./Departamentos/preEscola";
import { PrimeiroCiclo } from "./Departamentos/primeiroCiclo";
import backgroundImg from "../../assets/staff_background.png"
import { CasaAcolhimento } from "./Departamentos/casaAcolhimento";
import { getEmployeesByDepartment } from "../../functions/departamentEmployes";
import { useScreenSize } from "../../hooks/screenSize";

export function Equipa() {
    const [showSelectOptions, setShowSelectOptions] = useState(false)
    const { deptSelected, setDeptSelected } = useContext(DepartamentosContext)
    const { current, nextSlide, previusSlide } = useContext(DepartamentosContext)
    const screenSize = useScreenSize();
    const isMobile = screenSize.width < 768;

    const departmentEmployees = getEmployeesByDepartment(deptSelected);

    const disabledNextButton = () => {
        if (departmentEmployees.length <= 3) {
            return true;
        }
        if (current === departmentEmployees.length - (!isMobile ? 3 : 1)) {
            return true;
        }
        return false;
    };

    const isNextDisabled = disabledNextButton();

    return (
        <div className="lg:px-40 lg:py-20 p-5 bg-no-repeat bg-right-top" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="pb-20">
                <h1 className="pb-10 text-3xl font-bold">A nossa <span className="bg_text">equipa</span></h1>
                <h2 className="text-xl">Uma equipa dedicada a inspirar e educar, guiada pela fé no Menino Deus</h2>
            </div>
            <button
                className="border-solid border-2 border-black flex flex-row items-center rounded-lg cursor-pointer p-3"
                onClick={() => setShowSelectOptions(prev => !prev)}
            >
                <span className="font-bold">Departamento:</span>
                <span className="px-2">{deptSelected}</span>
                <CaretDown size={20} />
            </button>

            {showSelectOptions &&
                <div className="mt-5 border-solid border-2 border-black grid grid-cols-2 xl:grid-cols-6 gap-1 rounded-lg cursor-pointer p-3 bg-white">
                    {departamentos.map((dept) => {
                        return (
                            <div key={dept.id}>
                                <a
                                    onClick={() => {
                                        setDeptSelected(dept.name)
                                        setShowSelectOptions(false)
                                    }}
                                    className="btn_dept"
                                >
                                    {dept.name}
                                </a>
                            </div>
                        )
                    })}
                </div>
            }

            <div className="mt-10">
                {deptSelected === "Direção" &&
                    <Direcao />
                }
                {deptSelected === "Serviços Administrativos" &&
                    <Administrativo />
                }
                {deptSelected === "Portaria" &&
                    <Portaria />
                }
                {deptSelected === "Motoristas" &&
                    <Motoristas />
                }
                {deptSelected === "Despensa" &&
                    <Despensa />
                }
                {deptSelected === "Serviços Gerais" &&
                    <ServicosGerais />
                }
                {deptSelected === "Lavandaria" &&
                    <Lavandaria />
                }
                {deptSelected === "Cozinha" &&
                    <Cozinha />
                }
                {deptSelected == "Creche" &&
                    <Creche />
                }
                {deptSelected === "Ensino Pré-Escolar" &&
                    <PreEscola />
                }
                {deptSelected === "1º Ciclo" &&
                    <PrimeiroCiclo />
                }
                {deptSelected === "Casa de Acolhimento" &&
                    <CasaAcolhimento />
                }
            </div>
            <div className="flex justify-end mt-5">
                <button
                    onClick={previusSlide}
                    disabled={current === 0}
                    className="disabled:opacity-50"
                >
                    <ArrowCircleLeft size={45} weight="thin" color="#F97648" />
                </button>
                <button
                    onClick={nextSlide}
                    disabled={isNextDisabled}
                    className="disabled:opacity-50"
                >
                    <ArrowCircleRight size={45} weight="thin" color="#F97648" />
                </button>
            </div>
        </div>
    )
}