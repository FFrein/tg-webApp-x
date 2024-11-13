import React from "react"
import "./styles.css"

export const TasksCard : React.FC<{img:string, name:string, amount:number}> = ({img, name, amount})=>{
    return (
        <div className="card__wrapper">
            <div className="card">
                <div className="row">
                    <img className="task-image" src={img}/>
                    <p className="amount-tasks">{amount}</p>
                </div>

                <div className="row">
                    <p className="task-name">{name}</p>
                </div>
            </div>
        </div>
    )
}