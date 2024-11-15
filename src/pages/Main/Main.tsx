import "./styles.css"

import { Logo } from '../../components/Logo/Logo'
import { Navbar } from '../../components/Navbar/Navbar'
import { TasksMenu } from '../../components/TasksMenu/TasksMenu'
import { SliderMenu } from '../../components/SliderMenu/SliderMenu'
import { Notification } from '../../components/Notification/Notification'

export const Main : React.FC<{}> = ()=>{
    return (
    <>
        <Logo/>
        <Notification classname={null}/>
        <SliderMenu/>
        <TasksMenu/>
    </>
    )
}