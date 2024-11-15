import "./styles.css"

export const MailItem : React.FC<{img:string, address:string, error:boolean}> = ({img, address, error})=>{

    return (
    <div className="main-item">
        <p className={`main-item__text ${error? "error": ""}`}>{address}</p>
        {error? <img src="" alt="error-tringle"/> : ""}
    </div>
    )
}