import "./styles.css"

export const ProxyItem : React.FC<{img:string, address:string, error:boolean}> = ({img, address, error})=>{

    return (
    <div className="proxy-item">
        <img src={img} className="proxy-item__flag"/>
        <p className={` ${error? "error": ""}`}>{address}</p>
        {error? <img src="" alt="error-tringle"/> : ""}
    </div>
    )
}