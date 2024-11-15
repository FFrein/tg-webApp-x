import "./styles.css"
import emptyUser from '../../assets/ico/emptyUser.svg'

export const EmptyList : React.FC<{text:string}> = ({text})=>{
    return(
        <div className="empty-list">
            <img src={emptyUser} alt="empty user" className="empty-list__img1"/>
            <img src={emptyUser} alt="empty user" className="empty-list__img2"/>
            <p className="empty-list__text">{text}</p>
        </div>
    )
}