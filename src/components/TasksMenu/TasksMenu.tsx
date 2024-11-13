import "./styles.css"
import { TasksCard } from "../TasksCard/TasksCard"

import generatorTask from '../../assets/ico/generator-task.svg'
import dmTask from '../../assets/ico/dm-task.svg'
import looterTask from '../../assets/ico/looter-task.svg'
import tf2Task from '../../assets/ico/tf2-task.svg'
import changerTask from '../../assets/ico/changer-task.svg'
import activeTask from '../../assets/ico/active-task.svg'

export const TasksMenu = ()=>{

    return(
        <div className="tasks-menu__wrapper">
            <div className="tasks-menu">
                    <TasksCard img={activeTask} name={"Active tasks"} amount={1}/>
                    <TasksCard img={dmTask} name={"DM tasks"} amount={1}/>
                    <TasksCard img={generatorTask} name={"Generator tasks"} amount={1}/>
                    <TasksCard img={changerTask} name={"Changer tasks"} amount={1}/>
                    <TasksCard img={looterTask} name={"Looter tasks"} amount={1}/>
                    <TasksCard img={tf2Task} name={"TF2 tasks"} amount={1}/>
            </div>
        </div>
    )
}