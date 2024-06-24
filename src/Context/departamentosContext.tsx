import { ReactNode, SetStateAction, createContext, useRef, useState } from "react";

interface DepartamentosContextType {
    deptSelected: string;
    setDeptSelected: (value: string) => void
    current: number
    setCurrent: (value: number) => void
    carouselRef: any //eslint-disable-line
    onChange: (currentSlide: number) => void
    nextSlide: () => void
    previusSlide: () => void
    openModal: boolean
    setOpenModal: (value: boolean) => void
    currentConhecer: any //eslint-disable-line
    setcurrentConhecer: (value: any) => void //eslint-disable-line
    handleOpenModal: (value: any) => void //eslint-disable-line
}

interface CarouselRefType {
    goTo: (index: number) => void;
}
interface DepartamentosContextProviderProps {
    children: ReactNode
}

export const DepartamentosContext = createContext<DepartamentosContextType>({} as DepartamentosContextType)

export function MovimentContextProvider({ children, }: DepartamentosContextProviderProps) {
    const [deptSelected, setDeptSelected] = useState("Direção")
    const [current, setCurrent] = useState(0)
    const carouselRef = useRef<CarouselRefType>(null);
    const [openModal, setOpenModal] = useState(false)
    const [currentConhecer, setcurrentConhecer] = useState(null);

    const onChange = (currentSlide: number) => {
        setCurrent(currentSlide);
    };

    const nextSlide = () => {
        if (carouselRef.current) {
            const next = current + 1;
            carouselRef.current.goTo(next);
        }
    };

    const previusSlide = () => {
        if (carouselRef.current) {
            const next = current - 1;
            carouselRef.current.goTo(next);
        }
    };

    const handleOpenModal = (item: SetStateAction<null>) => {
        setcurrentConhecer(item);
        setOpenModal(true);
    };

    return (
        <DepartamentosContext.Provider
            value={{
                deptSelected,
                setDeptSelected,
                current,
                setCurrent,
                carouselRef,
                onChange,
                nextSlide,
                previusSlide,
                openModal,
                setOpenModal,
                currentConhecer,
                setcurrentConhecer,
                handleOpenModal
            }}
        >
            {children}
        </DepartamentosContext.Provider>
    )
}



