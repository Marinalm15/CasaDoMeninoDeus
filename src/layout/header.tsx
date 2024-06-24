import "./style.css"
import { Carousel } from "antd"
import { imgCarousel } from "../helpers/headerInfos";
import { useState } from "react";
import { Navbar } from "./navbar";


export function Header() {

    const [current, setCurrent] = useState(1)

    const onChange = (currentSlide: number) => {
        setCurrent(currentSlide);
    };

    return (

        <>
            <Navbar />
            <Carousel
                autoplay
                afterChange={onChange}
                draggable
                className="relative top-0 left-0 w-full h-screen"
            >

                {imgCarousel.map(item => (
                    <div key={item.id} >
                        <div
                            className="m-0 h-screen flex justify-center bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.uri})` }}
                        >
                            <div className="h-full flex flex-col items-center justify-center mt-20">
                                <div className={`flex flex-col items-center justify-center text-center w-3/5 gap-10 ${current && "animate-slide-up"}`}>
                                    <p className="text-white lg:text-5xl text-4xl font-bold">{item.title}</p>
                                    <p className="text-white lg:text-5xl text-4xl font-bold -mt-8">{item.title2}</p>
                                    <p className="text-white lg:text-2xl text-xl">{item.subText}</p>
                                </div>
                                <div className="flex flex-col lg:flex-row lg:gap-5 mt-10">
                                    <button
                                        className="text-white bg-orange-600 hover:bg-orange-700 px-5 py-2 font-semibold text-lg rounded-xl mb-5 lg:mb-0"
                                    >
                                        Saber mais
                                    </button>
                                    <button
                                        className="text-white border-solid border-2 border-white hover:bg-white/25 px-5 py-2 font-semibold text-lg rounded-xl"
                                    >
                                        Ver oferta educativa
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>

                ))}

            </Carousel>
            <div className="flex flex-row">

                <div
                    className="w-full lg:flex flex-row justify-center items-center top-[39.5rem] gap-20 absolute hidden"
                >
                    <span className="text-white text-lg w-40 flex justify-center">
                        Creche
                    </span>
                    <span className="text-white text-lg w-40 flex justify-center">
                        Ensino Pré-Escolar
                    </span>
                    <span className="text-white text-lg w-40 flex justify-center">
                        1º Ciclo
                    </span>
                    <span className="text-white text-lg w-40 flex justify-center whitespace-nowrap">
                        Casa de Acolhimento
                    </span>
                </div>

            </div>
        </>

    )
}