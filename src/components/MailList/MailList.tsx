import { MailItem } from '../MailItem/MailItem';
import './styles.css'


export const MailList:React.FC<{mails:string[], error:number}> = ({mails})=>{
    return(
        <div className='list'>
            {mails.map(m=>{
                return <MailItem address={m} error={false} />
            })}
        </div>
    );
}