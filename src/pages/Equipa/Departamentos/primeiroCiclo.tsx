import { Carousel } from "antd";
import { primeiroCiclo } from "../../../helpers/equipa";
import { DepartamentosContext } from "../../../Context/departamentosContext";
import { useContext } from "react";
import { ModalConhecer } from "./ModalConhecer";
import { CaretRight } from "phosphor-react";
import { useScreenSize } from "../../../hooks/screenSize";

export function PrimeiroCiclo() {

    const screenSize = useScreenSize();
    const isMobile = screenSize.width < 768;

    const {
        carouselRef,
        onChange,
        currentConhecer,
        handleOpenModal
    } = useContext(DepartamentosContext)

    return (
        <>
            <Carousel
                ref={carouselRef}
                afterChange={onChange}
                draggable
                slidesToShow={!isMobile ? 3 : 1}
                infinite={false}
                dots={false}
                arrows
            >
                {primeiroCiclo.map((item) => {
                    return (
                        <div key={item.id} className="flex justify-between w-full">
                            <div
                                style={{ backgroundImage: `url(${item.img})` }}
                                className="w-11/12 h-96 justify-center bg-cover bg-center bg-no-repeat rounded-lg"
                            >
                            </div>
                            <p className="text-xl font-bold mt-3">{item.name}</p>
                            <p className="text-lg">{item.cargo}</p>
                            <div onClick={() => handleOpenModal(item)}
                                className="mt-5 flex flex-row items-center cursor-pointer"
                            >
                                <span className="text-sm">Conhecer</span>
                                <CaretRight size={20} weight="light" />
                            </div>
                        </div>
                    )
                })}
            </Carousel>
            {
                currentConhecer && (
                    <ModalConhecer />
                )
            }
        </>
    )
}