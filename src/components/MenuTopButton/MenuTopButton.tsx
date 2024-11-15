import "./styles.css"

import arrowLeft from '../../assets/ico/arrow-left.svg'
import { Link } from "react-router-dom"

export const MenuTopButton : React.FC<{name:string, img:string, amount:string, href:string}> = ({name, img, amount, href})=>{
    return(
        <Link to={href}>
            <div className="generator-top-button">
                <div className="generator-top-button__row">
                    <img src={img} alt="button-img" className="generator-top-button__button-img"/>
                    <div className="generator-top-button__amount">
                        <p className="generator-top-button__amount-num">{amount}</p>
                        <img src={arrowLeft} alt=">" className="generator-top-button__arrow-left"/>
                    </div>
                </div>
                <div>
                    <p className="generator-top-button__name">{name}</p>
                </div>
            </div>
        </Link>
    )
}