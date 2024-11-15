import "./styles.css"

import {SliderCard} from "../SliderCard/SliderCard"

import changerTask from '../../assets/ico/changer-task.svg'
import { useRef, useState } from "react";

export const SliderMenu = () => {
    const sliderMenuRef = useRef<HTMLDivElement | null>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const onMouseDown = (e:any) => {
      if(sliderMenuRef.current){
        setIsMouseDown(true);
        setStartX(e.pageX - sliderMenuRef.current.offsetLeft);  
        setScrollLeft(sliderMenuRef.current.scrollLeft);  
        sliderMenuRef.current.style.cursor = 'grabbing';  
      }
      };
    
      const onMouseLeave = () => {
        if(sliderMenuRef.current){
          setIsMouseDown(false);
          sliderMenuRef.current.style.cursor = 'grab';  
        }
      };
    
      const onMouseUp = () => {
        if(sliderMenuRef.current){
          setIsMouseDown(false);
          sliderMenuRef.current.style.cursor = 'grab';
        }
      };
    
      const onMouseMove = (e:any) => {
        if(sliderMenuRef.current){
          if (!isMouseDown) return; 
      
          const x = e.pageX - sliderMenuRef.current.offsetLeft;  
          const walk = (x - startX) * 2; 
          sliderMenuRef.current.scrollLeft = scrollLeft - walk;  
        }
      };
  
    return (
      <div
        ref={sliderMenuRef} 
        className="slider-menu"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <SliderCard link="dm" className="first-element" numbers={1} img={changerTask} title={"DeathMatch"} subtitle={"New safe mode for farming cases"} background={"1"}/>
        <SliderCard link="generator/Settings" className={""} numbers={1} img={changerTask} title={"Generator"} subtitle={"New safe mode for farming cases"} background={"1"}/>
        <SliderCard link="changer" className={""} numbers={1} img={changerTask} title={"Changer"} subtitle={"New safe mode for farming cases"} background={"1"}/>
        <SliderCard link="tf2" className={""} numbers={1} img={changerTask} title={"TF2"} subtitle={"New safe mode for farming cases"} background={"1"}/>
        <SliderCard link="looter" className={""} numbers={1} img={changerTask} title={"Looter"} subtitle={"New safe mode for farming cases"} background={"1"}/>
        <SliderCard link="active" className={""} numbers={1} img={changerTask} title={"Active Task"} subtitle={"New safe mode for farming cases"} background={"1"}/>
      </div>
    );
  };