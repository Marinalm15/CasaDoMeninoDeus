import { Modal } from "antd";
import { DepartamentosContext } from "../../../../Context/departamentosContext";
import { useContext } from "react";
import { X } from "phosphor-react";

export function ModalConhecer() {

    const { openModal, setOpenModal, currentConhecer } = useContext(DepartamentosContext)

    return (

        <Modal
            open={openModal}
            onOk={() => setOpenModal(false)}
            footer={null}
            maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
            style={{ display: 'flex', justifyContent: 'start' }}
        >
            <div className="flex flex-col lg:flex-row lg:items-center">
                <img src={currentConhecer?.img} className="rounded-lg" />
                <div className="lg:ml-5 flex flex-col  my-10 lg:my-0">
                    <p className="text-2xl text-white font-bold whitespace-nowrap">{currentConhecer?.name}</p>
                    <p className="text-xl text-white whitespace-nowrap">{currentConhecer?.cargo}</p>
                </div>
            </div>

            <button
                onClick={() => setOpenModal(false)}
                className="flex flex-row gap-1 items-center mt-3"
            >
                <X size={15} color="#fff" />
                <span className="text-white text-xs">FECHAR</span>
            </button>



        </Modal>
    )
}