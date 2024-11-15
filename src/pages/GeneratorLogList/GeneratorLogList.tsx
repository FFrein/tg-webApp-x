import "./styles.css"
import { EmptyList } from "../../components/EmptyList/EmptyList"

export const GeneratorLogList : React.FC<{}> = ()=>{
    return(
        <div>
            <EmptyList text={"You haven't uploaded any accounts yet"}/>
        </div>
    )
}