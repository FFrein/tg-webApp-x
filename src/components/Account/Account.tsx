import "./styles.css"

export const Account : React.FC<{img:string, name:string}> = ({img, name})=>{
    return(
        <div className="account">
            <img className="account__img" src={img}/>
            <p className="account__text">{name}</p>
        </div>
    )
}