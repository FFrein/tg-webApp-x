import "./styles.css"

import logo from '../../assets/ico/logo.svg'

export const Logo = ()=>{
    return(
        <div className="logo">
            <img src={logo}/>
        </div>
    )
}