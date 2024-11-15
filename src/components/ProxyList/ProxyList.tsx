import { ProxyItem } from '../ProxyItem/ProxyItem';
import './styles.css'

type proxy = {
    address: string,
    image: string,
}

export const ProxyList:React.FC<{proxy:proxy[]}> = ({proxy})=>{
    return(
        <div className='list'>
            {proxy.map(p=>{
                return <ProxyItem img={p.image} address={p.address} error={false} />
            })}
        </div>
    );
}