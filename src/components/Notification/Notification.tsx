import "./styles.css"

import warningTriangle from '../../assets/ico/Warning-Triangle.svg'

export const Notification : React.FC<{classname: null | string}> = ({classname})=>{
    return(
        <div className={`notification ${classname}`}>
            <img className="notification__img" src={warningTriangle}/>
            <p className="notification__text">Technical problems, we strongly recommend not to use remote access for the time being</p>
        </div>
    )
}