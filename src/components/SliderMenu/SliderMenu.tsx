import "./styles.css"

import {SliderCard} from "../SliderCard/SliderCard"

import generatorTask from '../../assets/ico/generator-task.svg'
import dmTask from '../../assets/ico/dm-task.svg'
import looterTask from '../../assets/ico/looter-task.svg'
import tf2Task from '../../assets/ico/tf2-task.svg'
import changerTask from '../../assets/ico/changer-task.svg'
import activeTask from '../../assets/ico/active-task.svg'


export const SliderMenu = () => {

    return (
      <div className="slider-menu">
        <SliderCard link="dm/Virtual" className="first-element" numbers={1} img={dmTask} title={"DeathMatch"} subtitle={"New safe mode for farming cases"} background={"1"}/>
        <SliderCard link="generator/Settings" className={""} numbers={1} img={generatorTask} title={"Generator"} subtitle={"Generating steam accounts on requests"} background={"1"}/>
        <SliderCard link="changer/Settings" className={""} numbers={1} img={changerTask} title={"Changer"} subtitle={"text"} background={"1"}/>
        <SliderCard link="tf2/Settings" className={""} numbers={1} img={tf2Task} title={"TF2"} subtitle={"text"} background={"1"}/>
        <SliderCard link="looter/Settings" className={""} numbers={1} img={looterTask} title={"Looter"} subtitle={"text"} background={"1"}/>
        <SliderCard link="active" className={""} numbers={1} img={activeTask} title={"Active Task"} subtitle={"text"} background={"1"}/>
      </div>
    );
  };