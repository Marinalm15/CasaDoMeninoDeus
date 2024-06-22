import { Carousel } from "antd";
import { primeiroCiclo } from "../../../helpers/Staff/equipa";

export function PrimeiroCiclo() {

    const isMobile = window.innerWidth < 600

    return (
        <Carousel
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
                    </div>
                )
            })}
        </Carousel>
    )
}