
import { Carousel } from "antd"
import { imgCarousel } from "../helpers/headerInfos";
import { CarroselContainer } from "./styles";
import "./style.css"
import { useState } from "react";
 

export function Header() {

    const [current,setCurrent] = useState(1)

    const onChange = (currentSlide: number) => {
        setCurrent(currentSlide);
      };



    return (
        
        <CarroselContainer >
        <Carousel autoplay afterChange={onChange} draggable>
            {imgCarousel.map(item => (
            <div key={item.id}>
                <div
                className="m-0 h-screen flex  justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${item.uri})` }}
                >
                    <div className="h-full flex flex-col items-center justify-center">
                        <div className={`flex flex-col items-center justify-center text-center w-3/5 gap-10 ${current && "animate-slide-up"}`}>
                            <p className="text-white text-5xl font-bold">{item.title}</p>
                            <p className="text-white text-2xl">{item.subText}</p>
                        </div>
                    
                     <div className="flex flex-row">
                        {imgCarousel.map((item) => (
                            <span 
                            key={item.id} 
                            className="text-white flex align-baseline"
                            >
                                {item.name}
                            </span>
                        ))}  
                    </div>
                    </div>
                </div>
            </div>
            
            ))}
        </Carousel>
        </CarroselContainer>

    )
}